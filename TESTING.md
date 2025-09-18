# Page Testing Guide

This guide explains how to test all documentation pages to prevent "page crashes" and ensure all pages load correctly.

## Quick Commands

```bash
# Test build compilation (catches most errors like "address is not defined")
npm run test:pages:build

# Test runtime page loading (requires build to exist)
npm run test:pages:runtime

# Run all tests
npm run test:pages

# Quick pre-commit test
node scripts/pre-commit-page-test.js
```

## What Gets Tested

### 1. Build-time Compilation Test (`test:pages:build`)
- **Purpose**: Catches JavaScript/TypeScript compilation errors
- **Detects**:
  - `ReferenceError: address is not defined`
  - JSX syntax errors
  - Missing imports
  - TypeScript type errors
- **Speed**: Fast (1-2 minutes)
- **When to use**: Before commits, during development

### 2. Runtime Page Loading Test (`test:pages:runtime`)
- **Purpose**: Tests that built pages load without errors
- **Detects**:
  - React component crashes
  - Runtime JavaScript errors
  - Missing resources
  - HTTP errors
- **Speed**: Slower (5-10 minutes depending on page count)
- **When to use**: Before releases, in CI/CD

## Integration Options

### 1. Pre-commit Hook (Recommended)
Add to your git hooks to automatically test before commits:

```bash
# Make the script executable
chmod +x scripts/pre-commit-page-test.js

# Set up git hook (if using git hooks)
echo "node scripts/pre-commit-page-test.js" > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

### 2. GitHub Actions
The workflow file `.github/workflows/test-pages.yml` will:
- Run on every PR and push to main
- Test both build and runtime
- Comment on PRs with results
- Block merges if pages fail to load

### 3. Manual Testing
Run tests manually during development:

```bash
# Quick test before committing
npm run test:pages:build

# Full test before release
npm run test:pages
```

## Understanding Test Results

### Build Test Output
```
✅ Build completed successfully
Total Pages: 0
Build Errors: 0
Runtime Errors: 0
Warnings: 0
```

### Runtime Test Output
```
📝 Testing 156 pages...
✅ Page /docs/introduction OK
❌ Page /docs/broken-page has errors
✅ Page /api/reference OK

Total Pages: 156
Passed: 155
Failed: 1
Success Rate: 99.36%
```

### Test Report (test-report.json)
```json
{
  "timestamp": "2025-09-18T04:23:00.399Z",
  "summary": {
    "totalPages": 156,
    "passedPages": 155,
    "failedPages": 1,
    "successRate": "99.36%"
  },
  "buildErrors": [],
  "runtimeErrors": [
    {
      "type": "javascript_error",
      "route": "/docs/broken-page",
      "message": "ReferenceError: address is not defined"
    }
  ],
  "warnings": []
}
```

## Common Issues and Fixes

### 1. "address is not defined" Error
**Cause**: Using `{address}` in markdown/HTML without proper escaping
**Fix**: Use backticks for code: `` `{address}` `` or escape: `\{address\}`

### 2. Missing Default Values
**Cause**: Parameter names incorrectly mapped to wrong default types
**Fix**: Check `src/utils/defaults.ts` and ensure type-aware defaults

### 3. Component Import Errors
**Cause**: Broken import paths or missing components
**Fix**: Verify import paths and component exports

### 4. Build Compilation Errors
**Cause**: TypeScript errors, syntax issues
**Fix**: Run `npm run typecheck` and fix reported issues

## Benefits

1. **Prevents Production Crashes**: Catches errors before they reach users
2. **Fast Feedback**: Build tests run in 1-2 minutes
3. **Comprehensive Coverage**: Tests all documentation pages
4. **CI/CD Integration**: Blocks bad deployments automatically
5. **Developer Friendly**: Clear error messages and fix suggestions

## Best Practices

1. **Run build tests before every commit**
2. **Run full tests before releases**
3. **Fix errors immediately** - don't let them accumulate
4. **Monitor test reports** for patterns
5. **Keep the test scripts updated** as the codebase evolves

## Troubleshooting

### Test Script Fails to Start
```bash
# Check if scripts directory exists
ls -la scripts/

# Check Node.js version (need Node 14+)
node --version

# Re-run with verbose output
DEBUG=* npm run test:pages:build
```

### Tests Take Too Long
- Use `test:pages:build` for quick feedback
- Only run `test:pages:runtime` when necessary
- Consider testing only changed pages during development

### False Positives
- Check `scripts/test-pages.js` configuration
- Adjust timeout values if needed
- Update error detection patterns

## Maintenance

The testing system requires minimal maintenance:

1. **Update error patterns** in `detectPageErrors()` as new error types are discovered
2. **Adjust timeouts** if build times change significantly
3. **Update CI/CD workflow** if deployment process changes
4. **Monitor test reports** for new failure patterns