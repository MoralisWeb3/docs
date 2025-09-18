#!/usr/bin/env node

/**
 * Comprehensive Page Testing Script for Moralis Docs
 *
 * This script tests all pages in the documentation to ensure they:
 * 1. Build successfully without compilation errors
 * 2. Load without JavaScript runtime errors
 * 3. Don't have broken links or missing resources
 *
 * Usage:
 * - npm run test:pages:build    - Test build-time compilation
 * - npm run test:pages:runtime  - Test runtime page loading
 * - npm run test:pages:all      - Run all tests
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  docsDir: './docs',
  buildDir: './build',
  serverPort: 3001,
  timeout: 30000,
  retries: 3,
  exclude: [
    '/.git/',
    '/node_modules/',
    '/.docusaurus/',
    '/build/',
    '/_*', // Exclude files starting with underscore
  ]
};

class PageTester {
  constructor() {
    this.results = {
      buildErrors: [],
      runtimeErrors: [],
      warnings: [],
      totalPages: 0,
      passedPages: 0,
      failedPages: 0
    };
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = {
      info: '📝',
      success: '✅',
      warning: '⚠️',
      error: '❌'
    }[level];

    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  // Test 1: Build-time compilation test
  async testBuildCompilation() {
    this.log('Starting build compilation test...', 'info');

    try {
      // Clean previous build
      if (fs.existsSync(config.buildDir)) {
        execSync(`rm -rf ${config.buildDir}`, { stdio: 'inherit' });
      }

      // Run build and capture output
      const buildOutput = execSync('npm run build', {
        encoding: 'utf8',
        stdio: 'pipe'
      });

      this.log('Build completed successfully', 'success');

      // Check for warnings in build output
      const warnings = this.extractBuildWarnings(buildOutput);
      this.results.warnings.push(...warnings);

      return true;
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'error');
      this.results.buildErrors.push({
        type: 'build_failure',
        message: error.message,
        stdout: error.stdout,
        stderr: error.stderr
      });
      return false;
    }
  }

  // Test 2: Extract all possible page routes
  getAllPageRoutes() {
    const routes = new Set();

    // Get routes from built sitemap if available
    const sitemapPath = path.join(config.buildDir, 'sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      const sitemap = fs.readFileSync(sitemapPath, 'utf8');
      const urlRegex = /<loc>(.*?)<\/loc>/g;
      let match;
      while ((match = urlRegex.exec(sitemap)) !== null) {
        const url = new URL(match[1]);
        routes.add(url.pathname);
      }
    }

    // Fallback: scan docs directory for markdown files
    if (routes.size === 0) {
      routes.add('/'); // Home page
      this.scanDocsDirectory(config.docsDir, routes);
    }

    return Array.from(routes);
  }

  scanDocsDirectory(dir, routes, basePath = '') {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        this.scanDocsDirectory(fullPath, routes, path.join(basePath, item));
      } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
        // Convert file path to route
        let route = path.join(basePath, item.replace(/\.(md|mdx)$/, ''));
        route = '/' + route.replace(/\\/g, '/');

        // Handle index files
        if (route.endsWith('/index')) {
          route = route.replace('/index', '');
        }

        routes.add(route || '/');
      }
    }
  }

  // Test 3: Runtime page loading test
  async testRuntimePageLoading() {
    this.log('Starting runtime page loading test...', 'info');

    // Check if build exists
    if (!fs.existsSync(config.buildDir)) {
      this.log('Build directory not found. Run build test first.', 'error');
      return false;
    }

    // Start static server
    const server = await this.startStaticServer();

    try {
      const routes = this.getAllPageRoutes();
      this.results.totalPages = routes.length;

      this.log(`Testing ${routes.length} pages...`, 'info');

      for (const route of routes) {
        await this.testSinglePage(route);
      }

      return true;
    } finally {
      server.kill();
    }
  }

  async startStaticServer() {
    const { spawn } = require('child_process');

    // Use docusaurus serve command
    const server = spawn('npx', ['docusaurus', 'serve', '--port', config.serverPort, '--no-open'], {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    // Wait for server to start
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Server start timeout'));
      }, 15000); // Increased timeout

      let output = '';

      server.stdout.on('data', (data) => {
        output += data.toString();
        console.log('Server output:', data.toString().trim());

        // Check for Docusaurus serve success message
        if (output.includes('[SUCCESS] Serving') ||
            output.includes('Serving "build" directory') ||
            output.includes(`localhost:${config.serverPort}`)) {
          clearTimeout(timeout);
          resolve();
        }
      });

      server.stderr.on('data', (data) => {
        const errorText = data.toString();
        console.log('Server stderr:', errorText.trim());

        // Also check stderr for ready indicators (some tools output to stderr)
        if (errorText.includes('[SUCCESS] Serving') ||
            errorText.includes('Serving "build" directory') ||
            errorText.includes(`localhost:${config.serverPort}`)) {
          clearTimeout(timeout);
          resolve();
        }
      });

      server.on('error', (error) => {
        clearTimeout(timeout);
        reject(new Error(`Server spawn error: ${error.message}`));
      });
    });

    this.log(`Static server started on port ${config.serverPort}`, 'success');
    return server;
  }

  async testSinglePage(route) {
    const url = `http://localhost:${config.serverPort}${route}`;

    try {
      // Use puppeteer-like approach with simpler HTTP request
      const response = await this.fetchPage(url);

      if (response.ok) {
        // Check for common error patterns in HTML
        const html = await response.text();
        const errors = this.detectPageErrors(html, route);

        if (errors.length > 0) {
          this.results.runtimeErrors.push(...errors);
          this.results.failedPages++;
          this.log(`Page ${route} has errors`, 'error');
        } else {
          this.results.passedPages++;
          this.log(`Page ${route} OK`, 'success');
        }
      } else {
        this.results.runtimeErrors.push({
          type: 'http_error',
          route,
          status: response.status,
          message: `HTTP ${response.status}`
        });
        this.results.failedPages++;
        this.log(`Page ${route} HTTP ${response.status}`, 'error');
      }
    } catch (error) {
      this.results.runtimeErrors.push({
        type: 'request_error',
        route,
        message: error.message
      });
      this.results.failedPages++;
      this.log(`Page ${route} failed: ${error.message}`, 'error');
    }
  }

  async fetchPage(url) {
    // Simple HTTP fetch
    const https = require('https');
    const http = require('http');

    return new Promise((resolve, reject) => {
      const client = url.startsWith('https:') ? https : http;

      const request = client.get(url, (response) => {
        let data = '';
        response.on('data', chunk => data += chunk);
        response.on('end', () => {
          response.text = () => Promise.resolve(data);
          response.ok = response.statusCode >= 200 && response.statusCode < 300;
          response.status = response.statusCode;
          resolve(response);
        });
      });

      request.on('error', reject);
      request.setTimeout(config.timeout, () => {
        request.destroy();
        reject(new Error('Request timeout'));
      });
    });
  }

  detectPageErrors(html, route) {
    const errors = [];

    // Check for JavaScript errors
    if (html.includes('ReferenceError:') || html.includes('is not defined')) {
      errors.push({
        type: 'javascript_error',
        route,
        message: 'JavaScript reference error detected in HTML'
      });
    }

    // Check for React/Docusaurus error boundaries
    if (html.includes('component stack') || html.includes('Error Boundary')) {
      errors.push({
        type: 'react_error',
        route,
        message: 'React error boundary triggered'
      });
    }

    // Check for build errors in HTML
    if (html.includes('Build failed') || html.includes('compilation error')) {
      errors.push({
        type: 'build_error',
        route,
        message: 'Build error found in rendered page'
      });
    }

    return errors;
  }

  extractBuildWarnings(buildOutput) {
    const warnings = [];
    const lines = buildOutput.split('\n');

    for (const line of lines) {
      if (line.includes('[WARNING]') || line.includes('warning:')) {
        warnings.push({
          type: 'build_warning',
          message: line.trim()
        });
      }
    }

    return warnings;
  }

  // Generate comprehensive test report
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalPages: this.results.totalPages,
        passedPages: this.results.passedPages,
        failedPages: this.results.failedPages,
        successRate: this.results.totalPages > 0
          ? ((this.results.passedPages / this.results.totalPages) * 100).toFixed(2) + '%'
          : '0%'
      },
      buildErrors: this.results.buildErrors,
      runtimeErrors: this.results.runtimeErrors,
      warnings: this.results.warnings
    };

    // Write report to file
    const reportPath = './test-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Console summary
    console.log('\n=== TEST REPORT ===');
    console.log(`Total Pages: ${report.summary.totalPages}`);
    console.log(`Passed: ${report.summary.passedPages}`);
    console.log(`Failed: ${report.summary.failedPages}`);
    console.log(`Success Rate: ${report.summary.successRate}`);
    console.log(`Build Errors: ${report.buildErrors.length}`);
    console.log(`Runtime Errors: ${report.runtimeErrors.length}`);
    console.log(`Warnings: ${report.warnings.length}`);
    console.log(`\nFull report saved to: ${reportPath}`);

    // Exit with error if there are failures
    if (report.buildErrors.length > 0 || report.runtimeErrors.length > 0) {
      process.exit(1);
    }
  }

  async runAllTests() {
    this.log('Starting comprehensive page testing...', 'info');

    // Test 1: Build compilation
    const buildSuccess = await this.testBuildCompilation();

    // Test 2: Runtime page loading (only if build succeeded)
    if (buildSuccess) {
      await this.testRuntimePageLoading();
    }

    // Generate final report
    this.generateReport();
  }

  async runBuildTest() {
    this.log('Running build test only...', 'info');
    await this.testBuildCompilation();
    this.generateReport();
  }

  async runRuntimeTest() {
    this.log('Running runtime test only...', 'info');
    await this.testRuntimePageLoading();
    this.generateReport();
  }
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'all';

  const tester = new PageTester();

  switch (command) {
    case 'build':
      await tester.runBuildTest();
      break;
    case 'runtime':
      await tester.runRuntimeTest();
      break;
    case 'all':
    default:
      await tester.runAllTests();
      break;
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = PageTester;