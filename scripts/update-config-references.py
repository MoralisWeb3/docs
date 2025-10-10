#!/usr/bin/env python3
"""
Script to update legacy config references to use actively maintained sections.
"""
import re
import os
from pathlib import Path

# Define mapping: legacy sections -> new sections
SECTION_MAPPING = {
    # EVM API sections -> evm-docs
    'wallet': 'evm-docs',
    'nft': 'evm-docs',
    'token': 'evm-docs',
    'balance': 'evm-docs',
    'transaction': 'evm-docs',
    'block': 'evm-docs',
    'utils': 'evm-docs',
    'resolve': 'evm-docs',
    'defi': 'evm-docs',
    'entities': 'evm-docs',
    'market-data': 'evm-docs',
    'discovery': 'evm-docs',
    # Note: events, ipfs, market, rpc are not used in any MDX files
}

def update_file(file_path):
    """Update config references in a single MDX file."""
    with open(file_path, 'r') as f:
        content = f.read()

    original_content = content
    changes = []

    # Find and replace each legacy section reference
    for legacy, new in SECTION_MAPPING.items():
        # Pattern: config.legacy.methodName or config.legacy["methodName"]
        pattern = rf'config\.{legacy}\.'
        if re.search(pattern, content):
            # Replace with config["new-section"]
            new_pattern = f'config["{new}"].'
            content = re.sub(pattern, new_pattern, content)
            changes.append(f"{legacy} -> {new}")

    # Write back if changed
    if content != original_content:
        with open(file_path, 'w') as f:
            f.write(content)
        return changes

    return None

def main():
    """Process all MDX files."""
    docs_dir = Path('/Users/iulian/Code/docs/docs')
    mdx_files = list(docs_dir.rglob('*.mdx'))

    print(f"Found {len(mdx_files)} MDX files\n")

    updated_count = 0
    for file_path in mdx_files:
        changes = update_file(file_path)
        if changes:
            updated_count += 1
            rel_path = file_path.relative_to(docs_dir)
            print(f"✓ {rel_path}")
            for change in changes:
                print(f"    {change}")

    print(f"\n✓ Updated {updated_count} files")

if __name__ == '__main__':
    main()
