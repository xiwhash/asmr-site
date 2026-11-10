/* 画中画字幕 —— 严格对齐 asmr.one 的 PiPSubtitle 实现
 * 关键点：
 *  1) canvas/video/stream 在页面加载时预创建（不能在点击回调里创建，否则丢失 user activation）
 *  2) 点击时函数体第一件事就是 requestWindow()
 *  3) canvas 尺寸 = 2*innerWidth x (宽/20*3)，字号 = 宽/20，≤18字单行 / >18字拆两行（前19字+余下）
 */
(function () {
  "use strict";
  if (window.__pipSubV2) return;
  window.__pipSubV2 = true;

  var FONT_RATIO = 20;
  var LINE_RATIO = 3;
  var HEARTBEAT = 400;

  var canvas = null, ctx = null, video = null, stream = null;
  var pipWin = null, timer = null, active = false;
  var subs = [], subsFor = "";
  var btn = null;
  var lastText = "";
  var lastSize = { w: 0, h: 0 };

  function log() {
    try { console.log.apply(console, ["[pip2]"].concat([].slice.call(arguments))); } catch (e) {}
  }

  /* ---------- canvas ---------- */
  function makeCanvas(w, h) {
    if (!canvas) {
      canvas = document.createElement("canvas");
      ctx = canvas.getContext("2d");
    }
    w = Math.round(w); h = Math.round(h);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    return canvas;
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
    ctx.font = 'bold ' + s + 'px "-apple-system","BlinkMacSystemFont","Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif';
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textBaseline = "alphabetic";

    text = String(text || "").trim();
    if (!text) return;

    if (text.length <= 18) {
      var mw = ctx.measureText(text).width;
      var x = (W - mw) / 2;
      var y = (H - s) / 2.2 + s;
      ctx.fillText(text, x, y);
    } else {
      var a = text.slice(0, 19), b = text.slice(19);
      var w1 = ctx.measureText(a).width;
      var x1 = (W - w1) / 2;
      var y1 = (H - s) / 1.6;
      ctx.fillText(a, x1, y1);
      var w2 = ctx.measureText(b).width;
      var x2 = (W - w2) / 2;
      var y2 = y1 + s + 0.15 * s;
      ctx.fillText(b, x2, y2);
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

  /* ---------- 预创建（页面加载时，不涉及 user activation） ---------- */
  function prewarm() {
    var d = defaultSize();
    makeCanvas(d.w, d.h);
    draw("");
    if (!video) {
      video = document.createElement("video");
      video.muted = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.style.cssText = "position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0;pointer-events:none";
      document.body.appendChild(video);
      stream = canvas.captureStream(0);
      video.srcObject = stream;
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
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
      var t = 0;
      var mm = lines[idx].match(/(?:(\d+):)?(\d+):(\d+)[.,](\d+)/);
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
    if (!m) { log("no rj in src"); return; }
    var rj = "RJ" + m[1].padStart(8, "0");
    var idx = m[2];
    var base = location.pathname.indexOf("/asmr-site/") === 0 ? "/asmr-site/" : "/";
    var urls = [
      base + "data/subs/" + rj + "/" + idx + ".lrc",
      base + "data/subs/" + rj + "/" + idx + ".vtt",
    ];
    (function next(i) {
      if (i >= urls.length) { log("no subs for", rj, idx); return; }
      fetch(urls[i], { cache: "no-store" }).then(function (r) {
        if (!r.ok) throw new Error("404");
        return r.text();
      }).then(function (t) {
        subs = /\.lrc$/i.test(urls[i]) ? parseLRC(t) : parseVTT(t);
        log("subs", subs.length, "from", urls[i]);
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
    // 超过 6 秒的旧字幕不再显示
    if (t - subs[best].t > 6) return "";
    return subs[best].text;
  }

  /* ---------- 心跳 ---------- */
  function tick() {
    var a = document.querySelector("audio");
    var t = a ? a.currentTime : 0;
    var text = lyricAt(t);
    if (!text) {
      // 没字幕时显示曲目名（只显示一次，避免闪烁）
      if (!a) text = "";
      else if (!subs.length) {
        var el = document.querySelector(".audio-player .text-subtitle1, .playBar .ellipsis, [class*='track-title']");
        text = (el && el.innerText || "").trim();
      }
    }
    if (text !== lastText) draw(text);
    pushFrame();
  }

  function startHeartbeat() {
    if (timer) clearInterval(timer);
    timer = setInterval(tick, HEARTBEAT);
    tick();
  }

  function stopHeartbeat() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  /* ---------- PiP 开关 ---------- */
  function startPip(ev) {
    if (active) { stopPip(); return; }

    var a = document.querySelector("audio");
    if (!a) { log("no audio"); return; }

    // 点击前先确保画好一帧
    var t = a.currentTime;
    var txt = lyricAt(t);
    if (!txt && !subs.length) {
      var el = document.querySelector(".audio-player .text-subtitle1, .playBar .ellipsis");
      txt = (el && el.innerText || "").trim();
    }
    draw(txt);

    // ⚠️ 同步调用 requestWindow —— 前面不能有任何 await
    if (window.documentPictureInPicture && window.documentPictureInPicture.requestWindow) {
      var req = documentPictureInPicture.requestWindow({ width: 480, height: 120 });
      req.then(function (win) {
        pipWin = win;
        win.document.body.style.cssText = "margin:0;padding:0;background:#fff;overflow:hidden";
        win.document.body.appendChild(canvas);
        canvas.style.cssText = "width:100%;height:100%;object-fit:contain;display:block;background:#fff";

        function fit() {
          try {
            var w = win.innerWidth, h = win.innerHeight;
            if (!w || !h) return;
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
          active = false;
          pipWin = null;
          stopHeartbeat();
          if (canvas && canvas.parentNode !== document.body) {
            try { document.body.appendChild(canvas); } catch (e) {}
          }
          canvas.style.cssText = "position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0";
          var d = defaultSize();
          makeCanvas(d.w, d.h);
          draw("");
          log("document pip closed");
        });

        active = true;
        startHeartbeat();
        log("document PiP started");
      }).catch(function (e) {
        log("document PiP failed:", e.message);
        // 回退到 Video PiP
        try {
          if (video && video.requestPictureInPicture) {
            video.play();
            video.requestPictureInPicture().then(function () {
              active = true;
              startHeartbeat();
              log("video PiP started (fallback)");
            }).catch(function (e2) { log("video PiP failed:", e2.message); });
          }
        } catch (e3) { log("fallback err", e3.message); }
      });
      return;
    }

    // 没有 Document PiP 的浏览器
    try {
      if (video && video.requestPictureInPicture) {
        video.play();
        video.requestPictureInPicture().then(function () {
          active = true;
          startHeartbeat();
          log("video PiP started");
        }).catch(function (e) { log("video PiP failed:", e.message); });
      }
    } catch (e) { log("no PiP support", e.message); }
  }

  function stopPip() {
    active = false;
    stopHeartbeat();
    try { if (pipWin && !pipWin.closed) pipWin.close(); } catch (e) {}
    try { if (document.pictureInPictureElement) document.exitPictureInPicture(); } catch (e) {}
    pipWin = null;
    try {
      if (canvas && canvas.parentNode !== document.body) document.body.appendChild(canvas);
      canvas.style.cssText = "position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0";
      var d = defaultSize();
      makeCanvas(d.w, d.h);
      draw("");
    } catch (e) {}
  }

  /* ---------- 按钮：只在播放时出现，放在右上角小图标，不遮挡内容 ---------- */
  function ensureBtn() {
    if (btn) return btn;
    btn = document.createElement("button");
    btn.id = "__pipSubBtn";
    btn.type = "button";
    btn.title = "画中画字幕";
    btn.setAttribute("aria-label", "画中画字幕");
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><rect x="12" y="12" width="7" height="5" rx="1" fill="currentColor" stroke="none"/></svg>';
    btn.style.cssText = [
      "position:fixed",
      "top:calc(env(safe-area-inset-top,0px) + 64px)",
      "right:10px",
      "z-index:2147483000",
      "width:36px","height:36px",
      "border-radius:10px",
      "border:none",
      "background:rgba(255,255,255,.92)",
      "color:#027be3",
      "box-shadow:0 2px 8px rgba(0,0,0,.16)",
      "cursor:pointer",
      "display:none",
      "align-items:center","justify-content:center",
      "padding:0",
      "backdrop-filter:blur(6px)",
    ].join(";");
    // 关键：click 里第一件事就是 startPip -> requestWindow
    btn.addEventListener("click", startPip, { passive: true });
    document.body.appendChild(btn);
    return btn;
  }

  function sync() {
    var a = document.querySelector("audio");
    var b = ensureBtn();

    var playing = !!(a && !a.paused && (a.currentSrc || a.src));
    // 播放器可见性：Kikoeru 的播放条/面板
    var panel = document.querySelector(".player-layer-root .playBar, .playBar, .audio-player");
    var panelVisible = false;
    if (panel) {
      var cs = getComputedStyle(panel);
      panelVisible = cs.display !== "none" && cs.visibility !== "hidden" && cs.opacity !== "0";
    }

    var show = playing && panelVisible && !active;
    b.style.display = show ? "flex" : "none";

    if (playing && a) loadSubs(a.currentSrc || a.src);
  }

  /* ---------- 启动 ---------- */
  function boot() {
    prewarm();
    var b = ensureBtn();
    b.style.display = "none";
    setInterval(sync, 800);
    sync();
    window.addEventListener("resize", function () {
      if (!active) { var d = defaultSize(); makeCanvas(d.w, d.h); draw(lastText); }
    });
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden && active) { pushFrame(); }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else setTimeout(boot, 0);
})();
