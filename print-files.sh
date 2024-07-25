#!/bin/bash

# Define the directory to search in. If not supplied, use the current directory.
SEARCH_DIR="${1:-.}"
shift 1 # Shift the arguments to leave out the first one (SEARCH_DIR)

# Initialize an array to hold ignore conditions for 'find'
declare -a ignore_conditions=()

# Add default ignore conditions
ignore_conditions+=('! -path */git*')
ignore_conditions+=('! -path */node_modules*')
ignore_conditions+=('! -name package-lock.json')
ignore_conditions+=('! -path */DS_Store*')

# Initialize output file variable. Default is stdout.
OUTPUT_FILE="/dev/stdout"

# Define an array of code file extensions
declare -a code_extensions=(".c" ".cpp" ".py" ".java" ".js" ".sh" ".tsx" ".json" ".ts" ".html" ".css" ".sql" ".rb" ".php" ".mdx")

# Loop through the remaining arguments to add custom ignore conditions or set the output file
for arg; do
    if [[ "$arg" == -* ]]; then
        OUTPUT_FILE="${arg:1}"
    else
        ignore_conditions+=("! -path */$arg*")
    fi
done

# Construct the find command with dynamically built ignore conditions
find_command="find $SEARCH_DIR -type f"
for condition in "${ignore_conditions[@]}"; do
    find_command+=" $condition"
done

# Execute the constructed find command and redirect output to file or stdout
eval "$find_command" | while IFS= read -r file; do
    # Extract the file extension
    file_extension="${file##*.}"
    # Check if the file extension is in the list of code file extensions
    if [[ " ${code_extensions[*]} " =~ " .$file_extension " ]]; then
        echo "=== Content of: $file ===" >> "$OUTPUT_FILE"
        cat "$file" >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"
        echo "=========================" >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"
    fi
done

# Usage information
echo "Usage: $0 [search-directory] [-outputFilePath] [ignore-dir1] [ignore-dir2] ..."
echo "Example: $0 /usr/local/src -output.txt build tmp"ß