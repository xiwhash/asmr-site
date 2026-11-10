/* 画中画字幕 —— 与参考站/Kikoeru 原生一致：
 *  canvas(20:3 白底黑字) -> captureStream(0) -> video -> requestPictureInPicture（原生小窗）
 *  不支持 Video PiP 时回退 Document PiP（480x120，同样只有字幕）
 *  按钮只在播放时出现，不常驻
 */
(function () {
  "use strict";
  if (window.__pipSimple) return;
  window.__pipSimple = true;

  var FONT_RATIO = 20, LINE_RATIO = 3, HEARTBEAT = 400;
  var canvas = null, ctx = null, video = null, stream = null;
  var docWin = null, timer = null, active = false;
  var subs = [], subsFor = "", lastText = "";
  var btn = null;

  function log() { try { console.log.apply(console, ["[pip]"].concat([].slice.call(arguments))); } catch (e) {} }

  function fmt(t) {
    if (!isFinite(t)) t = 0;
    var m = Math.floor(t / 60), s = Math.floor(t % 60);
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
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
    var W = canvas.width, H = canvas.height, s = W / FONT_RATIO;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(0, 0, W, H);
    ctx.font = 'bold ' + s + 'px "-apple-system","BlinkMacSystemFont","Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei",Helvetica,Arial,sans-serif';
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textBaseline = "alphabetic";
    text = String(text || "").trim();
    if (!text) return;
    if (text.length <= 18) {
      var w1 = ctx.measureText(text).width;
      ctx.fillText(text, (W - w1) / 2, (H - s) / 2.2 + s);
    } else {
      var a = text.slice(0, 19), b = text.slice(19);
      var wa = ctx.measureText(a).width;
      var y1 = (H - s) / 1.6;
      ctx.fillText(a, (W - wa) / 2, y1);
      var wb = ctx.measureText(b).width;
      ctx.fillText(b, (W - wb) / 2, y1 + s + 0.15 * s);
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
      video.muted = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("controls", "controls");   // 原生小窗里显示播放控件
      video.style.cssText = "position:fixed;left:-9999px;top:0;width:2px;height:2px;opacity:0;pointer-events:none";
      document.body.appendChild(video);
      stream = canvas.captureStream(0);
      video.srcObject = stream;
      var p = video.play(); if (p && p.catch) p.catch(function () {});
      video.addEventListener("enterpictureinpicture", function (ev) {
        active = true;
        try {
          var pw = ev.pictureInPictureWindow;
          pw.addEventListener("resize", function () {
            var w = pw.width, h = pw.height;
            if (!w || !h) return;
            makeCanvas(2 * w, 2 * h);
            draw(lastText);
            pushFrame();
          });
        } catch (e) {}
        log("video PiP entered");
      });
      video.addEventListener("leavepictureinpicture", function () {
        active = false;
        stopHeartbeat();
        var d2 = defaultSize();
        makeCanvas(d2.w, d2.h);
        draw("");
        log("video PiP left");
      });
      log("prewarmed", d.w + "x" + d.h);
    }
  }

  /* ---------- 字幕 ---------- */
  function parseLRC(text) {
    var out = [], re = /\[(\d{1,2}):(\d{1,2})(?:[.:](\d{1,3}))?\]\s*(.*)/g, m;
    while ((m = re.exec(text))) {
      var t = parseInt(m[1], 10) * 60 + parseInt(m[2], 10) + (m[3] ? parseInt((m[3] + "00").slice(0, 3), 10) / 1000 : 0);
      var s = (m[4] || "").trim().replace(/^(\[\d{1,2}:\d{1,2}(?:[.:]\d{1,3})?\]\s*)+/, "");
      if (s) out.push({ t: t, text: s });
    }
    out.sort(function (a, b) { return a.t - b.t; });
    return out;
  }

  function parseVTT(text) {
    var out = [], blocks = String(text).replace(/\r/g, "").split(/\n\n+/);
    for (var i = 0; i < blocks.length; i++) {
      var ls = blocks[i].split("\n"), k = -1;
      for (var j = 0; j < ls.length; j++) if (ls[j].indexOf("-->") > -1) { k = j; break; }
      if (k < 0) continue;
      var t = 0, mm = ls[k].match(/(?:(\d+):)?(\d+):(\d+)[.,](\d+)/);
      if (mm) t = (mm[1] ? +mm[1] * 3600 : 0) + +mm[2] * 60 + +mm[3] + +mm[4] / 1000;
      var txt = ls.slice(k + 1).join(" ").trim();
      if (txt) out.push({ t: t, text: txt });
    }
    out.sort(function (a, b) { return a.t - b.t; });
    return out;
  }

  function loadSubs(src) {
    if (!src || subsFor === src) return;
    subsFor = src; subs = [];
    var m = String(src).match(/RJ(\d{5,})\/(\d{3})\.(opus|mp3|wav)/i);
    if (!m) return;
    var rj = "RJ" + m[1].padStart(8, "0"), idx = m[2];
    var base = location.pathname.indexOf("/asmr-site/") === 0 ? "/asmr-site/" : "/";
    var urls = [base + "data/subs/" + rj + "/" + idx + ".lrc", base + "data/subs/" + rj + "/" + idx + ".vtt"];
    (function next(i) {
      if (i >= urls.length) return;
      fetch(urls[i], { cache: "no-store" }).then(function (r) {
        if (!r.ok) throw new Error("404");
        return r.text();
      }).then(function (t) {
        subs = /\.lrc$/i.test(urls[i]) ? parseLRC(t) : parseVTT(t);
        log("subs", subs.length);
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
    if (t - subs[best].t > 8) return "";
    return subs[best].text;
  }

  function trackName() {
    try {
      var el = document.querySelector(".audio-player .text-subtitle1, .audio-player .text-subtitle2");
      var n = (el && (el.innerText || "")).trim();
      if (n) return n;
      var a = document.querySelector("audio");
      return (a && a.dataset && a.dataset.title) || (document.title || "").split("·")[0].trim();
    } catch (e) { return ""; }
  }

  function tick() {
    var a = document.querySelector("audio");
    if (!a) return;
    var text = lyricAt(a.currentTime);
    if (!text) {
      var nm = trackName();
      text = nm ? (nm + "  " + fmt(a.currentTime) + "/" + fmt(a.duration)) : "";
    }
    if (text !== lastText) draw(text);
    pushFrame();
  }

  function startHeartbeat() { if (timer) clearInterval(timer); timer = setInterval(tick, HEARTBEAT); tick(); }
  function stopHeartbeat() { if (timer) { clearInterval(timer); timer = null; } }

  /* ---------- 开关 ---------- */
  function openPip(ev) {
    if (active) { closePip(); return; }
    var a = document.querySelector("audio");
    if (!a) { log("no audio"); return; }

    draw(lyricAt(a.currentTime) || trackName());

    // 1) 优先原生 Video PiP（与参考站一致）
    try {
      if (video && typeof video.requestPictureInPicture === "function" && document.pictureInPictureEnabled) {
        var pr = video.play();
        var go = function () {
          video.requestPictureInPicture().then(function () {
            active = true;
            startHeartbeat();
            log("video PiP opened");
          }).catch(function (e) {
            log("video PiP failed:", e.message);
            fallbackDocPip();
          });
        };
        if (pr && pr.then) pr.then(go).catch(go); else go();
        return;
      }
    } catch (e) { log("video PiP err", e.message); }

    fallbackDocPip();

    function fallbackDocPip() {
      if (!(window.documentPictureInPicture && window.documentPictureInPicture.requestWindow)) {
        log("no PiP support");
        return;
      }
      documentPictureInPicture.requestWindow({ width: 480, height: 120 }).then(function (win) {
        docWin = win;
        win.document.body.style.cssText = "margin:0;padding:0;background:#fff;overflow:hidden;display:flex;align-items:center;justify-content:center";
        win.document.body.appendChild(canvas);
        canvas.style.cssText = "width:100%;height:100%;object-fit:contain;display:block;background:#fff";
        active = true;
        startHeartbeat();
        win.addEventListener("pagehide", function () {
          active = false; docWin = null; stopHeartbeat();
          try { if (canvas.parentNode !== document.body) document.body.appendChild(canvas); } catch (e) {}
          canvas.style.cssText = "position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0";
          var d = defaultSize(); makeCanvas(d.w, d.h); draw("");
          log("doc PiP closed");
        });
        log("document PiP opened");
      }).catch(function (e) {
        log("document PiP failed:", e.message);
      });
    }
  }

  function closePip() {
    active = false;
    stopHeartbeat();
    try { if (document.pictureInPictureElement) document.exitPictureInPicture(); } catch (e) {}
    try { if (docWin && !docWin.closed) docWin.close(); } catch (e) {}
    docWin = null;
    try {
      if (canvas && canvas.parentNode !== document.body) document.body.appendChild(canvas);
      canvas.style.cssText = "position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0";
      var d = defaultSize(); makeCanvas(d.w, d.h); draw("");
    } catch (e) {}
  }

  function pipOpen() {
    try {
      if (document.pictureInPictureElement) return true;
      if (docWin && !docWin.closed) return true;
    } catch (e) {}
    return false;
  }

  /* ---------- 按钮 ---------- */
  function ensureBtn() {
    if (btn) return btn;
    btn = document.createElement("button");
    btn.id = "__pipBtn";
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
    btn.addEventListener("click", openPip, { passive: true });
    document.body.appendChild(btn);
    return btn;
  }

  function sync() {
    var a = document.querySelector("audio");
    var b = ensureBtn();
    if (active && !pipOpen()) { active = false; stopHeartbeat(); }

    var playing = !!(a && !a.paused && (a.currentSrc || a.src));
    var panel = document.querySelector(".audio-player");
    var vis = false;
    if (panel) {
      var cs = getComputedStyle(panel);
      vis = cs.display !== "none" && cs.visibility !== "hidden";
    }
    b.style.display = (playing && vis) ? "flex" : "none";
    if (active) { b.style.background = "#027be3"; b.style.color = "#fff"; }
    else { b.style.background = "rgba(255,255,255,.92)"; b.style.color = "#027be3"; }

    if (playing && a) loadSubs(a.currentSrc || a.src);
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
