const dotenv = require('dotenv');
const algoliasearch = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

dotenv.config();

// Initialize Algolia client - requires environment variables
if (!process.env.ALGOLIA_APP_ID || !process.env.ALGOLIA_API_KEY || !process.env.ALGOLIA_INDEX_NAME) {
  console.error('Error: Algolia environment variables are not set!');
  console.error('Please set ALGOLIA_APP_ID, ALGOLIA_API_KEY, and ALGOLIA_INDEX_NAME in your .env file');
  process.exit(1);
}

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);

const indexName = process.env.ALGOLIA_INDEX_NAME;

// Function to recursively get all MDX files
function getAllMdxFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip certain directories
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'build') {
        arrayOfFiles = getAllMdxFiles(filePath, arrayOfFiles);
      }
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Function to extract content from MDX files
function extractContent(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // Extract the relative path for URL generation
  const relativePath = path.relative(path.join(__dirname, '..', 'docs'), filePath);
  const url = relativePath
    .replace(/\\/g, '/')
    .replace(/\.mdx?$/, '')
    .replace(/\/index$/, '');

  // Parse headers from content
  const headers = [];
  const h1Match = content.match(/^#\s+(.+)$/m);
  const h2Matches = [...content.matchAll(/^##\s+(.+)$/gm)];
  const h3Matches = [...content.matchAll(/^###\s+(.+)$/gm)];

  if (h1Match) headers.push({ level: 1, text: h1Match[1] });
  h2Matches.forEach(match => headers.push({ level: 2, text: match[1] }));
  h3Matches.forEach(match => headers.push({ level: 3, text: match[1] }));

  // Clean content (remove markdown syntax for better search)
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/#+\s+/g, '') // Remove headers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links but keep text
    .replace(/[*_~]/g, '') // Remove emphasis
    .replace(/\n{3,}/g, '\n\n') // Normalize line breaks
    .trim();

  return {
    objectID: filePath,
    title: data.title || (h1Match ? h1Match[1] : path.basename(filePath, path.extname(filePath))),
    description: data.description || '',
    content: cleanContent.substring(0, 5000), // Limit content length
    url: `/${url}`,
    hierarchy: {
      lvl0: data.category || 'Documentation',
      lvl1: data.title || headers[0]?.text || '',
      lvl2: headers[1]?.text || '',
      lvl3: headers[2]?.text || '',
    },
    type: 'content',
    tags: data.tags || [],
  };
}

// Main indexing function
async function indexDocumentation() {
  try {
    console.log('Starting Algolia indexing...');

    const docsPath = path.join(__dirname, '..', 'docs');
    const mdxFiles = getAllMdxFiles(docsPath);

    console.log(`Found ${mdxFiles.length} documentation files`);

    // Extract content from all files
    const records = mdxFiles.map(filePath => {
      try {
        return extractContent(filePath);
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        return null;
      }
    }).filter(Boolean);

    console.log(`Prepared ${records.length} records for indexing`);

    // Save to Algolia - using the v4 API
    const index = client.initIndex(indexName);
    const response = await index.saveObjects(records);

    console.log(`Indexing task ${response.taskID} submitted successfully`);

    // Wait for the task to complete
    if (response.taskID) {
      await index.waitTask(response.taskID);
    }

    console.log('Indexing completed successfully!');
    console.log(`Index name: ${indexName}`);
    console.log(`Total records indexed: ${records.length}`);

  } catch (error) {
    console.error('Error indexing documentation:', error);
    process.exit(1);
  }
}

// Run the indexing
indexDocumentation();