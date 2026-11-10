/* Kikoeru static replica: intercept /api/* and serve local JSON. Frontend unchanged. */
const VERSION = "v25";
const CACHE = "kikoeru-data-" + VERSION;
const PRELOAD = [
  "data/shared.json",
  "data/works.json",
  "data/tags.json",
  "data/circles.json",
];

self.addEventListener("install", (ev) => {
  ev.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(PRELOAD.map((p) => c.add(p + "?v=" + VERSION).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (ev) => {
  ev.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function loadJson(path) {
  const c = await caches.open(CACHE);
  const url = path + "?v=" + VERSION;
  let r = await c.match(url);
  if (!r) {
    r = await fetch(url, { cache: "no-store" });
    if (r.ok) c.put(url, r.clone());
  }
  if (!r || !r.ok) return null;
  try { return await r.json(); } catch (e) { return null; }
}

function jsonResp(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

/* sub-path aware: SW lives at /asmr-site/sw.js, strip its base first */
const BASE_PATH = new URL(".", self.location.href).pathname.replace(/\/$/, "");

self.addEventListener("fetch", (ev) => {
  const url = new URL(ev.request.url);
  if (url.origin !== self.location.origin) return;
  let pathname = url.pathname;
  if (BASE_PATH && pathname.indexOf(BASE_PATH) === 0) pathname = pathname.slice(BASE_PATH.length);
  if (!pathname.startsWith("/api/")) return;
  ev.respondWith(
    handleApi(url, pathname, ev).catch((e) => jsonResp({ error: String(e) }, 500))
  );
});

async function handleApi(u, rawPath, ev) {
  const p = rawPath;
  const q = u.searchParams;
  const method = (ev && ev.request && ev.request.method) || "GET";

  if (p === "/api/config/shared") {
    const d = await loadJson("data/shared.json");
    return jsonResp(d || { sharedConfig: {} });
  }

  if (p === "/api/version") {
    return jsonResp({ update_available: false, notifyUser: false, version: "static" });
  }

  if (p === "/api/histroy") {
    if (method === "PUT") return jsonResp({ success: true });
    return jsonResp({ playHistory: [], pagination: { currentPage: 1, pageSize: 20, totalCount: 0 } });
  }

  if (p === "/api/review") {
    return jsonResp({ reviews: [], pagination: { currentPage: 1, pageSize: 20, totalCount: 0 } });
  }

  if (p === "/api/auth/me") {
    if (method === "POST") return jsonResp({ error: "static build: login disabled" }, 401);
    return jsonResp({ user: { name: "guest", group: "guest" }, auth: false, guestMode: true });
  }

  if (p === "/api/works" || p === "/api/search") {
    const d = await loadJson("data/works.json");
    if (!d) return jsonResp({ works: [], pagination: { currentPage: 1, pageSize: 24, totalCount: 0 } });
    let works = d.works || [];
    const page = parseInt(q.get("page") || "1", 10) || 1;
    const size = parseInt(q.get("pageSize") || "24", 10) || 24;
    const keyword = (q.get("keyword") || "").trim().toLowerCase();
    if (keyword) works = works.filter((w) => (w.title || "").toLowerCase().includes(keyword));
    const total = works.length;
    const start = (page - 1) * size;
    return jsonResp({
      works: works.slice(start, start + size),
      pagination: { currentPage: page, pageSize: size, totalCount: total },
    });
  }

  if (p === "/api/tags") {
    const d = await loadJson("data/tags.json");
    return jsonResp(d || []);
  }

  if (p === "/api/circles") {
    const d = await loadJson("data/circles.json");
    return jsonResp(d || []);
  }

  let m = p.match(/^\/api\/work\/(\d+)$/);
  if (m) {
    const id = m[1];
    const direct = await loadJson("data/work_" + id + ".json");
    if (direct) return jsonResp(direct);
    const d = await loadJson("data/works.json");
    const w = ((d && d.works) || []).find((x) => String(x.id) === id);
    return w ? jsonResp(w) : jsonResp({ error: "not found" }, 404);
  }

  m = p.match(/^\/api\/tracks\/(\d+)$/);
  if (m) {
    const d = await loadJson("data/tracks_" + m[1] + ".json");
    return jsonResp(d || []);
  }

  if (p.startsWith("/api/cover/")) {
    /* serve local cover files; buffer fully so the response has a clean end */
    const cm = p.match(/^\/api\/cover\/([A-Za-z0-9]+)/);
    const coverKey = cm ? (/^rj/i.test(cm[1]) ? cm[1].toUpperCase() : cm[1]) : null;
    if (cm) {
      try {
        let r = await fetch("data/covers/" + coverKey + ".webp");
        let ctype = "image/webp";
        if (!r.ok) {
          r = await fetch("data/covers/" + coverKey + ".jpg");
          ctype = "image/jpeg";
        }
        if (r.ok) {
          const buf = await r.arrayBuffer();
          return new Response(buf, {
            status: 200,
            headers: {
              "Content-Type": ctype,
              "Content-Length": String(buf.byteLength),
              "Cache-Control": "public, max-age=31536000, immutable",
            },
          });
        }
      } catch (e) { }
    }
    return new Response("", { status: 404 });
  }

  /* 字幕接口：读取本地 data/subs/<RJ>/<idx>.lrc */
  async function loadLrcFor(rest) {
    const m = String(rest || "").match(/^(RJ\d+)\/(\d+)/i);
    if (!m) return null;
    const rj = m[1].toUpperCase();
    const idx = String(parseInt(m[2], 10)).padStart(3, "0");
    const names = [idx + ".lrc", idx + ".vtt"];
    for (let i = 0; i < names.length; i++) {
      try {
        const r = await fetch("data/subs/" + rj + "/" + names[i]);
        if (r.ok) return { text: await r.text(), name: names[i] };
      } catch (e) { }
    }
    return null;
  }

  if (p.indexOf("/api/media/fetch-lrc/") === 0) {
    const hit = await loadLrcFor(p.slice("/api/media/fetch-lrc/".length));
    return jsonResp({ lrc: hit ? hit.text : "" });
  }

  if (p.indexOf("/api/media/query-lrc/") === 0) {
    const hit = await loadLrcFor(p.slice("/api/media/query-lrc/".length));
    if (!hit) return jsonResp({ lyricList: [] });
    return jsonResp({ lyricList: [{ name: hit.name, content: hit.text, lrc: hit.text }] });
  }

  if (p.indexOf("/api/media/check-lrc") === 0) {
    const rest = p.replace(/^\/api\/media\/check-lrc(-status)?\//, "");
    const hit = await loadLrcFor(rest);
    if (!hit) return new Response(null, { status: 204 });
    return jsonResp({ exists: true, name: hit.name });
  }

  if (p.indexOf("/api/media/download-lyrics") === 0 || p.indexOf("/api/media/save-lrc") === 0) {
    return jsonResp({ success: true });
  }

  if (p.startsWith("/api/media/")) {
    const d = await loadJson("data/shared.json");
    const base = (d && d.sharedConfig && d.sharedConfig.mediaFileBaseUrl) || "";
    if (base) return Response.redirect(base + p, 302);
    return new Response("", { status: 404 });
  }

  /* unimplemented endpoints: empty object so the frontend keeps going */
  return jsonResp({});
}

