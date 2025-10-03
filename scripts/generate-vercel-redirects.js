/**
 * Generate Vercel redirects from redirects.ts
 *
 * This script converts the redirects from api/data/redirects.ts
 * into Vercel's redirect format and updates vercel.json
 */

const fs = require('fs');
const path = require('path');

// Read the redirects file
const redirectsPath = path.join(__dirname, '../api/data/redirects.ts');
const vercelConfigPath = path.join(__dirname, '../vercel.json');

console.log('Reading redirects from:', redirectsPath);

const redirectsContent = fs.readFileSync(redirectsPath, 'utf8');

// Extract redirect objects using regex
const redirectMatches = redirectsContent.matchAll(/\{\s*source:\s*["']([^"']+)["'],\s*destination:\s*["']([^"']+)["'],\s*permanent:\s*(true|false)\s*\}/g);

const redirects = [];
for (const match of redirectMatches) {
  const [, source, destination, permanent] = match;
  redirects.push({
    source,
    destination,
    permanent: permanent === 'true'
  });
}

console.log(`Found ${redirects.length} redirects`);

// Read existing vercel.json
let vercelConfig = {};
if (fs.existsSync(vercelConfigPath)) {
  vercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf8'));
}

// Convert to Vercel redirect format
const vercelRedirects = redirects.map(r => ({
  source: r.source,
  destination: r.destination,
  permanent: r.permanent
}));

// Update vercel.json with redirects
vercelConfig.redirects = vercelRedirects;

// Write back to vercel.json
fs.writeFileSync(vercelConfigPath, JSON.stringify(vercelConfig, null, 2));

console.log(`Updated ${vercelConfigPath} with ${vercelRedirects.length} redirects`);
console.log('\nSample redirects:');
console.log(vercelRedirects.slice(0, 5).map(r => `  ${r.source} -> ${r.destination}`).join('\n'));
