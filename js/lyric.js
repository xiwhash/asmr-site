/* 全屏字幕列表（对齐参考站）：
 *  - 覆盖在封面区域，半透明
 *  - 左侧时间戳 + 右侧文本
 *  - 当前行加粗放大，自动滚到中间
 *  - 点击任意行跳转
 */
(function () {
  "use strict";
  if (window.__lyricList) return;
  window.__lyricList = true;

  var subs = [], subsFor = "", curIdx = -1;
  var panel = null, scroller = null, rows = [];
  var userScrolling = false, scrollTimer = null;

  function log() { try { console.log.apply(console, ["[lyric]"].concat([].slice.call(arguments))); } catch (e) {} }

  /* ---------- 解析 ---------- */
  function parseLRC(text) {
    var out = [], re = /\[(\d{1,2}):(\d{1,2})(?:[.:](\d{1,3}))?\]\s*(.*)/g, m;
    while ((m = re.exec(text))) {
      var t = parseInt(m[1], 10) * 60 + parseInt(m[2], 10) + (m[3] ? parseInt((m[3] + "00").slice(0, 3), 10) / 1000 : 0);
      var s = (m[4] || "").trim();
      s = s.replace(/^(\[\d{1,2}:\d{1,2}(?:[.:]\d{1,3})?\]\s*)+/, "");
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

  function fmt(t) {
    if (!isFinite(t)) t = 0;
    var m = Math.floor(t / 60), s = Math.floor(t % 60);
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function loadSubs(src) {
    if (!src || subsFor === src) return;
    subsFor = src; subs = []; curIdx = -1;
    var m = String(src).match(/RJ(\d{5,})\/(\d{3})\.(opus|mp3|wav)/i);
    if (!m) return;
    var rj = "RJ" + m[1].padStart(8, "0"), idx = m[2];
    var base = location.pathname.indexOf("/asmr-site/") === 0 ? "/asmr-site/" : "/";
    var urls = [base + "data/subs/" + rj + "/" + idx + ".lrc", base + "data/subs/" + rj + "/" + idx + ".vtt"];
    (function next(i) {
      if (i >= urls.length) { log("no subs", rj, idx); build(); return; }
      fetch(urls[i], { cache: "no-store" }).then(function (r) {
        if (!r.ok) throw new Error("404");
        return r.text();
      }).then(function (t) {
        subs = /\.lrc$/i.test(urls[i]) ? parseLRC(t) : parseVTT(t);
        log("subs", subs.length);
        build();
      }).catch(function () { next(i + 1); });
    })(0);
  }

  /* ---------- 面板 ---------- */
  function ensurePanel() {
    var player = document.querySelector(".audio-player");
    if (!player) return null;

    if (panel && player.contains(panel)) return panel;

    panel = document.createElement("div");
    panel.id = "__lyricList";
    panel.style.cssText = [
      "position:absolute", "left:0", "right:0", "top:0", "bottom:0",
      "display:none", "flex-direction:column",
      "background:rgba(20,22,28,.42)", "backdrop-filter:blur(10px)",
      "-webkit-backdrop-filter:blur(10px)",
      "overflow:hidden", "z-index:2",
    ].join(";");

    scroller = document.createElement("div");
    scroller.style.cssText = [
      "flex:1 1 auto", "overflow-y:auto", "overflow-x:hidden",
      "padding:16px 14px 40vh 14px", "box-sizing:border-box",
      "-webkit-overflow-scrolling:touch", "scrollbar-width:none",
    ].join(";");
    scroller.addEventListener("scroll", function () {
      userScrolling = true;
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () { userScrolling = false; }, 2500);
    }, { passive: true });

    panel.appendChild(scroller);

    // 面板要覆盖封面区：父容器需 relative
    var art = player.querySelector(".albumart") || player;
    art.style.position = "relative";
    art.appendChild(panel);
    log("panel injected into", art.className || "player");
    return panel;
  }

  function build() {
    if (!ensurePanel()) return;
    scroller.innerHTML = "";
    rows = [];

    if (!subs.length) {
      panel.style.display = "none";
      return;
    }

    var frag = document.createDocumentFragment();
    for (var i = 0; i < subs.length; i++) {
      var row = document.createElement("div");
      row.style.cssText = [
        "display:flex", "gap:12px", "align-items:flex-start",
        "padding:9px 4px", "border-radius:8px", "cursor:pointer",
        "transition:background .15s, color .15s",
      ].join(";");
      row.dataset.t = subs[i].t;
      row.dataset.i = i;

      var ts = document.createElement("span");
      ts.textContent = fmt(subs[i].t);
      ts.style.cssText = [
        "flex:0 0 auto", "min-width:46px", "font-size:12.5px", "line-height:1.7",
        "font-variant-numeric:tabular-nums", "color:rgba(255,255,255,.45)",
        "padding-top:2px",
      ].join(";");

      var txt = document.createElement("span");
      txt.textContent = subs[i].text;
      txt.style.cssText = "flex:1 1 auto;font-size:15px;line-height:1.7;color:rgba(255,255,255,.55);word-break:break-word";

      row.appendChild(ts);
      row.appendChild(txt);
      frag.appendChild(row);
      rows.push({ el: row, ts: ts, txt: txt });
    }
    scroller.appendChild(frag);

    panel.style.display = "flex";
    curIdx = -1;
    paint();
  }

  function paint() {
    if (!rows.length) return;
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      if (i === curIdx) {
        r.txt.style.color = "#ffffff";
        r.txt.style.fontWeight = "700";
        r.txt.style.fontSize = "17px";
        r.ts.style.color = "rgba(255,255,255,.85)";
        r.el.style.background = "rgba(255,255,255,.08)";
      } else {
        r.txt.style.color = "rgba(255,255,255,.5)";
        r.txt.style.fontWeight = "400";
        r.txt.style.fontSize = "15px";
        r.ts.style.color = "rgba(255,255,255,.4)";
        r.el.style.background = "transparent";
      }
    }
  }

  function scrollToCurrent() {
    if (curIdx < 0 || !rows[curIdx] || userScrolling) return;
    var el = rows[curIdx].el;
    var target = el.offsetTop - scroller.clientHeight / 2 + el.offsetHeight / 2;
    if (target < 0) target = 0;
    scroller.scrollTo({ top: target, behavior: "smooth" });
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

  function tick() {
    var a = document.querySelector("audio");
    if (!a) return;
    var p = ensurePanel();
    if (!p) return;
    var hasSrc = !!(a.currentSrc || a.src);
    if (!hasSrc) { p.style.display = "none"; return; }
    if (!subs.length) loadSubs(a.currentSrc || a.src);
    if (!subs.length) { p.style.display = "none"; return; }
    p.style.display = "flex";
    var i = findIdx(a.currentTime);
    if (i !== curIdx) { curIdx = i; paint(); scrollToCurrent(); }
  }

  /* 点击跳转 */
  function onClick(ev) {
    var t = ev.target;
    while (t && t !== document.body) {
      if (t.dataset && t.dataset.t !== undefined) {
        var a = document.querySelector("audio");
        if (a) {
          a.currentTime = parseFloat(t.dataset.t) || 0;
          var pr = a.play(); if (pr && pr.catch) pr.catch(function () {});
          userScrolling = false;
        }
        ev.stopPropagation(); ev.preventDefault();
        return;
      }
      t = t.parentNode;
    }
  }
  document.addEventListener("click", onClick, true);

  function boot() {
    setInterval(tick, 300);
    tick();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else setTimeout(boot, 0);
})();
