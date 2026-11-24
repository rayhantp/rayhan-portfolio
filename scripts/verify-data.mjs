import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve(process.cwd(), 'src', 'data');
const requiredFiles = ['profile.ts', 'projects.ts', 'research.ts', 'media.ts'];
const requiredTokens = [
  'Rayhan Tshani Putra',
  'SMA IT Daarul Rahman 3',
  'PT Green Nitro Global',
  'Hermes Agent',
  '9 router',
  '88',
  'T568B',
  'Chromium',
  'Pemanfaatan Jaringan Wi-Fi Terdistribusi untuk Pengelolaan Data Menggunakan NAS di Pondok Pesantren Daarul Rahman 3',
  'AINAL MAFAR',
  'vMix 28',
  'Midas MR18',
  'rayhantshaniputraaa@gmail.com',
  '085710934907',
  'github.com/rayhantp',
];

const forbiddenPatterns = [
  { name: 'HOSTINGER_TEMP_DOMAIN', regex: /[a-z0-9-]+\.hostingersite\.com/gi },
  { name: 'PRIVATE_KEY', regex: /-----BEGIN\s+[A-Z0-9\s]*PRIVATE KEY-----/g },
  { name: 'LOREM_IPSUM', regex: /lorem ipsum/gi },
];

let combined = '';
const errors = [];

for (const file of requiredFiles) {
  const full = path.join(dataDir, file);
  if (!fs.existsSync(full)) {
    errors.push(`Missing required data file: src/data/${file}`);
    continue;
  }
  combined += '\n' + fs.readFileSync(full, 'utf8');
}

for (const token of requiredTokens) {
  if (!combined.toLowerCase().includes(token.toLowerCase())) {
    errors.push(`Missing required real data token: "${token}"`);
  }
}

for (const rule of forbiddenPatterns) {
  if (rule.regex.test(combined)) {
    errors.push(`Forbidden pattern matched (${rule.name}) inside src/data/`);
  }
}

if (errors.length > 0) {
  console.error('DATA VERIFICATION FAILED:');
  for (const e of errors) console.error(' -', e);
  process.exit(1);
}

console.log(`PASS: All ${requiredTokens.length} required facts verified and 0 forbidden patterns found.`);
