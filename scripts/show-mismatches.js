#!/usr/bin/env node

const fs = require('fs');

const results = JSON.parse(fs.readFileSync('compute-verification-results.json', 'utf8'));

console.log('🔍 COMPUTE UNIT COST VERIFICATION RESULTS\n');
console.log('=' * 80);

// Show only endpoints with mismatches or issues
const issues = results.filter(r => !r.matches || r.actual === 'ERROR' || r.actual === 'FAILED');

console.log(`📊 SUMMARY:`);
console.log(`   Total endpoints: ${results.length}`);
console.log(`   Matching weights: ${results.filter(r => r.matches).length}`);
console.log(`   Weight mismatches: ${results.filter(r => !r.matches && r.actual !== 'ERROR' && r.actual !== 'FAILED').length}`);
console.log(`   Failed requests: ${results.filter(r => r.actual === 'ERROR' || r.actual === 'FAILED').length}\n`);

if (issues.length > 0) {
  console.log('⚠️  ENDPOINTS THAT NEED ATTENTION:\n');

  const mismatches = issues.filter(r => r.actual !== 'ERROR' && r.actual !== 'FAILED');
  const failures = issues.filter(r => r.actual === 'ERROR' || r.actual === 'FAILED');

  if (mismatches.length > 0) {
    console.log('🔄 WEIGHT MISMATCHES:');
    mismatches.forEach(r => {
      console.log(`   ${r.endpoint} (${r.type}): Expected ${r.expected}, Got ${r.actual}`);
    });
    console.log('');
  }

  if (failures.length > 0) {
    console.log('❌ FAILED ENDPOINTS:');
    failures.forEach(r => {
      console.log(`   ${r.endpoint} (${r.type}): ${r.error}`);
    });
  }
} else {
  console.log('✅ All endpoints have matching compute unit costs!');
}

console.log('\n' + '='.repeat(80));