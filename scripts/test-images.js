#!/usr/bin/env node

/**
 * Image Testing Script
 * Tests for:
 * - Missing image files
 * - Broken image references
 * - Large image files that should be optimized
 * - PNG images that should be converted to WebP
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const STATIC_DIR = path.join(__dirname, '..', 'static');
const MAX_IMAGE_SIZE = 500 * 1024; // 500KB

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

function findImageReferences(dir, references = []) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      findImageReferences(fullPath, references);
    } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const relPath = path.relative(DOCS_DIR, fullPath);

      // Find markdown images
      const mdImageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
      let match;
      while ((match = mdImageRegex.exec(content)) !== null) {
        references.push({
          file: relPath,
          alt: match[1],
          src: match[2],
          line: content.substring(0, match.index).split('\n').length,
        });
      }

      // Find HTML img tags
      const htmlImageRegex = /<img[^>]+src=["']([^"']+)["']/g;
      while ((match = htmlImageRegex.exec(content)) !== null) {
        references.push({
          file: relPath,
          src: match[1],
          line: content.substring(0, match.index).split('\n').length,
        });
      }
    }
  }

  return references;
}

function findAllImages(dir, images = []) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      findAllImages(fullPath, images);
    } else if (/\.(png|jpg|jpeg|gif|svg|webp)$/i.test(item)) {
      images.push({
        path: fullPath,
        size: stat.size,
        name: item,
      });
    }
  }

  return images;
}

function testImages() {
  log('\n=== Image Testing ===\n', 'info');

  const results = {
    missing: [],
    large: [],
    shouldConvert: [],
    broken: [],
    total: 0,
  };

  // Find all image references in docs
  log('Scanning image references...', 'info');
  const references = findImageReferences(DOCS_DIR);
  results.total = references.length;

  log(`Found ${references.length} image references\n`, 'info');

  // Check each reference
  for (const ref of references) {
    // Skip external URLs
    if (ref.src.startsWith('http://') || ref.src.startsWith('https://')) {
      continue;
    }

    let imagePath;
    if (ref.src.startsWith('/')) {
      // Absolute path from static directory
      imagePath = path.join(STATIC_DIR, ref.src.substring(1));
    } else {
      // Relative path from doc file
      const docDir = path.join(DOCS_DIR, path.dirname(ref.file));
      imagePath = path.resolve(docDir, ref.src);
    }

    // Check if file exists
    if (!fs.existsSync(imagePath)) {
      results.missing.push({
        ref,
        expected: imagePath,
      });
      log(`✗ Missing: ${ref.src} (referenced in ${ref.file}:${ref.line})`, 'error');
      continue;
    }

    // Check file size
    const stat = fs.statSync(imagePath);
    if (stat.size > MAX_IMAGE_SIZE) {
      results.large.push({
        ref,
        path: imagePath,
        size: stat.size,
        sizeKB: Math.round(stat.size / 1024),
      });
      log(`⚠ Large image: ${ref.src} (${Math.round(stat.size / 1024)}KB)`, 'warning');
    }

    // Check if PNG should be WebP
    if (imagePath.endsWith('.png')) {
      const webpPath = imagePath.replace('.png', '.webp');
      if (fs.existsSync(webpPath)) {
        results.shouldConvert.push({
          ref,
          png: imagePath,
          webp: webpPath,
        });
        log(`⚠ PNG has WebP alternative: ${ref.src}`, 'warning');
      }
    }
  }

  // Check for unused images
  log('\nScanning for unused images...', 'info');
  const allImages = findAllImages(STATIC_DIR);
  const usedImages = new Set(references.map(r => {
    if (r.src.startsWith('/')) {
      return path.join(STATIC_DIR, r.src.substring(1));
    }
    return null;
  }).filter(Boolean));

  const unusedImages = allImages.filter(img => !usedImages.has(img.path));

  if (unusedImages.length > 0) {
    log(`\nFound ${unusedImages.length} potentially unused images`, 'warning');
  }

  // Summary
  log('\n=== Summary ===', 'info');
  log(`Total references: ${results.total}`, 'info');
  log(`Missing images: ${results.missing.length}`, results.missing.length > 0 ? 'error' : 'success');
  log(`Large images (>${MAX_IMAGE_SIZE/1024}KB): ${results.large.length}`, results.large.length > 0 ? 'warning' : 'success');
  log(`Images that could use WebP: ${results.shouldConvert.length}`, results.shouldConvert.length > 0 ? 'warning' : 'info');
  log(`Potentially unused images: ${unusedImages.length}`, unusedImages.length > 0 ? 'warning' : 'info');

  // Save report
  const reportPath = path.join(__dirname, '..', 'image-test-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    ...results,
    unusedImages: unusedImages.slice(0, 20), // Limit to first 20
  }, null, 2));
  log(`\nReport saved to: ${reportPath}`, 'info');

  return results.missing.length === 0;
}

if (require.main === module) {
  const success = testImages();
  process.exit(success ? 0 : 1);
}

module.exports = { testImages };
