#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Route QA v8.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

routes=(
  "app/public-showcase-polish/page.tsx"
  "app/product-demo-storyline/page.tsx"
  "app/demo-navigation-hub/page.tsx"
  "app/visual-proof-gallery/page.tsx"
  "app/case-study-preview/page.tsx"
  "app/persona-demo-paths/page.tsx"
  "app/product-tour-cta/page.tsx"
  "app/launch-assets/page.tsx"
  "app/showcase-qa/page.tsx"
  "app/product-demo-lock/page.tsx"
)

for route in "${routes[@]}"; do
  if [ ! -f "$route" ]; then
    echo "🔴 Route missing: $route"
    exit 1
  fi
  echo "🟢 Route OK: $route"
done

echo "🟢 Route QA passed for v8.0.0"
