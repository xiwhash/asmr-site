// 用 node 安全写入 shared.json（避免 PowerShell 编码破坏中文）
const fs = require("node:fs");

const p = process.argv[2];
const siteName = process.argv[3] || "我的音声库";

let cfg = {};
try {
  cfg = JSON.parse(fs.readFileSync(p, "utf8"));
} catch (e) {
  cfg = {};
}
if (!cfg.sharedConfig) cfg.sharedConfig = {};
cfg.sharedConfig.siteName = siteName;

fs.writeFileSync(p, JSON.stringify(cfg), "utf8");
console.log("written:", p);
console.log("content:", JSON.stringify(cfg));
