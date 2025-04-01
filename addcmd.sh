#!/bin/bash

# Check if the script is run in the correct directory
if [ "$(pwd)" == "/" ]; then
    echo "Error: Do not run this script in the root directory!"
    exit 1
fi

# Function to get the copyright block
get_copyright_block() {
    local ext=$1
    local year1="1994"

    case "$ext" in
        asm|macro)
            echo -e "* (C) $year1-2025 Rocket Software, Inc. or its affiliates.\n* ROCKET SOFTWARE, INC. CONFIDENTIAL\n"
            ;;
        c|cpp|h)
            echo -e "/* (C) $year1-2025 Rocket Software, Inc. or its affiliates.             */\n/* ROCKET SOFTWARE, INC. CONFIDENTIAL                                 */\n"
            ;;
        clist|rexx)
            echo -e "/* (C) $year1-2025 Rocket Software, Inc. or its affiliates.            */\n/* ROCKET SOFTWARE, INC. CONFIDENTIAL                                */\n"
            ;;
        jcl)
            echo -e "//* (C) $year1-2025 Rocket Software, Inc. or its affiliates.\n//* ROCKET SOFTWARE, INC. CONFIDENTIAL\n"
            ;;
        java|js|ts)
            echo -e "// (C) $year1-2025 Rocket Software, Inc. or its affiliates.\n// ROCKET SOFTWARE, INC. CONFIDENTIAL\n"
            ;;
        md)
            echo -e "[//]: # \"(C) $year1-2025 Rocket Software, Inc. or its affiliates.\"\n[//]: # \"ROCKET SOFTWARE, INC. CONFIDENTIAL\"\n"
            ;;
        *)
            echo ""
            ;;
    esac
}

# Process each file in the current directory
find . -type f | while read -r file; do
    # Get the file extension
    ext="${file##*.}"

    # Get the appropriate copyright block
    copyright=$(get_copyright_block "$ext")

    # Skip unsupported file types
    if [ -z "$copyright" ]; then
        echo "Skipping unsupported file: $file"
        continue
    fi

    # Check for an existing Year1 in the file
    existing_year=$(grep -oP "\(C\) \K[0-9]{4}" "$file" | head -1)
    if [ -n "$existing_year" ]; then
        copyright=$(echo "$copyright" | sed "s/1994/$existing_year/")
    fi

    # Prepend the copyright block to the file
    echo "Updating file: $file"
    tmp_file="$file.tmp"
    echo -e "$copyright" > "$tmp_file"
    cat "$file" >> "$tmp_file"
    mv "$tmp_file" "$file"
done

echo "Processing complete."

