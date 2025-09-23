#!/bin/bash

# Find all files with the Premium Endpoint Admonition
files=$(grep -r -l 'Admonition type="info" icon="💡" title="Premium Endpoint"' docs/ --include="*.md" --include="*.mdx")

for file in $files; do
    echo "Processing: $file"

    # Check if the file already has the PremiumEndpointNotice import
    if ! grep -q "import PremiumEndpointNotice" "$file"; then
        # Add the import statement after the last import or at the beginning
        if grep -q "^import " "$file"; then
            # Add after the last import
            awk '/^import / {last_import=NR}
                 {lines[NR]=$0}
                 END {
                     for(i=1; i<=NR; i++) {
                         print lines[i]
                         if(i==last_import) print "import PremiumEndpointNotice from \"@site/src/components/PremiumEndpointNotice/PremiumEndpointNotice\";"
                     }
                 }' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
        else
            # Add at the beginning if no imports exist
            echo 'import PremiumEndpointNotice from "@site/src/components/PremiumEndpointNotice/PremiumEndpointNotice";' > "$file.tmp"
            echo "" >> "$file.tmp"
            cat "$file" >> "$file.tmp"
            mv "$file.tmp" "$file"
        fi
    fi

    # Replace the Admonition block with the component
    sed -i '' '/<Admonition type="info" icon="💡" title="Premium Endpoint">/,/<\/Admonition>/c\
<PremiumEndpointNotice />' "$file"

done

echo "Replacement completed!"