#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Showcase Demo Smoke v7.9.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required=(
  "app/public-showcase-polish/page.tsx"
  "app/product-demo-storyline/page.tsx"
  "app/demo-navigation-hub/page.tsx"
  "app/visual-proof-gallery/page.tsx"
  "app/case-study-preview/page.tsx"
  "app/persona-demo-paths/page.tsx"
  "app/product-tour-cta/page.tsx"
  "app/launch-assets/page.tsx"
  "app/showcase-qa/page.tsx"
  "public/andyai-visual-studio-social-preview.svg"
)

for file in "${required[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing: $file"
    exit 1
  fi
  echo "🟢 OK: $file"
done

echo "🟢 Showcase demo smoke passed for v7.9.0"
