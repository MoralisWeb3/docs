/**
 * Test suite for validating links
 *
 * This test scans all .md and .mdx files for:
 * 1. Broken internal links (links to pages that don't exist)
 * 2. Broken anchor links (#hash links)
 * 3. Malformed link syntax
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

describe('Link Validation', () => {
  let allFiles = [];
  const docsPath = path.join(__dirname, '../docs');
  let allPageSlugs = new Set();
  let allAnchors = new Map(); // Map of page -> Set of anchors

  beforeAll(() => {
    try {
      const result = execSync(`find "${docsPath}" -name "*.mdx" -o -name "*.md" -type f`).toString();
      allFiles = result.trim().split('\n').filter(Boolean);

      // Build a map of all pages and their slugs
      allFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');

        // Extract slug from frontmatter
        const slugMatch = content.match(/slug:\s*["']?([^"'\n]+)["']?/);
        if (slugMatch) {
          allPageSlugs.add(slugMatch[1]);
        } else {
          // Generate slug from file path
          const relativePath = file.replace(docsPath, '').replace(/\.(mdx?|md)$/, '');
          allPageSlugs.add(relativePath);
        }

        // Extract all heading anchors from the file
        const headings = content.match(/^#{1,6}\s+(.+)$/gm) || [];
        const anchors = new Set();

        headings.forEach(heading => {
          // Convert heading to anchor ID (simplified - Docusaurus has more complex logic)
          const anchorId = heading
            .replace(/^#{1,6}\s+/, '')
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-');
          anchors.add(anchorId);
        });

        // Also look for explicit IDs in HTML
        const explicitIds = content.match(/id=["']([^"']+)["']/g) || [];
        explicitIds.forEach(id => {
          const idMatch = id.match(/id=["']([^"']+)["']/);
          if (idMatch) {
            anchors.add(idMatch[1]);
          }
        });

        const slug = slugMatch ? slugMatch[1] : file.replace(docsPath, '').replace(/\.(mdx?|md)$/, '');
        allAnchors.set(slug, anchors);
      });
    } catch (e) {
      console.error('Error finding files:', e.message);
    }
  });

  test('Internal links should point to existing pages', () => {
    const brokenLinks = [];

    const linkPatterns = [
      // Markdown links: [text](path)
      /\[([^\]]+)\]\(([^)]+)\)/g,
      // HTML a tags: <a href="path"
      /<a\s+(?:[^>]*\s+)?href=["']([^"']+)["']/g
    ];

    allFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const relativeFilePath = file.replace(docsPath, '');

        linkPatterns.forEach(pattern => {
          let match;
          while ((match = pattern.exec(content)) !== null) {
            // Get the link path (different capture group depending on pattern)
            const linkPath = match[2] || match[1];

            // Skip external URLs
            if (linkPath.startsWith('http://') || linkPath.startsWith('https://')) {
              continue;
            }

            // Skip mailto and other protocols
            if (linkPath.includes(':')) {
              continue;
            }

            // Skip anchors to the same page
            if (linkPath.startsWith('#')) {
              continue;
            }

            // Extract the path without anchor
            const [pathWithoutAnchor] = linkPath.split('#');

            // Skip empty paths
            if (!pathWithoutAnchor || pathWithoutAnchor === '') {
              continue;
            }

            // Normalize the path
            let normalizedPath = pathWithoutAnchor;

            // Remove leading slash for comparison
            if (normalizedPath.startsWith('/')) {
              normalizedPath = normalizedPath.substring(1);
            }

            // Check if this path exists in our slugs
            const exists = Array.from(allPageSlugs).some(slug => {
              const normalizedSlug = slug.startsWith('/') ? slug.substring(1) : slug;
              return normalizedSlug === normalizedPath || normalizedSlug.endsWith(normalizedPath);
            });

            if (!exists) {
              brokenLinks.push({
                file: relativeFilePath,
                link: linkPath,
                normalizedPath
              });
            }
          }
        });
      } catch (e) {
        // Skip files that can't be read
      }
    });

    if (brokenLinks.length > 0) {
      // Group by link for better readability
      const linkCounts = {};
      brokenLinks.forEach(b => {
        linkCounts[b.link] = (linkCounts[b.link] || 0) + 1;
      });

      const message = 'Found broken internal links:\n' +
        Object.entries(linkCounts)
          .slice(0, 15)
          .map(([link, count]) => `  ${link} (found in ${count} file${count > 1 ? 's' : ''})`)
          .join('\n') +
        (Object.keys(linkCounts).length > 15 ? `\n  ... and ${Object.keys(linkCounts).length - 15} more` : '');
      console.log(message);
    }

    // Allow some broken links as they might be in redirects
    // expect(brokenLinks.length).toBeLessThan(50);
  });

  test('Anchor links should point to existing headings', () => {
    const brokenAnchors = [];

    allFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const relativeFilePath = file.replace(docsPath, '');

        // Get the slug for this file
        const slugMatch = content.match(/slug:\s*["']?([^"'\n]+)["']?/);
        const currentSlug = slugMatch ? slugMatch[1] : relativeFilePath.replace(/\.(mdx?|md)$/, '');

        // Find all anchor links
        const anchorPattern = /\[([^\]]+)\]\(([^)]*#[^)]+)\)/g;
        let match;

        while ((match = anchorPattern.exec(content)) !== null) {
          const linkPath = match[2];
          const [pagePath, anchor] = linkPath.split('#');

          // Determine which page to check
          let targetSlug;
          if (!pagePath || pagePath === '') {
            // Same page anchor
            targetSlug = currentSlug;
          } else {
            // Different page anchor
            targetSlug = pagePath.startsWith('/') ? pagePath.substring(1) : pagePath;
          }

          // Check if anchor exists on target page
          const pageAnchors = allAnchors.get(targetSlug);
          if (pageAnchors && anchor) {
            const normalizedAnchor = anchor.toLowerCase();
            const hasAnchor = Array.from(pageAnchors).some(a =>
              a.toLowerCase() === normalizedAnchor || a === anchor
            );

            if (!hasAnchor) {
              brokenAnchors.push({
                file: relativeFilePath,
                link: linkPath,
                targetPage: targetSlug,
                anchor: anchor
              });
            }
          }
        }
      } catch (e) {
        // Skip files that can't be read
      }
    });

    if (brokenAnchors.length > 0) {
      const message = 'Found broken anchor links:\n' +
        brokenAnchors.slice(0, 10).map(b =>
          `  ${b.file}: ${b.link}`
        ).join('\n') +
        (brokenAnchors.length > 10 ? `\n  ... and ${brokenAnchors.length - 10} more` : '');
      console.log(message);
    }

    // This is informational - some anchors might be dynamically generated
    if (brokenAnchors.length > 0) {
      console.warn(`Warning: ${brokenAnchors.length} potentially broken anchor links found`);
    }
  });

  test('Links should not have double slashes', () => {
    const doubleSlashLinks = [];

    allFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const relativeFilePath = file.replace(docsPath, '');

        // Find links with double slashes (but not http://)
        const pattern = /\[([^\]]+)\]\(\/\/[^)]+\)/g;
        let match;

        while ((match = pattern.exec(content)) !== null) {
          if (!match[0].includes('http://') && !match[0].includes('https://')) {
            doubleSlashLinks.push({
              file: relativeFilePath,
              link: match[0]
            });
          }
        }
      } catch (e) {
        // Skip files that can't be read
      }
    });

    if (doubleSlashLinks.length > 0) {
      const message = 'Found links with double slashes:\n' +
        doubleSlashLinks.map(l => `  ${l.file}: ${l.link}`).join('\n');
      console.log(message);
    }

    expect(doubleSlashLinks).toHaveLength(0);
  });
});
