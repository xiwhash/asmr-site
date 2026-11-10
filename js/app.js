(function(t){function e(e){for(var a,o,n=e[0],l=e[1],c=e[2],d=0,h=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={1:0},r=[];function o(t){return n.p+"js/"+({}[t]||t)+"."+{2:"052836f6"}[t]+".js"}function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.src=o(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(d);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,s[1](c)}i[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/asmr-site/",n.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;r.push([0,0]),s()})({"0":function (t, e, s) {
  t.exports = s("2f39");
},"0662":function (t, e, s) {},"0eef":function (t, e, s) {
  "use strict";
  var a = s("4fa3"),
    i = s.n(a);
  i.a;
},"104d":function (t, e) {},"19cc":function (t, e, s) {
  "use strict";
  var a = s("e83d"),
    i = s.n(a);
  i.a;
},"1f04":function (t, e, s) {
  "use strict";
  var a = s("736d"),
    i = s.n(a);
  i.a;
},"2834":function (t, e, s) {},"2f39":function (t, e, s) {
  "use strict";
  s.r(e);
  (s("7d6e"), s("e54f"), s("985d"), s("31cd"));
  var a = s("2b0e"),
    i = s("1f91"),
    r = s("42d2"),
    o = s("b05d"),
    n = s("18d6"),
    l = s("a639"),
    c = s("2a19"),
    d = s("436b");
  a["default"].use(o["a"], {
    config: { dark: "auto" },
    lang: i["a"],
    iconSet: r["a"],
    plugins: {
      LocalStorage: n["a"],
      SessionStorage: l["a"],
      Notify: c["a"],
      Dialog: d["a"],
    },
  });
  var u = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s("div", { attrs: { id: "q-app" } }, [s("router-view")], 1);
    },
    h = [],
    m = { name: "App" },
    p = m,
    g = s("2877"),
    f = Object(g["a"])(p, u, h, !1, null, null, null),
    v = f.exports,
    y = s("2f62"),
    w = s("ff52"),
    b = s("bc3a"),
    _ = s.n(b);
  const q = ["RJ", "BJ", "VJ", "CC"],
    k = 1e12;
  function S(t) {
    const e = typeof t;
    switch (e) {
      case "string":
        return t.substring(0, 2);
      case "number":
        return Math.floor(t / k);
      default:
        throw Error(`get id type failed, ${t} is unsupported type ${e}`);
    }
  }
  function C(t) {
    const e = typeof t;
    switch (e) {
      case "string":
        return t.substring(2);
      case "number":
        return Math.floor(t % k);
      default:
        throw Error(`get id digit failed, ${t} is unsupported type ${e}`);
    }
  }
  function x(t) {
    return t >= 1e6 ? ("0" + t).slice(-8) : ("000000" + t).slice(-6);
  }
	  function T(t) {
	    const e = C(t),
	      s = S(t),
	      a = q[s];
	    return `${a}${x(e)}`;
	  }
	  function parseWorkRouteValue(t) {
	    const e = String(t || "").trim(),
	      s = e.match(/^([A-Za-z]{2}\d+)/);
	    if (s) {
	      const t = s[1].toUpperCase(),
	        a = q.indexOf(t.substring(0, 2)),
	        i = parseInt(t.substring(2), 10);
	      return a < 0 || !Number.isFinite(i) || i <= 0
	        ? null
	        : { id: a * k + i, hasSuffix: e.length > s[1].length };
	    }
	    const a = e.match(/^(\d+)/);
	    if (a) {
	      const t = parseInt(a[1], 10);
	      return Number.isFinite(t) && t > 0
	        ? { id: t, hasSuffix: e.length > a[1].length }
	        : null;
	    }
	    return null;
	  }
	  function workIdFromRouteValue(t) {
	    const e = parseWorkRouteValue(t);
	    return e ? e.id : 0;
	  }
	  function formatWorkCodePair(t) {
	    if (!t) return "";
	    const e = t.primary_work_id || t.id || t,
	      s = t.secondary_work_id || 0;
	    return s ? `${T(e)} / ${T(s)}` : T(e);
	  }
	  const CUSTOM_AUDIO_PLAYLIST_KEY = "custom_audio_playlist_v1";
	  function queueItemPrimaryWorkId(t) {
	    if (!t) return 0;
	    if (t.primary_work_id) return t.primary_work_id;
	    if (t.work_id) return t.work_id;
	    if (t.hash) {
	      const e = parseInt(String(t.hash).split("/")[0], 10);
	      return Number.isFinite(e) ? e : 0;
	    }
	    return 0;
	  }
	  function queueItemRJCode(t) {
	    const e = queueItemPrimaryWorkId(t);
	    return e ? T(e) : "";
	  }
	  function queueItemDisplayText(t, e) {
	    const s = e || "";
	    if (!s) return s;
	    const a = queueItemRJCode(t);
	    return a && s.indexOf(a + " - ") !== 0 ? a + " - " + s : s;
	  }
	  function audioFileBaseTitle(t) {
	    const e = String(t || "").replace(/\\/g, "/"),
	      s = e.split("/").filter(Boolean).pop() || e;
	    return s.replace(/\.[^/.]+$/, "");
	  }
	  function queueItemAudioDisplayText(t, e) {
	    return queueItemDisplayText(t, audioFileBaseTitle(e));
	  }
	  function customPlaylistCoverWorkIds(t) {
	    const e = [],
	      s = Array.isArray(t) ? t : [];
	    return (
	      s.forEach((t) => {
	        const s = queueItemPrimaryWorkId(t);
	        s && !e.includes(s) && e.push(s);
	      }),
	      e.slice(0, 8)
	    );
	  }
	  function workUrlFormatDefault() {
	    return "rj";
	  }
	  function workRouteForMetadata(t, e) {
	    if (!t) return "";
	    const s = t.id || t.work_id || t;
	    if ("id" === e) return "/work/" + s;
	    const a = t.primary_work_id || s,
	      i = t.secondary_work_id || 0,
	      r = "/work/" + T(a);
	    return i ? { path: r, query: { t: T(i) } } : r;
	  }
	  const DEFAULT_SITE_NAME = "苦主萝莉控个人音声库";
	  function normalizeMediaFileBaseUrl(t) {
	    return String(t || "").trim().replace(/\/+$/, "");
	  }
	  function currentMediaFileBaseUrl() {
	    return normalizeMediaFileBaseUrl(
	      "undefined" !== typeof window && window.__kikoeruMediaFileBaseUrl,
	    );
	  }
	  function isGuestModeEnabled() {
	    return !!("undefined" !== typeof window && window.__kikoeruGuestMode);
	  }
	  function withMediaFileBaseUrl(t) {
	    if (!t) return "";
	    const e = String(t);
	    if (/^https?:\/\//i.test(e)) return e;
	    const s = currentMediaFileBaseUrl();
	    return s &&
	      /^\/api\/media\/(?:stream|download|transcode|download-lyrics)(?:\/|$)/.test(
	        e,
	      )
	      ? s + e
	      : e;
	  }
	  function appendTokenToMediaUrl(t, e) {
	    const s = withMediaFileBaseUrl(t);
	    if (!e || (currentMediaFileBaseUrl() && isGuestModeEnabled())) return s;
	    const a = s.includes("?") ? "&" : "?";
	    return `${s}${a}token=${encodeURIComponent(e)}`;
	  }
	  function formatWorkTitleForDocument(t, e) {
	    if (!t || !t.id) return "";
	    const s = formatWorkCodePair(t),
	      a = t.circle && t.circle.name ? `[${t.circle.name}]` : "",
	      i = t.title || "",
	      r = (t.vas || []).map((t) => t.name).filter(Boolean).join("、"),
	      o = r ? ` [${r}]` : "",
	      n =
	        e ||
	        ("undefined" !== typeof window && window.__kikoeruSiteName) ||
	        DEFAULT_SITE_NAME;
	    return `[${s}]${a} ${i}${o} - ${n}`.replace(/\s+/g, " ").trim();
	  }
	  function I(t) {
	    const e = t.lastIndexOf(".");
	    return e >= 0 ? t.substr(0, e) : t;
	  }
  function E(t) {
    const e = t.lastIndexOf(".");
    return e >= 0 ? t.substr(e) : "";
  }
  function P(t) {
    const e = t.lastIndexOf(".");
    return e >= 0 ? t.substr(e + 1) : "";
  }
  async function rrRetryRequest(t, e) {
    const s = Object.assign({ retries: 2, delay: 250 }, e || {});
    let a = null;
    for (let i = 0; i <= s.retries; i++) {
      try {
        return await t();
      } catch (r) {
        a = r;
        const o = r && r.response ? r.response.status : 0,
          n = !r.response || 429 === o || o >= 500;
        if (i >= s.retries || !n) throw r;
        await new Promise((t) => setTimeout(t, s.delay * (i + 1)));
      }
    }
    throw a;
  }
  const L = {
      NONE: 0,
      PENDING: 1,
      TRASCRIPTING: 2,
      SUCCESS: 3,
      ERROR: 4,
      COUNT: 5,
    },
    A = {
      async searchTask(t, e, s, a) {
        const i = "/asmr-site/api/lyric/translate",
          r = {
            page: t,
            work_id: e || 0,
            file_name: s || "",
            status: JSON.stringify(a || []),
          },
          o = await _.a.get(i, { params: r });
        return o.data;
      },
      polishTask(t) {
        const e = Object.assign({}, t),
          s = t.audio_path.split(/[\\/]/).pop();
        return (
          (e.fileName = I(s)),
          (e.fileExt = E(s)),
          (e.fileBasename = s),
          e
        );
      },
	      async searchWorkTask(t, e, s) {
	        const a = await this.searchTask(-1, t, e || "", []);
	        return a.tasks.map(this.polishTask);
	      },
	      async searchWorkTaskStatus(t) {
	        const e = await _.a.get("/asmr-site/api/lyric/work-status/" + t);
	        return e.data.tasks.map(this.polishTask);
	      },
	      async translateAudio(t) {
        const e = "/asmr-site/api/lyric/translate/" + t,
          s = await _.a.put(e);
        return s.data;
      },
      async deleteTask(t, e) {
        const s = "/asmr-site/api/lyric/translate/" + t,
          a = await _.a.delete(s, { data: { idArr: e } });
        return a.data;
      },
      async redoTask(t, e) {
        const s = "/asmr-site/api/lyric/translate/redo/" + t,
          a = await _.a.post(s, { idArr: e });
        return a.data;
      },
      async downloadLrc(t) {
        const e = await _.a.get("/asmr-site/api/lyric/translate/lrc", {
          params: { id: t },
        });
        return e.data.lrcContent;
      },
      async queryLyric(t) {
        const e = await _.a.get("/asmr-site/api/media/query-lrc/" + t);
        return e.data.lyricList;
      },
      async fetchLyric(t) {
        const e = await _.a.get("/asmr-site/api/media/fetch-lrc/" + t);
        return e.data.lrc;
      },
      async saveLyric(t, e, s) {
        const a = await _.a.post("/asmr-site/api/media/save-lrc/" + t, {
          writePath: e,
          lrc: s,
        });
        return a.data;
      },
      async saveEditMeta(t, e) {
        const s = await _.a.post("/asmr-site/api/edit/work/" + t, e);
        return s.data;
      },
      async getCandidates(t) {
        const e = (await _.a.get(`/asmr-site/api/${t}s`)).data.slice();
        return e.sort((t, e) => e.count - t.count);
      },
      async saveEditImg(t, e, s = "main", a = "img.jpg") {
        const i = await $(e, "image/jpeg"),
          r = new FormData();
        (r.append("file", i, a), r.append("type", s));
        const o = await _.a.post("/asmr-site/api/edit/img/" + t, r, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        return o.data;
      },
      async recoverEditImg(t, e = "main") {
        const s = await _.a.post("/asmr-site/api/edit/recover/img/" + t, { type: e });
        return s.data;
      },
      async askForTranscoding(t, e) {
        const s = await _.a.post(`/asmr-site/api/media/pre-transcode/${t}?bitRate=${e}`);
        return s.data;
      },
      async getTranscodingStatus(t, e) {
        const s = await _.a.get(`/asmr-site/api/media/pre-transcode/${t}?bitRate=${e}`);
        return s.data;
      },
      async getSyncInfo(t, e, s, a) {
        const i = await _.a.get("/asmr-site/api/syncer", {
          params: { host: t, metaApi: e, trackApi: s, filter: a },
        });
        return i.data.tracks;
      },
      async newSyncTask(t, e, s, a, i) {
        const r = await _.a.post("/asmr-site/api/syncer", {
          host: t,
          code: e,
          rootFolderName: s,
          overwrite: a,
          treeTracks: i,
        });
        return r.data.id;
      },
      async getSyncTaskListStatus() {
        const t = await _.a.get("/asmr-site/api/syncer/task");
        return t.data.info;
      },
      async deleteSyncTask(t) {
        const e = await _.a.delete("/asmr-site/api/syncer/task?id=" + t);
        return e.data.success;
      },
      async stopSyncTask(t) {
        const e = await _.a.post("/asmr-site/api/syncer/task/stop?id=" + t);
        return e.data.success;
      },
      async restartSyncTask(t) {
        const e = await _.a.post("/asmr-site/api/syncer/task/restart?id=" + t);
        return e.data.success;
      },
      async getServerConfig() {
        const t = await _.a.get("/asmr-site/api/config/admin");
        return t.data.config;
      },
    };
  function $(t, e = "image/jpeg") {
    return new Promise((s, a) => {
      const i = `data:${e};base64,`,
        r = t.startsWith(i) ? t.slice(i.length) : t,
        o = atob(r),
        n = new Array(o.length);
      for (let t = 0; t < o.length; t++) n[t] = o.charCodeAt(t);
      const l = new Uint8Array(n),
        c = new Blob([l], { type: e });
      s(c);
    });
  }
  function O(t, e) {
    ((t = t.toLowerCase()), (e = e.toLowerCase()));
    for (var s = new Array(), a = 0; a <= t.length; a++) {
      for (var i = a, r = 0; r <= e.length; r++)
        if (0 == a) s[r] = r;
        else if (r > 0) {
          var o = s[r - 1];
          (t.charAt(a - 1) != e.charAt(r - 1) &&
            (o = Math.min(Math.min(o, i), s[r]) + 1),
            (s[r - 1] = i),
            (i = o));
        }
      a > 0 && (s[e.length] = i);
    }
    return s[e.length];
  }
  function N(t, e) {
    let s = t,
      a = e;
    t.length < e.length && ((s = e), (a = t));
    const i = s.length;
    if (0 == i) return 1;
    const r = O(s, a);
    return [(i - r) / parseFloat(i), r];
  }
  function M(t, e) {
    let s = t,
      a = e;
    t.length < e.length && ((s = e), (a = t));
    const i = s.length,
      r = a.length;
    if (0 == i) return 1;
    const o = Array(i).fill(0);
    for (let c = 0; c < r; ++c)
      (s[c] == a[c] && o[c]++, s[i - c - 1] == a[r - c - 1] && o[i - c]++);
    const n = o.reduce((t, e) => t + (0 == e ? 0 : 1), 0),
      l = n / r;
    return l;
  }
  function R(t, e) {
    const s = I(t),
      a = e;
    if (s === a) return !0;
    if (s.includes(a)) return !0;
    if (s.includes("あり") && s.replace(/あり/g, "なし") === a) return !0;
    if (s.includes("なし") && s.replace(/なし/g, "あり") === a) return !0;
    const i = /\d/g;
    if (i.test(s) && i.test(a) && s.replace(i, "") === a.replace(i, ""))
      return !1;
    const [r, o] = N(s, a);
    return !(s.length == a.length && o <= 2) && (r > 0.8 || M(s, a) > 0.9);
  }
  const D = { UNKNOWN: 0, FUZZY: 1, VA: 2, TAG: 3, CIRCLE: 4, CODE: 5 },
    F = { PAGINATION: "pagination", WATERFALL: "waterfall" },
    Q = { OFF: "off", AAC_128: "aac 128", AAC_320: "aac 320" },
    U = { wav: !1, flac: !1, avi: !1, mp4: !1 };
  const VIDEO_MEDIA_EXTENSIONS = [
    "mp4",
    "webm",
    "m4v",
    "mov",
    "mkv",
    "avi",
  ];
  function isVideoMediaTitle(t) {
    return VIDEO_MEDIA_EXTENSIONS.includes(P(t || "").toLowerCase());
  }
  function W(t, e = !1) {
    const s = Math.floor(t / 3600),
      a = "" + s,
      i = ("" + (Math.floor(t / 60) % 60)).padStart(2, "0"),
      r = ("" + (Math.floor(t) % 60)).padStart(2, "0");
    let o = Math.floor(1e3 * t) % 1e3,
      n = e ? "." + ("" + o).padStart(3, "0") : "";
    return 0 === s ? i + ":" + r + n : a + ":" + i + ":" + r + n;
  }
  function z(t) {
    const e = Math.floor(t / 3600),
      s = Math.floor(t / 60) % 60,
      a = Math.floor(t) % 60;
    let i = "";
    return (
      e > 0 && (i += e + "时"),
      s > 0 && (i += s + "分"),
      (i += a + "秒"),
      i
    );
  }
  function j(t) {
    const e = Math.floor(t / 3600),
      s = Math.floor(t / 60) % 60,
      a = Math.floor(t) % 60;
    let i = "";
    return (
      e > 0 && (i += e + "时"),
      s > 0 && (i += s + "分"),
      e <= 0 && s <= 0 && (i += a + "秒"),
      i
    );
  }
  function B(t) {
    return JSON.parse(JSON.stringify(t));
  }
  function V(t) {
    const e = t.filter((t) => "folder" == t.type && t.important);
    if (e.length <= 0) return [];
    const s = e[0];
    return [s.title, ...V(s.children)];
  }
  function H(t, e = 0) {
    if (0 === t) return "0 Bytes";
    const s = 1024,
      a = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      i = Math.floor(Math.log(t) / Math.log(s));
    return parseFloat((t / Math.pow(s, i)).toFixed(e)) + " " + a[i];
  }
  function G(t) {
    if (!t || "string" !== typeof t) return "";
    const e = t.lastIndexOf(".");
    return -1 === e ||
      e === t.length - 1 ||
      0 === e ||
      -1 !== t.indexOf("/", e) ||
      -1 !== t.indexOf("\\", e)
      ? ""
      : t.slice(e + 1);
  }
  const Y = "swap_seek_button",
    K = "enable_visualizer",
    J = "enable_pip_lyrics",
    floatingLyricsKey = "enable_floating_lyrics_key",
    Z = "enable_video_source",
    X = "old_work_card_ui_style_key",
    tt = "dark_mode_key",
    et = "work_list_mode_key",
    st = "enable_show_recent_key",
    at = "old_sleep_timer_ui_style_key",
    it = "transcode_option_key",
    rt = "transcode_from_types_key";
  function ot() {
    let t = n["a"].has(tt) ? n["a"].getItem(tt) : "auto";
    return ([!0, !1, "auto"].includes(t) || (t = "auto"), w["a"].set(t), t);
  }
  function nt() {
    let t = n["a"].has(et) ? n["a"].getItem(et) : F.WATERFALL;
    return ([F.WATERFALL, F.PAGINATION].includes(t) || (t = F.WATERFALL), t);
  }
  function audioPlayerVersionDefault() {
    return "v1";
  }
  var lt = function () {
    return {
      hide: !1,
      playing: !1,
      playingTranscode: !1,
      currentTime: 0,
      newCurrentTime: -1,
      duration: 0,
      source: "",
      queue: [],
      queueIndex: 0,
      defaultQueue: [],
      defaultQueueWorkId: 0,
      isCustomPlaylist: !1,
      playMode: { id: 0, name: "order" },
      muted: !1,
      volume: 0,
      hasLyric: !1,
      currentLyric: "",
      currentLyricLineNumber: 0,
      lyricLines: [],
      lyricOffsetSeconds: 0,
      sleepTime: null,
      sleepMode: !1,
      rewindSeekTime: 5,
      forwardSeekTime: 30,
      rewindSeekMode: !1,
      forwardSeekMode: !1,
      swapSeekButton: n["a"].has(Y) && n["a"].getItem(Y),
      enableVisualizer: n["a"].has(K) && n["a"].getItem(K),
      enableVideoSource: n["a"].has(Z) && n["a"].getItem(Z),
      enableVideoSourcePIP: !1,
      visualPlayerCoverUrl: "",
      playWorkId: 0,
      audioAnalyser: null,
      enablePIPLyrics:
        n["a"].has(J) &&
        n["a"].getItem(J) &&
        !(navigator.userAgent.toLowerCase().indexOf("android") > -1),
      enableFloatingLyrics:
        !n["a"].has(floatingLyricsKey) || n["a"].getItem(floatingLyricsKey),
      resumeHistroySeconds: -1,
      oldWorkCardUIStyle: n["a"].has(X) && n["a"].getItem(X),
      oldSleepTimerUIStyle: n["a"].has(at) && n["a"].getItem(at),
      darkMode: ot(),
      enableShowRecent: !n["a"].has(st) || n["a"].getItem(st),
      workListMode: nt(),
      transcodeOption: n["a"].has(it) ? n["a"].getItem(it) : "off",
      transcodeFromTypes: n["a"].has(rt) ? n["a"].getItem(rt) : "flac,wav",
      audioPlayerVersion: audioPlayerVersionDefault(),
      workUrlFormat: workUrlFormatDefault(),
    };
  };
  const ct = {
    currentPlayingFile: (t) =>
      t.queue[t.queueIndex] || {
        hash: "",
        title: "",
        subtitle: null,
        workTitle: "",
    },
    isCurrentPlayingFileVideo: (t) => {
      const e = (t.queue[t.queueIndex] || { title: "" }).title;
      return isVideoMediaTitle(e);
    },
    resumeHistroyDone: (t) => t.resumeHistroySeconds < 0,
    isQueueEmpty: (t) => 0 == t.queue.length,
    transcodeBitRate(t) {
      return { [Q.AAC_128]: 128, [Q.AAC_320]: 320, [Q.OFF]: 0 }[
        t.transcodeOption
      ];
    },
  };
  var dt = ct;
  const ut = { true: !1, false: "auto", auto: !0 },
    ht = {
      TOGGLE_HIDE(t) {
        t.hide = !t.hide;
      },
      PLAY(t) {
        t.playing = !0;
      },
      PAUSE(t) {
        t.playing = !1;
      },
      TOGGLE_PLAYING(t) {
        t.playing = !t.playing;
      },
      SET_NEW_CURRENT_TIME(t, e) {
        t.newCurrentTime = e;
      },
      SET_TRACK: (t, e) => {
        e >= t.queue.length || e < 0 || ((t.playing = !0), (t.queueIndex = e));
      },
      NEXT_TRACK: (t) => {
        t.queueIndex < t.queue.length - 1 &&
          ((t.playing = !0), (t.queueIndex += 1));
      },
      PREVIOUS_TRACK: (t) => {
        t.queueIndex > 0 && ((t.playing = !0), (t.queueIndex -= 1));
      },
      SET_QUEUE(t, e) {
        ((t.queue = e.queue),
          (t.queueIndex = e.index),
          e.resetPlaying && (t.playing = !0));
        const s = Object.prototype.hasOwnProperty.call(e, "workId")
          ? e.workId
          : t.playWorkId;
        (Object.prototype.hasOwnProperty.call(e, "isCustomPlaylist")
          ? (t.isCustomPlaylist = !!e.isCustomPlaylist)
          : Object.prototype.hasOwnProperty.call(e, "workId") &&
            (t.isCustomPlaylist = !1));
        !t.isCustomPlaylist &&
          Object.prototype.hasOwnProperty.call(e, "workId") &&
          !1 !== e.setDefaultQueue &&
          ((t.defaultQueue = Array.isArray(e.queue) ? e.queue.concat() : []),
          (t.defaultQueueWorkId = s));
        if (s !== t.playWorkId) {
          const e = "visual_cover_" + s;
          let a = n["a"].getItem(e);
          if (!a) {
            const e = dt.currentPlayingFile(t).hash;
            a = "/asmr-site/api/cover/" + e.split("/")[0];
          }
          t.visualPlayerCoverUrl = a;
        }
        ((t.playWorkId = s),
          Object.prototype.hasOwnProperty.call(e, "resumeHistroySeconds") &&
            (t.resumeHistroySeconds = e.resumeHistroySeconds));
      },
      EMPTY_QUEUE: (t) => {
        ((t.playing = !1),
          (t.queue = []),
          (t.queueIndex = 0),
          (t.isCustomPlaylist = !1));
      },
      ADD_TO_QUEUE: (t, e) => {
        t.queue.push(e);
      },
      REMOVE_FROM_QUEUE: (t, e) => {
        (t.queue.splice(e, 1),
          e === t.queueIndex
            ? ((t.playing = !1), (t.queueIndex = 0))
            : e < t.queueIndex && (t.queueIndex -= 1));
      },
      SET_DURATION(t, e) {
        t.duration = e;
      },
      SET_CURRENT_TIME(t, e) {
        t.currentTime = e;
      },
      PLAY_NEXT: (t, e) => {
        t.queue.splice(t.queueIndex + 1, 0, e);
      },
      CHANGE_PLAY_MODE: (t) => {
        const e = [
            { id: 0, name: "order" },
            { id: 1, name: "all repeat" },
            { id: 2, name: "repeat once" },
            { id: 3, name: "shuffle" },
          ],
          s = t.playMode.id >= e.length - 1 ? 0 : t.playMode.id + 1;
        t.playMode = e[s];
      },
      TOGGLE_MUTED: (t) => {
        t.muted = !t.muted;
      },
      SET_VOLUME: (t, e) => {
        e < 0 || e > 1 || (t.volume = e);
      },
      SET_REWIND_SEEK_TIME: (t, e) => {
        t.rewindSeekTime = e;
      },
      SET_FORWARD_SEEK_TIME: (t, e) => {
        t.forwardSeekTime = e;
      },
      SET_REWIND_SEEK_MODE: (t, e) => {
        t.rewindSeekMode = e;
      },
      SET_FORWARD_SEEK_MODE: (t, e) => {
        t.forwardSeekMode = e;
      },
      SET_HAS_LYRIC: (t, e) => {
        t.hasLyric = e;
      },
      SET_CURRENT_LYRIC: (t, e) => {
        t.currentLyric = e;
      },
      SET_CURRENT_LYRIC_LINE_NUMBER: (t, e) => {
        t.currentLyricLineNumber = e;
      },
      SET_LYRIC_LINES: (t, e) => {
        t.lyricLines = e;
      },
      SET_LYRIC_OFFSET_SECONDS: (t, e) => {
        t.lyricOffsetSeconds = e;
      },
      SET_SLEEP_TIMER: (t, e) => {
        ((t.sleepTime = e), (t.sleepMode = !0));
      },
      CLEAR_SLEEP_MODE: (t) => {
        ((t.sleepTime = null), (t.sleepMode = !1));
      },
      SET_VISUAL_PLAYER_COVER_URL: (t, e) => {
        const s = "visual_cover_" + t.playWorkId;
        ((t.visualPlayerCoverUrl = e), n["a"].set(s, t.visualPlayerCoverUrl));
      },
      TOGGLE_SWAP_SEEK_BUTTON: (t) => {
        ((t.swapSeekButton = !t.swapSeekButton),
          n["a"].set(Y, t.swapSeekButton));
      },
      TOGGLE_ENABLE_VISUALIZER: (t) => {
        ((t.enableVisualizer = !t.enableVisualizer),
          n["a"].set(K, t.enableVisualizer));
      },
      SET_ENABLE_VISUALIZER: (t, e) => {
        ((t.enableVisualizer = e), n["a"].set(K, e));
      },
      SET_AUDIO_ANALYSER: (t, e) => {
        t.audioAnalyser = e;
      },
      SET_ENABLE_PIP_LYRICS: (t, e) => {
        ((t.enablePIPLyrics = e), n["a"].set(J, t.enablePIPLyrics));
      },
      SET_ENABLE_FLOATING_LYRICS: (t, e) => {
        ((t.enableFloatingLyrics = !!e),
          n["a"].set(floatingLyricsKey, t.enableFloatingLyrics));
      },
      SET_RESUME_HISTROY_SECONDS: (t, e) => {
        t.resumeHistroySeconds = e;
      },
      RESUME_HISTROY_SECONDS_DONE: (t) => {
        t.resumeHistroySeconds = -1;
      },
      TOGGLE_ENABLE_VIDEO_SOURCE: (t) => {
        ((t.enableVideoSource = !t.enableVideoSource),
          n["a"].set(Z, t.enableVideoSource));
      },
      SET_ENABLE_VIDEO_SOURCE: (t, e) => {
        ((t.enableVideoSource = e), n["a"].set(Z, e));
      },
      SET_ENABLE_VIDEO_SOURCE_PIP: (t, e) => {
        t.enableVideoSourcePIP = e;
      },
      SET_OLD_WORK_CARD_UI_STYLE: (t, e) => {
        ((t.oldWorkCardUIStyle = e), n["a"].set(X, e));
      },
      SET_OLD_SLEEP_TIMER_UI_STYLE: (t, e) => {
        ((t.oldSleepTimerUIStyle = e), n["a"].set(at, e));
      },
      SET_DARK_MODE: (t, e) => {
        ((t.darkMode = e), n["a"].set(tt, e), w["a"].set(e));
      },
      SET_WORK_LIST_MODE: (t, e) => {
        ((t.workListMode = e), n["a"].set(et, e));
      },
      TOGGLE_DARK_MODE: (t) => {
        const e = t.darkMode,
          s = ut[e];
        ((t.darkMode = s), n["a"].set(tt, s), w["a"].set(s));
      },
      SET_ENABLE_SHOW_RECENT: (t, e) => {
        ((t.enableShowRecent = e), n["a"].set(st, e));
      },
      SET_TRANSCODE_OPTION: (t, e) => {
        ((t.transcodeOption = e), n["a"].set(it, e));
      },
      SET_TRANSCODE_FROM_TYPES: (t, e) => {
        ((t.transcodeFromTypes = e), n["a"].set(rt, e));
      },
      SET_AUDIO_PLAYER_VERSION: (t, e) => {
        (["v1", "v2"].includes(e) || (e = "v1"), (t.audioPlayerVersion = e));
      },
      SET_WORK_URL_FORMAT: (t, e) => {
        (["rj", "id"].includes(e) || (e = "rj"), (t.workUrlFormat = e));
      },
      SET_PLAYING_TRANSCODE: (t, e) => {
        t.playingTranscode = e;
      },
    };
  var mt = ht,
    pt = s("6a18"),
    gt = { namespaced: !0, getters: dt, mutations: mt, actions: pt, state: lt },
    ft = function () {
      return { auth: !1, name: "", group: "" };
    },
    vt = s("b5fb");
  const yt = {
    INIT(t, e) {
      ((t.name = e.name), (t.group = e.group));
    },
    SET_AUTH(t, e) {
      t.auth = e;
    },
  };
  var wt = yt,
    bt = s("104d"),
    _t = { namespaced: !0, state: ft, getters: vt, mutations: wt, actions: bt };
  a["default"].use(y["a"]);
  var qt = function () {
      const t = new y["a"].Store({
        modules: { AudioPlayer: gt, User: _t },
        strict: !1,
      });
      return t;
    },
    kt = s("8c4f"),
    St = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-layout",
        { attrs: { view: "hHh Lpr lFf" } },
        [
          s(
            "q-header",
            {
              staticClass: "shadow-4",
              attrs: { reveal: "", "reveal-offset": 100 },
              on: { reveal: t.onHeaderRevealChange },
            },
            [
              s(
                "q-toolbar",
                { staticClass: "row justify-between" },
                [
                  s("q-btn", {
                    attrs: {
                      flat: "",
                      dense: "",
                      round: "",
                      icon: "menu",
                      "aria-label": "Menu",
                    },
                    on: {
                      click: function (e) {
                        t.drawerOpen = !t.drawerOpen;
                      },
                    },
                  }),
                  t.isNotAtHomePage
                    ? s("q-btn", {
                        attrs: { flat: "", size: "md", icon: "arrow_back_ios" },
                        on: {
                          click: function (e) {
                            return t.back();
                          },
                        },
                      })
                    : t._e(),
                  s(
                    "q-toolbar-title",
                    { staticClass: "gt-xs" },
                    [
	                      s(
	                        "router-link",
	                        { staticClass: "text-white", attrs: { to: "/" } },
	                        [
	                          t._v(
	                            "\n          " +
	                              t._s(t.siteName) +
	                              "\n        ",
	                          ),
	                        ],
	                      ),
                    ],
                    1,
                  ),
                  "advance search" !== t.$route.name
                    ? s("q-input", {
                        staticClass: "q-mr-sm",
                        attrs: {
                          dark: "",
                          dense: "",
                          rounded: "",
                          standout: "",
                          debounce: "500",
                          "input-class": "text-right",
                        },
                        scopedSlots: t._u(
                          [
                            {
                              key: "before",
                              fn: function () {
                                return [
                                  s(
                                    "q-btn",
                                    {
                                      attrs: {
                                        round: "",
                                        dense: "",
                                        flat: "",
                                        icon: "manage_search",
                                        to: "/search",
                                      },
                                    },
                                    [
                                      s("q-tooltip", [
                                        t._v(
                                          "点此进入聚合搜索，支持多关键字搜索",
                                        ),
                                      ]),
                                    ],
                                    1,
                                  ),
                                ];
                              },
                              proxy: !0,
                            },
                            {
                              key: "append",
                              fn: function () {
                                return [
                                  "" === t.keyword
                                    ? s("q-icon", { attrs: { name: "search" } })
                                    : s("q-icon", {
                                        staticClass: "cursor-pointer",
                                        attrs: { name: "clear" },
                                        on: {
                                          click: function (e) {
                                            t.keyword = "";
                                          },
                                        },
                                      }),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !1,
                          385229963,
                        ),
                        model: {
                          value: t.keyword,
                          callback: function (e) {
                            t.keyword = e;
                          },
                          expression: "keyword",
                        },
                      })
                    : t._e(),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-drawer",
            {
              attrs: {
                "show-if-above": "",
                mini: t.miniState,
                "mini-to-overlay": "",
                width: 230,
                breakpoint: 500,
                bordered: "",
                "content-class": "",
              },
              on: {
                mouseover: function (e) {
                  t.miniState = !1;
                },
                mouseout: function (e) {
                  t.miniState = !0;
                },
              },
              model: {
                value: t.drawerOpen,
                callback: function (e) {
                  t.drawerOpen = e;
                },
                expression: "drawerOpen",
              },
            },
            [
              s(
                "q-scroll-area",
                { staticClass: "fit padding-bottom-play-bar" },
                [
                  s(
                    "q-list",
                    [
                      t._l(t.getLinks(), function (e, a) {
                        return s(
                          "q-item",
                          {
                            directives: [
                              { name: "ripple", rawName: "v-ripple" },
                            ],
                            key: a,
                            attrs: {
                              clickable: "",
                              exact: "",
                              to: e.path,
                              "active-class":
                                "text-deep-purple text-weight-medium",
                            },
                            on: {
                              click: function (e) {
                                t.miniState = !0;
                              },
                            },
                          },
                          [
                            s(
                              "q-item-section",
                              { attrs: { avatar: "" } },
                              [s("q-icon", { attrs: { name: e.icon } })],
                              1,
                            ),
                            s(
                              "q-item-section",
                              [
                                s(
                                  "q-item-label",
                                  { staticClass: "text-subtitle1" },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(e.title) +
                                        "\n            ",
                                    ),
                                  ],
                                ),
                              ],
                              1,
                            ),
                          ],
                          1,
                        );
                      }),
                      s(
                        "q-item",
                        {
                          directives: [{ name: "ripple", rawName: "v-ripple" }],
                          attrs: {
                            clickable: "",
                            exact: "",
                            "active-class":
                              "text-deep-purple text-weight-medium",
                          },
                          on: { click: t.randomPlay },
                        },
                        [
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [s("q-icon", { attrs: { name: "shuffle" } })],
                            1,
                          ),
                          s(
                            "q-item-section",
                            [
                              s(
                                "q-item-label",
                                { staticClass: "text-subtitle1" },
                                [t._v("\n              随心听\n            ")],
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
		                  ),
		                  s(
		                    "q-item",
                        {
                          directives: [{ name: "ripple", rawName: "v-ripple" }],
                          attrs: {
                            clickable: "",
                            exact: "",
                            "active-class":
                              "text-deep-purple text-weight-medium",
                          },
                          on: {
                            click: function (e) {
                              t.showTimer = !0;
                            },
                          },
                        },
                        [
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [s("q-icon", { attrs: { name: "timer" } })],
                            1,
                          ),
                          s(
                            "q-item-section",
                            [
                              s(
                                "q-item-label",
                                { staticClass: "text-subtitle1" },
                                [
                                  t._v(
                                    "\n              睡眠定时\n            ",
                                  ),
                                ],
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      s(
                        "q-item",
                        {
                          directives: [{ name: "ripple", rawName: "v-ripple" }],
                          attrs: {
                            clickable: "",
                            exact: "",
                            "active-class":
                              "text-deep-purple text-weight-medium",
                          },
                          on: { click: t.toggleDarkMode },
                        },
                        [
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              s("q-icon", {
                                attrs: { name: t.currentDarkModeIconName },
                              }),
                            ],
                            1,
                          ),
                          s(
                            "q-item-section",
                            [
                              s(
                                "q-item-label",
                                { staticClass: "text-subtitle1" },
                                [
                                  t._v(
                                    "\n              " +
                                      t._s(t.currentDarkModeName) +
                                      "\n            ",
                                  ),
                                ],
                              ),
                              s("q-tooltip", [
                                t._v(
                                  "\n              深色、浅色模式设置\n            ",
                                ),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    2,
                  ),
	              s(
	                "q-list",
	                [
		                  s(
                        "q-item",
                        {
                          directives: [{ name: "ripple", rawName: "v-ripple" }],
                          attrs: {
                            clickable: "",
                            exact: "",
                            to: "/about",
                            "active-class":
                              "text-deep-purple text-weight-medium",
                          },
                        },
                        [
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [s("q-icon", { attrs: { name: "info" } })],
                            1,
                          ),
                          s(
                            "q-item-section",
                            [
                              s(
                                "q-item-label",
                                { staticClass: "text-subtitle1" },
                                [t._v("\n              关于\n            ")],
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      t.authEnabled || t.isAdminUser
                        ? s(
                            "q-item",
                            {
                              directives: [
                                { name: "ripple", rawName: "v-ripple" },
                              ],
                              attrs: {
                                clickable: "",
                                exact: "",
                                "active-class":
                                  "text-deep-purple text-weight-medium",
                              },
                              on: {
                                click: function (e) {
                                  t.confirm = !0;
                                },
                              },
                            },
                            [
                              s(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  s("q-icon", {
                                    attrs: { name: "exit_to_app" },
                                  }),
                                ],
                                1,
                              ),
                              s(
                                "q-item-section",
                                [
                                  s(
                                    "q-item-label",
                                    { staticClass: "text-subtitle1" },
                                    [
                                      t._v(
                                        "\n              登出\n            ",
                                      ),
                                    ],
                                  ),
                                  s(
                                    "q-item-label",
                                    { attrs: { caption: "", lines: "2" } },
                                    [t._v(t._s(t.userName))],
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          )
                        : t._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-dialog",
            {
              attrs: { persistent: "" },
              model: {
                value: t.confirm,
                callback: function (e) {
                  t.confirm = e;
                },
                expression: "confirm",
              },
            },
            [
              s(
                "q-card",
                [
                  s(
                    "q-card-section",
                    { staticClass: "row items-center" },
                    [
                      s("q-avatar", {
                        attrs: {
                          icon: "power_settings_new",
                          color: "primary",
                          "text-color": "white",
                        },
                      }),
                      s("span", { staticClass: "q-ml-sm" }, [
                        t._v("是否退出登录？（若未开启用户验证，则操作无效）"),
                      ]),
                    ],
                    1,
                  ),
                  s(
                    "q-card-actions",
                    { attrs: { align: "right" } },
                    [
                      s("q-btn", {
                        directives: [
                          { name: "close-popup", rawName: "v-close-popup" },
                        ],
                        attrs: { flat: "", label: "取消", color: "primary" },
                      }),
                      s("q-btn", {
                        directives: [
                          { name: "close-popup", rawName: "v-close-popup" },
                        ],
                        attrs: { flat: "", label: "退出", color: "primary" },
                        on: {
                          click: function (e) {
                            return t.logout();
                          },
                        },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          t.oldSleepTimerUIStyle
            ? s("SleepMode", {
                model: {
                  value: t.showTimer,
                  callback: function (e) {
                    t.showTimer = e;
                  },
                  expression: "showTimer",
                },
              })
            : s("CountDownSleepMode", {
                model: {
                  value: t.showTimer,
                  callback: function (e) {
                    t.showTimer = e;
                  },
                  expression: "showTimer",
                },
              }),
          s(
            "q-page-container",
            {
              class: {
                "page-container-style": t.isFullScreenPage,
                "padding-bottom-play-bar": !t.isFullScreenPage,
              },
            },
            [
              s(
                "keep-alive",
                { attrs: { include: "Works" } },
                [s("router-view")],
                1,
              ),
              t.isFullScreenPage
                ? t._e()
                : s(
                    "q-page-scroller",
                    {
                      staticClass: "scroller",
                      class: {
                        "scroller-hide": !t.showScroller,
                        "scroller-show": t.showScroller,
                      },
                      attrs: {
                        position: "bottom-right",
                        "scroll-offset": 150,
                        offset: [18, 90],
                      },
                    },
                    [
                      s("q-btn", {
                        attrs: {
                          dense: "",
                          fab: "",
                          icon: "keyboard_arrow_up",
                          color: "accent",
                          padding: "sm",
                        },
                      }),
                    ],
                    1,
                  ),
            ],
            1,
          ),
          s(
            "div",
            {
              staticClass: "player-layer-root",
              staticStyle: { position: "fixed", bottom: "0" },
              style: { "z-index": t.miniState ? 3001 : 6200 },
            },
            [
              s("PlayerBar"),
              s("AudioPlayer"),
              t.enablePIPLyrics || !t.enableFloatingLyrics
                ? t._e()
                : s("LyricsBar"),
              s("PIPLyrics"),
            ],
            1,
          ),
          s("q-footer", { staticClass: "q-pa-none" }),
        ],
        1,
      );
    },
    Ct = [],
    xt = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-card",
        {
          staticClass: "bordered playBar",
          class: {
            showStyle: t.showPlayBar,
            hideStyle: !t.showPlayBar,
            playBarBumpUp: t.isPanning,
          },
          attrs: { draggable: "false" },
        },
        [
          s(
            "div",
            {
              ref: "playBarBox",
              staticClass: "row",
              class: {},
              attrs: { color: "primary" },
            },
            [
              s("div", {
                staticClass: "simple-progress",
                class: t.$q.dark.isActive
                  ? "simple-progress-dark"
                  : "simple-progress-light",
                style: t.progressBarStyle,
              }),
              s(
                "div",
                {
                  staticClass: "new-progress row justify-end",
                  class: { hideNewProgress: !t.isPanning },
                  style: t.newProgressBarStyle,
                },
                [
                  s(
                    "span",
                    {
                      staticClass: "q-pa-xs",
                      staticStyle: { transition: "all 0.5s" },
                      style: t.showDeltaTimeStyle,
                    },
                    [
                      s("div", { staticClass: "text-h4" }, [
                        t._v(
                          "\n          " +
                            t._s(t.showNewCurrentTime) +
                            "\n        ",
                        ),
                      ]),
                      s("div", [
                        t._v(
                          "\n          " + t._s(t.showDeltaTime) + "\n        ",
                        ),
                      ]),
                    ],
                  ),
                ],
              ),
              s("div", {
                staticClass: "volumeIndicator",
                style: {
                  height: 100 * t.volume + "%",
                  width: t.showVolumeIndicator
                    ? t.volumeIndicatorWidth + "px"
                    : 0,
                },
              }),
              s(
                "q-item",
                {
                  staticClass: "col non-selectable",
                  staticStyle: { padding: "0px 5px" },
                  on: {
                    mousedown: function (e) {
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        t.mouseDown(e)
                      );
                    },
                    touchstart: function (e) {
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        t.touchStart(e)
                      );
                    },
                    touchend: function (e) {
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        t.touchEnd(e)
                      );
                    },
                    touchmove: function (e) {
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        t.touchMove(e)
                      );
                    },
                    touchcancel: function (e) {
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        t.touchCancel(e)
                      );
                    },
                  },
                },
                [
                  s(
                    "q-item-section",
                    { attrs: { avatar: "" } },
                    [
                      s("q-img", {
                        staticClass: "rounded-borders",
                        staticStyle: { height: "50px", width: "50px" },
                        attrs: { transition: "fade", src: t.samCoverUrl },
                      }),
                    ],
                    1,
                  ),
                  s(
                    "q-item-section",
                    [
                      s(
                        "Scrollable",
                        { staticClass: "full-width", attrs: { stop: !t.hide } },
                        [
                          s(
                            "span",
                            { staticClass: "audio-name relative-position" },
                            [t._v(t._s(t.currentAudioDisplayTitle))],
                          ),
                        ],
                      ),
                      s(
                        "Scrollable",
                        { staticClass: "full-width", attrs: { stop: !t.hide } },
                        [
                          s(
                            "span",
                            { staticClass: "work-name relative-position" },
                            [t._v(t._s(t.currentWorkDisplayTitle))],
                          ),
                        ],
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              s("q-btn", {
                staticClass: "col-auto gt-xs",
                staticStyle: { height: "60px", width: "60px" },
                attrs: {
                  flat: "",
                  size: "lg",
                  icon: t.swapSeekButton ? t.rewindIcon : "skip_previous",
                },
                on: {
                  click: function (e) {
                    (e.preventDefault(),
                      e.stopPropagation(),
                      t.swapSeekButton ? t.rewind(!0) : t.previousTrack());
                  },
                },
              }),
              s("q-btn", {
                staticClass: "col-auto",
                staticStyle: { height: "60px", width: "60px" },
                attrs: { flat: "", size: "lg", icon: t.playingIcon },
                on: {
                  click: function (e) {
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      t.togglePlaying()
                    );
                  },
                },
              }),
              s("q-btn", {
                staticClass: "col-auto gt-xs",
                staticStyle: { height: "60px", width: "60px" },
                attrs: {
                  flat: "",
                  size: "lg",
                  icon: t.swapSeekButton ? t.forwardIcon : "skip_next",
                },
                on: {
                  click: function (e) {
                    (e.preventDefault(),
                      e.stopPropagation(),
                      t.swapSeekButton ? t.forward(!0) : t.nextTrack());
                  },
                },
              }),
            ],
            1,
          ),
        ],
      );
    },
    Tt = [],
    It = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s("div", { ref: "container", staticClass: "container" }, [
        s("div", { staticClass: "scrolling", style: t.scrollStyle }, [
          s(
            "div",
            { ref: "slot", staticClass: "one-line-expand" },
            [
              t._t("default"),
              t.needScroll
                ? s("span", {
                    staticClass: "spacer",
                    style: { width: t.spacerWidth + "px" },
                  })
                : t._e(),
              t.needScroll ? t._t("default") : t._e(),
            ],
            2,
          ),
        ]),
      ]);
    },
    Et = [],
    Pt = s("1c16"),
    Lt = {
      name: "Scrollable",
      props: {
        stop: { type: Boolean, required: !0, default: !1 },
        name: { type: String, required: !1 },
      },
      data() {
        return {
          resizeObserver: null,
          maxScroll: "0",
          slotWidth: 0,
          needScroll: !1,
          spacerWidth: 80,
        };
      },
      computed: {
        container() {
          return this.$refs.container;
        },
        slot() {
          return this.$refs.slot;
        },
        animationDuration() {
          return this.slotWidth / 30;
        },
        scrollStyle() {
          return {
            "animation-duration": this.slotWidth / 60 + "s",
            "animation-play-state": this.stop ? "paused" : "running",
            "--max-scroll": this.maxScroll,
          };
        },
      },
      watch: {
        stop() {
          this.onSlotResize();
        },
      },
      mounted() {
        (this.onSlotResize(),
          (this.onSlotResize = Object(Pt["a"])(this.onSlotResize, 500)),
          (this.resizeObserver = new ResizeObserver(this.onSlotResize)),
          this.resizeObserver.observe(this.slot),
          this.resizeObserver.observe(this.container));
      },
      methods: {
        onSlotResize() {
          const t = Math.round(this.container.getBoundingClientRect().width);
          let e = 0;
          if (this.needScroll) {
            const t = Math.round(this.slot.getBoundingClientRect().width);
            e = Math.floor((t - this.spacerWidth) / 2);
          } else e = Math.round(this.slot.getBoundingClientRect().width);
          if (e > t) {
            const t = e + this.spacerWidth;
            ((this.maxScroll = `-${t}px`),
              (this.slotWidth = 2 * e + this.spacerWidth),
              (this.needScroll = !0));
          } else
            ((this.maxScroll = "0"),
              (this.slotWidth = 0),
              (this.needScroll = !1));
        },
      },
    },
    At = Lt,
    $t = (s("19cc"), Object(g["a"])(At, It, Et, !1, null, null, null)),
    Ot = $t.exports;
  const Nt = { idle: 0, up: 1, down: 2, horize: 3 };
  var Mt = {
      name: "PlayerBar",
      components: { Scrollable: Ot },
      computed: {
        samCoverUrl() {
          const t = this.$q.localStorage.getItem("jwt-token") || "",
            e = this.currentPlayingFile.hash;
          return e ? `/asmr-site/api/cover/${e.split("/")[0]}?type=sam&token=${t}` : "";
        },
        showPlayBar() {
          return this.currentPlayingFile.hash && this.hide;
        },
        playingIcon() {
          return this.playing ? "pause" : "play_arrow";
        },
        progressBarStyle() {
          let t = (this.currentTime / this.duration) * 100;
          return { width: t.toFixed(5) + "%" };
        },
        newCurrentTime() {
          return this.deltaTime + this.startCurrentTime;
        },
        showDeltaTime() {
          return `${this.deltaTime >= 0 ? "+" : ""}${this.deltaTime.toFixed(1)}s`;
        },
        showNewCurrentTime() {
          return W(this.newCurrentTime);
        },
        showDeltaTimeStyle() {
          const t = 0.4;
          return this.newCurrentTime / this.duration < t
            ? { transform: "translateX(100%)", "text-align": "left" }
            : { "text-align": "right" };
        },
        newProgressBarStyle() {
          const t = Math.max(
            0,
            Math.min(
              100,
              ((this.startCurrentTime + this.deltaTime) / this.duration) * 100,
            ),
          );
          return { width: t.toFixed(5) + "%" };
        },
        isPanning() {
          return this.state == Nt.horize;
        },
        currentAudioDisplayTitle() {
          return queueItemAudioDisplayText(
            this.currentPlayingFile,
            this.currentPlayingFile.title,
          );
        },
        currentWorkDisplayTitle() {
          return queueItemDisplayText(
            this.currentPlayingFile,
            this.currentPlayingFile.workTitle,
          );
        },
        ...Object(y["d"])("AudioPlayer", [
          "hide",
          "playing",
          "currentTime",
          "duration",
          "volume",
          "swapSeekButton",
          "rewindSeekTime",
          "forwardSeekTime",
        ]),
        ...Object(y["b"])("AudioPlayer", ["currentPlayingFile"]),
        rewindIcon() {
          switch (this.rewindSeekTime) {
            case 5:
              return "replay_5";
            case 10:
              return "replay_10";
            case 30:
              return "replay_30";
            default:
              return "replay_5";
          }
        },
        forwardIcon() {
          switch (this.forwardSeekTime) {
            case 5:
              return "forward_5";
            case 10:
              return "forward_10";
            case 30:
              return "forward_30";
            default:
              return "forward_5";
          }
        },
      },
      watch: {
        volume() {
          (this.volumeDelayHideTimeoutId > 0 &&
            clearTimeout(this.volumeDelayHideTimeoutId),
            (this.showVolumeIndicator = !0),
            (this.volumeDelayHideTimeoutId = setTimeout(() => {
              this.showVolumeIndicator = !1;
            }, this.volumeDelayMills)));
        },
      },
      data() {
        return {
          OpState: Nt,
          state: Nt.idle,
          vertTriggerPixels: 15,
          horizeTriggerPixels: 10,
          showVolumeIndicator: !1,
          volumeIndicatorWidth: 8,
          volumeDelayMills: 1e3,
          volumeDelayHideTimeoutId: 0,
          startClientX: 0,
          startClientY: 0,
          startCurrentTime: 0,
          maxDeltaTime: 0,
          minDeltaTime: 0,
          deltaTime: 0,
          fence: 0,
          holdTriggerMills: 500,
          onceMoved: !1,
          movedTriggerPixels: 2,
          timeTriggerId: 0,
        };
      },
      methods: {
        ...Object(y["c"])("AudioPlayer", {
          toggleHide: "TOGGLE_HIDE",
          togglePlaying: "TOGGLE_PLAYING",
          nextTrack: "NEXT_TRACK",
          previousTrack: "PREVIOUS_TRACK",
          rewind: "SET_REWIND_SEEK_MODE",
          forward: "SET_FORWARD_SEEK_MODE",
          setNewCurrentTime: "SET_NEW_CURRENT_TIME",
        }),
        showAudioPlayer() {
          this.hide && this.toggleHide();
        },
        startPanning(t, e) {
          ((this.startClientX = t),
            (this.startClientY = e),
            (this.startCurrentTime = this.currentTime),
            (this.maxDeltaTime = this.duration - this.startCurrentTime),
            (this.minDeltaTime = -this.startCurrentTime));
          const s = ++this.fence;
          ((this.deltaTime = 0),
            (this.timeTriggerId = setTimeout(() => {
              s == this.fence &&
                this.state == Nt.idle &&
                (console.warn("holdTrigger"), (this.state = Nt.horize));
            }, this.holdTriggerMills)));
        },
        panningMove(t, e) {
          const s = e - this.startClientY,
            a = t - this.startClientX,
            i = Math.abs(a);
          switch (
            (!this.onceMoved &&
              i >= this.movedTriggerPixels &&
              (this.onceMoved = !0),
            this.state)
          ) {
            case Nt.idle:
              if (s <= -this.vertTriggerPixels) {
                ((this.state = Nt.up), this.showAudioPlayer());
                break;
              }
              if (s >= this.vertTriggerPixels) this.state = Nt.down;
              else if (i >= this.horizeTriggerPixels) {
                ((this.state = Nt.horize),
                  (this.onceMoved = !0),
                  (this.startClientX = t),
                  (this.startClientY = e));
                break;
              }
              break;
            case Nt.up:
            case Nt.down:
              break;
            case Nt.horize:
              this.deltaTime = Math.max(
                this.minDeltaTime,
                Math.min(
                  this.maxDeltaTime,
                  (a / this.$refs.playBarBox.clientWidth) * this.duration,
                ),
              );
              break;
          }
        },
        panningEnd() {
          (this.state == Nt.idle
            ? this.showAudioPlayer()
            : this.state == Nt.horize &&
              this.onceMoved &&
              this.setNewCurrentTime(this.newCurrentTime),
            (this.state = Nt.idle),
            (this.onceMoved = !1),
            clearTimeout(this.timeTriggerId),
            (this.timeTriggerId = 0));
        },
        mouseDown(t) {
          if (1 !== t.which) return;
          const { clientX: e, clientY: s } = t;
          (this.startPanning(e, s),
            document.addEventListener("mousemove", this.mouseMove),
            document.addEventListener("mouseup", this.mouseUp));
        },
        mouseMove(t) {
          const { clientX: e, clientY: s } = t;
          this.panningMove(e, s);
        },
        mouseUp(t) {
          (this.panningEnd(),
            document.removeEventListener("mousemove", this.mouseMove),
            document.removeEventListener("mouseup", this.mouseUp));
        },
        touchStart(t) {
          if (t.changedTouches.length <= 0) return;
          const { clientX: e, clientY: s } = t.changedTouches[0];
          this.startPanning(e, s);
        },
        touchEnd(t) {
          this.panningEnd();
        },
        touchCancel(t) {
          this.state = Nt.idle;
        },
        touchMove(t) {
          if (t.changedTouches.length <= 0) return;
          const { clientX: e, clientY: s } = t.changedTouches[0];
          this.panningMove(e, s);
        },
      },
    },
    Rt = Mt,
    Dt = (s("7230"), s("f09f")),
    Ft = s("66e5"),
    Qt = s("4074"),
    Ut = s("068f"),
    Wt = s("0170"),
    zt = s("9c40"),
    jt = s("eebe"),
    Bt = s.n(jt),
    Vt = Object(g["a"])(Rt, xt, Tt, !1, null, "2591ea6c", null),
    Ht = Vt.exports;
  Bt()(Vt, "components", {
    QCard: Dt["a"],
    QItem: Ft["a"],
    QItemSection: Qt["a"],
    QImg: Ut["a"],
    QItemLabel: Wt["a"],
    QBtn: zt["a"],
  });
  var Gt = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        [
          s(
            "div",
            [
              s(
                "q-card",
                {
                  staticClass: "fixed-bottom-right box-shadow audio-player",
                  class: {
                    showStyle: t.showAudioPlayer,
                    hideStyle: !t.showAudioPlayer,
                    "audio-player-v2": t.isPlayerV2,
                    "v2-lyrics-expanded": t.showMobileV2LyricsExpanded,
                    "v2-mobile-readable-bg":
                      t.v2MobileReadableBackdrop && t.showMobileV2LyricsExpanded,
                    "v2-desktop-lyrics-open": t.isDesktopV2LyricsVisible,
                  },
                  style: { "--cover-url": "url(" + t.coverUrl + ")" },
                  attrs: { color: "primary" },
                  on: {
                    mousewheel: function (t) {
                      t.target &&
                      t.target.closest &&
                      t.target.closest(".v2-lyrics-list")
                        ? void 0
                        : t.preventDefault();
                    },
                    touchmove: function (t) {
                      t.target &&
                      t.target.closest &&
                      t.target.closest(".v2-lyrics-list")
                        ? void 0
                        : t.preventDefault();
                    },
                  },
                },
                [
                  s("div", {
                    directives: [
                      {
                        name: "touch-swipe",
                        rawName: "v-touch-swipe.mouse.down",
                        value: t.toggleHide,
                        expression: "toggleHide",
                        modifiers: { mouse: !0, down: !0 },
                      },
                    ],
                    staticClass: "pull-handler",
                    on: { click: t.toggleHide },
                  }),
                  t.isDesktopV2LyricsVisible
                    ? s(
                        "div",
                        { staticClass: "v2-desktop-lyrics-actions" },
                        [
                          s(
                            "button",
                            {
                              staticClass: "v2-desktop-lyrics-action",
                              class: { active: t.v2DesktopLyricsAutoFollow },
                              attrs: { type: "button" },
                              on: {
                                click: function (e) {
                                  ((t.v2DesktopLyricsAutoFollow =
                                    !t.v2DesktopLyricsAutoFollow),
                                    t.scheduleV2LyricFollow());
                                },
                              },
                            },
                            [
                              s("span", { staticClass: "material-icons" }, [
                                t._v(
                                  t.v2DesktopLyricsAutoFollow
                                    ? "my_location"
                                    : "location_disabled",
                                ),
                              ]),
                              s(
                                "span",
                                {
                                  staticClass:
                                    "v2-desktop-lyrics-action-label",
                                },
                                [t._v("跟踪歌词")],
                              ),
                            ],
                          ),
                          s(
                            "button",
                            {
                              staticClass: "v2-desktop-lyrics-action",
                              class: { active: !0 },
                              attrs: { type: "button" },
                              on: { click: t.openV2LyricFileSelection },
                            },
                            [
                              s("span", { staticClass: "material-icons" }, [
                                t._v("subtitles"),
                              ]),
                              s(
                                "span",
                                {
                                  staticClass:
                                    "v2-desktop-lyrics-action-label",
                                },
                                [t._v("歌词选择")],
                              ),
                            ],
                          ),
                        ],
                      )
                    : t._e(),
                  t.showMobileV2LyricsExpanded
                    ? t._e()
                    : s(
                        "div",
                    {
                      directives: [
                        {
                          name: "touch-swipe",
                          rawName: "v-touch-swipe.mouse",
                          value: t.onCoverSwipe,
                          expression: "onCoverSwipe",
                          modifiers: { mouse: !0 },
                        },
                      ],
                      staticClass:
                        "row items-center albumart q-mt-lg q-pa-sm relative-position flippable-cover-container non-selectable",
                      style: { "--scale-cover": t.playing ? 1 : 0.8 },
                    },
                    [
                      s(
                        "q-img",
                        {
                          staticClass:
                            "rounded-borders box-shadow flippable-cover cover-img",
                          class: {
                            "flip-on-front": !t.isFlipCover,
                            "flip-on-back": t.isFlipCover,
                          },
                          attrs: {
                            contain: "",
                            "img-style": {
                              transition: "opacity 1s, filter 1s",
                              filter: t.isFlipCover
                                ? "brightness(0.1) grayscale(80%)"
                                : "brightness(1) grayscale(0%)",
                              "backface-visibility": "hidden",
                            },
                            transition: "fade",
                            src: t.coverUrl,
                            ratio: 4 / 3,
                          },
                          on: {
                            dblclick: function (e) {
                              return (e.preventDefault(), t.openWorkDetail());
                            },
                          },
                          nativeOn: {
                            dblclick: function (e) {
                              return (e.preventDefault(), t.openWorkDetail(e));
                            },
                          },
                        },
                        [
                          s("AudioEqualizer", {
                            staticClass:
                              "equalizer rounded-borders box-shadow flip-on-back",
                            style: {
                              transition: "all 1s",
                              opacity: t.isFlipCover ? 1 : 0,
                            },
                            attrs: { disable: !t.isFlipCover },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                      ),
                  t.renderV2MobileLyrics(s),
                  s(
                    "div",
                    {
                      staticClass:
                        "row justify-between q-mr-sm q-my-sm v2-player-tool-row",
                    },
                    [
                      s(
                        "q-btn",
                        {
                          attrs: {
                            flat: "",
                            dense: "",
                            size: "md",
                            padding: "none sm",
                            icon: "queue_music",
                          },
                          on: {
                            click: function (e) {
                              t.showCurrentPlayList = !t.showCurrentPlayList;
                            },
                          },
                        },
                        [
                          s(
                            "q-tooltip",
                            {
                              attrs: {
                                anchor: "top middle",
                                self: "bottom middle",
                              },
                            },
                            [t._v("\n              切换曲目\n            ")],
                          ),
                        ],
                        1,
                      ),
                      t.enableVideoSource && t.isCurrentPlayingFileVideo
                        ? s(
                            "q-btn",
                            {
                              attrs: {
                                dense: "",
                                size: "md",
                                padding: "none sm",
                                flat: !t.enableVideoSourcePIP,
                                outline: t.enableVideoSourcePIP,
                                icon: "picture_in_picture_alt",
                              },
                              on: {
                                click: function (e) {
                                  return t.onSetEnableVideoSourcePIP(
                                    !t.enableVideoSourcePIP,
                                  );
                                },
                              },
                            },
                            [
                              s(
                                "q-tooltip",
                                {
                                  attrs: {
                                    anchor: "top middle",
                                    self: "bottom middle",
                                  },
                                },
                                [t._v("\n            视频画中画\n          ")],
                              ),
                            ],
                            1,
                          )
                        : t._e(),
                      t.hasLyric || t.enablePIPLyrics
                        ? s(
                            "q-btn",
                            {
                              attrs: {
                                dense: "",
                                size: "md",
                                padding: "none sm",
                                flat: !t.enablePIPLyrics,
                                outline: t.enablePIPLyrics,
                                icon: "picture_in_picture",
                              },
                              on: { click: t.setPIPLyrics },
                            },
                            [
                              s(
                                "q-tooltip",
                                {
                                  attrs: {
                                    anchor: "top middle",
                                    self: "bottom middle",
                                  },
                                },
                                [
                                  t._v(
                                    "\n              桌面歌词\n            ",
                                  ),
                                ],
                              ),
                            ],
                            1,
                          )
                        : t._e(),
                      t.renderV2FloatingLyricsButton(s),
                      t.renderV2DesktopLyricsButton(s),
                      t.isBuggyIOS
                        ? s(
                            "q-btn",
                            {
                              attrs: {
                                dense: "",
                                size: "md",
                                padding: "none sm",
                                flat: !t.enablePIPLyrics,
                                outline: t.enablePIPLyrics,
                                icon: "warning",
                                to: "/about",
                                color: "warning",
                              },
                            },
                            [
                              s(
                                "q-tooltip",
                                {
                                  attrs: {
                                    anchor: "top middle",
                                    self: "bottom middle",
                                  },
                                },
                                [
                                  t._v(
                                    "\n               iOS 17.3 后台无法连播 bug 警告\n            ",
                                  ),
                                ],
                              ),
                            ],
                            1,
                          )
                        : t._e(),
                      s(
                        "q-btn",
                        {
                          attrs: {
                            flat: "",
                            dense: "",
                            size: "md",
                            padding: "none sm",
                            icon: t.playModeIcon,
                          },
                          on: {
                            click: function (e) {
                              return t.changePlayMode();
                            },
                          },
                        },
                        [
                          s(
                            "q-tooltip",
                            {
                              attrs: {
                                anchor: "top middle",
                                self: "bottom middle",
                              },
                            },
                            [
                              t._v(
                                "\n              " +
                                  t._s(t.playModeString) +
                                  "\n            ",
                              ),
                            ],
                          ),
                        ],
                        1,
                      ),
                      s(
                        "q-btn",
                        {
                          attrs: {
                            flat: "",
                            dense: "",
                            size: "md",
                            padding: "none sm",
                            icon: "fullscreen",
                          },
                          on: { click: t.gotoFullScreenPlayer },
                        },
                        [
                          s(
                            "q-tooltip",
                            {
                              attrs: {
                                anchor: "top middle",
                                self: "bottom middle",
                              },
                            },
                            [t._v("\n              网页全屏\n            ")],
                          ),
                        ],
                        1,
                      ),
                      t.enableVisualizer
                        ? s(
                            "q-btn",
                            {
                              attrs: {
                                flat: "",
                                dense: "",
                                size: "md",
                                padding: "none sm",
                                icon: "equalizer",
                              },
                              on: { click: t.flipCover },
                            },
                            [
                              s(
                                "q-tooltip",
                                {
                                  attrs: {
                                    anchor: "top middle",
                                    self: "bottom middle",
                                  },
                                },
                                [
                                  t._v(
                                    "\n              音效均衡器\n            ",
                                  ),
                                ],
                              ),
                            ],
                            1,
                          )
                        : t._e(),
                      s(
                        "q-btn",
                        {
                          attrs: {
                            flat: "",
                            dense: "",
                            size: "md",
                            padding: "none sm",
                            icon: "more_horiz",
                          },
                        },
                        [
                          s(
                            "q-tooltip",
                            {
                              attrs: {
                                anchor: "top middle",
                                self: "bottom middle",
                              },
                            },
                            [
                              t._v(
                                "\n              更多播放设置\n            ",
                              ),
                            ],
                          ),
                          s(
                            "q-menu",
                            {
                              attrs: {
                                anchor: "bottom right",
                                self: "top right",
                                "content-class": "audio-player-more-menu",
                              },
                            },
                            [
                              s(
                                "q-item",
                                {
                                  directives: [
                                    { name: "ripple", rawName: "v-ripple" },
                                    {
                                      name: "close-popup",
                                      rawName: "v-close-popup",
                                    },
                                  ],
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      return t.openWorkDetail();
                                    },
                                  },
                                },
                                [
                                  s("q-item-section", {
                                    attrs: { avatar: "" },
                                  }),
                                  s("q-item-section", [
                                    t._v(
                                      "\n                  打开作品详情（或双击封面）\n                ",
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              s(
                                "q-item",
                                {
                                  directives: [
                                    { name: "ripple", rawName: "v-ripple" },
                                  ],
                                  attrs: { clickable: "" },
                                  on: { click: t.toggleEnableVisualizer },
                                },
                                [
                                  s(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      s("q-icon", {
                                        attrs: {
                                          name: t.enableVisualizer
                                            ? "done"
                                            : "",
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                  s("q-item-section", [
                                    t._v(
                                      "\n                  开启音频可视化（需要刷新页面）\n                ",
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              s(
                                "q-item",
                                {
                                  directives: [
                                    { name: "ripple", rawName: "v-ripple" },
                                    {
                                      name: "close-popup",
                                      rawName: "v-close-popup",
                                    },
                                  ],
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      t.showLyricSeekList = !0;
                                    },
                                  },
                                },
                                [
                                  s(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      s("q-icon", {
                                        attrs: { name: "subtitles" },
                                      }),
                                    ],
                                    1,
                                  ),
                                  s("q-item-section", [
                                    t._v(
                                      "\n                  歌词选择（旧版）\n                ",
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              t.hasLyric
                                ? s(
                                    "q-item",
                                    { staticClass: "audio-player-lyric-offset-item" },
                                    [
                                      s(
                                        "q-item-section",
                                        [
                                          t.hasLyric
                                            ? s(
                                                "q-input",
                                                {
                                                  staticClass:
                                                    "audio-player-lyric-offset-input",
                                                  staticStyle: {
                                                    "max-width": "100%",
                                                  },
                                                  attrs: {
                                                    value: t.lyricOffsetSeconds,
                                                    type: "number",
                                                    prefix: "歌词偏移",
                                                    suffix: "s",
                                                    borderless: "",
                                                    dense: "",
                                                    clearable: "",
                                                    "input-style":
                                                      "text-align: right;",
                                                  },
                                                  on: {
                                                    input: t.lyricOffsetChange,
                                                  },
                                                },
                                                [
                                                  s(
                                                    "template",
                                                    { slot: "before" },
                                                    [
                                                      s("q-btn", {
                                                        attrs: {
                                                          size: "sm",
                                                          padding: "md xs",
                                                          icon: "sync_alt",
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            t.lyricSyncDialog =
                                                              !0;
                                                          },
                                                        },
                                                      }),
                                                    ],
                                                    1,
                                                  ),
                                                  s(
                                                    "template",
                                                    { slot: "append" },
                                                    [
                                                      s(
                                                        "div",
                                                        {
                                                          staticClass: "column",
                                                        },
                                                        [
                                                          s("q-btn", {
                                                            attrs: {
                                                              size: "xs",
                                                              icon: "arrow_drop_up",
                                                            },
                                                            on: {
                                                              click: function (
                                                                e,
                                                              ) {
                                                                return t.lyricOffsetChange(
                                                                  t.lyricOffsetSeconds +
                                                                    0.1,
                                                                );
                                                              },
                                                            },
                                                          }),
                                                          s("q-btn", {
                                                            attrs: {
                                                              size: "xs",
                                                              icon: "arrow_drop_down",
                                                            },
                                                            on: {
                                                              click: function (
                                                                e,
                                                              ) {
                                                                return t.lyricOffsetChange(
                                                                  t.lyricOffsetSeconds -
                                                                    0.1,
                                                                );
                                                              },
                                                            },
                                                          }),
                                                        ],
                                                        1,
                                                      ),
                                                    ],
                                                  ),
                                                ],
                                                2,
                                              )
                                            : t._e(),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  )
                                : t._e(),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "div",
                    {
                      staticClass:
                        "row items-center q-mx-sm q-mb-sm non-selectable",
                    },
                    [
                      s("div", { staticClass: "col-auto relative-position" }, [
                        t._v(t._s(t.formatSeconds(t.currentTime))),
                      ]),
                      s("AudioElement", { staticClass: "col" }),
                      s("div", { staticClass: "col-auto relative-position" }, [
                        t._v(t._s(t.formatSeconds(t.duration))),
                      ]),
                      s(
                        "div",
                        {
                          staticClass: "text-caption",
                          staticStyle: {
                            position: "absolute",
                            left: "50%",
                            transform: "translate(-50%, 70%)",
                          },
                        },
                        [
                          t.playingTranscode
                            ? s("TranscodingStatus", {
                                attrs: { trackHash: t.currentPlayingFile.hash },
                              })
                            : t._e(),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  t.$q.platform.is.ios
                    ? s("div", { staticStyle: { height: "5px" } })
                    : t._e(),
                  s(
                    "div",
                    { staticClass: "column text-center non-selectable " },
                    [
                      s(
                        "Scrollable",
                        {
                          staticClass: "full-width",
                          attrs: { stop: t.hide, name: "audioTitle" },
                        },
                        [
                          s(
                            "span",
                            {
                              staticClass:
                                "audio-name relative-position q-px-md",
                            },
                            [t._v(t._s(t.currentAudioDisplayTitle))],
                          ),
                        ],
                      ),
                      s(
                        "Scrollable",
                        {
                          staticClass: "full-width",
                          attrs: { stop: t.hide, name: "workTitle" },
                        },
                        [
                          s(
                            "span",
                            {
                              staticClass:
                                "work-name relative-position q-px-md",
                            },
                            [t._v(t._s(t.currentWorkDisplayTitle))],
                          ),
                        ],
                      ),
                    ],
                    1,
                  ),
                  t.$q.platform.is.ios
                    ? s("div", { staticStyle: { height: "10px" } })
                    : t._e(),
                  s(
                    "div",
                    {
                      staticClass: "row justify-around",
                      staticStyle: { height: "65px" },
                    },
                    [
                      s("q-btn", {
                        staticClass: "col-auto",
                        staticStyle: { width: "55px" },
                        attrs: {
                          flat: "",
                          dense: "",
                          size: "lg",
                          icon: "skip_previous",
                        },
                        on: {
                          click: function (e) {
                            return t.previousTrack();
                          },
                        },
                      }),
                      s("q-btn", {
                        staticClass: "col-auto",
                        staticStyle: { width: "55px" },
                        attrs: {
                          flat: "",
                          dense: "",
                          size: "lg",
                          icon: t.rewindIcon,
                        },
                        on: {
                          click: function (e) {
                            return t.rewind(!0);
                          },
                        },
                      }),
                      s("q-btn", {
                        staticClass: "col-auto",
                        staticStyle: { width: "65px" },
                        attrs: {
                          flat: "",
                          dense: "",
                          size: "28px",
                          icon: t.playingIcon,
                        },
                        on: {
                          click: function (e) {
                            return t.togglePlaying();
                          },
                        },
                      }),
                      s("q-btn", {
                        staticClass: "col-auto",
                        staticStyle: { width: "55px" },
                        attrs: {
                          flat: "",
                          dense: "",
                          size: "lg",
                          icon: t.forwardIcon,
                        },
                        on: {
                          click: function (e) {
                            return t.forward(!0);
                          },
                        },
                      }),
                      s("q-btn", {
                        staticClass: "col-auto",
                        staticStyle: { width: "55px" },
                        attrs: {
                          flat: "",
                          dense: "",
                          size: "lg",
                          icon: "skip_next",
                        },
                        on: {
                          click: function (e) {
                            return t.nextTrack();
                          },
                        },
                      }),
                    ],
                    1,
                  ),
                  t.$q.platform.is.ios
                    ? t._e()
                    : s(
                        "div",
                        {
                          staticClass: "row items-center q-mx-lg",
                          staticStyle: { height: "50px" },
                        },
                        [
                          s("q-icon", {
                            staticClass: "col-auto",
                            attrs: { name: "volume_down", size: "sm" },
                          }),
                          s("q-slider", {
                            staticClass: "col q-mx-md",
                            attrs: {
                              min: 0,
                              max: 1,
                              step: 0.01,
                              disable: t.proxyGain > 1,
                            },
                            model: {
                              value: t.volume,
                              callback: function (e) {
                                t.volume = e;
                              },
                              expression: "volume",
                            },
                          }),
                          s("q-icon", {
                            staticClass: "col-auto",
                            attrs: { name: "volume_up", size: "sm" },
                          }),
                          t.enableVisualizer && t.volume >= 1
                            ? s("q-slider", {
                                staticClass: "q-mx-sm",
                                staticStyle: { "max-width": "20%" },
                                attrs: {
                                  min: 1,
                                  max: 1.5,
                                  step: 0.01,
                                  label: "",
                                },
                                model: {
                                  value: t.proxyGain,
                                  callback: function (e) {
                                    t.proxyGain = e;
                                  },
                                  expression: "proxyGain",
                                },
                              })
                            : t._e(),
                        ],
                        1,
                      ),
                ],
              ),
            ],
            1,
          ),
          t.renderV2DesktopLyrics(s),
          t.renderCurrentPlayListDialog(s),
          t.renderAddWorkToQueueDialog(s),
          s(
            "q-dialog",
            {
              attrs: { seamless: "", position: "top" },
              model: {
                value: t.lyricSyncDialog,
                callback: function (e) {
                  t.lyricSyncDialog = e;
                },
                expression: "lyricSyncDialog",
              },
            },
            [
              s(
                "q-card",
                { staticClass: "bg-primary text-white" },
                [
                  s("q-card-section", [
                    s("div", { staticClass: "text-h6" }, [
                      t._v("歌词同步辅助工具"),
                    ]),
                  ]),
                  s("q-card-section", { staticClass: "q-pt-none" }, [
                    t._v(
                      "\n        这是一个辅助计算歌词偏移量的工具，当音频和歌词的时间出现不同步的时候，使用此工具来计算修复的歌词偏移量。\n        请在正常播放状态下播放音频和歌词，从声音和歌词中找到一个关键点A，对应声音A和歌词A，\n        判断先听到声音还是先看到歌词，当其中一个出现时，点击下方对应的按钮，接着在另一个元素出现时再次点击一次按钮。\n        这里将会计算两次点击之间的时间差，点击“应用偏移量”即可立即刚才两次点击的时间差作为歌词偏移量。\n      ",
                    ),
                  ]),
                  "ready" === t.fixState
                    ? s(
                        "q-card-section",
                        [
                          s(
                            "q-btn",
                            {
                              on: {
                                click: function (e) {
                                  return t.startFixLyricSync("lyric");
                                },
                              },
                            },
                            [t._v("歌词先出现了")],
                          ),
                          s(
                            "q-btn",
                            {
                              on: {
                                click: function (e) {
                                  return t.startFixLyricSync("audio");
                                },
                              },
                            },
                            [t._v("先听到了声音")],
                          ),
                        ],
                        1,
                      )
                    : t._e(),
                  "measure" === t.fixState
                    ? s(
                        "q-card-section",
                        [
                          s("q-btn", { on: { click: t.stopFixLyricSync } }, [
                            t._v(
                              t._s(
                                "audio" == t.fixWhoStartFirst
                                  ? "歌词这个时候出现了"
                                  : "这个时候才听到了声音",
                              ),
                            ),
                          ]),
                        ],
                        1,
                      )
                    : t._e(),
                  s(
                    "q-card-actions",
                    { attrs: { align: "right" } },
                    [
                      s(
                        "q-btn",
                        {
                          on: {
                            click: function (e) {
                              t.lyricSyncDialog = !1;
                            },
                          },
                        },
                        [t._v("关闭")],
                      ),
                      "ready" !== t.fixState
                        ? s(
                            "q-btn",
                            {
                              on: {
                                click: function (e) {
                                  t.fixState = "ready";
                                },
                              },
                            },
                            [t._v("重新计量偏移量")],
                          )
                        : t._e(),
                      "done" === t.fixState
                        ? s("q-btn", { on: { click: t.fixApply } }, [
                            t._v("应用偏移量 " + t._s(t.showDeltaSeconds)),
                          ])
                        : t._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-dialog",
            {
              attrs: { seamless: "" },
              model: {
                value: t.showLyricSeekList,
                callback: function (e) {
                  t.showLyricSeekList = e;
                },
                expression: "showLyricSeekList",
              },
            },
            [s("LyricSelection", { ref: "lyricSelection" })],
            1,
          ),
        ],
        1,
      );
    },
    Yt = [],
    Kt = s("b76a"),
    Jt = s.n(Kt),
    Zt = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        {
          staticClass: "q-px-md",
          on: {
            "!mousedown": function (e) {
              return t.onPanSlider("start");
            },
            "!mouseup": function (e) {
              return t.onPanSlider("end");
            },
          },
        },
        [
          s("q-slider", {
            attrs: {
              min: 0,
              max: t.duration,
              step: 0.01,
              label: "",
              "label-value": t.formatSeconds(t.displayCurrentTime),
            },
            on: { change: t.onChangeSlider, pan: t.onPanSlider },
            model: {
              value: t.changeCurrentTime,
              callback: function (e) {
                t.changeCurrentTime = e;
              },
              expression: "changeCurrentTime",
            },
          }),
          s(
            "vue-plyr",
            {
              ref: "plyr",
              staticClass: "vue-plyr",
              attrs: {
                hideControls: !1,
                emit: [
                  "canplay",
                  "timeupdate",
                  "ended",
                  "seeked",
                  "playing",
                  "waiting",
                  "pause",
                ],
              },
              on: {
                canplay: function (e) {
                  return t.onCanplay();
                },
                timeupdate: function (e) {
                  return t.onTimeupdate();
                },
                ended: function (e) {
                  return t.onEnded();
                },
                seeked: function (e) {
                  return t.onSeeked();
                },
                playing: function (e) {
                  return t.onPlaying();
                },
                waiting: function (e) {
                  return t.onWaiting();
                },
                pause: function (e) {
                  return t.onPause();
                },
              },
            },
            [
              t.enableVideoSource
                ? s(
                    "video",
                    {
                      staticClass: "hide-in-global-page-for-pip",
                      staticStyle: { display: "inline" },
                      attrs: {
                        id: "mediaVideo",
                        crossorigin: "anonymous",
                        playsinline: "",
                        controls: "controls",
                      },
                    },
                    [
                      t.source
                        ? s("source", { attrs: { src: t.source } })
                        : t._e(),
                    ],
                  )
                : s("audio", { attrs: { crossorigin: "anonymous" } }, [
                    t.source
                      ? s("source", { attrs: { src: t.source } })
                      : t._e(),
                  ]),
            ],
          ),
        ],
        1,
      );
    },
    Xt = [];
  const te = /^(?:\[[\d:.]+\])+/g,
    ee = /\d{1,3}(:\d{1,3}){0,2}(?:\.\d{1,3})/g,
    se = { title: "ti", artist: "ar", album: "al", offset: "offset", by: "by" },
    ae =
      "object" == typeof performance && performance.now
        ? performance.now.bind(performance)
        : Date.now.bind(Date),
    ie = function () {},
    re = {
      invokeTime: 0,
      animationFrameId: null,
      timeoutId: null,
      callback: null,
      thresholdTime: 200,
      run() {
        this.animationFrameId = window.requestAnimationFrame(() => {
          this.animationFrameId = null;
          let t = this.invokeTime - ae();
          if (t > 0)
            return t < this.thresholdTime
              ? void this.run()
              : (this.timeoutId = setTimeout(() => {
                  ((this.timeoutId = null), this.run());
                }, t - this.thresholdTime));
          this.callback(t);
        });
      },
      start(t = ie, e = 0) {
        ((this.callback = t), (this.invokeTime = ae() + e), this.run());
      },
      clear() {
        (this.animationFrameId &&
          (window.cancelAnimationFrame(this.animationFrameId),
          (this.animationFrameId = null)),
          this.timeoutId &&
            (window.clearTimeout(this.timeoutId), (this.timeoutId = null)),
          (this.callback = null));
      },
    },
    oe = /^0+(\d+)/,
    ne = /:0+(\d+)/g,
    le = /\.0+(\d+)/,
    ce = (t) => t.replace(oe, "$1").replace(ne, ":$1").replace(le, ".$1"),
    de = (t, e) => {
      const s = e.split(/\r\n|\n|\r/);
      for (let a = 0; a < s.length; a++) {
        const e = s[a].trim();
        let i = te.exec(e);
        if (i) {
          const s = i[0],
            a = e.replace(te, "").trim();
          if (a) {
            const e = s.match(ee);
            if (null == e) continue;
            for (let s of e) {
              const e = ce(s),
                i = t[e];
              i && i.extendedLyrics.push(a);
            }
          }
        }
      }
    },
    ue = { title: "", artist: "", album: "", offset: 0, by: "" };
  class he {
    constructor(t = ie, e = ie, s = "", a = [], i = 0, r = 1, o = !0) {
      ((this.lyric = s),
        (this.extendedLyrics = a),
        (this.tags = { ...ue }),
        (this.lines = []),
        (this.onPlay = e),
        (this.onSetLyricLines = t),
        (this.isPlay = !1),
        (this.curLineNum = 0),
        (this.maxLine = 0),
        (this.offset = i),
        (this.isRemoveBlankLine = o),
        (this._playbackRate = r),
        (this._performanceTime = 0),
        (this._startTime = 0),
        (this._precomputed_offset = 0),
        this._init());
    }
    _initTimeStates() {
      ((this.currentSeconds = -1),
        (this.currentLineNumber = 0),
        (this.minBoundSeconds = 1 / 0),
        (this.maxBoundSeconds = -1 / 0));
    }
    _init() {
      (this._initTimeStates(),
        null == this.lyric && (this.lyric = ""),
        null == this.extendedLyrics && (this.extendedLyrics = []),
        this._initTag(),
        this._initLines(),
        this.onSetLyricLines(this.lines));
    }
    _initTag() {
      this.tags = { ...ue };
      for (let t of Object.keys(ue)) {
        const e = this.lyric.match(new RegExp(`\\[${se[t]}:([^\\]]*)]`, "i"));
        e && (this.tags[t] = e[1]);
      }
      if (this.tags.offset) {
        let t = parseInt(this.tags.offset);
        this.tags.offset = Number.isNaN(t) ? 0 : t;
      } else this.tags.offset = 0;
      this._precomputed_offset = Math.trunc(this.tags.offset + this.offset);
    }
    _initLines() {
      this.lines = [];
      const t = this.lyric.split(/\r\n|\n|\r/),
        e = {},
        s = t.length;
      for (let a = 0; a < s; a++) {
        const s = t[a].trim();
        let i = te.exec(s);
        if (i) {
          const t = i[0],
            a = s.replace(te, "").trim();
          if (a || !this.isRemoveBlankLine) {
            const s = t.match(ee);
            if (null == s) continue;
            for (let t of s) {
              const s = ce(t);
              if (e[s]) {
                e[s].extendedLyrics.push(a);
                continue;
              }
              const i = s.split(":");
              if (!(i.length > 3)) {
                if (i.length < 3)
                  for (let t = 3 - i.length; t--; ) i.unshift("0");
                (i[2].includes(".") && i.splice(2, 1, ...i[2].split(".")),
                  (e[s] = {
                    time:
                      60 * parseInt(i[0]) * 60 * 1e3 +
                      60 * parseInt(i[1]) * 1e3 +
                      1e3 * parseInt(i[2]) +
                      parseInt(i[3] || "0"),
                    text: a,
                    extendedLyrics: [],
                  }));
              }
            }
          }
        }
      }
      for (const a of this.extendedLyrics) de(e, a);
      ((this.lines = Object.values(e)),
        this.lines.sort((t, e) => t.time - e.time),
        (this.maxLine = this.lines.length - 1));
    }
    _currentTime() {
      return (
        (ae() - this._performanceTime) * this._playbackRate + this._startTime
      );
    }
    _findCurLineNum(t, e = 0) {
      if (t <= 0) return 0;
      const s = this.lines.length;
      for (let a = e; a < s; a++)
        if (t < this.lines[a].time) return 0 === a ? 0 : a - 1;
      return s - 1;
    }
    _handleMaxLine() {
      (this.onPlay(this.curLineNum, this.lines[this.curLineNum].text),
        this.pause());
    }
    _refresh() {
      if ((this.curLineNum++, this.curLineNum >= this.maxLine))
        return void this._handleMaxLine();
      let t = this.lines[this.curLineNum];
      const e = this._currentTime(),
        s = e - t.time;
      if (s >= 0 || 0 === this.curLineNum) {
        let a = this.lines[this.curLineNum + 1];
        const i = (a.time - t.time - s) / this._playbackRate;
        if (i > 0)
          (this.isPlay &&
            re.start(() => {
              this.isPlay && this._refresh();
            }, i),
            this.onPlay(this.curLineNum, t.text));
        else {
          let t = this._findCurLineNum(e, this.curLineNum + 1);
          (t > this.curLineNum && (this.curLineNum = t - 1), this._refresh());
        }
      } else
        ((this.curLineNum = this._findCurLineNum(e, this.curLineNum) - 1),
          this._refresh());
    }
    play(t = 0) {
      this.lines.length &&
        (this.pause(),
        (this.isPlay = !0),
        (this._performanceTime =
          ae() - Math.trunc(this.tags.offset + this.offset)),
        (this._startTime = t),
        (this.curLineNum = this._findCurLineNum(this._currentTime()) - 1),
        this._refresh());
    }
    pause() {
      if (!this.isPlay) return;
      if (((this.isPlay = !1), re.clear(), this.curLineNum === this.maxLine))
        return;
      const t = this._findCurLineNum(this._currentTime());
      this.curLineNum !== t &&
        ((this.curLineNum = t), this.onPlay(t, this.lines[t].text));
    }
    setPlaybackRate(t) {
      ((this._playbackRate = t),
        this.lines.length && this.isPlay && this.play(this._currentTime()));
    }
    setLyric(t, e = []) {
      (this.isPlay && this.pause(),
        (this.lyric = t),
        (this.extendedLyrics = e),
        this._init());
    }
    setLyricObject(t) {
      (this._initTimeStates(),
        (this.tags = { ...ue }),
        (this._precomputed_offset = Math.trunc(this.tags.offset + this.offset)),
        (this.lines = t.slice(0)));
    }
    updateTime(t) {
      if (0 === this.lines.length) return !1;
      if (this.minBoundSeconds <= t && t < this.maxBoundSeconds) return !1;
      const e = 1e3 * t + this._precomputed_offset,
        s =
          this.currentLineNumber > 0 && t > this.maxBoundSeconds
            ? this.currentLineNumber
            : 0,
        a = this._findCurLineNum(e, s),
        i = this.lines[a];
      return (
        e < i.time
          ? ((this.minBoundSeconds = 0 == a ? 0 : this.lines[a - 1].time / 1e3),
            (this.maxBoundSeconds = i.time / 1e3))
          : a + 1 < this.lines.length
            ? void 0 !== i.timeEnd
              ? e < i.timeEnd
                ? ((this.minBoundSeconds = i.time / 1e3),
                  (this.maxBoundSeconds = i.timeEnd / 1e3))
                : ((this.minBoundSeconds = i.timeEnd / 1e3),
                  (this.maxBoundSeconds = this.lines[a + 1].time / 1e3))
              : ((this.minBoundSeconds = i.time / 1e3),
                (this.maxBoundSeconds = this.lines[a + 1].time / 1e3))
            : ((this.minBoundSeconds = i.time / 1e3),
              (this.maxBoundSeconds = (i.timeEnd || 1 / 0) / 1e3)),
        (this.currentLineNumber = a),
        !0
      );
    }
    getCurrentLyric(t) {
      const e = "...";
      if (0 === this.lines.length) return e;
      if (t) {
        const s = 1e3 * t + this._precomputed_offset,
          a = this.lines[this.currentLineNumber],
          i = this.lines[this.currentLineNumber + 1],
          r = i ? i.time : a.timeEnd || 1 / 0;
        return a.time <= s && s < r ? a.text : e;
      }
      return this.lines[this.currentLineNumber].text;
    }
  }
  var me = he,
    pe = {
      methods: {
        showSuccNotif(t) {
          this.$q.notify({
            message: t,
            color: "positive",
            icon: "done",
            timeout: 500,
          });
        },
        showToast(t, e) {
          this.$q.notify({ message: t, color: "secondary", timeout: e });
        },
        showWarnNotif(t) {
          this.$q.notify({ message: t, color: "warning", icon: "warning" });
        },
        showErrNotif(t) {
          this.$q.notify({ message: t, color: "negative", icon: "bug_report" });
        },
        workRoute(t) {
          const e =
            this.$store &&
            this.$store.state &&
            this.$store.state.AudioPlayer
              ? this.$store.state.AudioPlayer.workUrlFormat
              : workUrlFormatDefault();
          return workRouteForMetadata(t, e);
        },
      },
    };
  var ge = {
      name: "AudioElement",
      mixins: [pe],
      data() {
        return {
          lrcObj: null,
          isChangingCurrentTime: !1,
          changeCurrentTime: 0,
        };
      },
      computed: {
        player() {
          return this.$refs.plyr.player;
        },
        source() {
          const t = this.$q.localStorage.getItem("jwt-token") || "";
          if (
            this.currentPlayingFile.hash &&
            this.checkCurrentPlayingFileShouldUseTranscoding()
          ) {
            const e = this.transcodeBitRate;
            return appendTokenToMediaUrl(
              `/asmr-site/api/media/transcode/${this.currentPlayingFile.hash}?bitRate=${e}`,
              t,
            );
          }
          return this.currentPlayingFile.mediaStreamUrl
            ? appendTokenToMediaUrl(this.currentPlayingFile.mediaStreamUrl, t)
            : this.currentPlayingFile.hash
              ? appendTokenToMediaUrl(
                  `/asmr-site/api/media/stream/${this.currentPlayingFile.hash}`,
                  t,
                )
              : "";
        },
        ...Object(y["d"])("AudioPlayer", [
          "playing",
          "queue",
          "queueIndex",
          "playMode",
          "muted",
          "volume",
          "sleepTime",
          "sleepMode",
          "rewindSeekTime",
          "forwardSeekTime",
          "rewindSeekMode",
          "forwardSeekMode",
          "enableVisualizer",
          "resumeHistroySeconds",
          "playWorkId",
          "visualPlayerCoverUrl",
          "duration",
          "currentTime",
          "newCurrentTime",
          "enableVideoSource",
          "lyricOffsetSeconds",
          "enablePIPLyrics",
          "lyricLines",
          "hasLyric",
          "transcodeOption",
          "transcodeFromTypes",
        ]),
        ...Object(y["b"])("AudioPlayer", [
          "currentPlayingFile",
          "resumeHistroyDone",
          "transcodeBitRate",
        ]),
        displayCurrentTime() {
          return this.isChangingCurrentTime
            ? this.changeCurrentTime
            : this.currentTime;
        },
      },
      watch: {
        playing(t) {
          this.player.duration &&
            (t ? this.player.play() : this.player.pause());
        },
        source(t) {
          t &&
            (this.player.media.load(),
            this.loadLrcFile(),
            this.updateMediaSessionMetadata(),
            this.SET_PLAYING_TRANSCODE(
              this.checkCurrentPlayingFileShouldUseTranscoding(),
            ));
        },
        muted(t) {
          this.player.muted = t;
        },
        volume(t) {
          t < 0 || t > 1 || (this.player.volume = t);
        },
        rewindSeekMode(t) {
          t &&
            (this.player.rewind(this.rewindSeekTime),
            this.SET_REWIND_SEEK_MODE(!1));
        },
        forwardSeekMode(t) {
          t &&
            (this.player.forward(this.forwardSeekTime),
            this.SET_FORWARD_SEEK_MODE(!1));
        },
        currentTime(t) {
          this.isChangingCurrentTime ||
            (this.changeCurrentTime = this.currentTime);
        },
        newCurrentTime(t) {
          t < 0 ||
            ((this.player.currentTime = t), this.SET_NEW_CURRENT_TIME(-1));
        },
        lyricOffsetSeconds() {
          this.updateLyric();
        },
        lyricLines(t) {
          this.lrcObj.setLyricObject(t);
        },
      },
      created() {
        this.updateLyric = Object(Pt["a"])(this.updateLyric, 100, !0);
      },
      methods: {
        formatSeconds: W,
        onPause() {
          (this.updateLyric(), this.PAUSE());
        },
        onPlaying() {
          (this.updateLyric(), this.PLAY());
          const t = this.source;
          setTimeout(() => {
            this.source === t
              ? this.checkNextPlayingFileShouldUseTranscodingAndPreTranscode()
              : console.log(
                  "source changed, cancel this pre transcoding request",
                );
          }, 3e4);
        },
        onWaiting() {
          (this.updateLyric(), this.PLAY());
        },
        ...Object(y["c"])("AudioPlayer", [
          "SET_DURATION",
          "SET_CURRENT_TIME",
          "PAUSE",
          "PLAY",
          "SET_TRACK",
          "NEXT_TRACK",
          "PREVIOUS_TRACK",
          "SET_CURRENT_LYRIC",
          "SET_CURRENT_LYRIC_LINE_NUMBER",
          "SET_LYRIC_LINES",
          "SET_VOLUME",
          "CLEAR_SLEEP_MODE",
          "SET_REWIND_SEEK_MODE",
          "SET_FORWARD_SEEK_MODE",
          "SET_AUDIO_ANALYSER",
          "RESUME_HISTROY_SECONDS_DONE",
          "SET_HAS_LYRIC",
          "SET_NEW_CURRENT_TIME",
          "SET_PLAYING_TRANSCODE",
        ]),
        onCanplay() {
          (this.SET_DURATION(this.player.duration),
            this.playing &&
              this.player.currentTime !== this.player.duration &&
              this.player.play(),
            this.resumeHistroyDone ||
              ((this.player.currentTime = this.resumeHistroySeconds),
              this.RESUME_HISTROY_SECONDS_DONE(),
              this.$q.notify({ message: "已恢复播放历史", timeout: 1e3 })));
        },
        updateLyric() {
          const t = this.player.currentTime + this.lyricOffsetSeconds;
          this.lrcObj.updateTime(t) &&
            (this.SET_CURRENT_LYRIC(this.lrcObj.getCurrentLyric(t)),
            this.SET_CURRENT_LYRIC_LINE_NUMBER(this.lrcObj.currentLineNumber));
        },
        onTimeupdate() {
          (this.SET_CURRENT_TIME(this.player.currentTime),
            this.hasLyric && this.updateLyric(),
            this.sleepMode &&
              this.sleepTime &&
              Date.now() > this.sleepTime &&
              (this.$q.sessionStorage.set("sleepTime", null),
              this.$q.sessionStorage.set("sleepMode", !1),
              this.PAUSE(),
              this.CLEAR_SLEEP_MODE()));
        },
        onEnded() {
          switch (this.playMode.name) {
            case "all repeat":
              this.queueIndex === this.queue.length - 1
                ? this.SET_TRACK(0)
                : this.NEXT_TRACK();
              break;
            case "repeat once":
              ((this.player.currentTime = 0), this.player.play(), this.PLAY());
              break;
            case "shuffle": {
              const t = Math.floor(Math.random() * this.queue.length);
              (this.SET_TRACK(t),
                t === this.queueIndex && (this.player.currentTime = 0));
              break;
            }
            default:
              this.queueIndex === this.queue.length - 1
                ? this.PAUSE()
                : this.NEXT_TRACK();
          }
        },
        onSeeked() {
          this.updateLyric();
        },
        createLrcObj() {
          this.lrcObj = new me();
        },
        async loadLrcFile() {
          const t = this.$q.localStorage.getItem("jwt-token") || "",
            e = this.queue[this.queueIndex].hash,
            s = `/asmr-site/api/media/check-lrc/${e}?token=${t}`;
          try {
            const a = localStorage.getItem("kikoeruLyricChoice:" + e);
            if (a) {
              try {
                const e = JSON.parse(a);
                if (e && e.hash) {
                  const s = await this.$axios.get(
                    "/asmr-site/api/media/fetch-lrc/" +
                      (e.isAI
                        ? `${this.playWorkId}/${e.hash}/1`
                        : e.hash + "/0") +
                      `?token=${t}`,
                  );
                  if (s.data && s.data.result !== !1) {
                    const t = s.data.lrc;
                    return (
                      console.log("读入浏览器选择的歌词"),
                      this.SET_LYRIC_LINES(t),
                      void this.$nextTick(() => {
                        (this.updateLyric(), this.SET_HAS_LYRIC(!0));
                      })
                    );
                  }
                }
              } catch (i) {
                (console.warn("load lyric choice failed", i),
                  localStorage.removeItem("kikoeruLyricChoice:" + e));
              }
            }
            const i = await this.$axios.get(s);
            if (!i.data.result)
              return (console.log("无歌词"), void this.resetToNoLyricStatus());
            console.log("读入歌词");
            const r = i.data.lrc;
            (this.SET_LYRIC_LINES(r),
              this.$nextTick(() => {
                (this.updateLyric(), this.SET_HAS_LYRIC(!0));
              }));
          } catch (a) {
            (a.response
              ? 401 !== a.response.status &&
                (console.error(a),
                this.showErrNotif(
                  a.response.data.error ||
                    `${a.response.status} ${a.response.statusText}`,
                ))
              : (console.error(a), this.showErrNotif(a.message || a)),
              this.SET_HAS_LYRIC(!1));
          }
        },
        resetToNoLyricStatus() {
          (this.lrcObj.setLyric(""),
            this.SET_CURRENT_LYRIC(""),
            this.SET_LYRIC_LINES([]),
            this.SET_HAS_LYRIC(!1));
        },
        updateMediaSessionMetadata() {
          console.log("try update media session");
          try {
            0 == this.playWorkId
              ? (navigator.mediaSession.metadata = null)
	              : (navigator.mediaSession.metadata = new window.MediaMetadata({
	                  title: queueItemAudioDisplayText(
	                    this.currentPlayingFile,
	                    this.currentPlayingFile.title,
	                  ),
	                  artist: "",
	                  album: queueItemDisplayText(
	                    this.currentPlayingFile,
	                    this.currentPlayingFile.workTitle,
	                  ),
                  artwork: [
                    {
                      src: this.genCoverUrl(this.playWorkId, "main"),
                      sizes: "560x560",
                      type: "image/jpeg",
                    },
                    {
                      src: this.genCoverUrl(this.playWorkId, "240x240"),
                      sizes: "240x240",
                      type: "image/jpeg",
                    },
                    {
                      src: this.genCoverUrl(this.playWorkId, "sam"),
                      sizes: "100x100",
                      type: "image/jpeg",
                    },
                  ],
                }));
          } catch (t) {
            console.warn("set mediasession failed, because: ", t);
          }
        },
        genCoverUrl(t, e) {
          const s = this.$q.localStorage.getItem("jwt-token") || "";
          return "visualPlayerCover" == e
            ? this.visualPlayerCoverUrl
              ? appendTokenToMediaUrl(this.visualPlayerCoverUrl, s)
              : ""
            : 0 != t
              ? `/asmr-site/api/cover/${t}?type=${e}&token=${s}`
              : "";
        },
        onChangeSlider(t) {
          (console.log("player current time is ", this.player.currentTime),
            console.log("slider change value to ", t),
            console.log("global current time is ", this.currentTime),
            (this.player.currentTime = t));
        },
        onPanSlider(t) {
          (console.warn(" pan with phase = ", t),
            "start" == t
              ? ((this.isChangingCurrentTime = !0),
                (this.changeCurrentTime = this.currentTime))
              : setTimeout(() => {
                  this.isChangingCurrentTime = !1;
                }, 100));
        },
        checkCurrentPlayingFileShouldUseTranscoding() {
          return (
            this.transcodeOption !== Q.OFF &&
            this.transcodeFromTypes.includes(
              P(this.currentPlayingFile.title).toLowerCase(),
            )
          );
        },
        async checkNextPlayingFileShouldUseTranscodingAndPreTranscode() {
          if (this.transcodeOption === Q.OFF) return;
          const t = this.queue[this.queueIndex + 1];
          if (t && this.transcodeFromTypes.includes(P(t.title).toLowerCase())) {
            console.log("pre transcode next file:", t.title);
            const e = await A.askForTranscoding(t.hash, this.transcodeBitRate);
            console.log("pre transcode request: ", e);
          }
        },
      },
      mounted() {
        this.SET_VOLUME(this.player.volume);
        const t = () => {
          document.removeEventListener("click", t);
          const e = new (window.AudioContext || window.webkitAudioContext)(),
            s = {
              left: e.createAnalyser(),
              right: e.createAnalyser(),
              audioCtx: e,
              splitter: null,
              merger: null,
              audioSrc: null,
              gain: null,
            };
          ((s.audioSrc = e.createMediaElementSource(this.player.media)),
            (s.splitter = e.createChannelSplitter(2)),
            (s.merger = e.createChannelMerger(2)),
            (s.gain = e.createGain()),
            s.audioSrc.connect(s.splitter),
            s.splitter.connect(s.left, 0),
            s.splitter.connect(s.right, 1),
            s.audioSrc.connect(s.gain),
            s.gain.connect(e.destination),
            this.SET_AUDIO_ANALYSER(s));
        };
        (this.enableVisualizer &&
          (document.addEventListener("click", t),
          this.$q.platform.is.safari &&
            this.$q.platform.is.mobile &&
            this.$q.notify({
              message:
                "监测到safari平台上开启了音频可视化功能，注意移动端safari有bug，如果没有声音的话，请关闭音频可视化功能",
              timeout: 5e3,
            })),
          this.createLrcObj(),
          this.source && this.loadLrcFile());
      },
    },
    fe = ge,
    ve = (s("bdea"), s("c1d0")),
    ye = Object(g["a"])(fe, Zt, Xt, !1, null, "06a22dec", null),
    we = ye.exports;
  Bt()(ye, "components", { QSlider: ve["a"] });
  var be = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        { staticClass: "container" },
        [
          s("div", { staticClass: "text-h5" }, [t._v("均衡器")]),
          s("q-toggle", {
            attrs: {
              disable: t.disable,
              color: "primary",
              icon: t.isFlipLeftRightChannel ? "sync_alt" : "headphones",
              label: "左右声道交换",
            },
            model: {
              value: t.isFlipLeftRightChannel,
              callback: function (e) {
                t.isFlipLeftRightChannel = e;
              },
              expression: "isFlipLeftRightChannel",
            },
          }),
        ],
        1,
      );
    },
    _e = [],
    qe = {
      name: "AudioEqualizer",
      props: { disable: { type: Boolean, required: !0 } },
      data() {
        return { isFlipLeftRightChannel: !1 };
      },
      watch: {
        isFlipLeftRightChannel(t) {
          this.flipLeftRightChannel(t);
        },
      },
      computed: {
        ...Object(y["d"])("AudioPlayer", ["enableVisualizer", "audioAnalyser"]),
      },
      methods: {
        flipLeftRightChannel(t) {
          const {
            audioSrc: e,
            merger: s,
            splitter: a,
            audioCtx: i,
            left: r,
            right: o,
            gain: n,
          } = this.audioAnalyser;
          t
            ? (e.disconnect(n),
              a.disconnect(),
              a.connect(o, 0),
              a.connect(r, 1),
              a.connect(s, 0, 1),
              a.connect(s, 1, 0),
              s.connect(n))
            : (s.disconnect(),
              a.disconnect(),
              a.connect(r, 0),
              a.connect(o, 1),
              e.connect(n));
        },
      },
    },
    ke = qe,
    Se = s("9564"),
    Ce = Object(g["a"])(ke, be, _e, !1, null, "639994c8", null),
    xe = Ce.exports;
  Bt()(Ce, "components", { QToggle: Se["a"] });
  var Te = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s("div", [t._v("\n  " + t._s(t.showMsg) + "\n")]);
    },
    Ie = [],
    Ee = {
      name: "TranscodingStatus",
      props: { trackHash: { type: String, required: !0 } },
      computed: {
        ...Object(y["b"])("AudioPlayer", ["transcodeBitRate"]),
        isIndeterminate() {
          return !this.serverStatus.ready && !this.serverStatus.progress;
        },
        showMsg() {
          if (this.serverStatus.ready) return "AAC";
          if (
            null === this.serverStatus.progress ||
            void 0 === this.serverStatus.progress
          )
            return "等待转码";
          const t = this.serverStatus.progress.percent;
          return "number" != typeof t ? "转码错误" : `转码: ${t.toFixed(0)}%`;
        },
        color() {
          if (this.serverStatus.ready) return "positive";
          if (
            null === this.serverStatus.progress ||
            void 0 === this.serverStatus.progress
          )
            return "negative";
          const t = this.serverStatus.progress.percent;
          return "number" != typeof t ? "negative" : "secondary";
        },
        value() {
          if (
            null === this.serverStatus.progress ||
            void 0 === this.serverStatus.progress
          )
            return 0;
          const t = this.serverStatus.progress.percent;
          return "number" != typeof t ? 0 : t;
        },
      },
      data() {
        return {
          serverStatus: { ready: !1, hash: "", progress: null },
          intervalId: 0,
        };
      },
      watch: {
        trackHash() {
          this.resetChecker();
        },
      },
      methods: {
        async checkStatus() {
          const t = await A.getTranscodingStatus(
            this.trackHash,
            this.transcodeBitRate,
          );
          this.serverStatus = { ...t, hash: this.trackHash };
        },
        resetChecker() {
          (this.checkStatus(),
            (this.intervalId = setInterval(() => {
              if (
                this.trackHash == this.serverStatus.hash &&
                this.serverStatus.ready
              )
                return (
                  console.log(
                    "server transcoding finished, clear interval check",
                    this.intervalId,
                  ),
                  void clearInterval(this.intervalId)
                );
              this.checkStatus();
            }, 1e3)),
            console.log(
              "start transcoding interval check",
              this.trackHash,
              this.intervalId,
            ));
        },
      },
      mounted() {
        this.resetChecker();
      },
      beforeDestroy() {
        (clearInterval(this.intervalId), (this.intervalId = 0));
      },
    },
    Pe = Ee,
    Le = Object(g["a"])(Pe, Te, Ie, !1, null, "a5209110", null),
    Ae = Le.exports,
    $e = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-card",
        {
          staticStyle: {
            width: "90vw",
            "max-width": "90vw",
            height: "80vh",
            "max-height": "80vh",
          },
        },
        [
          s(
            "q-card-section",
            { staticClass: "row justify-between items-center full-width" },
            [
              s("div", { staticClass: "text-h5" }, [t._v("歌词选择")]),
              s("q-btn", {
                directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                attrs: { flat: "", round: "", icon: "close" },
              }),
            ],
            1,
          ),
          s(
            "q-card-section",
            { staticClass: "row justify-between" },
            [
              t.isAdminUser
                ? s(
                    "q-btn",
                    {
                      attrs: { color: "warning" },
                      on: { click: t.uploadData },
                    },
                    [t._v("保存歌词")],
                  )
                : t._e(),
              s(
                "q-btn",
                {
                  attrs: { color: "secondary" },
                  on: { click: t.fetchOtherLyricFiles },
                },
                [t._v("选择其他歌词")],
              ),
              s(
                "q-btn",
                { attrs: { color: "negative" }, on: { click: t.closeLyric } },
                [t._v("关闭歌词")],
              ),
              s(
                "q-btn",
                {
                  attrs: { color: "primary" },
                  on: { click: t.showCurrentLyric },
                },
                [t._v("转到当前段落")],
              ),
              s("q-toggle", {
                attrs: { label: "自动跟踪当前歌词" },
                model: {
                  value: t.autoTrackCurrentLine,
                  callback: function (e) {
                    t.autoTrackCurrentLine = e;
                  },
                  expression: "autoTrackCurrentLine",
                },
              }),
            ],
            1,
          ),
          s(
            "q-card-section",
            [
              s(
                "q-list",
                {
                  staticClass: "scroll",
                  staticStyle: { "max-height": "calc(80vh - 250px)" },
                  attrs: { separator: "" },
                },
                t._l(t.lyricLines, function (e, a) {
                  return s(
                    "q-item",
                    {
                      directives: [{ name: "ripple", rawName: "v-ripple" }],
                      key: a,
                      attrs: {
                        clickable: "",
                        active: a === t.currentLyricLineNumber,
                        "active-class": "bg-green-6",
                        id: "lyric_line" + a,
                      },
                      on: {
                        click: function (s) {
                          return (
                            s.preventDefault(),
                            t.SET_NEW_CURRENT_TIME(e.time / 1e3)
                          );
                        },
                      },
                    },
                    [
                      s("q-item-section", { attrs: { side: "" } }, [
                        s(
                          "div",
                          [
                            s(
                              "q-chip",
                              {
                                attrs: {
                                  size: "xs",
                                  color: "primary",
                                  "text-color": "white",
                                },
                              },
                              [t._v(t._s(t.formatSeconds(e.time / 1e3)))],
                            ),
                          ],
                          1,
                        ),
                      ]),
                      s("q-item-section", [
                        s(
                          "div",
                          { staticClass: "row full-width justify-between" },
                          [
                            s(
                              "div",
                              {
                                staticClass: "col-10 text-weight-bold",
                                class: { deleteText: e.deleted },
                              },
                              [t._v(t._s(e.text) + "\n            ")],
                            ),
                          ],
                        ),
                      ]),
                    ],
                    1,
                  );
                }),
                1,
              ),
            ],
            1,
          ),
          s(
            "q-dialog",
            {
              model: {
                value: t.openLyricFileSelection,
                callback: function (e) {
                  t.openLyricFileSelection = e;
                },
                expression: "openLyricFileSelection",
              },
            },
            [
              s(
                "q-card",
                { staticStyle: { width: "80vw" } },
                [
                  s(
                    "q-card-section",
                    { staticClass: "row items-center justify-between" },
                    [
                      s("div", { staticClass: "text-h5" }, [
                        t._v("选择其他歌词文件"),
                      ]),
                      s("q-btn", {
                        directives: [
                          { name: "close-popup", rawName: "v-close-popup" },
                        ],
                        attrs: { flat: "", round: "", icon: "close" },
                      }),
                    ],
                    1,
                  ),
                  s(
                    "q-card-section",
                    [
                      s(
                        "q-list",
                        { staticClass: "scroll", attrs: { separator: "" } },
                        t._l(t.lyricOptionList, function (e, a) {
                          return s(
                            "q-item",
                            {
                              directives: [
                                { name: "ripple", rawName: "v-ripple" },
                              ],
                              key: a,
                              attrs: { clickable: "" },
                              on: {
                                click: function (s) {
                                  return t.selectLyricOption(e);
                                },
                              },
                            },
                            [
                              s(
                                "q-item-section",
                                [
                                  s("q-item-label", [t._v(t._s(e.title))]),
                                  s(
                                    "q-item-label",
                                    { attrs: { caption: "", lines: "2" } },
                                    [t._v(t._s(e.subtitle))],
                                  ),
                                ],
                                1,
                              ),
                              e.isAI
                                ? s(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      s(
                                        "q-chip",
                                        { attrs: { color: "primary" } },
                                        [t._v("AI")],
                                      ),
                                    ],
                                    1,
                                  )
                                : t._e(),
                            ],
                            1,
                          );
                        }),
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
        ],
        1,
      );
    },
    Oe = [],
    Ne = {
      mixins: [pe],
      name: "LyricSelection",
      data() {
        return {
          openPanel: !0,
          autoTrackCurrentLine: !0,
          openEditor: !1,
          editLyricLineNumber: 0,
          editLyricText: "",
          openLyricFileSelection: !1,
          lyricOptionList: [],
        };
      },
      watch: {
        openPanel() {
          setTimeout(() => {
            this.showCurrentLyric();
          }, 50);
        },
        lyricLines() {
          this.autoShowCurrentLine();
        },
        currentLyricLineNumber() {
          this.autoShowCurrentLine();
        },
        autoTrackCurrentLine(t) {
          t && this.showCurrentLyric();
        },
        "currentPlayingFile.hash"() {
          (this.showCurrentLyric(), console.log("changing track"));
        },
      },
      computed: {
        ...Object(y["d"])("AudioPlayer", [
          "playing",
          "hide",
          "currentTime",
          "duration",
          "queueIndex",
          "playMode",
          "rewindSeekTime",
          "forwardSeekTime",
          "swapSeekButton",
          "enableVisualizer",
          "enableVideoSource",
          "enableVideoSourcePIP",
          "enablePIPLyrics",
          "enableFloatingLyrics",
          "playWorkId",
          "rewindSeekMode",
          "forwardSeekMode",
          "hasLyric",
          "lyricOffsetSeconds",
          "lyricLines",
          "currentLyricLineNumber",
          "aiLabelMediaServer",
          "aiLabelDbServer",
        ]),
        ...Object(y["b"])("AudioPlayer", ["currentPlayingFile"]),
        editLyric() {
          return this.lyricLines[this.editLyricLineNumber];
        },
        currentLyric() {
          return this.lyricLines[this.currentLyricLineNumber];
        },
        isAdminUser() {
          return rrIsAdminUser(this.$store.state.User);
        },
      },
      methods: {
        ...Object(y["c"])("AudioPlayer", [
          "SET_NEW_CURRENT_TIME",
          "SET_HAS_LYRIC",
          "SET_LYRIC_LINES",
          "SET_CURRENT_LYRIC",
        ]),
        formatSeconds: (t) => W(t, !0),
        autoShowCurrentLine() {
          this.autoTrackCurrentLine && this.showCurrentLyric();
        },
        showCurrentLyric() {
          const t = document.querySelector(
            "#lyric_line" + this.currentLyricLineNumber,
          );
          t &&
            t.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
        },
        enterEditLyric(t) {
          ((this.openEditor = !0),
            (this.editLyricLineNumber = t),
            (this.editLyricText = this.lyricLines[t].text));
        },
        setEndTime() {
          const t = this.currentLyricLineNumber,
            e = B(this.lyricLines);
          ((e[t].timeEnd = 1e3 * this.currentTime),
            this.$store.commit("AudioPlayer/SET_LYRIC_LINES", e));
        },
        deleteEndTime() {
          const t = this.currentLyricLineNumber,
            e = B(this.lyricLines);
          (delete e[t].timeEnd,
            this.$store.commit("AudioPlayer/SET_LYRIC_LINES", e));
        },
        confirmLyricChange() {
          const t = this.editLyricLineNumber,
            e = B(this.lyricLines);
          ((e[t].text = this.editLyricText),
            this.$store.commit("AudioPlayer/SET_LYRIC_LINES", e),
            (this.openEditor = !1),
            (this.editLyricLineNumber = 0));
        },
        async uploadData() {
          const t = this.currentPlayingFile.subtitle
              ? this.currentPlayingFile.subtitle + "/"
              : "",
            e = t + this.currentPlayingFile.title + ".vtt";
          this.$q
            .dialog({
              title: "保存歌词文件",
              message:
                "请输入保存文件路径，路径以.vtt结束，相对于当前作品的根文件夹：",
              prompt: {
                model: e,
                isValid: (t) => t.endsWith(".vtt"),
                type: "text",
              },
              cancel: !0,
              persistent: !0,
            })
            .onOk(async (t) => {
              const e = await A.saveLyric(this.playWorkId, t, this.lyricLines);
              e.result &&
                this.showToast(
                  "保存歌词成功（由于文件变动，如果播放历史无法正常播放以往记录，需要删除当前作品的历史播放记录来恢复）",
                  8e3,
                );
            });
        },
        deleteLyricLine(t) {
          const e = B(this.lyricLines);
          ((e[t].deleted = !0),
            this.$store.commit("AudioPlayer/SET_LYRIC_LINES", e));
        },
        recoverDeletedLyricLine(t) {
          const e = B(this.lyricLines);
          (delete e[t].deleted,
            this.$store.commit("AudioPlayer/SET_LYRIC_LINES", e));
        },
        async fetchOtherLyricFiles() {
          const t = await A.queryLyric(this.currentPlayingFile.hash),
            e = t.filter((t) => t.matchLevel < 0),
            s = t.filter((t) => t.matchLevel >= 0),
            a = [...s, ...e];
          (console.log("other lyrics: ", a),
            (this.lyricOptionList = a),
            (this.openLyricFileSelection = !0));
        },
        async selectLyricOption(t) {
          const e = await A.fetchLyric(
            t.isAI ? `${this.playWorkId}/${t.hash}/1` : t.hash + "/0",
          );
          try {
            localStorage.setItem(
              "kikoeruLyricChoice:" + this.currentPlayingFile.hash,
              JSON.stringify({ hash: t.hash, isAI: !!t.isAI }),
            );
          } catch (s) {
            console.warn("save lyric choice failed", s);
          }
          (this.SET_HAS_LYRIC(!0),
            this.SET_LYRIC_LINES(e),
            (this.openLyricFileSelection = !1));
        },
        async closeLyric() {
          (this.SET_HAS_LYRIC(!1),
            this.SET_CURRENT_LYRIC(""),
            this.SET_LYRIC_LINES([]));
        },
      },
    },
    Me = Ne,
    Re = (s("c0e6"), s("a370")),
    De = s("1c1c"),
    Fe = s("b047"),
    Qe = s("0016"),
    Ue = s("24e8"),
    We = s("27f9"),
    ze = s("4b7e"),
    je = s("7f67"),
    Be = s("714f"),
    Ve = Object(g["a"])(Me, $e, Oe, !1, null, "23d74eb2", null),
    He = Ve.exports;
  (Bt()(Ve, "components", {
    QCard: Dt["a"],
    QCardSection: Re["a"],
    QBtn: zt["a"],
    QToggle: Se["a"],
    QList: De["a"],
    QItem: Ft["a"],
    QItemSection: Qt["a"],
    QChip: Fe["a"],
    QIcon: Qe["a"],
    QDialog: Ue["a"],
    QInput: We["a"],
    QCardActions: ze["a"],
    QItemLabel: Wt["a"],
  }),
    Bt()(Ve, "directives", { ClosePopup: je["a"], Ripple: Be["a"] }));
  var Ge = {
      name: "AudioPlayer",
      components: {
        draggable: Jt.a,
        AudioElement: we,
        Scrollable: Ot,
        AudioEqualizer: xe,
        LyricSelection: He,
        TranscodingStatus: Ae,
      },
      data() {
        return {
          showCurrentPlayList: !1,
          editCurrentPlayList: !1,
          queueCopy: [],
          showAddWorkToQueueDialog: !1,
          addWorkKeyword: "",
          addWorkResults: [],
          addWorkLoading: !1,
          addWorkError: "",
          hideSeekButton: !1,
          isAndroid: navigator.userAgent.toLowerCase().indexOf("android") > -1,
          histroyCheckIntervalId: -1,
          latestUpdatedHistory: null,
          isFlipCover: !1,
          lyricSyncDialog: !1,
          fixState: "ready",
          fixWhoStartFirst: "",
          fixStartMills: 0,
          fixStopMills: 0,
          showLyricSeekList: !1,
          v2LyricsExpanded: !1,
          v2LyricsAutoFollow: !0,
          v2MobileActiveBackground: !1,
          v2MobileReadableBackdrop: !1,
          v2CoverToneCheckedUrl: "",
          v2DesktopLyricsVisible: !1,
          v2DesktopLyricsAutoFollow: !0,
          v2MobileScrollRatio: 0,
          v2DesktopScrollRatio: 0,
          v2PreviewWidth: 0,
          v2PreviewMaxRows: 5,
          v2PreviewDirection: "down",
          v2PreviewLastActiveIndex: 0,
          v2ScrollbarDrag: null,
          v2LyricScrollTimer: 0,
          isBuggyIOS: !1,
          proxyGain: 1,
        };
      },
      mounted() {
        (this.$q.localStorage.has("hideSeekButton") &&
          (this.hideSeekButton =
            this.$q.localStorage.getItem("hideSeekButton")),
          (this.histroyCheckIntervalId = setInterval(() => {
            this.onUpdatePlayingStatus();
          }, 6e4)),
          this.$q.platform.is.desktop &&
            window.addEventListener("keydown", this.onKeyDown),
          window.addEventListener("resize", this.updateV2PreviewMetrics),
          this.$nextTick(this.updateV2PreviewMetrics),
          this.detectBuggyIOS());
      },
      beforeDestroy() {
        (this.$q.platform.is.desktop &&
          window.removeEventListener("keydown", this.onKeyDown),
          window.removeEventListener("resize", this.updateV2PreviewMetrics),
          this.stopV2ScrollbarDrag(),
          clearTimeout(this.v2LyricScrollTimer),
          clearInterval(this.histroyCheckIntervalId));
      },
      watch: {
        queue(t) {
          ((this.queueCopy = t.concat()),
            0 === this.queueCopy.length
              ? (this.showCurrentPlayList = !1)
              : this.onUpdatePlayingStatus());
        },
        queueIndex() {
          this.onUpdatePlayingStatus();
        },
        showCurrentPlayList(t) {
          !1 === t &&
            ((this.editCurrentPlayList = !1),
            (this.showAddWorkToQueueDialog = !1));
        },
        hideSeekButton(t) {
          this.$q.localStorage.set("hideSeekButton", t);
        },
        playing() {
          this.onUpdatePlayingStatus();
        },
        rewindSeekMode(t) {
          t ||
            setTimeout(() => {
              this.onUpdatePlayingStatus();
            }, 100);
        },
        forwardSeekMode(t) {
          t ||
            setTimeout(() => {
              this.onUpdatePlayingStatus();
            }, 100);
        },
        currentTime() {
          this.playing || this.onUpdatePlayingStatus();
        },
        enableVisualizer() {
          this.suggestRefreshPage();
        },
        enableVideoSource() {
          this.suggestRefreshPage();
        },
        lyricSyncDialog() {
          this.fixState = "ready";
        },
        currentLyricLineNumber() {
          (this.updateV2PreviewDirection(), this.scheduleV2LyricFollow());
        },
        lyricLines() {
          (this.updateV2PreviewMetrics(), this.scheduleV2LyricFollow());
        },
        v2LyricsExpanded() {
          (this.updateV2PreviewMetrics(),
            this.scheduleV2LyricFollow(),
            this.scheduleV2CoverToneCheck());
        },
        coverUrl() {
          this.scheduleV2CoverToneCheck();
        },
        v2DesktopLyricsVisible() {
          this.scheduleV2LyricFollow();
        },
        proxyGain(t) {
          this.enableVisualizer &&
            this.$store.state.AudioPlayer.audioAnalyser &&
            ((this.$store.state.AudioPlayer.audioAnalyser.gain.gain.value = t),
            console.log(
              "set audio gain: ",
              this.$store.state.AudioPlayer.audioAnalyser.gain.gain.value,
            ));
        },
      },
      computed: {
        showAudioPlayer() {
          return this.currentPlayingFile.hash && !this.hide;
        },
        coverUrl() {
          const t = this.$q.localStorage.getItem("jwt-token") || "",
            e = this.currentPlayingFile.hash;
          return e ? `/asmr-site/api/cover/${e.split("/")[0]}?token=${t}` : "";
        },
        workDetailUrl() {
          const t = this.currentPlayingFile;
          if (!t || !t.hash) return "";
          const e = queueItemPrimaryWorkId(t) || parseInt(t.hash.split("/")[0], 10);
          return e
            ? workRouteForMetadata({
                id: t.work_id || e,
                primary_work_id: e,
                secondary_work_id: t.secondary_work_id || 0,
              })
            : "";
        },
        volume: {
          get() {
            return this.$store.state.AudioPlayer.volume;
          },
          set(t) {
            this.SET_VOLUME(t);
          },
        },
        queue: {
          get() {
            return this.$store.state.AudioPlayer.queue;
          },
          set() {},
        },
        playModeIcon() {
          switch (this.playMode.name) {
            case "all repeat":
              return "repeat";
            case "repeat once":
              return "repeat_one";
            case "shuffle":
              return "shuffle";
            default:
              return "playlist_play";
          }
        },
        playModeString() {
          switch (this.playMode.name) {
            case "all repeat":
              return "全部";
            case "repeat once":
              return "单曲循环";
            case "shuffle":
              return "随机";
            default:
              return "列表播放";
          }
        },
        playingIcon() {
          return this.playing ? "pause" : "play_arrow";
        },
        rewindIcon() {
          switch (this.rewindSeekTime) {
            case 5:
              return "replay_5";
            case 10:
              return "replay_10";
            case 30:
              return "replay_30";
            default:
              return "replay_5";
          }
        },
        forwardIcon() {
          switch (this.forwardSeekTime) {
            case 5:
              return "forward_5";
            case 10:
              return "forward_10";
            case 30:
              return "forward_30";
            default:
              return "forward_5";
          }
        },
        fixDeltaMills() {
          let t = "audio" == this.fixWhoStartFirst ? 1 : -1;
          return t * (this.fixStopMills - this.fixStartMills);
        },
        showDeltaSeconds() {
          const t = 1;
          return Math.abs(this.fixDeltaMills) < t
            ? ""
            : `${this.fixDeltaMills > 0 ? "+" : ""}${(this.fixDeltaMills / 1e3).toFixed(2)}s`;
        },
        isPlayerV2() {
          return "v2" === this.audioPlayerVersion;
        },
        showMobileV2LyricsExpanded() {
          return (
            this.isPlayerV2 &&
            !this.$q.platform.is.desktop &&
            this.v2LyricsExpanded &&
            this.hasLyric &&
            this.lyricLines.length > 0
          );
        },
        isDesktopV2LyricsVisible() {
          return (
            this.isPlayerV2 &&
            this.$q.platform.is.desktop &&
            this.v2DesktopLyricsVisible &&
            this.hasLyric &&
            this.lyricLines.length > 0
          );
        },
        v2ActiveLyricIndex() {
          if (!this.lyricLines.length) return 0;
          const t = Number(this.currentLyricLineNumber);
          if (!Number.isFinite(t)) {
            const t =
              1e3 *
              (Number(this.currentTime || 0) +
                Number(this.lyricOffsetSeconds || 0));
            for (let e = this.lyricLines.length - 1; e >= 0; e -= 1)
              if (Number(this.lyricLines[e].time || 0) <= t) return e;
            return 0;
          }
          return Math.max(
            0,
            Math.min(Math.round(t), this.lyricLines.length - 1),
          );
        },
        v2PreviewLyricRows() {
          if (!this.lyricLines.length) return [];
          const t = this.v2ActiveLyricIndex,
            e = Math.max(1, Math.min(5, this.v2PreviewMaxRows || 5)),
            s = this.estimateV2PreviewLineRows(this.lyricLines[t], !0),
            a = Math.max(0, e - s);
          let i = t,
            r = t,
            o = 0,
            n = 0;
          const l = Math.min(2, Math.floor(a / 2));
          for (let u = t - 1; u >= 0 && o < l; u -= 1) {
            const t = this.estimateV2PreviewLineRows(this.lyricLines[u], !1);
            if (o + t > l) break;
            ((i = u), (o += t));
          }
          const c = Math.min(2 + (l - o), Math.max(0, e - s - o));
          for (let u = t + 1; u < this.lyricLines.length && n < c; u += 1) {
            const t = this.estimateV2PreviewLineRows(this.lyricLines[u], !1);
            if (n + t > c) break;
            ((r = u), (n += t));
          }
          const d = Math.min(2 + (c - n), Math.max(0, e - s - n));
          let u = o + s + n;
          while (u < e) {
            let e = !1;
            if (i > 0) {
              const t = this.estimateV2PreviewLineRows(this.lyricLines[i - 1], !1);
              if (u + t <= this.v2PreviewMaxRows && o + t <= d)
                ((i -= 1), (o += t), (u += t), (e = !0));
            }
            if (!e && r < this.lyricLines.length - 1) {
              const t = this.estimateV2PreviewLineRows(this.lyricLines[r + 1], !1);
              if (u + t <= this.v2PreviewMaxRows && n + t <= c)
                ((r += 1), (n += t), (u += t), (e = !0));
            }
            if (!e) break;
          }
          return this.lyricLines.slice(i, r + 1).map((t, e) => ({
            line: t,
            index: i + e,
          }));
        },
        v2AllLyricRows() {
          return this.lyricLines.map((t, e) => ({ line: t, index: e }));
        },
        currentAudioDisplayTitle() {
          return queueItemAudioDisplayText(
            this.currentPlayingFile,
            this.currentPlayingFile.title,
          );
        },
        currentWorkDisplayTitle() {
          return queueItemDisplayText(
            this.currentPlayingFile,
            this.currentPlayingFile.workTitle,
          );
        },
        ...Object(y["d"])("AudioPlayer", [
          "playing",
          "playingTranscode",
          "hide",
          "currentTime",
          "duration",
          "queueIndex",
          "playMode",
          "rewindSeekTime",
          "forwardSeekTime",
          "swapSeekButton",
          "enableVisualizer",
          "enableVideoSource",
          "enableVideoSourcePIP",
          "enablePIPLyrics",
          "enableFloatingLyrics",
          "playWorkId",
          "rewindSeekMode",
          "forwardSeekMode",
          "hasLyric",
          "lyricOffsetSeconds",
          "lyricLines",
          "currentLyricLineNumber",
          "transcodeOption",
          "audioPlayerVersion",
          "defaultQueue",
          "defaultQueueWorkId",
          "isCustomPlaylist",
        ]),
        ...Object(y["b"])("AudioPlayer", [
          "currentPlayingFile",
          "resumeHistroyDone",
          "isCurrentPlayingFileVideo",
        ]),
      },
      methods: {
        renderPlaylistToolButton(t, e) {
          return t(
            "q-btn",
            {
              staticClass: "playlist-glass-btn",
              class: {
                active: !!e.active,
                danger: !!e.danger,
              },
              attrs: {
                dense: "",
                round: "",
                flat: "",
                size: "md",
                icon: e.icon,
                disable: !!e.disable,
              },
              on: { click: e.click },
            },
            [
              t(
                "q-tooltip",
                { attrs: { anchor: "top middle", self: "bottom middle" } },
                [this._v(e.label)],
              ),
            ],
            1,
          );
        },
        renderCurrentPlayListDialog(t) {
          return t(
            "q-dialog",
            {
              staticClass: "current-play-list-dialog",
              attrs: { "content-class": "current-play-list-dialog-content" },
              model: {
                value: this.showCurrentPlayList,
                callback: (t) => {
                  this.showCurrentPlayList = t;
                },
                expression: "showCurrentPlayList",
              },
            },
            [
              t(
                "q-card",
                { staticClass: "current-play-list" },
                [
                  t(
                    "div",
                    { staticClass: "current-play-list-toolbar row items-center" },
                    [
                      this.renderPlaylistToolButton(t, {
                        icon: "edit",
                        label: this.editCurrentPlayList
                          ? "完成编辑"
                          : "编辑播放列表",
                        active: this.editCurrentPlayList,
                        click: () => {
                          this.editCurrentPlayList = !this.editCurrentPlayList;
                        },
                      }),
                      this.renderPlaylistToolButton(t, {
                        icon: "restore",
                        label: "恢复默认顺序",
                        disable: !this.defaultQueue || !this.defaultQueue.length,
                        click: () => this.restoreDefaultQueue(),
                      }),
                      this.renderPlaylistToolButton(t, {
                        icon: "add_photo_alternate",
                        label: "添加其他作品",
                        click: () => this.openAddWorkToQueueDialog(),
                      }),
                      t("q-space"),
                      this.renderPlaylistToolButton(t, {
                        icon: "delete_forever",
                        label: "关闭播放器",
                        danger: !0,
                        click: () => this.emptyQueue(),
                      }),
                    ],
                    1,
                  ),
                  t("q-separator", { staticClass: "current-play-list-separator" }),
                  t(
                    "q-list",
                    { staticClass: "current-play-list-items scroll" },
                    [
                      t(
                        "draggable",
                        {
                          attrs: { handle: ".handle" },
                          on: {
                            change: (t) => this.onMoved(t.moved),
                          },
                          model: {
                            value: this.queueCopy,
                            callback: (t) => {
                              this.queueCopy = t;
                            },
                            expression: "queueCopy",
                          },
                        },
                        this.queueCopy.map((e, s) =>
                          t(
                            "q-item",
                            {
                              directives: [
                                { name: "ripple", rawName: "v-ripple" },
                              ],
                              key: e.hash + "-" + s,
                              staticClass: "current-play-list-item non-selectable",
                              attrs: {
                                clickable: "",
                                active: this.queueIndex === s,
                                "active-class": "current-play-list-active",
                              },
                              on: {
                                click: () => this.onClickTrack(s),
                              },
                            },
                            [
                              t(
                                "q-item-section",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: this.editCurrentPlayList,
                                      expression: "editCurrentPlayList",
                                    },
                                  ],
                                  attrs: { side: "" },
                                },
                                [
                                  t("q-icon", {
                                    staticClass: "current-play-list-remove",
                                    attrs: { name: "close" },
                                    on: {
                                      click: (t) => {
                                        (t.stopPropagation(),
                                          this.removeFromQueue(s));
                                      },
                                    },
                                  }),
                                ],
                                1,
                              ),
                              t(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  t("q-img", {
                                    staticClass:
                                      "current-play-list-cover rounded-borders",
                                    attrs: {
                                      transition: "fade",
                                      src: this.samCoverUrl(e.hash),
                                    },
                                  }),
                                ],
                                1,
                              ),
                              t(
                                "q-item-section",
                                { staticClass: "current-play-list-text" },
                                [
                                  t("q-item-label", [
                                    this._v(this.queueItemAudioText(e)),
                                  ]),
                                  t(
                                    "q-item-label",
                                    {
                                      attrs: {
                                        caption: "",
                                        lines: "1",
                                      },
                                    },
                                    [this._v(this.queueItemWorkText(e))],
                                  ),
                                ],
                                1,
                              ),
                              t(
                                "q-item-section",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: this.editCurrentPlayList,
                                      expression: "editCurrentPlayList",
                                    },
                                  ],
                                  staticClass: "handle",
                                  attrs: { side: "" },
                                },
                                [
                                  t("q-icon", {
                                    staticClass: "current-play-list-drag",
                                    attrs: { name: "drag_indicator" },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ),
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        renderAddWorkToQueueDialog(t) {
          return t(
            "q-dialog",
            {
              model: {
                value: this.showAddWorkToQueueDialog,
                callback: (t) => {
                  this.showAddWorkToQueueDialog = t;
                },
                expression: "showAddWorkToQueueDialog",
              },
            },
            [
              t(
                "q-card",
                { staticClass: "add-work-playlist-card" },
                [
                  t(
                    "q-card-section",
                    { staticClass: "add-work-playlist-head" },
                    [
                      t("div", { staticClass: "text-h6" }, [
                        this._v("添加其他音声作品"),
                      ]),
                      t("div", { staticClass: "text-caption text-grey-7" }, [
                        this._v("选择作品后会把该作品全部音频加入自定义播放列表"),
                      ]),
                    ],
                  ),
                  t(
                    "q-card-section",
                    { staticClass: "q-pt-none" },
                    [
                      t(
                        "q-input",
                        {
                          attrs: {
                            dense: "",
                            outlined: "",
                            clearable: "",
                            debounce: "250",
                            placeholder: "搜索 RJ号、作品名、社团或声优",
                          },
                          on: {
                            keyup: (t) => {
                              "Enter" === t.key &&
                                this.searchAddWorkCandidates();
                            },
                          },
                          model: {
                            value: this.addWorkKeyword,
                            callback: (t) => {
                              this.addWorkKeyword = t;
                            },
                            expression: "addWorkKeyword",
                          },
                        },
                        [
                          t(
                            "template",
                            { slot: "append" },
                            [
                              t("q-btn", {
                                attrs: {
                                  dense: "",
                                  flat: "",
                                  round: "",
                                  icon: "search",
                                  loading: this.addWorkLoading,
                                },
                                on: {
                                  click: () => this.searchAddWorkCandidates(),
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        2,
                      ),
                      this.addWorkError
                        ? t("div", { staticClass: "text-negative q-mt-sm" }, [
                            this._v(this.addWorkError),
                          ])
                        : this._e(),
                    ],
                    1,
                  ),
                  t(
                    "q-list",
                    { staticClass: "add-work-playlist-results scroll" },
                    this.addWorkResults.length
                      ? this.addWorkResults.map((e) =>
                          t(
                            "q-item",
                            {
                              directives: [
                                { name: "ripple", rawName: "v-ripple" },
                              ],
                              key: e.id,
                              attrs: { clickable: "" },
                              on: { click: () => this.addWorkToQueue(e) },
                            },
                            [
                              t(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  t("q-img", {
                                    staticClass:
                                      "add-work-playlist-cover rounded-borders",
                                    attrs: {
                                      transition: "fade",
                                      src: this.workSamCoverUrl(e.id),
                                    },
                                  }),
                                ],
                                1,
                              ),
                              t(
                                "q-item-section",
                                [
                                  t("q-item-label", [
                                    this._v(
                                      (this.workCandidateCode(e)
                                        ? this.workCandidateCode(e) + " - "
                                        : "") + (e.title || ""),
                                    ),
                                  ]),
                                  t(
                                    "q-item-label",
                                    { attrs: { caption: "", lines: "1" } },
                                    [
                                      this._v(
                                        e.circle && e.circle.name
                                          ? e.circle.name
                                          : "",
                                      ),
                                    ],
                                  ),
                                ],
                                1,
                              ),
                              t(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  t("q-icon", {
                                    attrs: { name: "playlist_add" },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        )
                      : [
                          t(
                            "div",
                            {
                              staticClass:
                                "add-work-playlist-empty text-grey-7 text-center",
                            },
                            [
                              this._v(
                                this.addWorkLoading
                                  ? "搜索中..."
                                  : "输入关键词后按回车，或直接搜索最新作品",
                              ),
                            ],
                          ),
                        ],
                    1,
                  ),
                  t(
                    "q-card-actions",
                    { attrs: { align: "right" } },
                    [
                      t(
                        "q-btn",
                        {
                          attrs: { flat: "", label: "关闭" },
                          on: {
                            click: () => {
                              this.showAddWorkToQueueDialog = !1;
                            },
                          },
                        },
                        [],
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        updateV2PreviewMetrics() {
          if (!this.isPlayerV2 || this.$q.platform.is.desktop) return;
          this.$nextTick(() => {
            const t = this.$refs.v2MobileLyricsList,
              e =
                t && t.clientWidth
                  ? t.clientWidth
                  : Math.max(240, (window.innerWidth || 360) - 56),
              s =
                t && t.clientHeight
                  ? t.clientHeight
                  : (window.innerHeight || 760) < 700
                    ? 96
                    : 136,
              a = window.innerHeight || 760,
              i = a < 680 ? 3 : a < 760 ? 4 : 5,
              r = Math.max(3, Math.min(5, Math.floor(s / 26) || i, i));
            ((this.v2PreviewWidth = e), (this.v2PreviewMaxRows = r));
          });
        },
        estimateV2PreviewLineRows(t, e) {
          const s = t && t.text ? t.text : "...",
            a = Array.from(s).length || 1,
            i = Math.max(220, this.v2PreviewWidth || (window.innerWidth || 360) - 56),
            r = e ? (a > 34 ? 14 : a > 22 ? 16 : 18) : 17,
            o = Math.max(5, Math.floor(i / (1.05 * r)));
          return Math.max(1, Math.ceil(a / o));
        },
        updateV2PreviewDirection() {
          const t = this.v2ActiveLyricIndex;
          (this.v2PreviewDirection =
            t >= this.v2PreviewLastActiveIndex ? "down" : "up",
            (this.v2PreviewLastActiveIndex = t));
        },
        renderV2FloatingLyricsButton(t) {
          return this.isPlayerV2 && this.hasLyric
            ? t(
                "q-btn",
                {
                  staticClass: "v2-player-tool-button",
                  attrs: {
                    dense: "",
                    size: "md",
                    padding: "none sm",
                    flat: !this.enableFloatingLyrics,
                    outline: this.enableFloatingLyrics,
                    icon: "title",
                  },
                  on: {
                    click: (t) => this.toggleFloatingLyrics(t),
                  },
                },
                [
                  t(
                    "q-tooltip",
                    {
                      attrs: {
                        anchor: "top middle",
                        self: "bottom middle",
                      },
                    },
                    [this._v("\n              浮动歌词\n            ")],
                  ),
                ],
                1,
              )
            : this._e();
        },
        toggleFloatingLyrics(t) {
          (t && t.preventDefault(),
            this.setEnableFloatingLyrics(!this.enableFloatingLyrics));
        },
        renderV2DesktopLyricsButton(t) {
          return this.isPlayerV2 &&
            this.$q.platform.is.desktop &&
            this.hasLyric &&
            this.lyricLines.length > 0
            ? t(
                "q-btn",
                {
                  staticClass: "v2-player-tool-button",
                  attrs: {
                    dense: "",
                    size: "md",
                    padding: "none sm",
                    flat: !this.v2DesktopLyricsVisible,
                    outline: this.v2DesktopLyricsVisible,
                    icon: "subject",
                  },
                  on: { click: this.toggleV2DesktopLyrics },
                },
                [
                  t(
                    "q-tooltip",
                    {
                      attrs: {
                        anchor: "top middle",
                        self: "bottom middle",
                      },
                    },
                    [this._v("\n              歌词视图\n            ")],
                  ),
                ],
                1,
              )
            : this._e();
        },
        renderV2MobileLyrics(t) {
          if (
            !this.isPlayerV2 ||
            this.$q.platform.is.desktop ||
            !this.hasLyric ||
            0 === this.lyricLines.length
          )
            return this._e();
          const e = this.v2LyricsExpanded
            ? this.v2AllLyricRows
            : this.v2PreviewLyricRows;
          return t(
            "div",
            {
              staticClass: "v2-mobile-lyrics",
              class: {
                expanded: this.v2LyricsExpanded,
                "active-bg": this.v2MobileActiveBackground,
                "readable-bg": this.v2MobileReadableBackdrop,
                "preview-up":
                  !this.v2LyricsExpanded && "up" === this.v2PreviewDirection,
                "preview-down":
                  !this.v2LyricsExpanded && "down" === this.v2PreviewDirection,
              },
              style: { "--v2-preview-rows": this.v2PreviewMaxRows },
            },
            [
              this.v2LyricsExpanded
                ? t(
                    "div",
                    { staticClass: "v2-lyrics-toolbar" },
                    [
                      t("q-btn", {
                        attrs: {
                          flat: "",
                          dense: "",
                          round: "",
                          icon: this.v2LyricsAutoFollow
                            ? "my_location"
                            : "location_disabled",
                        },
                        on: {
                          click: () => {
                            ((this.v2LyricsAutoFollow =
                              !this.v2LyricsAutoFollow),
                              this.scheduleV2LyricFollow());
                          },
                        },
                      }),
                      t("q-btn", {
                        attrs: {
                          flat: "",
                          dense: "",
                          round: "",
                          icon: this.v2MobileActiveBackground
                            ? "format_color_fill"
                            : "format_color_reset",
                        },
                        on: {
                          click: () => {
                            this.v2MobileActiveBackground =
                              !this.v2MobileActiveBackground;
                          },
                        },
                      }),
                      t("q-space"),
                      t("q-btn", {
                        attrs: {
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "keyboard_arrow_up",
                        },
                        on: {
                          click: () => {
                            this.v2LyricsExpanded = !1;
                          },
                        },
                      }),
                    ],
                    1,
                  )
                : this._e(),
              t(
                "div",
                {
                  ref: "v2MobileLyricsList",
                  staticClass: "v2-lyrics-list",
                  on: { scroll: this.onV2MobileLyricsScroll },
                },
                this.v2LyricsExpanded
                  ? e.map((e) => this.renderV2LyricLine(t, e, !0))
                  : [
                      t(
                        "transition-group",
                        {
                          staticClass: "v2-preview-lyrics-track",
                          props: {
                            tag: "div",
                            name:
                              "up" === this.v2PreviewDirection
                                ? "v2-preview-lyrics-up"
                                : "v2-preview-lyrics-down",
                          },
                        },
                        e.map((e) => this.renderV2LyricLine(t, e, !1)),
                      ),
                    ],
              ),
              this.v2LyricsExpanded
                ? t(
                    "div",
                    {
                      staticClass: "v2-lyrics-scroll-indicator",
                      style: { "--scroll-ratio": this.v2MobileScrollRatio },
                      on: {
                        mousedown: (e) =>
                          this.startV2ScrollbarDrag(
                            e,
                            "v2MobileLyricsList",
                            "v2MobileScrollRatio",
                          ),
                        touchstart: (e) =>
                          this.startV2ScrollbarDrag(
                            e,
                            "v2MobileLyricsList",
                            "v2MobileScrollRatio",
                          ),
                      },
                    },
                    [t("span")],
                  )
                : this._e(),
              this.v2LyricsExpanded
                ? this._e()
                : t(
                    "button",
                    {
                      staticClass: "v2-lyrics-expand",
                      attrs: { type: "button", title: "展开全部歌词" },
                      on: {
                        click: () => {
                          this.v2LyricsExpanded = !0;
                        },
                      },
                    },
                    [
                      t("span", { staticClass: "material-icons" }, [
                        this._v("keyboard_arrow_down"),
                      ]),
                    ],
                  ),
            ],
          );
        },
        renderV2DesktopLyrics(t) {
          return this.isDesktopV2LyricsVisible
            ? t(
                "div",
                {
                  staticClass: "v2-desktop-lyrics-panel",
                  style: { "--cover-url": "url(" + this.coverUrl + ")" },
                },
                [
                  t("div", { staticClass: "v2-desktop-lyrics-bg" }),
                  t(
                    "div",
                    { staticClass: "v2-desktop-lyrics-actions" },
                    [
                      t(
                        "button",
                        {
                          staticClass: "v2-desktop-lyrics-action",
                          class: { active: this.v2DesktopLyricsAutoFollow },
                          attrs: { type: "button" },
                          on: {
                            click: () => {
                              ((this.v2DesktopLyricsAutoFollow =
                                !this.v2DesktopLyricsAutoFollow),
                                this.scheduleV2LyricFollow());
                            },
                          },
                        },
                        [
                          t("span", { staticClass: "material-icons" }, [
                            this._v(
                              this.v2DesktopLyricsAutoFollow
                                ? "my_location"
                                : "location_disabled",
                            ),
                          ]),
                          t(
                            "span",
                            {
                              staticClass: "v2-desktop-lyrics-action-label",
                            },
                            [this._v("跟踪歌词")],
                          ),
                        ],
                      ),
                      t(
                        "button",
                        {
                          staticClass: "v2-desktop-lyrics-action",
                          class: { active: !0 },
                          attrs: { type: "button" },
                          on: { click: this.openV2LyricFileSelection },
                        },
                        [
                          t("span", { staticClass: "material-icons" }, [
                            this._v("subtitles"),
                          ]),
                          t(
                            "span",
                            {
                              staticClass: "v2-desktop-lyrics-action-label",
                            },
                            [this._v("歌词选择")],
                          ),
                        ],
                      ),
                    ],
                  ),
                  t(
                    "div",
                    { staticClass: "v2-desktop-lyrics-toolbar" },
                    [
                      t("q-btn", {
                        attrs: {
                          flat: "",
                          dense: "",
                          round: "",
                          icon: this.v2DesktopLyricsAutoFollow
                            ? "my_location"
                            : "location_disabled",
                        },
                        on: {
                          click: () => {
                            ((this.v2DesktopLyricsAutoFollow =
                              !this.v2DesktopLyricsAutoFollow),
                              this.scheduleV2LyricFollow());
                          },
                        },
                      }),
                      t("q-btn", {
                        staticClass: "v2-desktop-lyrics-close",
                        attrs: { flat: "", dense: "", round: "", icon: "close" },
                        on: { click: this.toggleV2DesktopLyrics },
                      }),
                    ],
                    1,
                  ),
                  t(
                    "div",
                    {
                      ref: "v2DesktopLyricsList",
                      staticClass: "v2-desktop-lyrics-list",
                      on: { scroll: this.onV2DesktopLyricsScroll },
                    },
                    this.v2AllLyricRows.map((e) =>
                      this.renderV2LyricLine(t, e, !0),
                    ),
                  ),
                  t(
                    "div",
                    {
                      staticClass: "v2-lyrics-scroll-indicator desktop",
                      style: { "--scroll-ratio": this.v2DesktopScrollRatio },
                      on: {
                        mousedown: (e) =>
                          this.startV2ScrollbarDrag(
                            e,
                            "v2DesktopLyricsList",
                            "v2DesktopScrollRatio",
                          ),
                        touchstart: (e) =>
                          this.startV2ScrollbarDrag(
                            e,
                            "v2DesktopLyricsList",
                            "v2DesktopScrollRatio",
                          ),
                      },
                    },
                    [t("span")],
                  ),
                ],
                1,
              )
            : this._e();
        },
        renderV2LyricLine(t, e, s) {
          const a = e.index === this.v2ActiveLyricIndex,
            i = e.index < this.v2ActiveLyricIndex,
            o = e.line.text || "...",
            n = Array.from(o).length,
            r = [
              t("span", { staticClass: "v2-lyric-text" }, [
                this._v(o),
              ]),
            ];
          return (
            s &&
              r.unshift(
                t("span", { staticClass: "v2-lyric-time" }, [
                  this._v(this.formatLyricTimeMs(e.line.time)),
                ]),
              ),
            t(
              "button",
              {
                key: "v2-lyric-" + e.index,
                staticClass: "v2-lyric-line",
                class: {
                  active: a,
                  past: i,
                  future: !a && !i,
                  long: n > 22,
                  xlong: n > 34,
                },
                attrs: {
                  type: "button",
                  "data-v2-lyric-index": e.index,
                },
                on: {
                  click: () => {
                    this.seekToLyric(e.line.time);
                  },
                },
              },
              r,
            )
          );
        },
        scheduleV2CoverToneCheck() {
          this.$nextTick(() => {
            this.analyzeV2CoverTone();
          });
        },
        analyzeV2CoverTone() {
          if (
            !this.isPlayerV2 ||
            this.$q.platform.is.desktop ||
            !this.v2LyricsExpanded ||
            !this.coverUrl
          )
            return;
          const t = this.coverUrl;
          if (this.v2CoverToneCheckedUrl === t) return;
          this.v2CoverToneCheckedUrl = t;
          const e = new Image();
          ((e.onload = () => {
            try {
              const s = document.createElement("canvas"),
                a = 24,
                i = 24;
              ((s.width = a), (s.height = i));
              const r = s.getContext("2d", { willReadFrequently: !0 });
              if (!r) return void (this.v2MobileReadableBackdrop = !0);
              (r.drawImage(e, 0, 0, a, i),
                (this.v2MobileReadableBackdrop =
                  this.isV2CoverLikelyDark(r.getImageData(0, 0, a, i).data)));
            } catch (s) {
              (console.warn("V2 cover tone check failed", s),
                (this.v2MobileReadableBackdrop = !0));
            }
          }),
            (e.onerror = () => {
              this.v2MobileReadableBackdrop = !0;
            }),
            (e.src = t));
        },
        isV2CoverLikelyDark(t) {
          let e = 0,
            s = 0,
            a = 0,
            i = 0;
          for (let r = 0; r < t.length; r += 4) {
            const o = t[r],
              n = t[r + 1],
              l = t[r + 2],
              c = t[r + 3] / 255;
            if (c < 0.35) continue;
            const d =
              (0.2126 * o + 0.7152 * n + 0.0722 * l) / 255;
            ((e += d),
              (s += d < 0.46 ? 1 : 0),
              (a += Math.max(o, n, l) - Math.min(o, n, l)),
              (i += 1));
          }
          if (!i) return !0;
          const r = e / i,
            o = s / i,
            n = a / (255 * i),
            l = (r + 0.05) / 0.05;
          return l < 7 || r < 0.58 || o > 0.42 || (r < 0.66 && n > 0.28);
        },
        toggleV2DesktopLyrics() {
          ((this.v2DesktopLyricsVisible = !this.v2DesktopLyricsVisible),
            this.scheduleV2LyricFollow());
        },
        openV2LyricFileSelection() {
          (this.showLyricSeekList = !0,
            this.$nextTick(() => {
              const t = this.$refs.lyricSelection;
              t && "function" === typeof t.fetchOtherLyricFiles
                ? t.fetchOtherLyricFiles()
                : null;
            }));
        },
        formatLyricTimeMs(t) {
          return W(Math.max(0, (t || 0) / 1e3));
        },
        seekToLyric(t) {
          const e = Math.max(0, (t || 0) / 1e3 - this.lyricOffsetSeconds);
          (this.SET_NEW_CURRENT_TIME(e), this.scheduleV2LyricFollow());
        },
        scheduleV2LyricFollow() {
          (clearTimeout(this.v2LyricScrollTimer),
            (this.v2LyricScrollTimer = setTimeout(() => {
              this.isDesktopV2LyricsVisible &&
                this.v2DesktopLyricsAutoFollow &&
                this.scrollV2LyricIntoView(
                  "v2DesktopLyricsList",
                  "v2DesktopScrollRatio",
                );
              this.isPlayerV2 &&
                !this.$q.platform.is.desktop &&
                this.hasLyric &&
                (!this.v2LyricsExpanded || this.v2LyricsAutoFollow) &&
                this.scrollV2LyricIntoView(
                  "v2MobileLyricsList",
                  "v2MobileScrollRatio",
                );
            }, 0)));
        },
        scrollV2LyricIntoView(t, e) {
          this.$nextTick(() => {
            const s = this.$refs[t];
            if (!s) return;
            const a = s.querySelector(
              `[data-v2-lyric-index="${this.v2ActiveLyricIndex}"]`,
              ),
              i = "v2DesktopLyricsList" === t || this.v2LyricsExpanded;
            if (a && "v2MobileLyricsList" === t && this.v2LyricsExpanded) {
              const t = Math.max(96, 0.28 * s.clientHeight),
                i = Math.max(
                  0,
                  Math.min(a.offsetTop - t, s.scrollHeight - s.clientHeight),
                );
              return (
                s.scrollTo({ top: i, behavior: "smooth" }),
                void setTimeout(() => {
                  this.updateV2LyricScrollRatio(
                    "v2MobileLyricsList",
                    "v2MobileScrollRatio",
                  );
                }, 280)
              );
            }
            (a &&
              a.scrollIntoView({
                behavior: i ? "smooth" : "auto",
                block: "center",
              }),
              setTimeout(() => {
                this.updateV2LyricScrollRatio(t, e);
              }, i ? 280 : 0));
          });
        },
        updateV2LyricScrollRatio(t, e) {
          const s = this.$refs[t];
          if (!s) return;
          const a = s.scrollHeight - s.clientHeight;
          this[e] = a > 0 ? s.scrollTop / a : 0;
        },
        getV2DragPoint(t) {
          const e =
            t.touches && t.touches.length
              ? t.touches[0]
              : t.changedTouches && t.changedTouches.length
                ? t.changedTouches[0]
                : t;
          return { x: e.clientX, y: e.clientY };
        },
        startV2ScrollbarDrag(t, e, s) {
          (t.preventDefault(), t.stopPropagation());
          const a = t.currentTarget,
            i = this.$refs[e];
          if (!a || !i) return;
          ("v2DesktopLyricsList" === e &&
            (this.v2DesktopLyricsAutoFollow = !1),
            "v2MobileLyricsList" === e && (this.v2LyricsAutoFollow = !1),
            (this.v2ScrollbarDrag = {
              refName: e,
              ratioName: s,
              trackRect: a.getBoundingClientRect(),
            }),
            document.addEventListener("mousemove", this.moveV2ScrollbarDrag),
            document.addEventListener("mouseup", this.stopV2ScrollbarDrag),
            document.addEventListener("touchmove", this.moveV2ScrollbarDrag, {
              passive: !1,
            }),
            document.addEventListener("touchend", this.stopV2ScrollbarDrag),
            document.addEventListener("touchcancel", this.stopV2ScrollbarDrag),
            this.moveV2ScrollbarDrag(t));
        },
        moveV2ScrollbarDrag(t) {
          if (!this.v2ScrollbarDrag) return;
          (t.cancelable && t.preventDefault(), t.stopPropagation());
          const e = this.v2ScrollbarDrag,
            s = this.$refs[e.refName];
          if (!s) return;
          const a = this.getV2DragPoint(t),
            i = Math.max(1, e.trackRect.height),
            r = Math.max(0, Math.min(1, (a.y - e.trackRect.top) / i)),
            o = s.scrollHeight - s.clientHeight;
          ((s.scrollTop = o > 0 ? o * r : 0), (this[e.ratioName] = r));
        },
        stopV2ScrollbarDrag() {
          (document.removeEventListener("mousemove", this.moveV2ScrollbarDrag),
            document.removeEventListener("mouseup", this.stopV2ScrollbarDrag),
            document.removeEventListener("touchmove", this.moveV2ScrollbarDrag),
            document.removeEventListener("touchend", this.stopV2ScrollbarDrag),
            document.removeEventListener("touchcancel", this.stopV2ScrollbarDrag),
            (this.v2ScrollbarDrag = null));
        },
        onV2MobileLyricsScroll() {
          (this.updateV2LyricScrollRatio(
            "v2MobileLyricsList",
            "v2MobileScrollRatio",
          ),
            this.v2LyricsExpanded &&
              this.v2LyricsAutoFollow &&
              (clearTimeout(this.v2LyricScrollTimer),
              (this.v2LyricScrollTimer = setTimeout(() => {
                this.scrollV2LyricIntoView(
                  "v2MobileLyricsList",
                  "v2MobileScrollRatio",
                );
              }, 1800))));
        },
        onV2DesktopLyricsScroll() {
          (this.updateV2LyricScrollRatio(
            "v2DesktopLyricsList",
            "v2DesktopScrollRatio",
          ),
            this.v2DesktopLyricsAutoFollow &&
              (clearTimeout(this.v2LyricScrollTimer),
              (this.v2LyricScrollTimer = setTimeout(() => {
                this.scrollV2LyricIntoView(
                  "v2DesktopLyricsList",
                  "v2DesktopScrollRatio",
                );
              }, 1800))));
        },
        formatSeconds: W,
        startFixLyricSync(t) {
          ((this.fixState = "measure"),
            (this.fixWhoStartFirst = t),
            (this.fixStartMills = this.fixStopMills = performance.now()));
        },
        stopFixLyricSync() {
          ((this.fixState = "done"), (this.fixStopMills = performance.now()));
        },
        fixApply() {
          (this.lyricOffsetChange(this.fixDeltaMills / 1e3),
            (this.lyricSyncDialog = !1),
            (this.fixState = "ready"),
            this.$q.notify({
              message: `歌词偏移量(${this.fixDeltaMills / 1e3}s)已应用`,
              timeout: 500,
            }));
        },
        ...Object(y["c"])("AudioPlayer", {
          toggleHide: "TOGGLE_HIDE",
          togglePlaying: "TOGGLE_PLAYING",
          nextTrack: "NEXT_TRACK",
          previousTrack: "PREVIOUS_TRACK",
          changePlayMode: "CHANGE_PLAY_MODE",
          setVolume: "SET_VOLUME",
          rewind: "SET_REWIND_SEEK_MODE",
          forward: "SET_FORWARD_SEEK_MODE",
          toggleSwapSeekButton: "TOGGLE_SWAP_SEEK_BUTTON",
          toggleEnableVisualizer: "TOGGLE_ENABLE_VISUALIZER",
          toggleEnableVideoSource: "TOGGLE_ENABLE_VIDEO_SOURCE",
          setEnableVideoSourcePIP: "SET_ENABLE_VIDEO_SOURCE_PIP",
          setEnablePIPLyrics: "SET_ENABLE_PIP_LYRICS",
          setEnableFloatingLyrics: "SET_ENABLE_FLOATING_LYRICS",
          setLyricOffsetSeconds: "SET_LYRIC_OFFSET_SECONDS",
        }),
        ...Object(y["c"])("AudioPlayer", [
          "SET_TRACK",
          "SET_QUEUE",
          "REMOVE_FROM_QUEUE",
          "EMPTY_QUEUE",
          "SET_VOLUME",
          "SET_NEW_CURRENT_TIME",
        ]),
        queueItemAudioText(t) {
          return queueItemAudioDisplayText(t, t && t.title);
        },
        queueItemWorkText(t) {
          return queueItemDisplayText(t, t && t.workTitle);
        },
        workSamCoverUrl(t) {
          const e = this.$q.localStorage.getItem("jwt-token") || "";
          return t ? `/asmr-site/api/cover/${t}?type=sam&token=${e}` : "";
        },
        samCoverUrl(t) {
          const e = this.$q.localStorage.getItem("jwt-token") || "";
          return t ? `/asmr-site/api/cover/${t.split("/")[0]}?type=sam&token=${e}` : "";
        },
        decorateQueueItemWithWork(t, e) {
          return Object.assign({}, t, {
            work_id: e.id,
            primary_work_id: e.primary_work_id || e.id,
            secondary_work_id: e.secondary_work_id || 0,
          });
        },
        flattenAudioQueue(t, e) {
          const s = [];
          const a = (t) => {
            (t || []).forEach((t) => {
              "folder" === t.type
                ? a(t.children)
                : "audio" === t.type &&
                  !isVideoMediaTitle(t.title) &&
                  s.push(this.decorateQueueItemWithWork(t, e));
            });
          };
          return (a(t), s);
        },
        saveCustomPlaylistState(t) {
          const e = this.queueCopy.length ? this.queueCopy : this.queue;
          if (!e || !e.length) return;
          const s = Math.max(
              0,
              Math.min(Number(this.queueIndex) || 0, e.length - 1),
            ),
            a = {
              title: "自定义播放列表",
              updatedAt: Date.now(),
              queue: e.concat(),
              index: s,
              seconds: Number.isFinite(Number(t))
                ? Number(t)
                : Number(this.currentTime) || 0,
              coverWorkIds: customPlaylistCoverWorkIds(e),
            };
          (this.$q.localStorage.set(CUSTOM_AUDIO_PLAYLIST_KEY, a),
            window.dispatchEvent(
              new CustomEvent("kikoeru-custom-playlist-updated"),
            ));
        },
        restoreDefaultQueue() {
          if (!this.defaultQueue || !this.defaultQueue.length)
            return void this.$q.notify({
              message: "当前作品暂无可恢复的默认播放列表",
              timeout: 900,
            });
          const t = this.currentPlayingFile && this.currentPlayingFile.hash,
            e = this.defaultQueue.findIndex((e) => e.hash === t),
            s = e >= 0 ? e : 0,
            a = this.defaultQueue.concat();
          (this.SET_QUEUE({
            workId: this.defaultQueueWorkId || this.playWorkId,
            queue: a,
            index: s,
            resetPlaying: !1,
            isCustomPlaylist: !1,
          }),
            (this.queueCopy = a.concat()),
            this.$q.notify({ message: "已恢复当前作品默认播放列表", timeout: 900 }));
        },
        openAddWorkToQueueDialog() {
          ((this.showAddWorkToQueueDialog = !0),
            (this.addWorkError = ""),
            0 === this.addWorkResults.length && this.searchAddWorkCandidates());
        },
        async searchAddWorkCandidates() {
          if (this.addWorkLoading) return;
          ((this.addWorkLoading = !0),
            (this.addWorkError = ""),
            (this.addWorkResults = []));
          const t = String(this.addWorkKeyword || "").trim(),
            e = {
              page: 1,
              sort: "desc",
              order: "release",
              nsfw: 2,
              isAdvance: 0,
            };
          t && (e.keyword = t);
          try {
            const s = await this.$axios.get(t ? "/asmr-site/api/search" : "/asmr-site/api/works", {
              params: e,
            });
            this.addWorkResults = (s.data.works || []).slice(0, 24);
          } catch (s) {
            this.addWorkError = s.response
              ? s.response.data.error ||
                `${s.response.status} ${s.response.statusText}`
              : s.message || "搜索失败";
          }
          this.addWorkLoading = !1;
        },
        workCandidateCode(t) {
          return formatWorkCodePair(t);
        },
        async addWorkToQueue(t) {
          if (!t || !t.id || this.addWorkLoading) return;
          ((this.addWorkLoading = !0), (this.addWorkError = ""));
          try {
            const e = await this.$axios.get("/asmr-site/api/work/" + t.id),
              s = e.data,
              a = await this.$axios.get("/asmr-site/api/tracks/" + s.id),
              i = this.flattenAudioQueue(a.data, s);
            if (!i.length) {
              this.addWorkError = "这个作品没有可加入的音频文件";
              this.addWorkLoading = !1;
              return;
            }
            const r = (this.queueCopy.length ? this.queueCopy : this.queue).concat(),
              o = r.length
                ? Math.max(0, Math.min(this.queueIndex, r.length - 1))
                : 0,
              n = r.concat(i);
            (this.SET_QUEUE({
              workId: r.length ? this.playWorkId || s.id : s.id,
              queue: n,
              index: o,
              resetPlaying: !r.length,
              isCustomPlaylist: !0,
              setDefaultQueue: !1,
            }),
              (this.queueCopy = n.concat()),
              this.saveCustomPlaylistState(this.currentTime),
              (this.showAddWorkToQueueDialog = !1),
              this.$q.notify({
                message: `已加入 ${i.length} 个音频到自定义播放列表`,
                timeout: 1200,
              }));
          } catch (e) {
            this.addWorkError = e.response
              ? e.response.data.error ||
                `${e.response.status} ${e.response.statusText}`
              : e.message || "添加失败";
          }
          this.addWorkLoading = !1;
        },
        onClickTrack(t) {
          this.editCurrentPlayList ||
            (this.SET_TRACK(t), (this.showCurrentPlayList = !1));
        },
        onMoved(t) {
          if (!t) return;
          let e = null;
          ((e =
            t.oldIndex === this.queueIndex
              ? t.newIndex
              : t.oldIndex < this.queueIndex && t.newIndex >= this.queueIndex
                ? this.queueIndex - 1
                : t.oldIndex > this.queueIndex && t.newIndex <= this.queueIndex
                  ? this.queueIndex + 1
                  : this.queueIndex),
            this.SET_QUEUE({
              queue: this.queueCopy.concat(),
              index: e,
              resetPlaying: !1,
            }));
        },
        removeFromQueue(t) {
          this.REMOVE_FROM_QUEUE(t);
        },
        emptyQueue() {
          this.EMPTY_QUEUE();
        },
        onCoverSwipe(t) {
          switch (t.direction) {
            case "left":
            case "right":
              this.flipCover();
              break;
            case "down":
              this.toggleHide();
          }
        },
        openWorkDetail(t) {
          (t && t.preventDefault && t.preventDefault(),
            t && t.stopPropagation && t.stopPropagation());
          const e = this.workDetailUrl;
          if (!e) return;
          const s = this.$router.resolve(e),
            a =
              s && s.route
                ? s.route.fullPath
                : "string" === typeof e
                  ? e
                  : e.path || "";
          this.$route.fullPath !== a &&
            this.$router.push(e).catch((t) => {
              t &&
                "NavigationDuplicated" !== t.name &&
                a &&
                (window.location.href = a);
            });
          !this.hide && this.toggleHide();
        },
        setPIPLyrics() {
          (this.enablePIPLyrics ||
            this.$q.notify({
              message: "创建桌面歌词组件中，请稍等...",
              timeout: 500,
            }),
            this.setEnablePIPLyrics(!this.enablePIPLyrics));
        },
        isSameTwoHistory(t, e) {
          if (!t || !e) return !1;
          if (t.work_id != e.work_id) return !1;
          if (t.state.seconds != e.state.seconds) return !1;
          if (t.state.index != e.state.index) return !1;
          if (t.state.queue.length != e.state.queue.length) return !1;
          for (let s = 0; s < t.state.queue.length; ++s)
            if (t.state.queue[s].hash != e.state.queue[s].hash) return !1;
          return !0;
        },
        onUpdatePlayingStatus() {
          if (this.queueCopy.length <= 0) return;
          if (!this.resumeHistroyDone)
            return void console.log(
              "尚处于恢复历史记录的状态，跳过本次历史更新",
            );
          if (this.isCustomPlaylist)
            return void this.saveCustomPlaylistState(this.currentTime);
          const t = {
            work_id: this.playWorkId,
            state: {
              queue: this.queueCopy,
              index: this.queueIndex,
              seconds: this.currentTime,
            },
          };
          this.isSameTwoHistory(this.latestUpdatedHistory, t)
            ? console.log("播放状态未变，跳过服务器历史更新")
            : this.$axios
                .put("/asmr-site/api/histroy", t)
                .then((e) => {
                  (console.log("更新播放状态成功"),
                    (this.latestUpdatedHistory = t));
                })
                .catch((t) => {
                  console.error(t.response.data.error);
                });
        },
        onToggleVideoSource() {
          this.enableVideoSource
            ? this.toggleEnableVideoSource()
            : this.$q
                .dialog({
                  title: "注意",
                  message:
                    "开启视频源绘制功能会增加性能开销，移动设备上可能会发热严重，请谨慎选择。此外，在iOS safari系统中，safari会强制将页面中正在播放的视频元素设置为画中画模式，无法规避，建议iOS safari环境下关闭此项功能",
                  cancel: !0,
                })
                .onOk(() => {
                  this.toggleEnableVideoSource();
                })
                .onCancel(() => {});
        },
        onSetEnableVideoSourcePIP(t) {
          this.setEnableVideoSourcePIP(t);
          const e = document.querySelector("#mediaVideo"),
            s = document.pictureInPictureElement === e;
          t && !s
            ? "function" === typeof e.requestPictureInPicture &&
              document.pictureInPictureEnabled
              ? e
                  .requestPictureInPicture()
                  .then(() => {
                    e.addEventListener("leavepictureinpicture", () => {
                      (this.playing && this.player.play(),
                        this.setEnableVideoSourcePIP(!1));
                    });
                  })
                  .catch((t) => {
                    console.log(
                      "PIP in video source failed, msg = ",
                      t.message,
                    );
                  })
              : "function" === typeof e.webkitPresentationMode &&
                e.webkitPresentationMode("picture-in-picture")
            : s && document.exitPictureInPicture();
        },
        gotoFullScreenPlayer() {
          this.$router.push("/fullScreenPlayer");
        },
        suggestRefreshPage() {
          this.$q.notify({
            message: "配置已更改，建议刷新页面",
            actions: [
              {
                label: "立即刷新",
                handler: () => {
                  this.$router.go(0);
                },
              },
            ],
          });
        },
        lyricOffsetChange(t) {
          (null == t && (t = 0),
            (t = Math.round(1e4 * t) / 1e4),
            console.log("lyric offset change to ", t, typeof t),
            this.setLyricOffsetSeconds(t));
        },
        flipCover() {
          this.enableVisualizer &&
            (console.warn("flip cover"),
            (this.isFlipCover = !this.isFlipCover));
        },
        onKeyDown(t) {
          if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName))
            return;
          if (0 === this.playWorkId) return;
          const e = 0.04;
          switch (t.code) {
            case "Space":
              this.togglePlaying();
              break;
            case "ArrowLeft":
              this.rewind(!0);
              break;
            case "ArrowRight":
              this.forward(!0);
              break;
            case "PageDown":
              this.nextTrack();
              break;
            case "PageUp":
              this.previousTrack();
              break;
            case "ArrowUp":
              this.volume = Math.min(1, this.volume + e);
              break;
            case "ArrowDown":
              this.volume = Math.max(0, this.volume - e);
              break;
            default:
              return;
          }
          (t.preventDefault(), t.stopPropagation());
        },
        detectBuggyIOS() {
          if (((this.isBuggyIOS = !1), !localStorage.shownedBuggyIOSOnce))
            try {
              if (this.$q.platform.is.safari && !this.$q.platform.is.desktop) {
                const t = /Version\/(\d*\.\d*\.\d*)/.exec(
                  window.navigator.appVersion,
                );
                if (!t) return;
                const e = t[1].split(".").map((t) => parseInt(t));
                (e[0] >= 17 && e[1] >= 3 && (this.isBuggyIOS = !0),
                  (localStorage.shownedBuggyIOSOnce = !0));
              }
            } catch (t) {
              console.error(t);
            }
        },
      },
      created() {
        this.onUpdatePlayingStatus = Object(Pt["a"])(
          this.onUpdatePlayingStatus,
          500,
        );
      },
    },
    Ye = Ge,
    Ke = (s("0eef"), s("05c0")),
    Je = s("4e73"),
    Ze = s("2c91"),
    Xe = s("eb85"),
    ts = s("12c5"),
    es = Object(g["a"])(Ye, Gt, Yt, !1, null, "85ce17cc", null),
    ss = es.exports;
  (Bt()(es, "components", {
    QCard: Dt["a"],
    QImg: Ut["a"],
    QBtn: zt["a"],
    QTooltip: Ke["a"],
    QMenu: Je["a"],
    QItem: Ft["a"],
    QItemSection: Qt["a"],
    QIcon: Qe["a"],
    QInput: We["a"],
    QSlider: ve["a"],
    QDialog: Ue["a"],
    QSpace: Ze["a"],
    QSeparator: Xe["a"],
    QList: De["a"],
    QItemLabel: Wt["a"],
    QCardSection: Re["a"],
    QCardActions: ze["a"],
  }),
    Bt()(es, "directives", {
      TouchSwipe: ts["a"],
      Ripple: Be["a"],
      ClosePopup: je["a"],
    }));
  var as = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return t.hasDisplayLyric
        ? s("div", { ref: "draggable", staticClass: "lyric-container" }, [
            s(
              "div",
              {
                staticClass: "fontSizeBar",
                class: t.showSizeBar ? "showSizeBarStyle" : "hideSizeBarStyle",
              },
              [
                s("q-slider", {
                  attrs: { min: 0.2, max: 10, step: 0, "thumb-size": "35px" },
                  on: { change: t.onFontSizeChange },
                  model: {
                    value: t.fontSize,
                    callback: function (e) {
                      t.fontSize = e;
                    },
                    expression: "fontSize",
                  },
                }),
              ],
              1,
            ),
            s(
              "div",
              {
                ref: "lyricsBar",
                staticClass: "text-center text-bold non-selectable",
                class: t.$q.dark.isActive ? "text-purple-7" : "text-purple-11",
                attrs: { id: "lyricsBar" },
                on: { mousedown: t.onCursorDown, touchstart: t.onCursorDown },
              },
              [
                s(
                  "div",
                  {
                    ref: "lyricBackground",
                    staticClass: "lyricBackground",
                    class: t.$q.dark.isActive
                      ? "lyricBackgroundDarkMode"
                      : "lyricBackgroundLightMode",
                    attrs: { id: "lyric" },
                  },
                  [t.showSizeBar
                    ? s(
                        "button",
                        {
                          staticClass: "lyric-close",
                          attrs: { type: "button", title: "关闭桌面歌词" },
                          on: {
                            mousedown: function (e) {
                              e.stopPropagation();
                            },
                            touchstart: function (e) {
                              e.stopPropagation();
                            },
                            click: function (e) {
                              return t.closeFloatingLyrics(e);
                            },
                            touchend: function (e) {
                              return t.closeFloatingLyrics(e);
                            },
                          },
                        },
                        [
                          s("span", { staticClass: "material-icons" }, [
                            t._v("close"),
                          ]),
                        ],
                      )
                    : t._e()].concat(
                    t._l(t.lyricLines, function (e, a) {
                      return s(
                        "div",
                        {
                          key: a,
                          staticClass: "lyric",
                          style: {
                            "font-size": t.autoAdjustedFontSize + "rem",
                          },
                        },
                        [t._v(t._s(e))],
                      );
                    }),
                  ),
                  0,
                ),
              ],
            ),
          ])
        : t._e();
    },
    is = [],
    rs = {
      name: "LyricsBar",
      computed: {
        ...Object(y["d"])("AudioPlayer", ["currentLyric"]),
        hasDisplayLyric() {
          return (
            !!this.currentLyric &&
            "undefined" !== String(this.currentLyric).trim()
          );
        },
        lyricLines() {
          return this.hasDisplayLyric ? String(this.currentLyric).split("\n") : [];
        },
        autoAdjustedFontSize() {
          const t = parseFloat(this.fontSize) || 1.5,
            e = this.$q.screen.lt.sm ? 0.62 : 0.75,
            s = this.$q.screen.lt.sm ? 16 : 42,
            a = this.$q.screen.lt.sm ? 6 : 5,
            i = this.lyricLines.reduce(
              (t, e) =>
                t + Math.max(1, Math.ceil(Array.from(e || "").length / s)),
              0,
            ),
            r = i > a ? Math.sqrt(a / i) : 1,
            o = this.autoFontSize > 0 ? this.autoFontSize : t;
          return Math.max(e, Math.min(t, o, t * r));
        },
      },
      data() {
        return {
          beTouched: !1,
          startX: 0,
          startY: 0,
          fontSize: 0,
          autoFontSize: 0,
          showSizeBar: !1,
          laterTimer: 0,
          fitLyricTimer: 0,
        };
      },
      watch: {
        fontSize(t, e) {
          (e > 0 && this.showTempSizeBar(),
            (this.autoFontSize = parseFloat(t) || 1.5),
            this.scheduleFitLyricFontSize());
        },
        currentLyric() {
          ((this.autoFontSize = parseFloat(this.fontSize) || 1.5),
            this.scheduleFitLyricFontSize());
        },
      },
      methods: {
        ...Object(y["c"])("AudioPlayer", {
          setEnableFloatingLyrics: "SET_ENABLE_FLOATING_LYRICS",
        }),
        showTempSizeBar() {
          (clearTimeout(this.laterTimer),
            (this.showSizeBar = !0),
            (this.laterTimer = setTimeout(() => {
              this.showSizeBar = !1;
            }, 3e3)));
        },
        closeFloatingLyrics(t) {
          (t && (t.preventDefault(), t.stopPropagation()),
            clearTimeout(this.laterTimer),
            (this.showSizeBar = !1),
            (this.beTouched = !1),
            this.setEnableFloatingLyrics(!1));
        },
        isLyricsControlEvent(t) {
          return (
            t.target &&
            t.target.closest &&
            t.target.closest(".lyric-close, .fontSizeBar")
          );
        },
        getTouch(t) {
          return t.touches ? t.touches[0] : t;
        },
        onCursorDown(t) {
          if (this.isLyricsControlEvent(t)) return;
          (this.showTempSizeBar(), t.preventDefault(), (this.beTouched = !0));
          const e = this.getTouch(t);
          ((this.startX = e.clientX - this.$refs.draggable.offsetLeft),
            (this.startY = e.clientY - this.$refs.draggable.offsetTop));
        },
        onCursorUp(t) {
          this.beTouched && (t.preventDefault(), (this.beTouched = !1));
        },
        onCursorMove(t) {
          if (!this.beTouched) return;
          const e = this.getTouch(t),
            s = e.clientX - this.startX,
            a = e.clientY - this.startY;
          ((this.$refs.draggable.style.left = s + "px"),
            (this.$refs.draggable.style.top = a + "px"));
        },
        onFontSizeChange(t) {
          (console.warn("fontSize change to: ", t),
            (localStorage.lyricFontSize = t));
        },
        scheduleFitLyricFontSize() {
          (clearTimeout(this.fitLyricTimer),
            (this.fitLyricTimer = setTimeout(() => {
              this.fitLyricFontSize();
            }, 0)));
        },
        fitLyricFontSize() {
          this.$nextTick(() => {
            const t = this.$refs.lyricBackground;
            if (!t) return;
            const e = parseFloat(this.fontSize) || 1.5,
              s = this.$q.screen.lt.sm ? 0.62 : 0.75,
              a = Math.max(
                this.$q.screen.lt.sm ? 82 : 72,
                window.innerHeight * (this.$q.screen.lt.sm ? 0.3 : 0.22),
              ),
              i = parseFloat(this.autoAdjustedFontSize) || e,
              r = t.scrollHeight / a;
            let o = this.autoFontSize > 0 ? this.autoFontSize : e;
            (r > 1
              ? (o = Math.max(s, (0.96 * i) / r))
              : o < e && r < 0.72 && (o = Math.min(e, 1.08 * o)),
              Math.abs(o - this.autoFontSize) > 0.02 &&
                ((this.autoFontSize = parseFloat(o.toFixed(3))),
                r > 1.02 && o > s && this.scheduleFitLyricFontSize()));
          });
        },
      },
      mounted() {
        ((this.fontSize = parseFloat(localStorage.lyricFontSize || "1.5")),
          (this.autoFontSize = this.fontSize),
          this.scheduleFitLyricFontSize(),
          addEventListener("mousemove", this.onCursorMove),
          addEventListener("touchmove", this.onCursorMove),
          addEventListener("mouseup", this.onCursorUp),
          addEventListener("touchend", this.onCursorUp),
          addEventListener("touchcancel", this.onCursorUp));
      },
      beforeDestroy() {
        (clearTimeout(this.fitLyricTimer),
          removeEventListener("mousemove", this.onCursorMove),
          removeEventListener("touchmove", this.onCursorMove),
          removeEventListener("mouseup", this.onCursorUp),
          removeEventListener("touchend", this.onCursorUp),
          removeEventListener("touchcancel", this.onCursorUp));
      },
    },
    os = rs,
    ns = (s("b3a5"), Object(g["a"])(os, as, is, !1, null, null, null)),
    ls = ns.exports;
  Bt()(ns, "components", { QSlider: ve["a"] });
  var cs = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s("div", { staticClass: "topClass", class: t.visibility }, [
        s("canvas", {
          ref: "canvas",
          staticClass: "sized",
          attrs: { width: "500", height: "60" },
        }),
        s("video", {
          ref: "video",
          staticClass: "sized",
          staticStyle: { display: "inline" },
          attrs: {
            muted: "muted",
            playsinline: "",
            preload: "metadata",
            controls: "controls",
          },
          domProps: { muted: !0 },
        }),
      ]);
    },
    ds = [],
    us = {
      name: "PIPLyrics",
      computed: {
        video() {
          return this.$refs.video;
        },
        canvas() {
          return this.$refs.canvas;
        },
        ...Object(y["d"])("AudioPlayer", [
          "currentLyric",
          "enablePIPLyrics",
          "playing",
        ]),
        ...Object(y["b"])("AudioPlayer", ["isQueueEmpty"]),
      },
      data() {
        return {
          ctx: null,
          stopRafObject: { stopped: !1 },
          visibility: "hide",
          isFireFox: navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
          isVideoCanPlay: !1,
          pixelRatio: window.devicePixelRatio,
          lastProcessedWindowSize: { height: 0, width: 0 },
          pipWindow: null,
          resizePatchTimeoutID: 0,
        };
      },
      methods: {
        initCanvas() {
          this.ctx = this.$refs.canvas.getContext("2d");
          const t = this.$refs.canvas;
          ((t.width = this.pixelRatio * window.innerWidth),
            (t.height = (t.width / 500) * 60),
            console.warn(
              `pip canvas init size: ${this.canvas.width} x ${this.canvas.height}`,
            ));
        },
        drawLyric(t) {
          console.log("draw lyric: ", t);
          const e = 0.7,
            s = 30,
            a = this.$refs.canvas,
            i = this.ctx,
            r = e * Math.round(Math.sqrt((a.width * a.height) / s)),
            o = this.$q.dark.isActive;
          (i.clearRect(0, 0, a.width, a.height),
            (i.fillStyle = o
              ? "rgba(50, 50, 50, 1.0)"
              : "rgba(255, 255, 255, 1.0)"),
            i.fillRect(0, 0, a.width, a.height),
            (i.font = `bold ${r}px "-apple-system", "BlinkMacSystemFont", "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`),
            (i.fillStyle = "#9c27b0"));
          const n = 5,
            l = 0,
            c = Math.floor((a.height - 2 * l) / r),
            d = a.width - 2 * n,
            u = i.measureText(t),
            h = Math.ceil(u.width / d),
            m = Math.min(h, c),
            p = a.height - m * r;
          let g = 0;
          const f = t.split("");
          for (let v = 0; v < m && g < f.length; v++) {
            let e = "",
              s = null;
            while (g < t.length) {
              if (((e += f[g]), (s = i.measureText(e)), s.width > d)) {
                e = e.substr(0, e.length - 1);
                break;
              }
              g++;
            }
            (v == m - 1 &&
              g < f.length &&
              (e = e.substr(0, e.length - 3) + "..."),
              (s = i.measureText(e)));
            const o = n + (a.width - s.width) / 2,
              l = p / 2 + v * r + s.actualBoundingBoxAscent;
            i.fillText(e, o, l);
          }
          this.video.srcObject
            .getTracks()
            .forEach((t) => t.requestFrame && t.requestFrame());
        },
        initVideos() {
          const t = this.$refs.canvas.captureStream();
          ((this.video.srcObject = t),
            (this.isVideoCanPlay = !0),
            this.video.addEventListener("loadedmetadata", () => {
              (console.log("pip video ready"), (this.isVideoCanPlay = !0));
            }),
            this.video.addEventListener("enterpictureinpicture", (t) => {
              ((this.pipWindow = t.pictureInPictureWindow),
                (this.pipWindow.onresize = () => {
                  this.onPipWindowResize();
                }),
                setTimeout(() => this.onPipWindowResize(), 500),
                console.warn("enter pip"));
            }),
            this.video.addEventListener("leavepictureinpicture", () => {
              this.stopPIPLyric &&
                (this.stopPIPLyric(),
                this.setEnablePIPLyrics(!1),
                (this.pipWindow = null));
            }),
            this.video.play(),
            this.forceVideoStartLoadMetadata());
        },
        onPipWindowResize() {
          this.pipWindow &&
            ((this.canvas.width = Math.round(
              this.pixelRatio * this.pipWindow.width,
            )),
            (this.canvas.height = Math.round(
              this.pixelRatio * this.pipWindow.height,
            )),
            this.drawLyric(this.currentLyric));
        },
        forceVideoStartLoadMetadata() {
          let t = 5;
          const e = () => {
            t < 0
              ? (this.enablePIPLyrics && this.playing) || this.video.pause()
              : (t--,
                requestAnimationFrame(e),
                this.drawLyric(this.currentLyric));
          };
          requestAnimationFrame(e);
        },
        openPIPVideoMode() {
          (this.video.play(),
            console.log("打开桌面歌词"),
            "function" === typeof this.video.requestPictureInPicture &&
            document.pictureInPictureEnabled
              ? this.video
                  .requestPictureInPicture()
                  .then(() => {
                    (this.playing || this.video.pause(),
                      (this.video.onplay = () => {
                        this.syncPlayingStateFromPIPVideoToAudio(!0);
                      }),
                      (this.video.onpause = () => {
                        this.syncPlayingStateFromPIPVideoToAudio(!1);
                      }));
                  })
                  .catch((t) => {
                    (console.log(
                      "PIP lyric open video failed, msg = ",
                      t.message,
                    ),
                      this.stopPIPLyric());
                  })
              : "function" === typeof this.video.webkitPresentationMode &&
                this.video.webkitPresentationMode("picture-in-picture"),
            this.isFireFox &&
              ((this.visibility = "manulSet"),
              setTimeout(() => {
                this.visibility = "hide";
              }, 1e4)));
        },
        showUserPrompt() {
          let t =
              "请点击‘打开’按钮确认显示桌面歌词，或者点击‘取消’关闭桌面歌词。（请注意，桌面歌词打开后，原先网页内的歌词就会被隐藏掉）",
            e = "请继续";
          (this.isFireFox &&
            ((t =
              "检测到FireFox浏览器，此浏览器下必须由用户手动选择开启画中画功能，请在10秒内手动选择左上角出现的video组件并开启画中画功能，10秒后video组件将会隐藏并无法操作。如果错过，您也可以重新关闭、打开桌面歌词功能，来再次操作。"),
            (e = "好的")),
            this.$q
              .dialog({
                title: "桌面歌词",
                message: t,
                ok: e,
                cancel: "关闭桌面歌词",
                persistent: !1,
              })
              .onOk(async () => {
                this.openPIPVideoMode();
              })
              .onCancel(() => {
                (this.setEnablePIPLyrics(!1), this.stopPIPLyric());
              })
              .onDismiss(() => {}));
        },
        stopPIPLyric() {
          const t = this.$refs.video;
          t &&
            ("function" === typeof document.exitPictureInPicture
              ? document.pictureInPictureElement &&
                document.exitPictureInPicture()
              : "function" === typeof t.webkitPresentationMode &&
                t.webkitSetPresentationMode("inline"),
            t.pause(),
            (t.onplay = null),
            (t.onpause = null));
        },
        ...Object(y["c"])("AudioPlayer", {
          setEnablePIPLyrics: "SET_ENABLE_PIP_LYRICS",
          togglePlaying: "TOGGLE_PLAYING",
          playAudio: "PLAY",
          pauseAudio: "PAUSE",
        }),
        tryEnterPIPAndShowUserPrompt() {
          this.isVideoCanPlay
            ? this.showUserPrompt()
            : this.$q.notify({
                message: "桌面歌词打开失败，请播放音频5秒后再次尝试打开",
                timeout: 500,
              });
        },
        syncPlayingStateFromAudioToPIPVideo() {
          this.enablePIPLyrics &&
            (this.playing && this.video.paused
              ? this.video.play()
              : this.playing || this.video.paused || this.video.pause());
        },
        syncPlayingStateFromPIPVideoToAudio(t) {
          t ? this.playAudio() : this.pauseAudio();
        },
      },
      watch: {
        enablePIPLyrics(t) {
          t ? this.tryEnterPIPAndShowUserPrompt() : this.stopPIPLyric();
        },
        isQueueEmpty(t) {
          t
            ? this.stopPIPLyric()
            : this.enablePIPLyrics && this.tryEnterPIPAndShowUserPrompt();
        },
        currentLyric(t) {
          this.enablePIPLyrics && this.drawLyric(t);
        },
        playing() {
          this.enablePIPLyrics &&
            (this.syncPlayingStateFromAudioToPIPVideo(),
            this.drawLyric(this.currentLyric));
        },
        "$q.dark.isActive"() {
          this.drawLyric(this.currentLyric);
        },
      },
      created() {
        ((this.syncPlayingStateFromAudioToPIPVideo = Object(Pt["a"])(
          this.syncPlayingStateFromAudioToPIPVideo,
          500,
        )),
          (this.syncPlayingStateFromPIPVideoToAudio = Object(Pt["a"])(
            this.syncPlayingStateFromPIPVideoToAudio,
            500,
          )),
          (this.onPipWindowResize = Object(Pt["a"])(
            this.onPipWindowResize,
            100,
            !0,
          )));
      },
      mounted() {
        (this.initCanvas(), this.initVideos());
      },
      beforeDestroy() {
        ((this.stopRafObject.stopped = !0), this.stopPIPLyric());
      },
    },
    hs = us,
    ms = (s("393f"), Object(g["a"])(hs, cs, ds, !1, null, "17c9255d", null)),
    ps = ms.exports,
    gs = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-dialog",
        {
          attrs: { value: t.value, persistent: "" },
          on: {
            input: function (e) {
              return t.$emit("input");
            },
          },
        },
        [
          s("q-card", [
            s(
              "div",
              { staticClass: "q-pa-sm" },
              [
                s("q-time", {
                  attrs: { "now-btn": "", dark: t.isDarkModeOn },
                  model: {
                    value: t.time,
                    callback: function (e) {
                      t.time = e;
                    },
                    expression: "time",
                  },
                }),
              ],
              1,
            ),
            s(
              "div",
              { staticClass: "row justify-between" },
              [
                s(
                  "q-card-actions",
                  [
                    s("q-btn", {
                      directives: [
                        { name: "close-popup", rawName: "v-close-popup" },
                      ],
                      attrs: {
                        flat: "",
                        label: "取消定时",
                        color: "primary",
                        disable: !t.sleepMode,
                      },
                      on: { click: t.clearSleepTimer },
                    }),
                  ],
                  1,
                ),
                s(
                  "q-card-actions",
                  { attrs: { align: "right" } },
                  [
                    s("q-btn", {
                      directives: [
                        { name: "close-popup", rawName: "v-close-popup" },
                      ],
                      attrs: { flat: "", label: "取消", color: "primary" },
                    }),
                    s("q-btn", {
                      directives: [
                        { name: "close-popup", rawName: "v-close-popup" },
                      ],
                      attrs: { flat: "", label: "确定", color: "primary" },
                      on: { click: t.setSleepTimer },
                    }),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ]),
        ],
        1,
      );
    },
    fs = [],
    vs = s("bd4c"),
    ys = {
      name: "SleepMode",
      props: ["value"],
      data() {
        return { time: "00:00" };
      },
      computed: {
        ...Object(y["d"])("AudioPlayer", ["sleepTime", "sleepMode"]),
        isDarkModeOn() {
          return this.$q.dark.isActive;
        },
        hour() {
          return parseInt(this.time.split(":")[0]);
        },
        minute() {
          return parseInt(this.time.split(":")[1]);
        },
      },
      mounted() {
        try {
          this.$q.sessionStorage.getItem("sleepMode") &&
            this.SET_SLEEP_TIMER(this.$q.sessionStorage.getItem("sleepTime"));
        } catch {
          console.log("Web Storage API error");
        }
      },
      watch: {
        value(t) {
          if (t)
            if (this.sleepMode) {
              const t = new Date(this.sleepTime);
              this.time = vs["b"].formatDate(t, "HH:mm");
            } else {
              const t = new Date();
              this.time =
                t.getHours().toString().padStart(2, "0") +
                ":" +
                t.getMinutes().toString().padStart(2, "0");
            }
        },
        time() {
          console.log("time change to ", this.time, this.hour, this.minute);
        },
      },
      methods: {
        ...Object(y["c"])("AudioPlayer", [
          "SET_SLEEP_TIMER",
          "CLEAR_SLEEP_MODE",
        ]),
        setSleepTimer() {
          const t = new Date();
          let e = t;
          (this.hour < t.getHours() && (e = vs["b"].addToDate(e, { days: 1 })),
            e.setHours(this.hour),
            e.setMinutes(this.minute));
          const s = e.getTime();
          this.SET_SLEEP_TIMER(s);
          try {
            (this.$q.sessionStorage.set("sleepTime", s),
              this.$q.sessionStorage.set("sleepMode", !0));
          } catch {
            console.log("Web Storage API error");
          }
          this.showSuccNotif(
            `将于${vs["b"].formatDate(e, "HH:mm:ss")}停止播放`,
          );
        },
        clearSleepTimer() {
          this.CLEAR_SLEEP_MODE();
          try {
            (this.$q.sessionStorage.set("sleepTime", null),
              this.$q.sessionStorage.set("sleepMode", !1));
          } catch {
            console.log("Web Storage API error");
          }
          this.showSuccNotif("已关闭睡眠模式");
        },
        showSuccNotif(t) {
          this.$q.notify({
            message: t,
            color: "primary",
            icon: "bedtime",
            timeout: 5e3,
          });
        },
      },
    },
    ws = ys,
    bs = s("ca78"),
    _s = Object(g["a"])(ws, gs, fs, !1, null, null, null),
    qs = _s.exports;
  (Bt()(_s, "components", {
    QDialog: Ue["a"],
    QCard: Dt["a"],
    QTime: bs["a"],
    QCardActions: ze["a"],
    QBtn: zt["a"],
  }),
    Bt()(_s, "directives", { ClosePopup: je["a"] }));
  var ks = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-dialog",
        {
          attrs: { value: t.value, persistent: "", position: "bottom" },
          on: {
            input: function (e) {
              return t.$emit("input");
            },
          },
        },
        [
          s(
            "q-card",
            { staticClass: "q-pb-xl" },
            [
              s("q-card-section", [
                s("div", { staticClass: "row items-center no-wrap" }, [
                  s("div", { staticClass: "col" }, [t._v("睡眠倒计时")]),
                  s(
                    "div",
                    { staticClass: "col-auto" },
                    [
                      s("q-btn", {
                        directives: [
                          { name: "close-popup", rawName: "v-close-popup" },
                        ],
                        attrs: {
                          flat: "",
                          label: "关闭窗口",
                          color: "primary",
                        },
                      }),
                    ],
                    1,
                  ),
                ]),
              ]),
              s(
                "div",
                { staticClass: "q-pa-md" },
                [
                  s("q-input", {
                    attrs: {
                      filled: "",
                      dense: "",
                      type: "number",
                      rules: [
                        function (t) {
                          return t >= 0;
                        },
                      ],
                    },
                    scopedSlots: t._u([
                      {
                        key: "prepend",
                        fn: function () {
                          return [
                            s("span", { staticClass: "text-subtitle2" }, [
                              t._v("设置"),
                            ]),
                          ];
                        },
                        proxy: !0,
                      },
                      {
                        key: "append",
                        fn: function () {
                          return [
                            s("span", { staticClass: "text-subtitle2" }, [
                              t._v("分钟后停止播放"),
                            ]),
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                    model: {
                      value: t.mannulMinutes,
                      callback: function (e) {
                        t.mannulMinutes = e;
                      },
                      expression: "mannulMinutes",
                    },
                  }),
                  s("q-slider", {
                    attrs: {
                      color: "primary",
                      markers: "",
                      snap: "",
                      min: 0,
                      max: 10,
                    },
                    model: {
                      value: t.countDownValue,
                      callback: function (e) {
                        t.countDownValue = e;
                      },
                      expression: "countDownValue",
                    },
                  }),
                ],
                1,
              ),
              t.showCountTimer
                ? s("div", { staticClass: "row justify-center" }, [
                    s("div", { staticClass: "text-subtitle2" }, [
                      t._v("\n        倒计时中，还剩"),
                      s("span", { staticClass: "text-warning" }, [
                        t._v(
                          t._s(t.countTimerRemainMinutes) +
                            "分钟" +
                            t._s(t.countTimerRemainSeconds) +
                            "秒",
                        ),
                      ]),
                      t._v("停止播放\n      "),
                    ]),
                  ])
                : t._e(),
              s(
                "div",
                { staticClass: "row justify-between" },
                [
                  s(
                    "q-card-actions",
                    [
                      t.sleepMode
                        ? s("q-btn", {
                            directives: [
                              { name: "close-popup", rawName: "v-close-popup" },
                            ],
                            attrs: {
                              flat: "",
                              label: "取消倒计时",
                              color: "primary",
                              disable: !t.sleepMode,
                            },
                            on: { click: t.clearSleepTimer },
                          })
                        : t._e(),
                    ],
                    1,
                  ),
                  s(
                    "q-card-actions",
                    { attrs: { align: "right" } },
                    [
                      s("q-btn", {
                        directives: [
                          { name: "close-popup", rawName: "v-close-popup" },
                        ],
                        attrs: {
                          flat: "",
                          label: t.sleepMode ? "重新倒计时" : "开始倒计时",
                          color: "primary",
                        },
                        on: { click: t.setSleepTimer },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
        ],
        1,
      );
    },
    Ss = [],
    Cs = {
      name: "CountDownSleepMode",
      props: ["value"],
      data() {
        return {
          countDownValue: 0,
          mannulMinutes: 0,
          showCountTimer: !1,
          countTimerRemainMills: 0,
          countTimerIntervalId: 0,
        };
      },
      computed: {
        ...Object(y["d"])("AudioPlayer", ["sleepTime", "sleepMode"]),
        isDarkModeOn() {
          return this.$q.dark.isActive;
        },
        hour() {
          return parseInt(this.time.split(":")[0]);
        },
        minute() {
          return parseInt(this.time.split(":")[1]);
        },
        countDownMinutes() {
          return this.countDownValue < 0
            ? 0
            : [0, 1, 3, 5, 10, 20, 30, 45, 60, 90, 120][this.countDownValue];
        },
        countTimerRemainMinutes() {
          return Math.floor(this.countTimerRemainMills / 1e3 / 60);
        },
        countTimerRemainSeconds() {
          return Math.floor(this.countTimerRemainMills / 1e3) % 60;
        },
      },
      mounted() {
        try {
          this.$q.sessionStorage.getItem("sleepMode") &&
            this.SET_SLEEP_TIMER(this.$q.sessionStorage.getItem("sleepTime"));
        } catch {
          console.log("Web Storage API error");
        }
      },
      watch: {
        value(t) {
          if ((this.setCountDownTimer(t && this.sleepMode), t))
            if (this.sleepMode) {
              const t = new Date(this.sleepTime);
              this.time = vs["b"].formatDate(t, "HH:mm");
            } else {
              const t = new Date();
              this.time =
                t.getHours().toString().padStart(2, "0") +
                ":" +
                t.getMinutes().toString().padStart(2, "0");
            }
        },
        countDownValue() {
          this.mannulMinutes = this.countDownMinutes;
        },
        mannulMinutes(t) {
          t < 0 &&
            this.$nextTick(() => {
              this.mannulMinutes = 0;
            });
        },
      },
      methods: {
        ...Object(y["c"])("AudioPlayer", [
          "SET_SLEEP_TIMER",
          "CLEAR_SLEEP_MODE",
        ]),
        fnMarkerLabel(t) {
          return t + "m";
        },
        setSleepTimer() {
          this.mannulMinutes <= 0 &&
            this.$q.notify({
              message: "倒计时失败，时长不能小于0",
              color: "negative",
              icon: "bedtime",
              timeout: 2e3,
            });
          const t = vs["b"].addToDate(new Date(), {
              seconds: 60 * this.mannulMinutes,
            }),
            e = t.getTime();
          this.SET_SLEEP_TIMER(e);
          try {
            (this.$q.sessionStorage.set("sleepTime", e),
              this.$q.sessionStorage.set("sleepMode", !0));
          } catch {
            console.log("Web Storage API error");
          }
          (this.showSuccNotif(
            `${this.mannulMinutes}分钟后，于${vs["b"].formatDate(t, "HH:mm:ss")}停止播放`,
          ),
            this.setCountDownTimer(!0));
        },
        clearSleepTimer() {
          this.CLEAR_SLEEP_MODE();
          try {
            (this.$q.sessionStorage.set("sleepTime", null),
              this.$q.sessionStorage.set("sleepMode", !1));
          } catch {
            console.log("Web Storage API error");
          }
          (this.showSuccNotif("已关闭睡眠模式"), this.setCountDownTimer(!1));
        },
        showSuccNotif(t) {
          this.$q.notify({
            message: t,
            color: "primary",
            icon: "bedtime",
            timeout: 2e3,
          });
        },
        updateCountDownTimer() {
          this.countTimerRemainMills = this.sleepTime - Date.now();
        },
        setCountDownTimer(t) {
          if (!t)
            return (
              (this.showCountTimer = !1),
              void clearInterval(this.countTimerIntervalId)
            );
          (this.updateCountDownTimer(),
            (this.showCountTimer = !0),
            (this.countTimerIntervalId = setInterval(() => {
              this.updateCountDownTimer();
            }, 1e3)));
        },
      },
    },
    xs = Cs,
    Ts = Object(g["a"])(xs, ks, Ss, !1, null, null, null),
    Is = Ts.exports;
  (Bt()(Ts, "components", {
    QDialog: Ue["a"],
    QCard: Dt["a"],
    QCardSection: Re["a"],
    QBtn: zt["a"],
    QInput: We["a"],
    QSlider: ve["a"],
    QCardActions: ze["a"],
  }),
    Bt()(Ts, "directives", { ClosePopup: je["a"] }));
  s("3e8f");
  var Es = {
      name: "MainLayout",
      mixins: [pe],
      components: {
        PlayerBar: Ht,
        AudioPlayer: ss,
        LyricsBar: ls,
        SleepMode: qs,
        CountDownSleepMode: Is,
        PIPLyrics: ps,
      },
      data() {
        return {
          keyword: "",
          drawerOpen: !1,
          miniState: !0,
          confirm: !1,
          randId: null,
          showTimer: !1,
          showScroller: !1,
          links: [
            { title: "媒体库", icon: "widgets", path: "/" },
            { title: "聚合搜索", icon: "manage_search", path: "/search" },
            {
              title: "大图模式",
              icon: "play_circle",
              path: "/fullScreenPlayer",
            },
            { title: "我的收藏", icon: "favorite", path: "/favourites" },
            { title: "社团", icon: "group", path: "/circles" },
            { title: "标签", icon: "label", path: "/tags" },
            { title: "声优", icon: "mic", path: "/vas" },
            { title: "翻译任务", icon: "subtitles", path: "/ai_lyric" },
            { title: "设定", icon: "tune", path: "/admin" },
          ],
          sharedConfig: {},
        };
      },
      watch: {
        keyword() {
          this.$router.push(
            this.keyword ? "/works?keyword=" + this.keyword : "/works",
          );
        },
        randId() {
          this.randId && this.$router.push(this.workRoute({ id: this.randId }));
        },
	        sharedConfig(t) {
	          (this.SET_REWIND_SEEK_TIME(t.rewindSeekTime),
	            this.SET_FORWARD_SEEK_TIME(t.forwardSeekTime),
	            this.SET_AUDIO_PLAYER_VERSION(t.audioPlayerVersion || "v1"),
	            this.SET_WORK_URL_FORMAT(t.workUrlFormat || "rj"),
	            "undefined" !== typeof window &&
	              ((window.__kikoeruSiteName = this.siteName),
	              (window.__kikoeruMediaFileBaseUrl =
	                normalizeMediaFileBaseUrl(t.mediaFileBaseUrl))),
	            this.applyPageTitle());
	        },
	        $route() {
	          this.applyPageTitle();
	        },
	      },
      mounted() {
        (this.initUser(), this.checkUpdate(), this.readSharedConfig());
      },
      computed: {
        isNotAtHomePage() {
          const t = this.$route.path;
          return t && "/" !== t && "/works" !== t && "/favourites" !== t;
        },
	        isFullScreenPage() {
	          const t = this.$route.path;
	          return t && t.startsWith("/fullScreenPlayer");
	        },
	        siteName() {
	          return this.sharedConfig.siteName || DEFAULT_SITE_NAME;
	        },
	        currentDarkModeName() {
          switch (this.darkMode) {
            case !0:
              return "深色模式";
            case !1:
              return "浅色模式";
            case "auto":
              return "跟随系统";
            default:
              return "Error";
          }
        },
        currentDarkModeIconName() {
          switch (this.darkMode) {
            case !0:
              return "dark_mode";
            case !1:
              return "light_mode";
            case "auto":
              return "brightness_6";
            default:
              return "brightness_alert";
          }
        },
        isAdminUser() {
          return rrIsAdminUser(this.$store.state.User);
        },
        ...Object(y["d"])("User", { userName: "name", authEnabled: "auth" }),
        ...Object(y["d"])("AudioPlayer", [
          "playWorkId",
          "enablePIPLyrics",
          "enableFloatingLyrics",
          "darkMode",
          "oldSleepTimerUIStyle",
        ]),
        ...Object(y["b"])("AudioPlayer", ["isQueueEmpty"]),
      },
	      methods: {
        ...Object(y["c"])("AudioPlayer", [
          "SET_REWIND_SEEK_TIME",
          "SET_FORWARD_SEEK_TIME",
	          "SET_AUDIO_PLAYER_VERSION",
	          "SET_WORK_URL_FORMAT",
	          "SET_AI_SERVER_URL",
	          "TOGGLE_DARK_MODE",
	        ]),
	        applyPageTitle() {
	          const t = this.$route.path || "";
	          t.startsWith("/work/") || (document.title = this.siteName);
	        },
	        initUser() {
          this.$axios
            .get("/asmr-site/api/auth/me")
            .then((t) => {
              (this.$store.commit("User/INIT", t.data.user),
                this.$store.commit("User/SET_AUTH", t.data.auth),
                "undefined" !== typeof window &&
                  (window.__kikoeruGuestMode = !!t.data.guestMode));
            })
            .catch((t) => {
              if (t.response)
                if (401 === t.response.status) {
                  const t = this.$router.currentRoute.path;
                  "/login" !== t && this.$router.push("/login");
                } else
                  this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  );
              else this.showErrNotif(t.message || t);
            });
        },
        checkUpdate() {
          this.$axios
            .get("/asmr-site/api/version")
            .then((t) => {
              (t.data.update_available &&
                t.data.notifyUser &&
                this.$q.notify({
                  message: "GitHub上有新版本",
                  color: "primary",
                  textColor: "white",
                  icon: "cloud_download",
                  timeout: 5e3,
                  actions: [
                    { label: "好", color: "white" },
                    {
                      label: "查看",
                      color: "white",
                      handler: () => {
                        Object.assign(document.createElement("a"), {
                          target: "_blank",
                          href: "https://github.com/umonaca/kikoeru-express/releases",
                        }).click();
                      },
                    },
                  ],
                }),
                t.data.lockFileExists &&
                  this.$q.notify({
                    message: t.data.lockReason,
                    type: "warning",
                    timeout: 6e4,
                    actions: [
                      { label: "以后提醒我", color: "black" },
                      {
                        label: "前往扫描页",
                        color: "black",
                        handler: () => this.$router.push("/admin/scanner"),
                      },
                    ],
                  }));
            })
            .catch((t) => {
              console.error(t);
            });
        },
        readSharedConfig() {
          this.$axios
            .get("/asmr-site/api/config/shared")
            .then((t) => {
              this.sharedConfig = t.data.sharedConfig;
            })
            .catch((t) => {
              if (t.response)
                if (401 === t.response.status) {
                  const t = this.$router.currentRoute.path;
                  "/login" !== t && this.$router.push("/login");
                } else
                  this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  );
              else this.showErrNotif(t.message || t);
            });
        },
        randomPlay() {
          this.requestRandomWork();
        },
        requestRandomWork() {
          const t = { order: "betterRandom" };
          this.$axios
            .get("/asmr-site/api/works", { params: t })
            .then((t) => {
              const e = t.data.works;
              e.length ? this.$router.push(this.workRoute(e[0])) : (this.randId = null);
            })
            .catch((t) => {
              t.response
                ? 401 !== t.response.status &&
                  this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t);
            });
        },
        logout() {
          (this.$q.localStorage.set("jwt-token", ""),
            sr(""),
            this.$store.commit("User/INIT", {
              name: "guest",
              group: "guest",
            }),
            this.$store.commit("User/SET_AUTH", !1),
            this.$router.push("/"));
        },
        back() {
          this.$router.go(-1);
        },
        toggleDarkMode() {
          this.TOGGLE_DARK_MODE();
        },
        getLinks() {
          return this.links
            .filter(
              (t) => "/fullScreenPlayer" !== t.path || 0 != this.playWorkId,
            )
            .filter(
              (t) =>
                this.isAdminUser ||
                ("/ai_lyric" !== t.path && 0 !== t.path.indexOf("/admin")),
            )
            .map(
              (t) => (
                "/fullScreenPlayer" === t.path &&
                  ((t = { ...t }), (t.path += "/" + this.playWorkId)),
                t
              ),
            );
        },
        onHeaderRevealChange(t) {
          this.showScroller = t;
        },
      },
    },
    Ps = Es,
    Ls = (s("89d3"), s("4d5a")),
    As = s("e359"),
    $s = s("65c6"),
    Os = s("6ac5"),
    Ns = s("9404"),
    Ms = s("4983"),
    Rs = s("cb32"),
    Ds = s("09e3"),
    Fs = s("9989"),
    Qs = s("5096"),
    Us = s("7ff0"),
    Ws = Object(g["a"])(Ps, St, Ct, !1, null, null, null),
    zs = Ws.exports;
  (Bt()(Ws, "components", {
    QLayout: Ls["a"],
    QHeader: As["a"],
    QToolbar: $s["a"],
    QBtn: zt["a"],
    QToolbarTitle: Os["a"],
    QInput: We["a"],
    QTooltip: Ke["a"],
    QIcon: Qe["a"],
    QDrawer: Ns["a"],
    QScrollArea: Ms["a"],
    QList: De["a"],
    QItem: Ft["a"],
    QItemSection: Qt["a"],
    QItemLabel: Wt["a"],
    QDialog: Ue["a"],
    QCard: Dt["a"],
    QCardSection: Re["a"],
    QAvatar: Rs["a"],
    QCardActions: ze["a"],
    QPageContainer: Ds["a"],
    QPage: Fs["a"],
    QPageScroller: Qs["a"],
    QFooter: Us["a"],
  }),
    Bt()(Ws, "directives", { Ripple: Be["a"], ClosePopup: je["a"] }));
  var js = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return t.adminReady
        ? s(
        "q-layout",
        { attrs: { view: "hhh LpR fFf" } },
        [
          s(
            "q-header",
            { staticClass: "bg-black", attrs: { elevated: "" } },
            [
              s(
                "q-toolbar",
                [
                  s("q-btn", {
                    attrs: { flat: "", round: "", dense: "", icon: "menu" },
                    on: {
                      click: function (e) {
                        t.drawer = !t.drawer;
                      },
                    },
                  }),
                  s("q-toolbar-title", [t._v("仪表盘")]),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-drawer",
            {
              attrs: {
                "show-if-above": "",
                mini: t.miniState,
                "mini-to-overlay": "",
                width: 200,
                breakpoint: 500,
                bordered: "",
                "content-class": "",
              },
              on: {
                mouseover: function (e) {
                  t.miniState = !1;
                },
                mouseout: function (e) {
                  t.miniState = !0;
                },
              },
              model: {
                value: t.drawer,
                callback: function (e) {
                  t.drawer = e;
                },
                expression: "drawer",
              },
            },
            [
              s(
                "div",
                { staticClass: "column justify-between fit" },
                [
                  s(
                    "q-list",
                    { staticClass: "col-auto", attrs: { padding: "" } },
                    t._l(t.links, function (e, a) {
                      return s(
                        "q-item",
                        {
                          directives: [{ name: "ripple", rawName: "v-ripple" }],
                          key: a,
                          staticClass: "col text-subtitle1",
                          attrs: {
                            clickable: "",
                            exact: "",
                            to: e.path,
                            "active-class": "text-primary text-weight-bold",
                          },
                        },
                        [
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [s("q-icon", { attrs: { name: e.icon } })],
                            1,
                          ),
                          s("q-item-section", [
                            t._v(
                              "\n            " + t._s(e.title) + "\n          ",
                            ),
                          ]),
                        ],
                        1,
                      );
                    }),
                    1,
                  ),
                ],
                1,
              ),
            ],
          ),
          s("q-page-container", [s("router-view")], 1),
        ],
        1,
      )
        : s("div");
    },
    Bs = [],
    Vs = {
      name: "DashboardLayout",
      mixins: [pe],
      data() {
        return {
          adminReady: !1,
          drawer: !1,
          miniState: !0,
          links: [
            { title: "音声库", icon: "folder", path: "/admin" },
            {
              title: "扫描",
              icon: "youtube_searched_for",
              path: "/admin/scanner",
            },
            { title: "同步", icon: "cloud_download", path: "/admin/syncer" },
            { title: "用户管理", icon: "person", path: "/admin/usermanage" },
            { title: "高级设置", icon: "settings", path: "/admin/advanced" },
            { title: "回到主页", icon: "home", path: "/" },
          ],
        };
      },
      sockets: {
        success(t) {
          (this.showSuccNotif(t.message),
            t.auth &&
              (this.$store.commit("User/INIT", t.user),
              this.$store.commit("User/SET_AUTH", t.auth)));
        },
        error(t) {
          (this.showWarnNotif(t.message || t),
            this.$socket.close(),
            this.$router.push("/"));
        },
      },
      methods: {
        async ensureAdminReady() {
          const t = await rrRequireAdmin();
          return t ? ((this.adminReady = !0), !0) : (this.$router.replace("/"), !1);
        },
      },
      async created() {
        if (!(await this.ensureAdminReady())) return;
        const t = this.$q.localStorage.getItem("jwt-token") || "";
        ((this.$socket.io.opts.query.auth_token = t),
          this.$socket.connected || this.$socket.open());
      },
    },
    Hs = Vs,
    Gs = (s("781d"), Object(g["a"])(Hs, js, Bs, !1, null, "3e4ee076", null)),
    Ys = Gs.exports;
  (Bt()(Gs, "components", {
    QLayout: Ls["a"],
    QHeader: As["a"],
    QToolbar: $s["a"],
    QBtn: zt["a"],
    QToolbarTitle: Os["a"],
    QDrawer: Ns["a"],
    QList: De["a"],
    QItem: Ft["a"],
    QItemSection: Qt["a"],
    QIcon: Qe["a"],
    QPageContainer: Ds["a"],
  }),
    Bt()(Gs, "directives", { Ripple: Be["a"] }));
  var Ks = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        [
          t.enableShowRecent && !t.isAdvanceSearch && 0 == t.searchMetas.length
            ? s("RecentWorks")
            : t._e(),
          t.isAdvanceSearch
            ? s(
                "div",
                {
                  staticClass: "q-pa-md q-full-width row items-stretch",
                  staticStyle: { position: "relative" },
                },
                [
                  s("q-select", {
                    staticClass: "col-2",
                    attrs: {
                      "option-value": "value",
                      "option-label": "label",
                      "emit-value": "",
                      "map-options": "",
                      options: t.searchMetaOptions,
                      dense: "",
                      outlined: "",
                    },
                    model: {
                      value: t.searchMetaType,
                      callback: function (e) {
                        t.searchMetaType = e;
                      },
                      expression: "searchMetaType",
                    },
                  }),
                  s("q-input", {
                    staticClass: "col-10",
                    attrs: {
                      outlined: "",
                      dense: "",
                      autofocus: "",
                      label: "关键字",
                      "option-value": "value",
                      "option-label": "label",
                      hint: t.advanceSearchBarHint,
                    },
                    on: {
                      keyup: function (e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "enter", 13, e.key, "Enter")
                          ? null
                          : t.onAddAdvanceSearchKeyword(e);
                      },
                      focus: t.enableShowCandidates,
                      blur: t.disableShowCandidates,
                    },
                    scopedSlots: t._u(
                      [
                        { key: "before", fn: function () {}, proxy: !0 },
                        {
                          key: "append",
                          fn: function () {
                            return [
                              s("q-btn", {
                                attrs: {
                                  round: "",
                                  dense: "",
                                  flat: "",
                                  icon: "add",
                                },
                                on: { click: t.onAddAdvanceSearchKeyword },
                              }),
                            ];
                          },
                          proxy: !0,
                        },
                      ],
                      null,
                      !1,
                      1736053927,
                    ),
                    model: {
                      value: t.editKeyword,
                      callback: function (e) {
                        t.editKeyword = e;
                      },
                      expression: "editKeyword",
                    },
                  }),
                  t.candidatesMeta.length > 0
                    ? s(
                        "div",
                        {
                          ref: "candidatesEl",
                          staticClass: "advance-search-popover",
                        },
                        t._l(t.candidatesMeta, function (e) {
                          return s(
                            "q-badge",
                            { key: e.t + "_" + e.d, staticClass: "q-ma-xs" },
                            [
                              s("q-icon", {
                                staticClass: "q-mx-xs",
                                attrs: {
                                  name: t.searchMetaIconName(e.t),
                                  color: "white",
                                },
                              }),
                              t._v(
                                "\n        " +
                                  t._s(e.name) +
                                  " : " +
                                  t._s(e.count) +
                                  "\n        ",
                              ),
                              s("q-btn", {
                                staticClass: "q-ml-sm search-tag-close-btn",
                                attrs: {
                                  padding: "xs",
                                  round: "",
                                  flat: "",
                                  size: "xs",
                                  icon: "add",
                                },
                                on: {
                                  click: function (s) {
                                    return t.onAddMetaData(e);
                                  },
                                },
                              }),
                            ],
                            1,
                          );
                        }),
                        1,
                      )
                    : t._e(),
                ],
                1,
              )
            : t._e(),
          s("div", { staticClass: "q-mt-lg q-ml-md row items-center" }, [
            s(
              "span",
              {
                staticClass:
                  "text-h5 text-weight-regular q-pa-xs relative-position",
              },
              [
                t._v("\n      " + t._s(t.pageTitle) + "\n      "),
                s("q-badge", { attrs: { color: "secondary", floating: "" } }, [
                  t._v(t._s(t.pagination.totalCount)),
                ]),
              ],
              1,
            ),
            t.isAdvanceSearch
              ? s(
                  "div",
                  t._l(t.advanceSearchKeywords, function (e, a) {
                    return s(
                      "q-badge",
                      { key: e.t + "_" + e.d, staticClass: "q-ma-xs" },
                      [
                        s("q-icon", {
                          staticClass: "q-mx-xs",
                          attrs: {
                            name: t.searchMetaIconName(e.t),
                            color: "white",
                          },
                        }),
                        t._v("\n        " + t._s(e.name) + "\n        "),
                        s("q-btn", {
                          staticClass: "q-ml-sm search-tag-close-btn",
                          attrs: {
                            padding: "xs",
                            round: "",
                            flat: "",
                            size: "xs",
                            icon: "close",
                          },
                          on: {
                            click: function (e) {
                              return t.removeAdvanceSearchKeyword(a);
                            },
                          },
                        }),
                      ],
                      1,
                    );
                  }),
                  1,
                )
              : s(
                  "div",
                  t._l(t.searchMetas, function (e, a) {
                    return s("q-badge", { key: e, staticClass: "q-ma-xs" }, [
                      t._v(t._s(0 == a ? "" : ",") + " " + t._s(e)),
                    ]);
                  }),
                  1,
                ),
          ]),
          s(
            "div",
            { staticClass: "row justify-between q-mb-md q-mx-sm" },
            [
              s("q-select", {
                staticClass: "col-auto",
                attrs: {
                  dense: "",
                  rounded: "",
                  outlined: "",
                  "bg-color": "",
                  "transition-show": "scale",
                  "transition-hide": "scale",
                  options: t.sortCategoryOptions,
                  "option-label": t.humanReadableLabel,
                  label: "排序属性",
                },
                model: {
                  value: t.sortCategoryOption,
                  callback: function (e) {
                    t.sortCategoryOption = e;
                  },
                  expression: "sortCategoryOption",
                },
              }),
              s("q-select", {
                staticClass: "col-auto",
                attrs: {
                  dense: "",
                  rounded: "",
                  outlined: "",
                  "bg-color": "",
                  "transition-show": "scale",
                  "transition-hide": "scale",
                  options: t.nsfwOptions,
                  "option-label": t.humanReadableLabel,
                  label: "年龄分级",
                },
                model: {
                  value: t.nsfwOption,
                  callback: function (e) {
                    t.nsfwOption = e;
                  },
                  expression: "nsfwOption",
                },
              }),
              s("q-select", {
                staticClass: "col-auto",
                staticStyle: { "min-width": "8rem" },
                attrs: {
                  dense: "",
                  rounded: "",
                  outlined: "",
                  "bg-color": "",
                  "transition-show": "scale",
                  "transition-hide": "scale",
                  options: t.lyricOptions,
                  "option-value": "value",
                  "option-label": "label",
                  "option-disable": "inactive",
                  label: "字幕筛选",
                  multiple: "",
                  "use-chips": "",
                  "emit-value": "",
                  "map-options": "",
                },
                model: {
                  value: t.lyricOption,
                  callback: function (e) {
                    t.lyricOption = e;
                  },
                  expression: "lyricOption",
                },
              }),
              s("q-toggle", {
                attrs: { label: t.sortInDesc ? "降序" : "升序" },
                model: {
                  value: t.sortInDesc,
                  callback: function (e) {
                    t.sortInDesc = e;
                  },
                  expression: "sortInDesc",
                },
              }),
              s("q-btn-toggle", {
                staticClass: "col-auto",
                staticStyle: { width: "85px" },
                attrs: {
                  dense: "",
                  spread: "",
                  rounded: "",
                  "toggle-color": "primary",
                  color: "white",
                  "text-color": "primary",
                  options: [
                    { icon: "apps", value: !1 },
                    { icon: "list", value: !0 },
                  ],
                },
                model: {
                  value: t.listMode,
                  callback: function (e) {
                    t.listMode = e;
                  },
                  expression: "listMode",
                },
              }),
              t.$q.screen.width > 700 && t.listMode
                ? s("q-btn-toggle", {
                    staticClass: "col-auto",
                    staticStyle: { width: "85px" },
                    attrs: {
                      dense: "",
                      spread: "",
                      rounded: "",
                      "toggle-color": "primary",
                      color: "white",
                      "text-color": "primary",
                      options: [
                        { icon: "label", value: !0 },
                        { icon: "label_off", value: !1 },
                      ],
                    },
                    model: {
                      value: t.showLabel,
                      callback: function (e) {
                        t.showLabel = e;
                      },
                      expression: "showLabel",
                    },
                  })
                : t._e(),
              t.$q.screen.width > 700 && !t.listMode
                ? s("q-btn-toggle", {
                    staticClass: "col-auto",
                    staticStyle: { width: "85px" },
                    attrs: {
                      dense: "",
                      spread: "",
                      rounded: "",
                      disable: t.$q.screen.width < 1120,
                      "toggle-color": "primary",
                      color: "white",
                      "text-color": "primary",
                      options: [
                        { icon: "zoom_in", value: !0 },
                        { icon: "zoom_out", value: !1 },
                      ],
                    },
                    model: {
                      value: t.detailMode,
                      callback: function (e) {
                        t.detailMode = e;
                      },
                      expression: "detailMode",
                    },
                  })
                : t._e(),
            ],
            1,
          ),
          s(
            "div",
            {
              class: "row justify-center " + (t.listMode ? "list" : "q-mx-md"),
            },
            [
              s(
                "q-infinite-scroll",
                {
                  ref: "infiniteScroller",
                  staticClass: "col",
                  attrs: {
                    offset: 250,
                    disable:
                      t.disableInfiniteScroller ||
                      t.workListMode === t.WorkListMode.PAGINATION,
                  },
                  on: { load: t.onLoad },
                  scopedSlots: t._u([
                    {
                      key: "loading",
                      fn: function () {
                        return [
                          s(
                            "div",
                            { staticClass: "row justify-center q-my-md" },
                            [
                              s("q-spinner-dots", {
                                attrs: { color: "primary", size: "40px" },
                              }),
                            ],
                            1,
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                },
                [
                  t.workListMode === t.WorkListMode.PAGINATION
                    ? s(
                        "div",
                        { staticClass: "row justify-center q-py-lg" },
                        [
                          s("Pagination", {
                            attrs: {
                              value: t.isLoading
                                ? t.pagination.currentPage + 1
                                : t.pagination.currentPage,
                              max: Math.ceil(
                                t.pagination.totalCount / t.pagination.pageSize,
                              ),
                            },
                            on: { goto: t.gotoPage },
                          }),
                        ],
                        1,
                      )
                    : t._e(),
                  t.workListMode === t.WorkListMode.PAGINATION && t.isLoading
                    ? s(
                        "div",
                        { staticClass: "row justify-center q-py-lg" },
                        [
                          s("q-spinner-dots", {
                            attrs: { color: "primary", size: "40px" },
                          }),
                        ],
                        1,
                      )
                    : t._e(),
                  t.listMode
                    ? s(
                        "q-list",
                        {
                          staticClass: "shadow-2",
                          attrs: { bordered: "", separator: "" },
                        },
                        t._l(t.works, function (e) {
                          return s("WorkListItem", {
                            key: e.id,
                            attrs: {
                              metadata: e,
                              showLabel: t.showLabel && t.$q.screen.width > 700,
                            },
                          });
                        }),
                        1,
                      )
                    : t.oldWorkCardUIStyle
                      ? s(
                          "div",
                          {
                            staticClass:
                              "row q-col-gutter-x-md q-col-gutter-y-lg",
                          },
                          t._l(t.works, function (e) {
                            return s(
                              "div",
                              {
                                key: e.id,
                                staticClass: "col-xs-12 col-sm-6 col-md-4",
                                class: t.detailMode
                                  ? "col-lg-3 col-xl-2"
                                  : "col-lg-2 col-xl-2",
                              },
                              [
                                s("OldWorkCard", {
                                  staticClass: "fit",
                                  attrs: {
                                    metadata: e,
                                    thumbnailMode: !t.detailMode,
                                  },
                                }),
                              ],
                              1,
                            );
                          }),
                          0,
                        )
                      : t.$q.platform.is.android && t.$q.platform.has.touch
                        ? s(
                            "div",
                            {
                              staticClass:
                                "row q-col-gutter-x-md q-col-gutter-y-lg",
                            },
                            t._l(t.works, function (e) {
                              return s(
                                "div",
                                {
                                  key: e.id,
                                  staticClass: "col-xs-12 col-sm-6 col-md-4",
                                  class: t.detailMode
                                    ? "col-lg-3 col-xl-2"
                                    : "col-lg-2 col-xl-2",
                                  style: {
                                    "--sim-hover-work-card":
                                      e.id === t.touchedWorkId ? "1" : "0",
                                  },
                                  on: {
                                    touchstart: function () {
                                      return t.onWorkCardTouch(e.id);
                                    },
                                  },
                                },
                                [
                                  s("WorkCard", {
                                    staticClass: "fit",
                                    attrs: {
                                      metadata: e,
                                      thumbnailMode: !t.detailMode,
                                    },
                                  }),
                                ],
                                1,
                              );
                            }),
                            0,
                          )
                        : s(
                            "div",
                            {
                              staticClass:
                                "row q-col-gutter-x-md q-col-gutter-y-lg",
                            },
                            t._l(t.works, function (e) {
                              return s(
                                "div",
                                {
                                  key: e.id,
                                  staticClass: "col-xs-12 col-sm-6 col-md-4",
                                  class: t.detailMode
                                    ? "col-lg-3 col-xl-2"
                                    : "col-lg-2 col-xl-2",
                                  staticStyle: { "--sim-hover-work-card": "0" },
                                },
                                [
                                  s("WorkCard", {
                                    staticClass: "fit",
                                    attrs: {
                                      metadata: e,
                                      thumbnailMode: !t.detailMode,
                                    },
                                  }),
                                ],
                                1,
                              );
                            }),
                            0,
                          ),
                  t.workListMode === t.WorkListMode.PAGINATION &&
                  !t.isLoading &&
                  t.works.length > 4
                    ? s(
                        "div",
                        { staticClass: "row justify-center q-py-lg" },
                        [
                          s("Pagination", {
                            attrs: {
                              value: t.isLoading
                                ? t.pagination.currentPage + 1
                                : t.pagination.currentPage,
                              max: Math.ceil(
                                t.pagination.totalCount / t.pagination.pageSize,
                              ),
                            },
                            on: { goto: t.gotoPage },
                          }),
                        ],
                        1,
                      )
                    : t._e(),
                ],
                1,
              ),
            ],
            1,
          ),
        ],
        1,
      );
    },
    Js = [],
    Zs = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-card",
        { staticClass: "card hover-show" },
        [
          s(
            "router-link",
            { attrs: { to: t.workRoute(t.metadata) } },
            [
              s("CoverSFW", {
                attrs: {
	                  workid: t.metadata.id,
	                  primary_work_id: t.metadata.primary_work_id,
	                  secondary_work_id: t.metadata.secondary_work_id,
	                  nsfw: !1,
                  release: t.metadata.release,
                  lyric_status: t.metadata.lyric_status,
                  tags: t.metadata.tags,
                },
              }),
            ],
            1,
          ),
          s("q-separator"),
          t.thumbnailMode
            ? t._e()
            : s("div", [
                s(
                  "div",
                  {
                    staticClass:
                      "q-mx-sm text-h6 text-weight-regular ellipsis-2-lines",
                  },
                  [
                    s(
                      "router-link",
                      {
                        staticClass: "text-primary",
                        attrs: { to: t.workRoute(t.metadata) },
                      },
                      [
                        t._v(
                          "\n        " + t._s(t.metadata.title) + "\n      ",
                        ),
                      ],
                    ),
                  ],
                  1,
                ),
                s(
                  "div",
                  {
                    staticClass:
                      "q-ml-sm q-mt-sm q-mb-xs text-subtitle1 text-weight-regular ellipsis",
                  },
                  [
                    s(
                      "router-link",
                      {
                        staticClass: "text-grey",
                        attrs: {
                          to: "/works?circleId=" + t.metadata.circle.id,
                        },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(t.metadata.circle.name) +
                            "\n      ",
                        ),
                      ],
                    ),
                  ],
                  1,
                ),
                s(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.metadata.title,
                        expression: "metadata.title",
                      },
                    ],
                    staticClass: "row items-center",
                  },
                  [
                    s(
                      "div",
                      { staticClass: "col-auto q-ml-sm" },
                      [
                        s("q-rating", {
                          attrs: {
                            size: "sm",
                            color: t.userMarked ? "blue" : "amber",
                            icon: "star_border",
                            "icon-selected": "star",
                            "icon-half": "star_half",
                          },
                          model: {
                            value: t.rating,
                            callback: function (e) {
                              t.rating = e;
                            },
                            expression: "rating",
                          },
                        }),
                        t.metadata.rate_count_detail
                          ? s(
                              "q-tooltip",
                              { attrs: { "content-class": "text-subtitle1" } },
                              [
                                s("div", [
                                  t._v(
                                    "平均: " +
                                      t._s(t.metadata.rate_average_2dp),
                                  ),
                                ]),
                                t._l(t.sortedRatings, function (e, a) {
                                  return s(
                                    "div",
                                    { key: a, staticClass: "row items-center" },
                                    [
                                      s("div", { staticClass: "col" }, [
                                        t._v(t._s(e.review_point) + "星"),
                                      ]),
                                      s("q-linear-progress", {
                                        staticClass: "col-auto",
                                        staticStyle: {
                                          height: "15px",
                                          width: "100px",
                                        },
                                        attrs: {
                                          value: e.ratio / 100,
                                          color: "amber",
                                          "track-color": "white",
                                        },
                                      }),
                                      s("div", { staticClass: "col q-mx-sm" }, [
                                        t._v("(" + t._s(e.count) + ")"),
                                      ]),
                                    ],
                                    1,
                                  );
                                }),
                              ],
                              2,
                            )
                          : t._e(),
                      ],
                      1,
                    ),
                    s("div", { staticClass: "col-auto" }, [
                      s(
                        "span",
                        {
                          staticClass: "text-weight-medium text-body1 text-red",
                        },
                        [t._v(t._s(t.metadata.rate_average_2dp))],
                      ),
                      s("span", { staticClass: "text-grey" }, [
                        t._v(" (" + t._s(t.metadata.rate_count) + ")"),
                      ]),
                    ]),
                    s(
                      "div",
                      { staticClass: "col-auto q-px-sm" },
                      [
                        s("q-icon", { attrs: { name: "chat", size: "xs" } }),
                        s("span", { staticClass: "text-grey" }, [
                          t._v(" (" + t._s(t.metadata.review_count) + ")"),
                        ]),
                      ],
                      1,
                    ),
                    s(
                      "div",
                      { staticClass: "col-auto" },
                      [
                        s("q-icon", { attrs: { name: "launch", size: "xs" } }),
                        s(
                          "a",
                          {
                            staticClass: "text-blue",
	                          attrs: {
	                            href: t.dlsiteUrl,
                              rel: "noreferrer noopener",
                              target: "_blank",
                            },
                          },
                          [t._v("DLsite")],
                        ),
                      ],
                      1,
                    ),
                  ],
                ),
                s(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.metadata.title,
                        expression: "metadata.title",
                      },
                    ],
                    staticClass: "row items-center",
                  },
                  [
                    s(
                      "span",
                      {
                        staticClass:
                          "q-ml-sm text-weight-medium text-h6 text-red",
                      },
                      [
                        t._v(
                          "\n        " + t._s(t.metadata.price) + "¥\n      ",
                        ),
                      ],
                    ),
                    s("q-chip", { attrs: { size: "sm", icon: "sell" } }, [
                      t._v(t._s(t.metadata.dl_count)),
                    ]),
                    t.metadata.nsfw
                      ? t._e()
                      : s(
                          "q-chip",
                          {
                            staticClass: "q-mx-sm",
                            staticStyle: {
                              background: "#e6f7d6",
                              color: "#56842a",
                            },
                            attrs: { dense: "" },
                          },
                          [t._v("全年龄")],
                        ),
                    t.metadata.relatedWorks.length > 1
                      ? s(
                          "q-chip",
                          { attrs: { size: "sm", icon: "translate" } },
                          [t._v("多语种")],
                        )
                      : t._e(),
                    t.totalDuration
                      ? s(
                          "q-chip",
                          { attrs: { size: "sm", icon: "schedule" } },
                          [
                            t._v(
                              t._s(
                                t.shortHumanReadableSeconds(t.totalDuration),
                              ),
                            ),
                          ],
                        )
                      : t._e(),
                  ],
                  1,
                ),
                s(
                  "div",
                  {
                    staticClass: "q-mx-xs q-my-sm",
                    class: { "horize-scroll-va-list": t.$q.platform.has.touch },
                  },
                  t._l(t.metadata.vas, function (e, a) {
                    return s(
                      "router-link",
                      { key: a, attrs: { to: "/works?vaId=" + e.id } },
                      [
                        s(
                          "q-chip",
                          {
                            staticClass: "shadow-2",
                            attrs: {
                              square: "",
                              size: "md",
                              color: "teal",
                              "text-color": "white",
                            },
                          },
                          [t._v("\n          " + t._s(e.name) + "\n        ")],
                        ),
                      ],
                      1,
                    );
                  }),
                  1,
                ),
              ]),
        ],
        1,
      );
    },
    Xs = [],
    ta = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-img",
        {
          staticStyle: { "max-width": "560px" },
          attrs: {
            src: t.coverUrl,
            ratio: 4 / 3,
            "img-class": t.imgClass,
            transition: "fade",
          },
          on: {
            mouseover: function (e) {
              return t.toggleBlurFlag();
            },
            mouseout: function (e) {
              return t.toggleBlurFlag();
            },
          },
        },
        [
          s(
            "div",
            {
              staticClass: "absolute-top-left transparent",
              staticStyle: { padding: "0" },
            },
            [
              s(
                "q-chip",
                {
                  staticClass: "q-ma-sm shadow-3",
                  attrs: {
                    dense: "",
                    square: "",
                    color: "brown",
                    "text-color": "white",
                  },
                },
                [t._v("\n      " + t._s("" + t.rjcode) + "\n    ")],
              ),
            ],
            1,
          ),
          t.secondaryRjcode
            ? s(
                "div",
                {
                  staticClass: "absolute-bottom-left transparent",
                  staticStyle: { padding: "0px" },
                },
                [
                  s(
                    "q-chip",
                    {
                      staticClass: "q-ma-sm shadow-3",
                      attrs: {
                        dense: "",
                        square: "",
                        color: "brown",
                        "text-color": "white",
                      },
                    },
                    [
                      t._v(
                        "\n      " + t._s("" + t.secondaryRjcode) + "\n    ",
                      ),
                    ],
                  ),
                ],
                1,
              )
            : t._e(),
          "" !== t.release
            ? s(
                "div",
                {
                  staticClass: "absolute-bottom-right transparent",
                  staticStyle: { padding: "0px" },
                },
                [
                  s(
                    "q-chip",
                    {
                      staticClass: "q-ma-sm shadow-3",
                      attrs: {
                        dense: "",
                        square: "",
                        color: "blue-grey",
                        "text-color": "white",
                      },
                    },
                    [t._v("\n      " + t._s(t.release) + "\n    ")],
                  ),
                ],
                1,
              )
            : t._e(),
          t.lyricList.length > 0
            ? s(
                "div",
                {
                  staticClass: "absolute-top-right transparent",
                  staticStyle: { padding: "0px" },
                },
                t._l(t.lyricList, function (e) {
                  return s(
                    "q-chip",
                    {
                      key: e,
                      staticClass: "q-ma-sm shadow-3",
                      attrs: {
                        dense: "",
                        square: "",
                        color: "green-7",
                        "text-color": "white",
                      },
                    },
                    [
                      t._v(
                        "\n      " +
                          t._s({ ai: "AI歌词", local: "本地歌词" }[e]) +
                          "\n    ",
                      ),
                    ],
                  );
                }),
                1,
              )
            : t._e(),
          s(
            "div",
            {
              staticClass: "q-pa-none q-ma-sm absolute-bottom-left tags-panel",
            },
            t._l(t.tags, function (e) {
              return s(
                "router-link",
                { key: e.id, attrs: { to: "/works?tagId=" + e.id } },
                [
                  s(
                    "q-chip",
                    {
                      staticClass: "shadow-3",
                      attrs: { dense: "", square: "" },
                    },
                    [t._v("\n        " + t._s(e.name) + "\n      ")],
                  ),
                ],
                1,
              );
            }),
            1,
          ),
          t._t("cover"),
        ],
        2,
      );
    },
    ea = [],
    sa = {
      name: "CoverSFW",
	      props: {
	        workid: { type: Number, required: !0 },
	        primary_work_id: { type: Number, default: 0 },
	        secondary_work_id: { type: Number, default: 0 },
	        nsfw: { type: Boolean, default: !0 },
        release: { required: !0 },
        lyric_status: { type: String, require: !0 },
        tags: {
          type: Array,
          require: !1,
          default() {
            return [];
          },
        },
      },
      data() {
        return { blurFlag: !0 };
      },
      computed: {
        coverUrl() {
          const t = this.$q.localStorage.getItem("jwt-token") || "";
          return this.workid ? `/asmr-site/api/cover/${this.workid}?token=${t}` : "";
        },
	        rjcode() {
	          return T(this.primary_work_id || this.workid);
	        },
	        secondaryRjcode() {
	          return this.secondary_work_id ? T(this.secondary_work_id) : "";
	        },
        imgClass() {
          return this.$q.platform.is.mobile
            ? ""
            : this.nsfw && this.blurFlag
              ? "blur-image"
              : "";
        },
        lyricList() {
          return this.lyric_status ? this.lyric_status.split("_") : [];
        },
      },
      methods: {
        toggleBlurFlag() {
          this.blurFlag = !this.blurFlag;
        },
      },
    },
    aa = sa,
    ia = (s("b745"), Object(g["a"])(aa, ta, ea, !1, null, "4953bae4", null)),
    ra = ia.exports;
  Bt()(ia, "components", { QImg: Ut["a"], QChip: Fe["a"] });
  var oa = {
      name: "WorkCard",
      mixins: [pe],
      components: { CoverSFW: ra },
      props: {
        metadata: { type: Object, required: !0 },
        thumbnailMode: { type: Boolean, default: !1 },
      },
      data() {
        return { rating: 0, userMarked: !1 };
      },
      computed: {
        sortedRatings: function () {
          function t(t, e) {
            return t.review_point > e.review_point ? -1 : 1;
          }
          return this.metadata.rate_count_detail.slice().sort(t);
        },
	        dlsiteCode() {
	          return T(this.metadata.primary_work_id || this.metadata.id);
	        },
	        secondaryDlsiteCode() {
	          return this.metadata.secondary_work_id
	            ? T(this.metadata.secondary_work_id)
	            : "";
	        },
	        dlsiteUrl() {
	          const t =
	            "https://www.dlsite.com/home/work/=/product_id/" +
	            this.dlsiteCode +
	            ".html";
	          return this.secondaryDlsiteCode
	            ? t + "/?translation=" + this.secondaryDlsiteCode
	            : t;
	        },
        totalDuration() {
          return this.metadata.memo && this.metadata.memo.totalDuration
            ? this.metadata.memo.totalDuration
            : null;
        },
      },
      mounted() {
        this.metadata.userRating
          ? ((this.userMarked = !0), (this.rating = this.metadata.userRating))
          : ((this.userMarked = !1),
            (this.rating = this.metadata.rate_average_2dp || 0));
      },
      watch: {
        rating(t, e) {
          if (e) {
            const e = {
              user_name: this.$store.state.User.name,
              work_id: this.metadata.id,
              rating: t,
            };
            ((this.userMarked = !0), this.submitRating(e));
          }
        },
      },
      methods: {
        shortHumanReadableSeconds: j,
        submitRating(t) {
          this.$axios
            .put("/asmr-site/api/review", t)
            .then((t) => {
              this.showSuccNotif(t.data.message);
            })
            .catch((t) => {
              t.response
                ? this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t);
            });
        },
      },
    },
    na = oa,
    la = (s("bcf2"), s("daf4")),
    ca = s("6b1d"),
    da = Object(g["a"])(na, Zs, Xs, !1, null, "1e17b4b8", null),
    ua = da.exports;
  Bt()(da, "components", {
    QCard: Dt["a"],
    QSeparator: Xe["a"],
    QRating: la["a"],
    QTooltip: Ke["a"],
    QLinearProgress: ca["a"],
    QIcon: Qe["a"],
    QChip: Fe["a"],
  });
  var ha = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-item",
        {
          staticStyle: { padding: "5px" },
          attrs: { clickable: "", to: t.workRoute(t.metadata) },
        },
        [
          s(
            "q-item-section",
            {
              staticStyle: { padding: "0px 5px 0px 0px" },
              attrs: { avatar: "" },
            },
            [
              s(
                "router-link",
                { attrs: { to: t.workRoute(t.metadata) } },
                [
                  s("q-img", {
                    staticStyle: { height: "60px", width: "60px" },
                    attrs: { transition: "fade", src: t.samCoverUrl },
                  }),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-item-section",
            [
              s(
                "q-item-label",
                { staticClass: "text", attrs: { lines: "2" } },
                [
                  s(
                    "router-link",
                    {
                      staticClass: "text-secondary",
                      attrs: { to: t.workRoute(t.metadata) },
                    },
                    [t._v("\n        " + t._s(t.metadata.title) + "\n      ")],
                  ),
                ],
                1,
              ),
              s("q-item-label", [
                s(
                  "div",
                  { staticClass: "row q-gutter-x-sm q-gutter-y-xs" },
                  [
                    s(
                      "router-link",
                      {
                        staticClass: "col-auto text-grey",
                        attrs: {
                          to: "/works?circleId=" + t.metadata.circle.id,
                        },
                      },
                      [
                        t._v(
                          "\n          " +
                            t._s(t.metadata.circle.name) +
                            "\n        ",
                        ),
                      ],
                    ),
                    s("span", { staticClass: "col-auto" }, [t._v("/")]),
                    t._l(t.metadata.vas, function (e, a) {
                      return s(
                        "router-link",
                        {
                          key: a,
                          staticClass: "col-auto text-primary",
                          attrs: { to: "/works?vaId=" + e.id },
                        },
                        [t._v("\n          " + t._s(e.name) + "\n        ")],
                      );
                    }),
                  ],
                  2,
                ),
              ]),
              t.showLabel && t.$q.screen.width > 700
                ? s("q-item-label", [
                    s(
                      "div",
                      { staticClass: "row q-gutter-x-sm q-gutter-y-xs" },
                      t._l(t.metadata.tags, function (e, a) {
                        return s(
                          "router-link",
                          {
                            key: a,
                            staticClass: "col-auto text-grey",
                            attrs: { to: "/works?tagId=" + e.id },
                          },
                          [t._v("\n          " + t._s(e.name) + "\n        ")],
                        );
                      }),
                      1,
                    ),
                  ])
                : t._e(),
            ],
            1,
          ),
        ],
        1,
      );
    },
    ma = [],
    pa = {
      name: "WorkListItem",
      mixins: [pe],
      props: {
        metadata: { type: Object, required: !0 },
        showLabel: { type: Boolean, default: !0 },
      },
      computed: {
        samCoverUrl() {
          const t = this.$q.localStorage.getItem("jwt-token") || "";
          return this.metadata.id
            ? `/asmr-site/api/cover/${this.metadata.id}?type=sam&token=${t}`
            : "";
        },
      },
    },
    ga = pa,
    fa = Object(g["a"])(ga, ha, ma, !1, null, null, null),
    va = fa.exports;
  Bt()(fa, "components", {
    QItem: Ft["a"],
    QItemSection: Qt["a"],
    QImg: Ut["a"],
    QItemLabel: Wt["a"],
  });
  var ya = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        [
          s(
            "div",
            { staticClass: "row justify-between q-mt-lg q-ml-md" },
            [
              s("div", { staticClass: "col text-h5 text-weight-regular" }, [
                t._v("最近播放"),
              ]),
              s("q-btn", {
                attrs: { flat: "", icon: "navigate_next" },
                on: {
                  click: function (e) {
                    return t.$router.push("/favourites/histroy");
                  },
                },
              }),
            ],
            1,
          ),
          s("q-virtual-scroll", {
            ref: "scroll",
            staticClass: "q-px-sm",
            class: { "scroll-style-change": !t.$q.platform.has.touch },
            attrs: { items: t.works, "virtual-scroll-horizontal": "" },
            on: {
              "virtual-scroll": t.onVirtualScroll,
              wheel: function (e) {
                return (
                  e.stopPropagation(),
                  e.preventDefault(),
                  t.onMouseWheel(e)
                );
              },
            },
            scopedSlots: t._u([
              {
                key: "default",
                fn: function (e) {
                  var a = e.item;
                  return [
                    s(
                      "div",
                      {
                        staticClass: "q-pa-sm",
                        staticStyle: { width: "500px", "max-width": "80vw" },
                        on: {
                          click: function (e) {
                            return (
                              e.stopPropagation(),
                              e.preventDefault(),
                              t.resumeThisHistroy(a)
                            );
                          },
                        },
                      },
                      [
                        a.isCustomPlaylist
                          ? s(
                              "div",
                              {
                                staticClass:
                                  "card q-mx-sm shadow-4 custom-playlist-recent-card",
                              },
                              [
                                s(
                                  "div",
                                  { staticClass: "custom-playlist-recent-grid" },
                                  t._l(t.customPlaylistCoverUrls(a), function (e, a) {
                                    return s("div", {
                                      key: e + "-" + a,
                                      staticClass:
                                        "custom-playlist-recent-cover",
                                      style: {
                                        "background-image": "url(" + e + ")",
                                      },
                                    });
                                  }),
                                ),
                                s(
                                  "div",
                                  {
                                    staticClass:
                                      "custom-playlist-recent-title absolute-center",
                                  },
                                  [t._v("自定义播放列表")],
                                ),
                                s(
                                  "div",
                                  { staticClass: "playInfo absolute-bottom" },
                                  [
                                    s(
                                      "div",
                                      {
                                        staticClass:
                                          "ellipsis-2-lines audioText",
                                      },
                                      [t._v(t._s(t.getWorkHistoryInfo(a)))],
                                    ),
                                    s(
                                      "div",
                                      { staticClass: "ellipsis workText" },
                                      [t._v(t._s(a.title))],
                                    ),
                                  ],
                                ),
                              ],
                            )
                          : s(
                              "CoverSFW",
                              {
                                staticClass: "card q-mx-sm shadow-4",
	                            attrs: {
	                              workid: a.id,
	                              primary_work_id: a.primary_work_id,
	                              secondary_work_id: a.secondary_work_id,
	                              nsfw: !1,
                                  release: "",
                                  lyric_status: a.lyric_status,
                                },
                              },
                              [
                                s("template", { slot: "cover" }, [
                                  s(
                                    "div",
                                    { staticClass: "playInfo absolute-bottom" },
                                    [
                                      s(
                                        "div",
                                        {
                                          staticClass:
                                            "ellipsis-2-lines audioText",
                                        },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(t.getWorkHistoryInfo(a)) +
                                              "\n              ",
                                          ),
                                        ],
                                      ),
                                      s(
                                        "div",
                                        { staticClass: "ellipsis workText" },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(a.title) +
                                              "\n              ",
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                ]),
                              ],
                              2,
                            ),
                      ],
                      1,
                    ),
                  ];
                },
              },
            ]),
          }),
        ],
        1,
      );
    },
    wa = [],
    ba = {
      name: "RecentWorks",
      components: { CoverSFW: ra },
      data() {
        return {
          currentPage: 0,
          pagination: { currentPage: 0, pageSize: 12, totalCount: 0 },
          works: [],
          stopLoad: !1,
          isLoading: !1,
        };
      },
      methods: {
        getCustomPlaylistHistory() {
          const t = this.$q.localStorage.getItem(CUSTOM_AUDIO_PLAYLIST_KEY);
          if (!t || !Array.isArray(t.queue) || !t.queue.length) return null;
          const e = Math.max(
              0,
              Math.min(Number(t.index) || 0, t.queue.length - 1),
            ),
            s = customPlaylistCoverWorkIds(t.queue),
            a = s[0] || queueItemPrimaryWorkId(t.queue[e]);
          return a
            ? {
                id: a,
                primary_work_id: a,
                secondary_work_id: 0,
                title: "自定义播放列表",
                lyric_status: "",
                isCustomPlaylist: !0,
                coverWorkIds: s,
                state: {
                  queue: t.queue,
                  index: e,
                  seconds: Number(t.seconds) || 0,
                },
              }
            : null;
        },
        mergeCustomPlaylistHistory() {
          const t = this.getCustomPlaylistHistory();
          ((this.works = this.works.filter((t) => !t.isCustomPlaylist)),
            t && this.works.unshift(t),
            this.$refs.scroll && this.$refs.scroll.refresh());
        },
        customPlaylistCoverUrls(t) {
          const e = this.$q.localStorage.getItem("jwt-token") || "",
            s = (t.coverWorkIds || []).slice(0, 4);
          return (
            s.length || (t.id && s.push(t.id)),
            s.map((t) => `/asmr-site/api/cover/${t}?type=sam&token=${e}`)
          );
        },
        async getHistory() {
          if (this.stopLoad || this.isLoading) return;
          this.isLoading = !0;
          const t = { page: this.pagination.currentPage + 1, sort: "desc" };
          try {
            const e = await this.$axios.get("/asmr-site/api/histroy", { params: t });
            const s = 1 === t.page ? this.getCustomPlaylistHistory() : null,
              a = s ? [s].concat(e.data.works) : e.data.works,
              i = Object.assign({}, e.data.pagination);
            s && (i.totalCount = Number(i.totalCount || 0) + 1);
            ((this.works = this.works.concat(a)),
              (this.pagination = i),
              this.$refs.scroll.refresh());
          } catch (e) {
            console.warn("load recent work failed: ", e);
          }
          ((this.isLoading = !1),
            this.works.length >= this.pagination.totalCount &&
              (this.stopLoad = !0));
        },
        async onVirtualScroll(t) {
          const e = t.index + 1,
            s = 3;
          s > this.works.length - e && this.getHistory();
        },
        onMouseWheel(t) {
          this.$refs.scroll.$el.scrollLeft += t.deltaX || t.deltaY;
        },
        getWorkHistoryInfo(t) {
          if (t.isCustomPlaylist) return "自定义播放列表";
          const e = t.state,
            s = e.queue[e.index];
          return queueItemDisplayText(s, s.title);
        },
        resumeThisHistroy(t) {
          (this.$store.commit("AudioPlayer/SET_QUEUE", {
            workId: t.id,
            queue: t.state.queue,
            index: t.state.index,
            resetPlaying: !1,
            resumeHistroySeconds: t.state.seconds,
            isCustomPlaylist: !!t.isCustomPlaylist,
            setDefaultQueue: !t.isCustomPlaylist,
          }),
            console.log("resume seconds = " + t.state.seconds));
        },
      },
      mounted() {
        (this.getHistory(),
          window.addEventListener(
            "kikoeru-custom-playlist-updated",
            this.mergeCustomPlaylistHistory,
          ));
      },
      beforeDestroy() {
        window.removeEventListener(
          "kikoeru-custom-playlist-updated",
          this.mergeCustomPlaylistHistory,
        );
      },
    },
    _a = ba,
    qa = (s("7f671"), s("a12b")),
    ka = Object(g["a"])(_a, ya, wa, !1, null, "7c56df43", null),
    Sa = ka.exports;
  Bt()(ka, "components", { QBtn: zt["a"], QVirtualScroll: qa["a"] });
  var Ca = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-card",
        { staticClass: "card" },
        [
          s(
            "router-link",
            { attrs: { to: t.workRoute(t.metadata) } },
            [
              s("CoverSFW", {
	            attrs: {
	              workid: t.metadata.id,
	              primary_work_id: t.metadata.primary_work_id,
	              secondary_work_id: t.metadata.secondary_work_id,
	              nsfw: !1,
                  release: t.metadata.release,
                  lyric_status: t.metadata.lyric_status,
                },
              }),
            ],
            1,
          ),
          s("q-separator"),
          t.thumbnailMode
            ? t._e()
            : s("div", [
                s(
                  "div",
                  {
                    staticClass:
                      "q-mx-sm text-h6 text-weight-regular ellipsis-2-lines",
                  },
                  [
                    s(
                      "router-link",
                      {
                        staticClass: "text-primary",
                        attrs: { to: t.workRoute(t.metadata) },
                      },
                      [
                        t._v(
                          "\n        " + t._s(t.metadata.title) + "\n      ",
                        ),
                      ],
                    ),
                  ],
                  1,
                ),
                s(
                  "div",
                  {
                    staticClass:
                      "q-ml-sm q-mt-sm q-mb-xs text-subtitle1 text-weight-regular ellipsis",
                  },
                  [
                    s(
                      "router-link",
                      {
                        staticClass: "text-grey",
                        attrs: {
                          to: "/works?circleId=" + t.metadata.circle.id,
                        },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(t.metadata.circle.name) +
                            "\n      ",
                        ),
                      ],
                    ),
                  ],
                  1,
                ),
                s(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.metadata.title,
                        expression: "metadata.title",
                      },
                    ],
                    staticClass: "row items-center",
                  },
                  [
                    s(
                      "div",
                      { staticClass: "col-auto q-ml-sm" },
                      [
                        s("q-rating", {
                          attrs: {
                            size: "sm",
                            color: t.userMarked ? "blue" : "amber",
                            icon: "star_border",
                            "icon-selected": "star",
                            "icon-half": "star_half",
                          },
                          model: {
                            value: t.rating,
                            callback: function (e) {
                              t.rating = e;
                            },
                            expression: "rating",
                          },
                        }),
                        t.metadata.rate_count_detail
                          ? s(
                              "q-tooltip",
                              { attrs: { "content-class": "text-subtitle1" } },
                              [
                                s("div", [
                                  t._v(
                                    "平均: " +
                                      t._s(t.metadata.rate_average_2dp),
                                  ),
                                ]),
                                t._l(t.sortedRatings, function (e, a) {
                                  return s(
                                    "div",
                                    { key: a, staticClass: "row items-center" },
                                    [
                                      s("div", { staticClass: "col" }, [
                                        t._v(t._s(e.review_point) + "星"),
                                      ]),
                                      s("q-linear-progress", {
                                        staticClass: "col-auto",
                                        staticStyle: {
                                          height: "15px",
                                          width: "100px",
                                        },
                                        attrs: {
                                          value: e.ratio / 100,
                                          color: "amber",
                                          "track-color": "white",
                                        },
                                      }),
                                      s("div", { staticClass: "col q-mx-sm" }, [
                                        t._v("(" + t._s(e.count) + ")"),
                                      ]),
                                    ],
                                    1,
                                  );
                                }),
                              ],
                              2,
                            )
                          : t._e(),
                      ],
                      1,
                    ),
                    s("div", { staticClass: "col-auto" }, [
                      s(
                        "span",
                        {
                          staticClass: "text-weight-medium text-body1 text-red",
                        },
                        [t._v(t._s(t.metadata.rate_average_2dp))],
                      ),
                      s("span", { staticClass: "text-grey" }, [
                        t._v(" (" + t._s(t.metadata.rate_count) + ")"),
                      ]),
                    ]),
                    s(
                      "div",
                      { staticClass: "col-auto q-px-sm" },
                      [
                        s("q-icon", { attrs: { name: "chat", size: "xs" } }),
                        s("span", { staticClass: "text-grey" }, [
                          t._v(" (" + t._s(t.metadata.review_count) + ")"),
                        ]),
                      ],
                      1,
                    ),
                    s(
                      "div",
                      { staticClass: "col-auto" },
                      [
                        s("q-icon", { attrs: { name: "launch", size: "xs" } }),
                        s(
                          "a",
                          {
                            staticClass: "text-blue",
                            attrs: {
	                              href: t.dlsiteUrl,
                              rel: "noreferrer noopener",
                              target: "_blank",
                            },
                          },
                          [t._v("DLsite")],
                        ),
                      ],
                      1,
                    ),
                  ],
                ),
                s(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.metadata.title,
                        expression: "metadata.title",
                      },
                    ],
                  },
                  [
                    s(
                      "span",
                      {
                        staticClass:
                          "q-mx-sm text-weight-medium text-h6 text-red",
                      },
                      [t._v(t._s(t.metadata.price) + " 日元")],
                    ),
                    s("span", [t._v("售出数: " + t._s(t.metadata.dl_count))]),
                    t.metadata.nsfw
                      ? t._e()
                      : s(
                          "span",
                          {
                            staticClass: "q-mx-sm",
                            staticStyle: {
                              background: "#e6f7d6",
                              color: "#56842a",
                            },
                          },
                          [t._v("全年龄")],
                        ),
                  ],
                ),
                t.showTags
                  ? s(
                      "div",
                      { staticClass: "q-ma-xs" },
                      t._l(t.metadata.tags, function (e, a) {
                        return s(
                          "router-link",
                          { key: a, attrs: { to: "/works?tagId=" + e.id } },
                          [
                            s(
                              "q-chip",
                              {
                                staticClass: "shadow-2",
                                attrs: { size: "md" },
                              },
                              [
                                t._v(
                                  "\n          " + t._s(e.name) + "\n        ",
                                ),
                              ],
                            ),
                          ],
                          1,
                        );
                      }),
                      1,
                    )
                  : t._e(),
                s(
                  "div",
                  { staticClass: "q-mx-xs q-my-sm" },
                  t._l(t.metadata.vas, function (e, a) {
                    return s(
                      "router-link",
                      { key: a, attrs: { to: "/works?vaId=" + e.id } },
                      [
                        s(
                          "q-chip",
                          {
                            staticClass: "shadow-2",
                            attrs: {
                              square: "",
                              size: "md",
                              color: "teal",
                              "text-color": "white",
                              icon: "mic",
                            },
                          },
                          [t._v("\n          " + t._s(e.name) + "\n        ")],
                        ),
                      ],
                      1,
                    );
                  }),
                  1,
                ),
              ]),
        ],
        1,
      );
    },
    xa = [],
    Ta = {
      name: "WorkCard",
      mixins: [pe],
      components: { CoverSFW: ra },
      props: {
        metadata: { type: Object, required: !0 },
        thumbnailMode: { type: Boolean, default: !1 },
      },
      data() {
        return { rating: 0, userMarked: !1, showTags: !0 };
      },
      computed: {
        sortedRatings: function () {
          function t(t, e) {
            return t.review_point > e.review_point ? -1 : 1;
          }
          return this.metadata.rate_count_detail.slice().sort(t);
        },
	        dlsiteCode() {
	          return T(this.metadata.primary_work_id || this.metadata.id);
	        },
	        secondaryDlsiteCode() {
	          return this.metadata.secondary_work_id
	            ? T(this.metadata.secondary_work_id)
	            : "";
	        },
	        dlsiteUrl() {
	          const t =
	            "https://www.dlsite.com/home/work/=/product_id/" +
	            this.dlsiteCode +
	            ".html";
	          return this.secondaryDlsiteCode
	            ? t + "/?translation=" + this.secondaryDlsiteCode
	            : t;
	        },
      },
      mounted() {
        (this.metadata.userRating
          ? ((this.userMarked = !0), (this.rating = this.metadata.userRating))
          : ((this.userMarked = !1),
            (this.rating = this.metadata.rate_average_2dp || 0)),
          (this.metadata &&
            this.metadata.tags &&
            this.metadata.tags.length > 0 &&
            this.metadata.tags[0].name) ||
            (this.showTags = !1));
      },
      watch: {
        rating(t, e) {
          if (e) {
            const e = {
              user_name: this.$store.state.User.name,
              work_id: this.metadata.id,
              rating: t,
            };
            ((this.userMarked = !0), this.submitRating(e));
          }
        },
      },
      methods: {
        submitRating(t) {
          this.$axios
            .put("/asmr-site/api/review", t)
            .then((t) => {
              this.showSuccNotif(t.data.message);
            })
            .catch((t) => {
              t.response
                ? this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t);
            });
        },
      },
    },
    Ia = Ta,
    Ea = (s("4ed7"), Object(g["a"])(Ia, Ca, xa, !1, null, "082ddd7e", null)),
    Pa = Ea.exports;
  Bt()(Ea, "components", {
    QCard: Dt["a"],
    QSeparator: Xe["a"],
    QRating: la["a"],
    QTooltip: Ke["a"],
    QLinearProgress: ca["a"],
    QIcon: Qe["a"],
    QChip: Fe["a"],
  });
  var La = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s("div", [
        s(
          "div",
          { staticClass: "row" },
          [
            s(
              "q-btn",
              {
                staticClass: "q-mx-xs jump-unit",
                attrs: {
                  outline: "",
                  size: "md",
                  padding: "none",
                  icon: "chevron_left",
                  disable: t.value - 1 < t.min,
                },
                on: {
                  click: function (e) {
                    return t.gotoIndex(t.value - 1);
                  },
                },
              },
              [s("q-tooltip", [t._v("上一页")])],
              1,
            ),
            t._l(t.leadingItems, function (e) {
              return s(
                "span",
                { key: e },
                [
                  s(
                    "q-btn",
                    {
                      staticClass: "q-mx-xs jump-unit",
                      attrs: {
                        outline: "",
                        size: "md",
                        padding: "none",
                        disable: null === e,
                      },
                      on: {
                        click: function (s) {
                          return t.gotoIndex(e);
                        },
                      },
                    },
                    [
                      t._v(
                        "\n        " + t._s(null == e ? "..." : e) + "\n      ",
                      ),
                    ],
                  ),
                ],
                1,
              );
            }),
            t._l(t.centerItems, function (e) {
              return s(
                "span",
                { key: e },
                [
                  s(
                    "q-btn",
                    {
                      staticClass: "q-mx-xs jump-unit",
                      attrs: {
                        outline: "",
                        size: "md",
                        padding: "none",
                        color: e == t.value ? "primary" : "",
                        disable: t.value === e,
                      },
                      on: {
                        click: function (s) {
                          return t.gotoIndex(e);
                        },
                      },
                    },
                    [t._v("\n        " + t._s(e) + "\n      ")],
                  ),
                ],
                1,
              );
            }),
            t._l(t.trailingItems, function (e) {
              return s(
                "span",
                { key: e },
                [
                  s(
                    "q-btn",
                    {
                      staticClass: "q-mx-xs jump-unit",
                      attrs: {
                        outline: "",
                        size: "md",
                        padding: "none",
                        disable: null === e,
                      },
                      on: {
                        click: function (s) {
                          return t.gotoIndex(e);
                        },
                      },
                    },
                    [
                      t._v(
                        "\n        " + t._s(null == e ? "..." : e) + "\n      ",
                      ),
                    ],
                  ),
                ],
                1,
              );
            }),
            s(
              "q-btn",
              {
                staticClass: "q-mx-xs jump-unit",
                attrs: {
                  outline: "",
                  size: "md",
                  padding: "none",
                  icon: "chevron_right",
                  disable: t.value + 1 > t.max,
                },
                on: {
                  click: function (e) {
                    return t.gotoIndex(t.value + 1);
                  },
                },
              },
              [s("q-tooltip", [t._v("下一页")])],
              1,
            ),
            s("q-input", {
              staticClass: "super-small",
              attrs: { dense: "", outlined: "", placeholder: "跳转到" },
              on: {
                keyup: function (e) {
                  return !e.type.indexOf("key") &&
                    t._k(e.keyCode, "enter", 13, e.key, "Enter")
                    ? null
                    : t.jumpText(e);
                },
              },
              model: {
                value: t.jump,
                callback: function (e) {
                  t.jump = e;
                },
                expression: "jump",
              },
            }),
          ],
          2,
        ),
      ]);
    },
    Aa = [];
  const $a = 2;
  var Oa = {
      name: "Pagination",
      props: {
        value: { type: Number, required: !0 },
        max: { type: Number, required: !0 },
        min: { type: Number, default: 1 },
      },
      computed: {
        leadingItems() {
          const t = this.value - this.min;
          return t <= $a ? [] : t >= $a + 2 ? [this.min, null] : [this.min];
        },
        centerItems() {
          const t = [];
          for (
            let e = Math.max(this.min, this.value - $a);
            e <= Math.min(this.max, this.value + $a);
            ++e
          )
            t.push(e);
          return t;
        },
        trailingItems() {
          const t = this.max - this.value;
          return t <= $a ? [] : t >= $a + 2 ? [null, this.max] : [this.max];
        },
      },
      data() {
        return { jump: "" };
      },
      methods: {
        gotoNext() {
          this.$emit("goto", this.value + 1);
        },
        gotoIndex(t) {
          this.$emit("goto", Math.max(this.min, Math.min(this.max, t)));
        },
        jumpText() {
          const t = parseInt(this.jump);
          t && this.gotoIndex(t);
        },
      },
    },
    Na = Oa,
    Ma = (s("5eaf"), s("8572")),
    Ra = Object(g["a"])(Na, La, Aa, !1, null, null, null),
    Da = Ra.exports;
  Bt()(Ra, "components", {
    QBtn: zt["a"],
    QTooltip: Ke["a"],
    QInput: We["a"],
    QField: Ma["a"],
  });
  var Fa = {
      name: "Works",
      mixins: [pe],
      components: {
        WorkCard: ua,
        OldWorkCard: Pa,
        WorkListItem: va,
        RecentWorks: Sa,
        Pagination: Da,
      },
      data() {
        const t = {
          WorkListMode: F,
          listMode: !1,
          showLabel: !0,
          detailMode: !0,
          disableInfiniteScroller: !1,
          isLoading: !1,
          requestSeq: 0,
          works: [],
          pageTitle: "",
          searchMetas: [],
          page: 1,
          pagination: { currentPage: 0, pageSize: 12, totalCount: 0 },
          seed: 7,
          sortCategoryOption: "created_at",
          sortCategoryOptions: [
            "release",
            "rating",
            "dl_count",
            "price",
            "rate_average_2dp",
            "review_count",
            "id",
            "created_at",
            "random",
          ],
          nsfwOption: "nsfw_0",
          nsfwOptions: ["nsfw_0", "nsfw_1", "nsfw_2"],
          lyricOption: [],
          sortInDesc: !0,
          touchedWorkId: 0,
          editKeyword: "",
          advanceSearchKeywords: [],
          isAdvanceSearch: !1,
          focusInAdvanceSearch: !1,
          AdvanceSearchCondType: D,
          searchMetaType: D.FUZZY,
          searchMetaOptions: [
            { value: D.FUZZY, label: "自动" },
            { value: D.VA, label: "声优" },
            { value: D.TAG, label: "标签" },
            { value: D.CIRCLE, label: "社团" },
          ],
          candidates: [],
        };
        return (
          localStorage.sortCategoryOption &&
            (t.sortCategoryOption = localStorage.sortCategoryOption),
          localStorage.nsfwOption && (t.nsfwOption = localStorage.nsfwOption),
          localStorage.lyricOption &&
            (t.lyricOption = JSON.parse(localStorage.lyricOption)),
          localStorage.sortInDesc &&
            (t.sortInDesc = "true" === localStorage.sortInDesc),
          localStorage.showLabel &&
            (t.showLabel = "true" === localStorage.showLabel),
          localStorage.listMode &&
            (t.listMode = "true" === localStorage.listMode),
          localStorage.detailMode &&
            (t.detailMode = "true" === localStorage.detailMode),
          localStorage.advanceSearchKeywords &&
            (t.advanceSearchKeywords = JSON.parse(
              localStorage.advanceSearchKeywords || "[]",
            )),
          t
        );
      },
      created() {
        (this.refreshPageTitle(),
          (this.seed = Math.floor(100 * Math.random())),
          (this.reset = Object(Pt["a"])(this.reset, 100, !1)));
      },
      mounted() {
        if (
          (this.checkAdvanceSearchMode(),
          this.polishQueryParam(),
          this.workListMode === F.PAGINATION)
        ) {
          const t = parseInt(this.$route.query.page);
          this.reset(t);
        }
      },
      computed: {
        urlDetect() {
          const t = this.$route.query;
          return t.circleId
            ? `/asmr-site/api/circles/${this.$route.query.circleId}/works`
            : t.tagId
              ? `/asmr-site/api/tags/${this.$route.query.tagId}/works`
              : t.vaId
                ? `/asmr-site/api/vas/${this.$route.query.vaId}/works`
                : t.keyword ||
                    this.isAdvanceSearch ||
                    "/search" == this.$route.path
                  ? "/asmr-site/api/search"
                  : "/asmr-site/api/works";
        },
        advanceSearchBarHint() {
          return this.searchMetaType === D.FUZZY
            ? "" === this.editKeyword
              ? "模糊关键字搜索，可搜索作品名、声优名、标签名、社团名"
              : this.isAdvanceKeywordCode
                ? "检测到番号，回车后将忽略其他条件，直接搜索番号"
                : "按回车或者右侧加号添加，或者点击下方过滤结果的加号直接筛选对应条件"
            : this.searchMetaType === D.VA
              ? "搜索声优，点击下方过滤结果的加号以添加条件，请勿直接回车添加"
              : this.searchMetaType === D.TAG ||
                  this.searchMetaType === D.CIRCLE
                ? "搜索标签，点击下方过滤结果的加号以添加条件，请勿直接回车添加"
                : "";
        },
        lyricOptions() {
          const t = [
            { value: "lyric_local", label: "本地歌词", inactive: !1 },
            { value: "lyric_ai", label: "AI歌词", inactive: !1 },
            { value: "lyric_no", label: "无歌词", inactive: !1 },
          ];
          return t;
        },
        isAdvanceKeywordCode() {
          return /^(RJ|BJ|VJ)?(\d{6}|\d{8})$/i.test(this.editKeyword);
        },
        candidatesMeta() {
          if (this.searchMetaType == D.FUZZY && "" === this.editKeyword)
            return [];
          const t =
              this.searchMetaType == D.FUZZY
                ? this.candidates
                : this.candidates.filter((t) => t.t === this.searchMetaType),
            e = t.filter((t) =>
              t.name.toLowerCase().includes(this.editKeyword.toLowerCase()),
            );
          return e;
        },
        isShowCandidates() {
          return !!this.isAdvanceSearch && !!this.focusInAdvanceSearch;
        },
        ...Object(y["d"])("AudioPlayer", [
          "oldWorkCardUIStyle",
          "enableShowRecent",
          "workListMode",
        ]),
      },
      activated() {
        this.disableInfiniteScroller = !1;
      },
      deactivated() {
        this.disableInfiniteScroller = !0;
      },
      watch: {
        urlDetect(t, e) {
          this.reset();
        },
        sortCategoryOption(t) {
          ((localStorage.sortCategoryOption = t), this.reset());
        },
        nsfwOption(t) {
          ((localStorage.nsfwOption = t), this.reset());
        },
        lyricOption(t) {
          null !== t
            ? t.length > 1 && t.includes("no_lyric")
              ? this.$nextTick(() => {
                  this.lyricOption = ["no_lyric"];
                })
              : ((localStorage.lyricOption = JSON.stringify(t, null, 0)),
                this.reset())
            : this.$nextTick(() => {
                this.lyricOption = [];
              });
        },
        sortInDesc(t) {
          ((localStorage.sortInDesc = t), this.reset());
        },
        showLabel(t) {
          localStorage.showLabel = t;
        },
        listMode(t) {
          localStorage.listMode = t;
        },
        detailMode(t) {
          localStorage.detailMode = t;
        },
        advanceSearchKeywords(t) {
          ((localStorage.advanceSearchKeywords = JSON.stringify(t, null, 0)),
            this.reset());
        },
        "$route.name": {
          handler: function () {
            this.checkAdvanceSearchMode();
          },
          deep: !0,
          immediate: !0,
        },
        "$route.query.keyword"() {
          this.reset();
        },
        "$route.query.page"() {
          if ((this.polishQueryParam(), this.workListMode === F.PAGINATION)) {
            const t = parseInt(this.$route.query.page);
            this.reset(t);
          }
        },
      },
      methods: {
        async onLoad(t, e) {
          const s = await this.requestWorksQueue();
          e(s);
        },
        async requestWorksQueue() {
          this.isLoading = !0;
          const t = {
            page: this.pagination.currentPage + 1 || 1,
            sort: this.sortInDesc ? "desc" : "asc",
            order: this.sortCategoryOption,
            nsfw: parseInt(this.nsfwOption.replace("nsfw_", "")),
            lyric:
              null === this.lyricOption
                ? ""
                : this.lyricOption
                    .map((t) => t.replace("lyric_", ""))
                    .sort()
                    .join("_"),
            seed: this.seed,
            isAdvance: this.isAdvanceSearch ? 1 : 0,
          };
          this.isAdvanceSearch
            ? (t.keyword = JSON.stringify(this.advanceSearchKeywords, null, 0))
            : this.$route.query.keyword &&
              (t.keyword = this.$route.query.keyword);
          const e = ++this.requestSeq;
          try {
            const s = await rrRetryRequest(
                () => this.$axios.get(this.urlDetect, { params: t }),
                { retries: 2, delay: 300 },
              ),
              a = s.data.works;
            return e !== this.requestSeq
              ? !0
              : (this.workListMode === F.PAGINATION
                  ? (this.works = a.concat())
                  : (this.works =
                      1 === t.page ? a.concat() : this.works.concat(a)),
                (this.pagination = s.data.pagination),
                (this.isLoading = !1),
                this.works.length >= this.pagination.totalCount);
          } catch (s) {
            return e !== this.requestSeq
              ? !0
              : (s.response
                  ? 401 !== s.response.status &&
                    this.showErrNotif(
                      s.response.data.error ||
                        `${s.response.status} ${s.response.statusText}`,
                    )
                  : this.showErrNotif(s.message || s),
                (this.isLoading = !1),
                !0);
          }
        },
        refreshPageTitle() {
          if (
            this.$route.query.circleId ||
            this.$route.query.tagId ||
            this.$route.query.vaId
          ) {
            let t = "",
              e = "";
            (this.$route.query.circleId
              ? ((e = "circles"),
                (t = `/asmr-site/api/${e}/${this.$route.query.circleId}`))
              : this.$route.query.tagId
                ? ((e = "tags"), (t = `/asmr-site/api/${e}/${this.$route.query.tagId}`))
                : ((e = "vas"), (t = `/asmr-site/api/${e}/${this.$route.query.vaId}`)),
              this.$axios
                .get(t)
                .then((t) => {
                  const s = t.data.name;
                  let a;
                  switch (e) {
                    case "tags":
                      a = "搜索标签：";
                      break;
                    case "vas":
                      a = "搜索声优：";
                      break;
                    case "circles":
                      a = "社团作品：";
                      break;
                  }
                  ((this.searchMetas = [s]), (this.pageTitle = a));
                })
                .catch((t) => {
                  t.response
                    ? 401 !== t.response.status &&
                      this.showErrNotif(
                        t.response.data.error ||
                          `${t.response.status} ${t.response.statusText}`,
                      )
                    : this.showErrNotif(t.message || t);
                }));
          } else
            this.$route.query.keyword
              ? ((this.pageTitle = "搜索关键字："),
                (this.searchMetas = [this.$route.query.keyword]))
              : this.isAdvanceSearch
                ? (this.pageTitle = "聚合搜索：")
                : ((this.pageTitle = "所有作品"), (this.searchMetas = []));
        },
        async reset(t) {
          if (this.workListMode === F.WATERFALL)
            ((this.seed = Math.floor(100 * Math.random())),
              (this.stopLoad = !0),
              this.refreshPageTitle(),
              (this.pagination = {
                currentPage: 0,
                pageSize: 12,
                totalCount: 0,
              }),
              (this.works = []),
              this.$refs.infiniteScroller.reset(),
              this.$refs.infiniteScroller.poll(),
              this.$refs.infiniteScroller.trigger(),
              this.$refs.infiniteScroller.resume());
          else {
            const e = !t;
            if ((e && (t = 1), !t)) return void console.warn("分页无效：", t);
            ((this.seed = Math.floor(100 * Math.random())),
              (this.stopLoad = !0),
              (this.works = []),
              (this.pagination = {
                currentPage: t - 1,
                pageSize: 12,
                totalCount: e ? 0 : this.pagination.totalCount,
              }),
              await this.requestWorksQueue());
          }
        },
        async gotoPage(t) {
          (await this.$router.push({
            query: { ...this.$route.query, page: t },
          }),
            await this.reset(t));
        },
        polishQueryParam() {
          if (this.workListMode == F.PAGINATION)
            this.$route.query.page ||
              this.$router.replace({
                query: { ...this.$route.query, page: 1 },
              });
          else if (this.$route.query.page) {
            const t = Object.assign({}, this.$route.query);
            (delete t.page, this.$router.replace({ query: t }));
          }
        },
        humanReadableLabel(t) {
          switch (t) {
            case "release":
              return "发售日期";
            case "rating":
              return "我的评价";
            case "dl_count":
              return "售出数量";
            case "price":
              return "售出价格";
            case "rate_average_2dp":
              return "听众评分";
            case "review_count":
              return "评论数量";
            case "id":
              return "作品番号";
            case "created_at":
              return "添加时间";
            case "random":
              return "随机排序";
            case "nsfw_0":
              return "所有分级";
            case "nsfw_1":
              return "全年龄";
            case "nsfw_2":
              return "十八禁";
            default:
              return t;
          }
        },
        onWorkCardTouch(t) {
          ((this.touchedWorkId = t), console.log("touch on work id = ", t));
        },
        async checkAdvanceSearchMode() {
          if (
            ((this.isAdvanceSearch = "advance search" == this.$route.name),
            this.isAdvanceSearch && 0 === this.candidates.length)
          ) {
            let e = [];
            const s = { vas: D.VA, tags: D.TAG, circles: D.CIRCLE };
            for (let a of Object.keys(s))
              try {
                const t = (await this.$axios.get("/asmr-site/api/" + a)).data.slice();
                e = e.concat(
                  t
                    .sort((t, e) => e.count - t.count)
                    .map((t) => ({
                      d: t.id,
                      name: t.name,
                      count: t.count,
                      t: s[a],
                    })),
                );
              } catch (t) {
                console.warn("get meta candidates failed: ", a, t);
              }
            this.candidates = e;
          }
        },
        onAddAdvanceSearchKeyword() {
          const t = this.isAdvanceKeywordCode;
          if (!t && this.searchMetaType !== D.FUZZY)
            return void this.showErrNotif(
              "正在搜索声优、标签、社团，请勿回车或者点击加号，请直接点击下方列出来的可选项",
            );
          const e = this.editKeyword.trim();
          if ("" === e) return void this.showErrNotif("无法添加空白的关键字");
          const s = { t: t ? D.CODE : D.FUZZY, d: e, name: e };
          void 0 ===
          this.advanceSearchKeywords.find((t) => t.t == s.t && t.d == s.d)
            ? (this.advanceSearchKeywords.push(s),
              (this.editKeyword = ""),
              this.reset())
            : this.showErrNotif("关键字重复，添加失败");
        },
        onAddMetaData(t) {
          void 0 ===
          this.advanceSearchKeywords.find((e) => e.t === t.t && e.d === t.d)
            ? this.advanceSearchKeywords.push({ t: t.t, d: t.d, name: t.name })
            : this.showErrNotif("搜索条件重复，添加失败");
        },
        removeAdvanceSearchKeyword(t) {
          this.advanceSearchKeywords.splice(t, 1);
        },
        searchMetaIconName(t) {
          switch (t) {
            case D.FUZZY:
              return "description";
            case D.VA:
              return "mic";
            case D.TAG:
              return "label";
            case D.CIRCLE:
              return "groups";
            case D.CODE:
              return "fingerprint";
            default:
              return "warning";
          }
        },
        enableShowCandidates() {
          this.focusInAdvanceSearch = !0;
        },
        disableShowCandidates() {
          setTimeout(() => {
            this.focusInAdvanceSearch = !1;
          }, 500);
        },
      },
    },
    Qa = Fa,
    Ua = (s("c55b"), s("ddd8")),
    Wa = s("58a8"),
    za = s("6a67"),
    ja = s("ef35"),
    Ba = s("8380"),
    Va = Object(g["a"])(Qa, Ks, Js, !1, null, "2422a41d", null),
    Ha = Va.exports;
  Bt()(Va, "components", {
    QSelect: Ua["a"],
    QInput: We["a"],
    QBtn: zt["a"],
    QBadge: Wa["a"],
    QIcon: Qe["a"],
    QToggle: Se["a"],
    QBtnToggle: za["a"],
    QInfiniteScroll: ja["a"],
    QSpinnerDots: Ba["a"],
    QList: De["a"],
  });
  var Ga = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        [
          s("WorkDetails", {
            attrs: { metadata: t.metadata, tree: t.tree },
            on: {
              reset: function (e) {
                return t.requestData();
              },
              resumeHistroy: t.resumeMetadataPlayHistroy,
              translateCwd: t.translateCwd,
            },
          }),
          s("RelatedWorks", { attrs: { metadata: t.metadata } }),
          s("WorkTree", {
            ref: "workTree",
            attrs: {
              tree: t.tree,
              metadata: t.metadata,
              editable: !1,
              importantTreePathArr: t.importantTreePathArr,
            },
          }),
        ],
        1,
      );
    },
    Ya = [],
    Ka = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        { staticClass: "row" },
        [
          s("CoverSFW", {
            staticClass: "col q-ma-sm row justify-start shadow-4",
            staticStyle: { "border-radius": "8px", overflow: "hidden" },
            attrs: {
              workid: t.metadata.id,
              primary_work_id: t.metadata.primary_work_id,
              secondary_work_id: t.metadata.secondary_work_id,
              nsfw: !1,
              release: t.metadata.release,
              lyric_status: t.metadata.lyric_status,
            },
          }),
          s(
            "div",
            { staticClass: "col-md-6 col-12 q-pa-sm" },
            [
              s("div", { staticClass: "q-px-sm q-py-none" }, [
                s(
                  "div",
                  { staticClass: "text-h6 text-weight-regular text-secondary" },
                  [t._v("\n        " + t._s(t.metadata.title) + "\n      ")],
                ),
                s(
                  "div",
                  { staticClass: "text-subtitle1 text-weight-regular" },
                  [
                    s(
                      "router-link",
                      {
                        staticClass: "text-grey",
                        attrs: {
                          to: "/works?circleId=" + t.metadata.circle.id,
                        },
                      },
                      [
                        t._v(
                          "\n          " +
                            t._s(t.metadata.circle.name) +
                            "\n        ",
                        ),
                      ],
                    ),
                  ],
                  1,
                ),
                s("div", { staticClass: "row items-center q-gutter-xs" }, [
                  s(
                    "div",
                    { staticClass: "col-auto" },
                    [
                      s("q-rating", {
                        attrs: {
                          name: "rating",
                          size: "sm",
                          color: t.userMarked ? "blue" : "amber",
                          icon: "star_border",
                          "icon-selected": "star",
                          "icon-half": "star_half",
                        },
                        on: { input: t.setRating },
                        model: {
                          value: t.rating,
                          callback: function (e) {
                            t.rating = e;
                          },
                          expression: "rating",
                        },
                      }),
                      t.metadata.rate_count_detail
                        ? s(
                            "q-tooltip",
                            { attrs: { "content-class": "text-subtitle1" } },
                            [
                              s("div", [
                                t._v(
                                  "平均: " + t._s(t.metadata.rate_average_2dp),
                                ),
                              ]),
                              t._l(t.sortedRatings, function (e, a) {
                                return s(
                                  "div",
                                  { key: a, staticClass: "row items-center" },
                                  [
                                    s("div", { staticClass: "col" }, [
                                      t._v(" " + t._s(e.review_point) + "星 "),
                                    ]),
                                    s("q-linear-progress", {
                                      staticClass: "col-auto",
                                      staticStyle: {
                                        height: "15px",
                                        width: "100px",
                                      },
                                      attrs: {
                                        value: e.ratio / 100,
                                        color: "amber",
                                        "track-color": "white",
                                      },
                                    }),
                                    s("div", { staticClass: "col q-mx-sm" }, [
                                      t._v(" (" + t._s(e.count) + ") "),
                                    ]),
                                  ],
                                  1,
                                );
                              }),
                            ],
                            2,
                          )
                        : t._e(),
                    ],
                    1,
                  ),
                  s("div", { staticClass: "col-auto" }, [
                    s(
                      "span",
                      { staticClass: "text-weight-medium text-body1 text-red" },
                      [t._v(t._s(t.metadata.rate_average_2dp))],
                    ),
                    s("span", { staticClass: "text-grey" }, [
                      t._v(" (" + t._s(t.metadata.rate_count) + ")"),
                    ]),
                  ]),
                  s(
                    "div",
                    { staticClass: "col-auto q-px-sm" },
                    [
                      s("q-icon", { attrs: { name: "chat", size: "xs" } }),
                      s("span", { staticClass: "text-grey" }, [
                        t._v(" (" + t._s(t.metadata.review_count) + ")"),
                      ]),
                    ],
                    1,
                  ),
                  s(
                    "div",
                    { staticClass: "col-auto" },
                    [
                      s("q-icon", { attrs: { name: "launch", size: "xs" } }),
                      s(
                        "a",
                        {
                          staticClass: "text-blue",
                          attrs: {
	                            href: t.dlsiteUrl,
                            rel: "noreferrer noopener",
                            target: "_blank",
                          },
                        },
                        [t._v("DLsite")],
                      ),
                    ],
                    1,
                  ),
                ]),
              ]),
              s(
                "div",
                { staticClass: "q-pt-sm q-pb-none" },
                [
                  s(
                    "span",
                    {
                      staticClass:
                        "q-mx-sm text-weight-medium text-h6 text-red",
                    },
                    [t._v(t._s(t.metadata.price) + " 日元")],
                  ),
                  s("q-chip", { attrs: { size: "md", icon: "sell" } }, [
                    t._v("售出数: " + t._s(t.metadata.dl_count)),
                  ]),
                  t.totalDuration
                    ? s("q-chip", { attrs: { size: "md", icon: "schedule" } }, [
                        t._v(
                          "总时长: " +
                            t._s(t.humanReadableSeconds(t.totalDuration)),
                        ),
                      ])
                    : t._e(),
                ],
                1,
              ),
              t.showTags
                ? s(
                    "div",
                    { staticClass: "q-px-none q-py-sm" },
                    t._l(t.metadata.tags, function (e, a) {
                      return s(
                        "router-link",
                        { key: a, attrs: { to: "/works?tagId=" + e.id } },
                        [
                          s(
                            "q-chip",
                            { staticClass: "shadow-4", attrs: { size: "md" } },
                            [
                              t._v(
                                "\n          " + t._s(e.name) + "\n        ",
                              ),
                            ],
                          ),
                        ],
                        1,
                      );
                    }),
                    1,
                  )
                : t._e(),
              s(
                "div",
                { staticClass: "q-px-none q-pt-sm q-py-sm" },
                t._l(t.metadata.vas, function (e, a) {
                  return s(
                    "router-link",
                    { key: a, attrs: { to: "/works?vaId=" + e.id } },
                    [
                      s(
                        "q-chip",
                        {
                          staticClass: "shadow-4",
                          attrs: {
                            square: "",
                            size: "md",
                            color: "teal",
                            "text-color": "white",
                            icon: "mic",
                          },
                        },
                        [t._v("\n          " + t._s(e.name) + "\n        ")],
                      ),
                    ],
                    1,
                  );
                }),
                1,
              ),
              t.isAdminUser
                ? s("q-btn", {
                    attrs: {
                      dense: "",
                      color: "cyan q-mt-sm shadow-4 q-mx-xs q-px-sm",
                      label: "修改作品信息",
                    },
                    on: {
                      click: function (e) {
                        t.showEditMetaDialog = !0;
                      },
                    },
                  })
                : t._e(),
              s(
                "q-btn-dropdown",
                {
                  staticClass: "q-mt-sm shadow-4 q-mx-xs q-pl-sm",
                  attrs: { dense: "", color: "cyan", label: "标记进度" },
                },
                [
                  s(
                    "q-list",
                    [
                      s(
                        "q-item",
                        {
                          staticClass: "q-pa-xs",
                          attrs: { clickable: "" },
                          on: {
                            click: function (e) {
                              return t.setProgress("marked");
                            },
                          },
                        },
                        [
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              s("q-avatar", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "marked" === t.progress,
                                    expression: "progress === 'marked'",
                                  },
                                ],
                                attrs: { icon: "headset" },
                              }),
                            ],
                            1,
                          ),
                          s(
                            "q-item-section",
                            [s("q-item-label", [t._v("想听")])],
                            1,
                          ),
                        ],
                        1,
                      ),
                      s(
                        "q-item",
                        {
                          staticClass: "q-pa-xs",
                          attrs: { clickable: "" },
                          on: {
                            click: function (e) {
                              return t.setProgress("listening");
                            },
                          },
                        },
                        [
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              s("q-avatar", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "listening" === t.progress,
                                    expression: "progress === 'listening'",
                                  },
                                ],
                                attrs: { icon: "headset" },
                              }),
                            ],
                            1,
                          ),
                          s(
                            "q-item-section",
                            [s("q-item-label", [t._v("在听")])],
                            1,
                          ),
                        ],
                        1,
                      ),
                      s(
                        "q-item",
                        {
                          staticClass: "q-pa-xs",
                          attrs: { clickable: "" },
                          on: {
                            click: function (e) {
                              return t.setProgress("listened");
                            },
                          },
                        },
                        [
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              s("q-avatar", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "listened" === t.progress,
                                    expression: "progress === 'listened'",
                                  },
                                ],
                                attrs: { icon: "headset" },
                              }),
                            ],
                            1,
                          ),
                          s(
                            "q-item-section",
                            [s("q-item-label", [t._v("听过")])],
                            1,
                          ),
                        ],
                        1,
                      ),
                      s(
                        "q-item",
                        {
                          staticClass: "q-pa-xs",
                          attrs: { clickable: "" },
                          on: {
                            click: function (e) {
                              return t.setProgress("replay");
                            },
                          },
                        },
                        [
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              s("q-avatar", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "replay" === t.progress,
                                    expression: "progress === 'replay'",
                                  },
                                ],
                                attrs: { icon: "headset" },
                              }),
                            ],
                            1,
                          ),
                          s(
                            "q-item-section",
                            [s("q-item-label", [t._v("重听")])],
                            1,
                          ),
                        ],
                        1,
                      ),
                      s(
                        "q-item",
                        {
                          staticClass: "q-pa-xs",
                          attrs: { clickable: "" },
                          on: {
                            click: function (e) {
                              return t.setProgress("postponed");
                            },
                          },
                        },
                        [
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              s("q-avatar", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "postponed" === t.progress,
                                    expression: "progress === 'postponed'",
                                  },
                                ],
                                attrs: { icon: "headset" },
                              }),
                            ],
                            1,
                          ),
                          s(
                            "q-item-section",
                            [s("q-item-label", [t._v("搁置")])],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              s("q-btn", {
                attrs: {
                  dense: "",
                  color: "cyan q-mt-sm shadow-4 q-mx-xs q-px-sm",
                  label: "写评论",
                },
                on: {
                  click: function (e) {
                    t.showReviewDialog = !0;
                  },
                },
              }),
              t.metadata.state && t.playWorkId !== t.metadata.id
                ? s("q-btn", {
                    attrs: {
                      dense: "",
                      color: "cyan q-mt-sm shadow-4 q-mx-xs q-px-sm",
                      label: "播放此作品的历史记录",
                    },
                    on: { click: t.resumeThisHistroy },
                  })
                : t._e(),
              t.metadata.state
                ? s(
                    "q-btn",
                    {
                      attrs: {
                        dense: "",
                        color: "cyan q-mt-sm shadow-4 q-mx-xs q-px-sm",
                        label: "删除播放记录",
                      },
                      on: { click: t.clearThisHistroy },
                    },
                    [
                      s("q-tooltip", [
                        t._v(
                          "当历史记录中有已被删除的音频文件，可能会无法正确播放文件，可通过此按钮解决",
                        ),
                      ]),
                    ],
                    1,
                  )
                : t._e(),
              t.isAdminUser
                ? s(
                "q-btn",
                {
                  attrs: {
                    dense: "",
                    color: "cyan q-mt-sm shadow-4 q-mx-xs q-px-sm",
                    label: "翻译当前目录音频",
                  },
                  on: {
                    click: function (e) {
                      return t.$emit("translateCwd");
                    },
                  },
                },
                [s("q-tooltip", [t._v("不包括递归的子目录音频")])],
                1,
              )
                : t._e(),
              t.isAdminUser
                ? s(
                "q-btn-dropdown",
                {
                  attrs: {
                    dense: "",
                    color: "cyan q-mt-sm shadow-4 q-mx-xs q-px-sm",
                    label: "更多",
                  },
                },
                [
                  s(
                    "q-list",
                    [
                      s(
                        "q-item",
                        {
                          directives: [
                            { name: "close-popup", rawName: "v-close-popup" },
                          ],
                          attrs: { clickable: "" },
                          on: { click: t.scanWorkFile },
                        },
                        [
                          s(
                            "q-item-section",
                            [s("q-item-label", [t._v("扫描本地文件")])],
                            1,
                          ),
                        ],
                        1,
                      ),
                      s(
                        "q-item",
                        {
                          directives: [
                            { name: "close-popup", rawName: "v-close-popup" },
                          ],
                          attrs: { clickable: "" },
                          on: { click: t.recoverOriginCover },
                        },
                        [
                          s(
                            "q-item-section",
                            [s("q-item-label", [t._v("恢复原始作品封面")])],
                            1,
                          ),
                        ],
                        1,
                      ),
                      s(
                        "q-item",
                        {
                          directives: [
                            { name: "close-popup", rawName: "v-close-popup" },
                          ],
                          attrs: { clickable: "" },
                          on: {
                            click: function (e) {
                              return t.fixGBKShiftJISEncodingBug(!1);
                            },
                          },
                        },
                        [
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              s("q-avatar", {
                                attrs: {
                                  icon: "warning",
                                  "text-color": "negative",
                                },
                              }),
                            ],
                            1,
                          ),
                          s(
                            "q-item-section",
                            [
                              s("q-item-label", [
                                t._v("修复此作品下的GBK乱码问题"),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              )
                : t._e(),
              s("q-btn", {
                attrs: {
                  dense: "",
                  loading: t.isDownloadingLyrics,
                  color: "cyan q-mt-sm shadow-4 q-mx-xs q-px-sm",
                  label: "歌词字幕下载",
                  icon: "download",
                },
                on: { click: t.downloadLyricZip },
              }),
              s("q-btn", {
                attrs: {
                  dense: "",
                  color: "teal q-mt-sm shadow-4 q-mx-xs q-px-sm",
                  label: "下载",
                  icon: "file_download",
                },
                on: { click: t.openDownloadDialog },
              }),
              s("WorkDownloadDialog", {
                attrs: {
                  value: t.showDownloadDialog,
                  metadata: t.metadata,
                  tracks: t.tree,
                },
                on: {
                  input: function (e) {
                    t.showDownloadDialog = e;
                  },
                },
              }),
              t.showReviewDialog
                ? s("WriteReview", {
                    attrs: { workid: t.metadata.id, metadata: t.metadata },
                    on: { closed: t.processReview },
                  })
                : t._e(),
              s(
                "q-dialog",
                {
                  model: {
                    value: t.showEditMetaDialog,
                    callback: function (e) {
                      t.showEditMetaDialog = e;
                    },
                    expression: "showEditMetaDialog",
                  },
                },
                [
                  s("EditMeta", {
                    attrs: { workid: t.metadata.id, metadata: t.metadata },
                  }),
                ],
                1,
              ),
            ],
            1,
          ),
        ],
        1,
      );
    },
    Ja = [],
    Za = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        [
          s(
            "q-dialog",
            {
              on: { hide: t.closeDialog },
              model: {
                value: t.showReviewDialog,
                callback: function (e) {
                  t.showReviewDialog = e;
                },
                expression: "showReviewDialog",
              },
            },
            [
              s(
                "q-card",
                [
                  s("q-card-section", { staticClass: "q-pb-sm" }, [
                    s("div", { staticClass: "text-body1" }, [t._v("我的评论")]),
                  ]),
                  s(
                    "q-card-section",
                    { staticClass: "q-pt-none" },
                    [
                      s("q-rating", {
                        staticClass: "col-auto",
                        attrs: {
                          size: "sm",
                          color: "blue",
                          icon: "star_border",
                          "icon-selected": "star",
                          "icon-half": "star_half",
                        },
                        model: {
                          value: t.rating,
                          callback: function (e) {
                            t.rating = e;
                          },
                          expression: "rating",
                        },
                      }),
                      s("q-btn-toggle", {
                        class: t.$q.screen.lt.sm
                          ? "my-custom-toggle q-mx-none q-mt-sm"
                          : "my-custom-toggle q-mx-md",
                        attrs: {
                          "no-caps": "",
                          rounded: "",
                          unelevated: "",
                          padding: t.$q.screen.width < 400 ? "sm" : "",
                          "toggle-color": "primary",
                          color: "white",
                          "text-color": "primary",
                          options: [
                            { label: "想听", value: "marked" },
                            { label: "在听", value: "listening" },
                            { label: "听过", value: "listened" },
                            { label: "重听", value: "replay" },
                            { label: "搁置", value: "postponed" },
                          ],
                        },
                        model: {
                          value: t.progress,
                          callback: function (e) {
                            t.progress = e;
                          },
                          expression: "progress",
                        },
                      }),
                    ],
                    1,
                  ),
                  s("q-card-section", { staticClass: "q-pt-none" }, [
                    s(
                      "div",
                      { staticStyle: { "min-width": "300px" } },
                      [
                        s("q-input", {
                          attrs: { filled: "", type: "textarea" },
                          model: {
                            value: t.reviewText,
                            callback: function (e) {
                              t.reviewText = e;
                            },
                            expression: "reviewText",
                          },
                        }),
                      ],
                      1,
                    ),
                  ]),
                  s(
                    "div",
                    { staticClass: "row justify-between" },
                    [
                      s(
                        "q-card-actions",
                        { staticClass: "text-red" },
                        [
                          s("q-btn", {
                            directives: [
                              { name: "close-popup", rawName: "v-close-popup" },
                            ],
                            attrs: { flat: "", label: "删除标记" },
                            on: {
                              click: function (e) {
                                t.deleteConfirm = !0;
                              },
                            },
                          }),
                        ],
                        1,
                      ),
                      s(
                        "q-card-actions",
                        {
                          staticClass: "text-primary",
                          attrs: { align: "right" },
                        },
                        [
                          s("q-btn", {
                            directives: [
                              { name: "close-popup", rawName: "v-close-popup" },
                            ],
                            attrs: { flat: "", label: "确定" },
                            on: {
                              click: function (e) {
                                return t.submitReview();
                              },
                            },
                          }),
                          s("q-btn", {
                            directives: [
                              { name: "close-popup", rawName: "v-close-popup" },
                            ],
                            attrs: { flat: "", label: "取消" },
                            on: {
                              click: function (e) {
                                return t.closeDialog();
                              },
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-dialog",
            {
              attrs: {
                persistent: "",
                "transition-show": "scale",
                "transition-hide": "scale",
              },
              model: {
                value: t.deleteConfirm,
                callback: function (e) {
                  t.deleteConfirm = e;
                },
                expression: "deleteConfirm",
              },
            },
            [
              s(
                "q-card",
                {
                  staticClass: "bg-teal text-white",
                  staticStyle: { width: "300px" },
                },
                [
                  s("q-card-section", [
                    s("div", { staticClass: "text-h6" }, [
                      t._v("确定要删除标记吗"),
                    ]),
                  ]),
                  s(
                    "q-card-actions",
                    { attrs: { align: "right" } },
                    [
                      s("q-btn", {
                        directives: [
                          { name: "close-popup", rawName: "v-close-popup" },
                        ],
                        attrs: { label: "确定", color: "negative" },
                        on: {
                          click: function (e) {
                            return t.deleteReview();
                          },
                        },
                      }),
                      s("q-btn", {
                        directives: [
                          { name: "close-popup", rawName: "v-close-popup" },
                        ],
                        attrs: { label: "取消" },
                        on: {
                          click: function (e) {
                            return t.closeDialog();
                          },
                        },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
        ],
        1,
      );
    },
    Xa = [],
    ti = {
      name: "WriteReview",
      mixins: [pe],
      props: {
        workid: { type: Number, required: !0 },
        metadata: { type: Object, default: null },
      },
      data() {
        return {
          showReviewDialog: !0,
          deleteConfirm: !1,
          rating: 0,
          reviewText: "",
          modified: !1,
          progress: "",
        };
      },
      mounted() {
        (this.metadata.userRating && (this.rating = this.metadata.userRating),
          (this.progress = this.metadata.progress),
          (this.reviewText = this.metadata.review_text));
      },
      methods: {
        closeDialog() {
          this.deleteConfirm ||
            (this.modified
              ? this.$emit("closed", !0)
              : this.$emit("closed", !1));
        },
        reviewPayload() {
          const t = {
            user_name: this.$store.state.User.name,
            work_id: this.workid,
            rating: this.rating,
            review_text: this.reviewText,
            progress: this.progress,
          };
          return t;
        },
        submitReview() {
          const t = { starOnly: !1 },
            e = this.reviewPayload();
          this.$axios
            .put("/asmr-site/api/review", e, { params: t })
            .then((t) => {
              ((this.modified = !0), this.showSuccNotif(t.data.message));
            })
            .then(() => this.closeDialog())
            .catch((t) => {
              t.response
                ? this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t);
            });
        },
        deleteReview() {
          const t = { work_id: this.workid };
          this.$axios
            .delete("/asmr-site/api/review", { params: t })
            .then((t) => {
              ((this.modified = !0), this.showSuccNotif(t.data.message));
            })
            .then(() => this.closeDialog())
            .catch((t) => {
              t.response
                ? this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t);
            });
        },
      },
    },
    ei = ti,
    si = (s("307e"), Object(g["a"])(ei, Za, Xa, !1, null, "9f4ee4d2", null)),
    ai = si.exports;
  (Bt()(si, "components", {
    QDialog: Ue["a"],
    QCard: Dt["a"],
    QCardSection: Re["a"],
    QRating: la["a"],
    QBtnToggle: za["a"],
    QInput: We["a"],
    QCardActions: ze["a"],
    QBtn: zt["a"],
  }),
    Bt()(si, "directives", { ClosePopup: je["a"] }));
  var ii = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-card",
        [
          s("q-card-section", { staticClass: "q-pb-sm" }, [
            s("div", { staticClass: "text-body1" }, [t._v("修改作品信息")]),
          ]),
          s("q-card-section", { staticClass: "q-pt-none" }, [
            s(
              "div",
              { staticStyle: { "min-width": "300px" } },
              [
                s("q-input", {
                  attrs: { filled: "", label: "编辑标题" },
                  model: {
                    value: t.editTitle,
                    callback: function (e) {
                      t.editTitle = e;
                    },
                    expression: "editTitle",
                  },
                }),
              ],
              1,
            ),
          ]),
          s(
            "q-card-section",
            { staticClass: "q-pt-none" },
            [
              s(
                "q-chip",
                {
                  staticClass: "shadow-4",
                  attrs: { size: "md", color: "primary" },
                },
                [t._v("\n      " + t._s(t.editCircle.name) + "\n    ")],
              ),
              s("q-btn", {
                staticClass: "q-ml-lg",
                attrs: {
                  round: "",
                  color: "deep-orange",
                  icon: "swap_horiz",
                  size: "sm",
                },
                on: { click: t.changeCircle },
              }),
            ],
            1,
          ),
          s("q-card-section", { staticClass: "q-pt-none" }, [
            s(
              "div",
              { staticClass: "q-px-none q-py-sm" },
              [
                t._l(t.editTags, function (e, a) {
                  return s(
                    "q-chip",
                    {
                      key: e.name,
                      staticClass: "shadow-4",
                      attrs: { size: "md", color: "secondary", removable: "" },
                      on: {
                        remove: function (e) {
                          return t.removeTagAt(a);
                        },
                      },
                    },
                    [t._v("\n        " + t._s(e.name) + "\n      ")],
                  );
                }),
                s("q-btn", {
                  staticClass: "q-ml-lg",
                  attrs: {
                    round: "",
                    color: "deep-orange",
                    icon: "add",
                    size: "sm",
                  },
                  on: { click: t.addTag },
                }),
              ],
              2,
            ),
          ]),
          s("q-card-section", { staticClass: "q-pt-none" }, [
            s(
              "div",
              { staticClass: "q-px-none q-pt-sm q-py-sm" },
              [
                t._l(t.editVas, function (e, a) {
                  return s(
                    "q-chip",
                    {
                      key: e.name,
                      staticClass: "shadow-4",
                      attrs: {
                        square: "",
                        size: "md",
                        color: "accent",
                        "text-color": "white",
                        icon: "mic",
                        removable: "",
                      },
                      on: {
                        remove: function (e) {
                          return t.removeVaAt(a);
                        },
                      },
                    },
                    [t._v("\n        " + t._s(e.name) + "\n      ")],
                  );
                }),
                s("q-btn", {
                  staticClass: "q-ml-lg",
                  attrs: {
                    round: "",
                    color: "deep-orange",
                    icon: "add",
                    size: "sm",
                  },
                  on: { click: t.addVa },
                }),
              ],
              2,
            ),
          ]),
          s(
            "div",
            { staticClass: "row justify-end" },
            [
              s(
                "q-card-actions",
                { staticClass: "text-primary", attrs: { align: "right" } },
                [
                  s("q-btn", {
                    directives: [
                      { name: "close-popup", rawName: "v-close-popup" },
                    ],
                    attrs: { label: "确定" },
                    on: {
                      click: function (e) {
                        return t.confirmChange();
                      },
                    },
                  }),
                  s("q-btn", {
                    directives: [
                      { name: "close-popup", rawName: "v-close-popup" },
                    ],
                    attrs: { label: "取消", "text-color": "negative" },
                    on: { click: function () {} },
                  }),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-dialog",
            {
              model: {
                value: t.showCandidateDialog,
                callback: function (e) {
                  t.showCandidateDialog = e;
                },
                expression: "showCandidateDialog",
              },
            },
            [
              s(
                "q-card",
                { staticStyle: { width: "70vw", "max-height": "60vh" } },
                [
                  s(
                    "q-card-section",
                    [
                      s("div", { staticClass: "text-body1" }, [
                        t._v(t._s(t.searchTitle)),
                      ]),
                      s("q-input", {
                        attrs: { label: "搜索" },
                        scopedSlots: t._u(
                          [
                            0 == t.fetchCandidates.length
                              ? {
                                  key: "append",
                                  fn: function () {
                                    return [
                                      s(
                                        "q-btn",
                                        {
                                          on: {
                                            click: function (e) {
                                              return t.chooseCandidate({
                                                name: t.searchCandidate,
                                                id: 0,
                                              });
                                            },
                                          },
                                        },
                                        [t._v("增加自定义")],
                                      ),
                                    ];
                                  },
                                  proxy: !0,
                                }
                              : null,
                          ],
                          null,
                          !0,
                        ),
                        model: {
                          value: t.searchCandidate,
                          callback: function (e) {
                            t.searchCandidate = e;
                          },
                          expression: "searchCandidate",
                        },
                      }),
                    ],
                    1,
                  ),
                  s(
                    "q-card-section",
                    { staticClass: "q-pt-none" },
                    [
                      s(
                        "q-scroll-area",
                        { staticStyle: { height: "40vh" } },
                        [
                          s(
                            "q-list",
                            {
                              staticClass: "rounded-borders",
                              attrs: { dense: "", bordered: "", padding: "" },
                            },
                            t._l(t.fetchCandidates, function (e) {
                              return s(
                                "q-item",
                                {
                                  directives: [
                                    { name: "ripple", rawName: "v-ripple" },
                                  ],
                                  key: e.id,
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (s) {
                                      return t.chooseCandidate(e);
                                    },
                                  },
                                },
                                [
                                  s("q-item-section", [
                                    t._v(
                                      "\n                " +
                                        t._s(e.name) +
                                        "\n              ",
                                    ),
                                  ]),
                                ],
                                1,
                              );
                            }),
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "div",
                    { staticClass: "row justify-end" },
                    [
                      s(
                        "q-card-actions",
                        {
                          staticClass: "text-primary",
                          attrs: { align: "right" },
                        },
                        [
                          s("q-btn", {
                            directives: [
                              { name: "close-popup", rawName: "v-close-popup" },
                            ],
                            attrs: { label: "取消", "text-color": "negative" },
                            on: { click: function () {} },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
        ],
        1,
      );
    },
    ri = [];
  const oi = { id: 0, name: "N/A" };
  var ni = {
      name: "EditMeta",
      mixins: [pe],
      props: {
        workid: { type: Number, required: !0 },
        metadata: { type: Object, default: null },
      },
      async created() {
        const t = await A.getCandidates("circle"),
          e = await A.getCandidates("va"),
          s = await A.getCandidates("tag");
        this.candidate = { circles: t, vas: e, tags: s };
      },
      mounted() {
        ((this.editTitle = this.metadata.title),
          this.metadata.tags && this.metadata.tags.length > 0
            ? (this.editTags = B(this.metadata.tags))
            : (this.editTags = []),
          this.metadata.vas && this.metadata.vas.length > 0
            ? (this.editVas = B(this.metadata.vas))
            : (this.editVas = []),
          0 === this.editVas.length && (this.editVas = [oi]),
          (this.editCircle = this.metadata.circle));
      },
      data() {
        return {
          defaultNVA: oi,
          showCandidateDialog: !1,
          editTitle: "",
          editTags: [],
          editVas: [],
          editCircle: { id: 0, name: "" },
          candidate: { tags: [], vas: [], circles: [] },
          showCandidateType: "tags",
          searchTitle: "",
          searchCandidate: "",
        };
      },
      computed: {
        fetchCandidates() {
          const t = this.candidate[this.showCandidateType];
          return "" === this.searchCandidate
            ? t
            : t.filter((t) => t.name.includes(this.searchCandidate));
        },
      },
      methods: {
        async confirmChange() {
          try {
            const t = await A.saveEditMeta(this.workid, {
              title: this.editTitle,
              tags: this.editTags,
              vas: this.editVas,
              circle: this.editCircle,
            });
            (console.log("custom meta success: ", t),
              this.showSuccNotif("自定义meta成功，2秒后刷新页面"),
              setTimeout(() => {
                this.$router.go(0);
              }, 2e3));
          } catch (t) {
            (console.error("custom meta failed: ", t),
              this.showErrNotif("自定义meta失败: " + t.message));
          }
        },
        changeCircle() {
          ((this.showCandidateType = "circles"),
            (this.searchTitle = "替换社团"),
            (this.searchCandidate = ""),
            (this.showCandidateDialog = !0));
        },
        addTag() {
          ((this.showCandidateType = "tags"),
            (this.searchTitle = "添加标签"),
            (this.searchCandidate = ""),
            (this.showCandidateDialog = !0));
        },
        addVa() {
          ((this.showCandidateType = "vas"),
            (this.searchTitle = "添加声优"),
            (this.searchCandidate = ""),
            (this.showCandidateDialog = !0));
        },
        removeVaAt(t) {
          1 != this.editVas.length
            ? (this.editVas = [
                ...this.editVas.slice(0, t),
                ...this.editVas.slice(t + 1),
              ])
            : this.showErrNotif("声优至少得有一个");
        },
        removeTagAt(t) {
          this.editTags = [
            ...this.editTags.slice(0, t),
            ...this.editTags.slice(t + 1),
          ];
        },
        chooseCandidate(t) {
          ("circles" == this.showCandidateType
            ? (this.editCircle = t)
            : "vas" == this.showCandidateType
              ? this.editVas.find((e) => e.name == t.name)
                ? this.showErrNotif("项目已存在，无需重复添加")
                : this.editVas.push(t)
              : "tags" == this.showCandidateType &&
                (this.editTags.find((e) => e.name == t.name)
                  ? this.showErrNotif("项目已存在，无需重复添加")
                  : this.editTags.push(t)),
            (this.showCandidateDialog = !1));
        },
      },
    },
    li = ni,
    ci = (s("a7c8"), Object(g["a"])(li, ii, ri, !1, null, "6e99ce07", null)),
    di = ci.exports;
  (Bt()(ci, "components", {
    QCard: Dt["a"],
    QCardSection: Re["a"],
    QInput: We["a"],
    QChip: Fe["a"],
    QBtn: zt["a"],
    QCardActions: ze["a"],
    QDialog: Ue["a"],
    QScrollArea: Ms["a"],
    QList: De["a"],
    QItem: Ft["a"],
    QItemSection: Qt["a"],
  }),
    Bt()(ci, "directives", { ClosePopup: je["a"], Ripple: Be["a"] }));
  var ui = {
      name: "WorkDetails",
      mixins: [pe],
      components: { CoverSFW: ra, WriteReview: ai, EditMeta: di },
      props: {
        metadata: { type: Object, required: !0 },
        tree: { type: Array, required: !1, default: () => [] },
      },
      data() {
        return {
          rating: 0,
          userMarked: !1,
          progress: "",
          showReviewDialog: !1,
          showEditMetaDialog: !1,
          showDownloadDialog: !1,
          showTags: !0,
          isDownloadingLyrics: !1,
        };
      },
      computed: {
        sortedRatings: function () {
          function t(t, e) {
            return t.review_point > e.review_point ? -1 : 1;
          }
          return this.metadata.rate_count_detail.slice().sort(t);
        },
	        dlsiteCode() {
	          return T(this.metadata.primary_work_id || this.metadata.id);
	        },
	        secondaryDlsiteCode() {
	          return this.metadata.secondary_work_id
	            ? T(this.metadata.secondary_work_id)
	            : "";
	        },
	        dlsiteUrl() {
	          const t =
	            "https://www.dlsite.com/home/work/=/product_id/" +
	            this.dlsiteCode +
	            ".html";
	          return this.secondaryDlsiteCode
	            ? t + "/?translation=" + this.secondaryDlsiteCode
	            : t;
	        },
        totalDuration() {
          return this.metadata.memo && this.metadata.memo.totalDuration
            ? this.metadata.memo.totalDuration
            : null;
        },
        isAdminUser() {
          return rrIsAdminUser(this.$store.state.User);
        },
        ...Object(y["d"])("AudioPlayer", ["playing", "playWorkId"]),
      },
      watch: {
        metadata(t) {
          (t.userRating
            ? ((this.userMarked = !0), (this.rating = t.userRating))
            : ((this.userMarked = !1), (this.rating = t.rate_average_2dp || 0)),
            (this.progress = t.progress),
            t.tags && null === t.tags[0].name && (this.showTags = !1));
        },
      },
      methods: {
        humanReadableSeconds: z,
        setProgress(t) {
          this.progress = t;
          const e = {
            user_name: this.$store.state.User.name,
            work_id: this.metadata.id,
            progress: t,
          };
          this.submitProgress(e);
        },
        submitProgress(t) {
          const e = { starOnly: !1, progressOnly: !0 };
          this.$axios
            .put("/asmr-site/api/review", t, { params: e })
            .then((t) => {
              (this.showSuccNotif(t.data.message), this.$emit("reset"));
            })
            .catch((t) => {
              t.response
                ? this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t);
            });
        },
        setRating(t) {
          const e = {
            user_name: this.$store.state.User.name,
            work_id: this.metadata.id,
            rating: t,
          };
          this.submitRating(e);
        },
        submitRating(t) {
          this.$axios
            .put("/asmr-site/api/review", t)
            .then((t) => {
              (this.showSuccNotif(t.data.message), this.$emit("reset"));
            })
            .catch((t) => {
              t.response
                ? this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t);
            });
        },
        processReview() {
          this.showReviewDialog = !1;
        },
        resumeThisHistroy() {
          this.$emit("resumeHistroy");
        },
        clearThisHistroy() {
          this.$q
            .dialog({
              title: "注意",
              message: "确定要删除这个作品的播放历史吗？",
              cancel: "取消",
              ok: "确定",
            })
            .onOk(async () => {
              this.$axios
                .delete("/asmr-site/api/histroy", { data: { work_id: this.metadata.id } })
                .then((t) => {
                  this.$q.notify("删除历史成功");
                })
                .catch((t) => {
                  (this.$q.notify("删除历史失败：", t.message),
                    console.error(t));
                });
            });
        },
        async downloadLyricZip() {
          try {
            this.isDownloadingLyrics = !0;
            const e = this.$q.localStorage.getItem("jwt-token") || "";
            const t = await this.$axios.get(
              appendTokenToMediaUrl(
                "/asmr-site/api/media/download-lyrics/" +
                  this.metadata.id +
                  "/" +
                  encodeURIComponent(this.dlsiteCode + "_lyrics.zip"),
                e,
              ),
              { responseType: "blob" },
            );
            const a = window.URL.createObjectURL(t.data),
              s = document.createElement("a");
            (s.href = a,
              (s.download = this.dlsiteCode + "_lyrics.zip"),
              document.body.appendChild(s),
              s.click(),
              s.remove(),
              setTimeout(() => window.URL.revokeObjectURL(a), 1e3));
          } catch (t) {
            let e = t;
            if (t.response && t.response.data instanceof Blob) {
              try {
                const s = JSON.parse(await t.response.data.text());
                e = new Error(s.error || s.message || "下载歌词失败");
              } catch (s) {
                if (!(s instanceof SyntaxError)) {
                  e = s;
                }
              }
            }
            this.showErrNotif(e.message || e);
          } finally {
            this.isDownloadingLyrics = !1;
          }
        },
        openDownloadDialog() {
          this.showDownloadDialog = !0;
        },
        async scanWorkFile() {
          if (!this.isAdminUser) return;
          try {
            const t = await this.$axios.post(
              "/asmr-site/api/work/scan/" + this.metadata.id,
            );
            t.data.memo && this.$router.go(0);
          } catch (t) {
            (console.error(t), this.showErrNotif(t.message || t));
          }
        },
        async recoverOriginCover() {
          if (!this.isAdminUser) return;
          try {
            let t = await A.recoverEditImg(this.metadata.id, "main");
            if (!t.success)
              return void this.showErrNotif("recover main cover failed");
            if (
              ((t = await A.recoverEditImg(this.metadata.id, "sam")),
              !t.success)
            )
              return void this.showErrNotif("recover sam cover failed");
            this.$router.go(0);
          } catch (t) {
            (console.error(t), this.showErrNotif(t.message || t));
          }
        },
        async fixGBKShiftJISEncodingBugImpl() {
          if (!this.isAdminUser) return;
          try {
            const t = await this.$axios.post(
              "/asmr-site/api/work/fix/gbk/" + this.metadata.id,
            );
            t.data.memo && this.$router.go(0);
          } catch (t) {
            (console.error(t), this.showErrNotif(t.message || t));
          }
        },
        fixGBKShiftJISEncodingBug(t) {
          if (!this.isAdminUser) return;
          ((t = t || !1),
            this.$q
              .dialog({
                title: t
                  ? "二次警告！此操作执行后将无法回退修改"
                  : "警告！此操作执行后将无法回退修改",
                message: t
                  ? "你确定你知道在做什么吗？这个功能没有单独文件的乱码检测，而是强制所有文件名称转换编码，如果存在正常文件名字，则正常文件名字会被改乱掉，无法修复，请一定确保这个作品文件夹下只有乱码文件，因此造成的任何数据丢失，本软件概不负责"
                  : "乱码修复功能，解决ShiftJIS编码文件名在GBK环境下出现的乱码，此功能将作用于这个作品内部的所有子文件，包括递归的子文件夹，但是不包括最顶层的文件夹名字（就是顶层那个带RJ****文件夹名不会变，反正你也看不到这个文件夹的名字），所有作品文件夹内部文件的名字将会被修改，如果存在正常的文件名，则这个正常的文件名会被修改成错误的，请确保这个作品中只有乱码文件，然后再点击确定修改，无法保证的话，请勿使用本功能",
                ok: {
                  label: t ? "我知道，确认修改" : "确认修改",
                  color: "negative",
                },
                cancel: { label: "取消", color: "secondary" },
              })
              .onOk(() => {
                t
                  ? this.fixGBKShiftJISEncodingBugImpl()
                  : this.fixGBKShiftJISEncodingBug(!0);
              }));
        },
      },
    },
    hi = ui,
    mi = s("f20b"),
    pi = Object(g["a"])(hi, Ka, Ja, !1, null, null, null),
    gi = pi.exports;
  (Bt()(pi, "components", {
    QRating: la["a"],
    QTooltip: Ke["a"],
    QLinearProgress: ca["a"],
    QIcon: Qe["a"],
    QChip: Fe["a"],
    QBtn: zt["a"],
    QBtnDropdown: mi["a"],
    QList: De["a"],
    QItem: Ft["a"],
    QItemSection: Qt["a"],
    QAvatar: Rs["a"],
    QItemLabel: Wt["a"],
    QDialog: Ue["a"],
  }),
    Bt()(pi, "directives", { ClosePopup: je["a"] }));
  var fi = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        { staticClass: "q-ma-md " },
        [
          t.path.length
            ? s(
                "q-breadcrumbs",
                { attrs: { gutter: "xs" } },
                [
                  s(
                    "q-breadcrumbs-el",
                    [
                      s(
                        "q-btn",
                        {
                          attrs: {
                            "no-caps": "",
                            flat: "",
                            dense: "",
                            size: "md",
                            icon: "folder",
                          },
                          on: {
                            click: function (e) {
                              t.path = [];
                            },
                          },
                        },
                        [t._v("ROOT")],
                      ),
                    ],
                    1,
                  ),
                  t._l(t.path, function (e, a) {
                    return s(
                      "q-breadcrumbs-el",
                      { key: a, staticClass: "cursor-pointer" },
                      [
                        s(
                          "q-btn",
                          {
                            attrs: {
                              "no-caps": "",
                              flat: "",
                              dense: "",
                              size: "md",
                              icon: "folder",
                            },
                            on: {
                              click: function (e) {
                                return t.onClickBreadcrumb(a);
                              },
                            },
                          },
                          [t._v(t._s(e))],
                        ),
                      ],
                      1,
                    );
                  }),
                ],
                2,
              )
            : t._e(),
          s(
            "q-dialog",
            {
              model: {
                value: t.edit_img,
                callback: function (e) {
                  t.edit_img = e;
                },
                expression: "edit_img",
              },
            },
            [
              s("ImageEditor", {
                attrs: { src: t.edit_img_src, work_id: t.metadata.id },
              }),
            ],
            1,
          ),
          s("VideoPlayerDialog", {
            attrs: { track: t.video_player_track, metadata: t.metadata },
            model: {
              value: t.video_player,
              callback: function (e) {
                t.video_player = e;
              },
              expression: "video_player",
            },
          }),
          s(
            "q-dialog",
            {
              attrs: { "full-width": "" },
              model: {
                value: t.preview_img,
                callback: function (e) {
                  t.preview_img = e;
                },
                expression: "preview_img",
              },
            },
            [
              t.preview_img_list.length
                ? s(
                    "q-card",
                    [
                      s("q-card-section", [
                      s(
                        "div",
                        { staticClass: "row items-center no-wrap" },
                          [
                            s("div", { staticClass: "col" }, [
                              s("div", { staticClass: "text-h6" }, [
                                t._v(t._s(t.preview_img_name)),
                              ]),
                              s("div", { staticClass: "text-subtitle2" }, [
                                t._v(
                                  t._s(t.preview_img_idx + 1) +
                                    "/" +
                                    t._s(t.preview_img_list.length),
                                ),
                              ]),
                            ]),
                            t.isAdminUser
                              ? s(
                                  "q-btn",
                                  {
                                    attrs: { outline: "" },
                                    on: {
                                      click: function (e) {
                                        return t.editImg(
                                          t.preview_img_list[
                                            t.preview_img_idx
                                          ],
                                        );
                                      },
                                    },
                                  },
                                  [t._v("编辑作为封面")],
                                )
                              : t._e(),
                            t.playWorkId > 0
                              ? s(
                                  "div",
                                  { staticClass: "col-auto" },
                                  [
                                    s(
                                      "q-btn",
                                      {
                                        attrs: { outline: "" },
                                        on: {
                                          click: function (e) {
                                            return t.setVisualPlayerCover(
                                              t.preview_img_list[
                                                t.preview_img_idx
                                              ],
                                            );
                                          },
                                        },
                                      },
                                      [t._v("用作可视化封面")],
                                    ),
                                  ],
                                  1,
                                )
                              : t._e(),
                            s(
                              "div",
                              { staticClass: "col-auto" },
                              [
                                s("q-btn", {
                                  attrs: {
                                    outline: "",
                                    icon: "fullscreen",
                                    label: "全屏",
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.openPreviewImgFullscreen();
                                    },
                                  },
                                }),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                        s(
                          "div",
                          { staticClass: "row items-center q-mt-sm" },
	                          [
	                            s("q-btn-toggle", {
                              attrs: {
                                "no-caps": "",
                                rounded: "",
                                dense: "",
                                unelevated: "",
                                "toggle-color": "primary",
                                "text-color": "primary",
                                options: [
                                  {
                                    label: "翻页",
                                    value: "page",
                                    icon: "skip_previous",
                                  },
                                  {
                                    label: "滚动",
                                    value: "scroll",
                                    icon: "swap_vert",
                                  },
                                ],
                              },
                              model: {
                                value: t.preview_img_mode,
                                callback: function (e) {
                                  t.setPreviewImgMode(e);
                                },
	                                expression: "preview_img_mode",
	                              },
	                            }),
	                            s(
	                              "div",
	                              {
	                                staticClass:
	                                  "row items-center q-ml-md col",
	                                staticStyle: { minWidth: "180px" },
	                              },
	                              [
	                                s(
	                                  "div",
	                                  {
	                                    staticClass:
	                                      "text-caption text-grey-7 q-mr-sm",
	                                  },
	                                  [
	                                    t._v(
	                                      "缩放 " +
	                                        t._s(t.preview_img_zoom) +
	                                        "%",
	                                    ),
	                                  ],
	                                ),
	                                s("q-slider", {
	                                  staticClass: "col",
	                                  attrs: {
	                                    min: 50,
	                                    max: 200,
	                                    step: 10,
	                                    dense: "",
	                                    label: "",
	                                  },
	                                  model: {
	                                    value: t.preview_img_zoom,
	                                    callback: function (e) {
	                                      t.setPreviewImgZoom(e);
	                                    },
	                                    expression: "preview_img_zoom",
	                                  },
	                                }),
	                              ],
	                              1,
	                            ),
	                          ],
	                          1,
	                        ),
                      ]),
                      "scroll" === t.preview_img_mode
                        ? s(
                            "div",
                            {
                              staticStyle: {
                                height: "calc(100vh - 200pt)",
                                overflow: "auto",
                              },
                            },
                            t._l(t.preview_img_list, function (e, a) {
                              return s(
                                "div",
                                {
                                  key: e.hash || a,
                                  attrs: {
                                    id: "preview-img-item-" + a,
                                  },
                                  staticStyle: {
                                    padding: "0 0 18px 0",
                                  },
                                },
                                [
                                  s(
                                    "div",
                                    {
                                      staticClass:
                                        "row items-center justify-between q-px-md q-pb-xs text-caption text-grey-7",
                                    },
                                    [
                                      s("span", [
                                        t._v(
                                          t._s(a + 1) +
                                            "/" +
                                            t._s(t.preview_img_list.length),
                                        ),
                                      ]),
                                      s(
                                        "span",
                                        {
                                          staticClass: "ellipsis",
                                          staticStyle: { maxWidth: "75%" },
                                        },
                                        [t._v(t._s(e.title))],
                                      ),
                                    ],
                                    1,
                                  ),
	                                  s("img", {
	                                    style: t.preview_img_scroll_style,
	                                    attrs: {
	                                      src: t.cachedPreviewImgSrc(e),
	                                      loading: "eager",
	                                    },
	                                    on: {
	                                      click: function () {
	                                        (t.preview_img_idx = a),
                                          t.setPreviewImgMode("page");
                                      },
                                    },
                                  }),
                                ],
                                1,
                              );
                            }),
                            0,
                          )
	                        : s(
	                            "q-card-section",
	                            { staticClass: "q-pt-none" },
	                            [
	                              s(
	                                "div",
	                                {
	                                  staticStyle: {
	                                    position: "relative",
	                                    height: "calc(100vh - 200pt)",
	                                    background: "#fff",
	                                    display: "flex",
	                                    "align-items": "center",
	                                    "justify-content": "center",
	                                    overflow: "hidden",
	                                  },
	                                },
	                                [
	                                  s("img", {
	                                    style: t.preview_img_page_style,
	                                    attrs: {
	                                      src: t.preview_img_url,
	                                      loading: "eager",
	                                    },
	                                  }),
	                                  s("div", {
	                                    staticStyle: {
	                                      position: "absolute",
	                                      top: "0",
	                                      bottom: "0",
	                                      left: "0",
	                                      width: "33%",
	                                      cursor: "w-resize",
	                                      "z-index": "2",
	                                    },
	                                    attrs: { title: "上一张" },
	                                    on: {
	                                      click: function (e) {
	                                        return t.changePreviewImg(!1);
	                                      },
	                                    },
	                                  }),
	                                  s("div", {
	                                    staticStyle: {
	                                      position: "absolute",
	                                      top: "0",
	                                      right: "0",
	                                      bottom: "0",
	                                      width: "33%",
	                                      cursor: "e-resize",
	                                      "z-index": "2",
	                                    },
	                                    attrs: { title: "下一张" },
	                                    on: {
	                                      click: function (e) {
	                                        return t.changePreviewImg(!0);
	                                      },
	                                    },
	                                  }),
	                                ],
	                                1,
	                              ),
	                            ],
	                            1,
	                          ),
                      s(
                        "q-card-actions",
                        { attrs: { align: "around" } },
                        [
                          s("q-btn", {
                            attrs: {
                              flat: "",
                              label: "上一个",
                              color: "primary",
                            },
                            on: {
                              click: function (e) {
                                return t.changePreviewImg(!1);
                              },
                            },
                          }),
                          s("q-btn", {
                            directives: [
                              { name: "close-popup", rawName: "v-close-popup" },
                            ],
                            attrs: {
                              flat: "",
                              label: "关闭",
                              color: "negative",
                            },
                          }),
                          s("q-btn", {
                            attrs: {
                              flat: "",
                              label: "下一个",
                              color: "primary",
                            },
                            on: {
                              click: function (e) {
                                return t.changePreviewImg(!0);
                              },
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  )
                : t._e(),
            ],
            1,
          ),
          s(
            "q-dialog",
            {
              attrs: { maximized: "" },
              model: {
                value: t.preview_img_fullscreen,
                callback: function (e) {
                  t.preview_img_fullscreen = e;
                },
                expression: "preview_img_fullscreen",
              },
            },
            [
              s(
                "div",
                {
                  staticStyle: {
                    position: "relative",
                    width: "100vw",
                    height: "100vh",
                    background: "rgba(0,0,0,.92)",
                    padding:
                      "calc(12px + env(safe-area-inset-top,0px)) calc(12px + env(safe-area-inset-right,0px)) calc(12px + env(safe-area-inset-bottom,0px)) calc(12px + env(safe-area-inset-left,0px))",
                    overflow: "hidden",
                  },
                },
                [
                  "scroll" === t.preview_img_mode
                    ? s(
                        "div",
                        {
                          staticStyle: {
                            width: "100%",
                            height: "100%",
                            overflow: "auto",
                            "-webkit-overflow-scrolling": "touch",
                            "scroll-behavior": "smooth",
                            padding: "48px 0 24px",
                          },
                        },
                        t._l(t.preview_img_list, function (e, a) {
                          return s(
                            "div",
                            {
                              key: "fullscreen-" + (e.hash || a),
                              attrs: {
                                id: "preview-img-fullscreen-item-" + a,
                              },
                              staticStyle: {
                                padding: "0 0 18px 0",
                                "text-align": "center",
                              },
                            },
                            [
                              s("img", {
                                style: t.preview_img_fullscreen_scroll_style,
                                attrs: {
                                  src: t.cachedPreviewImgSrc(e),
                                  alt: e.title,
                                  loading: "eager",
                                },
                                on: {
                                  click: function () {
                                    t.preview_img_idx = a;
                                  },
                                },
                              }),
                            ],
                          );
                        }),
                        0,
                      )
                    : s(
                        "div",
                        {
                          staticStyle: {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            overflow: "hidden",
                          },
                        },
                        [
                          s("img", {
                            style: t.preview_img_fullscreen_style,
                            attrs: {
                              src: t.preview_img_url,
                              alt: t.preview_img_name,
                            },
                          }),
                          s("div", {
                            staticStyle: {
                              position: "absolute",
                              top: "0",
                              bottom: "0",
                              left: "0",
                              width: "35%",
                              cursor: "w-resize",
                              "z-index": "2",
                            },
                            attrs: { title: "上一张" },
                            on: {
                              click: function (e) {
                                return t.changePreviewImg(!1);
                              },
                            },
                          }),
                          s("div", {
                            staticStyle: {
                              position: "absolute",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              width: "35%",
                              cursor: "e-resize",
                              "z-index": "2",
                            },
                            attrs: { title: "下一张" },
                            on: {
                              click: function (e) {
                                return t.changePreviewImg(!0);
                              },
                            },
                          }),
                        ],
                      ),
                  s("q-btn", {
                    staticStyle: {
                      position: "fixed",
                      top: "calc(12px + env(safe-area-inset-top,0px))",
                      right: "calc(12px + env(safe-area-inset-right,0px))",
                      background: "transparent",
                      color: "rgba(255,255,255,.82)",
                      "text-shadow": "0 2px 8px rgba(0,0,0,.85)",
                      width: "44px",
                      height: "44px",
                      "z-index": "5",
                    },
                    attrs: {
                      round: "",
                      flat: "",
                      dense: "",
                      icon: "close",
                    },
                    on: { click: t.closePreviewImgFullscreen },
                  }),
                ],
                1,
              ),
            ],
          ),
          s(
            "q-card",
            [
              s(
                "q-list",
                { attrs: { separator: "" } },
                [
                  t.path.length >= 1
                    ? s(
                        "q-item",
                        {
                          directives: [{ name: "ripple", rawName: "v-ripple" }],
                          staticClass: "non-selectable",
                          attrs: { clickable: "" },
                          on: {
                            click: function (e) {
                              return t.folderGoUp();
                            },
                          },
                        },
                        [
                          s(
                            "q-item-section",
                            {
                              staticStyle: { position: "relative" },
                              attrs: { avatar: "" },
                            },
                            [
                              s("q-icon", {
                                attrs: {
                                  size: "34px",
                                  color: "amber-3",
                                  name: "folder",
                                },
                              }),
                            ],
                            1,
                          ),
                          s(
                            "q-item-section",
                            [
                              s("q-item-label", [t._v("..")]),
                              s(
                                "q-item-label",
                                { attrs: { caption: "", lines: "1" } },
                                [t._v("返回上层文件夹")],
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : t._e(),
                  t._l(t.fatherFolder, function (e) {
                    return s(
                      "q-item",
                      {
                        directives: [{ name: "ripple", rawName: "v-ripple" }],
                        key: e.hash,
                        staticClass: "non-selectable",
                        attrs: {
                          clickable: "",
                          active:
                            "audio" === e.type &&
                            !t.isVideoMedia(e) &&
                            t.currentPlayingFile.hash === e.hash,
                          "active-class": "text-white bg-teal",
                        },
                        on: {
                          click: function (s) {
                            return t.onClickItem(e);
                          },
                        },
                      },
                      [
                        s(
                          "q-item-section",
                          {
                            staticStyle: { position: "relative" },
                            attrs: { avatar: "" },
                          },
                          [
                            "folder" === e.type
                              ? s("q-icon", {
                                  attrs: {
                                    size: "34px",
                                    color: "amber",
                                    name: "folder",
                                  },
                                })
                              : "text" === e.type
                                ? s("q-icon", {
                                    attrs: {
                                      size: "34px",
                                      color: "info",
                                      name: "description",
                                    },
                                  })
                                : "image" === e.type
                                  ? s("q-icon", {
                                      attrs: {
                                        size: "34px",
                                        color: "orange",
                                        name: "photo",
                                      },
                                    })
                                  : "other" === e.type
                                    ? s("q-icon", {
                                        attrs: {
                                          size: "34px",
                                          color: "info",
                                          name: "description",
                                        },
                                      })
                                    : s("q-btn", {
                                        attrs: {
                                          round: "",
                                          dense: "",
                                          color: "primary",
                                          icon: t.playIcon(e.hash),
                                        },
                                        on: {
                                          click: function (s) {
                                            return t.onClickPlayButton(e.hash);
                                          },
                                        },
                                      }),
                          ],
                          1,
                        ),
                        s(
                          "q-item-section",
                          [
                            s("q-item-label", [t._v(t._s(e.title))]),
                            e.children
                              ? s(
                                  "q-item-label",
                                  { attrs: { caption: "", lines: "1" } },
                                  [t._v(t._s(e.children.length + " 项目"))],
                                )
                              : t._e(),
                            "audio" === e.type && "number" === typeof e.duration
                              ? s(
                                  "q-item-label",
                                  { attrs: { caption: "", lines: "1" } },
                                  [
                                    s("q-icon", {
                                      staticClass: "q-mr-xs",
                                      attrs: {
                                        size: "0.8rem",
                                        name: "schedule",
                                      },
                                    }),
                                    t._v(
                                      "\n            " +
                                        t._s(t.formatSeconds(e.duration)) +
                                        "\n          ",
                                    ),
                                  ],
                                  1,
                                )
                              : t._e(),
                          ],
                          1,
                        ),
                        e.status > t.AILyricTaskStatus.NONE
                          ? s(
                              "q-item-section",
                              { attrs: { avatar: "" } },
                              [s("AIStatus", { attrs: { status: e.status } })],
                              1,
                            )
                          : t._e(),
                        "audio" === e.type ||
                        "text" === e.type ||
                        "image" === e.type ||
                        "other" === e.type
                          ? s(
                              "q-menu",
                              {
                                attrs: {
                                  "touch-position": "",
                                  "context-menu": "",
                                  "auto-close": "",
                                  "transition-show": "jump-down",
                                  "transition-hide": "jump-up",
                                },
                              },
                              [
                                s(
                                  "q-list",
                                  { attrs: { separator: "" } },
                                  [
                                    "audio" === e.type && !t.isVideoMedia(e)
                                      ? s(
                                          "q-item",
                                          {
                                            attrs: { clickable: "" },
                                            on: {
                                              click: function (s) {
                                                return t.addToQueue(e);
                                              },
                                            },
                                          },
                                          [
                                            s("q-item-section", [
                                              t._v("添加到播放列表"),
                                            ]),
                                          ],
                                          1,
                                        )
                                      : t._e(),
                                    "audio" === e.type && !t.isVideoMedia(e)
                                      ? s(
                                          "q-item",
                                          {
                                            attrs: { clickable: "" },
                                            on: {
                                              click: function (s) {
                                                return t.playNext(e);
                                              },
                                            },
                                          },
                                          [
                                            s("q-item-section", [
                                              t._v("下一曲播放"),
                                            ]),
                                          ],
                                          1,
                                        )
                                      : t._e(),
                                    "image" === e.type && t.isAdminUser
                                      ? s(
                                          "q-item",
                                          {
                                            attrs: { clickable: "" },
                                            on: {
                                              click: function (s) {
                                                return t.editImg(e);
                                              },
                                            },
                                          },
                                          [
                                            s("q-item-section", [
                                              t._v("编辑作为封面"),
                                            ]),
                                          ],
                                          1,
                                        )
                                      : t._e(),
                                    s(
                                      "q-item",
                                      {
                                        attrs: { clickable: "" },
                                        on: {
                                          click: function (s) {
                                            return t.download(e);
                                          },
                                        },
                                      },
                                      [s("q-item-section", [t._v("下载文件")])],
                                      1,
                                    ),
                                    "audio" === e.type &&
                                    !t.isVideoMedia(e) &&
                                    t.isAdminUser
                                      ? s(
                                          "q-item",
                                          {
                                            attrs: { clickable: "" },
                                            on: {
                                              click: function (s) {
                                                return t.aiTranslateToServer(e);
                                              },
                                            },
                                          },
                                          [
                                            s("q-item-section", [
                                              t._v("进行AI翻译"),
                                            ]),
                                          ],
                                          1,
                                        )
                                      : t._e(),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            )
                          : t._e(),
                      ],
                      1,
                    );
                  }),
                ],
                2,
              ),
            ],
            1,
          ),
        ],
        1,
      );
    },
    vi = [],
    yi = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-circular-progress",
        {
          attrs: {
            "show-value": "",
            size: "lg",
            indeterminate: t.isIndeterminate,
            thickness: 0.2,
            color: t.color,
            "track-color": "grey-8",
            value: t.value,
          },
        },
        [t._v("\n  " + t._s(t.showMsg) + "\n")],
      );
    },
    wi = [],
    bi = {
      name: "AIStatus",
      props: { status: { type: Number, required: !0 } },
      computed: {
        color() {
          return this.status == L.ERROR ? "red-8" : "lime";
        },
        isIndeterminate() {
          return this.status == L.TRASCRIPTING;
        },
        value() {
          switch (this.status) {
            case L.PENDING:
              return 10;
            case L.TRASCRIPTING:
              return 50;
            case L.SUCCESS:
              return 100;
            case L.ERROR:
              return 100;
            default:
              return 0;
          }
        },
        showMsg() {
          switch (this.status) {
            case L.PENDING:
              return "排队";
            case L.TRASCRIPTING:
              return "翻译";
            case L.SUCCESS:
              return "AI";
            case L.ERROR:
              return "错误";
            default:
              return "无效状态";
          }
        },
      },
      data() {
        return { AILyricTaskStatus: L };
      },
    },
    _i = bi,
    qi = s("58ea"),
    ki = Object(g["a"])(_i, yi, wi, !1, null, "0e3203bb", null),
    Si = ki.exports;
  Bt()(ki, "components", { QCircularProgress: qi["a"] });
  var Ci = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-card",
        { staticStyle: { width: "100%", height: "100%" } },
        [
          s("q-card-section", [
            s("div", { staticClass: "text-h6" }, [t._v("图像编辑器")]),
          ]),
          s(
            "q-card-section",
            {
              staticStyle: {
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                width: "100%",
                height: "calc(100% - 18rem)",
              },
            },
            [
              s("canvas", {
                ref: "canvas",
                staticClass: "img",
                staticStyle: { width: "100%", height: "100%" },
              }),
            ],
          ),
          s(
            "q-card-section",
            { attrs: { align: "right" } },
            [
              s("q-btn-toggle", {
                staticClass: "cover-type-toggle",
                attrs: {
                  "no-caps": "",
                  rounded: "",
                  unelevated: "",
                  "toggle-color": "primary",
                  "text-color": "primary",
                  options: t.optionRatio,
                },
                model: {
                  value: t.coverType,
                  callback: function (e) {
                    t.coverType = e;
                  },
                  expression: "coverType",
                },
              }),
            ],
            1,
          ),
          s("q-card-actions", { staticStyle: { display: "flex" } }, [
            s(
              "div",
              {
                staticStyle: {
                  display: "inline",
                  "flex-grow": "1",
                  padding: "0 2rem 0 2rem",
                },
              },
              [
                s("span", [t._v("调整裁剪区域")]),
                s("q-slider", {
                  attrs: { min: 0, max: t.maxOffset, disable: t.maxOffset < 2 },
                  model: {
                    value: t.offset,
                    callback: function (e) {
                      t.offset = e;
                    },
                    expression: "offset",
                  },
                }),
              ],
              1,
            ),
            s(
              "div",
              { staticStyle: { display: "inline" } },
              [
                s(
                  "q-btn",
                  { attrs: { color: "primary" }, on: { click: t.confirmCrop } },
                  [t._v("确认")],
                ),
                s(
                  "q-btn",
                  {
                    directives: [
                      { name: "close-popup", rawName: "v-close-popup" },
                    ],
                    attrs: { color: "negative" },
                  },
                  [t._v("取消")],
                ),
              ],
              1,
            ),
          ]),
        ],
        1,
      );
    },
    xi = [];
  const Ti = { main: 4 / 3, sam: 1 };
  var Ii = {
      name: "ImageEditor",
      mixins: [pe],
      props: { src: String, work_id: Number },
      data() {
        return {
          offset: 0,
          maxOffset: 0,
          offsetDirection: "width",
          destRatio: Ti.main,
          destHeight: 0,
          destWidth: 0,
          image: null,
          ctx: null,
          resizeObserver: null,
          coverType: "main",
          optionRatio: [
            { label: "主封面", value: "main" },
            { label: "缩略图", value: "sam" },
          ],
        };
      },
      watch: {
        offset() {
          this.drawCropImg();
        },
        coverType() {
          ((this.destRatio = Ti[this.coverType]),
            this.updateImg(),
            this.drawCropImg());
        },
      },
      computed: {
        canvas() {
          return this.$refs.canvas;
        },
      },
      methods: {
        drawCropImg() {
          if (!(this.canvas && this.image && this.ctx))
            return void console.warn("canva/image/ctx not ready");
          const t = this.canvas;
          ((t.width == t.clientWidth && t.height == t.clientHeight) ||
            ((t.width = t.clientWidth), (t.height = t.clientHeight)),
            this.ctx.clearRect(0, 0, t.width, t.height));
          const e = t.width / t.height;
          let s = 0,
            a = 0,
            i = 0,
            r = 0;
          e > this.destRatio
            ? ((r = t.height),
              (i = this.destRatio * r),
              (a = 0),
              (s = (t.width - i) / 2))
            : ((i = t.width),
              (r = i / this.destRatio),
              (s = 0),
              (a = (t.height - r) / 2));
          const o = "width" == this.offsetDirection ? this.offset : 0,
            n = "width" == this.offsetDirection ? 0 : this.offset;
          this.ctx.drawImage(
            this.image,
            o,
            n,
            this.destWidth,
            this.destHeight,
            s,
            a,
            i,
            r,
          );
        },
        async confirmCrop() {
          const t = document.createElement("canvas");
          "main" === this.coverType
            ? ((t.width = this.destWidth), (t.height = this.destHeight))
            : "sam" === this.coverType && ((t.width = 100), (t.height = 100));
          const e = t.getContext("2d"),
            s = "width" == this.offsetDirection ? this.offset : 0,
            a = "width" == this.offsetDirection ? 0 : this.offset,
            i = 0,
            r = 0,
            o = t.width,
            n = t.height;
          e.drawImage(
            this.image,
            s,
            a,
            this.destWidth,
            this.destHeight,
            i,
            r,
            o,
            n,
          );
          const l = 1,
            c = t.toDataURL("image/jpeg", l);
          console.log("newSrc = ", c);
          const d = await A.saveEditImg(this.work_id, c, this.coverType);
          d.success
            ? this.$router.go(0)
            : this.showErrNotif("更新封面失败：" + d.message);
        },
        updateImg() {
          const t = this.image,
            e = t.width / t.height;
          e > this.destRatio
            ? ((this.destHeight = t.height),
              (this.destWidth = t.height * this.destRatio),
              (this.offsetDirection = "width"),
              (this.maxOffset = t.width - this.destWidth))
            : ((this.destWidth = t.width),
              (this.destHeight = t.width / this.destRatio),
              (this.offsetDirection = "height"),
              (this.maxOffset = t.height - this.destHeight));
        },
      },
      mounted() {
        console.log("edit img for work_id ", this.work_id, this.src);
        const t = this.$refs.canvas;
        ((this.ctx = t.getContext("2d")),
          (t.width = t.clientWidth),
          (t.height = t.clientHeight));
        const e = new Image();
        ((e.src = this.src),
          (e.onload = () => {
            ((this.image = e), this.updateImg(), this.drawCropImg());
          }),
          (e.onerror = () => {
            alert("无法加载图像，请检查URL");
          }),
          (this.resizeObserver = new ResizeObserver(() => {
            this.drawCropImg();
          })),
          this.resizeObserver.observe(this.canvas));
      },
      destroyed() {
        this.resizeObserver.unobserve(this.canvas);
      },
    },
    Ei = Ii,
    Pi = (s("bbe6"), Object(g["a"])(Ei, Ci, xi, !1, null, "2d21f259", null)),
    Li = Pi.exports;
  (Bt()(Pi, "components", {
    QCard: Dt["a"],
    QCardSection: Re["a"],
    QBtnToggle: za["a"],
    QCardActions: ze["a"],
    QSlider: ve["a"],
    QBtn: zt["a"],
  }),
    Bt()(Pi, "directives", { ClosePopup: je["a"] }));
  var VideoPlayerDialogRender = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-dialog",
        {
          attrs: {
            maximized: t.$q.screen.lt.sm,
            "transition-show": "fade",
            "transition-hide": "fade",
          },
          model: {
            value: t.value,
            callback: function (e) {
              t.$emit("input", e);
            },
            expression: "value",
          },
        },
        [
          s(
            "q-card",
            { staticClass: "kikoeru-video-card" },
            [
              s(
                "div",
                { staticClass: "kikoeru-video-header" },
                [
                  s(
                    "div",
                    { staticClass: "kikoeru-video-title-wrap" },
                    [
                      s("div", { staticClass: "kikoeru-video-title ellipsis" }, [
                        t._v(t._s(t.trackTitle)),
                      ]),
                      s(
                        "div",
                        { staticClass: "kikoeru-video-subtitle ellipsis" },
                        [t._v(t._s(t.workTitle))],
                      ),
                    ],
                  ),
                  s("q-btn", {
                    attrs: {
                      flat: "",
                      round: "",
                      dense: "",
                      icon: "file_download",
                      color: "white",
                    },
                    on: { click: t.download },
                  }),
                  s("q-btn", {
                    attrs: {
                      flat: "",
                      round: "",
                      dense: "",
                      icon: "close",
                      color: "white",
                    },
                    on: { click: t.close },
                  }),
                ],
                1,
              ),
              s(
                "div",
                { staticClass: "kikoeru-video-stage" },
                [
                  t.value && t.source
                    ? t.useNativeIOSVideoPlayer
                      ? s("video", {
                          key: `${t.playerKey}-ios-native`,
                          ref: "video",
                          staticClass: "kikoeru-video-native-ios",
                          attrs: {
                            src: t.source,
                            controls: "",
                            preload: "metadata",
                            crossorigin: "anonymous",
                            poster: t.posterUrl,
                          },
                        })
                      : s(
                          "video-player",
                          {
                            key: t.playerKey,
                            staticClass: "kikoeru-video-player",
                          },
                          [
                            s(
                              "video-skin",
                              { staticClass: "kikoeru-video-skin" },
                              [
                                s("video", {
                                  ref: "video",
                                  staticClass: "kikoeru-video-native",
                                  attrs: {
                                    src: t.source,
                                    preload: "auto",
                                    crossorigin: "anonymous",
                                    playsinline: "",
                                    "webkit-playsinline": "",
                                    poster: t.posterUrl,
                                  },
                                }),
                              ],
                            ),
                          ],
                        )
                    : t._e(),
                ],
                1,
              ),
            ],
            1,
          ),
        ],
        1,
      );
    },
    VideoPlayerDialogStaticRenderFns = [],
    VideoPlayerDialogComponent = {
      name: "VideoPlayerDialog",
      props: {
        value: { type: Boolean, required: !0 },
        track: { type: Object, required: !1, default: null },
        metadata: { type: Object, required: !1, default: null },
      },
      computed: {
        trackTitle() {
          return this.track && this.track.title ? this.track.title : "";
        },
        workTitle() {
          return this.metadata && this.metadata.title
            ? this.metadata.title
            : this.track && this.track.workTitle
              ? this.track.workTitle
              : "";
        },
        playerKey() {
          return this.track && this.track.hash ? this.track.hash : "empty";
        },
        useNativeIOSVideoPlayer() {
          if ("undefined" == typeof navigator) return !1;
          const t = navigator.userAgent || "",
            e = navigator.platform || "",
            s =
              /iPad|iPhone|iPod/i.test(t) ||
              ("MacIntel" === e && navigator.maxTouchPoints > 1),
            a =
              /Safari/i.test(t) &&
              !/CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo|GSA/i.test(t);
          return s && a;
        },
        source() {
          if (!this.track) return "";
          const t = this.$q.localStorage.getItem("jwt-token") || "";
          return this.track.mediaStreamUrl
            ? appendTokenToMediaUrl(this.track.mediaStreamUrl, t)
            : this.track.hash
              ? appendTokenToMediaUrl(`/asmr-site/api/media/stream/${this.track.hash}`, t)
              : "";
        },
        posterUrl() {
          const t = this.$q.localStorage.getItem("jwt-token") || "",
            e =
              this.metadata && this.metadata.id
                ? this.metadata.id
                : this.track && this.track.hash
                  ? this.track.hash.split("/")[0]
                  : "";
          return e ? `/asmr-site/api/cover/${e}?token=${t}` : "";
        },
        mimeType() {
          const t = P(this.trackTitle).toLowerCase();
          return (
            {
              mp4: "video/mp4",
              m4v: "video/mp4",
              webm: "video/webm",
              mov: "video/quicktime",
              mkv: "video/x-matroska",
              avi: "video/x-msvideo",
            }[t] || "video/mp4"
          );
        },
      },
      methods: {
        close() {
          this.$emit("input", !1);
        },
        download() {
          if (!this.track) return;
          const t = this.$q.localStorage.getItem("jwt-token") || "",
            e = this.track.mediaDownloadUrl
              ? appendTokenToMediaUrl(this.track.mediaDownloadUrl, t)
              : appendTokenToMediaUrl(
                  `/asmr-site/api/media/download/${this.track.hash}`,
                  t,
                ),
            s = document.createElement("a");
          ((s.href = e), (s.target = "_blank"), s.click());
        },
      },
    },
    VideoPlayerDialog = Object(g["a"])(
      VideoPlayerDialogComponent,
      VideoPlayerDialogRender,
      VideoPlayerDialogStaticRenderFns,
      !1,
      null,
      null,
      null,
    ),
    VideoPlayerDialogExport = VideoPlayerDialog.exports;
  Bt()(VideoPlayerDialog, "components", {
    QDialog: Ue["a"],
    QCard: Dt["a"],
    QBtn: zt["a"],
  });
  var Ai = {
      name: "WorkTree",
      mixins: [pe],
      components: {
        AIStatus: Si,
        ImageEditor: Li,
        VideoPlayerDialog: VideoPlayerDialogExport,
      },
      data() {
        return {
          path: [],
          internalTree: [],
          preview_img: !1,
          preview_img_fullscreen: !1,
          preview_img_mode: "page",
          edit_img: !1,
          edit_img_src: "",
          video_player: !1,
          video_player_track: null,
          preview_img_idx: 0,
	          preview_img_list: [],
	          preview_img_hash: "",
	          preview_img_prefetched: Object.create(null),
	          preview_img_src_cache: Object.create(null),
	          preview_img_zoom: 100,
	          preview_img_viewport_height: 800,
	          preview_img_listeners_active: !1,
	          preview_img_last_wheel_at: 0,
	          AILyricTaskStatus: L,
          sumAITaskStatus: L.NONE,
          checkAITaskStatusIntervalId: 0,
          checkAITaskIntervalSeconds: 10,
        };
      },
      props: {
        tree: { type: Array, required: !0 },
        metadata: { type: Object, required: !0 },
        importantTreePathArr: { type: Array, required: !0 },
      },
      watch: {
	        tree(t) {
	          ((this.internalTree = t),
	            this.initPath(),
	            this.updateTreeAITaskStatus());
	        },
        importantTreePathArr() {
          this.path = this.importantTreePathArr;
        },
	        isAdminUser(t) {
	          t && this.updateTreeAITaskStatus();
	        },
	        sumAITaskStatus(t) {
	          switch (t) {
	            case L.SUCCESS:
	            case L.ERROR:
            case L.NONE:
              this.disableIntervalCheckAITasks();
              break;
            case L.PENDING:
            case L.TRASCRIPTING:
              this.enableIntervalCheckAITasks();
	              break;
	          }
	        },
	        preview_img(t) {
	          t
	            ? (this.enablePreviewImgInput(),
	              this.updatePreviewImgViewportHeight())
	            : (this.disablePreviewImgInput(),
	              (this.preview_img_fullscreen = !1));
	        },
	      },
      computed: {
        fatherFolder() {
          let t = this.internalTree.concat();
          return (
            this.path.forEach((e) => {
              t = t.find((t) => "folder" === t.type && t.title === e).children;
            }),
            t
          );
        },
        queue() {
          const t = [];
          return (
            this.fatherFolder.forEach((e) => {
              "audio" === e.type &&
                !this.isVideoMedia(e) &&
                t.push(this.queueItemWithWorkMeta(e));
            }),
            t
          );
        },
	        preview_img_url() {
	          const t = this.preview_img_list[this.preview_img_idx];
	          return t ? this.cachedPreviewImgSrc(t) : "";
	        },
	        preview_img_name() {
	          const t = this.preview_img_list[this.preview_img_idx];
	          return t ? t.title : "";
	        },
	        preview_img_scroll_style() {
	          const t = Math.max(120, this.preview_img_viewport_height - 260),
	            e = Math.max(
	              50,
	              Math.min(200, parseInt(this.preview_img_zoom, 10) || 100),
	            ),
	            s = Math.round((t * e) / 100);
	          return {
	            display: "block",
	            width: "auto",
	            "max-width": e + "%",
	            "max-height": s + "px",
	            height: "auto",
	            "object-fit": "contain",
	            background: "#fff",
	            cursor: "pointer",
	            margin: "0 auto",
	          };
	        },
	        preview_img_page_style() {
	          const t = Math.max(
	            50,
	            Math.min(200, parseInt(this.preview_img_zoom, 10) || 100),
	          );
	          return {
	            display: "block",
	            width: "auto",
	            height: "auto",
	            "max-width": t + "%",
	            "max-height": t + "%",
	            "object-fit": "contain",
	            background: "#fff",
	            margin: "auto",
	          };
	        },
	        preview_img_fullscreen_style() {
	          return {
	            display: "block",
	            width: "auto",
	            height: "auto",
	            "max-width": "100%",
	            "max-height": "100%",
	            "object-fit": "contain",
	            background: "#fff",
	            margin: "auto",
	            "box-shadow": "0 10px 40px rgba(0,0,0,.35)",
	          };
	        },
	        preview_img_fullscreen_scroll_style() {
	          return {
	            display: "block",
	            width: "auto",
	            height: "auto",
	            "max-width": "100%",
	            "object-fit": "contain",
	            background: "#fff",
	            margin: "0 auto",
	            "box-shadow": "0 8px 28px rgba(0,0,0,.28)",
	            cursor: "pointer",
	          };
	        },
	        isAdminUser() {
          return rrIsAdminUser(this.$store.state.User);
        },
        ...Object(y["d"])("AudioPlayer", ["playing", "playWorkId"]),
        ...Object(y["b"])("AudioPlayer", ["currentPlayingFile"]),
      },
      methods: {
        formatSeconds: W,
        queueItemWithWorkMeta(t) {
          return Object.assign({}, t, {
            work_id: this.metadata.id,
            primary_work_id: this.metadata.primary_work_id || this.metadata.id,
            secondary_work_id: this.metadata.secondary_work_id || 0,
          });
        },
        isVideoMedia(t) {
          return t && "audio" === t.type && isVideoMediaTitle(t.title);
        },
        playIcon(t) {
          return this.playing && this.currentPlayingFile.hash === t
            ? "pause"
            : "play_arrow";
        },
        initPath() {
          const t = [];
          let e = this.internalTree.concat();
          while (1 === e.length) {
            if ("audio" === e[0].type) break;
            (t.push(e[0].title), (e = e[0].children));
          }
          this.path = t;
        },
        onClickBreadcrumb(t) {
          this.path = this.path.slice(0, t + 1);
        },
        folderGoUp() {
          this.path.length >= 1 &&
            (this.path = this.path.slice(0, this.path.length - 1));
        },
        onClickItem(t) {
          "folder" === t.type
            ? this.path.push(t.title)
            : "image" === t.type
              ? this.openPreviewImg(t)
              : "text" === t.type || "image" === t.type
                ? this.openFile(t)
                : "other" === t.type
                  ? this.download(t)
                  : this.isVideoMedia(t)
                    ? this.openVideoPlayer(t)
                  : this.currentPlayingFile.hash !== t.hash &&
                    this.$store.commit("AudioPlayer/SET_QUEUE", {
                      workId: this.metadata.id,
                      queue: this.queue.concat(),
                      index: this.queue.findIndex((e) => e.hash === t.hash),
                      resetPlaying: !0,
                    });
        },
        onClickPlayButton(t) {
          const e = this.fatherFolder.find((e) => e.hash === t);
          this.isVideoMedia(e)
            ? this.openVideoPlayer(e)
            : this.currentPlayingFile.hash === t
            ? this.$store.commit("AudioPlayer/TOGGLE_PLAYING")
            : this.$store.commit("AudioPlayer/SET_QUEUE", {
                workId: this.metadata.id,
                queue: this.queue.concat(),
                index: this.queue.findIndex((e) => e.hash === t),
                resetPlaying: !0,
              });
        },
        addToQueue(t) {
          if (this.isVideoMedia(t)) return this.openVideoPlayer(t);
          this.$store.commit("AudioPlayer/ADD_TO_QUEUE", this.queueItemWithWorkMeta(t));
        },
        playNext(t) {
          if (this.isVideoMedia(t)) return this.openVideoPlayer(t);
          this.$store.commit("AudioPlayer/PLAY_NEXT", this.queueItemWithWorkMeta(t));
        },
        openVideoPlayer(t) {
          ((this.video_player_track = t), (this.video_player = !0));
        },
        download(t) {
          const e = this.$q.localStorage.getItem("jwt-token") || "",
            s = t.mediaDownloadUrl
              ? appendTokenToMediaUrl(t.mediaDownloadUrl, e)
              : appendTokenToMediaUrl(`/asmr-site/api/media/download/${t.hash}`, e),
            a = document.createElement("a");
          ((a.href = s), (a.target = "_blank"), a.click());
        },
        async translateCwd() {
          if (!this.isAdminUser) return;
          for (const t of this.fatherFolder)
            "audio" === t.type && (await this.aiTranslateToServer(t));
        },
        async aiTranslateToServer(t) {
          if (!this.isAdminUser) return;
          try {
            (await A.translateAudio(t.hash),
              await this.enableIntervalCheckAITasks());
          } catch (e) {
            e.response
              ? 401 !== e.response.status &&
                this.showErrNotif(
                  e.response.data.error ||
                    `${e.response.status} ${e.response.statusText}`,
                )
              : this.showErrNotif(e.message || e);
          }
        },
        setVisualPlayerCover(t) {
          if (!t) return;
          const e = withMediaFileBaseUrl(
            t.mediaDownloadUrl ? "" + t.mediaDownloadUrl : "/asmr-site/api/media/download/" + t.hash,
          );
          (this.$store.commit("AudioPlayer/SET_VISUAL_PLAYER_COVER_URL", e),
            this.$q.notify({
              message: "封面设置成功",
              actions: [
                {
                  label: "前往大屏页面",
                  handler: () => {
                    this.$router.push("/fullScreenPlayer");
                  },
                },
              ],
            }));
        },
        openFile(t) {
          const e = this.$q.localStorage.getItem("jwt-token") || "",
            s = t.mediaStreamUrl
              ? appendTokenToMediaUrl(t.mediaStreamUrl, e)
              : appendTokenToMediaUrl(`/asmr-site/api/media/stream/${t.hash}`, e),
            a = document.createElement("a");
          ((a.href = s), (a.target = "_blank"), a.click());
        },
	        imgSrc(t) {
	          const e = this.$q.localStorage.getItem("jwt-token") || "",
	            s = t.title
	              ? encodeURIComponent(String(t.title).split(/[/\\]/).pop())
	              : "image",
	            a = t.mediaStreamUrl
	              ? `${t.mediaStreamUrl}`
	              : `/asmr-site/api/media/stream/${t.hash}/${s}`,
	            i =
	              /^\/api\/media\/stream\//.test(a) &&
	              !/\.(jpe?g|png|webp|gif|bmp)(?:\?|$)/i.test(a)
	                ? `${a.replace(/\/$/, "")}/${s}`
	                : a,
	            r = i;
	          return appendTokenToMediaUrl(r, e);
	        },
	        cachedPreviewImgSrc(t) {
	          if (!t) return "";
	          const e = t.hash || t.mediaStreamUrl || t.title,
	            s = e && this.preview_img_src_cache[e];
	          if (s) return s;
	          const a = this.imgSrc(t);
	          return (e && (this.preview_img_src_cache[e] = a), a);
	        },
	        getSavedPreviewImgMode() {
	          const t = this.$q.localStorage.getItem("work-preview-img-mode");
	          return "scroll" === t ? "scroll" : "page";
	        },
	        getSavedPreviewImgZoom() {
	          const t = parseInt(
	            this.$q.localStorage.getItem("work-preview-img-zoom"),
	            10,
	          );
	          return isNaN(t) ? 100 : Math.max(50, Math.min(200, t));
	        },
	        setPreviewImgMode(t) {
	          ((this.preview_img_mode = "scroll" === t ? "scroll" : "page"),
	            this.$q.localStorage.set(
	              "work-preview-img-mode",
	              this.preview_img_mode,
	            ),
	            this.$nextTick(() => {
	              this.preview_img_mode === "scroll"
	                ? (this.updatePreviewImgViewportHeight(),
	                  this.preloadAllPreviewImages(),
	                  this.scrollPreviewImageIntoView())
	                : this.preloadPreviewImageNeighbors();
	            }));
	        },
	        setPreviewImgZoom(t) {
	          const e = parseInt(t, 10),
	            s = isNaN(e) ? 100 : Math.max(50, Math.min(200, e));
	          ((this.preview_img_zoom = s),
	            this.$q.localStorage.set("work-preview-img-zoom", s));
	        },
	        preloadPreviewImage(t) {
	          if (!t) return;
	          const e = this.cachedPreviewImgSrc(t);
	          if (!e) return;
	          if (this.preview_img_prefetched[e]) return;
	          const s = new Image();
	          ((this.preview_img_prefetched[e] = s), (s.src = e));
	        },
        preloadPreviewImageNeighbors() {
          if (!this.preview_img_list.length) return;
          const t = this.preview_img_list.length;
          for (let e = -2; e <= 2; e++) {
            const s = (t + this.preview_img_idx + e) % t;
            this.preloadPreviewImage(this.preview_img_list[s]);
          }
        },
        preloadAllPreviewImages() {
          this.preview_img_list.forEach((t) => {
            this.preloadPreviewImage(t);
          });
        },
	        scrollPreviewImageIntoView() {
	          this.$nextTick(() => {
	            const t = document.getElementById(
	              `preview-img-item-${this.preview_img_idx}`,
	            );
            t &&
              t.scrollIntoView({
                behavior: "smooth",
                block: "center",
	              });
	          });
	        },
	        updatePreviewImgViewportHeight() {
	          "undefined" != typeof window &&
	            (this.preview_img_viewport_height =
	              window.innerHeight || this.preview_img_viewport_height);
	        },
	        enablePreviewImgInput() {
	          if (
	            this.preview_img_listeners_active ||
	            "undefined" == typeof window
	          )
	            return;
	          (window.addEventListener("keydown", this.onPreviewImgKeydown),
	            window.addEventListener("wheel", this.onPreviewImgWheel, {
	              passive: !1,
	            }),
	            window.addEventListener(
	              "resize",
	              this.updatePreviewImgViewportHeight,
	            ),
	            (this.preview_img_listeners_active = !0));
	        },
	        disablePreviewImgInput() {
	          if (
	            !this.preview_img_listeners_active ||
	            "undefined" == typeof window
	          )
	            return;
	          (window.removeEventListener("keydown", this.onPreviewImgKeydown),
	            window.removeEventListener("wheel", this.onPreviewImgWheel),
	            window.removeEventListener(
	              "resize",
	              this.updatePreviewImgViewportHeight,
	            ),
	            (this.preview_img_listeners_active = !1));
	        },
	        isPreviewImgTextInput(t) {
	          const e = t && t.target,
	            s = e && e.tagName;
	          return (
	            e &&
	            (e.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(s))
	          );
	        },
	        onPreviewImgKeydown(t) {
	          if (this.preview_img_fullscreen && "Escape" === (t.code || t.key)) {
	            ((this.preview_img_fullscreen = !1),
	              t.preventDefault(),
	              t.stopPropagation());
	            return;
	          }
	          if (
	            !this.preview_img ||
	            "page" !== this.preview_img_mode ||
	            this.isPreviewImgTextInput(t)
	          )
	            return;
	          switch (t.code || t.key) {
	            case "ArrowLeft":
	            case "ArrowUp":
	              this.changePreviewImg(!1);
	              break;
	            case "ArrowRight":
	            case "ArrowDown":
	              this.changePreviewImg(!0);
	              break;
	            default:
	              return;
	          }
	          (t.preventDefault(), t.stopPropagation());
	        },
	        onPreviewImgWheel(t) {
	          if (!this.preview_img || "page" !== this.preview_img_mode) return;
	          const e = Math.abs(t.deltaY) >= Math.abs(t.deltaX) ? t.deltaY : t.deltaX;
	          if (Math.abs(e) < 20) return;
	          const s = Date.now();
	          if (s - this.preview_img_last_wheel_at < 180)
	            return void t.preventDefault();
	          ((this.preview_img_last_wheel_at = s),
	            this.changePreviewImg(e > 0),
	            t.preventDefault(),
	            t.stopPropagation());
	        },
	        originalImgSrc(t) {
          const e = this.$q.localStorage.getItem("jwt-token") || "",
            s = t.mediaStreamUrl
              ? appendTokenToMediaUrl(t.mediaStreamUrl, e)
              : appendTokenToMediaUrl(`/asmr-site/api/media/stream/${t.hash}`, e);
          return s;
        },
	        openPreviewImgFullscreen() {
	          this.preview_img_url &&
	            ((this.preview_img_fullscreen = !0),
	            "scroll" === this.preview_img_mode &&
	              this.$nextTick(() => {
	                const t = document.getElementById(
	                  `preview-img-fullscreen-item-${this.preview_img_idx}`,
	                );
	                t && t.scrollIntoView({ behavior: "auto", block: "center" });
	              }));
	        },
	        closePreviewImgFullscreen() {
	          this.preview_img_fullscreen = !1;
	        },
        openPreviewImg(t) {
          const e = this.fatherFolder.filter((t) => "image" === t.type);
          let s = -1;
          (e.forEach((e, a) => {
            e.hash === t.hash && (s = a);
          }),
	            (this.preview_img = !0),
	            (this.preview_img_fullscreen = !1),
	            (this.preview_img_list = e),
	            (this.preview_img_idx = s),
	            (this.preview_img_zoom = this.getSavedPreviewImgZoom()),
	            (this.preview_img_mode = this.getSavedPreviewImgMode()),
	            this.updatePreviewImgViewportHeight(),
	            this.preview_img_mode === "scroll"
	              ? this.preloadAllPreviewImages()
	              : this.preloadPreviewImageNeighbors());
        },
        changePreviewImg(t) {
          if (this.preview_img_list.length <= 1) return;
          const e = this.preview_img_list.length;
          ((this.preview_img_idx =
            (e + this.preview_img_idx + (t ? 1 : -1)) % e),
            this.preview_img_mode === "scroll"
              ? this.scrollPreviewImageIntoView()
              : this.preloadPreviewImageNeighbors());
        },
        editImg(t) {
          if (!this.isAdminUser) return;
          ((this.edit_img_src = this.originalImgSrc(t)), (this.edit_img = !0));
        },
	        async updateTreeAITaskStatus() {
	          console.log("检查翻译进度");
	          const t = await A.searchWorkTaskStatus(this.metadata.id),
	            [e, s] = this.updateAiTranslateStatusToTracks(t, this.internalTree);
	          ((this.internalTree = e), (this.sumAITaskStatus = s));
	        },
        updateAiTranslateStatusToTracks(t, e) {
          function s(t, e) {
            if (0 == t.length) return L.NONE;
            const s = t.includes(L.TRASCRIPTING),
              a = t.includes(L.SUCCESS),
              i = t.includes(L.ERROR),
              r = t.includes(L.PENDING);
            if (s) return L.TRASCRIPTING;
            if (r) return L.PENDING;
            if (e) {
              if (a) return L.SUCCESS;
              if (i) return L.ERROR;
            } else {
              if (i) return L.ERROR;
              if (a) return L.SUCCESS;
            }
            return L.NONE;
          }
          const a = [],
            i = e.map((e, i) => {
              const r = I(e.title);
              switch (e.type) {
                case "folder": {
                  const s = Object.assign({}, e),
                    [i, r] = this.updateAiTranslateStatusToTracks(
                      t,
                      e.children,
                    );
                  return (a.push(r), (s.status = r), (s.children = i), s);
                }
                case "audio": {
                  const i = t.filter((t) => R(r, t.fileName)),
                    o = s(
                      i.map((t) => t.status),
                      !0,
                    ),
                    n = Object.assign({}, e);
                  return ((n.tasks = i), (n.status = o), a.push(o), n);
                }
                default:
                  return Object.assign({ status: L.NONE, tasks: [] }, e);
              }
            });
          return [i, s(a, !1)];
        },
	        async checkAITaskStatus() {
	          const t = await A.searchWorkTaskStatus(this.metadata.id),
	            [e, s] = this.updateAiTranslateStatusToTracks(t, this.internalTree);
	          ((this.internalTree = e), (this.sumAITaskStatus = s));
	        },
	        async enableIntervalCheckAITasks() {
	          (this.checkAITaskStatusIntervalId > 0 &&
            clearInterval(this.checkAITaskStatusIntervalId),
            console.log("定期检查ai歌词翻译进度"),
            await this.updateTreeAITaskStatus(),
            (this.checkAITaskStatusIntervalId = setInterval(
              () => this.updateTreeAITaskStatus(),
              1e3 * this.checkAITaskIntervalSeconds,
            )));
        },
        disableIntervalCheckAITasks() {
          (console.log("取消定期检查ai歌词翻译进度"),
            clearInterval(this.checkAITaskStatusIntervalId),
            (this.checkAITaskStatusIntervalId = 0));
        },
      },
      created() {
        this.updateTreeAITaskStatus = Object(Pt["a"])(
          this.updateTreeAITaskStatus,
          500,
        );
      },
	      mounted() {
	        ((this.internalTree = this.tree),
	          this.updateTreeAITaskStatus());
	      },
	      beforeDestroy() {
	        (this.disablePreviewImgInput(), this.disableIntervalCheckAITasks());
	      },
    },
    $i = Ai,
    Oi = s("ead5"),
    Ni = s("079e"),
    Mi = Object(g["a"])($i, fi, vi, !1, null, null, null),
    Ri = Mi.exports;
  (Bt()(Mi, "components", {
    QBreadcrumbs: Oi["a"],
    QBreadcrumbsEl: Ni["a"],
    QBtn: zt["a"],
    QBtnToggle: za["a"],
    QDialog: Ue["a"],
    QCard: Dt["a"],
	    QCardSection: Re["a"],
	    QImg: Ut["a"],
	    QSlider: ve["a"],
	    QCardActions: ze["a"],
    QList: De["a"],
    QItem: Ft["a"],
    QItemSection: Qt["a"],
    QIcon: Qe["a"],
    QItemLabel: Wt["a"],
    QMenu: Je["a"],
  }),
    Bt()(Mi, "directives", { ClosePopup: je["a"], Ripple: Be["a"] }));
  var Di = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s("div", [
        t.worksWithoutSelf.length > 1
          ? s(
              "div",
              { staticClass: "q-mt-sm q-px-sm" },
              [
                s(
                  "q-list",
                  { attrs: { bordered: "", separator: "" } },
                  [
                    s("q-item-label", { attrs: { header: "" } }, [
                      t._v("关联作品"),
                    ]),
                    t._l(t.worksWithoutSelf, function (e) {
                      return s(
                        "q-item",
                        {
                          key: e.id,
                          attrs: {
                            to: t.workRoute(e),
                            disable: e.id == t.metadata.id,
                          },
                        },
                        [
                          s(
                            "q-item-section",
                            [
                              s("q-item-label", [
                                t._v(
	                                  "\n          " +
	                                    t._s(t.formatWorkCodePair(e)) +
	                                    "\n          ",
                                ),
                              ]),
                              s("q-item-label", { attrs: { caption: "" } }, [
                                t._v(t._s(e.name)),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      );
                    }),
                  ],
                  2,
                ),
              ],
              1,
            )
          : t._e(),
      ]);
    },
    Fi = [],
    Qi = {
      name: "RelatedWorks",
      mixins: [pe],
      props: { metadata: { type: Object, required: !0 } },
	      data() {
	        return { idNumberToCode: T };
      },
      computed: {
        worksWithoutSelf() {
          return this.metadata.relatedWorks ? this.metadata.relatedWorks : [];
        },
      },
      mounted() {},
	      methods: { formatWorkCodePair },
    },
    Ui = Qi,
    Wi = Object(g["a"])(Ui, Di, Fi, !1, null, null, null),
    zi = Wi.exports;
  Bt()(Wi, "components", {
    QList: De["a"],
    QItemLabel: Wt["a"],
    QItem: Ft["a"],
    QItemSection: Qt["a"],
  });
  var ji = {
      name: "Work",
      mixins: [pe],
	      components: { WorkDetails: gi, WorkTree: Ri, RelatedWorks: zi },
	      data() {
	        const t = workIdFromRouteValue(this.$route.params.id);
        return {
          workid: t,
          metadata: { id: t, circle: {} },
          tree: [],
          importantTreePathArr: [],
          requestSeq: 0,
        };
      },
      computed: { ...Object(y["d"])("AudioPlayer", ["playing", "playWorkId"]) },
	      watch: {
	        $route(t) {
	          this.resolveWorkRoute(t.params.id) &&
	            ((this.metadata.state = null), this.requestData());
	        },
	        metadata() {},
	      },
	      created() {
	        this.resolveWorkRoute(this.$route.params.id) && this.requestData();
	      },
	      methods: {
	        resolveWorkRoute(t) {
	          const e = parseWorkRouteValue(t);
	          if (!e) {
	            (this.showErrNotif("无效作品ID"), this.$router.replace("/"));
	            return !1;
	          }
		          if (((this.workid = e.id), e.hasSuffix)) {
		            this.$router.replace({ path: "/work/" + e.id, query: this.$route.query });
		            return !1;
		          }
		          return !0;
		        },
	        async requestMetaData() {
	          const t = this.requestSeq;
	          try {
	            const e = await rrRetryRequest(
	              () =>
	                this.$axios.get("/asmr-site/api/work/" + this.workid, {
	                  params: { t: this.$route.query.t || "" },
	                }),
	              { retries: 2, delay: 300 },
	            );
	            if (t !== this.requestSeq) return !1;
	            ((this.metadata = e.data),
	              (this.workid = this.metadata.id),
	              formatWorkTitleForDocument(this.metadata) &&
	                (document.title = formatWorkTitleForDocument(this.metadata)),
		              this.metadata.state &&
		                0 == this.playWorkId &&
		                this.resumeMetadataPlayHistroy());
		            return !0;
	          } catch (e) {
	            if (t !== this.requestSeq) return !1;
	            e.response
	              ? this.showErrNotif(
                  e.response.data.error ||
                    `${e.response.status} ${e.response.statusText}`,
                )
	              : this.showErrNotif(e.message || e);
	            return !1;
	          }
	        },
        async requestTracks() {
          const t = this.requestSeq;
          try {
            const e = await rrRetryRequest(
              () => this.$axios.get("/asmr-site/api/tracks/" + this.workid),
              { retries: 2, delay: 300 },
            );
            if (t !== this.requestSeq) return;
            ((this.tree = e.data), (this.importantTreePathArr = V(e.data)));
          } catch (e) {
            if (t !== this.requestSeq) return;
            e.response
              ? this.showErrNotif(
                  e.response.data.error ||
                    `${e.response.status} ${e.response.statusText}`,
                )
              : this.showErrNotif(e.message || e);
          }
        },
	        async requestData() {
	          const t = ++this.requestSeq;
	          (await this.requestMetaData(t)) && t === this.requestSeq && this.requestTracks(t);
        },
        resumeMetadataPlayHistroy() {
          if (
            this.metadata.state.queue &&
            this.metadata.state.queue[this.metadata.state.index] &&
            isVideoMediaTitle(this.metadata.state.queue[this.metadata.state.index].title)
          )
            return;
          (this.$store.commit("AudioPlayer/SET_QUEUE", {
            workId: this.metadata.id,
            queue: this.metadata.state.queue,
            index: this.metadata.state.index,
            resetPlaying: !1,
            resumeHistroySeconds: this.metadata.state.seconds,
          }),
            console.log("resume seconds = " + this.metadata.state.seconds));
        },
        translateCwd() {
          this.$refs.workTree.translateCwd();
        },
      },
    },
    Bi = ji,
    Vi = Object(g["a"])(Bi, Ga, Ya, !1, null, null, null),
    Hi = Vi.exports,
    Gi = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s("div", [
        s("div", { staticClass: "text-h5 text-weight-regular q-ma-md" }, [
          t._v("\n    All " + t._s(t.restrict) + "s\n  "),
        ]),
        s("div", { staticClass: "row justify-center q-pb-xl q-pt-none" }, [
          s(
            "div",
            { staticClass: "col-11" },
            [
              s("q-input", {
                staticClass: "q-mb-md",
                attrs: {
                  dense: "",
                  rounded: "",
                  outlined: "",
                  placeholder: "Search for a " + t.restrict + "...",
                },
                scopedSlots: t._u([
                  {
                    key: "append",
                    fn: function () {
                      return [
                        "" === t.keyword
                          ? s("q-icon", { attrs: { name: "search" } })
                          : s("q-icon", {
                              staticClass: "cursor-pointer",
                              attrs: { name: "clear" },
                              on: {
                                click: function (e) {
                                  t.keyword = "";
                                },
                              },
                            }),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
                model: {
                  value: t.keyword,
                  callback: function (e) {
                    t.keyword = e;
                  },
                  expression: "keyword",
                },
              }),
              s(
                "div",
                { staticClass: "row justify-center q-gutter-sm" },
                t._l(t.keyword ? t.filteredItems : t.items, function (e) {
                  return s(
                    "div",
                    { key: e.id, staticClass: "col-auto" },
                    [
                      s("q-btn", {
                        attrs: {
                          "no-caps": "",
                          rounded: "",
                          color: "primary",
                          label: e.name + " (" + e.count + ")",
                          to: "/works?" + t.queryField + "=" + e.id,
                        },
                      }),
                    ],
                    1,
                  );
                }),
                0,
              ),
            ],
            1,
          ),
        ]),
      ]);
    },
    Yi = [],
    Ki = {
      name: "List",
      mixins: [pe],
      props: { restrict: { type: String } },
      data() {
        return { items: [], keyword: "" };
      },
      created() {
        this.requestList();
      },
      computed: {
        url() {
          return `/asmr-site/api/${this.restrict}/`;
        },
        queryField() {
          switch (this.restrict) {
            case "circles":
              return "circleId";
            case "tags":
              return "tagId";
            case "vas":
              return "vaId";
            default:
              return "circleId";
          }
        },
        filteredItems() {
          return this.items.filter(
            (t) =>
              -1 !== t.name.toLowerCase().indexOf(this.keyword.toLowerCase()),
          );
        },
      },
      watch: {
        url() {
          this.requestList();
        },
      },
      methods: {
        requestList() {
          this.$axios
            .get(this.url)
            .then((t) => {
              this.items = t.data.concat();
            })
            .catch((t) => {
              t.response
                ? 401 !== t.response.status &&
                  this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t);
            });
        },
      },
    },
    Ji = Ki,
    Zi = Object(g["a"])(Ji, Gi, Yi, !1, null, null, null),
    Xi = Zi.exports;
  Bt()(Zi, "components", { QInput: We["a"], QIcon: Qe["a"], QBtn: zt["a"] });
  var tr = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-form",
        {
          staticClass: "absolute-center\tq-gutter-md",
          staticStyle: { width: "260px" },
          on: { submit: t.onSubmit },
        },
        [
          s("q-input", {
            staticClass: "fit",
            attrs: {
              filled: "",
              label: "用户名",
              "lazy-rules": "",
              rules: [
                function (t) {
                  return t.length >= 5 || "密码长度至少为 5";
                },
              ],
            },
            model: {
              value: t.name,
              callback: function (e) {
                t.name = e;
              },
              expression: "name",
            },
          }),
          s("q-input", {
            staticClass: "fit",
            attrs: {
              filled: "",
              type: "password",
              label: "密码",
              "lazy-rules": "",
              rules: [
                function (t) {
                  return t.length >= 5 || "密码长度至少为 5";
                },
              ],
            },
            model: {
              value: t.password,
              callback: function (e) {
                t.password = e;
              },
              expression: "password",
            },
          }),
          s("q-btn", {
            staticClass: "fit",
            attrs: { label: "登录", type: "submit", color: "primary" },
          }),
        ],
        1,
      );
    },
    er = [];
  function sr(t) {
    _.a.defaults.headers["Authorization"] = "Bearer " + t;
  }
  const rrVisitorIdStorageKey = "kikoeru-browser-visitor-id";
  function rrCreateVisitorId() {
    const t =
      "undefined" !== typeof crypto && crypto.getRandomValues
        ? Array.from(crypto.getRandomValues(new Uint8Array(16)))
            .map((t) => t.toString(16).padStart(2, "0"))
            .join("")
        : `${Date.now().toString(36)}${Math.random()
            .toString(36)
            .slice(2)}${Math.random().toString(36).slice(2)}`;
    return t.slice(0, 64);
  }
  function rrGetVisitorId() {
    let t = n["a"].getItem(rrVisitorIdStorageKey);
    return (
      /^[A-Za-z0-9_-]{12,80}$/.test(t) ||
        ((t = rrCreateVisitorId()), n["a"].set(rrVisitorIdStorageKey, t)),
      t
    );
  }
  ((_.a.defaults.headers["Content-Type"] = "application/json"),
    (_.a.defaults.headers["X-Kikoeru-Visitor"] = rrGetVisitorId()),
    (_.a.defaults.headers["Authorization"] = n["a"].getItem("jwt-token")
      ? "Bearer " + n["a"].getItem("jwt-token")
      : ""),
    (a["default"].prototype.$axios = _.a));
  let rrAdminLoginPromise = null;
  function rrIsAdminUser(t) {
    return !!t && ("admin" === t.name || "administrator" === t.group);
  }
  function rrCommitAdminUser() {
    if ("undefined" !== typeof window && window.__kikoeruStore) {
      (window.__kikoeruStore.commit("User/INIT", {
        name: "admin",
        group: "administrator",
      }),
        window.__kikoeruStore.commit("User/SET_AUTH", !0));
    }
  }
  async function rrRequireAdmin() {
    try {
      (await _.a.get("/asmr-site/api/config/admin"), rrCommitAdminUser());
      return !0;
    } catch (t) {
      return !1;
    }
  }
  function rrRequestAdminLogin() {
    if (rrAdminLoginPromise) return rrAdminLoginPromise;
    return (rrAdminLoginPromise = new Promise((t) => {
      d["a"]
        .create({
          title: "管理员登录",
          message: "需要管理员权限才能继续",
          prompt: { model: "", type: "password", label: "管理员密码" },
          cancel: "取消",
          ok: "登录",
          persistent: !0,
        })
        .onOk((e) => {
          _.a
            .post("/asmr-site/api/auth/me", { name: "admin", password: e })
            .then((e) => {
              (n["a"].set("jwt-token", e.data.token),
                sr(e.data.token),
                rrCommitAdminUser(),
                c["a"].create({
                  message: "管理员登录成功",
                  color: "positive",
                  icon: "done",
                  timeout: 500,
                }),
                (rrAdminLoginPromise = null),
                t(!0));
            })
            .catch((e) => {
              (c["a"].create({
                message:
                  e.response && e.response.data
                    ? e.response.data.error || "管理员登录失败"
                    : e.message || "管理员登录失败",
                color: "negative",
                icon: "bug_report",
              }),
                (rrAdminLoginPromise = null),
                t(!1));
            });
        })
        .onCancel(() => {
          ((rrAdminLoginPromise = null), t(!1));
        });
    }));
  }
  _.a.interceptors.response.use(
    (t) => t,
    async (t) => {
      const e = t.response && t.response.data;
      if (e && e.requireAdminLogin && t.config && !t.config.__adminLoginTried) {
        const e = await rrRequestAdminLogin();
        if (e) {
          return (
            (t.config.__adminLoginTried = !0),
            (t.config.headers = t.config.headers || {}),
            (t.config.headers.Authorization =
              _.a.defaults.headers["Authorization"]),
            _.a(t.config)
          );
        }
      }
      return Promise.reject(t);
    },
  );
  var ar = {
      mixins: [pe],
      data() {
        return { name: "", password: "" };
      },
      methods: {
        onSubmit() {
          this.$axios
            .post("/asmr-site/api/auth/me", { name: this.name, password: this.password })
            .then((t) => {
              try {
                (this.$q.localStorage.set("jwt-token", t.data.token),
                  sr(t.data.token),
                  this.showSuccNotif("登录成功."),
                  this.$router.push("/"));
              } catch (e) {
                this.showErrNotif(e.message);
              }
            })
            .catch((t) => {
              t.response
                ? 401 === t.response.status
                  ? this.showWarnNotif(t.response.data.error)
                  : this.showErrNotif(
                      t.response.data.error ||
                        `${t.response.status} ${t.response.statusText}`,
                    )
                : this.showErrNotif(t.message || t);
            });
        },
      },
    },
    ir = ar,
    rr = s("0378"),
    or = Object(g["a"])(ir, tr, er, !1, null, null, null),
    nr = or.exports;
  Bt()(or, "components", { QForm: rr["a"], QInput: We["a"], QBtn: zt["a"] });
  var lr = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s("q-page", { attrs: { padding: "" } }, [
        s(
          "div",
          { staticClass: "fit row wrap justify-between items-start q-px-sm" },
          [
            s(
              "div",
              { staticClass: "col-lg-3 col-sm-12 col-xs-12" },
              [
                s("q-btn-toggle", {
                  staticClass: "text-bold outline-style",
                  attrs: {
                    spread: "",
                    "no-caps": "",
                    rounded: "",
                    "toggle-color": "primary",
                    options: [
                      { label: "播放历史", value: "histroy" },
                      { label: "我的评价", value: "review" },
                      { label: "我的进度", value: "progress" },
                      { label: "分类整理", value: "folder" },
                    ],
                  },
                  on: { input: t.changeMode },
                  model: {
                    value: t.mode,
                    callback: function (e) {
                      t.mode = e;
                    },
                    expression: "mode",
                  },
                }),
              ],
              1,
            ),
            "histroy" != t.mode
              ? s(
                  "div",
                  { staticClass: "col-auto row q-pt-md" },
                  [
                    s("q-select", {
                      attrs: {
                        dense: "",
                        rounded: "",
                        outlined: "",
                        options: t.sortOptions,
                      },
                      model: {
                        value: t.sortBy,
                        callback: function (e) {
                          t.sortBy = e;
                        },
                        expression: "sortBy",
                      },
                    }),
                    s("q-btn", {
                      staticClass: "q-ml-sm",
                      attrs: {
                        disable: t.sortButtonDisabled,
                        dense: "",
                        round: "",
                        outline: "",
                        padding: "sm",
                        icon: t.direction ? "arrow_downward" : "arrow_upward",
                      },
                      on: { click: t.switchSortMode },
                    }),
                  ],
                  1,
                )
              : t._e(),
          ],
        ),
        "progress" === t.mode
          ? s(
              "div",
              { staticClass: "q-px-sm q-pt-md" },
              [
                s("q-btn-toggle", {
                  staticClass: "outline-style",
                  attrs: {
                    "toggle-color": "primary",
                    rounded: "",
                    options: [
                      { label: "想听", value: "marked" },
                      { label: "在听", value: "listening" },
                      { label: "听过", value: "listened" },
                      { label: "重听", value: "replay" },
                      { label: "搁置", value: "postponed" },
                    ],
                  },
                  on: { input: t.changeProgressFilter },
                  model: {
                    value: t.progressFilter,
                    callback: function (e) {
                      t.progressFilter = e;
                    },
                    expression: "progressFilter",
                  },
                }),
              ],
              1,
            )
          : t._e(),
        s("div", [
          s(
            "div",
            { staticClass: "q-px-sm q-pt-md" },
            [
              "folder" !== t.mode
                ? s(
                    "q-infinite-scroll",
                    {
                      ref: "scroll",
                      attrs: { offset: 500, disable: t.stopLoad },
                      on: { load: t.onLoad },
                      scopedSlots: t._u(
                        [
                          {
                            key: "loading",
                            fn: function () {
                              return [
                                s(
                                  "div",
                                  { staticClass: "row justify-center q-my-md" },
                                  [
                                    s("q-spinner-dots", {
                                      attrs: { color: "primary", size: "40px" },
                                    }),
                                  ],
                                  1,
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                        ],
                        null,
                        !1,
                        3159847669,
                      ),
                    },
                    [
                      0 === t.works.length
                        ? s(
                            "div",
                            { staticClass: "row justify-center text-grey" },
                            [
                              t._v(
                                "在作品界面上点击星标、标记进度，标记的音声就会出现在这里啦",
                              ),
                            ],
                          )
                        : t._e(),
                      t.works.length
                        ? s(
                            "q-list",
                            {
                              staticClass: "shadow-2",
                              attrs: { bordered: "", separator: "" },
                            },
                            t._l(t.works, function (e) {
                              return s("FavListItem", {
                                key: e.id,
                                attrs: {
                                  workid: e.id,
                                  metadata: e,
                                  mode: t.mode,
                                },
                                on: {
                                  reset: function (e) {
                                    return t.reset();
                                  },
                                },
                              });
                            }),
                            1,
                          )
                        : t._e(),
                    ],
                    1,
                  )
                : s("div", { staticClass: "row justify-center text-grey" }, [
                    t._v("尚未实现，敬请期待"),
                  ]),
            ],
            1,
          ),
        ]),
      ]);
    },
    cr = [],
    dr = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-item",
        { staticClass: "row", attrs: { clickable: "" } },
        [
          s(
            "q-item-section",
            { staticClass: "col-auto", attrs: { top: "" } },
            [
              s(
                "router-link",
                { attrs: { to: t.workRoute(t.metadata) } },
                [
                  s("q-img", {
                    staticStyle: { height: "120px", width: "160px" },
                    attrs: { transition: "fade", src: t.coverUrl },
                  }),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-item-section",
            {
              staticClass: "q-gutter-y-xs column items-start",
              attrs: { top: "" },
              on: {
                click: function (e) {
                  if (e.target !== e.currentTarget) return null;
                  t.showReviewDialog = "histroy" != t.mode;
                },
              },
            },
            [
              s(
                "q-item-label",
                { staticClass: "text-body2", attrs: { lines: "2" } },
                [
                  s(
                    "router-link",
                    {
                      staticClass: "col-auto text-secondary",
                      attrs: { to: t.workRoute(t.metadata) },
                    },
                    [
                      t._v(
                        "\n          " + t._s(t.metadata.title) + "\n        ",
                      ),
                    ],
                  ),
                ],
                1,
              ),
              s(
                "div",
                { staticClass: "row q-gutter-x-sm col-auto" },
                [
                  s(
                    "router-link",
                    {
                      staticClass: "col-auto text-grey",
                      attrs: { to: "/works?circleId=" + t.metadata.circle.id },
                    },
                    [
                      t._v(
                        "\n          " +
                          t._s(t.metadata.circle.name) +
                          "\n        ",
                      ),
                    ],
                  ),
                  s("span", { staticClass: "col-auto" }, [t._v("/")]),
                  s("span", { staticClass: "col-auto text-grey" }, [
                    t._v(" " + t._s(t.metadata.release)),
                  ]),
                  s("span", { staticClass: "col-auto" }, [t._v("/")]),
                  t._l(t.metadata.vas, function (e, a) {
                    return s(
                      "router-link",
                      {
                        key: a,
                        staticClass: "col-auto text-primary",
                        attrs: { to: "/works?vaId=" + e.id },
                      },
                      [t._v("\n          " + t._s(e.name) + "\n        ")],
                    );
                  }),
                ],
                2,
              ),
              s(
                "div",
                { staticClass: "row items-center q-gutter-x-xs" },
                [
                  t.hideRating
                    ? t._e()
                    : s("q-rating", {
                        staticClass: "col-auto",
                        attrs: {
                          size: "sm",
                          color: "blue",
                          icon: "star_border",
                          "icon-selected": "star",
                          "icon-half": "star_half",
                        },
                        on: { input: t.setRating },
                        model: {
                          value: t.rating,
                          callback: function (e) {
                            t.rating = e;
                          },
                          expression: "rating",
                        },
                      }),
                  s("span", { staticClass: "col-auto text-grey " }, [
                    t._v(t._s(t.metadata.review_updated_at)),
                  ]),
                ],
                1,
              ),
              "review" === t.mode
                ? s(
                    "q-item-label",
                    { staticClass: "q-pt-sm" },
                    [
                      s(
                        "q-card",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.metadata.review_text,
                              expression: "metadata.review_text",
                            },
                          ],
                          staticClass: "my-card col-auto",
                          on: {
                            click: function (e) {
                              t.showReviewDialog = !0;
                            },
                          },
                        },
                        [
                          s("q-card-section", { staticClass: "q-pa-sm" }, [
                            s("pre", { staticClass: "q-ma-none" }, [
                              t._v(t._s(t.metadata.review_text)),
                            ]),
                          ]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  )
                : t._e(),
              "histroy" === t.mode
                ? s("div", { staticClass: "full-width" }, [
                    s(
                      "div",
                      { staticClass: "full-width" },
                      [
                        s("q-btn", {
                          staticClass: "full-width",
                          attrs: { color: "primary", label: "从历史播放" },
                          on: {
                            click: function (e) {
                              return t.playHistroy(
                                t.metadata.id,
                                t.metadata.state,
                              );
                            },
                          },
                        }),
                      ],
                      1,
                    ),
                    s(
                      "div",
                      [
                        s("span", { staticClass: "text-accent" }, [
                          t._v("进度："),
                        ]),
                        s("q-badge", { attrs: { color: "purple" } }, [
                          t._v(
                            t._s(t.metadata.state.index + 1) +
                              " / " +
                              t._s(t.metadata.state.queue.length),
                          ),
                        ]),
                        s("q-badge", { attrs: { color: "blue" } }, [
                          t._v(
                            t._s(
                              t.humanReadableSeconds(t.metadata.state.seconds),
                            ),
                          ),
                        ]),
                        s("span", { staticClass: "text-grey" }, [
                          t._v(
                            "\n            " +
                              t._s(
                                t.metadata.state.queue[t.metadata.state.index]
                                  .title,
                              ) +
                              "\n          ",
                          ),
                        ]),
                      ],
                      1,
                    ),
                  ])
                : t._e(),
              "progress" === t.mode
                ? s(
                    "q-item-label",
                    { staticClass: "q-pt-xs" },
                    [
                      "progress" === t.mode
                        ? s("q-btn-toggle", {
                            staticClass: "q-pa-sm",
                            attrs: {
                              dense: "",
                              "no-caps": "",
                              rounded: "",
                              "toggle-color": "primary",
                              color: "white",
                              "text-color": "black",
                              options: [
                                { label: "想听", value: "marked" },
                                { label: "在听", value: "listening" },
                                { label: "听过", value: "listened" },
                                { label: "重听", value: "replay" },
                                { label: "搁置", value: "postponed" },
                              ],
                            },
                            on: { input: t.setProgress },
                            model: {
                              value: t.progress,
                              callback: function (e) {
                                t.progress = e;
                              },
                              expression: "progress",
                            },
                          })
                        : t._e(),
                    ],
                    1,
                  )
                : t._e(),
            ],
            1,
          ),
          t.showReviewDialog
            ? s("WriteReview", {
                attrs: { workid: t.workid, metadata: t.metadata },
                on: { closed: t.processReview },
              })
            : t._e(),
        ],
        1,
      );
    },
    ur = [],
    hr = {
      name: "FavListItem",
      mixins: [pe],
      components: { WriteReview: ai },
      props: {
        workid: { type: Number, required: !0 },
        metadata: { type: Object, required: !0 },
        mode: { type: String, default: "review" },
      },
      data() {
        return {
          rating: 0,
          showReviewDialog: !1,
          hideRating: !1,
          progress: "",
        };
      },
      computed: {
        coverUrl() {
          const t = this.$q.localStorage.getItem("jwt-token") || "";
          return this.workid
            ? `/asmr-site/api/cover/${this.workid}?type=240x240&token=${t}`
            : "";
        },
      },
      mounted() {
        this.setMetadata();
      },
      watch: {
        metadata() {
          this.setMetadata();
        },
      },
      methods: {
        humanReadableSeconds: z,
        setMetadata() {
          (this.metadata.userRating
            ? (this.rating = this.metadata.userRating)
            : (this.hideRating = !0),
            this.rating ? (this.hideRating = !1) : (this.hideRating = !0),
            (this.progress = this.metadata.progress));
        },
        processReview(t) {
          (t && ((this.calledFromChild = !0), this.$emit("reset")),
            (this.showReviewDialog = !1));
        },
        setRating(t) {
          if (t) {
            const e = {
              user_name: this.$store.state.User.name,
              work_id: this.metadata.id,
              rating: t,
            };
            this.submitRating(e);
          }
        },
        submitRating(t) {
          const e = { starOnly: !0 };
          this.$axios
            .put("/asmr-site/api/review", t, { params: e })
            .then((t) => {
              this.showSuccNotif(t.data.message);
            })
            .then(() => this.$emit("reset"))
            .catch((t) => {
              t.response
                ? this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t);
            });
        },
        setProgress(t) {
          const e = {
            user_name: this.$store.state.User.name,
            work_id: this.metadata.id,
            progress: t,
          };
          this.submitProgress(e);
        },
        submitProgress(t) {
          const e = { starOnly: !1, progressOnly: !0 };
          this.$axios
            .put("/asmr-site/api/review", t, { params: e })
            .then((t) => {
              this.showSuccNotif(t.data.message);
            })
            .then(() => this.$emit("reset"))
            .catch((t) => {
              t.response
                ? this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t);
            });
        },
        playHistroy(t, e) {
          this.$store.commit("AudioPlayer/SET_QUEUE", {
            workId: t,
            queue: e.queue,
            index: e.index,
            resetPlaying: !1,
            resumeHistroySeconds: e.seconds,
          });
        },
      },
    },
    mr = hr,
    pr = Object(g["a"])(mr, dr, ur, !1, null, null, null),
    gr = pr.exports;
  Bt()(pr, "components", {
    QItem: Ft["a"],
    QItemSection: Qt["a"],
    QImg: Ut["a"],
    QItemLabel: Wt["a"],
    QRating: la["a"],
    QCard: Dt["a"],
    QCardSection: Re["a"],
    QBtn: zt["a"],
    QBadge: Wa["a"],
    QBtnToggle: za["a"],
  });
  var fr = {
      name: "Favourites",
      mixins: [pe],
      components: { FavListItem: gr },
      props: {
        route: { type: String, default: "review" },
        progress: { type: String, default: "marked" },
      },
      computed: {
        direction() {
          return "desc" === this.sortMode;
        },
        sortButtonDisabled() {
          return "allage" === this.sortBy.order || "nsfw" === this.sortBy.order;
        },
      },
      data() {
        return {
          mode: "histroy",
          progressFilter: "marked",
          works: [],
          stopLoad: !1,
          pagination: { currentPage: 0, pageSize: 12, totalCount: 0 },
          sortMode: "desc",
          sortBy: { label: "标记时间", order: "updated_at" },
          sortOptions: [
            { label: "标记时间", order: "updated_at" },
            { label: "评价", order: "userRating" },
            { label: "发布时间", order: "release" },
            { label: "评论数量", order: "review_count" },
            { label: "售出数量", order: "dl_count" },
            { label: "全年龄新作", order: "allage" },
            { label: "18禁新作", order: "nsfw" },
          ],
        };
      },
      created() {
        ((this.mode = this.route), (this.progressFilter = this.progress));
      },
      mounted() {
        if (localStorage.sortByFavourites)
          try {
            this.sortBy = JSON.parse(localStorage.sortByFavourites);
          } catch {
            localStorage.removeItem("sortByFavourites");
          }
      },
      watch: {
        sortBy(t) {
          ((localStorage.sortByFavourites = JSON.stringify(t)), this.reset());
        },
        sortMode() {
          this.reset();
        },
        route() {
          ((this.mode = this.route), this.reset());
        },
        progress() {
          ((this.progressFilter = this.progress), this.reset());
        },
      },
      methods: {
        changeMode(t) {
          (this.$router.push("/favourites/" + t), this.reset());
        },
        changeProgressFilter(t) {
          (this.$router.push("/favourites/progress/" + t), this.reset());
        },
        switchSortMode() {
          "desc" === this.sortMode
            ? (this.sortMode = "asc")
            : (this.sortMode = "desc");
        },
        onLoad(t, e) {
          this.requestWorksQueue().then(() => e());
        },
        reset() {
          ((this.stopLoad = !0),
            (this.pagination = { currentPage: 0, pageSize: 12, totalCount: 0 }),
            this.requestWorksQueue().then(() => {
              this.stopLoad = !1;
            }));
        },
        requestWorksQueue() {
          const t = {
            order: this.sortBy.order,
            sort: this.sortMode,
            page: this.pagination.currentPage + 1 || 1,
          };
          ("allage" === this.sortBy.order &&
            ((t.order = "nsfw"), (t.sort = "asc")),
            "nsfw" === this.sortBy.order &&
              ((t.order = "nsfw"), (t.sort = "desc")),
            "progress" === this.mode && (t.filter = this.progressFilter));
          const e = "histroy" == this.mode ? "/asmr-site/api/histroy" : "api/review";
          return this.$axios
            .get(e, { params: t })
            .then((e) => {
              const s = e.data.works;
              ((this.works = 1 === t.page ? s.concat() : this.works.concat(s)),
                (this.pagination = e.data.pagination),
                this.works.length >= this.pagination.totalCount &&
                  (this.stopLoad = !0));
            })
            .catch((t) => {
              (t.response
                ? 401 !== t.response.status &&
                  this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t),
                (this.stopLoad = !0));
            });
        },
      },
    },
    vr = fr,
    yr = (s("7419"), s("b498")),
    wr = Object(g["a"])(vr, lr, cr, !1, null, "46144edb", null),
    br = wr.exports;
  Bt()(wr, "components", {
    QPage: Fs["a"],
    QBtnToggle: za["a"],
    QSelect: Ua["a"],
    QBtn: zt["a"],
    QInfiniteScroll: ja["a"],
    QList: De["a"],
    QSpinnerDots: Ba["a"],
    QColor: yr["a"],
  });
  var _r = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        {
          ref: "container",
          staticClass: "container",
          style: { "--cover-url": "url(" + t.coverUrl + ")" },
          on: { dblclick: t.clickOnContainer },
        },
        [
          t.enableDrawVideo
            ? t._e()
            : s("q-img", {
                staticClass: "constrain-height",
                attrs: {
                  contain: "",
                  src: t.coverUrl,
                  "img-class": "scale-animation image-style",
                  "img-style": {
                    "animation-play-state": t.playing ? "running" : "paused",
                  },
                },
              }),
          s("canvas", {
            ref: "visualizer",
            staticClass: "visualizer",
            attrs: { width: "1000", height: "1000" },
          }),
          t.isInFullScreen
            ? s("div", {
                staticClass: "simple-progress",
                style: t.progressBarStyle,
              })
            : t._e(),
          s(
            "div",
            { staticClass: "footer" },
            [t.isInFullScreen && !t.enablePIPLyrics ? s("LyricsBar") : t._e()],
            1,
          ),
          t.isInFullScreen
            ? s("div", { staticClass: "current-playing-info" }, [
                s(
                  "div",
                  { staticClass: "text-h6 text-weight-bolder non-selectable" },
                  [t._v("\n      " + t._s(t.title) + "\n    ")],
                ),
              ])
            : t._e(),
        ],
        1,
      );
    },
    qr = [];
  class kr {
    static toVec(t) {
      return t instanceof Array ? t : [t, t];
    }
    static add(t, e) {
      const [s, a] = kr.toVec(t),
        [i, r] = kr.toVec(e);
      return [s + i, a + r];
    }
    static sub(t, e) {
      const [s, a] = kr.toVec(t),
        [i, r] = kr.toVec(e);
      return [s - i, a - r];
    }
    static mul(t, e) {
      const [s, a] = kr.toVec(t),
        [i, r] = kr.toVec(e);
      return [s * i, a * r];
    }
  }
  function Sr(t) {
    if (((t = Math.floor(t)), Sr.memo.has(t))) return Sr.memo.get(t);
    let e;
    return ((e = t <= 1 ? 1 : t * Sr(t - 1)), (Sr.memo[t] = e), e);
  }
  Sr.memo = new Map();
  class Cr {
    constructor(t) {
      this.points = t;
    }
    sample(t) {
      let e = [0, 0];
      const s = this.points.length - 1;
      for (let a = 0; a <= s; ++a)
        e = kr.add(e, kr.mul(this.points[a], this.term(a, s, t)));
      return e;
    }
    term(t, e, s) {
      return (
        (Sr(e) / (Sr(t) * Sr(e - t))) * Math.pow(s, t) * Math.pow(1 - s, e - t)
      );
    }
  }
  class xr {
    constructor(t, e, s) {
      ((this.num_sample_point = t),
        (this.interval_mills = e),
        (this.last_mills = 0),
        (this.played_mills = 0),
        (this.contain_square = s));
      const a = [];
      for (let l = 0; l < t; ++l) a.push([Math.random(), Math.random()]);
      const i = a[0],
        r = a[1],
        o = kr.sub(i, r),
        n = kr.add(i, o);
      (a.push(n), a.push(i), (this.curveSample = new Cr(a)));
    }
    animate(t) {
      ((this.played_mills += t - this.last_mills),
        this.played_mills > this.interval_mills && (this.played_mills = 0),
        (this.last_mills = t));
      const e = this.played_mills / this.interval_mills,
        s = this.curveSample.sample(e);
      return kr.mul(s, this.contain_square);
    }
  }
  class Tr {
    constructor() {
      ((this.relative_center_inner_list = []),
        (this.inner_radius_list = []),
        (this.outter_radius_list = []),
        (this.motion_routine_list = []),
        (this.is_data_dirty = !0),
        (this.radial_gradient_list = []),
        (this.absolute_center_inner_list = []),
        (this.last_canvas_width = 0),
        (this.last_canvas_height = 0));
    }
    addHalo(t, e, s, a) {
      (this.relative_center_inner_list.push([t, e]),
        this.absolute_center_inner_list.push([0, 0]),
        this.inner_radius_list.push(0),
        this.outter_radius_list.push(s),
        this.motion_routine_list.push(new xr(10, a, 0.1)),
        (this.is_data_dirty = !0));
    }
    absolutePoint(t) {
      return [t[0] * this.last_canvas_width, t[1] * this.last_canvas_height];
    }
    update(t, e) {
      (this.last_canvas_height != e.canvas.height &&
        ((this.last_canvas_height = e.canvas.height),
        (this.is_data_dirty = !0)),
        this.last_canvas_width != e.canvas.width &&
          ((this.last_canvas_width = e.canvas.width),
          (this.is_data_dirty = !0)));
      for (let s = 0; s < this.relative_center_inner_list.length; ++s) {
        const a = this.relative_center_inner_list[s],
          i = this.motion_routine_list[s].animate(t),
          r = this.absolutePoint(kr.add(a, i)),
          o = this.inner_radius_list[s],
          n = this.outter_radius_list[s],
          l = e.createRadialGradient(r[0], r[1], o, r[0], r[1], n);
        (l.addColorStop(0, "rgba(255,255,255,0.0)"),
          l.addColorStop(0.7, "rgba(255,255,255,0.1)"),
          l.addColorStop(0.9, "rgba(255,255,255,0.2)"),
          l.addColorStop(1, "rgba(255,255,255,0.0)"),
          (this.radial_gradient_list[s] = l),
          (this.absolute_center_inner_list[s] = r));
      }
      this.is_data_dirty = !1;
    }
    draw(t) {
      for (let e = 0; e < this.relative_center_inner_list.length; ++e) {
        const s = this.absolute_center_inner_list[e],
          a = (this.inner_radius_list[e], this.outter_radius_list[e]),
          i = this.radial_gradient_list[e];
        ((t.fillStyle = i),
          t.beginPath(),
          t.arc(s[0], s[1], a, 0, 2 * Math.PI, !0),
          t.fill());
      }
    }
  }
  function Ir(t, e, s, a) {
    const i = t.length,
      r = e.canvas.width,
      o = e.canvas.height,
      n = 0.3,
      l = Math.round(n * r),
      c = 0.2,
      d = Math.round("left" == s ? r * c : r - r * c);
    function u(t) {
      return t < i / 2 ? i - 2 * t - 1 : 2 * t - i;
    }
    const h = o / i,
      m = Ir.gradient[s].w != r || Ir.gradient[s].h != o;
    if (m) {
      const a = d - 0.5 * l,
        i = a + l,
        n = e.createLinearGradient(a, 0, i, 0);
      (n.addColorStop(0.3, "rgba(255,  42, 73, 0.5)"),
        n.addColorStop(0.5, "rgba(140,  20, 252, 0.6)"),
        n.addColorStop(0.7, "rgba(255,  42, 73, 0.5)"),
        (Ir.gradient[s].grad = n),
        (Ir.gradient[s].w = r),
        (Ir.gradient[s].h = o));
      const c = Ir.gradient[s].curve;
      ((c.points = Array(t.length + 2)
        .fill(0)
        .map(() => [0, 0])),
        (c.points[0] = [d, 0]),
        (c.points[c.points.length - 1] = [d, o]));
    }
    ((e.fillStyle = Ir.gradient[s].grad),
      (e.lineJoin = "round"),
      (e.lineWidth = 3),
      (e.shadowColor = "rgb(255, 42, 73)"),
      (e.shadowBlur = 10));
    let p = 0,
      g = "left" == s ? 1 : -1;
    ((e.strokeStyle = Ir.gradient[s].grad), e.beginPath(), e.moveTo(d, p));
    for (let f = 0; f < i; ++f) {
      const s = u(f);
      let a = t[s];
      const i = Math.floor((l * a) / 255),
        r = (i * (0.5 * h)) / l,
        o = d + g * i,
        n = p + r,
        c = p + h - r;
      (e.bezierCurveTo(o, n, o, c, d, p + h), (p += h), (g *= -1));
    }
    (e.moveTo(d, o), e.stroke(), (e.shadowBlur = 0));
  }
  Ir.gradient = {
    left: { w: 0, h: 0, grad: null, curve: new Cr([]) },
    right: { w: 0, h: 0, grad: null, curve: new Cr([]) },
  };
  var Er = {
      name: "FullScreenPlayer",
      mixins: [pe],
      components: { LyricsBar: ls },
      data() {
        return {
          workid: this.$route.params.id,
          counter: 0,
          renderNotifier: { stop: !1, pause: !1 },
          isInFullScreen: !1,
          enableDrawFrequency: !1,
          enableDrawHalo: !1,
          enableDrawVideo: !0,
          haloManager: null,
          videoElement: null,
        };
      },
      methods: {
        clickOnContainer() {
          this.isInFullScreen
            ? document.exitFullscreen()
            : this.$refs.container.requestFullscreen();
        },
        onFullscreenChange() {
          this.isInFullScreen = null !== document.fullscreenElement;
        },
        setAnalyser(t) {
          return (
            (t.fftSize = 256),
            (t.minDecibels = -81),
            (t.maxDecibels = -11),
            this.$q.platform.is.ios
              ? (t.smoothingTimeConstant = 0.8)
              : this.$q.platform.is.android
                ? (t.smoothingTimeConstant = 0.71)
                : (t.smoothingTimeConstant = 0.82),
            t
          );
        },
        getAnalyserArray(t) {
          const e = t.frequencyBinCount,
            s = new Uint8Array(e);
          return (s.fill(255, 0, e), t.getByteFrequencyData(s), s);
        },
        initHaloManager() {
          this.haloManager = new Tr();
          const t = 8;
          for (let s = 0; s < t; ++s) {
            const t = Math.random(),
              e = 0.1 * Math.random() + 0.85,
              s = 10 + 200 * Math.random(),
              a = 100 * (60 + 60 * Math.random());
            this.haloManager.addHalo(t, e, s, a);
          }
          const e = 10;
          for (let s = 0; s < e; ++s) {
            const t = Math.random(),
              e = 0.8 * Math.random(),
              s = 10 + 100 * Math.random(),
              a = 100 * (40 + 60 * Math.random());
            this.haloManager.addHalo(t, e, s, a);
          }
        },
        audioElementInit() {
          (this.initHaloManager(), this.checkVisualEffect());
          let t = null,
            e = null;
          const s = this.$refs.visualizer,
            a = s.getContext("2d");
          ((a.font = "80px Arial"), (this.renderNotifier.stop = !0));
          let i = { stop: !1, pause: !this.playing, drawer: null };
          const r = (o) => {
            if (i.stop) return !1;
            requestAnimationFrame(r);
            let n = i.pause;
            if (
              (a.canvas.width !== a.canvas.clientWidth &&
                ((a.canvas.width =
                  a.canvas.clientWidth * window.devicePixelRatio),
                (n = !1)),
              a.canvas.height !== a.canvas.clientHeight &&
                ((a.canvas.height =
                  a.canvas.clientHeight * window.devicePixelRatio),
                (n = !1)),
              this.enableDrawVideo && (n = !1),
              n)
            )
              return !1;
            ((a.fillStyle = "rgba(0, 0, 0, 1)"),
              a.clearRect(0, 0, a.canvas.width, a.canvas.height),
              this.enableDrawFrequency &&
                (t ||
                  e ||
                  ((t = this.getAnalyserArray(
                    this.setAnalyser(this.audioAnalyser.left),
                  )),
                  (e = this.getAnalyserArray(
                    this.setAnalyser(this.audioAnalyser.right),
                  ))),
                this.audioAnalyser.left.getByteFrequencyData(t),
                this.audioAnalyser.right.getByteFrequencyData(e),
                Ir(t, a, "left"),
                Ir(e, a, "right")),
              this.enableDrawHalo &&
                (this.haloManager.update(o, a), this.haloManager.draw(a)),
              this.enableDrawVideo &&
                this.video &&
                this.drawVideoInCanvas(s, a));
          };
          ((i.drawer = r),
            (this.renderNotifier = i),
            requestAnimationFrame(i.drawer));
        },
        drawVideoInCanvas(t, e) {
          const s = t.width / t.height,
            a = this.video,
            i = a.videoWidth / a.videoHeight;
          let r, o, n, l;
          (s > i
            ? ((l = t.height), (n = i * l), (r = 0.5 * (t.width - n)), (o = 0))
            : ((n = t.width), (l = n / i), (r = 0), (o = 0.5 * (t.height - l))),
            e.drawImage(a, r, o, n, l));
        },
        checkVisualEffect() {
          ((this.enableDrawVideo =
            this.enableVideoSource && this.isCurrentPlayingFileVideo),
            this.enableDrawVideo &&
              (this.video = document.querySelector("#mediaVideo")),
            (this.enableDrawFrequency =
              null == this.video && null != this.audioAnalyser),
            this.enableDrawVideo
              ? (this.enableDrawFrequency = this.enableDrawHalo = !1)
              : (this.enableDrawHalo = !0));
        },
      },
      computed: {
        coverUrl() {
          const t = this.$q.localStorage.getItem("jwt-token") || "";
          return this.visualPlayerCoverUrl
            ? `${this.visualPlayerCoverUrl}?token=${t}`
            : "";
        },
        containerStyle() {
          return { "background-image": `url("${this.coverUrl}")` };
        },
        progressBarStyle() {
          let t = (this.currentTime / this.duration) * 100;
          return { width: t.toFixed(5) + "%" };
        },
        ...Object(y["d"])("AudioPlayer", [
          "visualPlayerCoverUrl",
          "audioAnalyser",
          "currentTime",
          "duration",
          "queue",
          "queueIndex",
          "playWorkId",
          "playing",
          "enablePIPLyrics",
          "enableVideoSource",
        ]),
        ...Object(y["b"])("AudioPlayer", [
          "currentPlayingFile",
          "isCurrentPlayingFileVideo",
        ]),
        title() {
          const t = queueItemAudioDisplayText(
            this.currentPlayingFile,
            this.currentPlayingFile.title,
          );
          const e = t.lastIndexOf(".");
          return e > 0 ? t.substring(0, e) : t;
        },
      },
      watch: {
        audioAnalyser() {
          this.audioElementInit();
        },
        playing(t) {
          this.renderNotifier.pause = !t;
        },
        currentPlayingFile() {
          this.checkVisualEffect();
        },
      },
      created() {
        void 0 === this.workid && 0 !== this.playWorkId
          ? this.$router.push("/fullScreenPlayer/" + this.playWorkId)
          : void 0 !== this.workid && 0 === this.playWorkId
            ? this.$router.push(this.workRoute({ id: parseInt(this.workid, 10) }))
            : void 0 === this.workid &&
              0 === this.playWorkId &&
              (this.$q.notify({
                message:
                  "当前没有播放任何作品，请先播放一个作品然后打开可视化页面",
                color: "negative",
              }),
              this.$router.push("/works"));
      },
      mounted() {
        (this.audioElementInit(),
          this.$refs.container.addEventListener(
            "fullscreenchange",
            this.onFullscreenChange,
          ),
          this.checkVisualEffect());
      },
      beforeDestroy() {
        ((this.renderNotifier.stop = !0),
          this.$refs.container.removeEventListener(
            "fullscreenchange",
            this.onFullscreenChange,
          ),
          (this.video = null));
      },
    },
    Pr = Er,
    Lr =
      (s("8bc0"),
      s("1f04"),
      Object(g["a"])(Pr, _r, qr, !1, null, "ce4d091c", null)),
    Ar = Lr.exports;
  Bt()(Lr, "components", { QImg: Ut["a"], QColor: yr["a"] });
  var $r = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return t.adminReady ? s("div", [
        s("div", { staticClass: "text-h5 text-weight-regular q-ma-md" }, [
          t._v("\n    AI 歌词中心\n  "),
        ]),
        s(
          "div",
          { staticClass: "row" },
          [
            s("q-input", {
              staticClass: "col col-sm-12 q-pa-sm",
              attrs: {
                dense: "",
                outlined: "",
                label: "搜索作品id",
                type: "number",
              },
              scopedSlots: t._u([
                {
                  key: "prepend",
                  fn: function () {
                    return [t._v("\n        番号\n      ")];
                  },
                  proxy: !0,
                },
              ]),
              model: {
                value: t.filterWorkId,
                callback: function (e) {
                  t.filterWorkId = e;
                },
                expression: "filterWorkId",
              },
            }),
            s("q-input", {
              staticClass: "col col-sm-12 q-pa-sm",
              attrs: { dense: "", outlined: "", label: "搜索文件名" },
              model: {
                value: t.filterFileName,
                callback: function (e) {
                  t.filterFileName = e;
                },
                expression: "filterFileName",
              },
            }),
            s("q-select", {
              staticClass: "col-auto col-sm-12 q-pa-sm",
              staticStyle: { "min-width": "8rem" },
              attrs: {
                dense: "",
                outlined: "",
                "bg-color": "",
                options: t.statusOptions,
                "option-label": t.readableStatus,
                label: "状态筛选",
                clearable: "",
                multiple: "",
              },
              model: {
                value: t.statusOption,
                callback: function (e) {
                  t.statusOption = e;
                },
                expression: "statusOption",
              },
            }),
          ],
          1,
        ),
        s(
          "div",
          { staticClass: "row justify-between q-mx-sm" },
          [
            s(
              "q-btn",
              {
                staticClass: "col-8 q-pa-sm",
                attrs: { color: "primary" },
                on: { click: t.resetLoadedData },
              },
              [t._v("刷新")],
            ),
            s(
              "q-btn",
              {
                staticClass: "col-1 q-pa-sm",
                attrs: { color: "negative" },
                on: {
                  click: function (e) {
                    return t.batchOpTasks("delete");
                  },
                },
              },
              [t._v("批量删除")],
            ),
            s(
              "q-btn",
              {
                staticClass: "col-1 q-pa-sm",
                attrs: { color: "warning" },
                on: {
                  click: function (e) {
                    return t.batchOpTasks("redo");
                  },
                },
              },
              [t._v("批量重试")],
            ),
          ],
          1,
        ),
        s(
          "div",
          [
            s(
              "q-infinite-scroll",
              {
                attrs: { disable: t.stopLoadingPage, offset: 500 },
                on: { load: t.onLoad },
              },
              [
                s(
                  "q-list",
                  {
                    staticClass: "q-ma-sm",
                    attrs: { bordered: "", separator: "" },
                  },
                  t._l(t.tasks, function (e) {
                    return s(
                      "q-item",
                      { key: e.id },
                      [
                        s(
                          "q-chip",
                          {
                            staticClass: "absolute-top-left",
                            attrs: { square: "", size: "sm" },
                          },
                          [
                            s("q-avatar", { attrs: { color: "primary" } }, [
                              t._v("id"),
                            ]),
                            t._v(
                              "\n              " +
                                t._s(e.id) +
                                "\n            ",
                            ),
                          ],
                          1,
                        ),
                        s(
                          "q-item-section",
                          {
                            attrs: { avatar: "" },
                            on: {
                              click: function (s) {
                                return (
                                  s.preventDefault(),
                                  s.stopPropagation(),
                                  t.copyToClipboard(
                                    e.id,
                                    "任务id '" + e.id + "'",
                                  )
                                );
                              },
                            },
                          },
                          [
                            s("q-img", {
                              staticClass: "rounded-borders",
                              staticStyle: { height: "38px", width: "38px" },
                              attrs: {
                                transition: "fade",
                                src: t.samCoverUrl(e.work_id),
                              },
                            }),
                            s("q-tooltip", [t._v("点击复制任务id")]),
                          ],
                          1,
                        ),
                        s(
                          "q-item-section",
                          { attrs: { side: "" } },
                          [
                            s("q-item-label", [
                              t._v(t._s(t.readableStatus(e.status))),
                            ]),
                            e.status == t.AILyricTaskStatus.NONE
                              ? s("q-icon", {
                                  attrs: {
                                    name: "warning",
                                    color: "warning",
                                    size: "2em",
                                  },
                                })
                              : e.status == t.AILyricTaskStatus.PENDING
                                ? s("q-icon", {
                                    attrs: {
                                      name: "pending_actions",
                                      color: "primary",
                                      size: "2em",
                                    },
                                  })
                                : e.status == t.AILyricTaskStatus.TRASCRIPTING
                                  ? s("q-spinner-bars", {
                                      attrs: { color: "primary", size: "2em" },
                                    })
                                  : e.status == t.AILyricTaskStatus.SUCCESS
                                    ? s("q-icon", {
                                        attrs: {
                                          name: "check_circle",
                                          color: "positive",
                                          size: "2em",
                                        },
                                      })
                                    : e.status == t.AILyricTaskStatus.ERROR
                                      ? s("q-icon", {
                                          attrs: {
                                            name: "error",
                                            color: "negative",
                                            size: "2em",
                                          },
                                        })
                                      : t._e(),
                          ],
                          1,
                        ),
                        s(
                          "q-item-section",
                          [
                            s("q-item-label", [t._v(t._s(e.audio_path))]),
                            s(
                              "div",
                              { staticClass: "row" },
                              [
                                s(
                                  "q-chip",
                                  {
                                    attrs: {
                                      square: "",
                                      "text-color": "primary",
                                      icon: "library_music",
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n                  " +
                                        t._s(t.idNumberToCode(e.work_id)) +
                                        "\n                ",
                                    ),
                                  ],
                                ),
                                s(
                                  "q-chip",
                                  {
                                    attrs: {
                                      square: "",
                                      color: "brown-13",
                                      icon: "engineering",
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n                  " +
                                        t._s(e.worker_name) +
                                        "\n                ",
                                    ),
                                  ],
                                ),
                              ],
                              1,
                            ),
                            s("q-item-label", { attrs: { caption: "" } }, [
                              t._v(t._s(e.worker_status)),
                            ]),
                          ],
                          1,
                        ),
                        s(
                          "q-item-section",
                          { attrs: { side: "" } },
                          [
                            s(
                              "q-btn",
                              {
                                staticClass: "full-height",
                                attrs: { dense: "" },
                                on: {
                                  click: function (s) {
                                    return t.openWorkDetail(e.work_id);
                                  },
                                },
                              },
                              [t._v("打开作品详情")],
                            ),
                          ],
                          1,
                        ),
                        s(
                          "q-item-section",
                          { attrs: { side: "" } },
                          [
                            s(
                              "q-btn",
                              {
                                staticClass: "text-negative",
                                attrs: { dense: "" },
                                on: {
                                  click: function (s) {
                                    return t.deleteTask(e.id);
                                  },
                                },
                              },
                              [t._v("删除")],
                            ),
                            e.status >= t.AILyricTaskStatus.PENDING
                              ? s(
                                  "q-btn",
                                  {
                                    attrs: { dense: "" },
                                    on: {
                                      click: function (s) {
                                        return t.redoTask(e.id);
                                      },
                                    },
                                  },
                                  [t._v("重试")],
                                )
                              : t._e(),
                          ],
                          1,
                        ),
                      ],
                      1,
                    );
                  }),
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        ),
      ]) : s("div");
    },
    Or = [],
    Nr = s("cdde"),
    Mr = {
      name: "AILyricCenter",
      props: ["value"],
      mixins: [pe],
      data() {
        return {
          adminReady: !1,
          tasks: [],
          AILyricTaskStatus: L,
          idNumberToCode: T,
          filterWorkId: "",
          filterFileName: "",
          statusOption: [],
          statusOptions: Array(L.COUNT)
            .fill(0)
            .map((t, e) => e),
          pagination: { currentPage: 0, pageSize: 12, totalCount: 0 },
          stopLoadingPage: !1,
          autoRefresh: !1,
          autoRefreshIntervalMills: 5e3,
        };
      },
      watch: {
        statusOption(t) {
          (null === t && (this.statusOption = []),
            this.adminReady && this.resetLoadedData());
        },
        filterWorkId() {
          this.adminReady && this.resetLoadedData();
        },
        filterFileName() {
          this.adminReady && this.resetLoadedData();
        },
        filterStatus() {
          this.adminReady && this.resetLoadedData();
        },
      },
      mounted() {
        this.ensureAdminReady();
      },
      methods: {
        async ensureAdminReady() {
          const t = await rrRequireAdmin();
          return t
            ? ((this.adminReady = !0), this.resetLoadedData(), !0)
            : (this.$router.replace("/"), !1);
        },
        async resetLoadedData() {
          if (!this.adminReady) return;
          (console.warn("resetLoadedData start, freeze scroller"),
            (this.stopLoadingPage = !0),
            (this.pagination = { currentPage: 0, pageSize: 12, totalCount: 0 }),
            (this.tasks = []),
            await this.loadFurtherTasks(),
            (this.stopLoadingPage = !1),
            console.warn("resetLoadedData finished, unfreeze scroller"));
        },
        async batchOpTasks(t) {
          if (!(await rrRequireAdmin())) return;
          const e = this.tasks.length,
            s = {
              delete: { desc: "删除", opFunc: A.deleteTask },
              redo: { desc: "重试", opFunc: A.redoTask },
            }[t];
          this.$q
            .dialog({
              title: `批量${s.desc}翻译任务`,
              message: `这将会${s.desc}目前已显示出来的${e}个翻译任务，请确认`,
              ok: { label: "确认" + s.desc, color: "negative" },
              cancel: { label: "取消", color: "secondary" },
            })
            .onOk(async () => {
              (console.log(`${s.desc}${e}个翻译任务`),
                await s.opFunc(
                  0,
                  this.tasks.map((t) => t.id),
                ),
                this.resetLoadedData());
            });
        },
        async loadFurtherTasks() {
          if (!this.adminReady) return;
          let t = null;
          try {
            t = await A.searchTask(
              this.pagination.currentPage + 1,
              this.filterWorkId,
              this.filterFileName,
              this.statusOption,
            );
          } catch (e) {
            return (
              e.response
                ? 401 !== e.response.status &&
                  this.showErrNotif(
                    e.response.data.error ||
                      `${e.response.status} ${e.response.statusText}`,
                  )
                : this.showErrNotif(e.message || e),
              void (this.stopLoadingPage = !0)
            );
          }
          ((this.pagination = t.pagination),
            (this.tasks =
              1 === t.pagination.currentPage
                ? t.tasks
                : this.tasks.concat(t.tasks)),
            this.tasks.length >= t.pagination.totalCount &&
              (console.warn("all ai task loaded"),
              (this.stopLoadingPage = !0)));
        },
        onLoad(t, e) {
          this.loadFurtherTasks().then(() => e());
        },
        readableStatus(t) {
          switch (t) {
            case L.NONE:
              return "非法状态";
            case L.PENDING:
              return "待执行";
            case L.TRASCRIPTING:
              return "翻译中";
            case L.SUCCESS:
              return "成功";
            case L.ERROR:
              return "失败";
          }
        },
        async deleteTask(t) {
          if (!(await rrRequireAdmin())) return;
          this.$q
            .dialog({
              title: "删除翻译任务",
              message:
                "确认要删除翻译任务吗，字幕文件也会被一并删除，且无法恢复。",
              ok: "删除",
              cancel: "取消",
              persistent: !1,
            })
            .onOk(async () => {
              (await A.deleteTask(t), this.resetLoadedData());
            });
        },
        async redoTask(t) {
          if (!(await rrRequireAdmin())) return;
          (await A.redoTask(t), this.resetLoadedData());
        },
        openWorkDetail(t) {
          this.$router.push(this.workRoute({ id: t }));
        },
        samCoverUrl(t) {
          const e = this.$q.localStorage.getItem("jwt-token") || "";
          return `/asmr-site/api/cover/${t}?type=sam&token=${e}`;
        },
        copyToClipboard(t, e) {
          Object(Nr["a"])("" + t).then(() => {
            this.$q.notify({ message: `已复制${e}到剪切板`, timeout: 200 });
          });
        },
      },
    },
    Rr = Mr,
    Dr = (s("d076"), s("a154")),
    Fr = Object(g["a"])(Rr, $r, Or, !1, null, "6dbe7aa8", null),
    Qr = Fr.exports;
  Bt()(Fr, "components", {
    QInput: We["a"],
    QSelect: Ua["a"],
    QBtn: zt["a"],
    QToggle: Se["a"],
    QInfiniteScroll: ja["a"],
    QList: De["a"],
    QItem: Ft["a"],
    QChip: Fe["a"],
    QAvatar: Rs["a"],
    QItemSection: Qt["a"],
    QImg: Ut["a"],
    QTooltip: Ke["a"],
    QItemLabel: Wt["a"],
    QIcon: Qe["a"],
    QSpinnerBars: Dr["a"],
  });
  var Ur = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        [
          s(
            "q-card",
            { staticClass: "q-ma-md" },
            [
              s(
                "q-form",
                { on: { submit: t.onSubmitRootFolder } },
                [
                  s(
                    "q-toolbar",
                    [s("q-toolbar-title", [t._v("添加新文件夹")])],
                    1,
                  ),
                  s(
                    "div",
                    { staticClass: "q-pa-sm" },
                    [
                      s("q-input", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          required: "",
                          "lazy-rules": "",
                          rules: [
                            function (e) {
                              return (
                                !t.config.rootFolders.find(function (t) {
                                  return t.name === e;
                                }) || "该别名已存在，文件夹别名不能重复"
                              );
                            },
                          ],
                          label: "文件夹别名",
                        },
                        model: {
                          value: t.rootFolder.name,
                          callback: function (e) {
                            t.$set(t.rootFolder, "name", e);
                          },
                          expression: "rootFolder.name",
                        },
                      }),
                      s("q-input", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          required: "",
                          "lazy-rules": "",
                          rules: [
                            function (e) {
                              return (
                                !t.config.rootFolders.find(function (t) {
                                  return t.path === e;
                                }) || "该路径已存在，文件夹路径不能重复"
                              );
                            },
                          ],
                          label: "绝对路径",
                        },
                        model: {
                          value: t.rootFolder.path,
                          callback: function (e) {
                            t.$set(t.rootFolder, "path", e);
                          },
                          expression: "rootFolder.path",
                        },
                      }),
                      s(
                        "div",
                        { staticClass: "row justify-end" },
                        [
                          s("q-btn", {
                            attrs: {
                              type: "submit",
                              color: "primary",
                              label: "添加",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-form",
            { on: { submit: t.onSubmit } },
            [
              s(
                "q-card",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.config.rootFolders.length,
                      expression: "config.rootFolders.length",
                    },
                  ],
                  staticClass: "q-ma-md",
                },
                [
                  s(
                    "q-toolbar",
                    [s("q-toolbar-title", [t._v("文件夹列表")])],
                    1,
                  ),
                  s(
                    "q-list",
                    t._l(t.config.rootFolders, function (e, a) {
                      return s(
                        "q-item",
                        { key: e.name },
                        [
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              s("q-icon", {
                                attrs: { color: "amber", name: "folder" },
                              }),
                            ],
                            1,
                          ),
                          s(
                            "q-item-section",
                            [
                              s("q-item-label", [t._v(t._s(e.name))]),
                              s("q-item-label", { attrs: { caption: "" } }, [
                                t._v(t._s(e.path)),
                              ]),
                            ],
                            1,
                          ),
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              s("q-btn", {
                                attrs: {
                                  flat: "",
                                  round: "",
                                  color: "red",
                                  icon: "delete",
                                },
                                on: {
                                  click: function (e) {
                                    return t.removeFromRootFolders(a);
                                  },
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      );
                    }),
                    1,
                  ),
                ],
                1,
              ),
              s(
                "q-card",
                { staticClass: "q-ma-md" },
                [
                  s(
                    "q-toolbar",
                    [s("q-toolbar-title", [t._v("封面文件夹路径")])],
                    1,
                  ),
                  t.config.coverUseDefaultPath
                    ? s("div", { staticClass: "q-pa-md" }, [
                        t._v(
                          "已指定为默认路径，即程序所在位置下的covers文件夹。如需修改，请前往高级设置并取消“封面使用默认路径”。",
                        ),
                      ])
                    : s("q-input", {
                        staticClass: "q-pa-sm",
                        attrs: { outlined: "", dense: "", required: "" },
                        model: {
                          value: t.config.coverFolderDir,
                          callback: function (e) {
                            t.$set(t.config, "coverFolderDir", e);
                          },
                          expression: "config.coverFolderDir",
                        },
                      }),
                ],
                1,
              ),
              s(
                "div",
                { staticClass: "q-ma-lg row justify-end" },
                [
                  s("q-btn", {
                    attrs: {
                      loading: t.loading,
                      label: "保存",
                      type: "submit",
                      color: "primary",
                    },
                  }),
                ],
                1,
              ),
            ],
            1,
          ),
        ],
        1,
      );
    },
    Wr = [],
    zr = {
      name: "Folders",
      mixins: [pe],
      data() {
        return {
          config: { rootFolders: [] },
          rootFolder: { name: "", path: "" },
          loading: !1,
        };
      },
      methods: {
        requestConfig() {
          this.$axios
            .get("/asmr-site/api/config/admin")
            .then((t) => {
              ((this.config = t.data.config),
                (this.rootFolder.path = t.data.config.voiceWorkDefaultPath));
            })
            .catch((t) => {
              t.response
                ? 401 !== t.response.status &&
                  this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t);
            });
        },
        onSubmit() {
          ((this.loading = !0),
            this.$axios
              .put("/asmr-site/api/config/admin", { config: this.config })
              .then((t) => {
                (this.showSuccNotif(t.data.message), (this.loading = !1));
              })
              .catch((t) => {
                ((this.loading = !1),
                  t.response
                    ? this.showErrNotif(
                        t.response.data.error ||
                          `${t.response.status} ${t.response.statusText}`,
                      )
                    : this.showErrNotif(t.message || t));
              }));
        },
        onSubmitRootFolder() {
          "" !== this.rootFolder.name &&
            "" !== this.rootFolder.path &&
            (this.config.rootFolders.push({
              name: this.rootFolder.name,
              path: this.rootFolder.path,
            }),
            (this.rootFolder.name = ""),
            (this.rootFolder.path = ""),
            this.onSubmit());
        },
        removeFromRootFolders(t) {
          (this.config.rootFolders.splice(t, 1), this.onSubmit());
        },
      },
      created() {
        this.requestConfig();
      },
    },
    jr = zr,
    Br = Object(g["a"])(jr, Ur, Wr, !1, null, null, null),
    Vr = Br.exports;
  Bt()(Br, "components", {
    QCard: Dt["a"],
    QForm: rr["a"],
    QToolbar: $s["a"],
    QToolbarTitle: Os["a"],
    QInput: We["a"],
    QBtn: zt["a"],
    QList: De["a"],
    QItem: Ft["a"],
    QItemSection: Qt["a"],
    QIcon: Qe["a"],
    QItemLabel: Wt["a"],
  });
  var Hr = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        [
          s("div", { staticClass: "row q-ma-sm" }, [
            "running" === t.state
              ? s(
                  "div",
                  { staticClass: "col-xs-12 col-sm-12 row q-pa-sm" },
                  [
                    s("q-btn", {
                      staticClass: "col",
                      attrs: {
                        color: "negative",
                        label: "终止扫描进程",
                        disable:
                          !t.isAdminUser ||
                          "running" !== t.state ||
                          !(t.loggedIn || t.$socket.connected),
                      },
                      on: {
                        click: function (e) {
                          return t.killScanProceess();
                        },
                      },
                    }),
                  ],
                  1,
                )
              : t._e(),
            s(
              "div",
              { staticClass: "col-xs-6 col-sm-4 row q-pa-sm" },
              [
                s("q-btn", {
                  staticClass: "col",
                  attrs: {
                    color: "teal",
                    label: "扫描本地音声库",
                    disable:
                      !t.isAdminUser ||
                      "running" === t.state ||
                      !(t.loggedIn || t.$socket.connected),
                  },
                  on: {
                    click: function (e) {
                      return t.performScan();
                    },
                  },
                }),
              ],
              1,
            ),
            s(
              "div",
              { staticClass: "col-xs-6 col-sm-4 row q-pa-sm" },
              [
                s("q-btn", {
                  staticClass: "col",
                  attrs: {
                    color: "primary",
                    label: "刷新音声库信息",
                    disable:
                      !t.isAdminUser ||
                      "running" === t.state ||
                      !(t.loggedIn || t.$socket.connected),
                  },
                  on: {
                    click: function (e) {
                      return t.performUpdate();
                    },
                  },
                }),
              ],
              1,
            ),
            s(
              "div",
              { staticClass: "col-xs-12 col-sm-4 row q-pa-sm" },
              [
                s("q-btn", {
                  staticClass: "col",
                  attrs: {
                    color: "secondary",
                    label: "扫描作品内文件变化",
                    disable:
                      !t.isAdminUser ||
                      "running" === t.state ||
                      !(t.loggedIn || t.$socket.connected),
                  },
                  on: {
                    click: function (e) {
                      return t.performWorkFileScan();
                    },
                  },
                }),
              ],
              1,
            ),
          ]),
          s(
            "q-card",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.state,
                  expression: "state",
                },
              ],
              staticClass: "q-ma-md",
            },
            [
              s(
                "q-expansion-item",
                {
                  attrs: { "expand-separator": "" },
                  scopedSlots: t._u([
                    {
                      key: "header",
                      fn: function () {
                        return [
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              "running" === t.state
                                ? s("q-spinner-gears", {
                                    attrs: { color: "primary", size: "2em" },
                                  })
                                : "finished" === t.state
                                  ? s("q-icon", {
                                      attrs: {
                                        name: "done",
                                        color: "positive",
                                        size: "2em",
                                      },
                                    })
                                  : "error" === t.state
                                    ? s("q-icon", {
                                        attrs: {
                                          name: "bug_report",
                                          color: "red",
                                          size: "2em",
                                        },
                                      })
                                    : t._e(),
                            ],
                            1,
                          ),
                          s(
                            "q-item-section",
                            [
                              t.allLogs.length > 1
                                ? s(
                                    "q-item-label",
                                    { staticClass: "ellipsis" },
                                    [
                                      t._v(
                                        t._s(
                                          t.allLogs[t.allLogs.length - 2]
                                            .message,
                                        ),
                                      ),
                                    ],
                                  )
                                : t._e(),
                              t.allLogs.length > 0
                                ? s(
                                    "q-item-label",
                                    { staticClass: "ellipsis" },
                                    [
                                      t._v(
                                        t._s(
                                          t.allLogs[t.allLogs.length - 1]
                                            .message,
                                        ),
                                      ),
                                    ],
                                  )
                                : t._e(),
                            ],
                            1,
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                },
                [
                  s(
                    "q-scroll-area",
                    {
                      staticClass: "bg-dark text-white q-pa-md",
                      staticStyle: { height: "256px" },
                    },
                    t._l(t.allLogs, function (e, a) {
                      return s("div", { key: a }, [
                        s("span", { class: t.textColorOnLevel(e.level) }, [
                          t._v("➜ " + t._s(e.message)),
                        ]),
                      ]);
                    }),
                    0,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-card",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.tasks.length > 0 || t.failedTasks.length > 0,
                  expression: "(tasks.length > 0) || (failedTasks.length > 0)",
                },
              ],
              staticClass: "q-ma-md",
            },
            [
              s(
                "q-tabs",
                {
                  staticClass: "text-grey",
                  attrs: {
                    dense: "",
                    "inline-label": "",
                    "active-color": "white",
                    "active-bg-color": "brown",
                    "indicator-color": "yellow",
                    align: "justify",
                    "narrow-indicator": "",
                  },
                  model: {
                    value: t.tab,
                    callback: function (e) {
                      t.tab = e;
                    },
                    expression: "tab",
                  },
                },
                [
                  s(
                    "q-tab",
                    {
                      attrs: {
                        name: "tasks",
                        icon: "hourglass_full",
                        label: "处理中",
                      },
                    },
                    [
                      s(
                        "q-badge",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.tasks.length > 0,
                              expression: "tasks.length > 0",
                            },
                          ],
                          attrs: { color: "primary", floating: "" },
                        },
                        [t._v(t._s(t.tasks.length))],
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-tab",
                    {
                      attrs: {
                        name: "failedTasks",
                        icon: "error_outline",
                        label: "处理失败",
                      },
                    },
                    [
                      s(
                        "q-badge",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.failedTasks.length > 0,
                              expression: "failedTasks.length > 0",
                            },
                          ],
                          attrs: { color: "red", floating: "" },
                        },
                        [t._v(t._s(t.failedTasks.length))],
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              s("q-separator"),
              s(
                "q-tab-panels",
                {
                  attrs: { animated: "" },
                  model: {
                    value: t.tab,
                    callback: function (e) {
                      t.tab = e;
                    },
                    expression: "tab",
                  },
                },
                [
                  s(
                    "q-tab-panel",
                    { staticClass: "q-pa-none", attrs: { name: "tasks" } },
                    [
                      s("q-virtual-scroll", {
                        staticStyle: { "max-height": "313px" },
                        attrs: {
                          separator: "",
                          items: t.tasks,
                          "virtual-scroll-item-size": 52,
                        },
                        scopedSlots: t._u([
                          {
                            key: "default",
                            fn: function (e) {
                              var a = e.item,
                                i = e.index;
                              return [
                                s(
                                  "q-expansion-item",
                                  {
                                    key: i,
                                    attrs: { "expand-separator": "" },
                                    scopedSlots: t._u(
                                      [
                                        {
                                          key: "header",
                                          fn: function () {
                                            return [
                                              s(
                                                "q-item-section",
                                                { attrs: { avatar: "" } },
                                                [
                                                  s("q-spinner-hourglass", {
                                                    attrs: {
                                                      color: "primary",
                                                      size: "2em",
                                                    },
                                                  }),
                                                ],
                                                1,
                                              ),
                                              s(
                                                "q-item-section",
                                                [
                                                  a.logs.length > 0
                                                    ? s(
                                                        "q-item-label",
                                                        {
                                                          staticClass:
                                                            "ellipsis",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              a.logs[
                                                                a.logs.length -
                                                                  1
                                                              ].message,
                                                            ),
                                                          ),
                                                        ],
                                                      )
                                                    : t._e(),
                                                  s(
                                                    "q-item-label",
                                                    { attrs: { caption: "" } },
                                                    [t._v(t._s("" + a.rjcode))],
                                                  ),
                                                ],
                                                1,
                                              ),
                                            ];
                                          },
                                          proxy: !0,
                                        },
                                      ],
                                      null,
                                      !0,
                                    ),
                                  },
                                  [
                                    s(
                                      "q-card",
                                      [
                                        s(
                                          "q-card-section",
                                          { staticClass: "bg-dark text-white" },
                                          t._l(a.logs, function (e, a) {
                                            return s("div", { key: a }, [
                                              s(
                                                "span",
                                                {
                                                  class: t.textColorOnLevel(
                                                    e.level,
                                                  ),
                                                },
                                                [t._v("➜ " + t._s(e.message))],
                                              ),
                                            ]);
                                          }),
                                          0,
                                        ),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                ),
                              ];
                            },
                          },
                        ]),
                      }),
                    ],
                    1,
                  ),
                  s(
                    "q-tab-panel",
                    {
                      staticClass: "q-pa-none",
                      attrs: { name: "failedTasks" },
                    },
                    [
                      s("q-virtual-scroll", {
                        staticStyle: { "max-height": "313px" },
                        attrs: {
                          separator: "",
                          items: t.failedTasks,
                          "virtual-scroll-item-size": 52,
                        },
                        scopedSlots: t._u([
                          {
                            key: "default",
                            fn: function (e) {
                              var a = e.item,
                                i = e.index;
                              return [
                                s(
                                  "q-expansion-item",
                                  {
                                    key: i,
                                    attrs: {
                                      "expand-separator": "",
                                      "expand-icon-class": "text-white",
                                      "header-class": "bg-negative",
                                    },
                                    scopedSlots: t._u(
                                      [
                                        {
                                          key: "header",
                                          fn: function () {
                                            return [
                                              s(
                                                "q-item-section",
                                                { attrs: { avatar: "" } },
                                                [
                                                  s("q-icon", {
                                                    attrs: {
                                                      name: "bug_report",
                                                      color: "white",
                                                      size: "2em",
                                                    },
                                                  }),
                                                ],
                                                1,
                                              ),
                                              s(
                                                "q-item-section",
                                                [
                                                  s(
                                                    "q-item-label",
                                                    {
                                                      staticClass:
                                                        "text-white ellipsis",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                    " +
                                                          t._s(
                                                            a.logs[
                                                              a.logs.length - 1
                                                            ].message,
                                                          ) +
                                                          "\n                  ",
                                                      ),
                                                    ],
                                                  ),
                                                  s(
                                                    "q-item-label",
                                                    {
                                                      staticClass: "text-white",
                                                      attrs: { caption: "" },
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                    " +
                                                          t._s("" + a.rjcode) +
                                                          "\n                  ",
                                                      ),
                                                    ],
                                                  ),
                                                ],
                                                1,
                                              ),
                                            ];
                                          },
                                          proxy: !0,
                                        },
                                      ],
                                      null,
                                      !0,
                                    ),
                                  },
                                  [
                                    s(
                                      "q-card",
                                      [
                                        s(
                                          "q-card-section",
                                          { staticClass: "bg-dark text-white" },
                                          t._l(a.logs, function (e, a) {
                                            return s("div", { key: a }, [
                                              s(
                                                "span",
                                                {
                                                  class: t.textColorOnLevel(
                                                    e.level,
                                                  ),
                                                },
                                                [t._v("➜ " + t._s(e.message))],
                                              ),
                                            ]);
                                          }),
                                          0,
                                        ),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                ),
                              ];
                            },
                          },
                        ]),
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
        ],
        1,
      );
    },
    Gr = [],
    Yr = {
      name: "Scanner",
      mixins: [pe],
      data() {
        return {
          tab: "tasks",
          state: null,
          loggedIn: !1,
          tasks: [],
          failedTasks: [],
          mainLogs: [],
          results: [],
        };
      },
      sockets: {
        SCAN_TASKS(t) {
          this.tasks = t.tasks;
        },
        SCAN_FAILED_TASKS(t) {
          this.failedTasks = t.failedTasks;
        },
        SCAN_MAIN_LOGS(t) {
          this.mainLogs = t.mainLogs;
        },
        SCAN_RESULTS(t) {
          this.results = t.results;
        },
        SCAN_INIT_STATE(t) {
          ((this.state = "running"),
            (this.tasks = t.tasks),
            (this.failedTasks = t.failedTasks),
            (this.mainLogs = t.mainLogs),
            (this.results = t.results));
        },
        SCAN_FINISHED(t) {
          ((this.state = "finished"),
            this.allLogs.push({ level: "info", message: t.message }));
        },
        SCAN_ERROR() {
          this.state = "error";
        },
        success() {
          this.loggedIn = !0;
        },
      },
      methods: {
        cleanRerun() {
          ((this.tasks = []),
            (this.failedTasks = []),
            (this.mainLogs = []),
            (this.results = []),
            (this.state = "running"));
        },
        performScan() {
          if (!this.isAdminUser) return;
          (this.cleanRerun(), this.$socket.emit("PERFORM_SCAN"));
        },
        performWorkFileScan() {
          if (!this.isAdminUser) return;
          (this.cleanRerun(), this.$socket.emit("PERFORM_LYRIC_SCAN"));
        },
        performUpdate() {
          if (!this.isAdminUser) return;
          (this.cleanRerun(), this.$socket.emit("PERFORM_UPDATE"));
        },
        killScanProceess() {
          if (!this.isAdminUser) return;
          this.$socket.emit("KILL_SCAN_PROCESS");
        },
        textColorOnLevel(t) {
          switch (t) {
            case "error":
              return "text-red";
            case "warn":
              return "text-yellow";
            default:
              return "";
          }
        },
      },
      computed: {
        isAdminUser() {
          return rrIsAdminUser(this.$store.state.User);
        },
        allLogs() {
          const t = this.results.map((t) =>
            "added" === t.result
              ? {
                  level: "info",
                  message: `[${t.rjcode}] 添加成功! Added: ${t.count}`,
                }
              : "updated" === t.result
                ? {
                    level: "info",
                    message: `[${t.rjcode}] 更新成功! Updated: ${t.count}`,
                  }
                : {
                    level: "error",
                    message: `[${t.rjcode}] 处理失败! Failed: ${t.count}`,
                  },
          );
          return this.mainLogs.concat(t);
        },
      },
      mounted() {
        (this.$socket.emit("ON_SCANNER_PAGE"),
          this.$socket.on("connect_error", () => {
            this.showErrNotif("连接Socket失败");
          }));
      },
    },
    Kr = Yr,
    Jr = s("3b73"),
    Zr = s("cf57"),
    Xr = s("429b"),
    to = s("7460"),
    eo = s("adad"),
    so = s("823b"),
    ao = s("9149"),
    io = Object(g["a"])(Kr, Hr, Gr, !1, null, null, null),
    ro = io.exports;
  Bt()(io, "components", {
    QBtn: zt["a"],
    QCard: Dt["a"],
    QExpansionItem: Jr["a"],
    QItemSection: Qt["a"],
    QSpinnerGears: Zr["a"],
    QIcon: Qe["a"],
    QItemLabel: Wt["a"],
    QScrollArea: Ms["a"],
    QTabs: Xr["a"],
    QTab: to["a"],
    QBadge: Wa["a"],
    QSeparator: Xe["a"],
    QTabPanels: eo["a"],
    QTabPanel: so["a"],
    QVirtualScroll: qa["a"],
    QSpinnerHourglass: ao["a"],
    QCardSection: Re["a"],
  });
  var crawlerSourceSettings = s("crawler-source-settings");
  var oo = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-form",
        { on: { submit: t.onSubmit } },
        [
          s(
            "q-card",
            { staticClass: "q-ma-md" },
            [
              s(
                "q-toolbar",
                [
                  s("q-toolbar-title", [
                    t._v("网页偏好设置（每个浏览器之间，此部分配置相互独立）"),
                  ]),
                ],
                1,
              ),
		              s(
		                "q-list",
		                [
		                  s(
		                    "q-item",
		                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("音频转码设置")]),
                          s("q-item-label", [
                            t._v("是否开启转码，以及转码的质量"),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-btn-toggle", {
                            attrs: {
                              "no-caps": "",
                              rounded: "",
                              unelevated: "",
                              "toggle-color": "primary",
                              "text-color": "primary",
                              options: t.transcodeOptionOptions,
                            },
                            model: {
                              value: t.transcodeOptionTemp,
                              callback: function (e) {
                                t.transcodeOptionTemp = e;
                              },
                              expression: "transcodeOptionTemp",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("音频文件扩展名过滤")]),
                          s("q-item-label", [
                            t._v(
                              "只有这些扩展名的文件才会开启转码（忽略大小写），都不选的话，相当于关闭转码",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s("q-item-section", { attrs: { avatar: "" } }, [
                        s(
                          "div",
                          { staticClass: "q-gutter-sm" },
                          [
                            s("q-checkbox", {
                              attrs: { dense: "", label: "wav", color: "teal" },
                              model: {
                                value: t.transcodeFromTypesDict.wav,
                                callback: function (e) {
                                  t.$set(t.transcodeFromTypesDict, "wav", e);
                                },
                                expression: "transcodeFromTypesDict.wav",
                              },
                            }),
                            s("q-checkbox", {
                              attrs: {
                                dense: "",
                                label: "flac",
                                color: "orange",
                              },
                              model: {
                                value: t.transcodeFromTypesDict.flac,
                                callback: function (e) {
                                  t.$set(t.transcodeFromTypesDict, "flac", e);
                                },
                                expression: "transcodeFromTypesDict.flac",
                              },
                            }),
                            s("q-checkbox", {
                              attrs: { dense: "", label: "avi", color: "cyan" },
                              model: {
                                value: t.transcodeFromTypesDict.avi,
                                callback: function (e) {
                                  t.$set(t.transcodeFromTypesDict, "avi", e);
                                },
                                expression: "transcodeFromTypesDict.avi",
                              },
                            }),
                            s("q-checkbox", {
                              attrs: { dense: "", label: "mp4", color: "pink" },
                              model: {
                                value: t.transcodeFromTypesDict.mp4,
                                callback: function (e) {
                                  t.$set(t.transcodeFromTypesDict, "mp4", e);
                                },
                                expression: "transcodeFromTypesDict.mp4",
                              },
                            }),
                          ],
                          1,
                        ),
                      ]),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("强制标签名反和谐")]),
                          s("q-item-label", [
                            t._v(
                              "将目前数据库内存储dlsite标签名，反和谐，恢复原始名称",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-btn", {
                            attrs: { icon: "restart_alt" },
                            on: { click: t.uncensorTags },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("列表展示形式")]),
                          s("q-item-label", [t._v("可选择分页展示或者瀑布流")]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-btn-toggle", {
                            attrs: {
                              "no-caps": "",
                              rounded: "",
                              unelevated: "",
                              "toggle-color": "primary",
                              "text-color": "primary",
                              options: t.workListModeOptions,
                            },
                            model: {
                              value: t.workListModeTemp,
                              callback: function (e) {
                                t.workListModeTemp = e;
                              },
                              expression: "workListModeTemp",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("首页显示最近播放作品")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("选择是否在首页显示最近播放作品"),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-toggle", {
                            attrs: { value: t.enableShowRecent, dense: "" },
                            on: { input: t.changeEnableShowRecent },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [s("q-item-label", [t._v("深色模式设置")])],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-btn-toggle", {
                            attrs: {
                              "no-caps": "",
                              rounded: "",
                              unelevated: "",
                              "toggle-color": "primary",
                              "text-color": "primary",
                              options: [
                                { label: "浅色模式", value: !1 },
                                { label: "深色模式", value: !0 },
                                { label: "跟随系统", value: "auto" },
                              ],
                            },
                            model: {
                              value: t.darkModeTemp,
                              callback: function (e) {
                                t.darkModeTemp = e;
                              },
                              expression: "darkModeTemp",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("高级音频模式")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v(
                              "支持显示音频特效、左右声道反转等音频功能，建议在桌面浏览器中开启，移动端iOS设备会有声音播放bug",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-toggle", {
                            attrs: { value: t.enableVisualizer, dense: "" },
                            on: { input: t.changeEnableVisualizer },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("启用视频源作为播放格式")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v(
                              "开启此选项后，视频格式(mp4)用于播放音频的同时，也可以看到视频画面(大图模式下)",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-toggle", {
                            attrs: { value: t.enableVideoSource, dense: "" },
                            on: { input: t.changeEnableVideoSource },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("切换回旧式作品卡片UI")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v(
                              "搜索页面展示作品使用旧的卡片样式，旧式卡片可以直接显示所有标签",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-toggle", {
                            attrs: { value: t.oldWorkCardUIStyle, dense: "" },
                            on: { input: t.changeOldWorkCardUIStyle },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("睡眠时钟设置模式")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v(
                              "当前模式：" +
                                t._s(
                                  t.oldSleepTimerUIStyle
                                    ? "设定停止播放的时间点"
                                    : "按照分钟开始倒计时",
                                ),
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-toggle", {
                            attrs: { value: t.oldSleepTimerUIStyle, dense: "" },
                            on: { input: t.changeOldSleepTimerUIStyle },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-card",
            { staticClass: "q-ma-md" },
            [
              s("q-toolbar", [s("q-toolbar-title", [t._v("播放器设置")])], 1),
              s(
                "q-list",
                [
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("音频播放器版本")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v(
                              "V1 保持原播放器，V2 在原播放器逻辑上增加新版歌词显示",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-btn-toggle", {
                            attrs: {
                              "no-caps": "",
                              rounded: "",
                              unelevated: "",
                              "toggle-color": "primary",
                              "text-color": "primary",
                              options: t.audioPlayerVersionOptions,
                            },
                            model: {
                              value:
                                t.config.audioPlayerVersion ||
                                t.audioPlayerVersion,
                              callback: function (e) {
                                t.changeAudioPlayerVersion(e);
                              },
                              expression: "config.audioPlayerVersion",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("后退按钮跳跃秒数")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("播放时后退按钮跳跃秒数"),
                          ]),
                        ],
                        1,
                      ),
                      s("q-item-section", { attrs: { avatar: "" } }, [
                        s(
                          "div",
                          { staticClass: "q-gutter-sm" },
                          [
                            s("q-radio", {
                              attrs: { dense: "", val: "5", label: "5 秒" },
                              model: {
                                value: t.rewindSeekTime,
                                callback: function (e) {
                                  t.rewindSeekTime = e;
                                },
                                expression: "rewindSeekTime",
                              },
                            }),
                            s("q-radio", {
                              attrs: { dense: "", val: "10", label: "10 秒" },
                              model: {
                                value: t.rewindSeekTime,
                                callback: function (e) {
                                  t.rewindSeekTime = e;
                                },
                                expression: "rewindSeekTime",
                              },
                            }),
                            s("q-radio", {
                              attrs: { dense: "", val: "30", label: "30 秒" },
                              model: {
                                value: t.rewindSeekTime,
                                callback: function (e) {
                                  t.rewindSeekTime = e;
                                },
                                expression: "rewindSeekTime",
                              },
                            }),
                          ],
                          1,
                        ),
                      ]),
		                    ],
		                    1,
		                  ),
			                  s(
			                    "q-item",
			                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("前进按钮跳跃秒数")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("播放时前进按钮跳跃秒数"),
                          ]),
                        ],
                        1,
                      ),
                      s("q-item-section", { attrs: { avatar: "" } }, [
                        s(
                          "div",
                          { staticClass: "q-gutter-sm" },
                          [
                            s("q-radio", {
                              attrs: { dense: "", val: "5", label: "5 秒" },
                              model: {
                                value: t.forwardSeekTime,
                                callback: function (e) {
                                  t.forwardSeekTime = e;
                                },
                                expression: "forwardSeekTime",
                              },
                            }),
                            s("q-radio", {
                              attrs: { dense: "", val: "10", label: "10 秒" },
                              model: {
                                value: t.forwardSeekTime,
                                callback: function (e) {
                                  t.forwardSeekTime = e;
                                },
                                expression: "forwardSeekTime",
                              },
                            }),
                            s("q-radio", {
                              attrs: { dense: "", val: "30", label: "30 秒" },
                              model: {
                                value: t.forwardSeekTime,
                                callback: function (e) {
                                  t.forwardSeekTime = e;
                                },
                                expression: "forwardSeekTime",
                              },
                            }),
                          ],
                          1,
                        ),
                      ]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-card",
            { staticClass: "q-ma-md" },
            [
              s("q-toolbar", [s("q-toolbar-title", [t._v("爬虫相关设置")])], 1),
              s("crawler-source-settings", {
                props: { sources: t.config.scraperSources || [] },
                on: {
                  input: function (sources) {
                    t.$set(t.config, "scraperSources", sources);
                  },
                },
              }),
              s(
                "q-list",
                [
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("标签语言")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("从 DLSite 爬取的标签元数据的语言"),
                          ]),
                        ],
                        1,
                      ),
                      s("q-item-section", { attrs: { avatar: "" } }, [
                        s(
                          "div",
                          { staticClass: "q-gutter-sm" },
                          [
                            s("q-radio", {
                              attrs: { dense: "", val: "zh-cn", label: "简" },
                              model: {
                                value: t.config.tagLanguage,
                                callback: function (e) {
                                  t.$set(t.config, "tagLanguage", e);
                                },
                                expression: "config.tagLanguage",
                              },
                            }),
                            s("q-radio", {
                              attrs: { dense: "", val: "zh-tw", label: "繁" },
                              model: {
                                value: t.config.tagLanguage,
                                callback: function (e) {
                                  t.$set(t.config, "tagLanguage", e);
                                },
                                expression: "config.tagLanguage",
                              },
                            }),
                            s("q-radio", {
                              attrs: { dense: "", val: "ja-jp", label: "日" },
                              model: {
                                value: t.config.tagLanguage,
                                callback: function (e) {
                                  t.$set(t.config, "tagLanguage", e);
                                },
                                expression: "config.tagLanguage",
                              },
                            }),
                          ],
                          1,
                        ),
                      ]),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("DLsite 超时时间")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("默认 10000 毫秒"),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-input", {
                            staticStyle: { "max-width": "100px" },
                            attrs: {
                              type: "number",
                              "input-class": "text-right",
                            },
                            model: {
                              value: t.config.dlsiteTimeout,
                              callback: function (e) {
                                t.$set(t.config, "dlsiteTimeout", t._n(e));
                              },
                              expression: "config.dlsiteTimeout",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("HVDB 超时时间")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("默认 10000 毫秒"),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-input", {
                            staticStyle: { "max-width": "100px" },
                            attrs: {
                              type: "number",
                              "input-class": "text-right",
                            },
                            model: {
                              value: t.config.hvdbTimeout,
                              callback: function (e) {
                                t.$set(t.config, "hvdbTimeout", t._n(e));
                              },
                              expression: "config.hvdbTimeout",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("重新请求间隔时间")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("默认 2000 毫秒"),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-input", {
                            staticStyle: { "max-width": "100px" },
                            attrs: {
                              type: "number",
                              "input-class": "text-right",
                            },
                            model: {
                              value: t.config.retryDelay,
                              callback: function (e) {
                                t.$set(t.config, "retryDelay", t._n(e));
                              },
                              expression: "config.retryDelay",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("请求最大尝试次数")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("默认 5"),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-input", {
                            staticStyle: { "max-width": "100px" },
                            attrs: {
                              type: "number",
                              "input-class": "text-right",
                            },
                            model: {
                              value: t.config.retry,
                              callback: function (e) {
                                t.$set(t.config, "retry", t._n(e));
                              },
                              expression: "config.retry",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("爬虫并行任务数量")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("默认 16"),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-input", {
                            staticStyle: { "max-width": "100px" },
                            attrs: {
                              type: "number",
                              "input-class": "text-right",
                            },
                            model: {
                              value: t.config.maxParallelism,
                              callback: function (e) {
                                t.$set(t.config, "maxParallelism", t._n(e));
                              },
                              expression: "config.maxParallelism",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-card",
            { staticClass: "q-ma-md" },
            [
              s(
                "q-toolbar",
                [s("q-toolbar-title", [t._v("文件夹扫描相关设置")])],
                1,
              ),
              s(
                "q-list",
                [
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("重点文件展示配置")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v(
                              "配置哪些是重点文件，作品详情首次展示时，自动跳转到这些文件数量最多，或者统计时长最长的文件夹",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s("q-item-section", [
                        s(
                          "div",
                          [
                            s(
                              "q-btn",
                              {
                                staticClass: "q-ma-sm",
                                attrs: {
                                  padding: "none sm",
                                  color: "primary",
                                  size: "sm",
                                },
                                on: {
                                  click: function (e) {
                                    t.config.importantWorkTreeOption = "off";
                                  },
                                },
                              },
                              [t._v("关闭")],
                            ),
                            s(
                              "q-btn",
                              {
                                staticClass: "q-ma-sm",
                                attrs: {
                                  padding: "none sm",
                                  color: "primary",
                                  size: "sm",
                                },
                                on: {
                                  click: function (e) {
                                    t.config.importantWorkTreeOption =
                                      "count:mp3$";
                                  },
                                },
                              },
                              [t._v("mp3数量最多")],
                            ),
                            s(
                              "q-btn",
                              {
                                staticClass: "q-ma-sm",
                                attrs: {
                                  padding: "none sm",
                                  color: "primary",
                                  size: "sm",
                                },
                                on: {
                                  click: function (e) {
                                    t.config.importantWorkTreeOption =
                                      "count:(mp3|wav)$";
                                  },
                                },
                              },
                              [t._v("mp3或wav数量最多")],
                            ),
                            s(
                              "q-btn",
                              {
                                staticClass: "q-ma-sm",
                                attrs: {
                                  padding: "none sm",
                                  color: "primary",
                                  size: "sm",
                                },
                                on: {
                                  click: function (e) {
                                    t.config.importantWorkTreeOption =
                                      "time:(mp3|wav)$";
                                  },
                                },
                              },
                              [t._v("mp3或wav总计时长最长")],
                            ),
                            s(
                              "q-btn",
                              {
                                staticClass: "q-ma-sm",
                                attrs: {
                                  padding: "none sm",
                                  color: "primary",
                                  size: "sm",
                                },
                                on: {
                                  click: function (e) {
                                    t.config.importantWorkTreeOption =
                                      "time:(mp3|wav|mp4)$";
                                  },
                                },
                              },
                              [t._v("mp3、wav、mp4总计时长最长")],
                            ),
                          ],
                          1,
                        ),
                      ]),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-input", {
                            attrs: {
                              type: "text",
                              "input-class": "text-right",
                              error: !t.isImportantWorkTreeOptionValid,
                              "error-message":
                                t.importantWorkTreeOptionErrorMsg,
                            },
                            scopedSlots: t._u([
                              { key: "before", fn: function () {}, proxy: !0 },
                            ]),
                            model: {
                              value: t.config.importantWorkTreeOption,
                              callback: function (e) {
                                t.$set(
                                  t.config,
                                  "importantWorkTreeOption",
                                  t._n(e),
                                );
                              },
                              expression: "config.importantWorkTreeOption",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("最大递归扫描深度")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("默认 2"),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-input", {
                            staticStyle: { "max-width": "100px" },
                            attrs: {
                              type: "number",
                              "input-class": "text-right",
                            },
                            model: {
                              value: t.config.scannerMaxRecursionDepth,
                              callback: function (e) {
                                t.$set(
                                  t.config,
                                  "scannerMaxRecursionDepth",
                                  t._n(e),
                                );
                              },
                              expression: "config.scannerMaxRecursionDepth",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("扫描时跳过清理音声库")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v(
                              "是否跳过清理不存在的音声（不推荐，默认不跳过）",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { side: "" } },
                        [
                          s("q-toggle", {
                            attrs: { dense: "" },
                            model: {
                              value: t.config.skipCleanup,
                              callback: function (e) {
                                t.$set(t.config, "skipCleanup", e);
                              },
                              expression: "config.skipCleanup",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [
                            t._v("启用文件监听（需重启服务器）"),
                          ]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v(
                              "启用后，监听文件夹变化，自动将新作品加入数据库（实验性功能）",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { side: "" } },
                        [
                          s("q-toggle", {
                            attrs: { dense: "" },
                            model: {
                              value: t.config.enableFileWatcher,
                              callback: function (e) {
                                t.$set(t.config, "enableFileWatcher", e);
                              },
                              expression: "config.enableFileWatcher",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-card",
            { staticClass: "q-ma-md" },
            [
              s(
                "q-toolbar",
	                [
	                  s("q-toolbar-title", [t._v("Web 服务器相关设置")]),
	                  s("div", { staticClass: "q-pr-xs" }, [
	                    t._v("更改此设置需要重启程序"),
	                  ]),
	                ],
	                1,
	              ),
	              s(
	                "q-list",
	                [
	                  s(
	                    "q-item",
	                    [
	                      s(
	                        "q-item-section",
	                        [
	                          s("q-item-label", [t._v("网站名")]),
	                          s("q-item-label", { attrs: { caption: "" } }, [
	                            t._v("浏览器标题和页面顶部显示的站点名称"),
	                          ]),
	                        ],
	                        1,
	                      ),
	                      s(
	                        "q-item-section",
	                        [
	                          s("q-input", {
	                            attrs: { dense: "", outlined: "" },
	                            model: {
	                              value: t.config.siteName,
	                              callback: function (e) {
	                                t.$set(t.config, "siteName", e);
	                              },
	                              expression: "config.siteName",
	                            },
	                          }),
	                        ],
	                        1,
	                      ),
	                    ],
	                    1,
	                  ),
	                  s(
	                    "q-item",
	                    [
	                      s(
	                        "q-item-section",
	                        [
	                          s("q-item-label", [t._v("媒体文件独立域名")]),
	                          s("q-item-label", { attrs: { caption: "" } }, [
	                            t._v(
	                              "为空则使用当前网站域名；填写后作品内音频、视频、文档、字幕等文件会使用该域名",
	                            ),
	                          ]),
	                        ],
	                        1,
	                      ),
	                      s(
	                        "q-item-section",
	                        [
	                          s("q-input", {
	                            attrs: {
	                              dense: "",
	                              outlined: "",
	                              placeholder:
	                                "https://pavement0825.10215632.xyz",
	                            },
	                            model: {
	                              value: t.config.mediaFileBaseUrl,
	                              callback: function (e) {
	                                t.$set(t.config, "mediaFileBaseUrl", e);
	                              },
	                              expression: "config.mediaFileBaseUrl",
	                            },
	                          }),
	                        ],
	                        1,
	                      ),
	                    ],
	                    1,
	                  ),
	                  s(
	                    "q-item",
	                    [
	                      s(
	                        "q-item-section",
	                        [
	                          s("q-item-label", [t._v("作品URL格式")]),
	                          s("q-item-label", { attrs: { caption: "" } }, [
	                            t._v(
	                              "控制作品链接使用 RJ码 或 ID数字，默认使用 RJ码",
	                            ),
	                          ]),
	                        ],
	                        1,
	                      ),
	                      s(
	                        "q-item-section",
	                        { attrs: { side: "" } },
	                        [
	                          s("q-btn-toggle", {
	                            attrs: {
	                              dense: "",
	                              outline: "",
	                              color: "primary",
	                              options: t.workUrlFormatOptions,
	                            },
	                            model: {
	                              value: t.config.workUrlFormat || "rj",
	                              callback: function (e) {
	                                t.$set(t.config, "workUrlFormat", e);
	                              },
	                              expression: "config.workUrlFormat",
	                            },
	                          }),
	                        ],
	                        1,
	                      ),
	                    ],
	                    1,
	                  ),
	                  s(
	                    "q-item",
	                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("用户验证")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v(
                              "是否启用用户验证（生产环境下无法修改此设置）",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-toggle", {
                            attrs: { dense: "", disable: t.config.production },
                            model: {
                              value: t.config.auth,
                              callback: function (e) {
                                t.$set(t.config, "auth", e);
                              },
	                              expression: "config.auth",
	                            },
	                          }),
	                        ],
	                        1,
	                      ),
	                    ],
	                    1,
	                  ),
	                  s(
	                    "q-item",
	                    [
	                      s(
	                        "q-item-section",
	                        [
	                          s("q-item-label", [t._v("游客模式")]),
	                          s("q-item-label", { attrs: { caption: "" } }, [
	                            t._v(
	                              "开启后未登录访问以游客权限运行，设置、AI翻译等敏感操作需要管理员登录",
	                            ),
	                          ]),
	                        ],
	                        1,
	                      ),
	                      s(
	                        "q-item-section",
	                        { attrs: { avatar: "" } },
	                        [
	                          s("q-toggle", {
	                            attrs: { dense: "" },
	                            model: {
	                              value: t.config.guestMode,
	                              callback: function (e) {
	                                t.$set(t.config, "guestMode", e);
	                              },
	                              expression: "config.guestMode",
	                            },
	                          }),
	                        ],
	                        1,
	                      ),
	                    ],
	                    1,
	                  ),
	                  s(
	                    "q-item",
	                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("启用Gzip")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("对网络传输启用Gzip压缩"),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-toggle", {
                            attrs: { dense: "" },
                            model: {
                              value: t.config.enableGzip,
                              callback: function (e) {
                                t.$set(t.config, "enableGzip", e);
                              },
                              expression: "config.enableGzip",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("设置端口号")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("服务器监听端口号"),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-input", {
                            staticStyle: { "max-width": "100px" },
                            attrs: {
                              type: "number",
                              "input-class": "text-right",
                            },
                            model: {
                              value: t.config.listenPort,
                              callback: function (e) {
                                t.$set(t.config, "listenPort", t._n(e));
                              },
                              expression: "config.listenPort",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("屏蔽远程连接")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v(
                              "只允许本地访问，默认为false。更改此设置需要重启程序",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-toggle", {
                            attrs: { dense: "" },
                            model: {
                              value: t.config.blockRemoteConnection,
                              callback: function (e) {
                                t.$set(t.config, "blockRemoteConnection", e);
                              },
                              expression: "config.blockRemoteConnection",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("token 过期时间")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("默认 2592000 秒"),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-input", {
                            staticStyle: { "max-width": "100px" },
                            attrs: {
                              type: "number",
                              "input-class": "text-right",
                            },
                            model: {
                              value: t.config.expiresIn,
                              callback: function (e) {
                                t.$set(t.config, "expiresIn", t._n(e));
                              },
                              expression: "config.expiresIn",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("每页显示的音声数量")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("默认 12"),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-input", {
                            staticStyle: { "max-width": "100px" },
                            attrs: {
                              type: "number",
                              "input-class": "text-right",
                            },
                            model: {
                              value: t.config.pageSize,
                              callback: function (e) {
                                t.$set(t.config, "pageSize", t._n(e));
                              },
                              expression: "config.pageSize",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-card",
            { staticClass: "q-ma-md" },
            [
              s("q-toolbar", [s("q-toolbar-title", [t._v("安全设置")])], 1),
              s(
                "q-list",
                [
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("生产环境")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v(
                              "此设置无法在网页端修改，详情请查阅GitHub Wiki中关于配置文件的说明",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-toggle", {
                            attrs: { dense: "", disable: "" },
                            model: {
                              value: t.config.production,
                              callback: function (e) {
                                t.$set(t.config, "production", e);
                              },
                              expression: "config.production",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-card",
            { staticClass: "q-ma-md" },
            [
              s("q-toolbar", [s("q-toolbar-title", [t._v("其它设置")])], 1),
              s(
                "q-list",
                [
                  s(
                    "q-item",
                    { staticStyle: { height: "70px" } },
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("检查更新")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v("打开网页时是否检查更新"),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-toggle", {
                            attrs: { dense: "" },
                            model: {
                              value: t.config.checkUpdate,
                              callback: function (e) {
                                t.$set(t.config, "checkUpdate", e);
                              },
                              expression: "config.checkUpdate",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  t.config.checkUpdate
                    ? s(
                        "q-item",
                        [
                          s(
                            "q-item-section",
                            [
                              s("q-item-label", [t._v("检查测试版更新")]),
                              s("q-item-label", { attrs: { caption: "" } }, [
                                t._v("是否检查测试版更新"),
                              ]),
                            ],
                            1,
                          ),
                          s(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              s("q-toggle", {
                                attrs: { dense: "" },
                                model: {
                                  value: t.config.checkBetaUpdate,
                                  callback: function (e) {
                                    t.$set(t.config, "checkBetaUpdate", e);
                                  },
                                  expression: "config.checkBetaUpdate",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : t._e(),
                  s(
                    "q-item",
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("数据库使用默认路径")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v(
                              "使用程序所在位置下的sqlite文件夹，并忽略databaseFolderDir设置（如无必要请勿修改，更改此设置需要重启程序）",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-toggle", {
                            attrs: { dense: "" },
                            model: {
                              value: t.config.dbUseDefaultPath,
                              callback: function (e) {
                                t.$set(t.config, "dbUseDefaultPath", e);
                              },
                              expression: "config.dbUseDefaultPath",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    "q-item",
                    [
                      s(
                        "q-item-section",
                        [
                          s("q-item-label", [t._v("封面使用默认路径")]),
                          s("q-item-label", { attrs: { caption: "" } }, [
                            t._v(
                              "使用程序所在位置下的covers文件夹，并忽略封面文件夹路径设置",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          s("q-toggle", {
                            attrs: { dense: "" },
                            model: {
                              value: t.config.coverUseDefaultPath,
                              callback: function (e) {
                                t.$set(t.config, "coverUseDefaultPath", e);
                              },
                              expression: "config.coverUseDefaultPath",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s("div", { staticClass: "save-btn-container-placeholder" }),
          s(
            "div",
            { staticClass: "save-btn-container" },
            [
              s("q-btn", {
                attrs: {
                  loading: t.loading,
                  label: "保存",
                  type: "submit",
                  color: "primary",
                },
              }),
            ],
            1,
          ),
        ],
        1,
      );
    },
    no = [],
    lo = {
      name: "Advanced",
      mixins: [pe],
      data() {
        return {
          config: {},
          loading: !1,
          rewindSeekTime: "5",
          forwardSeekTime: "30",
          darkModeTemp: "auto",
          workListModeTemp: F.WATERFALL,
          workListModeOptions: [
            { label: "瀑布流", value: F.WATERFALL },
            { label: "分页", value: F.PAGINATION },
          ],
          audioPlayerVersionOptions: [
            { label: "V1", value: "v1" },
            { label: "V2", value: "v2" },
          ],
          workUrlFormatOptions: [
            { label: "RJ码", value: "rj" },
            { label: "ID数字", value: "id" },
          ],
          transcodeOptionTemp: Q.OFF,
          transcodeOptionOptions: [
            { label: "禁用转码", value: Q.OFF },
            { label: "转码AAC(128k) 体积小，音质较低", value: Q.AAC_128 },
            { label: "转码AAC(320k) 体积较大，音质高", value: Q.AAC_320 },
          ],
          transcodeFromTypesDict: B(U),
          isImportantWorkTreeOptionValid: !0,
          importantWorkTreeOptionErrorMsg: "",
        };
      },
      watch: {
        darkModeTemp(t) {
          this.$store.commit("AudioPlayer/SET_DARK_MODE", t);
        },
        workListModeTemp(t) {
          this.$store.commit("AudioPlayer/SET_WORK_LIST_MODE", t);
        },
        transcodeOptionTemp(t) {
          this.$store.commit("AudioPlayer/SET_TRANSCODE_OPTION", t);
        },
        transcodeFromTypesDict: {
          handler(t, e) {
            this.$store.commit(
              "AudioPlayer/SET_TRANSCODE_FROM_TYPES",
              this.transcodeFromTypesTemp,
            );
          },
          deep: !0,
        },
        "config.importantWorkTreeOption"() {
          this.isImportantWorkTreeOptionValid =
            this.checkImportantWorkTreeOptionValid();
        },
      },
      computed: {
        ...Object(y["d"])("AudioPlayer", [
          "oldWorkCardUIStyle",
          "enableVideoSource",
          "enableVisualizer",
          "darkMode",
          "workListMode",
          "enableShowRecent",
          "oldSleepTimerUIStyle",
          "transcodeOption",
          "transcodeFromTypes",
          "audioPlayerVersion",
        ]),
        transcodeFromTypesTemp() {
          return Object.keys(this.transcodeFromTypesDict)
            .filter((t) => this.transcodeFromTypesDict[t])
            .join(",");
        },
      },
      methods: {
        requestConfig() {
          this.$axios
            .get("/asmr-site/api/config/admin")
            .then((t) => {
              ((this.config = t.data.config),
                this.$set(this.config, "scraperSources",
                  crawlerSourceSettings.normalizeSources(this.config.scraperSources)),
                this.config.audioPlayerVersion ||
                  this.$set(this.config, "audioPlayerVersion", "v1"),
                this.config.workUrlFormat ||
                  this.$set(this.config, "workUrlFormat", "rj"),
                void 0 === this.config.mediaFileBaseUrl &&
                  this.$set(this.config, "mediaFileBaseUrl", ""),
                this.$store.commit(
                  "AudioPlayer/SET_AUDIO_PLAYER_VERSION",
                  this.config.audioPlayerVersion,
                ),
                this.$store.commit(
                  "AudioPlayer/SET_WORK_URL_FORMAT",
                  this.config.workUrlFormat,
                ),
                (this.rewindSeekTime = this.config.rewindSeekTime.toString()),
                (this.forwardSeekTime =
                  this.config.forwardSeekTime.toString()));
            })
            .catch((t) => {
              t.response
                ? 401 !== t.response.status &&
                  this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t);
            });
        },
        onSubmit() {
          const sourceError = crawlerSourceSettings.validateSources(this.config.scraperSources);
          if (sourceError) {
            this.showErrNotif(sourceError);
            return;
          }
          ((this.config.rewindSeekTime = parseInt(this.rewindSeekTime)),
            (this.config.forwardSeekTime = parseInt(this.forwardSeekTime)),
            (this.loading = !0),
            this.$axios
              .put("/asmr-site/api/config/admin", { config: this.config })
              .then((t) => {
                ((this.loading = !1), this.showSuccNotif(t.data.message));
              })
              .catch((t) => {
                ((this.loading = !1),
                  t.response
                    ? this.showErrNotif(
                        t.response.data.error ||
                          `${t.response.status} ${t.response.statusText}`,
                      )
                    : this.showErrNotif(t.message || t));
              }));
        },
        changeOldWorkCardUIStyle(t) {
          this.$store.commit("AudioPlayer/SET_OLD_WORK_CARD_UI_STYLE", t);
        },
        changeOldSleepTimerUIStyle(t) {
          this.$store.commit("AudioPlayer/SET_OLD_SLEEP_TIMER_UI_STYLE", t);
        },
        changeEnableVideoSource(t) {
          this.$store.commit("AudioPlayer/SET_ENABLE_VIDEO_SOURCE", t);
        },
        changeEnableVisualizer(t) {
          this.$store.commit("AudioPlayer/SET_ENABLE_VISUALIZER", t);
        },
        changeEnableShowRecent(t) {
          this.$store.commit("AudioPlayer/SET_ENABLE_SHOW_RECENT", t);
        },
        changeAudioPlayerVersion(t) {
          (["v1", "v2"].includes(t) || (t = "v1"),
            this.$set(this.config, "audioPlayerVersion", t),
            this.$store.commit("AudioPlayer/SET_AUDIO_PLAYER_VERSION", t),
            this.$axios
              .put("/asmr-site/api/config/admin", { config: { audioPlayerVersion: t } })
              .then((t) => {
                this.showSuccNotif(t.data.message);
              })
              .catch((t) => {
                t.response
                  ? this.showErrNotif(
                      t.response.data.error ||
                        `${t.response.status} ${t.response.statusText}`,
                    )
                  : this.showErrNotif(t.message || t);
              }));
        },
        async uncensorTags() {
          this.$q
            .dialog({
              title: "注意",
              message: "此操作无法回滚，确定要将标签名反和谐吗？",
              cancel: "取消",
              ok: "确定",
            })
            .onOk(async () => {
              this.$axios
                .post("/asmr-site/api/uncensor/tags")
                .then((t) => {
                  this.$q.notify("修改成功");
                })
                .catch((t) => {
                  (this.$q.notify("修改失败", t.message), console.error(t));
                });
            });
        },
        checkImportantWorkTreeOptionValid() {
          const t = this.config.importantWorkTreeOption;
          if ("off" == t)
            return ((this.importantWorkTreeOptionErrorMsg = ""), !0);
          const e = t.split(":", 2);
          if (2 != e.length)
            return (
              (this.importantWorkTreeOptionErrorMsg =
                "重要文件夹配置项无效，配置不全"),
              !1
            );
          const s = e[0];
          if (!["time", "count"].includes(s))
            return (
              (this.importantWorkTreeOptionErrorMsg =
                "重要文件夹配置项模式异常，请以 time: 或者 count: 开头"),
              !1
            );
          try {
            RegExp(e[1], "i");
          } catch (a) {
            return (
              console.error(t, a),
              (this.importantWorkTreeOptionErrorMsg =
                "重要文件夹配置正则匹配创建失败，请在冒号后面输入正确的正则表达式"),
              !1
            );
          }
          return ((this.importantWorkTreeOptionErrorMsg = ""), !0);
        },
      },
      mounted() {
        ((this.darkModeTemp = this.darkMode),
          (this.workListModeTemp = this.workListMode),
          (this.transcodeOptionTemp = this.transcodeOption));
        const t = B(U);
        (this.transcodeFromTypes.split(",").forEach((e) => {
          void 0 !== t[e] && (t[e] = !0);
        }),
          (this.transcodeFromTypesDict = t));
      },
      created() {
        this.requestConfig();
      },
    },
    co = lo,
    uo = (s("c518"), s("8f8e")),
    ho = s("3786"),
    mo = Object(g["a"])(co, oo, no, !1, null, "334b9c6d", null),
    po = mo.exports;
  Bt()(mo, "components", {
    CrawlerSourceSettings: crawlerSourceSettings.createComponent({
      QBtn: zt["a"],
      QInput: We["a"],
      QSelect: Ua["a"],
      QToggle: Se["a"],
    }),
    QForm: rr["a"],
    QCard: Dt["a"],
    QToolbar: $s["a"],
    QToolbarTitle: Os["a"],
    QList: De["a"],
    QItem: Ft["a"],
    QItemSection: Qt["a"],
    QItemLabel: Wt["a"],
    QBtnToggle: za["a"],
    QCheckbox: uo["a"],
    QBtn: zt["a"],
    QToggle: Se["a"],
    QRadio: ho["a"],
    QInput: We["a"],
  });
  var go = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        [
          s(
            "q-card",
            { staticClass: "q-ma-md" },
            [
              s(
                "q-form",
                {
                  on: {
                    submit: function (e) {
                      return t.updateAdminPassword();
                    },
                  },
                },
                [
                  s(
                    "q-toolbar",
                    [s("q-toolbar-title", [t._v("修改管理员密码")])],
                    1,
                  ),
                  s(
                    "div",
                    { staticClass: "q-pa-sm" },
                    [
                      s("q-input", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          type: "password",
                          label: "新密码",
                          "lazy-rules": "",
                          rules: [
                            function (t) {
                              return t.length >= 5 || "密码长度至少为 5";
                            },
                          ],
                        },
                        model: {
                          value: t.adminNewPassword,
                          callback: function (e) {
                            t.adminNewPassword = e;
                          },
                          expression: "adminNewPassword",
                        },
                      }),
                      s("q-input", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          type: "password",
                          label: "确认密码",
                          "lazy-rules": "",
                          rules: [
                            function (t) {
                              return t.length >= 5 || "密码长度至少为 5";
                            },
                            function (e) {
                              return (
                                e === t.adminNewPassword || "两次密码输入不一致"
                              );
                            },
                          ],
                        },
                        model: {
                          value: t.adminConfirmPassword,
                          callback: function (e) {
                            t.adminConfirmPassword = e;
                          },
                          expression: "adminConfirmPassword",
                        },
                      }),
                      s(
                        "div",
                        { staticClass: "row justify-end" },
                        [
                          s("q-btn", {
                            attrs: {
                              loading: t.loadingUpdateAdminPassword,
                              type: "submit",
                              color: "primary",
                              label: "修改",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-card",
            { staticClass: "q-ma-md" },
            [
              s(
                "q-form",
                {
                  on: {
                    submit: function (e) {
                      return t.addNewUser();
                    },
                  },
                },
                [
                  s(
                    "q-toolbar",
                    [s("q-toolbar-title", [t._v("添加新用户")])],
                    1,
                  ),
                  s(
                    "div",
                    { staticClass: "q-pa-sm" },
                    [
                      s("q-select", {
                        staticClass: "q-mb-md",
                        attrs: {
                          dense: "",
                          outlined: "",
                          label: "用户组",
                          options: t.groups,
                        },
                        model: {
                          value: t.newuser.group,
                          callback: function (e) {
                            t.$set(t.newuser, "group", e);
                          },
                          expression: "newuser.group",
                        },
                      }),
                      s("q-input", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          label: "用户名",
                          required: "",
                          "lazy-rules": "",
                          rules: [
                            function (t) {
                              return t.length >= 5 || "用户名长度至少为 5";
                            },
                            function (e) {
                              return (
                                !t.users.find(function (t) {
                                  return t.name === e;
                                }) || "该名称已存在，用户名不能重复"
                              );
                            },
                          ],
                        },
                        model: {
                          value: t.newuser.name,
                          callback: function (e) {
                            t.$set(t.newuser, "name", e);
                          },
                          expression: "newuser.name",
                        },
                      }),
                      s("q-input", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          label: "密码",
                          "lazy-rules": "",
                          rules: [
                            function (t) {
                              return t.length >= 5 || "密码长度至少为 5";
                            },
                          ],
                        },
                        model: {
                          value: t.newuser.password,
                          callback: function (e) {
                            t.$set(t.newuser, "password", e);
                          },
                          expression: "newuser.password",
                        },
                      }),
                      s(
                        "div",
                        { staticClass: "row justify-end" },
                        [
                          s("q-btn", {
                            attrs: {
                              loading: t.loadingAddNewUser,
                              type: "submit",
                              color: "primary",
                              label: "添加",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-card",
            { staticClass: "q-ma-md q-pa-sm" },
            [
              s("q-table", {
                attrs: {
                  title: "所有用户",
                  data: t.users,
                  columns: t.columns,
                  "row-key": "name",
                  "selected-rows-label": t.getSelectedString,
                  selection: "multiple",
                  selected: t.selected,
                },
                on: {
                  "update:selected": function (e) {
                    t.selected = e;
                  },
                },
              }),
              s(
                "div",
                { staticClass: "row justify-end" },
                [
                  s("q-btn", {
                    attrs: {
                      loading: t.loadingDeleteUsers,
                      disable: 0 === t.selected.length,
                      color: "primary",
                      label: "删除",
                    },
                    on: {
                      click: function (e) {
                        t.confirm = !0;
                      },
                    },
                  }),
                ],
                1,
              ),
            ],
            1,
          ),
          s(
            "q-dialog",
            {
              attrs: { persistent: "" },
              model: {
                value: t.confirm,
                callback: function (e) {
                  t.confirm = e;
                },
                expression: "confirm",
              },
            },
            [
              s(
                "q-card",
                [
                  s("q-card-section", { staticClass: "row items-center" }, [
                    s("span", { staticClass: "q-ma-sm text-h6" }, [
                      t._v("确认删除选中用户？"),
                    ]),
                  ]),
                  s(
                    "q-card-actions",
                    { attrs: { align: "right" } },
                    [
                      s("q-btn", {
                        directives: [
                          { name: "close-popup", rawName: "v-close-popup" },
                        ],
                        attrs: { flat: "", label: "取消", color: "primary" },
                      }),
                      s("q-btn", {
                        directives: [
                          { name: "close-popup", rawName: "v-close-popup" },
                        ],
                        attrs: { flat: "", label: "确认", color: "primary" },
                        on: {
                          click: function (e) {
                            return t.deleteUsers();
                          },
                        },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
        ],
        1,
      );
    },
    fo = [],
    vo = {
      mixins: [pe],
      data() {
        return {
          selected: [],
          columns: [
            {
              name: "desc",
              required: !0,
              label: "用户名",
              align: "left",
              field: "name",
              sortable: !0,
            },
            {
              name: "calories",
              required: !0,
              label: "用户组",
              align: "center",
              field: "group",
              sortable: !0,
            },
          ],
          users: [],
          loadingDeleteUsers: !1,
          newuser: { name: "", password: "", group: "user" },
          groups: ["user", "guest"],
          loadingAddNewUser: !1,
          adminNewPassword: "",
          adminConfirmPassword: "",
          loadingUpdateAdminPassword: !1,
          confirm: !1,
        };
      },
      methods: {
        getSelectedString() {
          return 0 === this.selected.length
            ? ""
            : `${this.selected.length} record${this.selected.length > 1 ? "s" : ""} selected of ${this.users.length}`;
        },
        addNewUser() {
          ((this.loadingAddNewUser = !0),
            this.$axios
              .post("/asmr-site/api/credentials/user", {
                name: this.newuser.name,
                password: this.newuser.password,
                group: this.newuser.group,
              })
              .then((t) => {
                (this.users.push(this.newuser),
                  (this.loadingAddNewUser = !1),
                  this.showSuccNotif(t.data.message),
                  this.requestUsers());
              })
              .catch((t) => {
                ((this.loadingAddNewUser = !1),
                  422 === t.response.status
                    ? this.showErrNotif(t.response.data.errors[0].msg)
                    : 403 === t.response.status
                      ? this.showWarnNotif(t.response.data.error)
                      : this.showErrNotif(
                          t.response.data.error ||
                            `${t.response.status} ${t.response.statusText}`,
                        ));
              }));
        },
        deleteUsers() {
          ((this.loadingDeleteUsers = !0),
            this.$axios
              .delete("/asmr-site/api/credentials/user", {
                data: { users: this.selected },
              })
              .then((t) => {
                (this.selected.forEach((t) => {
                  const e = this.users.findIndex((e) => e.name === t.name);
                  this.users.splice(e, 1);
                }),
                  (this.loadingDeleteUsers = !1),
                  this.showSuccNotif(t.data.message),
                  this.requestUsers());
              })
              .catch((t) => {
                ((this.loadingDeleteUsers = !1),
                  t.response
                    ? 403 === t.response.status
                      ? this.showWarnNotif(t.response.data.error)
                      : this.showErrNotif(
                          t.response.data.error ||
                            `${t.response.status} ${t.response.statusText}`,
                        )
                    : this.showErrNotif(t.message || t));
              }));
        },
        updateAdminPassword() {
          ((this.loadingUpdateAdminPassword = !0),
            this.$axios
              .put("/asmr-site/api/credentials/user", {
                name: "admin",
                newPassword: this.adminNewPassword,
              })
              .then((t) => {
                this.loadingUpdateAdminPassword = !1;
                try {
                  this.$q.localStorage.set("jwt-token", "");
                } catch (e) {
                  this.showErrNotif(e.message);
                }
                (this.showSuccNotif(t.data.message),
                  this.$store.state.User.auth &&
                    (console.log("Got here"), this.$router.push("/login")));
              })
              .catch((t) => {
                ((this.loadingUpdateAdminPassword = !1),
                  t.response
                    ? this.showErrNotif(
                        t.response.data.error ||
                          `${t.response.status} ${t.response.statusText}`,
                      )
                    : this.showErrNotif(t.message || t));
              }));
        },
        requestUsers() {
          this.$axios
            .get("/asmr-site/api/credentials/users")
            .then((t) => {
              this.users = t.data.users;
            })
            .catch((t) => {
              t.response
                ? 401 !== t.response.status &&
                  this.showErrNotif(
                    t.response.data.error ||
                      `${t.response.status} ${t.response.statusText}`,
                  )
                : this.showErrNotif(t.message || t);
            });
        },
      },
      created() {
        this.requestUsers();
      },
    },
    yo = vo,
    wo = s("eaac"),
    bo = Object(g["a"])(yo, go, fo, !1, null, null, null),
    _o = bo.exports;
  (Bt()(bo, "components", {
    QCard: Dt["a"],
    QForm: rr["a"],
    QToolbar: $s["a"],
    QToolbarTitle: Os["a"],
    QInput: We["a"],
    QBtn: zt["a"],
    QSelect: Ua["a"],
    QTable: wo["a"],
    QDialog: Ue["a"],
    QCardSection: Re["a"],
    QCardActions: ze["a"],
  }),
    Bt()(bo, "directives", { ClosePopup: je["a"] }));
  var qo = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s("div", { staticClass: "q-pa-lg" }, [
        t.$q.platform.is.safari && !t.$q.platform.is.desktop
          ? s("div", [s("h2", [t._v("iOS Bug")]), t._m(0)])
          : t._e(),
        s("h2", [t._v("GitHub")]),
        s("div", { staticClass: "tab" }, [
          s(
            "a",
            { attrs: { href: "https://github.com/Number178/kikoeru-express" } },
            [
              s("q-btn", {
                attrs: {
                  outline: "",
                  label: "后端仓库",
                  push: "",
                  color: "primary",
                },
              }),
            ],
            1,
          ),
          s("p", [
            t._v(
              "如果你发现了任何bug或者体验上的任何问题，欢迎在这个仓库里提交issue反馈。",
            ),
          ]),
          s("br"),
          s(
            "a",
            { attrs: { href: "https://github.com/Number178/kikoeru-quasar" } },
            [
              s("q-btn", {
                staticClass: "q-mt-lg",
                attrs: {
                  outline: "",
                  label: "前端仓库",
                  push: "",
                  color: "primary",
                },
              }),
            ],
            1,
          ),
          s("br"),
          s(
            "a",
            {
              attrs: { href: "https://github.com/Number178/kikoeru-translate" },
            },
            [
              s("q-btn", {
                staticClass: "q-mt-lg",
                attrs: {
                  outline: "",
                  label: "AI翻译仓库",
                  push: "",
                  color: "primary",
                },
              }),
            ],
            1,
          ),
        ]),
        s("h2", [t._v("发布")]),
        s("div", { staticClass: "tab" }, [
          s(
            "a",
            { attrs: { href: "https://hub.docker.com/r/number17/kikoeru" } },
            [
              s("q-btn", {
                attrs: {
                  outline: "",
                  label: "Docker镜像地址",
                  push: "",
                  color: "secondary",
                },
              }),
            ],
            1,
          ),
          s("br"),
          s("p", [
            t._v(
              "Docker Hub主页中会有每一次更新的功能说明，以及AI翻译工具的使用说明文档、录屏、权重等。",
            ),
          ]),
          s("br"),
          s(
            "a",
            {
              attrs: {
                href: "https://github.com/Number178/kikoeru-express/releases",
              },
            },
            [
              s("q-btn", {
                staticClass: "q-mt-lg",
                attrs: {
                  outline: "",
                  label: "Windows本地运行包",
                  push: "",
                  color: "secondary",
                },
              }),
            ],
            1,
          ),
          s("p", [t._v("Windows包和Docker镜像同步发布，功能一致。")]),
          s("br"),
        ]),
        s("h2", [t._v("iOS客户端")]),
        s("div", { staticClass: "tab" }, [
          s(
            "a",
            { attrs: { href: "https://testflight.apple.com/join/Zh9mreFq" } },
            [
              s("q-btn", {
                attrs: {
                  outline: "",
                  label: "加入test flight测试",
                  push: "",
                  color: "warning",
                },
              }),
            ],
            1,
          ),
          s("p", [
            t._v("解决iOS17.3以上系统，后台无法连播的bug，持续更新功能中。"),
          ]),
          s("br"),
          s(
            "a",
            { attrs: { href: "https://number17.online/docs/kikoeru-app/" } },
            [
              s("q-btn", {
                staticClass: "q-mt-lg",
                attrs: {
                  outline: "",
                  label: "iOS客户端使用说明",
                  push: "",
                  color: "warning",
                },
              }),
            ],
            1,
          ),
        ]),
      ]);
    },
    ko = [
      function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "tab" }, [
          s("p", [
            t._v(
              "\n        iOS 17.3 及后续版本会出现后台无法连播音频的bug，猜测是苹果官方出于节省后台流量，\n        避免非用户触发的自动播放，此bug暂无修复方案。\n        ",
            ),
            s(
              "a",
              {
                attrs: {
                  href: "https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html",
                },
              },
              [
                t._v(
                  "\n          参考链接：User Control of Downloads Over Cellular Networks\n        ",
                ),
              ],
            ),
            s("br"),
            t._v(
              "\n        有碰到此问题的用户可以考虑使用下方的iOS原生客户端（无后台连播问题），\n        点击“加入TestFlight测试”，并点击网页中的“开始测试”后，即可使用该客户端，app内使用方法可参考最下方的网站链接。\n      ",
            ),
          ]),
        ]);
      },
    ],
    So = {
      name: "About",
      data() {
        return { name: "", password: "" };
      },
      methods: {},
    },
    Co = So,
    xo = (s("cd54"), Object(g["a"])(Co, qo, ko, !1, null, "70f649c6", null)),
    To = xo.exports;
  Bt()(xo, "components", { QBtn: zt["a"] });
  var Io = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        [
          s("div", { staticClass: "text-h2" }, [t._v("同步")]),
          s(
            "div",
            { staticClass: "q-pa-lg" },
            [
              s("q-select", {
                attrs: {
                  label: "存储库目录",
                  options: t.rootFolders,
                  "option-value": function (t) {
                    return Object(t) === t && "name" in t ? t.name : null;
                  },
                  "option-label": function (t) {
                    return Object(t) === t && "name" in t
                      ? t.name + ": " + t.path
                      : "- Null -";
                  },
                  "option-disable": function (t) {
                    return Object(t) !== t || !0 === t.inactive;
                  },
                },
                scopedSlots: t._u([
                  {
                    key: "hint",
                    fn: function () {
                      return [
                        t._v(
                          "\n        保存路径：" +
                            t._s(t.selectRootFolder.path) +
                            "\n      ",
                        ),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
                model: {
                  value: t.selectRootFolder,
                  callback: function (e) {
                    t.selectRootFolder = e;
                  },
                  expression: "selectRootFolder",
                },
              }),
              s("q-input", {
                attrs: {
                  label: "服务器地址",
                  hint: "服务器地址，http://xxxxx，末尾不要有斜杠",
                  rules: [
                    function (t) {
                      return !!t || "require host";
                    },
                  ],
                },
                model: {
                  value: t.host,
                  callback: function (e) {
                    t.host = e;
                  },
                  expression: "host",
                },
              }),
              s("q-input", {
                attrs: { label: "meta请求模板" },
                scopedSlots: t._u([
                  {
                    key: "prepend",
                    fn: function () {
                      return [
                        s("q-btn", {
                          attrs: {
                            round: "",
                            dense: "",
                            flat: "",
                            icon: "refresh",
                          },
                          on: {
                            click: function (e) {
                              t.metaApi = t.defaultMetaApi;
                            },
                          },
                        }),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
                model: {
                  value: t.metaApi,
                  callback: function (e) {
                    t.metaApi = e;
                  },
                  expression: "metaApi",
                },
              }),
              s("q-input", {
                attrs: { label: "track请求模板" },
                scopedSlots: t._u([
                  {
                    key: "prepend",
                    fn: function () {
                      return [
                        s("q-btn", {
                          attrs: {
                            round: "",
                            dense: "",
                            flat: "",
                            icon: "refresh",
                          },
                          on: {
                            click: function (e) {
                              t.trackApi = t.defaultTrackApi;
                            },
                          },
                        }),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
                model: {
                  value: t.trackApi,
                  callback: function (e) {
                    t.trackApi = e;
                  },
                  expression: "trackApi",
                },
              }),
              s("q-input", {
                attrs: {
                  label: "番号",
                  hint: "RJxxxxxxxx",
                  rules: [
                    function (e) {
                      return (
                        t.filterValidateRegex.test(e) ||
                        "require code like RJxxxxxxxx or VJxxxxxx"
                      );
                    },
                  ],
                },
                on: { change: t.onFilterSubmit },
                scopedSlots: t._u([
                  {
                    key: "append",
                    fn: function () {
                      return [
                        s("q-btn", {
                          attrs: {
                            round: "",
                            dense: "",
                            flat: "",
                            icon: "search",
                          },
                          on: { click: t.onFilterSubmit },
                        }),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
                model: {
                  value: t.filter,
                  callback: function (e) {
                    t.filter = e;
                  },
                  expression: "filter",
                },
              }),
            ],
            1,
          ),
          s(
            "q-dialog",
            {
              attrs: { seamless: "" },
              model: {
                value: t.showTrackList,
                callback: function (e) {
                  t.showTrackList = e;
                },
                expression: "showTrackList",
              },
            },
            [
              s("SyncTrackListEditor", {
                attrs: { tracks: t.tracks },
                on: { confirmSync: t.onConfirmSync },
              }),
            ],
            1,
          ),
          s("SyncTaskListStatus"),
        ],
        1,
      );
    },
    Eo = [],
    Po = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        { staticClass: "q-pa-lg" },
        [
          s(
            "div",
            { staticClass: "row" },
            [
              s("div", { staticClass: "text-h6" }, [t._v("任务列表")]),
              s(
                "q-btn",
                {
                  staticClass: "q-mx-lg",
                  attrs: { color: "grey" },
                  on: { click: t.checkStatus },
                },
                [t._v("刷新")],
              ),
            ],
            1,
          ),
          s(
            "q-list",
            t._l(t.taskList, function (e) {
              return s(
                "q-item",
                { key: e.id },
                [
                  s(
                    "q-item-section",
                    [
                      s("q-item-label", [t._v(t._s(e.code))]),
                      s("q-item-label", { attrs: { caption: "" } }, [
                        t._v(t._s(e.id)),
                      ]),
                    ],
                    1,
                  ),
                  s(
                    "q-item-section",
                    [
                      s("q-item-label", [t._v(t._s(e.status))]),
                      s("q-item-label", { attrs: { caption: "" } }, [
                        t._v("finished:" + t._s(e.finished)),
                      ]),
                      s("q-item-label", { attrs: { caption: "" } }, [
                        t._v("error:" + t._s(e.error)),
                      ]),
                      s("q-item-label", { attrs: { caption: "" } }, [
                        t._v("stop:" + t._s(e.stop)),
                      ]),
                    ],
                    1,
                  ),
                  s("q-item-section", { attrs: { top: "", side: "" } }, [
                    s(
                      "div",
                      { staticClass: "text-grey-8 q-gutter-xs" },
                      [
                        e.finished
                          ? s("q-btn", {
                              staticClass: "gt-xs",
                              attrs: {
                                color: "red",
                                size: "12px",
                                flat: "",
                                dense: "",
                                round: "",
                                icon: "delete",
                              },
                              on: {
                                click: function (s) {
                                  return t.onDeleteTask(e.id);
                                },
                              },
                            })
                          : t._e(),
                        e.finished
                          ? t._e()
                          : s("q-btn", {
                              staticClass: "gt-xs",
                              attrs: {
                                color: "yello",
                                size: "12px",
                                flat: "",
                                dense: "",
                                round: "",
                                icon: "stop",
                              },
                              on: {
                                click: function (s) {
                                  return t.onStopTask(e.id);
                                },
                              },
                            }),
                        e.finished
                          ? s("q-btn", {
                              staticClass: "gt-xs",
                              attrs: {
                                color: "grey",
                                size: "12px",
                                flat: "",
                                dense: "",
                                round: "",
                                icon: "refresh",
                              },
                              on: {
                                click: function (s) {
                                  return t.onRestartTask(e.id);
                                },
                              },
                            })
                          : t._e(),
                      ],
                      1,
                    ),
                  ]),
                ],
                1,
              );
            }),
            1,
          ),
        ],
        1,
      );
    },
    Lo = [],
    Ao = {
      name: "TranscodingStatus",
      mixins: [pe],
      computed: {
        value() {
          if (
            null === this.serverStatus.progress ||
            void 0 === this.serverStatus.progress
          )
            return 0;
          const t = this.serverStatus.progress.percent;
          return "number" != typeof t ? 0 : t;
        },
      },
      data() {
        return { taskList: [], intervalId: 0, refreshIntervalMs: 1e3 };
      },
      methods: {
        async checkStatus() {
          const t = await A.getSyncTaskListStatus();
          this.taskList = t;
        },
        resetChecker() {
          (this.checkStatus(),
            (this.intervalId = setInterval(() => {
              this.checkStatus();
            }, this.refreshIntervalMs)),
            console.log(
              "start transcoding interval check",
              this.trackHash,
              this.intervalId,
            ));
        },
        async onDeleteTask(t) {
          try {
            const e = await A.deleteSyncTask(t);
            e && this.showSuccNotif("delete task success");
          } catch (e) {
            this.showErrNotif("delete task failed: " + e.message);
          }
          await this.checkStatus();
        },
        async onStopTask(t) {
          try {
            const e = await A.stopSyncTask(t);
            e && this.showSuccNotif("stop task success");
          } catch (e) {
            this.showErrNotif("stop task failed: " + e.message);
          }
          await this.checkStatus();
        },
        async onRestartTask(t) {
          try {
            const e = await A.restartSyncTask(t);
            e && this.showSuccNotif("restart task success");
          } catch (e) {
            this.showErrNotif("restart task failed: " + e.message);
          }
          await this.checkStatus();
        },
      },
      mounted() {
        this.resetChecker();
      },
      beforeDestroy() {
        (clearInterval(this.intervalId), (this.intervalId = 0));
      },
    },
    $o = Ao,
    Oo = Object(g["a"])($o, Po, Lo, !1, null, "36a85c35", null),
    No = Oo.exports;
  Bt()(Oo, "components", {
    QBtn: zt["a"],
    QList: De["a"],
    QItem: Ft["a"],
    QItemSection: Qt["a"],
    QItemLabel: Wt["a"],
  });
  var Mo = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "q-card",
        {
          staticStyle: {
            width: "90vw",
            "max-width": "90vw",
            height: "80vh",
            "max-height": "80vh",
          },
        },
        [
          s(
            "q-card-section",
            { staticClass: "row justify-between items-center full-width" },
            [
              s("div", { staticClass: "text-h5" }, [t._v("同步文件选择")]),
              s(
                "div",
                [
                  s(
                    "q-btn",
                    {
                      directives: [
                        { name: "close-popup", rawName: "v-close-popup" },
                      ],
                      staticClass: "primary q-mr-lg",
                      attrs: { color: "primary" },
                      on: { click: t.confirmSync },
                    },
                    [t._v("确认同步")],
                  ),
                  s("q-btn", {
                    directives: [
                      { name: "close-popup", rawName: "v-close-popup" },
                    ],
                    attrs: { color: "red", icon: "close" },
                  }),
                ],
                1,
              ),
            ],
          ),
          t.selectedSize > 0
            ? s("div", [
                t._v("已选择 " + t._s(t.formatBytes(t.selectedSize, 1))),
              ])
            : t._e(),
          s(
            "q-scroll-area",
            { staticStyle: { height: "70%", "max-width": "100%" } },
            [
              s("q-tree", {
                staticClass: "q-px-lg",
                attrs: {
                  nodes: t.internalTracks,
                  "default-expand-all": "",
                  "node-key": "relativePath",
                  "label-key": "title",
                  "children-key": "children",
                },
                scopedSlots: t._u([
                  {
                    key: "default-header",
                    fn: function (e) {
                      return [
                        s(
                          "div",
                          {
                            staticClass:
                              "row items-center justify-between full-width\t",
                          },
                          [
                            s(
                              "div",
                              [
                                s("q-checkbox", {
                                  attrs: {
                                    value: [!1, "maybe", !0][e.node.selection],
                                  },
                                  on: {
                                    input: function (s) {
                                      return t.onClickNode(e.node);
                                    },
                                  },
                                }),
                                s("span", [t._v(t._s(e.node.title))]),
                              ],
                              1,
                            ),
                            s(
                              "div",
                              {
                                staticClass:
                                  "row iterms-center justify-between col-2",
                              },
                              [
                                "folder" !== e.node.type
                                  ? s("div", [
                                      t._v(
                                        t._s(
                                          t.getExtensionWithoutDot(
                                            e.node.title,
                                          ),
                                        ),
                                      ),
                                    ])
                                  : t._e(),
                                e.node.size > 0
                                  ? s(
                                      "div",
                                      { staticStyle: { width: "50pt" } },
                                      [
                                        t._v(
                                          t._s(t.formatBytes(e.node.size, 1)),
                                        ),
                                      ],
                                    )
                                  : t._e(),
                              ],
                            ),
                          ],
                        ),
                      ];
                    },
                  },
                ]),
              }),
            ],
            1,
          ),
        ],
        1,
      );
    },
    Ro = [],
    Do = s("df7c"),
    Fo = s.n(Do);
  const Qo = { No: 0, Some: 1, Yes: 2 };
  var Uo = {
      name: "SyncTrackListEditor",
      props: { tracks: { type: Array, required: !0 } },
      data() {
        return { internalTracks: [], selectedSize: 0 };
      },
      watch: {
        tracks(t) {
          this.setupNewTracks(t);
        },
      },
      methods: {
        formatBytes: H,
        getExtensionWithoutDot: G,
        onClickNode(t) {
          t.selection >= Qo.Some
            ? this.setSelectionAll(t, Qo.No)
            : this.setSelectionAll(t, Qo.Yes);
        },
        setSelectionAll(t, e) {
          ((t.selection = e),
            "folder" === t.type &&
              t.children &&
              t.children.forEach((t) => {
                this.setSelectionAll(t, e);
              }),
            (this.selectedSize = this.refreshTracks(this.internalTracks)));
        },
        refreshTracks(t) {
          for (let e of t)
            if ("folder" === e.type && e.children) {
              const t = this.refreshTracks(e.children);
              ((e.size = t),
                e.children.every((t) => 2 == t.selection)
                  ? (e.selection = Qo.Yes)
                  : e.children.every((t) => 0 == t.selection)
                    ? (e.selection = Qo.No)
                    : (e.selection = Qo.Some));
            }
          return this.sumSelectedSize(t);
        },
        sumSelectedSize(t) {
          const e = t
            .filter((t) => t.selection !== Qo.No)
            .map((t) => t.size)
            .filter((t) => "number" == typeof t);
          return e.length > 0 ? e.reduceRight((t, e) => t + e) : void 0;
        },
        assignTrackSelectionStatus(t, e = "") {
          t.forEach((t) => {
            ((t.selection = Qo.Yes),
              (t.relativePath = Fo.a.join(e, t.title)),
              "folder" === t.type &&
                t.children &&
                this.assignTrackSelectionStatus(t.children, t.relativePath));
          });
        },
        confirmSync() {
          const t = this.cleanSyncOnlyTracks(B(this.internalTracks));
          this.$emit("confirmSync", t);
        },
        cleanSyncOnlyTracks(t) {
          const e = t.filter((t) => t.selection !== Qo.No);
          return (
            e.forEach((t) => {
              ("folder" === t.type &&
                t.children &&
                (t.children = this.cleanSyncOnlyTracks(t.children)),
                delete t.selection);
            }),
            e
          );
        },
        setupNewTracks(t) {
          const e = B(t);
          (this.assignTrackSelectionStatus(e),
            (this.selectedSize = this.refreshTracks(e)),
            (this.internalTracks = e));
        },
      },
      mounted() {
        this.setupNewTracks(this.tracks);
      },
    },
    Wo = Uo,
    zo = s("7f41"),
    jo = Object(g["a"])(Wo, Mo, Ro, !1, null, "0bf5b34e", null),
    Bo = jo.exports;
  (Bt()(jo, "components", {
    QCard: Dt["a"],
    QCardSection: Re["a"],
    QBtn: zt["a"],
    QScrollArea: Ms["a"],
    QTree: zo["a"],
    QCheckbox: uo["a"],
  }),
    Bt()(jo, "directives", { ClosePopup: je["a"] }));
  const Vo = "syncRootFolderName",
    Ho = "syncMetaApi",
    Go = "syncTrackApi",
    Yo = "syncHost";
  var Ko = {
      name: "Syncer",
      components: { SyncTaskListStatus: No, SyncTrackListEditor: Bo },
      mixins: [pe],
      data() {
        return {
          host: "",
          metaApi: "",
          trackApi: "",
          defaultMetaApi: "/asmr-site/api/workInfo/{code_for_the_work}",
          defaultTrackApi: "/asmr-site/api/tracks/{code_for_the_work}",
          filter: "",
          filterValidateRegex: /^[A-Za-z]{2}((\d{6})|(\d{8}))$/,
          selectRootFolder: null,
          rootFolders: [],
          showTrackList: !1,
          tracks: [],
        };
      },
      methods: {
        async onFilterSubmit() {
          try {
            const t = await A.getSyncInfo(
              this.host,
              this.metaApi,
              this.trackApi,
              this.filter.toUpperCase(),
            );
            (console.log("syncer track list: ", t),
              (this.tracks = t),
              (this.showTrackList = !0));
          } catch (t) {
            this.showErrNotif("get info failed: " + t.message);
          }
        },
        async onConfirmSync(t) {
          console.log("confim sync: ", t);
          const e = await A.newSyncTask(
            this.host,
            this.filter.toUpperCase(),
            this.selectRootFolder.name,
            !0,
            t,
          );
          console.log("sync task id: ", e);
        },
      },
      watch: {
        selectRootFolder(t) {
          t && t.name && this.$q.localStorage.set(Vo, t.name);
        },
        host(t) {
          (t.endsWith("/") && (this.host = t.substring(0, t.length - 1)),
            this.$q.localStorage.set(Yo, t));
        },
        metaApi(t) {
          this.$q.localStorage.set(Ho, t);
        },
        trackApi(t) {
          this.$q.localStorage.set(Go, t);
        },
      },
      async mounted() {
        const t = await A.getServerConfig();
        (console.log("rootFolders: ", t.rootFolders),
          (this.rootFolders = t.rootFolders));
        let e = null;
        if (this.$q.localStorage.has(Vo)) {
          const s = this.$q.localStorage.getItem(Vo);
          e = t.rootFolders.filter((t) => t.name == s)[0];
        }
        ((this.selectRootFolder = e || t.rootFolders[0]),
          this.$q.localStorage.has(Yo) &&
            (this.host = this.$q.localStorage.getItem(Yo)),
          this.$q.localStorage.has(Ho)
            ? (this.metaApi = this.$q.localStorage.getItem(Ho))
            : (this.metaApi = this.defaultMetaApi),
          this.$q.localStorage.has(Go)
            ? (this.trackApi = this.$q.localStorage.getItem(Go))
            : (this.trackApi = this.defaultTrackApi));
      },
      created() {},
    },
    Jo = Ko,
    Zo = Object(g["a"])(Jo, Io, Eo, !1, null, null, null),
    Xo = Zo.exports;
  function tn(t, e) {
    return e.map((e) => ((e.path = t + "" + e.path), e));
  }
  Bt()(Zo, "components", {
    QSelect: Ua["a"],
    QInput: We["a"],
    QBtn: zt["a"],
    QDialog: Ue["a"],
  });
  function DownloadTaskJoinPath(t, e) {
    return t ? t + "/" + e : e;
  }
  function DownloadTaskNormalizePathParts(t) {
    return String(t || "")
      .replace(/\\/g, "/")
      .split("/")
      .filter((t) => t && "." !== t && ".." !== t);
  }
  function DownloadTaskLimitPathPart(t, e = 180) {
    if (t.length <= e) return t;
    const s = /(\.[^.]*)$/.exec(t),
      a = s ? s[1] : "",
      i = Math.max(32, e - a.length);
    return t.slice(0, i) + a;
  }
  function DownloadTaskSanitizePathPart(t) {
    let e = String(t || "")
      .replace(/[<>:"/\\|?*\x00-\x1f\x7f]/g, "_")
      .replace(/\s+$/g, "")
      .replace(/[.]+$/g, "_");
    if (!e) e = "_";
    if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\..*)?$/i.test(e))
      e = "_" + e;
    return DownloadTaskLimitPathPart(e);
  }
  function DownloadTaskSafePath(t) {
    const e = DownloadTaskNormalizePathParts(t).map(DownloadTaskSanitizePathPart);
    return e.length ? e.join("/") : "_";
  }
  function DownloadTaskNodeIcon(t) {
    return "folder" === t.type
      ? "folder"
      : "audio" === t.type
        ? isVideoMediaTitle(t.title)
          ? "movie"
          : "music_note"
        : "text" === t.type
          ? "description"
          : "image" === t.type
            ? "photo"
            : "other" === t.type
              ? "insert_drive_file"
              : "insert_drive_file";
  }
  const DownloadTaskFormatOrder = [
    "mp3",
    "wav",
    "flac",
    "m4a",
    "ogg",
    "opus",
    "aac",
    "txt",
    "vtt",
    "lrc",
    "srt",
    "ass",
    "png",
    "jpg",
    "webp",
    "gif",
    "bmp",
    "other",
  ];
  function DownloadTaskInferFormat(t) {
    const e = String(t.relativePath || t.title || "").trim(),
      s = /\.([a-z0-9]{1,16})$/i.exec(e),
      a = s ? s[1].toLowerCase() : "";
    return "jpeg" === a
      ? "jpg"
      : DownloadTaskFormatOrder.includes(a)
        ? a
        : "other";
  }
  function DownloadTaskFormatSort(t, e) {
    const s = DownloadTaskFormatOrder.indexOf(t),
      a = DownloadTaskFormatOrder.indexOf(e);
    return (-1 === s ? 999 : s) - (-1 === a ? 999 : a) || t.localeCompare(e);
  }
  const DownloadTaskZipCrcTable = (() => {
    const t = new Uint32Array(256);
    for (let e = 0; e < 256; e++) {
      let s = e;
      for (let a = 0; a < 8; a++)
        s = 1 & s ? 3988292384 ^ (s >>> 1) : s >>> 1;
      t[e] = s >>> 0;
    }
    return t;
  })();
  function DownloadTaskZipNormalizePath(t) {
    return DownloadTaskSafePath(t);
  }
  function DownloadTaskZipEncodePath(t) {
    return new TextEncoder().encode(DownloadTaskZipNormalizePath(t));
  }
  function DownloadTaskZipU16(t) {
    const e = new Uint8Array(2);
    return new DataView(e.buffer).setUint16(0, t, !0), e;
  }
  function DownloadTaskZipU32(t) {
    const e = new Uint8Array(4);
    return new DataView(e.buffer).setUint32(0, t >>> 0, !0), e;
  }
  function DownloadTaskZipUpdateCrc(t, e) {
    let s = void 0 === t ? 4294967295 : t >>> 0;
    for (let t = 0; t < e.length; t++)
      s = DownloadTaskZipCrcTable[(s ^ e[t]) & 255] ^ (s >>> 8);
    return s >>> 0;
  }
  function DownloadTaskZipFinalizeCrc(t) {
    return (~t) >>> 0;
  }
  function DownloadTaskZipDosTime(t = new Date()) {
    const e = t.getHours(),
      s = t.getMinutes(),
      a = Math.floor(t.getSeconds() / 2),
      i = t.getFullYear() - 1980,
      n = t.getMonth() + 1,
      r = t.getDate();
    return {
      time: (e << 11) | (s << 5) | a,
      date: (i << 9) | (n << 5) | r,
    };
  }
  var DownloadTaskDialogRender = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s(
        "div",
        [
          s(
            "q-dialog",
            {
              attrs: {
                persistent: t.isDownloading,
                "content-class": "work-download-dialog",
              },
              model: {
                value: t.value,
                callback: function (e) {
                  t.$emit("input", e);
                },
                expression: "value",
              },
            },
            [
              s(
                "q-card",
            {
              staticClass: "work-download-dialog-card",
              staticStyle: {
                width: "92vw",
                "max-width": "980px",
                height: "88vh",
                "max-height": "88vh",
                display: "flex",
                "flex-direction": "column",
              },
            },
            [
              s(
                "q-card-section",
                {
                  staticClass:
                    "work-download-dialog-header row items-start justify-between q-pb-none",
                },
                [
                  s("div", [
                    s("div", { staticClass: "text-h6" }, [
                      t._v("创建下载任务"),
                    ]),
                    s("div", { staticClass: "text-caption text-grey-6" }, [
                      t._v(
                        t._s(t.workCode) +
                          " · 保留 RJ 目录结构与原始子目录",
                      ),
                    ]),
                  ]),
                  s("q-btn", {
                    attrs: { flat: "", round: "", dense: "", icon: "close" },
                    on: { click: t.close },
                  }),
                ],
                1,
              ),
              s(
                "q-card-section",
                { staticClass: "work-download-dialog-controls q-pt-sm q-pb-none" },
                [
                  s(
                    "div",
                    {
                      staticClass:
                        "download-format-filter row items-center no-wrap",
                    },
                    t._l(t.formatFilterOptions, function (e) {
                      return s(
                        "q-chip",
                        {
                          key: e.value,
                          staticClass: "download-format-chip",
                          attrs: {
                            clickable: "",
                            dense: "",
                            size: "sm",
                            color: t.formatFilters[e.value] ? "primary" : "grey-3",
                            "text-color": t.formatFilters[e.value]
                              ? "white"
                              : "grey-8",
                            outline: !t.formatFilters[e.value],
                            disable: t.isDownloading,
                          },
                          on: {
                            click: function () {
                              return t.toggleFormatFilter(e.value);
                            },
                          },
                        },
                        [t._v(t._s(e.label))]
                      );
                    }),
                    1,
                  ),
                  s(
                    "div",
                    {
                      staticClass:
                        "download-task-toolbar row items-center q-col-gutter-sm q-mt-sm",
                    },
                    [
                      s("q-input", {
                        staticStyle: { width: "120px" },
                        attrs: {
                          dense: "",
                          outlined: "",
                          type: "number",
                          min: "1",
                          max: "16",
                          label: "并发",
                          disable: t.isDownloading,
                        },
                        model: {
                          value: t.concurrency,
                          callback: function (e) {
                            t.concurrency = e;
                          },
                          expression: "concurrency",
                        },
                      }),
                      s("q-btn", {
                        attrs: {
                          flat: "",
                          dense: "",
                          icon: "select_all",
                          label: "全选当前筛选",
                          disable: t.isDownloading,
                        },
                        on: { click: t.selectAllVisible },
                      }),
                      s("q-btn", {
                        attrs: {
                          flat: "",
                          dense: "",
                          icon: "remove_done",
                          label: "清空当前筛选",
                          disable: t.isDownloading,
                        },
                        on: { click: t.clearAllVisible },
                      }),
                      s("div", { staticClass: "text-caption text-grey-6" }, [
                        t._v("已选择 " + t._s(t.selectedCount) + " 个文件"),
                      ]),
                    ],
                    1,
                  ),
                  t.isDownloading
                    ? s("div", { staticClass: "q-mt-sm" }, [
                        s("q-linear-progress", {
                          attrs: { value: t.downloadProgress, color: "primary" },
                        }),
                        s("div", { staticClass: "text-caption q-mt-xs" }, [
                          t._v(t._s(t.downloadStatus)),
                        ]),
                      ])
                    : t._e(),
                  !t.canUseDirectoryPicker
                    ? s("div", { staticClass: "text-caption text-warning q-mt-sm" }, [
                        t._v(t._s(t.downloadModeNotice)),
                      ])
                    : t._e(),
                  t.isMobileDownloadPlatform
                    ? s(
                        "div",
	                        {
	                          staticClass:
	                            "mobile-download-strategies q-mt-sm",
	                        },
                        t._l(t.mobileDownloadStrategies, function (e) {
                          return s("q-btn", {
                            key: e.value,
                            attrs: {
                              dense: "",
                              unelevated: "",
                              color: "primary",
                              label: e.label,
                              loading:
                                t.isDownloading &&
                                t.activeDownloadStrategy === e.value,
                              disable: t.isDownloading,
                            },
                            on: {
                              click: function () {
                                return t.startDownload(e.value);
                              },
                            },
                          });
                        }),
                        1,
                      )
                    : t._e(),
                ],
                1,
              ),
              s("q-separator"),
              s(
                "q-scroll-area",
                {
                  staticClass: "work-download-dialog-scroll",
                  staticStyle: {
                    height: "calc(100% - 240px)",
                    "max-width": "100%",
                  },
                },
                [
                  s("q-tree", {
                    staticClass: "download-task-tree q-px-xs q-py-xs",
                    attrs: {
                      nodes: t.internalTracks,
                      "default-expand-all": "",
                      "node-key": "relativePath",
                      "label-key": "title",
                      "children-key": "children",
                      "no-connectors": "",
                    },
                    scopedSlots: t._u([
                      {
                        key: "default-header",
                        fn: function (e) {
                          return [
                            s(
                              "div",
                              {
                                staticClass:
                                  "download-task-node row items-center justify-between full-width no-wrap",
                              },
                              [
                                s(
                                  "div",
                                  {
                                    staticClass:
                                      "download-task-node-main row items-center no-wrap",
                                  },
                                  [
                                    s("q-checkbox", {
                                      attrs: {
                                        value: [!1, "maybe", !0][e.node.selection],
                                        disable: t.isDownloading,
                                      },
                                      on: {
                                        input: function () {
                                          return t.onClickNode(e.node);
                                        },
                                      },
                                    }),
	                                    s("q-icon", {
	                                      staticClass: "q-ml-xs q-mr-xs",
	                                      attrs: {
                                        size: "18px",
                                        color:
                                          "folder" === e.node.type
                                            ? "amber-6"
                                            : "audio" === e.node.type
                                              ? "primary"
                                              : "image" === e.node.type
                                                ? "orange"
                                                : "text" === e.node.type
                                                  ? "cyan"
                                                  : "grey-7",
	                                        name: DownloadTaskNodeIcon(e.node),
	                                      },
	                                    }),
	                                    s(
	                                      "div",
	                                      {
	                                        staticClass:
	                                          "download-task-node-text column no-wrap",
	                                      },
	                                      [
	                                        s(
	                                          "div",
	                                          {
	                                            staticClass:
	                                              "row items-center no-wrap",
	                                          },
	                                          [
	                                            s(
	                                              "span",
	                                              {
	                                                staticClass:
	                                                  "download-task-node-title ellipsis",
	                                              },
	                                              [t._v(t._s(e.node.title))]
	                                            ),
	                                            t.formatDownloadSize(e.node)
	                                              ? s(
	                                                  "span",
	                                                  {
	                                                    staticClass:
	                                                      "download-task-node-size text-caption text-grey-6",
	                                                  },
	                                                  [
	                                                    t._v(
	                                                      t._s(
	                                                        t.formatDownloadSize(
	                                                          e.node,
	                                                        ),
	                                                      ),
	                                                    ),
	                                                  ],
	                                                )
	                                              : t._e(),
	                                          ],
	                                          1,
	                                        ),
	                                        t.shouldRenderDownloadNodeProgress(e.node)
	                                          ? s(
	                                              "div",
	                                              {
	                                                staticClass:
	                                                  "download-task-node-progress q-mt-xs",
	                                              },
	                                              [
	                                                s("q-linear-progress", {
	                                                  attrs: {
	                                                    value:
	                                                      t.downloadNodeProgressValue(
	                                                        e.node,
	                                                      ),
	                                                    indeterminate:
	                                                      t.isDownloadNodeIndeterminate(
	                                                        e.node,
	                                                      ),
	                                                    color:
	                                                      t.downloadNodeProgressColor(
	                                                        e.node,
	                                                      ),
	                                                    "track-color": "grey-3",
	                                                    size: "6px",
	                                                  },
	                                                }),
	                                                s(
	                                                  "div",
	                                                  {
	                                                    staticClass:
	                                                      "download-task-node-progress-text text-caption",
	                                                  },
	                                                  [
	                                                    t._v(
	                                                      t._s(
	                                                        t.downloadNodeProgressCaption(
	                                                          e.node,
	                                                        ),
	                                                      ),
	                                                    ),
	                                                  ],
	                                                ),
	                                              ],
	                                              1,
	                                            )
	                                          : t._e(),
	                                      ],
	                                      1,
	                                    ),
	                                  ],
	                                  1,
	                                ),
                                s(
                                  "div",
                                  {
                                    staticClass:
                                      "download-task-node-meta row items-center q-gutter-xs text-caption text-grey-6",
                                  },
                                  [
                                    s(
                                      "span",
                                      {
                                        staticClass:
                                          "ellipsis text-right",
                                        staticStyle: { maxWidth: "18rem" },
                                      },
                                      [
                                        t._v(
                                          "folder" === e.node.type
                                            ? e.node.relativePath || ""
                                            : e.node.subtitle || "",
                                        ),
                                      ],
                                    ),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            ),
                          ];
                        },
                      },
                    ]),
                  }),
                ],
                1,
              ),
              s(
                "q-card-actions",
                {
                  staticClass: "work-download-dialog-actions",
                  attrs: { align: "right" },
                },
                [
                  s("q-btn", {
                    attrs: {
                      flat: "",
                      label: "取消",
                      color: "grey-7",
                      disable: t.isDownloading,
                    },
                    on: { click: t.close },
                  }),
	                  t.isMobileDownloadPlatform
	                    ? t._e()
	                    : s("q-btn", {
	                        attrs: {
	                          outline: "",
	                          color: "primary",
	                          loading:
	                            t.isDownloading &&
	                            "aria2" === t.activeDownloadStrategy,
	                          disable: t.isDownloading,
	                          label: "Aria2 RPC",
	                          icon: "cloud_download",
	                        },
	                        on: {
	                          click: function () {
	                            return t.startDownload("aria2");
	                          },
	                        },
	                      }),
	                  t.isMobileDownloadPlatform
	                    ? t._e()
	                    : s("q-btn", {
	                        attrs: {
	                          color: "primary",
	                          loading:
	                            t.isDownloading &&
	                            "aria2" !== t.activeDownloadStrategy,
	                          disable: t.isDownloading,
	                          label: t.canUseDirectoryPicker
	                            ? "选择文件夹并开始下载"
	                            : "使用浏览器批量下载",
	                          icon: "download",
	                        },
	                        on: { click: t.startDownload },
	                      }),
                ],
                1,
              ),
            ],
            1,
              ),
            ],
            1,
          ),
          t.renderAria2SettingsDialog(s),
        ],
        1,
      );
    },
    DownloadTaskDialogStaticRenderFns = [],
    DownloadTaskDialogComponent = {
      name: "WorkDownloadDialog",
      mixins: [pe],
      props: {
        value: { type: Boolean, required: !0 },
        tracks: { type: Array, required: !1, default: () => [] },
        metadata: { type: Object, required: !0 },
      },
      data() {
        return {
          sourceTracks: [],
          internalTracks: [],
          selectionMap: Object.create(null),
	          formatFilters: Object.create(null),
	          selectedCount: 0,
	          concurrency:
	            "undefined" !== typeof navigator &&
	            /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || "")
	              ? 4
	              : 2,
	          isDownloading: !1,
	          downloadProgress: 0,
	          downloadStatus: "",
	          downloadErrors: [],
	          downloadFileProgressState: Object.create(null),
	          activeDownloadStrategy: "",
	          aria2SettingsOpen: !1,
	          aria2Profiles: [],
	          aria2SelectedIndex: 0,
	          aria2ConfigResolver: null,
	          sizeRequestToken: 0,
	        };
      },
      computed: {
        workCode() {
          return T(this.metadata.primary_work_id || this.metadata.id);
        },
        canUseDirectoryPicker() {
          return (
            "undefined" !== typeof window &&
            "function" === typeof window.showDirectoryPicker
          );
        },
	        downloadModeNotice() {
          return this.canUseDirectoryPicker
            ? ""
            : "此浏览器不支持直接选择本地文件夹保存。将改为逐个触发浏览器下载；若浏览器忽略文件名中的路径，文件可能不会自动按 RJ 目录分组。推荐使用最新版 Chrome 或 Edge。";
        },
        isMobileDownloadPlatform() {
          return (
            "undefined" !== typeof navigator &&
            /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || "")
          );
        },
	        mobileDownloadStrategies() {
		          return [
		            { value: "zip1", label: "ZIP打包下载" },
		            { value: "aria2", label: "ARIA2 RPC下载" },
		            { value: "browser", label: "浏览器下载" },
		          ];
		        },
        formatFilterOptions() {
          const t = this.collectFormatCounts(this.sourceTracks),
            e = Object.keys(t).sort(DownloadTaskFormatSort);
          return e.map((e) => ({
            value: e,
            label: `${e} ${t[e]}`,
          }));
        },
      },
      watch: {
	        value(t) {
	          t && (this.setupTracks(this.tracks), this.fetchMissingTrackSizes());
	        },
	        tracks(t) {
	          (this.setupTracks(t), this.value && this.fetchMissingTrackSizes());
	        },
        formatFilters: {
          deep: !0,
          handler() {
            this.rebuildVisibleTracks();
          },
        },
      },
      methods: {
	        ensureDownloadDialogStyles() {
	          if (
	            "undefined" === typeof document ||
	            document.getElementById("work-download-dialog-styles")
	          )
	            return;
	          const t = document.createElement("style");
	          ((t.id = "work-download-dialog-styles"),
	            (t.textContent =
	              ".work-download-dialog-card{overflow:hidden}.download-format-filter{gap:6px;overflow-x:auto;padding-bottom:2px;-webkit-overflow-scrolling:touch}.download-format-chip{margin:0;min-height:24px}.mobile-download-strategies{max-width:100%;overflow-x:auto;padding:4px 0 2px;-webkit-overflow-scrolling:touch}.mobile-download-strategies .q-btn{min-height:30px;font-size:12px}.download-task-toolbar{max-width:100%;overflow:hidden}.download-task-tree{font-size:13px}.download-task-node{min-width:0;gap:6px}.download-task-node-main{min-width:0;flex:1 1 auto}.download-task-node-main .q-checkbox{transform:scale(.86);margin-right:0}.download-task-node-text{min-width:0;flex:1 1 auto}.download-task-node-title{min-width:0;font-size:13px}.download-task-node-size{flex:0 0 auto;margin-left:8px;white-space:nowrap}.download-task-node-progress{min-width:0;padding-right:8px}.download-task-node-progress-text{color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.download-task-node-meta{min-width:0;flex:0 1 42%;overflow:hidden}.work-download-dialog-actions{padding-bottom:calc(8px + env(safe-area-inset-bottom,0px))}.aria2-settings-card{width:92vw;max-width:780px;max-height:86vh;display:flex;flex-direction:column}.aria2-settings-scroll{max-height:56vh;overflow:auto}.aria2-profile-row{gap:8px;border:1px solid #d9dfe8;border-radius:6px;padding:8px;background:#fff}.aria2-profile-row.is-selected{border-color:#1976d2;background:#eef6ff}.aria2-profile-fields{gap:8px}.aria2-profile-fields .q-field{min-width:170px;flex:1 1 170px}.aria2-settings-actions{gap:8px}@media (max-width:600px){.work-download-dialog.q-dialog__inner,.work-download-dialog .q-dialog__inner{padding:6px!important;align-items:flex-end;overflow:hidden}.work-download-dialog-card{width:calc(100vw - 12px)!important;max-width:calc(100vw - 12px)!important;height:calc(100dvh - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px) - 12px)!important;max-height:calc(100dvh - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px) - 12px)!important;border-radius:8px 8px 0 0;overflow:hidden}.work-download-dialog-header{padding:10px 10px 0}.work-download-dialog-header .text-h6{font-size:16px;line-height:1.25}.work-download-dialog-header .q-btn{display:none}.work-download-dialog-controls{padding-left:10px;padding-right:10px;max-width:100%;overflow:hidden}.download-format-filter{flex-wrap:nowrap}.download-format-chip{font-size:11px}.mobile-download-strategies{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:12px;overflow:visible;margin-left:0!important;width:100%;max-width:100%}.mobile-download-strategies .q-btn{width:100%;min-height:44px;font-size:12px;padding:0 4px}.mobile-download-strategies .q-btn .q-btn__content{white-space:normal;line-height:1.15}.download-task-toolbar{margin-left:0!important;margin-right:0!important;row-gap:4px}.download-task-toolbar .q-field{width:92px!important}.download-task-toolbar .q-btn{font-size:11px}.work-download-dialog-scroll{height:calc(100% - 270px)!important;max-width:100%;overflow:hidden}.work-download-dialog-scroll>.scroll{overflow-x:auto!important;overflow-y:auto!important;-webkit-overflow-scrolling:touch}.work-download-dialog-scroll>.scroll>.absolute{width:max-content!important;min-width:700px;right:auto!important}.work-download-dialog-scroll .q-scrollarea__container{max-width:100%;overflow-x:auto!important;-webkit-overflow-scrolling:touch}.work-download-dialog-scroll .q-scrollarea__content{min-width:max-content;max-width:none!important}.download-task-tree{font-size:12px;min-width:700px;width:max-content}.download-task-node{gap:4px;min-width:660px}.download-task-node-main{flex:0 0 auto;min-width:0}.download-task-node-main .q-checkbox{transform:scale(.76);width:32px;min-width:32px}.download-task-node-main .q-icon{font-size:16px!important}.download-task-node-title{font-size:12px;max-width:none;white-space:nowrap;overflow:visible;text-overflow:clip}.download-task-node-size{font-size:11px;margin-left:10px}.download-task-node-progress{padding-right:4px}.download-task-node-meta{display:none}.work-download-dialog-actions{position:sticky;bottom:0;background:#fff;padding:8px 8px calc(24px + env(safe-area-inset-bottom,0px));gap:8px}.work-download-dialog-actions .q-btn{min-height:36px;font-size:12px}.work-download-dialog-actions .q-btn:last-child{flex:1 1 auto}.aria2-settings-card{width:calc(100vw - 12px)!important;max-width:calc(100vw - 12px)!important;max-height:calc(100dvh - 16px)!important;border-radius:8px 8px 0 0}.aria2-settings-scroll{max-height:58dvh}.aria2-profile-row{padding:6px}.aria2-profile-fields .q-field{min-width:100%;flex-basis:100%}}"));
	          document.head.appendChild(t);
	        },
	        renderAria2SettingsDialog(s) {
	          const t = this;
	          return s(
	            "q-dialog",
	            {
	              attrs: {
	                persistent: !0,
	                "content-class": "aria2-settings-dialog",
	              },
	              model: {
	                value: t.aria2SettingsOpen,
	                callback: function (e) {
	                  t.aria2SettingsOpen = e;
	                },
	                expression: "aria2SettingsOpen",
	              },
	            },
	            [
	              s(
	                "q-card",
	                { staticClass: "aria2-settings-card" },
	                [
	                  s(
	                    "q-card-section",
	                    { staticClass: "row items-start justify-between q-pb-sm" },
	                    [
	                      s("div", [
	                        s("div", { staticClass: "text-h6" }, [
	                          t._v("Aria2 RPC 设置"),
	                        ]),
	                        s("div", { staticClass: "text-caption text-grey-6" }, [
	                          t._v("浏览器本地保存，多地址可编辑；目录留空则使用 Aria2 默认目录"),
	                        ]),
	                      ]),
	                      s("q-btn", {
	                        attrs: { flat: "", round: "", dense: "", icon: "close" },
	                        on: { click: t.cancelAria2Settings },
	                      }),
	                    ],
	                    1,
	                  ),
	                  s("q-separator"),
	                  s(
	                    "q-card-section",
	                    { staticClass: "aria2-settings-scroll" },
	                    [
	                      t._l(t.aria2Profiles, function (e, a) {
	                        return s(
	                          "div",
	                          {
	                            key: e.id || a,
	                            staticClass: "aria2-profile-row q-mb-sm",
	                            class: { "is-selected": a === t.aria2SelectedIndex },
	                          },
	                          [
	                            s(
	                              "div",
	                              { staticClass: "row items-center no-wrap q-gutter-sm" },
	                              [
	                                s("q-btn", {
	                                  attrs: {
	                                    flat: "",
	                                    round: "",
	                                    dense: "",
	                                    color:
	                                      a === t.aria2SelectedIndex
	                                        ? "primary"
	                                        : "grey-7",
	                                    icon:
	                                      a === t.aria2SelectedIndex
	                                        ? "radio_button_checked"
	                                        : "radio_button_unchecked",
	                                  },
	                                  on: {
	                                    click: function () {
	                                      return t.selectAria2Profile(a);
	                                    },
	                                  },
	                                }),
	                                s(
	                                  "div",
	                                  { staticClass: "text-subtitle2 ellipsis" },
	                                  [t._v(t._s(e.name || "RPC " + (a + 1)))]
	                                ),
	                                s("div", { staticClass: "col" }),
	                                s("q-btn", {
	                                  attrs: {
	                                    flat: "",
	                                    round: "",
	                                    dense: "",
	                                    icon: "delete",
	                                    color: "negative",
	                                    disable: t.aria2Profiles.length <= 1,
	                                  },
	                                  on: {
	                                    click: function () {
	                                      return t.removeAria2Profile(a);
	                                    },
	                                  },
	                                }),
	                              ],
	                              1,
	                            ),
	                            s(
	                              "div",
	                              { staticClass: "aria2-profile-fields row q-mt-sm" },
	                              [
	                                s("q-input", {
	                                  attrs: {
	                                    dense: "",
	                                    outlined: "",
	                                    label: "名称",
	                                    disable: t.isDownloading,
	                                  },
	                                  model: {
	                                    value: e.name,
	                                    callback: function (e) {
	                                      t.updateAria2ProfileField(a, "name", e);
	                                    },
	                                    expression: "profile.name",
	                                  },
	                                }),
	                                s("q-input", {
	                                  attrs: {
	                                    dense: "",
	                                    outlined: "",
	                                    label: "RPC 地址",
	                                    disable: t.isDownloading,
	                                  },
	                                  model: {
	                                    value: e.endpoint,
	                                    callback: function (e) {
	                                      t.updateAria2ProfileField(a, "endpoint", e);
	                                    },
	                                    expression: "profile.endpoint",
	                                  },
	                                }),
	                                s("q-input", {
	                                  attrs: {
	                                    dense: "",
	                                    outlined: "",
	                                    label: "密钥 Token",
	                                    disable: t.isDownloading,
	                                  },
	                                  model: {
	                                    value: e.token,
	                                    callback: function (e) {
	                                      t.updateAria2ProfileField(a, "token", e);
	                                    },
	                                    expression: "profile.token",
	                                  },
	                                }),
	                                s("q-input", {
	                                  attrs: {
	                                    dense: "",
	                                    outlined: "",
	                                    label: "保存目录（空=Aria2默认）",
	                                    disable: t.isDownloading,
	                                  },
	                                  model: {
	                                    value: e.dir,
	                                    callback: function (e) {
	                                      t.updateAria2ProfileField(a, "dir", e);
	                                    },
	                                    expression: "profile.dir",
	                                  },
	                                }),
	                              ],
	                              1,
	                            ),
	                          ],
	                          1,
	                        );
	                      }),
	                      s("q-btn", {
	                        attrs: {
	                          flat: "",
	                          color: "primary",
	                          icon: "add",
	                          label: "添加 RPC 地址",
	                          disable: t.isDownloading,
	                        },
	                        on: { click: t.addAria2Profile },
	                      }),
	                    ],
	                    2,
	                  ),
	                  s("q-separator"),
	                  s(
	                    "q-card-actions",
	                    { staticClass: "aria2-settings-actions", attrs: { align: "right" } },
	                    [
	                      s("q-btn", {
	                        attrs: {
	                          flat: "",
	                          label: "取消",
	                          color: "grey-7",
	                          disable: t.isDownloading,
	                        },
	                        on: { click: t.cancelAria2Settings },
	                      }),
	                      s("q-btn", {
	                        attrs: {
	                          color: "primary",
	                          icon: "cloud_download",
	                          label: "保存并提交",
	                          loading: t.isDownloading,
	                        },
	                        on: { click: t.confirmAria2Settings },
	                      }),
	                    ],
	                    1,
	                  ),
	                ],
	                1,
	              ),
	            ],
	            1,
	          );
	        },
        collectFormatCounts(t, e = Object.create(null)) {
          return (
            (t || []).forEach((t) => {
              "folder" === t.type
                ? this.collectFormatCounts(t.children || [], e)
                : ((e[t.downloadFormat || DownloadTaskInferFormat(t)] =
                    (e[t.downloadFormat || DownloadTaskInferFormat(t)] || 0) + 1));
            }),
            e
          );
        },
        toggleFormatFilter(t) {
          this.isDownloading ||
            this.$set(this.formatFilters, t, !this.formatFilters[t]);
        },
	        isVisibleFile(t) {
	          return "folder" === t.type || !!this.formatFilters[t.downloadFormat || "other"];
	        },
	        formatDownloadSize(t) {
	          const e = Number(t && t.size);
	          if (!isFinite(e) || e <= 0) return "";
	          return H(e, e >= 1024 ? 1 : 0).replace("Bytes", "B");
	        },
	        formatDownloadBytes(t) {
	          const e = Number(t);
	          return isFinite(e) && e > 0
	            ? H(e, e >= 1024 ? 1 : 0).replace("Bytes", "B")
	            : "0 B";
	        },
	        resetDownloadFileProgressState(t) {
	          const e = Object.create(null);
	          (t || []).forEach((t) => {
	            e[t.relativePath] = {
	              status: "queued",
	              loaded: 0,
	              total: Number(t.size) || 0,
	              message: "等待中",
	            };
	          }),
	            (this.downloadFileProgressState = e);
	        },
	        setDownloadFileProgress(t, e = {}) {
	          if (!t || !t.relativePath) return;
	          const s = this.downloadFileProgressState[t.relativePath] || {
	            status: "idle",
	            loaded: 0,
	            total: Number(t.size) || 0,
	            message: "",
	          };
	          const a = Object.assign({}, s, e);
	          a.total || (a.total = Number(t.size) || 0),
	            this.$set(this.downloadFileProgressState, t.relativePath, a);
	        },
	        shouldRenderDownloadNodeProgress(t) {
	          if (!t || "folder" === t.type) return !1;
	          const e = this.downloadFileProgressState[t.relativePath];
	          return !!(e && "idle" !== e.status);
	        },
	        downloadNodeProgressValue(t) {
	          const e = this.downloadFileProgressState[t.relativePath];
	          if (!e) return 0;
	          if ("done" === e.status || "submitted" === e.status || "triggered" === e.status)
	            return 1;
	          if ("error" === e.status) return 1;
	          const s = Number(e.total),
	            a = Number(e.loaded);
	          return s > 0 ? Math.max(0, Math.min(1, a / s)) : 0;
	        },
	        isDownloadNodeIndeterminate(t) {
	          const e = this.downloadFileProgressState[t.relativePath];
	          return !!(
	            e &&
	            ("running" === e.status || "queued" === e.status) &&
	            !(Number(e.total) > 0 && Number(e.loaded) >= 0)
	          );
	        },
	        downloadNodeProgressColor(t) {
	          const e = this.downloadFileProgressState[t.relativePath];
	          return e
	            ? "error" === e.status
	              ? "negative"
	              : "done" === e.status || "submitted" === e.status || "triggered" === e.status
	                ? "positive"
	                : "primary"
	            : "primary";
	        },
	        downloadNodeProgressCaption(t) {
	          const e = this.downloadFileProgressState[t.relativePath];
	          if (!e) return "";
	          if ("error" === e.status) return e.message || "下载失败";
	          if ("done" === e.status) return e.message || "下载完成";
	          if ("submitted" === e.status) return e.message || "已提交到 Aria2";
	          if ("triggered" === e.status) return e.message || "已交给浏览器";
	          const s = Number(e.loaded) || 0,
	            a = Number(e.total) || 0;
	          return a > 0
	            ? `${this.formatDownloadBytes(s)} / ${this.formatDownloadBytes(a)}`
	            : e.message || ("queued" === e.status ? "等待中" : "下载中");
	        },
	        collectFileNodes(t, e = []) {
	          return (
	            (t || []).forEach((t) => {
	              "folder" === t.type
	                ? this.collectFileNodes(t.children || [], e)
	                : e.push(t);
	            }),
	            e
	          );
	        },
	        recalculateTrackSizes(t) {
	          return (t || []).reduce((e, s) => {
	            if ("folder" === s.type) {
	              const t = this.recalculateTrackSizes(s.children || []);
	              ((s.size = t), (e += t));
	            } else {
	              const t = Number(s.size);
	              isFinite(t) && t > 0 && (e += t);
	            }
	            return e;
	          }, 0);
	        },
	        async fetchDownloadHeadSize(t) {
	          const e = await fetch(this.buildDownloadUrl(t), {
	            method: "HEAD",
	            credentials: "same-origin",
	          });
	          if (!e.ok) throw new Error(`HEAD ${e.status}`);
	          const s = parseInt(e.headers.get("Content-Length"), 10);
	          return isFinite(s) && s >= 0 ? s : 0;
	        },
	        async fetchMissingTrackSizes() {
	          if (!this.value) return;
	          const t = ++this.sizeRequestToken,
	            e = this.collectFileNodes(this.sourceTracks).filter((t) => {
	              const e = Number(t.size);
	              return !(isFinite(e) && e > 0) && (t.mediaDownloadUrl || t.hash);
	            });
	          if (!e.length) return;
	          let s = 0,
	            a = !1;
	          const i = Math.max(1, Math.min(6, e.length)),
	            n = async () => {
	              for (;;) {
	                const i = s++;
	                if (i >= e.length || t !== this.sizeRequestToken) return;
	                const n = e[i];
	                try {
	                  const e = await this.fetchDownloadHeadSize(n);
	                  if (t !== this.sizeRequestToken) return;
	                  e > 0 && ((n.size = e), (a = !0));
	                } catch (r) {}
	              }
	            };
	          (await Promise.all(Array.from({ length: i }, () => n())),
	            t === this.sizeRequestToken &&
	              a &&
	              (this.recalculateTrackSizes(this.sourceTracks),
	              this.rebuildVisibleTracks()));
	        },
	        cloneTracks(t, e = "") {
	          return t.map((t) => {
	            const s = Object.assign({}, t),
	              a =
                "folder" === s.type
                  ? DownloadTaskJoinPath(e, s.title)
                  : String(s.title || "")
                      .split(/\/|\\/)
                      .filter(Boolean).length > 1
                    ? String(s.title || "")
                        .split(/\/|\\/)
                        .filter(Boolean)
                        .join("/")
                    : DownloadTaskJoinPath(e, s.title);
	            if (((s.relativePath = a), "folder" === s.type && s.children)) {
	              const t = this.cloneTracks(s.children, a);
	              ((s.children = t),
	                (s.size = t.reduce(
	                  (t, e) => t + (Number(e.size) > 0 ? Number(e.size) : 0),
	                  0,
	                )));
	            }
	            return ((s.downloadFormat = DownloadTaskInferFormat(s)), s);
	          });
	        },
        buildVisibleTracks(t) {
          const e = [];
          return (
            t.forEach((t) => {
              if ("folder" === t.type) {
                const s = this.buildVisibleTracks(t.children || []);
                if (0 === s.length) return;
                const a = Object.assign({}, t, { children: s });
                ((a.selection =
                  s.every((t) => 2 === t.selection)
                    ? 2
                    : s.every((t) => 0 === t.selection)
                      ? 0
                      : 1),
                  e.push(a));
              } else if (this.isVisibleFile(t)) {
                const s =
                  void 0 !== this.selectionMap[t.relativePath]
                    ? this.selectionMap[t.relativePath]
                    : 2;
                e.push(Object.assign({}, t, { selection: s }));
              }
            }),
            e
          );
        },
	        setupTracks(t) {
	          ((this.sourceTracks = this.cloneTracks(B(t || []))),
	            (this.selectionMap = Object.create(null)),
	            (this.downloadFileProgressState = Object.create(null)));
	          const e = this.collectFormatCounts(this.sourceTracks),
	            s = Object.create(null);
	          (Object.keys(e).forEach((t) => {
	            s[t] = !0;
          }),
            (this.formatFilters = s),
            this.rebuildVisibleTracks());
        },
        rebuildVisibleTracks() {
          ((this.internalTracks = this.buildVisibleTracks(this.sourceTracks)),
            (this.selectedCount = this.getSelectedFiles().length));
        },
        refreshTreeSelection(t) {
          const e = this;
          function s(a) {
            let i = 0;
            return (
              a.forEach((a) => {
                "folder" === a.type
                  ? ((i += s(a.children || [])),
                    (a.selection =
                      a.children && a.children.length
                        ? a.children.every((t) => 2 === t.selection)
                          ? 2
                          : a.children.every((t) => 0 === t.selection)
                            ? 0
                            : 1
                        : 0))
                  : ((e.selectionMap[a.relativePath] = a.selection > 0 ? 2 : 0),
                    a.selection > 0 && i++);
              }),
              i
            );
          }
          return s(t);
        },
        getSelectedFiles(t = this.internalTracks, e = []) {
          return (
            t.forEach((t) => {
              "folder" === t.type
                ? this.getSelectedFiles(t.children || [], e)
                : 0 !== t.selection && e.push(t);
            }),
            e
          );
        },
        onClickNode(t) {
          const e = t.selection >= 1 ? 0 : 2;
          this.setSelectionAll(t, e);
        },
        setSelectionAll(t, e) {
          ("folder" === t.type && t.children
            ? t.children.forEach((t) => {
                this.setSelectionAll(t, e);
              })
            : (t.selection = e,
              this.selectionMap[t.relativePath] = e > 0 ? 2 : 0),
            (t.selection = e),
            (this.selectedCount = this.refreshTreeSelection(this.internalTracks)));
        },
        toggleVisibleSelection(t) {
          this.internalTracks.forEach((e) => {
            this.setSelectionAll(e, t);
          });
          this.selectedCount = this.getSelectedFiles().length;
        },
        selectAllVisible() {
          this.toggleVisibleSelection(2);
        },
        clearAllVisible() {
          this.toggleVisibleSelection(0);
        },
        close() {
          this.isDownloading || this.$emit("input", !1);
        },
        appendTokenToUrl(t) {
          const e = this.$q.localStorage.getItem("jwt-token") || "";
          return appendTokenToMediaUrl(t, e);
        },
        buildDownloadUrl(t) {
          return this.appendTokenToUrl(
            t.mediaDownloadUrl
              ? `${t.mediaDownloadUrl}`
              : `/asmr-site/api/media/download/${t.hash}`,
          );
        },
	        downloadFilenameForFallback(t) {
	          return DownloadTaskZipNormalizePath(`${this.workCode}/${t.relativePath}`);
	        },
	        mobileZipFilename() {
	          return `${DownloadTaskSanitizePathPart(this.workCode)}.zip`;
	        },
        ensureZip32Size(t, e) {
          if (e > 4294967295)
            throw new Error(`${t} 超过 4GB，移动端 ZIP 方案暂不支持该文件大小`);
        },
        buildMobileZipHeader(t, e, s, a, i, n, r = !1) {
          const o = DownloadTaskZipDosTime(new Date()),
            l = r ? 33639248 : 67324752,
            c = r
              ? [
                  DownloadTaskZipU32(l),
                  DownloadTaskZipU16(20),
                  DownloadTaskZipU16(20),
                  DownloadTaskZipU16(2048),
                  DownloadTaskZipU16(0),
                  DownloadTaskZipU16(o.time),
                  DownloadTaskZipU16(o.date),
                  DownloadTaskZipU32(s),
                  DownloadTaskZipU32(a),
                  DownloadTaskZipU32(a),
                  DownloadTaskZipU16(t.length),
                  DownloadTaskZipU16(0),
                  DownloadTaskZipU16(0),
                  DownloadTaskZipU16(0),
                  DownloadTaskZipU16(0),
                  DownloadTaskZipU32(0),
                  DownloadTaskZipU32(i),
                  t,
                ]
              : [
                  DownloadTaskZipU32(l),
                  DownloadTaskZipU16(20),
                  DownloadTaskZipU16(2048),
                  DownloadTaskZipU16(0),
                  DownloadTaskZipU16(o.time),
                  DownloadTaskZipU16(o.date),
                  DownloadTaskZipU32(s),
                  DownloadTaskZipU32(a),
                  DownloadTaskZipU32(a),
                  DownloadTaskZipU16(t.length),
                  DownloadTaskZipU16(0),
                  t,
                ];
          return n ? (n.push(...c), n) : c;
        },
	        async fetchMobileZipPayload(t, e = null) {
	          const s = await this.fetchFullDownloadResponse(t),
	            a = this.responseExpectedSize(s),
	            i = [],
	            n =
	              s.body && "function" === typeof s.body.getReader
	                ? s.body.getReader()
	                : null;
	          let r = 0,
	            o = 4294967295;
	          e &&
	            this.setDownloadFileProgress(e, {
	              status: "running",
	              loaded: 0,
	              total: a || Number(e.size) || 0,
	              message: "下载中",
	            });
	          if (n)
	            for (;;) {
	              const { done: t, value: s } = await n.read();
	              if (t) break;
	              if (!s) continue;
	              const n = s instanceof Uint8Array ? s : new Uint8Array(s);
	              (i.push(n),
	                (r += n.byteLength || 0),
	                (o = DownloadTaskZipUpdateCrc(o, n)),
	                e &&
	                  this.setDownloadFileProgress(e, {
	                    status: "running",
	                    loaded: r,
	                    total: a || Number(e.size) || 0,
	                    message: "下载中",
	                  }));
	            }
	          else {
	            const t = new Uint8Array(await s.arrayBuffer());
	            (i.push(t),
	              (r = t.byteLength || 0),
	              (o = DownloadTaskZipUpdateCrc(o, t)),
	              e &&
	                this.setDownloadFileProgress(e, {
	                  status: "running",
	                  loaded: r,
	                  total: a || Number(e.size) || 0,
	                  message: "下载中",
	                }));
	          }
	          return (
	            this.verifyCachedDownload(t, a, r),
	            this.ensureZip32Size(t.relativePath, r),
	            { blob: new Blob(i), size: r, crc: DownloadTaskZipFinalizeCrc(o) }
	          );
	        },
	        async fetchMobileZipPayloadWithRetry(t, e = 3, s = null) {
	          let a;
	          for (let i = 0; i <= e; i++)
	            try {
	              return (
	                i > 0 &&
	                  (this.downloadStatus = `重试 ${i}/${e} ${t.relativePath}`),
	                await this.fetchMobileZipPayload(t, s)
	              );
	            } catch (n) {
	              if (((a = n), i >= e)) break;
	              await new Promise((t) => setTimeout(t, 400 * (i + 1)));
	            }
	          throw a;
	        },
        triggerMobileZipDownload(t) {
          const e = URL.createObjectURL(t),
            s = document.createElement("a");
          ((s.href = e),
            (s.download = this.mobileZipFilename()),
            (s.rel = "noopener"),
            (s.style.display = "none"),
            document.body.appendChild(s),
            s.click(),
            s.remove(),
            setTimeout(() => URL.revokeObjectURL(e), 6e4));
        },
	        async downloadMobileZip(t, saveHandle = null) {
          const zipParts = [],
            centralParts = [],
            payloads = new Array(t.length),
            writer =
              saveHandle &&
              "function" === typeof saveHandle.createWritable
                ? await saveHandle.createWritable()
                : null;
          let a = 0,
            i = 0,
            fetchedCount = 0,
            writtenCount = 0,
            nextIndex = 0,
            writeIndex = 0,
            writeQueue = Promise.resolve();
          const workerCount = Math.max(
              1,
              Math.min(8, parseInt(this.concurrency, 10) || 4, t.length),
            ),
            writeReady = async () => {
              while (payloads[writeIndex]) {
                const t = payloads[writeIndex];
                payloads[writeIndex] = null;
                this.ensureZip32Size(t.path, a);
                const e = a,
                  s = this.buildMobileZipHeader(
                    t.nameBytes,
                    t.path,
                    t.payload.crc,
                    t.payload.size,
                    e,
                    null,
                    !1,
                  );
	                (this.ensureZip32Size(t.path, t.payload.size),
	                  writer
	                    ? (await writer.write(new Blob(s)),
	                      await writer.write(t.payload.blob))
	                    : (zipParts.push(...s), zipParts.push(t.payload.blob)),
                  (a += 30 + t.nameBytes.length + t.payload.size),
                  this.buildMobileZipHeader(
                    t.nameBytes,
                    t.path,
                    t.payload.crc,
                    t.payload.size,
                    e,
                    centralParts,
                    !0,
	                  ),
	                  (i += 46 + t.nameBytes.length),
	                  this.setDownloadFileProgress(t.fileNode, {
	                    status: "done",
	                    loaded: t.payload.size,
	                    total: t.payload.size,
	                    message: "已写入 ZIP",
	                  }),
	                  (t.fileNode.selection = 2),
	                  writeIndex++,
	                  writtenCount++,
	                  (this.downloadProgress = writtenCount / t.totalCount),
	                  (this.downloadStatus = `已下载 ${fetchedCount}/${t.totalCount}，已写入 ${writtenCount}/${t.totalCount}`));
              }
            },
            queueWriteReady = () => {
              writeQueue = writeQueue.then(writeReady);
              return writeQueue;
            };
          this.downloadErrors = [];
          this.downloadProgress = 0;
          this.downloadStatus = `正在并发下载 ZIP... (${workerCount} 任务)`;
          try {
            const workers = Array.from(
              { length: workerCount },
              async () => {
                for (;;) {
	                  const a = nextIndex++;
	                  if (a >= t.length) return;
	                  const i = t[a],
		                    n = DownloadTaskZipNormalizePath(`${this.workCode}/${i.relativePath}`),
	                    r = DownloadTaskZipEncodePath(n);
	                  this.downloadStatus = `下载 ${a + 1}/${t.length} ${i.relativePath}`;
	                  let o;
	                  try {
	                    o = await this.fetchMobileZipPayloadWithRetry(i, 3, i);
	                  } catch (l) {
	                    throw (
	                      this.setDownloadFileProgress(i, {
	                        status: "error",
	                        loaded: 0,
	                        total: Number(i.size) || 0,
	                        message: (l && l.message) || "下载失败",
	                      }),
	                      l
	                    );
	                  }
	                  (payloads[a] = {
	                    fileNode: i,
	                    nameBytes: r,
	                    path: n,
                    payload: o,
                    totalCount: t.length,
                  });
                  fetchedCount++;
                  await queueWriteReady();
                }
              },
            );
            (await Promise.all(workers), await writeQueue, await writeReady());
            this.ensureZip32Size("ZIP 中央目录", a + i);
            const r = [
              DownloadTaskZipU32(101010256),
              DownloadTaskZipU16(0),
              DownloadTaskZipU16(0),
              DownloadTaskZipU16(t.length),
              DownloadTaskZipU16(t.length),
              DownloadTaskZipU32(i),
              DownloadTaskZipU32(a),
              DownloadTaskZipU16(0),
            ];
            if (writer)
              (await writer.write(new Blob([...centralParts, ...r])), await writer.close());
            else {
              (zipParts.push(...centralParts), zipParts.push(...r));
              const t = new Blob(zipParts, { type: "application/zip" });
              this.triggerMobileZipDownload(t);
            }
          } catch (r) {
            if (writer)
              try {
                await writer.abort();
              } catch (o) {}
            throw r;
          }
          (this.downloadStatus = "正在交给浏览器保存 ZIP...",
            (this.downloadProgress = 1));
          return [];
        },
	        defaultAria2Profile(t = 1) {
	          return {
	            id: `aria2-${Date.now()}-${Math.random().toString(36).slice(2)}`,
	            name: 1 === t ? "默认 RPC" : `RPC ${t}`,
	            endpoint: "http://127.0.0.1:6800/jsonrpc",
	            token: "",
	            dir: "",
	          };
	        },
	        normalizeAria2Profile(t, e = 0) {
	          const s = this.defaultAria2Profile(e + 1),
	            a = Object.assign({}, s, t || {});
	          return {
	            id: a.id || s.id,
	            name: String(a.name || s.name).trim(),
	            endpoint: String(a.endpoint || s.endpoint).trim(),
	            token: String(a.token || "").trim(),
	            dir: String(a.dir || "").trim(),
	          };
	        },
	        loadAria2Profiles() {
	          const t = this.$q.localStorage.getItem("kikoeruAria2Profiles"),
	            e = this.$q.localStorage.getItem("kikoeruAria2Config");
	          let s = Array.isArray(t) ? t : [];
	          if (!s.length && e && "object" === typeof e) s = [e];
	          return s.length
	            ? s.map((t, e) => this.normalizeAria2Profile(t, e))
	            : [this.defaultAria2Profile()];
	        },
	        saveAria2Profiles() {
	          const t = this.aria2Profiles.map((t, e) =>
	            this.normalizeAria2Profile(t, e),
	          );
	          (this.$q.localStorage.set("kikoeruAria2Profiles", t),
	            t[0] && this.$q.localStorage.set("kikoeruAria2Config", t[0]));
	        },
	        selectAria2Profile(t) {
	          this.aria2SelectedIndex = Math.max(
	            0,
	            Math.min(t, this.aria2Profiles.length - 1),
	          );
	        },
	        addAria2Profile() {
	          const t = this.defaultAria2Profile(this.aria2Profiles.length + 1);
	          (this.aria2Profiles.push(t),
	            (this.aria2SelectedIndex = this.aria2Profiles.length - 1));
	        },
	        removeAria2Profile(t) {
	          if (this.aria2Profiles.length <= 1) return;
	          (this.aria2Profiles.splice(t, 1),
	            this.selectAria2Profile(this.aria2SelectedIndex));
	        },
	        updateAria2ProfileField(t, e, s) {
	          const a = Object.assign({}, this.aria2Profiles[t] || {});
	          ((a[e] = s), this.$set(this.aria2Profiles, t, a));
	        },
	        openAria2SettingsDialog() {
	          ((this.aria2Profiles = this.loadAria2Profiles()),
	            this.selectAria2Profile(this.aria2SelectedIndex),
	            (this.aria2SettingsOpen = !0));
	          return new Promise((t) => {
	            this.aria2ConfigResolver = t;
	          });
	        },
	        cancelAria2Settings() {
	          const t = this.aria2ConfigResolver;
	          ((this.aria2ConfigResolver = null), (this.aria2SettingsOpen = !1));
	          t && t(null);
	        },
	        confirmAria2Settings() {
	          const t = this.aria2Profiles.map((t, e) =>
	              this.normalizeAria2Profile(t, e),
	            ),
	            e = t[this.aria2SelectedIndex] || t[0];
	          if (!e || !e.endpoint)
	            return void this.showErrNotif("请填写 Aria2 RPC 地址");
	          ((this.aria2Profiles = t), this.saveAria2Profiles());
	          const s = this.aria2ConfigResolver;
	          ((this.aria2ConfigResolver = null), (this.aria2SettingsOpen = !1));
	          s && s(e);
	        },
	        askAria2Config() {
	          return this.openAria2SettingsDialog();
	        },
	        confirmMobileZipWarning() {
	          return new Promise((t) => {
	            let e = !1;
	            this.$q
	              .dialog({
	                title: "打包下载警告",
	                message:
	                  "<ol style='padding-left:1.25em;margin:0'><li>文件下载时不能关闭窗口，最后统一保存到设备。</li><li>任意文件下载失败，则整个下载任务失败。</li><li>下载失败的缓存将在重启后自动清理。</li><li>最终将会以 .zip 压缩包形式保存。</li><li>保存的位置由浏览器决定，请查看浏览器提示。</li><li>使用 PC + Chrome 组合可以避免这些顾虑。</li></ol>",
	                html: !0,
	                cancel: "取消",
	                ok: "继续打包",
	                persistent: !0,
	              })
	              .onOk(() => {
	                ((e = !0), t(!0));
	              })
	              .onCancel(() => {
	                e || ((e = !0), t(!1));
	              })
	              .onDismiss(() => {
	                e || ((e = !0), t(!1));
	              });
	          });
	        },
	        confirmBrowserDownloadWarning() {
	          return new Promise((t) => {
	            let e = !1;
	            this.$q
	              .dialog({
	                title: "浏览器下载警告",
	                message:
	                  "<ol style='padding-left:1.25em;margin:0'><li>所有任务交给浏览器下载。</li><li><strong>会尝试大量文件下载注意！</strong></li><li>建议使用 PC + Chrome 或 ARIA2 RPC 下载更方便。</li></ol>",
	                html: !0,
	                cancel: "取消",
	                ok: "继续下载",
	                persistent: !0,
	              })
	              .onOk(() => {
	                ((e = !0), t(!0));
	              })
	              .onCancel(() => {
	                e || ((e = !0), t(!1));
	              })
	              .onDismiss(() => {
	                e || ((e = !0), t(!1));
	              });
	          });
	        },
	        joinDownloadDir(t, e) {
	          const s = String(t || "")
	              .replace(/\\/g, "/")
              .replace(/\/+$/g, ""),
            a = String(e || "")
              .replace(/\\/g, "/")
              .replace(/^\/+/g, "")
              .replace(/\/+$/g, "");
          return s ? (a ? `${s}/${a}` : s) : a;
        },
	        async submitAria2Batch(t, e, s) {
	          const a = t.map((t, a) => {
	              const i = DownloadTaskZipNormalizePath(t.relativePath),
	                n = i.split("/").filter(Boolean),
	                r = n.pop(),
	                o = String((e && e.dir) || "").trim(),
	                u = DownloadTaskSanitizePathPart(this.workCode),
	                l = {
	                  out: r || t.title || `${a}`,
	                  continue: "true",
	                  "max-tries": "3",
	                  split: "8",
                  "max-connection-per-server": "8",
                  "min-split-size": "1M",
                  "auto-file-renaming": "false",
                  "allow-overwrite": "true",
	                },
	                c = new URL(this.buildDownloadUrl(t), window.location.origin).href,
	                d = [];
	              o
	                ? ((l.dir = this.joinDownloadDir(
	                    this.joinDownloadDir(o, u),
	                    n.join("/"),
	                  )),
	                  (l.out = r || t.title || `${a}`))
	                : (l.out = DownloadTaskZipNormalizePath(
	                    this.joinDownloadDir(
	                      u,
	                      this.joinDownloadDir(n.join("/"), r || t.title || `${a}`),
	                    ),
	                  ));
	              return (
	                e.token && d.push(`token:${e.token}`),
	                d.push([c], l),
                {
                  jsonrpc: "2.0",
                  id: `kikoeru-${Date.now()}-${s + a}`,
                  method: "aria2.addUri",
                  params: d,
                }
              );
            }),
            i = await fetch(e.endpoint, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(a),
            });
          if (!i.ok) throw new Error(`Aria2 RPC ${i.status} ${i.statusText || ""}`);
          const n = await i.json(),
            r = Array.isArray(n) ? n : [n],
            o = r.find((t) => t && t.error);
          if (o)
            throw new Error(
              `Aria2 RPC: ${(o.error && (o.error.message || o.error.code)) || "提交失败"}`,
            );
        },
	        async downloadWithAria2(t, e = null) {
		          e = e || (await this.askAria2Config());
	          if (!e) return null;
	          const s = 50;
          this.downloadErrors = [];
          this.downloadProgress = 0;
          this.downloadStatus = "正在提交 Aria2 任务...";
	          for (let a = 0; a < t.length; a += s) {
	            const i = t.slice(a, a + s);
	            (await this.submitAria2Batch(i, e, a),
	              i.forEach((t) => {
	                this.setDownloadFileProgress(t, {
	                  status: "submitted",
	                  loaded: Number(t.size) || 0,
	                  total: Number(t.size) || 0,
	                  message: "已提交到 Aria2",
	                });
	              }),
	              (this.downloadProgress = Math.min(1, (a + i.length) / t.length)),
	              (this.downloadStatus = `已提交 ${Math.min(a + i.length, t.length)}/${t.length} 个 Aria2 任务`));
	          }
	          return [];
	        },
        getDownloadResponseTotal(t, e = 0) {
          const s =
              t && t.headers && "function" === typeof t.headers.get
                ? t.headers.get("Content-Range") || ""
                : "",
            a = /\/(\d+)\s*$/.exec(s);
          if (a) {
            const i = parseInt(a[1], 10);
            if (!isNaN(i)) return i;
          }
          const r =
            t && t.headers && "function" === typeof t.headers.get
              ? parseInt(t.headers.get("Content-Length"), 10)
              : NaN;
          return isNaN(r) ? 0 : 206 === t.status ? e + r : r;
        },
        async isDownloadFileComplete(t, e, s) {
          if (!e) return !1;
          if (s >= e) return !0;
          try {
            return ((await t.getFile()).size || 0) >= e;
          } catch (a) {
            return !1;
          }
        },
        async waitForDownloadFileComplete(t, e, s, a = !1) {
          for (let i = 0; i < (this.isMobileDownloadPlatform ? 6 : 2); i++) {
            try {
              const a = (await t.getFile()).size || 0;
              if (e ? a >= e : a > 0 && (!s || a >= s)) return !0;
            } catch (r) {}
            await new Promise((t) => setTimeout(t, 120));
          }
          return !1;
        },
        async ensureWritablePermission(t) {
          try {
            if (
              t &&
              "function" === typeof t.queryPermission &&
              "granted" !== (await t.queryPermission({ mode: "readwrite" })) &&
              "function" === typeof t.requestPermission &&
              "granted" !== (await t.requestPermission({ mode: "readwrite" }))
            )
              throw new Error("未获得文件写入权限");
          } catch (e) {
            if ("TypeError" !== (e && e.name)) throw e;
          }
        },
        async createDownloadWritable(t, e) {
          await this.ensureWritablePermission(t);
          if ("s8" === e)
            try {
              return await t.createWritable({ mode: "exclusive" });
            } catch (s) {}
          return await t.createWritable();
        },
        async closeDownloadWritable(t, e, s, a) {
          try {
            (await t.close(), await this.verifyWritableTargetSize(e, s || a, ""));
          } catch (i) {
            if (
              this.isMobileDownloadPlatform &&
              (await this.waitForDownloadFileComplete(e, s, a, !0))
            )
              return;
            throw i;
          }
        },
        async fetchFullDownloadResponse(t) {
          const e = await fetch(this.buildDownloadUrl(t), {
            credentials: "same-origin",
          });
          if (!e.ok)
            throw new Error(
              `${e.status} ${e.statusText || "download failed"}: ${t.relativePath}`,
            );
          return e;
        },
        verifyCachedDownload(t, e, s) {
          if (e && s !== e)
            throw new Error(`缓存大小不完整: ${t.relativePath}`);
          return s;
        },
        responseExpectedSize(t) {
          return this.getDownloadResponseTotal(t, 0);
        },
        async fetchCachedBlob(t) {
          const e = await this.fetchFullDownloadResponse(t),
            s = this.responseExpectedSize(e),
            a = await e.blob();
          return (
            this.verifyCachedDownload(t, s, a.size || 0),
            { type: "blob", data: a, size: a.size || 0 }
          );
        },
        async fetchCachedArrayBuffer(t) {
          const e = await this.fetchFullDownloadResponse(t),
            s = this.responseExpectedSize(e),
            a = await e.arrayBuffer(),
            i = a.byteLength || 0;
          return (
            this.verifyCachedDownload(t, s, i),
            { type: "arrayBuffer", data: a, size: i }
          );
        },
        async fetchCachedChunks(t) {
          const e = await this.fetchFullDownloadResponse(t),
            s = this.responseExpectedSize(e),
            a = [],
            i =
              e.body && "function" === typeof e.body.getReader
                ? e.body.getReader()
                : null;
          let r = 0;
          if (i)
            for (;;) {
              const { done: t, value: e } = await i.read();
              if (t) break;
              (a.push(e), (r += e && e.byteLength ? e.byteLength : 0));
            }
          else {
            const t = new Uint8Array(await e.arrayBuffer());
            (a.push(t), (r = t.byteLength || 0));
          }
          return (
            this.verifyCachedDownload(t, s, r),
            { type: "chunks", data: a, size: r }
          );
        },
        async fetchCacheApiBlob(t) {
          if ("undefined" === typeof caches) return this.fetchCachedBlob(t);
          const e = await this.fetchFullDownloadResponse(t),
            s = this.responseExpectedSize(e),
            a = await caches.open("kikoeru-download-buffer"),
            i = `/__kikoeru_download_buffer__/${Date.now()}/${Math.random()
              .toString(36)
              .slice(2)}`;
          try {
            (await a.put(i, e.clone()));
            const r = await a.match(i);
            if (!r) throw new Error(`Cache API 缓存失败: ${t.relativePath}`);
            const o = await r.blob();
            return (
              this.verifyCachedDownload(t, s, o.size || 0),
              { type: "blob", data: o, size: o.size || 0 }
            );
          } finally {
            try {
              await a.delete(i);
            } catch (r) {}
          }
        },
        async getOpfsDownloadCacheDir() {
          if (
            "undefined" === typeof navigator ||
            !navigator.storage ||
            "function" !== typeof navigator.storage.getDirectory
          )
            return null;
          const t = await navigator.storage.getDirectory();
          return await t.getDirectoryHandle("kikoeru-download-cache", {
            create: !0,
          });
        },
        async fetchOpfsCachedBlob(t, e = "stream") {
          const s = await this.getOpfsDownloadCacheDir();
          if (!s) return this.fetchCachedBlob(t);
          const a = `buffer-${Date.now()}-${Math.random()
              .toString(36)
              .slice(2)}.part`,
            i = await s.getFileHandle(a, { create: !0 });
          try {
            if ("chunks" === e) {
              const e = await this.fetchCachedChunks(t),
                s = await i.createWritable();
              let a = 0;
              for (const t of e.data) {
                ((a += t && t.byteLength ? t.byteLength : 0), await s.write(t));
              }
              await s.close();
            } else {
              const e = await this.fetchFullDownloadResponse(t),
                r = this.responseExpectedSize(e),
                s = await i.createWritable();
              e.body && "function" === typeof e.body.pipeTo
                ? await e.body.pipeTo(s)
                : (await s.write(await e.blob()), await s.close());
              const o = await i.getFile();
              this.verifyCachedDownload(t, r, o.size || 0);
            }
            const r = await i.getFile(),
              o = r.size || 0;
            return { type: "blob", data: r, size: o };
          } finally {
            try {
              await s.removeEntry(a);
            } catch (r) {}
          }
        },
        openDownloadIdb() {
          return new Promise((t, e) => {
            const s = indexedDB.open("kikoeru-download-buffer", 1);
            ((s.onupgradeneeded = () => {
              s.result.objectStoreNames.contains("files") ||
                s.result.createObjectStore("files");
            }),
              (s.onsuccess = () => t(s.result)),
              (s.onerror = () => e(s.error)));
          });
        },
        idbRequest(t) {
          return new Promise((e, s) => {
            ((t.onsuccess = () => e(t.result)), (t.onerror = () => s(t.error)));
          });
        },
        async fetchIndexedDbCachedBlob(t) {
          if ("undefined" === typeof indexedDB) return this.fetchCachedBlob(t);
          const e = await this.fetchCachedBlob(t),
            s = await this.openDownloadIdb(),
            a = `buffer-${Date.now()}-${Math.random()
              .toString(36)
              .slice(2)}`;
          try {
            await this.idbRequest(
              s.transaction("files", "readwrite").objectStore("files").put(e.data, a),
            );
            const t = await this.idbRequest(
              s.transaction("files", "readonly").objectStore("files").get(a),
            );
            return { type: "blob", data: t, size: (t && t.size) || e.size };
          } finally {
            try {
              await this.idbRequest(
                s.transaction("files", "readwrite").objectStore("files").delete(a),
              );
            } catch (i) {}
            s.close();
          }
        },
        async closeCachedTargetWritable(t) {
          await t.close();
        },
        async verifyWritableTargetSize(t, e, s) {
          if (!e) return;
          for (let a = 0; a < (this.isMobileDownloadPlatform ? 6 : 2); a++) {
            try {
              const a = (await t.getFile()).size || 0;
              if (a === e) return;
              if (a > e && e > 0) return;
            } catch (i) {}
            await new Promise((t) => setTimeout(t, 120));
          }
          const a = await t.getFile().catch(() => null),
            i = a ? a.size || 0 : 0;
          throw new Error(
            `写入后文件大小异常: ${s || ""} ${i}/${e} bytes`,
          );
        },
        async removeEmptyDownloadFile(t, e, s) {
          if (!t || !e || "function" !== typeof t.removeEntry) return;
          try {
            const a = s ? await s.getFile() : null;
            if (a && (a.size || 0) > 0) return;
          } catch (a) {}
          try {
            await t.removeEntry(e);
          } catch (a) {}
        },
        async writeCachedPayloadToTarget(t, e, s = "blob") {
          const a = await this.createDownloadWritable(t, s);
          let i = 0;
          if ("chunks" === e.type && "chunks" === s) {
            for (const t of e.data || []) {
              ((i += t && t.byteLength ? t.byteLength : 0), await a.write(t));
            }
          } else if ("position" === s) {
            ((i = e.size || 0),
              await a.write({
                type: "write",
                position: 0,
                data: e.data,
              }),
              "function" === typeof a.truncate &&
                e.size &&
                (await a.truncate(e.size)));
          } else ((i = e.size || 0), await a.write(e.data));
          (await this.closeCachedTargetWritable(a),
            await this.verifyWritableTargetSize(t, e.size || i, ""));
        },
        async cacheFirstDownload(t, e, s, a = {}) {
          let i;
          if ("cf1" === s) i = await this.fetchCachedBlob(t);
          else if ("cf2" === s) i = await this.fetchCachedArrayBuffer(t);
          else if ("cf3" === s) {
            const e = await this.fetchCachedChunks(t);
            i = { type: "blob", data: new Blob(e.data), size: e.size };
          } else if ("cf4" === s) i = await this.fetchCachedChunks(t);
          else if ("cf5" === s) i = await this.fetchCacheApiBlob(t);
          else if ("cf6" === s) i = await this.fetchOpfsCachedBlob(t, "stream");
          else if ("cf7" === s) i = await this.fetchOpfsCachedBlob(t, "chunks");
          else if ("cf8" === s) i = await this.fetchIndexedDbCachedBlob(t);
          else if ("cf9" === s) {
            i = await this.fetchCachedBlob(t);
            if (a && a.dirHandle && a.fileName) {
              const r = `.kikoeru-${Date.now()}-${Math.random()
                  .toString(36)
                  .slice(2)}.part`,
                o = await a.dirHandle.getFileHandle(r, { create: !0 });
              try {
                await this.writeCachedPayloadToTarget(o, i, "blob");
              } finally {
                try {
                  a.dirHandle.removeEntry && (await a.dirHandle.removeEntry(r));
                } catch (l) {}
              }
            }
          } else i = await this.fetchCachedBlob(t);
          return this.writeCachedPayloadToTarget(
            e,
            i,
            "cf4" === s ? "chunks" : "cf7" === s ? "position" : "blob",
          );
        },
        async writeArrayBufferDownload(t, e, s, a = !1, i = null) {
          const r = await this.fetchFullDownloadResponse(t),
            o = await r.arrayBuffer(),
            l = o.byteLength || this.getDownloadResponseTotal(r, 0),
            n = await this.createDownloadWritable(e, s);
          let c = 0;
          i &&
            this.setDownloadFileProgress(i, {
              status: "running",
              loaded: 0,
              total: l || Number(i.size) || 0,
              message: "下载中",
            });
          try {
            if ("s7" === s) {
              ((c = o.byteLength || 0),
                await n.write({ type: "write", position: 0, data: o }),
                "function" === typeof n.truncate && l && (await n.truncate(l)));
            } else if (a) {
              const t = 64 * 1024;
              for (; c < o.byteLength; ) {
                const e = c,
                  s = Math.min(e + t, o.byteLength);
                ((c = s),
                  i &&
                    this.setDownloadFileProgress(i, {
                      status: "running",
                      loaded: c,
                      total: l || Number(i.size) || 0,
                      message: "下载中",
                    }),
                  await n.write(o.slice(e, s)));
              }
            } else ((c = o.byteLength || 0), await n.write(o));
            (await this.closeDownloadWritable(n, e, l || c, c),
              i &&
                this.setDownloadFileProgress(i, {
                  status: "done",
                  loaded: l || c,
                  total: l || c,
                  message: "下载完成",
                }));
          } catch (d) {
            if (
              this.isMobileDownloadPlatform &&
              c > 0 &&
              (await this.waitForDownloadFileComplete(e, l || c, c, !0))
            )
              return void (
                i &&
                this.setDownloadFileProgress(i, {
                  status: "done",
                  loaded: l || c,
                  total: l || c,
                  message: "下载完成",
                })
              );
            throw d;
          }
        },
        async writeBlobDownload(t, e, s, a = null) {
          const i = await this.fetchFullDownloadResponse(t),
            r = await i.blob(),
            o = r.size || this.getDownloadResponseTotal(i, 0),
            l = await this.createDownloadWritable(e, s);
          let n = 0;
          a &&
            this.setDownloadFileProgress(a, {
              status: "running",
              loaded: 0,
              total: o || Number(a.size) || 0,
              message: "下载中",
            });
          try {
            ((n = o || r.size || 1),
              await l.write(r),
              await this.closeDownloadWritable(l, e, o || n, n),
              a &&
                this.setDownloadFileProgress(a, {
                  status: "done",
                  loaded: o || n,
                  total: o || n,
                  message: "下载完成",
                }));
          } catch (c) {
            if (
              this.isMobileDownloadPlatform &&
              n > 0 &&
              (await this.waitForDownloadFileComplete(e, o || n, n, !0))
            )
              return void (
                a &&
                this.setDownloadFileProgress(a, {
                  status: "done",
                  loaded: o || n,
                  total: o || n,
                  message: "下载完成",
                })
              );
            throw c;
          }
        },
	        async pipeDownload(t, e, s = !1, a = null) {
	          const i = this.buildDownloadUrl(t);
	          let r = 0;
	          try {
	            r = (await e.getFile()).size || 0;
	          } catch (d) {}
	          const o = r > 0 ? { Range: `bytes=${r}-` } : {},
	            l = await fetch(i, {
	              credentials: "same-origin",
	              headers: o,
	            });
	          if (416 === l.status) {
	            const i = this.getDownloadResponseTotal(l, r);
	            if (await this.isDownloadFileComplete(e, i, r))
	              return void (
	                a &&
	                this.setDownloadFileProgress(a, {
	                  status: "done",
	                  loaded: i || r,
	                  total: i || r,
	                  message: "下载完成",
	                })
	              );
	          }
	          if (!l.ok && 206 !== l.status)
	            throw new Error(
	              `${l.status} ${l.statusText || "download failed"}: ${t.relativePath}`,
	            );
	          const c = this.getDownloadResponseTotal(l, r),
	            n = r > 0 && 206 === l.status;
	          a &&
	            this.setDownloadFileProgress(a, {
	              status: "running",
	              loaded: n ? r : 0,
	              total: c || Number(a.size) || 0,
	              message: "下载中",
	            });
	          if (!l.body || "function" !== typeof l.body.pipeTo)
	            return this.fetchAndWriteFile(t, e, "s1", { fileNode: a || t });
	          let u = l.body;
	          if (
	            a &&
	            "undefined" !== typeof TransformStream &&
	            "function" === typeof u.pipeThrough
	          ) {
	            let t = 0;
	            u = u.pipeThrough(
	              new TransformStream({
	                transform: (e, s) => {
	                  ((t += e && void 0 !== e.byteLength ? e.byteLength : 0),
	                    this.setDownloadFileProgress(a, {
	                      status: "running",
	                      loaded: (n ? r : 0) + t,
	                      total: c || Number(a.size) || 0,
	                      message: "下载中",
	                    }),
	                    s.enqueue(e));
	                },
	              }),
	            );
	          }
	          await this.ensureWritablePermission(e);
	          const h = await e.createWritable(n ? { keepExistingData: !0 } : void 0);
	          try {
	            n && "function" === typeof h.seek && (await h.seek(r));
	            (s
	              ? (await u.pipeTo(h, { preventClose: !0 }),
	                await this.closeDownloadWritable(h, e, c, c || r || 1))
	              : (await u.pipeTo(h),
	                await this.verifyWritableTargetSize(e, c, "")),
	              a &&
	                this.setDownloadFileProgress(a, {
	                  status: "done",
	                  loaded: c || r || Number(a.size) || 0,
	                  total: c || r || Number(a.size) || 0,
	                  message: "下载完成",
	                }));
	          } catch (u) {
	            if (
	              this.isMobileDownloadPlatform &&
	              (await this.waitForDownloadFileComplete(e, c, c || r || 1, !0))
	            )
	              return void (
	                a &&
	                this.setDownloadFileProgress(a, {
	                  status: "done",
	                  loaded: c || r || Number(a.size) || 0,
	                  total: c || r || Number(a.size) || 0,
	                  message: "下载完成",
	                })
	              );
	            throw u;
	          }
	        },
        async writeTempThenCopyDownload(t, e, s) {
          if (!s || !s.dirHandle || !s.fileName)
            return this.writeBlobDownload(t, e, "s4");
          const a = `.kikoeru-${Date.now()}-${Math.random()
              .toString(36)
              .slice(2)}.part`,
            i = await s.dirHandle.getFileHandle(a, { create: !0 });
          await this.writeBlobDownload(t, i, "s4");
          const r = await i.getFile(),
            o = await this.createDownloadWritable(e, "s3");
          let l = 0;
          try {
            ((l = r.size || 1), await o.write(r));
            await this.closeDownloadWritable(o, e, r.size || l, l);
          } catch (n) {
            if (
              this.isMobileDownloadPlatform &&
              l > 0 &&
              (await this.waitForDownloadFileComplete(e, r.size || l, l, !0))
            )
              return;
            throw n;
          } finally {
            try {
              s.dirHandle.removeEntry && (await s.dirHandle.removeEntry(a));
            } catch (n) {}
          }
        },
        async writeOpfsThenCopyDownload(t, e, s = null) {
          if (
            "undefined" === typeof navigator ||
            !navigator.storage ||
            "function" !== typeof navigator.storage.getDirectory
          )
            return this.writeBlobDownload(t, e, "s4", s);
          const a = await navigator.storage.getDirectory(),
            i = await a.getDirectoryHandle("kikoeru-download-cache", {
              create: !0,
            }),
            r = `download-${Date.now()}-${Math.random()
              .toString(36)
              .slice(2)}.part`,
            o = await i.getFileHandle(r, { create: !0 });
          try {
            await this.pipeDownload(t, o, !0, s);
            const a = await o.getFile(),
              i = await this.createDownloadWritable(e, "s3");
            let r = 0;
            try {
              ((r = a.size || 1), await i.write(a));
              await this.closeDownloadWritable(i, e, a.size || r, r);
            } catch (n) {
              if (
                this.isMobileDownloadPlatform &&
                r > 0 &&
                (await this.waitForDownloadFileComplete(e, a.size || r, r, !0))
              )
                return;
              throw n;
            }
          } finally {
            try {
              await i.removeEntry(r);
            } catch (n) {}
          }
        },
	        async fetchAndWriteFile(t, e, strategy = "s1", context = {}) {
          const fileNode = context.fileNode || t;
          if (/^cf\d+/.test(strategy))
            return this.cacheFirstDownload(t, e, strategy, context);
          if ("s3" === strategy)
            return this.writeArrayBufferDownload(t, e, strategy, !1, fileNode);
          if ("s4" === strategy) return this.writeBlobDownload(t, e, strategy, fileNode);
          if ("s5" === strategy) return this.pipeDownload(t, e, !1, fileNode);
          if ("s6" === strategy) return this.pipeDownload(t, e, !0, fileNode);
          if ("s7" === strategy)
            return this.writeArrayBufferDownload(t, e, strategy, !1, fileNode);
          if ("s8" === strategy)
            return this.writeArrayBufferDownload(t, e, strategy, !1, fileNode);
          if ("s9" === strategy)
            return this.writeArrayBufferDownload(t, e, strategy, !0, fileNode);
          if ("s10" === strategy)
            return this.writeOpfsThenCopyDownload(t, e, fileNode);
          if ("s11" === strategy)
            return this.writeTempThenCopyDownload(t, e, context);
          const url = this.buildDownloadUrl(t);
          let existingSize = 0;
          try {
            existingSize = (await e.getFile()).size || 0;
          } catch (o) {}
          const i = existingSize > 0 ? { Range: `bytes=${existingSize}-` } : {},
            r = await fetch(url, {
              credentials: "same-origin",
              headers: i,
            });
          if (416 === r.status) {
            const o = this.getDownloadResponseTotal(r, existingSize);
            if (await this.isDownloadFileComplete(e, o, existingSize)) return;
          }
          if (!r.ok && 206 !== r.status)
            throw new Error(
              `${r.status} ${r.statusText || "download failed"}: ${t.relativePath}`,
            );
          const o = this.getDownloadResponseTotal(r, existingSize),
            l = existingSize > 0 && 206 === r.status;
          const n = await e.createWritable(
            l ? { keepExistingData: !0 } : void 0,
          );
          fileNode &&
            this.setDownloadFileProgress(fileNode, {
              status: "running",
              loaded: existingSize,
              total: o || Number(fileNode.size) || 0,
              message: "下载中",
            });
          let c = l ? existingSize : 0,
            d = !1,
            u = c;
          try {
            if (l) {
              await n.seek(existingSize);
            }
            if (r.body && "function" === typeof r.body.getReader) {
              const h = r.body.getReader();
              while (1) {
                const { done: s, value: i } = await h.read();
                if (s) break;
                u = c + (i && void 0 !== i.byteLength ? i.byteLength : 0);
                (await n.write(i),
                  (c = u),
                  fileNode &&
                    this.setDownloadFileProgress(fileNode, {
                      status: "running",
                      loaded: c,
                      total: o || Number(fileNode.size) || 0,
                      message: "下载中",
                    }));
              }
            } else {
              const i = await r.arrayBuffer();
              u = c + (i.byteLength || 0);
              (await n.write(i),
                (c = u),
                fileNode &&
                  this.setDownloadFileProgress(fileNode, {
                    status: "running",
                    loaded: c,
                    total: o || Number(fileNode.size) || 0,
                    message: "下载中",
                  }));
            }
            d = !0;
            (await n.close(),
              await this.verifyWritableTargetSize(e, o || u, ""),
              fileNode &&
                this.setDownloadFileProgress(fileNode, {
                  status: "done",
                  loaded: o || u,
                  total: o || u,
                  message: "下载完成",
                }));
          } catch (h) {
            const p =
              d ||
              (!!o && u >= o) ||
              (this.isMobileDownloadPlatform && !o && u > 0);
            if (!d)
              try {
                await n.close();
              } catch (i) {}
            if (
              this.isMobileDownloadPlatform &&
              p &&
              (await this.waitForDownloadFileComplete(e, o, u, !0))
            )
              return void (
                fileNode &&
                this.setDownloadFileProgress(fileNode, {
                  status: "done",
                  loaded: o || u,
                  total: o || u,
                  message: "下载完成",
                })
              );
            throw h;
          }
        },
	        async fetchAndWriteFileWithRetry(
	          t,
	          e,
	          retryCount = 3,
	          strategy = "s1",
	          context = {},
	        ) {
          let lastError;
          for (let attempt = 0; attempt <= retryCount; attempt++)
            try {
              return (
                attempt > 0 &&
                  (this.downloadStatus = `重试 ${attempt}/${retryCount} ${t.relativePath}`),
                await this.fetchAndWriteFile(t, e, strategy, context)
              );
            } catch (r) {
              if (((lastError = r), attempt >= retryCount)) break;
              await new Promise((t) => setTimeout(t, 350 * (attempt + 1)));
            }
          throw lastError;
        },
	        async downloadWithDirectoryPicker(t, e = "s1") {
          const rootHandle = await window.showDirectoryPicker({
            startIn: "downloads",
            mode: "readwrite",
          });
          await this.ensureWritablePermission(rootHandle);
	          const workHandle = await rootHandle.getDirectoryHandle(
	            DownloadTaskSanitizePathPart(this.workCode),
	            {
	              create: !0,
	            },
	          );
          let completedCount = 0,
            errors = [],
            nextIndex = 0;
          const mobileWorkerLimit = /^cf\d+/.test(e)
            ? 1
            : "s2" === e || "s9" === e || "s10" === e || "s11" === e
              ? 1
              : 2;
          const workerCount = Math.max(
            1,
            Math.min(
              this.isMobileDownloadPlatform ? mobileWorkerLimit : 16,
              parseInt(this.concurrency, 10) || 4,
            ),
          );
          this.downloadErrors = [];
          this.downloadProgress = 0;
          this.downloadStatus = "准备下载...";
          const totalCount = t.length,
            worker = async () => {
              while (1) {
                const index = nextIndex++;
                if (index >= totalCount) return;
                const fileNode = t[index];
                let currentDirHandle = null,
                  fileName = "",
                  fileHandle = null;
                try {
                  this.downloadStatus = `${index + 1}/${totalCount} ${fileNode.relativePath}`;
	                  const pathParts = DownloadTaskZipNormalizePath(fileNode.relativePath)
	                      .split("/")
	                      .filter(Boolean),
	                    currentFileName = pathParts.pop();
                  fileName = currentFileName;
                  currentDirHandle = workHandle;
                  for (const part of pathParts)
                    currentDirHandle = await currentDirHandle.getDirectoryHandle(part, {
                      create: !0,
                    });
                  fileHandle = await currentDirHandle.getFileHandle(fileName, {
                    create: !0,
                  });
                  await this.fetchAndWriteFileWithRetry(
                    fileNode,
                    fileHandle,
                    3,
                    e,
                    { dirHandle: currentDirHandle, fileName },
                  );
                  fileNode.selection = 2;
	                } catch (err) {
	                  await this.removeEmptyDownloadFile(
	                    currentDirHandle,
	                    fileName,
	                    fileHandle,
	                  );
	                  this.setDownloadFileProgress(fileNode, {
	                    status: "error",
	                    loaded: 0,
	                    total: Number(fileNode.size) || 0,
	                    message: (err && err.message) || "下载失败",
	                  });
	                  errors.push({ file: fileNode, error: err });
	                  console.error("download file failed", fileNode.relativePath, err);
	                } finally {
                  completedCount++;
                  this.downloadProgress = completedCount / totalCount;
                }
              }
            };
          await Promise.all(
            Array.from({ length: Math.min(workerCount, totalCount) }, () => worker()),
          );
          return errors;
        },
        async downloadFallback(t) {
          this.downloadStatus = "正在触发浏览器下载...";
          this.downloadProgress = 0;
          this.downloadErrors = [];
          const isMobile = !!this.isMobileDownloadPlatform;
          const concurrency = Math.max(
            1,
            Math.min(16, parseInt(this.concurrency, 10) || 4),
          );
          let nextIndex = 0,
            completedCount = 0,
            triggeredCount = 0,
            errors = [];
          const totalCount = t.length,
            worker = async () => {
              while (1) {
                const index = nextIndex++;
                if (index >= totalCount) return;
                const fileNode = t[index];
	                try {
	                  const o = document.createElement("a");
	                  ((this.downloadStatus = `${index + 1}/${totalCount} ${fileNode.relativePath}`),
	                    (o.href = this.buildDownloadUrl(fileNode)),
	                    (o.download = this.downloadFilenameForFallback(fileNode)),
	                    (o.rel = "noopener"),
	                    (o.style.display = "none"),
	                    document.body.appendChild(o),
	                    o.click(),
	                    o.remove(),
	                    this.setDownloadFileProgress(fileNode, {
	                      status: "triggered",
	                      loaded: Number(fileNode.size) || 0,
	                      total: Number(fileNode.size) || 0,
	                      message: "已交给浏览器",
	                    }),
	                    triggeredCount++);
	                } catch (error) {
	                  this.setDownloadFileProgress(fileNode, {
	                    status: "error",
	                    loaded: 0,
	                    total: Number(fileNode.size) || 0,
	                    message: (error && error.message) || "触发下载失败",
	                  });
	                  isMobile
	                    ? console.warn(
	                        "trigger browser download skipped",
                        fileNode.relativePath,
                        error,
                      )
                    : (errors.push({ file: fileNode, error }),
                      console.error(
                        "trigger browser download failed",
                        fileNode.relativePath,
                        error,
                      ));
                } finally {
                  (completedCount++,
                    (this.downloadProgress = completedCount / totalCount),
                    await new Promise((t) =>
                      setTimeout(t, isMobile ? 260 : 160),
                    ));
                }
              }
            };
          await Promise.all(
            Array.from({ length: Math.min(concurrency, totalCount) }, () => worker()),
          );
          return (
            (this.downloadErrors = isMobile ? [] : errors),
            isMobile
              ? (triggeredCount > 0
                  ? this.showSuccNotif("已触发浏览器批量下载")
                  : this.showWarnNotif("浏览器未能触发批量下载"))
              : errors.length > 0
                ? this.showWarnNotif(`已触发 ${triggeredCount} 个下载，${errors.length} 个未能触发`)
                : this.showSuccNotif("已触发浏览器批量下载"),
            (isMobile ? triggeredCount > 0 : triggeredCount > 0 || 0 === errors.length) &&
              this.$emit("input", !1),
            errors
          );
        },
	        async startDownload(t = "") {
	          if (this.isDownloading) return;
	          const e = this.getSelectedFiles(),
	            s = this.isMobileDownloadPlatform ? t || "zip1" : t || "s1";
	          if (0 === e.length)
	            return void this.showErrNotif("请先选择要下载的文件");
	          if ("aria2" === s) {
	            try {
	              const a = await this.askAria2Config();
	              if (!a) return void this.showWarnNotif("已取消 Aria2 任务");
	              return (
	                this.resetDownloadFileProgressState(e),
	                (this.isDownloading = !0),
	                (this.activeDownloadStrategy = s),
	                await this.downloadWithAria2(e, a),
	                this.showSuccNotif("已提交 Aria2 任务"),
	                this.$emit("input", !1)
              );
            } catch (a) {
              return void this.showErrNotif(a.message || a);
	            } finally {
	              (this.isDownloading = !1), (this.activeDownloadStrategy = "");
	            }
	          }
	          if (this.isMobileDownloadPlatform && "browser" === s) {
	            try {
	              const a = await this.confirmBrowserDownloadWarning();
	              if (!a) return void this.showWarnNotif("已取消浏览器下载");
	              return (
	                this.resetDownloadFileProgressState(e),
	                (this.isDownloading = !0),
	                (this.activeDownloadStrategy = s),
	                await this.downloadFallback(e)
	              );
	            } finally {
	              (this.isDownloading = !1), (this.activeDownloadStrategy = "");
	            }
	          }
	          if (this.isMobileDownloadPlatform && /^zip\d+/.test(s)) {
	            try {
	              const a = await this.confirmMobileZipWarning();
	              if (!a) return void this.showWarnNotif("已取消打包下载");
	              return (
	                this.resetDownloadFileProgressState(e),
	                (this.isDownloading = !0),
	                (this.activeDownloadStrategy = s),
	                await this.downloadMobileZip(e, null),
	                this.showSuccNotif("下载完成"),
	                this.$emit("input", !1)
              );
            } catch (i) {
              return void this.showErrNotif(i.message || i);
            } finally {
              (this.isDownloading = !1), (this.activeDownloadStrategy = "");
            }
          }
	          if (!this.canUseDirectoryPicker) {
	            try {
	              return (
	                this.resetDownloadFileProgressState(e),
	                (this.isDownloading = !0),
	                (this.activeDownloadStrategy = ""),
	                await this.downloadFallback(e)
              );
            } finally {
              this.isDownloading = !1;
            }
	          }
	          try {
	            (this.resetDownloadFileProgressState(e),
	              (this.isDownloading = !0),
	              (this.activeDownloadStrategy = s),
	              (this.downloadProgress = 0),
	              (this.downloadStatus = "请选择目标文件夹"));
            const a = await this.downloadWithDirectoryPicker(e, s);
            if (a.length > 0)
              return void (
                (this.downloadErrors = a),
                this.showErrNotif(`下载完成，但有 ${a.length} 个文件失败`)
              );
            this.showSuccNotif("下载完成");
            this.$emit("input", !1);
          } catch (a) {
            a && "AbortError" === a.name
              ? this.showWarnNotif("已取消选择文件夹")
              : this.showErrNotif(a.message || a);
          } finally {
            (this.isDownloading = !1), (this.activeDownloadStrategy = "");
          }
        },
      },
	        mounted() {
	          this.ensureDownloadDialogStyles();
	          this.setupTracks(this.tracks);
	          this.value && this.fetchMissingTrackSizes();
	        },
    },
    DownloadTaskDialog = Object(g["a"])(
      DownloadTaskDialogComponent,
      DownloadTaskDialogRender,
      DownloadTaskDialogStaticRenderFns,
      !1,
      null,
      null,
      null,
    ),
    DownloadTaskDialogExport = DownloadTaskDialog.exports;
  Bt()(DownloadTaskDialog, "components", {
    QDialog: Ue["a"],
    QCard: Dt["a"],
    QCardSection: Re["a"],
    QCardActions: ze["a"],
    QBtn: zt["a"],
    QCheckbox: uo["a"],
    QTree: zo["a"],
    QScrollArea: Ms["a"],
    QLinearProgress: ca["a"],
    QInput: We["a"],
    QIcon: Qe["a"],
    QSeparator: Xe["a"],
    QChip: Fe["a"],
  });
  gi.components.WorkDownloadDialog = DownloadTaskDialogExport;
  const en = [
    {
      path: "/admin",
      component: Ys,
      children: [
        { path: "", component: Vr },
        { path: "scanner", component: ro },
        { path: "advanced", component: po },
        { path: "usermanage", component: _o },
        { path: "syncer", component: Xo },
      ],
    },
    {
      path: "/",
      component: zs,
      children: [
        { path: "", redirect: { name: "works" } },
        { path: "works", name: "works", component: Ha },
        { path: "work/:id", component: Hi },
        { path: "search", name: "advance search", component: Ha },
        { path: "circles", props: { restrict: "circles" }, component: Xi },
        { path: "tags", props: { restrict: "tags" }, component: Xi },
        { path: "vas", props: { restrict: "vas" }, component: Xi },
        { path: "fullScreenPlayer/:id?", component: Ar },
        { path: "ai_lyric", component: Qr },
        { path: "about", component: To },
        ...tn("favourites", [
          { path: "", props: { route: "histroy" }, component: br },
          { path: "/review", props: { route: "review" }, component: br },
          ...tn("/progress", [
            {
              path: "",
              props: { route: "progress", progress: "marked" },
              component: br,
            },
            {
              path: "/marked",
              props: { route: "progress", progress: "marked" },
              component: br,
            },
            {
              path: "/listening",
              props: { route: "progress", progress: "listening" },
              component: br,
            },
            {
              path: "/listened",
              props: { route: "progress", progress: "listened" },
              component: br,
            },
            {
              path: "/replay",
              props: { route: "progress", progress: "replay" },
              component: br,
            },
            {
              path: "/postponed",
              props: { route: "progress", progress: "postponed" },
              component: br,
            },
          ]),
          { path: "/folder", props: { route: "folder" }, component: br },
          { path: "/histroy", props: { route: "histroy" }, component: br },
        ]),
      ],
      meta: { auth: !0 },
    },
    { path: "/login", component: nr },
  ];
  en.push({ path: "*", component: () => s.e(2).then(s.bind(null, "e51e")) });
  var sn = en;
  a["default"].use(kt["a"]);
  var an = function () {
      const t = new kt["a"]({
        scrollBehavior(t, e, s) {
          return s || { x: 0, y: 0 };
        },
        routes: sn,
        mode: "hash",
        base: "/asmr-site/",
      });
      return t;
    },
    rn = async function () {
      const t = "function" === typeof qt ? await qt({ Vue: a["default"] }) : qt,
        e =
          "function" === typeof an
            ? await an({ Vue: a["default"], store: t })
            : an;
      t.$router = e;
      const s = { router: e, store: t, render: (t) => t(v), el: "#q-app" };
      return { app: s, store: t, router: e };
    },
    on = s("9483");
  "undefined" !== typeof window &&
    "serviceWorker" in navigator &&
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .getRegistrations()
        .then((t) => Promise.all(t.map((t) => t.unregister())))
        .catch(() => {}),
        "caches" in window &&
          caches
            .keys()
            .then((t) =>
              Promise.all(
                t
                  .filter((t) => /^kikoeru-quasar/.test(t))
                  .map((t) => caches.delete(t)),
              ),
            )
            .catch(() => {});
    });
  var nn = s("4971"),
    ln = s.n(nn);
  s("24df");
  a["default"].component("VueSlider", ln.a);
  var cn = s("afa7");
  a["default"].use(cn["a"], { plyr: { controls: ["progress"] } });
  var dn = s("5132"),
    un = s.n(dn);
  async function hn() {
    const { app: t, store: e, router: s } = await rn();
    "undefined" !== typeof window && (window.__kikoeruStore = e);
    let i = !0;
    const r = (t) => {
        ((i = !1), (window.location.href = t));
      },
      o = window.location.href.replace(window.location.origin, ""),
      n = [void 0, void 0, void 0, void 0];
    for (let c = 0; !0 === i && c < n.length; c++)
      if ("function" === typeof n[c])
        try {
          await n[c]({
            app: t,
            router: s,
            store: e,
            Vue: a["default"],
            ssrContext: null,
            redirect: r,
            urlPath: o,
          });
        } catch (l) {
          return l && l.url
            ? void (window.location.href = l.url)
            : void console.error("[Quasar] boot error:", l);
        }
    !1 !== i && new a["default"](t);
  }
  (a["default"].use(
    new un.a({
      debug: !1,
      connection: "",
      options: { autoConnect: !1, query: { auth_token: "" } },
    }),
  ),
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !window.MSStream &&
      window.navigator.standalone &&
      s.e(0).then(s.t.bind(null, "a0db", 7)),
    hn());
},"307e":function (t, e, s) {
  "use strict";
  var a = s("8912"),
    i = s.n(a);
  i.a;
},"31cd":function (t, e, s) {},"393f":function (t, e, s) {
  "use strict";
  var a = s("e045"),
    i = s.n(a);
  i.a;
},"496d":function (t, e, s) {},"4e8f":function (t, e, s) {},"4ed7":function (t, e, s) {
  "use strict";
  var a = s("511f"),
    i = s.n(a);
  i.a;
},"4fa3":function (t, e, s) {},"511f":function (t, e, s) {},"5836":function (t, e, s) {},"5a33":function (t, e, s) {},"5eaf":function (t, e, s) {
  "use strict";
  var a = s("5836"),
    i = s.n(a);
  i.a;
},"6818":function (t, e, s) {},"695f":function (t, e, s) {},"6a18":function (t, e) {},"7230":function (t, e, s) {
  "use strict";
  var a = s("72d8"),
    i = s.n(a);
  i.a;
},"72d8":function (t, e, s) {},"736d":function (t, e, s) {},"7419":function (t, e, s) {
  "use strict";
  var a = s("2834"),
    i = s.n(a);
  i.a;
},"7661":function (t, e, s) {},"781d":function (t, e, s) {
  "use strict";
  var a = s("c183"),
    i = s.n(a);
  i.a;
},"7b15":function (t, e, s) {},"7f671":function (t, e, s) {
  "use strict";
  var a = s("5a33"),
    i = s.n(a);
  i.a;
},"8912":function (t, e, s) {},"89d3":function (t, e, s) {
  "use strict";
  var a = s("e87e"),
    i = s.n(a);
  i.a;
},"8bc0":function (t, e, s) {
  "use strict";
  var a = s("7b15"),
    i = s.n(a);
  i.a;
},"a3de":function (t, e, s) {},"a7c8":function (t, e, s) {
  "use strict";
  var a = s("dcdf"),
    i = s.n(a);
  i.a;
},"b3a5":function (t, e, s) {
  "use strict";
  var a = s("7661"),
    i = s.n(a);
  i.a;
},"b5fb":function (t, e) {},"b745":function (t, e, s) {
  "use strict";
  var a = s("dad8"),
    i = s.n(a);
  i.a;
},"bbe6":function (t, e, s) {
  "use strict";
  var a = s("d8de"),
    i = s.n(a);
  i.a;
},"bcf2":function (t, e, s) {
  "use strict";
  var a = s("d99a"),
    i = s.n(a);
  i.a;
},"bdea":function (t, e, s) {
  "use strict";
  var a = s("0662"),
    i = s.n(a);
  i.a;
},"c0e6":function (t, e, s) {
  "use strict";
  var a = s("695f"),
    i = s.n(a);
  i.a;
},"c183":function (t, e, s) {},"c518":function (t, e, s) {
  "use strict";
  var a = s("4e8f"),
    i = s.n(a);
  i.a;
},"c55b":function (t, e, s) {
  "use strict";
  var a = s("6818"),
    i = s.n(a);
  i.a;
},"cd54":function (t, e, s) {
  "use strict";
  var a = s("a3de"),
    i = s.n(a);
  i.a;
},"crawler-source-settings":function (module) {
  "use strict";

  const builtinIds = [
    "dlsite-api", "kikoeru-meta", "dlsite-html", "asmr-one", "hvdb", "cover",
  ];
  const typeOptions = [
    { label: "DLsite API", value: "dlsite-api" },
    { label: "DLsite 网页", value: "dlsite-html" },
    { label: "kikoeru-meta", value: "kikoeru-meta" },
    { label: "ASMR.ONE", value: "asmr-one" },
    { label: "HVDB（辅助声优）", value: "hvdb" },
    { label: "封面下载（辅助）", value: "cover" },
  ];
  const reservedHeaders = [
    "host", "connection", "content-length", "transfer-encoding",
    "proxy-authorization", "proxy-connection", "te", "trailer", "upgrade",
  ];
  const isBuiltin = (source) => !!source.builtin || builtinIds.includes(source.id);
  const isAuxiliary = (source) => ["hvdb", "cover"].includes(source.type);

  function validProxyHost(host) {
    if (typeof host !== "string") return false;
    if (!host || /^(?=.{1,253}$)[a-z0-9_-]+(?:\.[a-z0-9_-]+)*\.?$/i.test(host)) return true;
    const parts = host.split("%");
    if (parts.length > 2 || (parts.length === 2 && !/^[0-9a-zA-Z.:-]+$/.test(parts[1]))) return false;
    try {
      // URL validates raw IPv6 literals; proxy host and port remain separate.
      return !!new URL(`http://[${parts[0]}]/`).hostname;
    } catch (error) {
      return false;
    }
  }

  function normalizeSources(sources) {
    return Array.isArray(sources) ? sources.map((source) => ({
      ...source,
      proxy: { mode: "direct", host: "", port: 0, ...source.proxy },
      auth: { mode: "none", headerName: "X-Kikoeru-Key", value: "", ...source.auth },
    })) : [];
  }

  function sourceErrors(source) {
    const errors = {};
    const baseUrl = String(source.baseUrl || "").trim();
    if (!String(source.name || "").trim() || String(source.name).length > 120) {
      errors.name = "请输入来源名称，最多 120 个字符";
    }
    if (!typeOptions.some((option) => option.value === source.type)) {
      errors.type = "请选择支持的数据源类型";
    }
    if (!baseUrl && source.enabled) {
      errors.baseUrl = "启用前请填写服务地址";
    } else if (baseUrl) {
      try {
        const url = new URL(baseUrl);
        if (!["http:", "https:"].includes(url.protocol) || !url.hostname ||
          url.username || url.password || url.search || url.hash || /[\s\\]/.test(baseUrl)) {
          throw new Error("invalid URL");
        }
      } catch (error) {
        errors.baseUrl = "请输入完整的 HTTP(S) 地址，不含账号、查询参数或片段";
      }
    }
    const proxy = source.proxy || {};
    if (!["direct", "http"].includes(proxy.mode)) {
      errors.proxyMode = "请选择连接方式";
    }
    if (!validProxyHost(proxy.host) ||
      (proxy.mode === "http" && !proxy.host)) {
      errors.proxyHost = "请输入代理主机名或 IP，不含协议和路径";
    }
    if (!Number.isInteger(proxy.port) || proxy.port < (proxy.mode === "http" ? 1 : 0) || proxy.port > 65535) {
      errors.proxyPort = proxy.mode === "http" ? "代理端口须为 1–65535 的整数" : "代理端口须为 0–65535 的整数";
    }
    const auth = source.auth || {};
    if (!["none", "header"].includes(auth.mode)) {
      errors.authMode = "请选择请求验证方式";
    }
    if ((auth.headerName || auth.mode === "header") &&
      (!/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/.test(auth.headerName || "") ||
        reservedHeaders.includes(String(auth.headerName).toLowerCase()))) {
      errors.headerName = "请输入有效的自定义 Header 名称，如 X-Kikoeru-Key";
    }
    if (/[^\t\x20-\x7e\x80-\xff]/.test(auth.value || "")) {
      errors.headerValue = "请求码 / 密码包含 HTTP 请求头不支持的字符";
    } else if (auth.mode === "header") {
      if (source.enabled && !String(auth.value || "").trim()) {
        errors.headerValue = "启用请求验证前请填写请求码 / 密码";
      }
    }
    return errors;
  }

  function validateSources(sources) {
    if (!Array.isArray(sources) || !sources.length) return "数据源配置尚未加载，请刷新后重试";
    if (sources.length > 100) return "最多支持 100 个数据源";
    const ids = new Set();
    for (const source of sources) {
      if (!/^[a-z0-9][a-z0-9_-]{0,79}$/.test(source.id) || ids.has(source.id)) {
        return "数据源标识无效或重复，请刷新配置";
      }
      ids.add(source.id);
      const error = Object.values(sourceErrors(source))[0];
      if (error) return `${source.name || "未命名来源"}：${error}`;
    }
    if (builtinIds.some((id) => !ids.has(id))) return "内置数据源配置不完整，请刷新后重试";
    return "";
  }

  function createComponent(components) {
    return {
      name: "CrawlerSourceSettings",
      components,
      props: { sources: { type: Array, default: () => [] } },
      data() {
        return { expanded: {}, announcement: "" };
      },
      methods: {
        updateSource(source, section, key, value) {
          const next = section ? { ...source, [section]: { ...source[section], [key]: value } } : { ...source, [key]: value };
          this.$emit("input", this.sources.map((entry) => entry.id === source.id ? next : entry));
        },
        toggleExpanded(source) {
          this.$set(this.expanded, source.id, !this.expanded[source.id]);
        },
        moveSource(source, offset) {
          const group = this.sources.filter((entry) => isAuxiliary(entry) === isAuxiliary(source));
          const index = group.findIndex((entry) => entry.id === source.id);
          const neighbor = group[index + offset];
          if (!neighbor) return;
          const next = this.sources.slice();
          const currentIndex = next.findIndex((entry) => entry.id === source.id);
          const neighborIndex = next.findIndex((entry) => entry.id === neighbor.id);
          [next[currentIndex], next[neighborIndex]] = [next[neighborIndex], next[currentIndex]];
          this.$emit("input", next);
          this.announcement = `${source.name}已${offset < 0 ? "上移" : "下移"}`;
        },
        addSource() {
          if (this.sources.length >= 100) return;
          const source = {
            id: `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
            name: "自定义数据源", type: "dlsite-api", enabled: false, builtin: false, baseUrl: "",
            proxy: { mode: "direct", host: "", port: 0 },
            auth: { mode: "none", headerName: "X-Kikoeru-Key", value: "" },
          };
          this.$set(this.expanded, source.id, true);
          this.$emit("input", this.sources.concat(source));
          this.announcement = "已添加自定义数据源，填写地址后可启用";
          this.$nextTick(() => {
            const input = this.$el.querySelector(`[data-source-id="${source.id}"] .crawler-source-fields input`);
            if (input) input.focus();
          });
        },
        removeSource(source) {
          if (isBuiltin(source)) return;
          this.$emit("input", this.sources.filter((entry) => entry.id !== source.id));
          this.announcement = `已删除${source.name}，保存后生效`;
        },
        renderSource(h, source, index, group) {
          const errors = sourceErrors(source);
          const expanded = !!this.expanded[source.id];
          const proxy = source.proxy || {};
          const auth = source.auth || {};
          const panelId = `crawler-source-${source.id}`;
          const field = (label, section, key, options = {}) => {
            const object = section ? source[section] || {} : source;
            const error = errors[options.errorKey || key];
            return h(options.select ? "q-select" : "q-input", {
              class: options.class || "",
              props: {
                outlined: true, dense: true, label, value: object[key],
                error: !!error, errorMessage: error || "", hideBottomSpace: !options.hint,
                ...options,
              },
              attrs: {
                autocomplete: options.type === "password" ? "new-password" : "off",
                "data-testid": `crawler-source-${source.id}-${section ? `${section}-` : ""}${key}`,
                placeholder: options.placeholder,
                min: options.min, max: options.max, step: options.step,
              },
              on: { input: (value) => this.updateSource(source, section, key, options.type === "number" && value !== "" ? Number(value) : value) },
            });
          };
          const select = (label, section, key, options, extra = {}) => field(label, section, key, {
            select: true, options, emitValue: true, mapOptions: true, ...extra,
          });
          const button = (label, icon, action, extra = {}) => h("q-btn", {
            props: { flat: true, dense: true, round: !label, label, icon, type: "button", ...extra },
            attrs: {
              "aria-label": extra.ariaLabel || label, title: extra.ariaLabel || label,
              "data-testid": extra.testId ? `crawler-source-${source.id}-${extra.testId}` : undefined,
            },
            on: { click: action },
          });
          return h("article", {
            key: source.id,
            class: "crawler-source-card",
            attrs: { "data-source-id": source.id, "data-testid": `crawler-source-${source.id}`, "aria-label": source.name },
          }, [
            h("div", { class: "crawler-source-header" }, [
              h("span", { class: "crawler-source-rank", attrs: { "aria-label": `顺序 ${index + 1}` } }, [String(index + 1)]),
              h("div", { class: "crawler-source-name" }, [
                h("span", [source.name || "未命名来源"]),
                h("span", { class: "crawler-source-badge" }, [isBuiltin(source) ? "内置" : "自定义"]),
              ]),
              h("q-toggle", {
                props: { value: !!source.enabled, label: source.enabled ? "已启用" : "已停用", dense: true },
                attrs: { "aria-label": `启用 ${source.name}`, "data-testid": `crawler-source-${source.id}-enable` },
                on: { input: (value) => this.updateSource(source, null, "enabled", value) },
              }),
              h("div", { class: "crawler-source-actions" }, [
                button(null, "arrow_upward", () => this.moveSource(source, -1), { disable: index === 0, ariaLabel: `上移 ${source.name}`, testId: "move-up" }),
                button(null, "arrow_downward", () => this.moveSource(source, 1), { disable: index === group.length - 1, ariaLabel: `下移 ${source.name}`, testId: "move-down" }),
                h("q-btn", {
                  props: { flat: true, dense: true, color: "primary", label: expanded ? "收起" : "配置", iconRight: expanded ? "expand_less" : "expand_more", type: "button" },
                  attrs: { "aria-expanded": String(expanded), "aria-controls": panelId, "aria-label": `${expanded ? "收起" : "配置"} ${source.name}`, "data-testid": `crawler-source-${source.id}-expand` },
                  on: { click: () => this.toggleExpanded(source) },
                }),
                button(null, "delete_outline", () => this.removeSource(source), { disable: isBuiltin(source), color: isBuiltin(source) ? "grey" : "negative", ariaLabel: isBuiltin(source) ? "内置来源不可删除" : `删除 ${source.name}`, testId: "delete" }),
              ]),
            ]),
            h("div", { class: "crawler-source-summary" }, [
              h("span", { class: "crawler-source-url" }, [source.baseUrl || "尚未填写服务地址"]),
              h("span", [proxy.mode === "http" ? `HTTP 代理 · ${proxy.host || "未填写主机"}:${proxy.port || "未填写端口"}` : "直连"]),
              h("span", [auth.mode === "header" ? "Header 验证" : "无需验证"]),
            ]),
            Object.keys(errors).length ? h("p", { class: "crawler-source-error", attrs: { role: "alert" } }, [Object.values(errors)[0]]) : null,
            expanded ? h("div", { class: "crawler-source-fields", attrs: { id: panelId } }, [
              h("div", { class: "crawler-source-grid" }, [
                field("来源名称", null, "name", { maxlength: 120 }),
                select(isBuiltin(source) ? "来源类型（内置固定）" : "来源类型", null, "type", typeOptions, { disable: isBuiltin(source) }),
              ]),
              field("服务地址 / 反代地址", null, "baseUrl", {
                placeholder: "https://example.com", type: "url",
                hint: "填写完整根地址，可包含反代路径；程序自动拼接对应类型的请求路径。",
              }),
              h("div", { class: "crawler-source-grid" }, [
                select("连接方式", "proxy", "mode", [{ label: "直连", value: "direct" }, { label: "HTTP 代理", value: "http" }], { errorKey: "proxyMode" }),
                select("请求验证", "auth", "mode", [{ label: "无", value: "none" }, { label: "自定义 Header", value: "header" }], { errorKey: "authMode" }),
              ]),
              proxy.mode === "http" ? h("div", { class: "crawler-source-grid" }, [
                field("HTTP 代理主机", "proxy", "host", { placeholder: "127.0.0.1", errorKey: "proxyHost" }),
                field("HTTP 代理端口", "proxy", "port", { type: "number", min: 1, max: 65535, step: 1, errorKey: "proxyPort" }),
              ]) : null,
              auth.mode === "header" ? h("div", { class: "crawler-source-grid" }, [
                field("Header 名称", "auth", "headerName", { placeholder: "X-Kikoeru-Key" }),
                field("请求码 / 密码", "auth", "value", { type: "password", errorKey: "headerValue", hint: "仅用于此来源的请求验证。" }),
              ]) : null,
              h("p", { class: "crawler-source-help" }, ["连接方式和请求验证仅作用于此来源。修改后点击页面底部“保存”生效。"]),
            ]) : null,
          ]);
        },
      },
      render(h) {
        const main = this.sources.filter((source) => !isAuxiliary(source));
        const auxiliary = this.sources.filter(isAuxiliary);
        return h("section", { class: "crawler-source-settings", attrs: { "aria-label": "爬虫数据源" } }, [
          h("div", { class: "crawler-source-section-heading" }, [
            h("div", [
              h("h3", ["数据源与优先级"]),
              h("p", ["从上到下尝试已启用的来源，成功后停止；使用箭头调整顺序。内置来源可停用，自定义来源可删除。"]),
            ]),
            h("q-btn", {
              props: { outline: true, color: "primary", icon: "add", label: "添加数据源", type: "button", disable: this.sources.length >= 100 },
              attrs: { "data-testid": "crawler-source-add" },
              on: { click: this.addSource },
            }),
          ]),
          h("div", { class: "crawler-source-live", attrs: { "aria-live": "polite", role: "status" } }, [this.announcement]),
          !this.sources.length ? h("p", ["正在加载数据源配置…"]) : null,
          ...main.map((source, index) => this.renderSource(h, source, index, main)),
          auxiliary.length ? h("div", { class: "crawler-source-section-heading crawler-source-auxiliary-heading" }, [
            h("div", [h("h3", ["辅助来源"]), h("p", ["HVDB 补充声优信息，封面来源负责下载图片；分别按同类来源的顺序使用。"])]),
          ]) : null,
          ...auxiliary.map((source, index) => this.renderSource(h, source, index, auxiliary)),
        ]);
      },
    };
  }

  module.exports = { createComponent, normalizeSources, validateSources, sourceErrors };
},"d076":function (t, e, s) {
  "use strict";
  var a = s("496d"),
    i = s.n(a);
  i.a;
},"d8de":function (t, e, s) {},"d99a":function (t, e, s) {},"dad8":function (t, e, s) {},"dcdf":function (t, e, s) {},"e045":function (t, e, s) {},"e83d":function (t, e, s) {},"e87e":function (t, e, s) {}});