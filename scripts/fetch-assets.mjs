// Downloads every image and public-information document from ingrain.world
// into /public so the new site no longer depends on the old domain.
//
//   npm run fetch-assets
//   # then set NEXT_PUBLIC_ASSET_MODE=local in .env.local / hosting env and rebuild
//
// Safe to re-run: existing files are skipped unless you pass --force.

import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const force = process.argv.includes("--force");

const { assetMap, REMOTE_ASSET_BASE } = await import(pathToFileURL(path.join(root, "data/assets.js")).href);
const { publicDocuments } = await import(pathToFileURL(path.join(root, "data/content.js")).href);

const jobs = [
  ...Object.values(assetMap).map(([remote, local]) => [remote, local]),
  ...publicDocuments.flatMap((g) => g.items.map(([, remote]) => [remote, `/documents/${remote.split("/").pop()}`])),
];

let ok = 0;
let failed = 0;
for (const [remote, local] of jobs) {
  const dest = path.join(root, "public", local);
  if (!force) {
    try {
      await access(dest);
      console.log(`skip   ${local}`);
      ok++;
      continue;
    } catch {}
  }
  try {
    const res = await fetch(`${REMOTE_ASSET_BASE}${remote}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    console.log(`saved  ${local}`);
    ok++;
  } catch (err) {
    console.error(`FAILED ${remote} → ${err.message}`);
    failed++;
  }
}

console.log(`\n${ok} file(s) ready, ${failed} failed.`);
if (!failed) console.log("Now set NEXT_PUBLIC_ASSET_MODE=local and rebuild.");
process.exit(failed ? 1 : 0);
