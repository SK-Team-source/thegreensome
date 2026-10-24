// Copies every original image from https://thegreensome.com into public/images.
// Run on a machine that can reach the live site:  npm run images:download
// Then set NEXT_PUBLIC_IMAGE_SOURCE=local so the site serves its own copies.
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { allAssets, ORIGIN } from '../data/images.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const force = process.argv.includes('--force');

const assets = allAssets();
const missing = [];
let saved = 0;
let skipped = 0;

for (const { remote, local } of assets) {
  const target = join(root, local);
  if (!force) {
    try {
      await access(target);
      skipped += 1;
      continue;
    } catch {
      /* not downloaded yet */
    }
  }
  try {
    const res = await fetch(`${ORIGIN}${remote}`);
    const type = res.headers.get('content-type') || '';
    if (!res.ok || !type.startsWith('image/')) throw new Error(`${res.status} ${type}`);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, Buffer.from(await res.arrayBuffer()));
    saved += 1;
    console.log(`✓ ${local}`);
  } catch (err) {
    missing.push({ remote, local, reason: err.message });
    console.warn(`✗ ${local} — ${err.message}`);
  }
}

console.log(`\n${saved} downloaded, ${skipped} already present, ${missing.length} missing of ${assets.length}.`);
if (missing.length) {
  console.log('\nMissing assets (left as-is, nothing substituted):');
  for (const m of missing) console.log(`  ${ORIGIN}${m.remote}  →  public${m.local}  (${m.reason})`);
  process.exitCode = 1;
} else {
  console.log('\nAll assets saved. Set NEXT_PUBLIC_IMAGE_SOURCE=local in .env.local and rebuild.');
}
