#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

// Load API key from .env.local
function loadEnv() {
  const envContent = fs.readFileSync('.env.local', 'utf8');
  const lines = envContent.split('\n');
  const env = {};
  lines.forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      env[match[1]] = match[2].replace(/^"|"$/g, '');
    }
  });
  return env;
}

const env = loadEnv();
const API_KEY = env.MORALIS_API_KEY;

if (!API_KEY) {
  console.error('Please set MORALIS_API_KEY environment variable');
  process.exit(1);
}

// Load compute units table
const computeUnits = JSON.parse(fs.readFileSync('configs/api-reference/compute-units.json', 'utf8'));

function makeRequest(url, endpoint, type) {
  return new Promise((resolve) => {
    const request = https.get(url, {
      headers: {
        'X-API-Key': API_KEY,
        'accept': 'application/json'
      }
    }, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        const weight = response.headers['x-request-weight'] || response.headers['Request-Weight'];
        resolve({
          endpoint,
          type,
          url,
          statusCode: response.statusCode,
          actualWeight: weight ? parseInt(weight) : null,
          statusMessage: response.statusMessage,
          headers: response.headers
        });
      });
    });

    request.on('error', (error) => {
      resolve({
        endpoint,
        type,
        url,
        error: error.message,
        actualWeight: null
      });
    });

    request.setTimeout(5000, () => {
      request.destroy();
      resolve({
        endpoint,
        type,
        url,
        error: 'Timeout',
        actualWeight: null
      });
    });
  });
}

