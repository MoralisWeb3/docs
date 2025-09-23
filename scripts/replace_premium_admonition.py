#!/usr/bin/env python3
import re
import os
import glob

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Check if already has the import
    has_import = 'import PremiumEndpointNotice' in content

    # Find the Admonition block
    pattern = r'<Admonition type="info" icon="💡" title="Premium Endpoint">.*?</Admonition>'
    matches = re.findall(pattern, content, re.DOTALL)

    if not matches:
        return False

    print(f"Processing: {filepath}")

    # Add import if not present
    if not has_import:
        # Find the last import line
        import_lines = re.findall(r'^import .*$', content, re.MULTILINE)
        if import_lines:
            last_import = import_lines[-1]
            content = content.replace(
                last_import,
                last_import + '\nimport PremiumEndpointNotice from "@site/src/components/PremiumEndpointNotice/PremiumEndpointNotice";'
            )
        else:
            # Add at the beginning
            content = 'import PremiumEndpointNotice from "@site/src/components/PremiumEndpointNotice/PremiumEndpointNotice";\n\n' + content

    # Process each Admonition block
    for match in matches:
        # Extract the content between the Admonition tags
        inner_content = re.search(r'<Admonition[^>]*>(.*?)</Admonition>', match, re.DOTALL)
        if inner_content:
            paragraphs = inner_content.group(1).strip()

            # Find the first paragraph (the standard message)
            first_p_match = re.search(r'<p>.*?(?:Business|Pro).*?</p>', paragraphs, re.DOTALL)

            if first_p_match:
                # Get everything after the first paragraph
                remaining_content = paragraphs[first_p_match.end():].strip()

                if remaining_content:
                    # Has custom content
                    replacement = f'<PremiumEndpointNotice>\n  {remaining_content}\n</PremiumEndpointNotice>'
                else:
                    # No custom content
                    replacement = '<PremiumEndpointNotice />'
            else:
                # Couldn't parse, use simple replacement
                replacement = '<PremiumEndpointNotice />'

            content = content.replace(match, replacement)

    # Write the updated content
    with open(filepath, 'w') as f:
        f.write(content)

    return True

# Find all files
md_files = glob.glob('docs/**/*.md', recursive=True)
mdx_files = glob.glob('docs/**/*.mdx', recursive=True)
all_files = md_files + mdx_files

count = 0
for filepath in all_files:
    if process_file(filepath):
        count += 1

print(f"\nCompleted! Processed {count} files.")