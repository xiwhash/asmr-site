/* 播放器内滚动歌词：在封面下方注入歌词区，随播放高亮当前行
 * 数据源：data/subs/<RJ>/<idx>.lrc（与 PiP 共用）
 */
(function () {
  "use strict";
  if (window.__lyricLayer) return;
  window.__lyricLayer = true;

  var subs = [], subsFor = "", idxCur = -1;
  var host = null, ul = null, lines = [];
  var VISIBLE = 5;

  function log() { try { console.log.apply(console, ["[lyric]"].concat([].slice.call(arguments))); } catch (e) {} }

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
    subsFor = src; subs = []; idxCur = -1;
    var m = String(src).match(/RJ(\d{5,})\/(\d{3})\.(opus|mp3|wav)/i);
    if (!m) return;
    var rj = "RJ" + m[1].padStart(8, "0"), idx = m[2];
    var base = location.pathname.indexOf("/asmr-site/") === 0 ? "/asmr-site/" : "/";
    var urls = [base + "data/subs/" + rj + "/" + idx + ".lrc", base + "data/subs/" + rj + "/" + idx + ".vtt"];
    (function next(i) {
      if (i >= urls.length) { log("no subs", rj, idx); return; }
      fetch(urls[i], { cache: "no-store" }).then(function (r) {
        if (!r.ok) throw new Error("404");
        return r.text();
      }).then(function (t) {
        subs = /\.lrc$/i.test(urls[i]) ? parseLRC(t) : parseVTT(t);
        log("subs", subs.length);
        render(true);
      }).catch(function () { next(i + 1); });
    })(0);
  }

  function findIdx(t) {
    if (!subs.length) return -1;
    var lo = 0, hi = subs.length - 1, best = -1;
    while (lo <= hi) {
      var mid = (lo + hi) >> 1;
      if (subs[mid].t <= t) { best = mid; lo = mid + 1; } else { hi = mid - 1; }
    }
    return best;
  }

  /* ---------- 注入容器 ---------- */
  function ensureHost() {
    var player = document.querySelector(".audio-player");
    if (!player) return null;
    if (host && player.contains(host)) return host;

    host = document.createElement("div");
    host.id = "__lyricLayer";
    host.style.cssText = [
      "display:flex", "flex-direction:column", "align-items:center", "justify-content:center",
      "padding:10px 14px", "min-height:160px", "max-height:34vh", "overflow:hidden",
      "box-sizing:border-box", "gap:6px",
    ].join(";");

    ul = document.createElement("div");
    ul.style.cssText = "display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;width:100%;transition:transform .25s ease";
    host.appendChild(ul);
    lines = [];
    for (var i = 0; i < VISIBLE; i++) {
      var d = document.createElement("div");
      d.style.cssText = [
        "font-size:15px", "line-height:1.4", "text-align:center", "width:100%",
        "color:rgba(255,255,255,.55)", "text-shadow:0 1px 3px rgba(0,0,0,.5)",
        "transition:all .25s ease", "white-space:nowrap", "overflow:hidden",
        "text-overflow:ellipsis", "cursor:pointer",
      ].join(";");
      ul.appendChild(d);
      lines.push(d);
    }

    // 插到封面之后、按钮行之前
    var art = player.querySelector(".albumart");
    if (art && art.parentNode === player) {
      player.insertBefore(host, art.nextSibling);
    } else {
      player.appendChild(host);
    }
    log("lyric layer injected");
    return host;
  }

  /* ---------- 渲染 ---------- */
  function render(reset) {
    if (!ensureHost()) return;
    if (!subs.length) {
      for (var k = 0; k < VISIBLE; k++) { lines[k].textContent = ""; lines[k].style.opacity = "0"; }
      host.style.minHeight = "0px";
      return;
    }
    host.style.minHeight = "160px";

    var center = Math.floor(VISIBLE / 2);
    for (var i = 0; i < VISIBLE; i++) {
      var si = idxCur - center + i;
      var el = lines[i];
      if (si < 0 || si >= subs.length) { el.textContent = ""; el.style.opacity = "0"; continue; }
      el.textContent = subs[si].text;
      el.style.opacity = "1";
      el.dataset.t = subs[si].t;
      if (si === idxCur) {
        el.style.color = "#ffffff";
        el.style.fontSize = "20px";
        el.style.fontWeight = "700";
      } else if (Math.abs(si - idxCur) === 1) {
        el.style.color = "rgba(255,255,255,.75)";
        el.style.fontSize = "16px";
        el.style.fontWeight = "500";
      } else {
        el.style.color = "rgba(255,255,255,.45)";
        el.style.fontSize = "14px";
        el.style.fontWeight = "400";
      }
    }
  }

  function tick() {
    var a = document.querySelector("audio");
    if (!a) return;
    var hostEl = ensureHost();
    if (!hostEl) return;
    if (!subs.length && (a.currentSrc || a.src)) loadSubs(a.currentSrc || a.src);
    if (!subs.length) return;
    var i = findIdx(a.currentTime);
    if (i !== idxCur) { idxCur = i; render(false); }
  }

  function boot() {
    setInterval(tick, 350);
    tick();
    // 点击歌词跳转
    document.addEventListener("click", function (ev) {
      var t = ev.target;
      if (!t || !t.dataset || t.dataset.t === undefined) return;
      var a = document.querySelector("audio");
      if (!a) return;
      a.currentTime = parseFloat(t.dataset.t) || 0;
      ev.stopPropagation();
    }, true);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else setTimeout(boot, 0);
})();
