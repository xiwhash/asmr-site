/* 画中画字幕 + 控制条
 * 修复点：
 *  1) PiP 窗口内加播放/暂停/上一首/下一首按钮（闭包直接操作主窗口 audio）
 *  2) 字幕始终有内容（无字幕时显示曲目名 + 播放时间）
 *  3) 窗口 480x160：上方 canvas 字幕，下方 44px 控制条
 */
(function () {
  "use strict";
  if (window.__pipSubV3) return;
  window.__pipSubV3 = true;

  var FONT_RATIO = 20;
  var LINE_RATIO = 3;
  var HEARTBEAT = 400;
  var PIP_W = 480, PIP_H = 160, BAR_H = 44;

  var canvas = null, ctx = null, video = null, stream = null;
  var pipWin = null, timer = null, active = false;
  var subs = [], subsFor = "";
  var btn = null;
  var lastText = "", lastSize = { w: 0, h: 0 };

  var mainWin = window;

  function log() {
    try { console.log.apply(console, ["[pip3]"].concat([].slice.call(arguments))); } catch (e) {}
  }

  /* ---------- canvas ---------- */
  function makeCanvas(w, h) {
    if (!canvas) { canvas = document.createElement("canvas"); ctx = canvas.getContext("2d"); }
    w = Math.round(w); h = Math.round(h);
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
  }

  function defaultSize() {
    var w = 2 * (window.innerWidth || 480);
    return { w: w, h: Math.round(w / FONT_RATIO * LINE_RATIO) };
  }

  function draw(text) {
    if (!ctx || !canvas) return;
    var W = canvas.width, H = canvas.height;
    var s = W / FONT_RATIO;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(0, 0, W, H);
    ctx.font = 'bold ' + s + 'px "-apple-system","BlinkMacSystemFont","Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei",Helvetica,Arial,sans-serif';
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textBaseline = "alphabetic";
    text = String(text || "").trim();
    if (!text) return;

    if (text.length <= 18) {
      var mw = ctx.measureText(text).width;
      ctx.fillText(text, (W - mw) / 2, (H - s) / 2.2 + s);
    } else {
      var a = text.slice(0, 19), b = text.slice(19);
      var w1 = ctx.measureText(a).width;
      var y1 = (H - s) / 1.6;
      ctx.fillText(a, (W - w1) / 2, y1);
      var w2 = ctx.measureText(b).width;
      ctx.fillText(b, (W - w2) / 2, y1 + s + 0.15 * s);
    }
    lastText = text;
  }

  function pushFrame() {
    try {
      if (!stream) return;
      var t = stream.getVideoTracks()[0];
      if (t && t.requestFrame) t.requestFrame();
    } catch (e) {}
  }

  function prewarm() {
    var d = defaultSize();
    makeCanvas(d.w, d.h);
    draw("");
    if (!video) {
      video = document.createElement("video");
      video.muted = true; video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.style.cssText = "position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0;pointer-events:none";
      document.body.appendChild(video);
      stream = canvas.captureStream(0);
      video.srcObject = stream;
      var p = video.play(); if (p && p.catch) p.catch(function () {});
      log("prewarmed", d.w + "x" + d.h);
    }
  }

  /* ---------- 字幕 ---------- */
  function parseLRC(text) {
    var out = [], re = /\[(\d{1,2}):(\d{1,2})(?:[.:](\d{1,3}))?\]\s*(.*)/g, m;
    while ((m = re.exec(text))) {
      var t = parseInt(m[1], 10) * 60 + parseInt(m[2], 10) + (m[3] ? parseInt((m[3] + "00").slice(0, 3), 10) / 1000 : 0);
      var s = (m[4] || "").trim();
      if (s) out.push({ t: t, text: s });
    }
    out.sort(function (a, b) { return a.t - b.t; });
    return out;
  }

  function parseVTT(text) {
    var out = [], blocks = String(text).replace(/\r/g, "").split(/\n\n+/);
    for (var i = 0; i < blocks.length; i++) {
      var lines = blocks[i].split("\n"), idx = -1;
      for (var j = 0; j < lines.length; j++) if (lines[j].indexOf("-->") > -1) { idx = j; break; }
      if (idx < 0) continue;
      var t = 0, mm = lines[idx].match(/(?:(\d+):)?(\d+):(\d+)[.,](\d+)/);
      if (mm) t = (mm[1] ? +mm[1] * 3600 : 0) + +mm[2] * 60 + +mm[3] + +mm[4] / 1000;
      var txt = lines.slice(idx + 1).join(" ").trim();
      if (txt) out.push({ t: t, text: txt });
    }
    out.sort(function (a, b) { return a.t - b.t; });
    return out;
  }

  function loadSubs(src) {
    if (!src || subsFor === src) return;
    subsFor = src;
    subs = [];
    var m = String(src).match(/RJ(\d{5,})\/(\d{3})\.(opus|mp3|wav)/i);
    if (!m) return;
    var rj = "RJ" + m[1].padStart(8, "0");
    var idx = m[2];
    var base = location.pathname.indexOf("/asmr-site/") === 0 ? "/asmr-site/" : "/";
    var urls = [base + "data/subs/" + rj + "/" + idx + ".lrc", base + "data/subs/" + rj + "/" + idx + ".vtt"];
    (function next(i) {
      if (i >= urls.length) { log("no subs file for", rj, idx); return; }
      fetch(urls[i], { cache: "no-store" }).then(function (r) {
        if (!r.ok) throw new Error("404");
        return r.text();
      }).then(function (t) {
        subs = /\.lrc$/i.test(urls[i]) ? parseLRC(t) : parseVTT(t);
        log("subs loaded", subs.length);
      }).catch(function () { next(i + 1); });
    })(0);
  }

  function lyricAt(t) {
    if (!subs.length) return "";
    var lo = 0, hi = subs.length - 1, best = -1;
    while (lo <= hi) {
      var mid = (lo + hi) >> 1;
      if (subs[mid].t <= t) { best = mid; lo = mid + 1; } else { hi = mid - 1; }
    }
    if (best < 0) return "";
    if (t - subs[best].t > 6) return "";
    return subs[best].text;
  }

  /* ---------- 曲目名兜底 ---------- */
  function trackLabel() {
    try {
      var a = mainWin.document.querySelector("audio");
      var el = mainWin.document.querySelector(".audio-player .text-subtitle1, .audio-player .text-subtitle2, .playBar .ellipsis");
      var name = (el && (el.innerText || el.textContent) || "").trim();
      if (!name) {
        // 从播放器里的曲目行找
        var rows = mainWin.document.querySelectorAll(".q-item");
        for (var i = 0; i < rows.length; i++) {
          if (/\bplay_arrow\b|pause/.test(rows[i].className || "")) {
            name = (rows[i].innerText || "").split("\n").filter(Boolean).pop() || "";
            break;
          }
        }
      }
      if (name) return name;
      if (a && a.dataset && a.dataset.title) return a.dataset.title;
      return (mainWin.document.title || "").split("·")[0].trim();
    } catch (e) { return ""; }
  }

  function fmtTime(s) {
    if (!isFinite(s) || s < 0) s = 0;
    var m = Math.floor(s / 60), ss = Math.floor(s % 60);
    return m + ":" + (ss < 10 ? "0" : "") + ss;
  }

  /* ---------- 心跳 ---------- */
  function tick() {
    var a = mainWin.document.querySelector("audio");
    if (!a) return;
    var text = lyricAt(a.currentTime);
    if (!text) text = trackLabel() + "  " + fmtTime(a.currentTime) + " / " + (isFinite(a.duration) ? fmtTime(a.duration) : "--:--");
    if (text !== lastText) draw(text);
    pushFrame();
    syncPipButtons(a);
  }

  function startHeartbeat() { if (timer) clearInterval(timer); timer = setInterval(tick, HEARTBEAT); tick(); }
  function stopHeartbeat() { if (timer) { clearInterval(timer); timer = null; } }

  /* ---------- PiP 控制条 ---------- */
  var pipBtns = {};

  function makeBar(doc) {
    var bar = doc.createElement("div");
    bar.style.cssText = "height:" + BAR_H + "px;display:flex;align-items:center;justify-content:center;gap:14px;background:#f5f7fa;border-top:1px solid #e3e7ee;flex:0 0 auto;font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif";

    function iconBtn(svg, label, handler) {
      var b = doc.createElement("button");
      b.type = "button";
      b.title = label;
      b.setAttribute("aria-label", label);
      b.innerHTML = svg;
      b.style.cssText = "width:34px;height:34px;border:none;border-radius:8px;background:transparent;color:#027be3;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0";
      b.addEventListener("click", function (ev) { ev.stopPropagation(); handler(); });
      bar.appendChild(b);
      return b;
    }

    var SVG = {
      prev: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>',
      play: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
      pause: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>',
      next: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
    };

    pipBtns.prev = iconBtn(SVG.prev, "上一首", function () { clickMainIcon("skip_previous"); });
    pipBtns.play = iconBtn(SVG.play, "播放/暂停", function () { toggleMainAudio(); });
    pipBtns.next = iconBtn(SVG.next, "下一首", function () { clickMainIcon("skip_next"); });

    return bar;
  }

  function toggleMainAudio() {
    var a = mainWin.document.querySelector("audio");
    if (!a) return;
    if (a.paused) { var p = a.play(); if (p && p.catch) p.catch(function () {}); }
    else a.pause();
  }

  function clickMainIcon(name) {
    var doc = mainWin.document;
    var nodes = doc.querySelectorAll(".q-btn, button");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var ic = el.querySelector(".q-icon, i, .material-icons");
      var txt = ((ic && (ic.innerText || ic.textContent)) || el.innerText || "").trim();
      if (txt.indexOf(name) > -1) { el.click(); return true; }
    }
    // 兜底：用 audio 的相邻按钮
    return false;
  }

  function syncPipButtons(a) {
    if (!pipWin || !pipBtns.play) return;
    try {
      var want = a.paused ? "play" : "pause";
      if (pipBtns.play.dataset.state !== want) {
        pipBtns.play.dataset.state = want;
        pipBtns.play.innerHTML = want === "play"
          ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'
          : '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>';
      }
    } catch (e) {}
  }

  /* ---------- 开关 ---------- */
  function startPip(ev) {
    if (active) { stopPip(); return; }
    var a = mainWin.document.querySelector("audio");
    if (!a) { log("no audio"); return; }

    draw(lyricAt(a.currentTime) || trackLabel());

    if (window.documentPictureInPicture && window.documentPictureInPicture.requestWindow) {
      var req = documentPictureInPicture.requestWindow({ width: PIP_W, height: PIP_H });
      req.then(function (win) {
        pipWin = win;
        var doc = win.document;
        doc.body.style.cssText = "margin:0;padding:0;background:#fff;overflow:hidden";
        doc.body.innerHTML = "";

        // 上：canvas
        var wrap = doc.createElement("div");
        wrap.style.cssText = "flex:1 1 auto;min-height:0;display:flex;align-items:center;justify-content:center;background:#fff";
        wrap.appendChild(canvas);
        canvas.style.cssText = "width:100%;height:100%;object-fit:contain;display:block;background:#fff";
        doc.body.appendChild(wrap);

        // 下：控制条
        doc.body.appendChild(makeBar(doc));
        doc.body.style.display = "flex";
        doc.body.style.flexDirection = "column";

        function fit() {
          try {
            var w = win.innerWidth, h = win.innerHeight - BAR_H;
            if (!w || h <= 0) return;
            if (Math.abs(lastSize.w - w) < 4 && Math.abs(lastSize.h - h) < 4) return;
            lastSize = { w: w, h: h };
            makeCanvas(2 * w, 2 * h);
            draw(lastText);
            pushFrame();
          } catch (e) {}
        }
        fit();
        win.addEventListener("resize", fit);
        win.addEventListener("pagehide", function () {
          active = false; pipWin = null; stopHeartbeat();
          try { if (canvas.parentNode !== document.body) document.body.appendChild(canvas); } catch (e) {}
          canvas.style.cssText = "position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0";
          var d = defaultSize(); makeCanvas(d.w, d.h); draw("");
          log("pip closed");
        });

        active = true;
        startHeartbeat();
        log("document PiP started with controls");
      }).catch(function (e) {
        log("document PiP failed:", e.message);
        try {
          if (video && video.requestPictureInPicture) {
            video.play();
            video.requestPictureInPicture().then(function () { active = true; startHeartbeat(); log("video PiP"); })
              .catch(function (e2) { log("video PiP failed", e2.message); });
          }
        } catch (e3) { log("fallback err", e3.message); }
      });
      return;
    }

    try {
      if (video && video.requestPictureInPicture) {
        video.play();
        video.requestPictureInPicture().then(function () { active = true; startHeartbeat(); log("video PiP"); })
          .catch(function (e) { log("video PiP failed", e.message); });
      }
    } catch (e) { log("no PiP", e.message); }
  }

  function stopPip() {
    active = false; stopHeartbeat();
    try { if (pipWin && !pipWin.closed) pipWin.close(); } catch (e) {}
    try { if (document.pictureInPictureElement) document.exitPictureInPicture(); } catch (e) {}
    pipWin = null;
    try {
      if (canvas && canvas.parentNode !== document.body) document.body.appendChild(canvas);
      canvas.style.cssText = "position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0";
      var d = defaultSize(); makeCanvas(d.w, d.h); draw("");
    } catch (e) {}
  }

  /* ---------- 按钮 ---------- */
  function ensureBtn() {
    if (btn) return btn;
    btn = document.createElement("button");
    btn.id = "__pipSubBtn";
    btn.type = "button";
    btn.title = "画中画字幕";
    btn.setAttribute("aria-label", "画中画字幕");
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><rect x="12" y="12" width="7" height="5" rx="1" fill="currentColor" stroke="none"/></svg>';
    btn.style.cssText = [
      "position:fixed", "top:calc(env(safe-area-inset-top,0px) + 64px)", "right:10px",
      "z-index:2147483000", "width:36px", "height:36px", "border-radius:10px",
      "border:none", "background:rgba(255,255,255,.92)", "color:#027be3",
      "box-shadow:0 2px 8px rgba(0,0,0,.16)", "cursor:pointer",
      "display:none", "align-items:center", "justify-content:center", "padding:0",
      "backdrop-filter:blur(6px)",
    ].join(";");
    btn.addEventListener("click", startPip, { passive: true });
    document.body.appendChild(btn);
    return btn;
  }

  function sync() {
    var a = document.querySelector("audio");
    var b = ensureBtn();
    var playing = !!(a && !a.paused && (a.currentSrc || a.src));
    var panel = document.querySelector(".player-layer-root .playBar, .playBar, .audio-player");
    var panelVisible = false;
    if (panel) {
      var cs = getComputedStyle(panel);
      panelVisible = cs.display !== "none" && cs.visibility !== "hidden" && cs.opacity !== "0";
    }
    b.style.display = (playing && panelVisible && !active) ? "flex" : "none";
    if (playing && a) loadSubs(a.currentSrc || a.src);
    if (a && !a.dataset.pipTitle) {
      a.dataset.pipTitle = "1";
      a.addEventListener("loadedmetadata", function () { draw(lyricAt(a.currentTime) || trackLabel()); });
    }
  }

  function boot() {
    prewarm();
    ensureBtn().style.display = "none";
    setInterval(sync, 800);
    sync();
    window.addEventListener("resize", function () {
      if (!active) { var d = defaultSize(); makeCanvas(d.w, d.h); draw(lastText); }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else setTimeout(boot, 0);
})();
