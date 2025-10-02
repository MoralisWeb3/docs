#!/usr/bin/env node

/**
 * API Endpoints Test Script
 * Tests all API endpoints in the /api directory
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

const API_DIR = path.join(__dirname, '..', 'api');
const TEST_PORT = 3000;

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

async function testEndpoint(endpoint) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: TEST_PORT,
      path: `/api/${endpoint}`,
      method: 'GET',
      timeout: 5000,
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        resolve({
          endpoint,
          status: res.statusCode,
          success: res.statusCode >= 200 && res.statusCode < 500,
          data: data.substring(0, 100),
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        endpoint,
        status: 0,
        success: false,
        error: err.message,
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        endpoint,
        status: 0,
        success: false,
        error: 'Request timeout',
      });
    });

    req.end();
  });
}

function findApiEndpoints(dir, base = '') {
  const endpoints = [];

  if (!fs.existsSync(dir)) {
    log(`API directory not found: ${dir}`, 'warning');
    return endpoints;
  }

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      endpoints.push(...findApiEndpoints(fullPath, path.join(base, item)));
    } else if (item.endsWith('.js') || item.endsWith('.ts')) {
      const endpoint = path.join(base, item.replace(/\.(js|ts)$/, ''));
      endpoints.push(endpoint.replace(/\\/g, '/'));
    }
  }

  return endpoints;
}

async function main() {
  log('\n=== API Endpoints Test ===\n', 'info');

  const endpoints = findApiEndpoints(API_DIR);

  if (endpoints.length === 0) {
    log('No API endpoints found', 'warning');
    return;
  }

  log(`Found ${endpoints.length} API endpoints`, 'info');
  log('Note: Server must be running on port 3000 for runtime tests\n', 'warning');

  const results = {
    passed: 0,
    failed: 0,
    details: [],
  };

  for (const endpoint of endpoints) {
    const result = await testEndpoint(endpoint);
    results.details.push(result);

    if (result.success) {
      results.passed++;
      log(`✓ ${endpoint} - Status: ${result.status}`, 'success');
    } else {
      results.failed++;
      log(`✗ ${endpoint} - ${result.error || 'Failed'}`, 'error');
    }
  }

  log(`\n=== Summary ===`, 'info');
  log(`Total: ${endpoints.length}`, 'info');
  log(`Passed: ${results.passed}`, 'success');
  log(`Failed: ${results.failed}`, results.failed > 0 ? 'error' : 'info');

  const reportPath = path.join(__dirname, '..', 'api-test-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  log(`\nReport saved to: ${reportPath}`, 'info');

  process.exit(results.failed > 0 ? 1 : 0);
}

if (require.main === module) {
  main().catch(err => {
    log(`Test failed: ${err.message}`, 'error');
    process.exit(1);
  });
}

module.exports = { testEndpoint, findApiEndpoints };
