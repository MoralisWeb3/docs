const dotenv = require('dotenv');
const algoliasearch = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

dotenv.config();

// Initialize Algolia client - requires environment variables
const APP_ID = process.env.ALGOLIA_APP_ID;
const API_KEY = process.env.ALGOLIA_API_KEY;
const INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

if (!APP_ID || !API_KEY || !INDEX_NAME) {
  console.error('❌ Error: Algolia environment variables are not set!');
  console.error('Please set the following in your .env file:');
  console.error('  ALGOLIA_APP_ID=your_app_id');
  console.error('  ALGOLIA_API_KEY=your_api_key');
  console.error('  ALGOLIA_INDEX_NAME=your_index_name');
  process.exit(1);
}

const client = algoliasearch(APP_ID, API_KEY);
const index = client.initIndex(INDEX_NAME);

// Function to recursively get all MDX/MD files
function getAllDocFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'build') {
        arrayOfFiles = getAllDocFiles(filePath, arrayOfFiles);
      }
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Function to extract content and create Algolia records
function createAlgoliaRecord(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);

  // Get relative path from docs folder
  const relativePath = path.relative(path.join(__dirname, '..', 'docs'), filePath);

  // Create URL path
  let url = '/' + relativePath
    .replace(/\\/g, '/')
    .replace(/\.mdx?$/, '')
    .replace(/\/index$/, '')
    .replace(/^\d+-/, ''); // Remove number prefixes

  // Extract headers for hierarchy
  const h1Match = content.match(/^#\s+(.+)$/m);
  const h2Matches = [...content.matchAll(/^##\s+(.+)$/gm)];
  const h3Matches = [...content.matchAll(/^###\s+(.+)$/gm)];

  // Clean content for better search
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/#+\s+/g, '') // Remove headers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links but keep text
    .replace(/[*_~]/g, '') // Remove emphasis
    .replace(/\n{3,}/g, '\n\n') // Normalize line breaks
    .substring(0, 8000) // Limit content size
    .trim();

  // Create record structure compatible with DocSearch
  const record = {
    objectID: filePath,
    type: 'content',
    url: url,
    content: cleanContent,
    contentType: 'docs',

    // Hierarchy for DocSearch
    hierarchy: {
      lvl0: frontmatter.sidebar_label || frontmatter.title || 'Documentation',
      lvl1: h1Match ? h1Match[1] : frontmatter.title || null,
      lvl2: h2Matches[0] ? h2Matches[0][1] : null,
      lvl3: h3Matches[0] ? h3Matches[0][1] : null,
      lvl4: null,
      lvl5: null,
      lvl6: null,
    },

    // Additional fields for faceting
    docusaurus_tag: 'docs-default-current',
    lang: 'en',
    language: 'en',
    version: 'current',

    // Metadata
    title: frontmatter.title || h1Match?.[1] || path.basename(filePath, path.extname(filePath)),
    description: frontmatter.description || '',
    keywords: frontmatter.keywords || [],
    tags: frontmatter.tags || [],

    // Anchor for direct linking
    anchor: null,
    url_without_anchor: url,
  };

  // Create additional records for each section (h2 headers)
  const sectionRecords = [];
  h2Matches.forEach((match, index) => {
    const sectionContent = extractSectionContent(content, match.index);
    if (sectionContent) {
      sectionRecords.push({
        ...record,
        objectID: `${filePath}_h2_${index}`,
        type: 'lvl2',
        content: sectionContent.substring(0, 5000),
        anchor: slugify(match[1]),
        url: `${url}#${slugify(match[1])}`,
        hierarchy: {
          ...record.hierarchy,
          lvl2: match[1],
        },
      });
    }
  });

  return [record, ...sectionRecords];
}

// Helper function to extract section content
function extractSectionContent(content, startIndex) {
  const nextHeaderMatch = content.substring(startIndex).match(/\n##?\s+/);
  const endIndex = nextHeaderMatch
    ? startIndex + nextHeaderMatch.index
    : content.length;

  return content
    .substring(startIndex, endIndex)
    .replace(/^#+\s+.+$/m, '') // Remove the header itself
    .trim();
}

// Helper function to create URL-safe slugs
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// Main indexing function
async function indexDocumentation() {
  try {
    console.log('🔍 Starting Algolia indexing for Docusaurus...');
    console.log(`📦 App ID: ${APP_ID}`);
    console.log(`📇 Index Name: ${INDEX_NAME}`);

    const docsPath = path.join(__dirname, '..', 'docs');
    const docFiles = getAllDocFiles(docsPath);

    console.log(`📄 Found ${docFiles.length} documentation files`);

    // Create all records
    const allRecords = [];
    docFiles.forEach(filePath => {
      try {
        const records = createAlgoliaRecord(filePath);
        allRecords.push(...records);
      } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
      }
    });

    console.log(`📊 Created ${allRecords.length} Algolia records (including sections)`);

    // Clear the index first for a fresh start
    console.log('🧹 Clearing existing index...');
    await index.clearObjects();

    // Save records to Algolia
    console.log('📤 Uploading records to Algolia...');
    const { objectIDs } = await index.saveObjects(allRecords);

    console.log(`✅ Successfully indexed ${objectIDs.length} records!`);

    // Configure index settings for better search
    console.log('⚙️  Configuring index settings...');
    await index.setSettings({
      searchableAttributes: [
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy.lvl3)',
        'unordered(hierarchy.lvl4)',
        'unordered(hierarchy.lvl5)',
        'unordered(hierarchy.lvl6)',
        'content',
        'title',
        'description',
      ],
      customRanking: [
        'desc(weight.pageRank)',
        'desc(weight.level)',
        'asc(weight.position)',
      ],
      attributesForFaceting: [
        'searchable(docusaurus_tag)',
        'searchable(lang)',
        'searchable(language)',
        'searchable(version)',
        'searchable(type)',
        'searchable(tags)',
      ],
      attributesToRetrieve: [
        'hierarchy',
        'content',
        'anchor',
        'url',
        'url_without_anchor',
        'type',
      ],
      attributesToHighlight: [
        'hierarchy',
        'content',
      ],
      attributesToSnippet: [
        'content:30',
      ],
      highlightPreTag: '<mark>',
      highlightPostTag: '</mark>',
      snippetEllipsisText: '...',
      removeWordsIfNoResults: 'allOptional',
    });

    console.log('🎉 Algolia indexing completed successfully!');
    console.log('🔗 Your search should now work at http://localhost:3000');

  } catch (error) {
    console.error('❌ Error indexing documentation:', error);
    process.exit(1);
  }
}

// Run the indexing
indexDocumentation();