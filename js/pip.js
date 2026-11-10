/* 画中画字幕：监听播放器 audio，注入 PiP 按钮（白底黑字，Document PiP 优先，回退 Video PiP） */
(function () {
  "use strict";
  if (window.__pipInjected) return;
  window.__pipInjected = true;

  var FONT_RATIO = 20;       // 字号 = 宽度 / 20
  var LINE_RATIO = 3;        // canvas 高 = 宽 / 20 * 3
  var HEARTBEAT = 400;
  var subs = [];             // {t, text}
  var subIdx = -1;
  var canvas, ctx, video, stream, pipWin = null, timer = null, active = false;
  var btn = null;

  function log() { try { console.log.apply(console, ["[pip]"].concat([].slice.call(arguments))); } catch (e) {} }

  /* ---------- 字幕加载 ---------- */
  function parseLRC(text) {
    var out = [];
    var re = /\[(\d{1,2}):(\d{1,2})(?:[.:](\d{1,3}))?\]\s*(.*)/g, m;
    while ((m = re.exec(text))) {
      var t = parseInt(m[1], 10) * 60 + parseInt(m[2], 10) + (m[3] ? parseInt(m[3].padEnd(3, "0"), 10) / 1000 : 0);
      var s = (m[4] || "").trim();
      if (s) out.push({ t: t, text: s });
    }
    out.sort(function (a, b) { return a.t - b.t; });
    return out;
  }

  function parseVTT(text) {
    var out = [];
    var blocks = text.replace(/\r/g, "").split(/\n\n+/);
    for (var i = 0; i < blocks.length; i++) {
      var lines = blocks[i].split("\n");
      var timeLine = null;
      for (var j = 0; j < lines.length; j++) if (lines[j].indexOf("-->") > -1) { timeLine = lines[j]; break; }
      if (!timeLine) continue;
      var parts = timeLine.split("-->");
      var t = toSec(parts[0].trim());
      var txt = lines.slice(lines.indexOf(timeLine) + 1).join(" ").trim();
      if (txt) out.push({ t: t, text: txt });
    }
    out.sort(function (a, b) { return a.t - b.t; });
    return out;

    function toSec(s) {
      var m = s.match(/(\d+):(\d+):(\d+)[.,](\d+)/) || s.match(/(\d+):(\d+)[.,](\d+)/);
      if (!m) return 0;
      if (m.length === 5) return +m[1] * 3600 + +m[2] * 60 + +m[3] + +m[4] / 1000;
      return +m[1] * 60 + +m[2] + +m[3] / 1000;
    }
  }

  function loadSubsFor(audioSrc) {
    subs = [];
    try {
      var m = String(audioSrc || "").match(/RJ(\d{5,})\/(\d{3})\.(opus|mp3)/i);
      if (!m) return;
      var rj = "RJ" + m[1].padStart(8, "0");
      var idx = m[2];
      var base = location.pathname.indexOf("/asmr-site/") === 0 ? "/asmr-site/" : "/";
      var candidates = [
        base + "data/subs/" + rj + "/" + idx + ".lrc",
        base + "data/subs/" + rj + "/" + idx + ".vtt",
      ];
      (function tryNext(i) {
        if (i >= candidates.length) return;
        fetch(candidates[i], { cache: "no-store" }).then(function (r) {
          if (!r.ok) throw new Error("no");
          return r.text();
        }).then(function (t) {
          subs = candidates[i].slice(-3) === "lrc" ? parseLRC(t) : parseVTT(t);
          log("subs loaded:", subs.length, "from", candidates[i]);
        }).catch(function () { tryNext(i + 1); });
      })(0);
    } catch (e) { log("subs err", e.message); }
  }

  /* ---------- 绘制 ---------- */
  function ensureCanvas() {
    if (canvas) return;
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
  }

  function resize() {
    var w = Math.round((window.innerWidth || 480) / 1);
    var h = Math.round(w / FONT_RATIO * LINE_RATIO);
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
  }

  function currentText(t) {
    if (!subs.length) return "";
    var lo = 0, hi = subs.length - 1, best = -1;
    while (lo <= hi) {
      var mid = (lo + hi) >> 1;
      if (subs[mid].t <= t) { best = mid; lo = mid + 1; } else { hi = mid - 1; }
    }
    return best >= 0 ? subs[best].text : "";
  }

  function draw() {
    if (!canvas || !ctx) return;
    var W = canvas.width, H = canvas.height;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);

    var fs = Math.max(12, Math.round(W / FONT_RATIO));
    ctx.fillStyle = "#111111";
    ctx.textBaseline = "middle";
    ctx.font = "bold " + fs + "px -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif";

    var a = window.__pipAudio || document.querySelector("audio");
    var t = a ? a.currentTime : 0;
    var text = currentText(t);

    if (!text) {
      var name = (a && a.dataset && a.dataset.title) || (document.title || "").split("·")[0].trim();
      text = name || "正在播放";
    }

    // 自动换行（中文按字符）
    var maxW = W - fs * 1.2;
    var lines = [];
    var cur = "";
    for (var i = 0; i < text.length; i++) {
      var test = cur + text[i];
      if (ctx.measureText(test).width > maxW && cur) { lines.push(cur); cur = text[i]; }
      else cur = test;
      if (lines.length >= 2) break;
    }
    if (cur && lines.length < 2) lines.push(cur);

    var lineH = fs * 1.35;
    var startY = H / 2 - (lines.length - 1) * lineH / 2;
    for (var k = 0; k < lines.length; k++) {
      var lw = ctx.measureText(lines[k]).width;
      ctx.fillText(lines[k], (W - lw) / 2, startY + k * lineH);
    }
  }

  /* ---------- PiP ---------- */
  function makeVideo() {
    if (video) return video;
    ensureCanvas();
    resize();
    video = document.createElement("video");
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.style.cssText = "position:fixed;left:-9999px;top:0;width:2px;height:2px;opacity:0;pointer-events:none";
    document.body.appendChild(video);
    return video;
  }

  function rebuildStream() {
    makeVideo();
    if (stream) { try { stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {} }
    stream = canvas.captureStream(0);
    video.srcObject = stream;
    var p = video.play();
    if (p && p.catch) p.catch(function () {});
  }

  function pushFrame() {
    try {
      var track = stream && stream.getVideoTracks()[0];
      if (track && track.requestFrame) track.requestFrame();
    } catch (e) {}
  }

  function heartbeat() {
    draw();
    pushFrame();
  }

  function supportsDocumentPiP() {
    return !!(window.documentPictureInPicture && window.documentPictureInPicture.requestWindow);
  }

  async function start() {
    if (active) return;
    makeVideo();
    draw();
    rebuildStream();
    active = true;
    timer = setInterval(heartbeat, HEARTBEAT);
    heartbeat();

    try {
      if (supportsDocumentPiP()) {
        pipWin = await window.documentPictureInPicture.requestWindow({ width: 480, height: 96 });
        var c2 = pipWin.document.createElement("canvas");
        c2.width = canvas.width; c2.height = canvas.height;
        c2.style.cssText = "width:100%;height:100%;display:block;background:#fff";
        pipWin.document.body.style.cssText = "margin:0;background:#fff;overflow:hidden";
        pipWin.document.body.appendChild(c2);
        var ctx2 = c2.getContext("2d");
        timer && clearInterval(timer);
        timer = setInterval(function () {
          draw();
          try { ctx2.drawImage(canvas, 0, 0, c2.width, c2.height); } catch (e) {}
          pushFrame();
        }, HEARTBEAT);
        pipWin.addEventListener("pagehide", stop);
        log("document PiP started");
        return;
      }
      await video.requestPictureInPicture();
      log("video PiP started");
    } catch (e) {
      log("PiP failed:", e.message);
      stop();
    }
  }

  function stop() {
    active = false;
    if (timer) { clearInterval(timer); timer = null; }
    try { if (document.pictureInPictureElement) document.exitPictureInPicture(); } catch (e) {}
    try { if (pipWin) { pipWin.close(); pipWin = null; } } catch (e) {}
    try { if (stream) { stream.getTracks().forEach(function (t) { t.stop(); }); stream = null; } } catch (e) {}
  }

  /* ---------- UI ---------- */
  function makeButton() {
    if (btn) return btn;
    btn = document.createElement("button");
    btn.id = "__pipBtn";
    btn.type = "button";
    btn.title = "画中画字幕";
    btn.setAttribute("aria-label", "画中画字幕");
    btn.innerHTML = "&#9635;";
    btn.style.cssText = [
      "position:fixed", "right:14px", "bottom:calc(env(safe-area-inset-bottom,0px) + 120px)",
      "z-index:2147483000", "width:46px", "height:46px", "border-radius:50%",
      "border:none", "background:#027be3", "color:#fff", "font-size:20px",
      "box-shadow:0 4px 14px rgba(2,123,227,.4)", "cursor:pointer",
      "display:none", "align-items:center", "justify-content:center",
      "line-height:1", "padding:0"
    ].join(";");
    btn.addEventListener("click", function () { active ? stop() : start(); });
    document.body.appendChild(btn);
    return btn;
  }

  function sync() {
    var a = document.querySelector("audio");
    if (!a) { if (btn) btn.style.display = "none"; return; }
    window.__pipAudio = a;
    var b = makeButton();
    b.style.display = (a.currentSrc || a.src) ? "flex" : "none";
    if (a.dataset.pipBound) return;
    a.dataset.pipBound = "1";
    a.addEventListener("loadedmetadata", function () { loadSubsFor(a.currentSrc || a.src); });
    a.addEventListener("play", function () { loadSubsFor(a.currentSrc || a.src); });
    loadSubsFor(a.currentSrc || a.src);
  }

  function boot() {
    sync();
    setInterval(sync, 1200);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden && active) { rebuildStream(); heartbeat(); }
    });
    window.addEventListener("resize", function () { resize(); draw(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
