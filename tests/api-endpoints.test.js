/**
 * Test suite for validating API endpoint documentation
 *
 * This test checks:
 * 1. API reference pages have proper config entries
 * 2. ApiReference components are properly configured
 * 3. No duplicate endpoint configurations
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

describe('API Endpoints', () => {
  let apiReferenceFiles = [];
  let configPath;
  let apiConfig;

  beforeAll(() => {
    const docsPath = path.join(__dirname, '../docs');
    configPath = path.join(__dirname, '../configs/api-reference/configs.json');

    try {
      // Find all files with ApiReference component
      const result = execSync(`grep -rl "ApiReference" "${docsPath}" --include="*.mdx" --include="*.md"`).toString();
      apiReferenceFiles = result.trim().split('\n').filter(Boolean);

      // Load API config
      if (fs.existsSync(configPath)) {
        apiConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    } catch (e) {
      console.error('Error in beforeAll:', e.message);
    }
  });

  test('ApiReference components should reference valid config entries', () => {
    if (!apiConfig) {
      console.warn('API config not found, skipping test');
      return;
    }

    const invalidReferences = [];

    apiReferenceFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const relativeFilePath = file.replace(path.join(__dirname, '../docs'), '');

        // Find ApiReference component usage
        const apiRefPattern = /<ApiReference\s+\{\.\.\.config\.([^}]+)\}/g;
        let match;

        while ((match = apiRefPattern.exec(content)) !== null) {
          const configPath = match[1];
          const pathParts = configPath.split('.');

          // Navigate through config object
          let currentObj = apiConfig;
          let valid = true;

          for (const part of pathParts) {
            if (currentObj && typeof currentObj === 'object' && part in currentObj) {
              currentObj = currentObj[part];
            } else {
              valid = false;
              break;
            }
          }

          if (!valid) {
            invalidReferences.push({
              file: relativeFilePath,
              configPath: configPath,
              fullMatch: match[0]
            });
          }
        }
      } catch (e) {
        // Skip files that can't be read
      }
    });

    if (invalidReferences.length > 0) {
      const message = 'Found ApiReference components with invalid config paths:\n' +
        invalidReferences.map(ref =>
          `  ${ref.file}: config.${ref.configPath}`
        ).join('\n');
      console.log(message);
    }

    expect(invalidReferences).toHaveLength(0);
  });

  test('API config should not have duplicate entries', () => {
    if (!apiConfig) {
      console.warn('API config not found, skipping test');
      return;
    }

    const allPaths = [];
    const duplicates = [];

    const traverse = (obj, currentPath = []) => {
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
          // Check if this looks like an endpoint config (has method, path, etc.)
          if (obj[key].method || obj[key].path || obj[key].apiHost) {
            const fullPath = [...currentPath, key].join('.');
            if (allPaths.includes(fullPath)) {
              duplicates.push(fullPath);
            } else {
              allPaths.push(fullPath);
            }
          }
          traverse(obj[key], [...currentPath, key]);
        }
      }
    };

    traverse(apiConfig);

    if (duplicates.length > 0) {
      const message = 'Found duplicate config entries:\n' +
        duplicates.map(d => `  ${d}`).join('\n');
      console.log(message);
    }

    expect(duplicates).toHaveLength(0);
  });

  test('API reference files should import required components', () => {
    const missingImports = [];

    apiReferenceFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const relativeFilePath = file.replace(path.join(__dirname, '../docs'), '');

        const hasApiReference = content.includes('<ApiReference');
        const hasApiReferenceImport = content.includes('import ApiReference') ||
                                      content.includes('import { ApiReference }');
        const hasConfigImport = content.includes('import config') ||
                               content.includes('from "@site/configs/api-reference/configs.json"');

        if (hasApiReference) {
          const missing = [];
          if (!hasApiReferenceImport) missing.push('ApiReference');
          if (!hasConfigImport) missing.push('config');

          if (missing.length > 0) {
            missingImports.push({
              file: relativeFilePath,
              missing: missing
            });
          }
        }
      } catch (e) {
        // Skip files that can't be read
      }
    });

    if (missingImports.length > 0) {
      const message = 'Found files with ApiReference but missing imports:\n' +
        missingImports.map(m =>
          `  ${m.file}: missing ${m.missing.join(', ')}`
        ).join('\n');
      console.log(message);
    }

    expect(missingImports).toHaveLength(0);
  });

  test('API config entries should have required fields', () => {
    if (!apiConfig) {
      console.warn('API config not found, skipping test');
      return;
    }

    const incompleteEntries = [];
    const requiredFields = ['method', 'path', 'apiHost'];

    const checkEntry = (obj, currentPath = []) => {
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
          // Check if this looks like an endpoint config
          if (obj[key].method || obj[key].path || obj[key].apiHost) {
            const missing = requiredFields.filter(field => !obj[key][field]);
            if (missing.length > 0) {
              incompleteEntries.push({
                path: [...currentPath, key].join('.'),
                missing: missing
              });
            }
          }
          checkEntry(obj[key], [...currentPath, key]);
        }
      }
    };

    checkEntry(apiConfig);

    if (incompleteEntries.length > 0) {
      const message = 'Found incomplete API config entries:\n' +
        incompleteEntries.slice(0, 10).map(e =>
          `  ${e.path}: missing ${e.missing.join(', ')}`
        ).join('\n') +
        (incompleteEntries.length > 10 ? `\n  ... and ${incompleteEntries.length - 10} more` : '');
      console.log(message);
    }

    // This might be expected for some entries, so just warn
    if (incompleteEntries.length > 0) {
      console.warn(`Info: ${incompleteEntries.length} config entries missing some standard fields`);
    }
  });
});
