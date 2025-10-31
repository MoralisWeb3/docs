import * as fs from 'fs';
import * as path from 'path';

/**
 * Script to clean up invalid redirects from the redirects.ts file
 * Removes:
 * 1. Self-referencing redirects (source === destination)
 * 2. Empty destination redirects (destination === "")
 */

const REDIRECTS_FILE = path.join(__dirname, '../api/data/redirects.ts');

function cleanRedirects() {
  console.log('Reading redirects file...');
  const content = fs.readFileSync(REDIRECTS_FILE, 'utf-8');

  // Import the redirects array
  const redirectsMatch = content.match(/export const redirects[^=]*=\s*(\[[\s\S]*\]);/);

  if (!redirectsMatch) {
    console.error('Could not find redirects array in file');
    process.exit(1);
  }

  // Parse the redirects array
  const redirectsArrayString = redirectsMatch[1];

  // Use eval to parse the array (safe since we control the source)
  let redirects: Array<{ source: string; destination: string; permanent?: boolean }>;
  try {
    redirects = eval(redirectsArrayString);
  } catch (error) {
    console.error('Error parsing redirects array:', error);
    process.exit(1);
  }

  console.log(`Total redirects before cleaning: ${redirects.length}`);

  // Filter out invalid redirects
  const validRedirects = redirects.filter((redirect, index) => {
    // Check for empty destination
    if (!redirect.destination || redirect.destination.trim() === '') {
      console.log(`Removing redirect #${index + 1}: Empty destination - "${redirect.source}"`);
      return false;
    }

    // Check for self-referencing
    if (redirect.source === redirect.destination) {
      console.log(`Removing redirect #${index + 1}: Self-referencing - "${redirect.source}" → "${redirect.destination}"`);
      return false;
    }

    return true;
  });

  const removedCount = redirects.length - validRedirects.length;
  console.log(`\nTotal redirects after cleaning: ${validRedirects.length}`);
  console.log(`Removed ${removedCount} invalid redirect(s)`);

  if (removedCount === 0) {
    console.log('No invalid redirects found. File is already clean!');
    return;
  }

  // Generate the new file content
  const newContent = `export const redirects = ${JSON.stringify(validRedirects, null, 4).replace(/"([^"]+)":/g, '$1:')};\n`;

  // Write back to file
  fs.writeFileSync(REDIRECTS_FILE, newContent, 'utf-8');
  console.log(`\n✓ Successfully cleaned redirects file: ${REDIRECTS_FILE}`);
}

// Run the script
cleanRedirects();
