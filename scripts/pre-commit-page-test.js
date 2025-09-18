#!/usr/bin/env node

/**
 * Pre-commit hook for testing changed pages
 *
 * This script runs before each commit to test only the pages that have changed,
 * providing fast feedback to developers.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getChangedFiles() {
  try {
    // Get staged files
    const stagedFiles = execSync('git diff --cached --name-only', { encoding: 'utf8' })
      .split('\n')
      .filter(file => file.trim());

    // Filter for docs and source files that could affect page rendering
    const relevantFiles = stagedFiles.filter(file =>
      file.match(/\.(md|mdx|tsx?|jsx?)$/) &&
      (file.startsWith('docs/') || file.startsWith('src/'))
    );

    return relevantFiles;
  } catch (error) {
    console.error('Error getting changed files:', error.message);
    return [];
  }
}

function hasRelevantChanges(changedFiles) {
  // Check if any changes could affect page rendering
  return changedFiles.some(file =>
    file.startsWith('docs/') ||                    // Documentation changes
    file.includes('components/') ||                // Component changes
    file.includes('defaults.ts') ||                // Default value changes
    file.includes('generate.ts')                   // Config generation changes
  );
}

async function runQuickPageTest() {
  console.log('🔍 Running quick page test for changed files...');

  try {
    // Run a quick build test to catch compilation errors
    execSync('npm run build 2>&1', {
      stdio: 'pipe',
      timeout: 120000 // 2 minutes timeout
    });

    console.log('✅ Quick page test passed');
    return true;
  } catch (error) {
    console.error('❌ Quick page test failed:');
    console.error(error.stdout?.toString() || error.message);

    // Provide helpful guidance
    console.log('\n💡 To fix this:');
    console.log('1. Check the error messages above');
    console.log('2. Fix any compilation errors');
    console.log('3. Test your changes locally with: npm start');
    console.log('4. Run full page tests with: npm run test:pages');
    console.log('5. Commit again when fixed');

    return false;
  }
}

async function main() {
  const changedFiles = getChangedFiles();

  if (changedFiles.length === 0) {
    console.log('ℹ️  No relevant files changed, skipping page test');
    return;
  }

  console.log(`📝 Found ${changedFiles.length} changed files that could affect pages`);

  if (!hasRelevantChanges(changedFiles)) {
    console.log('ℹ️  Changes unlikely to affect page rendering, skipping test');
    return;
  }

  const testPassed = await runQuickPageTest();

  if (!testPassed) {
    console.log('\n🚫 Commit blocked due to page test failures');
    process.exit(1);
  }

  console.log('✅ Pre-commit page test passed, proceeding with commit');
}

if (require.main === module) {
  main().catch(error => {
    console.error('Pre-commit hook error:', error);
    process.exit(1);
  });
}