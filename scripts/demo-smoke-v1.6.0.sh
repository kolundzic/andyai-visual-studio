#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Demo Smoke v1.6.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

routes=(
  "app/page.tsx"
  "app/demo/page.tsx"
  "app/public-demo/page.tsx"
  "app/gallery/page.tsx"
  "app/template-library/page.tsx"
  "app/projects/page.tsx"
  "app/exports/page.tsx"
  "app/partners/page.tsx"
  "app/status/page.tsx"
  "app/production-smoke/page.tsx"
)

for route in "${routes[@]}"; do
  if [ ! -f "$route" ]; then
    echo "🔴 Missing route: $route"
    exit 1
  fi
  echo "🟢 Route OK: $route"
done

echo "🟢 Demo smoke checks passed for v1.6.0"
