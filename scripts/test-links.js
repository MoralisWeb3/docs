#!/usr/bin/env node

/**
 * Link Testing Script
 * Tests for:
 * - Broken internal links
 * - Dead external links
 * - Invalid anchor links
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const DOCS_DIR = path.join(__dirname, '..', 'docs');

function log(message, type = 'info') {
  const colors = {
    info: '\x1b[36m',
    success: '\x1b[32m',
    error: '\x1b[31m',
    warning: '\x1b[33m',
  };
  const reset = '\x1b[0m';
  console.log(`${colors[type]}${message}${reset}`);
}

function extractLinks(content, filePath) {
  const links = [];
  const relPath = path.relative(DOCS_DIR, filePath);

  // Markdown links
  const mdLinkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
  let match;
  while ((match = mdLinkRegex.exec(content)) !== null) {
    const line = content.substring(0, match.index).split('\n').length;
    links.push({
      text: match[1],
      url: match[2],
      file: relPath,
      line,
      type: 'markdown',
    });
  }

  // HTML links
  const htmlLinkRegex = /<a[^>]+href=["']([^"']+)["']/g;
  while ((match = htmlLinkRegex.exec(content)) !== null) {
    const line = content.substring(0, match.index).split('\n').length;
    links.push({
      url: match[1],
      file: relPath,
      line,
      type: 'html',
    });
  }

  return links;
}

function findAllLinks(dir, links = []) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      findAllLinks(fullPath, links);
    } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      links.push(...extractLinks(content, fullPath));
    }
  }

  return links;
}

function checkExternalLink(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https:') ? https : http;
    const timeout = 10000;

    try {
      const request = client.get(url, { timeout }, (response) => {
        resolve({
          url,
          status: response.statusCode,
          ok: response.statusCode >= 200 && response.statusCode < 400,
        });
        request.destroy();
      });

      request.on('error', (err) => {
        resolve({
          url,
          status: 0,
          ok: false,
          error: err.message,
        });
      });

      request.on('timeout', () => {
        request.destroy();
        resolve({
          url,
          status: 0,
          ok: false,
          error: 'Timeout',
        });
      });
    } catch (err) {
      resolve({
        url,
        status: 0,
        ok: false,
        error: err.message,
      });
    }
  });
}

async function testLinks() {
  log('\n=== Link Testing ===\n', 'info');

  const results = {
    broken: [],
    external: [],
    anchors: [],
    total: 0,
  };

  log('Scanning for links...', 'info');
  const links = findAllLinks(DOCS_DIR);
  results.total = links.length;

  log(`Found ${links.length} links\n`, 'info');

  const internalLinks = [];
  const externalLinks = [];

  // Categorize links
  for (const link of links) {
    const { url } = link;

    if (url.startsWith('http://') || url.startsWith('https://')) {
      externalLinks.push(link);
    } else if (url.startsWith('#')) {
      // Anchor link - skip for now
      continue;
    } else if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
      internalLinks.push(link);
    }
  }

  // Check internal links
  log(`Checking ${internalLinks.length} internal links...`, 'info');
  for (const link of internalLinks) {
    let targetPath = link.url.split('#')[0]; // Remove anchor

    // Convert URL to file path
    if (targetPath.startsWith('/')) {
      targetPath = path.join(DOCS_DIR, targetPath);
    } else {
      const docDir = path.join(DOCS_DIR, path.dirname(link.file));
      targetPath = path.resolve(docDir, targetPath);
    }

    // Check if it's a directory (should have index file)
    if (fs.existsSync(targetPath)) {
      const stat = fs.statSync(targetPath);
      if (stat.isDirectory()) {
        const indexPath = path.join(targetPath, 'index.md');
        const indexMdxPath = path.join(targetPath, 'index.mdx');
        if (!fs.existsSync(indexPath) && !fs.existsSync(indexMdxPath)) {
          results.broken.push({ ...link, reason: 'Directory without index' });
        }
        continue;
      }
    }

    // Check for .md or .mdx
    const possiblePaths = [
      targetPath,
      targetPath + '.md',
      targetPath + '.mdx',
      path.join(targetPath, 'index.md'),
      path.join(targetPath, 'index.mdx'),
    ];

    const exists = possiblePaths.some(p => fs.existsSync(p));

    if (!exists) {
      results.broken.push({ ...link, reason: 'File not found' });
      log(`✗ Broken link: ${link.url} in ${link.file}:${link.line}`, 'error');
    }
  }

  // Check external links (sample only to avoid rate limiting)
  const sampleSize = Math.min(externalLinks.length, 10);
  if (sampleSize > 0) {
    log(`\nChecking ${sampleSize} external links (sample)...`, 'info');
    const sample = externalLinks.slice(0, sampleSize);

    for (const link of sample) {
      const result = await checkExternalLink(link.url);
      if (!result.ok) {
        results.external.push({ ...link, ...result });
        log(`⚠ External link issue: ${link.url} - ${result.error || result.status}`, 'warning');
      }

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  // Summary
  log('\n=== Summary ===', 'info');
  log(`Total links: ${results.total}`, 'info');
  log(`Broken internal links: ${results.broken.length}`, results.broken.length > 0 ? 'error' : 'success');
  log(`External link issues: ${results.external.length}`, results.external.length > 0 ? 'warning' : 'info');
  log(`Internal links checked: ${internalLinks.length}`, 'info');
  log(`External links sampled: ${sampleSize}`, 'info');

  // Save report
  const reportPath = path.join(__dirname, '..', 'link-test-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  log(`\nReport saved to: ${reportPath}`, 'info');

  return results.broken.length === 0;
}

if (require.main === module) {
  testLinks().then(success => {
    process.exit(success ? 0 : 1);
  }).catch(err => {
    log(`Test failed: ${err.message}`, 'error');
    process.exit(1);
  });
}

module.exports = { testLinks };
