// 删除远程多余文件并上传新的空数据
const fs = require("node:fs");
const path = require("node:path");

const token = process.argv[2];
const localDir = process.argv[3];
const ownerRepo = process.argv[4];
const branch = process.argv[5] || "main";

const H = {
  Authorization: "Bearer " + token,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "kikoeru-clean",
  "Content-Type": "application/json",
};
const API = "https://api.github.com";

async function api(url, opts) {
  const r = await fetch(url, Object.assign({ headers: H }, opts));
  const text = await r.text();
  let body;
  try { body = JSON.parse(text); } catch { body = text; }
  if (!r.ok) throw new Error("HTTP " + r.status + " " + url.replace(API, "") + " :: " + String(typeof body === "string" ? body : JSON.stringify(body)).slice(0, 160));
  return body;
}

(async () => {
  const [owner, repo] = ownerRepo.split("/");
  const base = `${API}/repos/${owner}/${repo}/contents`;

  // 1. 列出远程 data/ 下所有文件（递归）
  async function listAll(dir) {
    let out = [];
    try {
      const items = await api(`${base}/${dir}?ref=${branch}`);
      for (const it of items) {
        if (it.type === "dir") out = out.concat(await listAll(it.path));
        else out.push({ path: it.path, sha: it.sha });
      }
    } catch (e) { /* dir missing */ }
    return out;
  }

  console.log("==> listing remote data/");
  const remote = await listAll("data");
  console.log("    remote files:", remote.length);

  // 2. 本地应有的文件
  const localFiles = new Set();
  function walk(d, baseDir) {
    for (const n of fs.readdirSync(d)) {
      const f = path.join(d, n);
      if (fs.statSync(f).isDirectory()) walk(f, baseDir);
      else localFiles.add(path.relative(path.dirname(baseDir), f).replace(/\\/g, "/"));
    }
  }
  walk(localDir, localDir);

  // 3. 删除远程多余文件
  const toDelete = remote.filter((r) => !localFiles.has(r.path));
  console.log("==> deleting", toDelete.length, "remote files");
  let del = 0;
  for (const f of toDelete) {
    try {
      await api(`${base}/${f.path}`, {
        method: "DELETE",
        body: JSON.stringify({ message: "remove " + f.path, sha: f.sha, branch }),
      });
      del++;
      process.stdout.write(".");
    } catch (e) {
      process.stdout.write("x");
      console.log("\n  del fail:", f.path, e.message.slice(0, 100));
    }
  }
  console.log("\n    deleted", del, "/", toDelete.length);

  // 4. 上传本地文件（覆盖）
  console.log("==> uploading local data files");
  let up = 0;
  for (const rel of localFiles) {
    const abs = path.join(path.dirname(localDir), rel);
    const buf = fs.readFileSync(abs);
    let sha = null;
    try { const cur = await api(`${base}/${rel}?ref=${branch}`); sha = cur.sha; } catch (e) { }
    const body = { message: "update " + rel, content: buf.toString("base64"), branch };
    if (sha) body.sha = sha;
    try {
      await api(`${base}/${rel}`, { method: "PUT", body: JSON.stringify(body) });
      up++;
      process.stdout.write(".");
    } catch (e) {
      process.stdout.write("x");
      console.log("\n  up fail:", rel, e.message.slice(0, 100));
    }
  }
  console.log("\n    uploaded", up, "/", localFiles.size);
  console.log("done");
})().catch((e) => { console.error("FAIL:", e.message); process.exit(1); });
