// Scans public/certifications/ and writes src/data/certifications.json.
// Add a file to a folder, run `npm run update-certs`, and it appears on the site.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CERT_DIR = path.join(__dirname, '../public/certifications');
const OUT = path.join(__dirname, '../src/data/certifications.json');

const info = (file, dir) => {
  const ext = path.extname(file).toLowerCase();
  const isPdf = ext === '.pdf';
  const isImg = ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  if (!isPdf && !isImg) return null;
  const rel = path.relative(path.join(__dirname, '../public'), path.join(dir, file));
  return {
    name: path.basename(file, ext).replace(/^\d+\)\s*/, ''),
    path: '/' + rel.split(path.sep).join('/'),
    type: isPdf ? 'pdf' : 'image',
  };
};

const out = {};
for (const entry of fs.readdirSync(CERT_DIR, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const dir = path.join(CERT_DIR, entry.name);
  const files = fs.readdirSync(dir).sort()
    .map((f) => info(f, dir)).filter(Boolean);
  if (files.length) out[entry.name] = files;
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
console.log(`Wrote ${Object.keys(out).length} groups to certifications.json`);