function buildUrl(endpoint, type) {
  if (type === 'evm') {
    // Use deep-index for EVM
    let url = `https://deep-index.moralis.io/api/v2.2${endpoint.path}`;

    // Replace common placeholders with valid test data
    url = url.replace('{address}', '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'); // Vitalik's address
    url = url.replace('{block_number_or_hash}', '0x12345678'); // Sample block hash
    url = url.replace('{transaction_hash}', '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'); // Sample tx hash
    url = url.replace('{pair_address}', '0x60594a405d53811d3bc47665f672d44ed8e928f1'); // WETH/USDC pair
    url = url.replace(':address', '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');
    url = url.replace(':pair_address', '0x60594a405d53811d3bc47665f672d44ed8e928f1');
    url = url.replace(':token_address', '0xA0b86a33E6441e9e89C90c0C5CdBb7c202cCeA00'); // USDC
    url = url.replace(':tokenAddress', '0xA0b86a33E6441e9e89C90c0C5CdBb7c202cCeA00');
    url = url.replace(':entityId', 'sample_entity');
    url = url.replace('{categoryId}', '1');
    url = url.replace('{network}', 'eth');
    url = url.replace('{domain}', 'ethereum.eth');
    url = url.replace('{token_id}', '1');
    url = url.replace(':exchange', 'uniswap');
    url = url.replace('{wallet}', '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');

    // Add chain parameter if not already present
    if (!url.includes('chain=') && !url.includes('?')) {
      url += '?chain=eth';
    } else if (!url.includes('chain=') && url.includes('?')) {
      url += '&chain=eth';
    }

    return url;
  } else {
    // Use solana-gateway for Solana
    let url = `https://solana-gateway.moralis.io${endpoint.path}`;

    url = url.replace('{address}', '11111111111111111111111111111112'); // System Program
    url = url.replace('{walletAddress}', '11111111111111111111111111111112');
    url = url.replace('{tokenAddress}', 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'); // USDC
    url = url.replace(':address', '11111111111111111111111111111112');
    url = url.replace(':walletAddress', '11111111111111111111111111111112');
    url = url.replace(':tokenAddress', 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB');
    url = url.replace('{pairAddress}', '58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2'); // USDC/SOL pair
    url = url.replace(':pairAddress', '58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2');
    url = url.replace('{network}', 'mainnet');
    url = url.replace(':network', 'mainnet');
    url = url.replace('{category}', 'defi');

    return url;
  }
}

async function verifyComputeCosts() {
  console.log('🔍 Verifying compute costs for all endpoints...\n');

  const results = [];
  const endpointsToTest = [
    ...computeUnits.evm.map(e => ({ ...e, type: 'evm' })),
    ...computeUnits.solana.map(e => ({ ...e, type: 'solana' }))
  ];

  console.log(`Testing ${endpointsToTest.length} endpoints...\n`);

  // Test endpoints in batches to avoid rate limiting
  for (let i = 0; i < endpointsToTest.length; i++) {
    const endpoint = endpointsToTest[i];

    try {
      const url = buildUrl(endpoint, endpoint.type);
      const result = await makeRequest(url, endpoint.endpoint, endpoint.type);

      const expectedWeight = endpoint.price;
      const actualWeight = result.actualWeight;
      const matches = actualWeight && actualWeight === expectedWeight;
      const statusIcon = result.error ? '❌' : (matches ? '✅' : '⚠️');

      const output = {
        endpoint: endpoint.endpoint,
        type: endpoint.type.toUpperCase(),
        expected: expectedWeight,
        actual: actualWeight || 'ERROR',
        matches: matches,
        status: result.statusCode || 'ERROR',
        error: result.error
      };

      results.push(output);

      console.log(`${statusIcon} ${endpoint.endpoint} (${endpoint.type.toUpperCase()})`);
      console.log(`   Expected: ${expectedWeight} CU | Actual: ${actualWeight || 'FAILED'} | Status: ${result.statusCode || 'ERROR'}`);

      if (result.error) {
        console.log(`   Error: ${result.error}`);
      } else if (!matches) {
        console.log(`   ⚠️  WEIGHT MISMATCH!`);
      }
      console.log('');

      // Rate limiting - wait between requests
      await new Promise(resolve => setTimeout(resolve, 200));

    } catch (error) {
      console.log(`❌ ${endpoint.endpoint} (${endpoint.type.toUpperCase()}) - FAILED: ${error.message}`);

      results.push({
        endpoint: endpoint.endpoint,
        type: endpoint.type.toUpperCase(),
        expected: endpoint.price,
        actual: 'FAILED',
        matches: false,
        status: 'FAILED',
        error: error.message
      });
      console.log('');
    }
  }

  // Print summary
  const successful = results.filter(r => r.actual !== 'ERROR' && r.actual !== 'FAILED');
  const matching = results.filter(r => r.matches);
  const mismatched = results.filter(r => !r.matches && r.actual !== 'ERROR' && r.actual !== 'FAILED');
  const failed = results.filter(r => r.actual === 'ERROR' || r.actual === 'FAILED');

  console.log('\n' + '='.repeat(80));
  console.log('📊 SUMMARY');
  console.log('='.repeat(80));
  console.log(`Total endpoints tested: ${results.length}`);
  console.log(`✅ Successful requests: ${successful.length}`);
  console.log(`✅ Weights matching: ${matching.length}`);
  console.log(`⚠️  Weight mismatches: ${mismatched.length}`);
  console.log(`❌ Failed requests: ${failed.length}`);

  if (mismatched.length > 0) {
    console.log('\n⚠️  ENDPOINTS WITH WEIGHT MISMATCHES:');
    mismatched.forEach(r => {
      console.log(`   ${r.endpoint} (${r.type}): Expected ${r.expected}, Got ${r.actual}`);
    });
  }

  if (failed.length > 0) {
    console.log('\n❌ FAILED ENDPOINTS:');
    failed.forEach(r => {
      console.log(`   ${r.endpoint} (${r.type}): ${r.error}`);
    });
  }

  // Save results to file
  fs.writeFileSync('compute-verification-results.json', JSON.stringify(results, null, 2));
  console.log('\n💾 Detailed results saved to: compute-verification-results.json');
}

if (require.main === module) {
  verifyComputeCosts().catch(console.error);
}