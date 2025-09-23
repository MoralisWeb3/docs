#!/bin/bash

# Files with "Business plan or a custom Enterprise plan"
enterprise_files=(
  "docs/01-web3-data-api/evm/reference/token-api/01-Search Tokens/token-search-api.md"
  "docs/01-web3-data-api/solana/reference/token-api/09-Search Tokens/token-search-api.md"
)

# Process all files with Premium Endpoint Admonition
files=$(grep -r -l 'Admonition type="info" icon="💡" title="Premium Endpoint"' docs/ --include="*.md" --include="*.mdx")

for file in $files; do
    echo "Processing: $file"

    # Check if the file already has the PremiumEndpointNotice import
    if ! grep -q "import PremiumEndpointNotice" "$file"; then
        # Add the import statement after the last import or at the beginning
        if grep -q "^import " "$file"; then
            # Find the last import line and add our import after it
            awk '/^import / {last_import=NR; lines[NR]=$0; next}
                 {lines[NR]=$0}
                 END {
                     for(i=1; i<=NR; i++) {
                         if(i<=last_import) print lines[i]
                         if(i==last_import) print "import PremiumEndpointNotice from \"@site/src/components/PremiumEndpointNotice/PremiumEndpointNotice\";"
                         if(i>last_import) print lines[i]
                     }
                 }' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
        else
            # Add at the beginning if no imports exist
            {
                echo 'import PremiumEndpointNotice from "@site/src/components/PremiumEndpointNotice/PremiumEndpointNotice";'
                echo ""
                cat "$file"
            } > "$file.tmp" && mv "$file.tmp" "$file"
        fi
    fi

    # Check if this file needs the enterprise prop
    is_enterprise=false
    for enterprise_file in "${enterprise_files[@]}"; do
        if [[ "$file" == "$enterprise_file" ]]; then
            is_enterprise=true
            break
        fi
    done

    # Replace the Admonition block with the appropriate component
    if [ "$is_enterprise" = true ]; then
        # For enterprise files, use the includeEnterprise prop
        perl -i -0pe 's/<Admonition type="info" icon="💡" title="Premium Endpoint">.*?<\/Admonition>/<PremiumEndpointNotice includeEnterprise \/>/gs' "$file"
    else
        # For regular files, use the default component
        perl -i -0pe 's/<Admonition type="info" icon="💡" title="Premium Endpoint">.*?<\/Admonition>/<PremiumEndpointNotice \/>/gs' "$file"
    fi
done

echo "Replacement completed!"