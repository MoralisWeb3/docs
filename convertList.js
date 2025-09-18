const fs = require('fs');
const path = require('path');

// Process a single Markdown file, converting eligible lists to HTML <ul>
function processMarkdownFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n');
        let newLines = [];
        let i = 0;

        while (i < lines.length) {
            const line = lines[i].trimEnd();
            // Match lines starting with "- [text](url)" with flexible whitespace
            if (/^\s*-\s+\[[^\]]+\]\([^)]+\)/.test(line)) {
                newLines.push('<ul>');
                while (i < lines.length) {
                    const currentLine = lines[i].trimEnd();
                    // Match [text](url) with optional trailing text and flexible whitespace
                    const match = currentLine.match(/^\s*-\s+\[(.*?)\]\((.*?)\)(\s*.*)?$/);
                    if (match) {
                        const text = match[1].trim();
                        const link = match[2].trim();
                        const extraText = match[3] ? match[3].trim() : '';
                        newLines.push(`  <li><a href="${link}">${text}</a>${extraText ? ' ' + extraText : ''}</li>`);
                        i++;
                    } else {
                        break;
                    }
                }
                newLines.push('</ul>');
            } else {
                newLines.push(lines[i]);
                i++;
            }
        }

        // Write the modified content back to the file
        fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
        console.log(`Processed: ${filePath}`);
    } catch (error) {
        console.error(`Error processing ${filePath}: ${error.message}`);
    }
}

// Walk the directory and process all .md and .mdx files
function walkDirectory(dirPath) {
    try {
        const files = fs.readdirSync(dirPath, { withFileTypes: true });
        for (const file of files) {
            const fullPath = path.join(dirPath, file.name);
            if (file.isDirectory()) {
                walkDirectory(fullPath); // Recurse into subdirectory
            } else if (file.name.toLowerCase().endsWith('.md') || file.name.toLowerCase().endsWith('.mdx')) {
                processMarkdownFile(fullPath);
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dirPath}: ${error.message}`);
    }
}

// Main function to start processing
function main() {
    const dirPath = process.argv[2] || '.';
    walkDirectory(dirPath);
}

main();