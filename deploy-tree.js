// Batch upload a directory tree to a GitHub repo (creates repo if missing, enables Pages)
const fs = require("node:fs");
const path = require("node:path");

const token = process.argv[2];
const rootDir = process.argv[3];
const ownerRepo = process.argv[4]; // e.g. xiwhash/xiwhash.github.io
const branch = process.argv[5] || "main";

const H = {
  Authorization: "Bearer " + token,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "kikoeru-deploy",
  "Content-Type": "application/json",
};

const API = "https://api.github.com";

async function api(url, opts) {
  const r = await fetch(url, Object.assign({ headers: H }, opts));
  const text = await r.text();
  let body;
  try { body = JSON.parse(text); } catch { body = text; }
  if (!r.ok) throw new Error("HTTP " + r.status + " " + url.replace(API, "") + " :: " + (typeof body === "string" ? body.slice(0, 200) : JSON.stringify(body).slice(0, 200)));
  return body;
}

function walk(dir, base, out) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, base, out);
    else out.push(path.relative(base, full).replace(/\\/g, "/"));
  }
  return out;
}

(async () => {
  const [owner, repo] = ownerRepo.split("/");
  console.log("==> repo:", ownerRepo, "branch:", branch);

  // 1. ensure repo
  let exists = true;
  try { await api(`${API}/repos/${owner}/${repo}`, { method: "GET" }); }
  catch { exists = false; }

  if (!exists) {
    await api(`${API}/user/repos`, {
      method: "POST",
      body: JSON.stringify({ name: repo, description: "My ASMR library (Kikoeru static)", private: false, auto_init: true }),
    });
    console.log("    repo created");
    await new Promise((r) => setTimeout(r, 2500));
  } else {
    console.log("    repo exists");
  }

  // 2. upload files
  const files = walk(rootDir, rootDir, []).filter((f) => !f.endsWith("first_work_id.txt"));
  console.log("==> uploading", files.length, "files");
  let ok = 0, failed = [];
  for (const rel of files) {
    const abs = path.join(rootDir, rel);
    const buf = fs.readFileSync(abs);
    const b64 = buf.toString("base64");
    const url = `${API}/repos/${owner}/${repo}/contents/${encodeURI(rel)}`;
    let sha = null;
    try { const cur = await api(url, { method: "GET" }); sha = cur.sha; } catch { }
    const body = { message: "deploy " + rel, content: b64, branch };
    if (sha) body.sha = sha;
    try {
      await api(url, { method: "PUT", body: JSON.stringify(body) });
      ok++;
      process.stdout.write(".");
    } catch (e) {
      failed.push(rel + " :: " + e.message.slice(0, 120));
      process.stdout.write("x");
    }
  }
  console.log("\n==> uploaded", ok, "/", files.length);
  if (failed.length) console.log("FAILED:\n" + failed.join("\n"));

  // 3. enable pages
  try {
    let pageOn = false;
    try { await api(`${API}/repos/${owner}/${repo}/pages`, { method: "GET" }); pageOn = true; } catch { }
    if (!pageOn) {
      await api(`${API}/repos/${owner}/${repo}/pages`, {
        method: "POST",
        body: JSON.stringify({ source: { branch, path: "/" } }),
      });
      console.log("==> pages enabled");
    } else {
      console.log("==> pages already enabled");
    }
  } catch (e) {
    console.log("pages:", e.message.slice(0, 160));
  }

  const isRootRepo = repo.endsWith(".github.io");
  console.log("\nSITE:", isRootRepo ? `https://${owner}.github.io/` : `https://${owner}.github.io/${repo}/`);
})().catch((e) => { console.error("FAIL:", e.message); process.exit(1); });
