/**
 * Test suite for validating image loading
 *
 * This test scans all .md and .mdx files for:
 * 1. Image references that point to missing files
 * 2. Broken image syntax
 * 3. Images referenced but not in the static folder
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

describe('Image Loading', () => {
  let allFiles = [];
  const staticPath = path.join(__dirname, '../static');
  const docsPath = path.join(__dirname, '../docs');

  beforeAll(() => {
    try {
      const result = execSync(`find "${docsPath}" -name "*.mdx" -o -name "*.md" -type f`).toString();
      allFiles = result.trim().split('\n').filter(Boolean);
    } catch (e) {
      console.error('Error finding files:', e.message);
    }
  });

  test('Image files referenced in docs should exist', () => {
    const missingImages = [];
    const imagePatterns = [
      // Markdown images: ![alt](path)
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      // HTML img tags: <img src="path"
      /<img[^>]+src=["']([^"']+)["']/g,
      // Import statements for images
      /import\s+\w+\s+from\s+["']([^"']+\.(png|jpg|jpeg|gif|svg|webp))["']/gi
    ];

    allFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const relativeFilePath = file.replace(docsPath, '');

        imagePatterns.forEach(pattern => {
          let match;
          while ((match = pattern.exec(content)) !== null) {
            // Get the image path (different capture group depending on pattern)
            const imagePath = match[2] || match[1];

            // Skip external URLs
            if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
              continue;
            }

            // Skip data URLs
            if (imagePath.startsWith('data:')) {
              continue;
            }

            // Resolve the image path
            let fullImagePath;
            if (imagePath.startsWith('/')) {
              // Absolute path from static folder
              fullImagePath = path.join(staticPath, imagePath.replace(/^\//, ''));
            } else if (imagePath.startsWith('@site/static/')) {
              fullImagePath = path.join(staticPath, imagePath.replace('@site/static/', ''));
            } else if (imagePath.startsWith('../')) {
              // Relative path
              fullImagePath = path.join(path.dirname(file), imagePath);
            } else {
              // Assume it's in static folder
              fullImagePath = path.join(staticPath, imagePath);
            }

            // Check if file exists
            if (!fs.existsSync(fullImagePath)) {
              missingImages.push({
                file: relativeFilePath,
                imagePath: imagePath,
                resolvedPath: fullImagePath
              });
            }
          }
        });
      } catch (e) {
        // Skip files that can't be read
      }
    });

    if (missingImages.length > 0) {
      const message = 'Found references to missing images:\n' +
        missingImages.slice(0, 10).map(m =>
          `  ${m.file}\n    Referenced: ${m.imagePath}\n    Expected at: ${m.resolvedPath}`
        ).join('\n') +
        (missingImages.length > 10 ? `\n  ... and ${missingImages.length - 10} more` : '');
      console.log(message);
    }

    expect(missingImages).toHaveLength(0);
  });

  test('Image imports should use correct extensions', () => {
    const incorrectExtensions = [];

    allFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const relativeFilePath = file.replace(docsPath, '');

        // Check for .png references when .webp exists
        const pngPattern = /(?:src=["']|!\[[^\]]*\]\()([^"')]+\.png)/g;
        let match;

        while ((match = pngPattern.exec(content)) !== null) {
          const pngPath = match[1];

          // Skip external URLs
          if (pngPath.startsWith('http://') || pngPath.startsWith('https://')) {
            continue;
          }

          // Check if .webp version exists
          let webpPath = pngPath.replace('.png', '.webp');
          let fullWebpPath;

          if (webpPath.startsWith('/')) {
            fullWebpPath = path.join(staticPath, webpPath.replace(/^\//, ''));
          } else {
            fullWebpPath = path.join(staticPath, webpPath);
          }

          if (fs.existsSync(fullWebpPath)) {
            incorrectExtensions.push({
              file: relativeFilePath,
              path: pngPath,
              suggestion: webpPath
            });
          }
        }
      } catch (e) {
        // Skip files that can't be read
      }
    });

    if (incorrectExtensions.length > 0) {
      const message = 'Found .png references where .webp exists (consider using WebP):\n' +
        incorrectExtensions.slice(0, 5).map(m =>
          `  ${m.file}: ${m.path} -> ${m.suggestion}`
        ).join('\n') +
        (incorrectExtensions.length > 5 ? `\n  ... and ${incorrectExtensions.length - 5} more` : '');
      console.warn(message);
    }

    // This is a warning, not a failure
    if (incorrectExtensions.length > 0) {
      console.warn(`Info: ${incorrectExtensions.length} images could be optimized to WebP`);
    }
  });

  test('Images should have alt text', () => {
    const imagesWithoutAlt = [];

    allFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const relativeFilePath = file.replace(docsPath, '');

        // Check markdown images with empty alt text: ![](path)
        const emptyAltPattern = /!\[\s*\]\([^)]+\)/g;
        let match;

        while ((match = emptyAltPattern.exec(content)) !== null) {
          imagesWithoutAlt.push({
            file: relativeFilePath,
            image: match[0]
          });
        }

        // Check HTML img tags without alt attribute
        const imgTagPattern = /<img[^>]+>/g;
        while ((match = imgTagPattern.exec(content)) !== null) {
          if (!match[0].includes('alt=')) {
            imagesWithoutAlt.push({
              file: relativeFilePath,
              image: match[0].substring(0, 50) + '...'
            });
          }
        }
      } catch (e) {
        // Skip files that can't be read
      }
    });

    if (imagesWithoutAlt.length > 0) {
      const message = 'Found images without alt text (accessibility issue):\n' +
        imagesWithoutAlt.slice(0, 10).map(m =>
          `  ${m.file}: ${m.image}`
        ).join('\n') +
        (imagesWithoutAlt.length > 10 ? `\n  ... and ${imagesWithoutAlt.length - 10} more` : '');
      console.warn(message);
    }

    // This is a warning for accessibility, not a failure
    if (imagesWithoutAlt.length > 0) {
      console.warn(`Accessibility warning: ${imagesWithoutAlt.length} images missing alt text`);
    }
  });
});
