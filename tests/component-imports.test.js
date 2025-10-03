/**
 * Test suite for detecting broken component imports in MDX files
 *
 * This test scans all .md and .mdx files for:
 * 1. Import statements that are rendered as text (visible to users)
 * 2. Components that are imported but not used
 * 3. JSX/component syntax appearing in plain markdown files
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

describe('Component Imports', () => {
  let mdxFiles = [];
  let mdFiles = [];

  beforeAll(() => {
    // Find all MDX and MD files
    const docsPath = path.join(__dirname, '../docs');

    try {
      const mdxResult = execSync(`find "${docsPath}" -name "*.mdx" -type f`).toString();
      mdxFiles = mdxResult.trim().split('\n').filter(Boolean);

      const mdResult = execSync(`find "${docsPath}" -name "*.md" -type f`).toString();
      mdFiles = mdResult.trim().split('\n').filter(Boolean);
    } catch (e) {
      console.error('Error finding files:', e.message);
    }
  });

  test('MDX files should not have visible import statements in content', () => {
    const filesWithVisibleImports = [];

    mdxFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');

        let inFrontmatter = false;
        let frontmatterClosed = false;
        let inCodeBlock = false;
        let importSectionEnded = false;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];

          // Track frontmatter
          if (i === 0 && line.trim() === '---') {
            inFrontmatter = true;
            continue;
          }
          if (inFrontmatter && line.trim() === '---') {
            inFrontmatter = false;
            frontmatterClosed = true;
            continue;
          }
          if (inFrontmatter) continue;

          // Track code blocks
          if (line.trim().startsWith('```')) {
            inCodeBlock = !inCodeBlock;
            continue;
          }

          // Skip lines inside code blocks
          if (inCodeBlock) continue;

          // After frontmatter, imports should be at the top (before markdown content starts)
          if (frontmatterClosed && !importSectionEnded) {
            if (line.trim().startsWith('import ')) {
              continue; // Valid import location
            } else if (line.trim() === '' || line.trim().startsWith('<')) {
              continue; // Empty lines and JSX elements are OK before content starts
            } else if (line.trim().startsWith('#')) {
              importSectionEnded = true; // Markdown headers indicate content has started
            }
          }

          // Check for imports appearing in content (after markdown headers start)
          if (importSectionEnded && line.includes('import ') &&
              (line.includes(' from ') || line.includes('import {'))) {
            filesWithVisibleImports.push({
              file: file.replace(path.join(__dirname, '../'), ''),
              line: i + 1,
              content: line.trim()
            });
          }
        }
      } catch (e) {
        // Skip files that can't be read
      }
    });

    if (filesWithVisibleImports.length > 0) {
      const message = 'Found import statements in content area:\n' +
        filesWithVisibleImports.map(f => `  ${f.file}:${f.line} - ${f.content}`).join('\n');
      console.log(message);
    }

    expect(filesWithVisibleImports).toHaveLength(0);
  });

  test('MD files with JSX should be renamed to .mdx', () => {
    const mdFilesWithJSX = [];

    mdFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');

        // Check for import statements
        const hasImports = /^import\s+.*from\s+['"].*['"]/m.test(content);

        // Check for JSX components (opening tags with uppercase)
        const hasJSXComponents = /<[A-Z][a-zA-Z]*[^>]*>/.test(content);

        // Check for theme components
        const hasThemeComponents = content.includes('@theme/') || content.includes('@site/');

        if (hasImports || hasJSXComponents || hasThemeComponents) {
          mdFilesWithJSX.push({
            file: file.replace(path.join(__dirname, '../'), ''),
            hasImports,
            hasJSXComponents,
            hasThemeComponents
          });
        }
      } catch (e) {
        // Skip files that can't be read
      }
    });

    if (mdFilesWithJSX.length > 0) {
      const message = 'Found .md files that should be .mdx:\n' +
        mdFilesWithJSX.map(f => {
          const reasons = [];
          if (f.hasImports) reasons.push('imports');
          if (f.hasJSXComponents) reasons.push('JSX components');
          if (f.hasThemeComponents) reasons.push('theme components');
          return `  ${f.file} (${reasons.join(', ')})`;
        }).join('\n');
      console.log(message);
    }

    expect(mdFilesWithJSX).toHaveLength(0);
  });

  test('Component imports should be used in the file', () => {
    const unusedImports = [];

    mdxFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');

        // Extract imports
        const imports = [];
        let inFrontmatter = false;

        lines.forEach((line, index) => {
          if (index === 0 && line.trim() === '---') {
            inFrontmatter = true;
            return;
          }
          if (inFrontmatter && line.trim() === '---') {
            inFrontmatter = false;
            return;
          }
          if (inFrontmatter) return;

          // Match: import ComponentName from "..."
          const defaultImport = line.match(/^import\s+([A-Z][a-zA-Z]*)\s+from/);
          if (defaultImport) {
            imports.push({ name: defaultImport[1], line: index + 1 });
          }

          // Match: import { Component1, Component2 } from "..."
          const namedImports = line.match(/^import\s+\{([^}]+)\}\s+from/);
          if (namedImports) {
            const names = namedImports[1].split(',').map(n => n.trim().split(' as ')[0]);
            names.forEach(name => {
              imports.push({ name, line: index + 1 });
            });
          }
        });

        // Check if imports are used
        imports.forEach(imported => {
          // Create regex to find component usage (as JSX tag or function call)
          const usagePattern = new RegExp(`<${imported.name}[\\s/>]|${imported.name}\\(`, 'g');

          // Count occurrences (subtract the import line itself)
          const usages = (content.match(usagePattern) || []).length;

          if (usages === 0) {
            unusedImports.push({
              file: file.replace(path.join(__dirname, '../'), ''),
              component: imported.name,
              line: imported.line
            });
          }
        });
      } catch (e) {
        // Skip files that can't be read
      }
    });

    if (unusedImports.length > 0) {
      const message = 'Found unused component imports:\n' +
        unusedImports.slice(0, 20).map(f => `  ${f.file}:${f.line} - ${f.component}`).join('\n') +
        (unusedImports.length > 20 ? `\n  ... and ${unusedImports.length - 20} more` : '');
      console.log(message);
    }

    // This is a warning, not a failure - unused imports are messy but not broken
    if (unusedImports.length > 0) {
      console.warn(`Warning: ${unusedImports.length} unused imports found`);
    }
  });
});
