#!/usr/bin/env bash
set -euo pipefail

# --- Args ---
if [[ $# -gt 0 ]]; then
  SEARCH_DIR="$1"
  shift
else
  SEARCH_DIR="."
fi

# Output file: any arg starting with '-' means "write to this path" (same as your original).
OUTPUT_FILE="/dev/stdout"

# Collect extra ignore dir globs (tokens that do NOT start with '-')
declare -a EXTRA_IGNORES=() || EXTRA_IGNORES=()
for arg in "$@"; do
  if [[ "$arg" == -* ]]; then
    OUTPUT_FILE="${arg:1}"
  else
    EXTRA_IGNORES+=("$arg")
  fi
done

# --- Extensions (use case pattern matching later) ---
# Adjust as needed; added .md and .jsx which are common.
CODE_EXTS='
*.c|*.cpp|*.py|*.java|*.js|*.jsx|*.sh|*.tsx|*.json|*.ts|*.html|*.css|*.sql|*.rb|*.php|*.md|*.mdx
'
w
# --- Build find command as array (NO eval) ---
cmd=(find "$SEARCH_DIR" -type f)

# Default ignores (quote patterns so the shell doesn't expand them)
cmd+=( ! -path '*/git*' )
cmd+=( ! -path '*/node_modules*' )
cmd+=( ! -name 'package-lock.json' )
cmd+=( ! -path '*/.DS_Store*' )

# User-provided ignores (treat as directory prefixes; ignore anything under them)
# Example: "build" -> ignore '*/build/*' and also '*/build*' for loose matches
for ig in "${EXTRA_IGNORES[@]}"; do
  cmd+=( ! -path "*/$ig/*" )
  cmd+=( ! -path "*/$ig*" )
done

# NUL-safe walk
cmd+=( -print0 )

# --- Run & emit ---
# Create/clear output if it's a real file
if [[ "$OUTPUT_FILE" != "/dev/stdout" ]]; then
  : > "$OUTPUT_FILE"
fi

# Stream results
"${cmd[@]}" | while IFS= read -r -d '' file; do
  case "$file" in
    # Match against our code extensions set
    *.c|*.cpp|*.py|*.java|*.js|*.jsx|*.sh|*.tsx|*.json|*.ts|*.html|*.css|*.sql|*.rb|*.php|*.md|*.mdx)
      {
        printf '=== Content of: %s ===\n' "$file"
        cat -- "$file"
        printf '\n=========================\n\n'
      } >> "$OUTPUT_FILE"
      ;;
    *) : ;;  # not a code file
  esac
done

# Optional usage helper (only if explicitly requested)
if [[ "${SHOW_USAGE:-0}" == "1" ]]; then
  echo "Usage: $0 [search-directory] [-outputFilePath] [ignore-dir1] [ignore-dir2] ..."
  echo "Example: $0 /usr/local/src -output.txt build tmp"
fi
