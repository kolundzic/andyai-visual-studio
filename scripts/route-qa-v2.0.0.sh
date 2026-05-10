#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Route QA v2.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

routes=(
  "app/page.tsx"
  "app/demo/page.tsx"
  "app/public-demo/page.tsx"
  "app/navigation-map/page.tsx"
  "app/template-library/page.tsx"
  "app/partners/page.tsx"
  "app/mobile-preview/page.tsx"
  "app/showcase/page.tsx"
  "app/launch-candidate/page.tsx"
  "app/beta/page.tsx"
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

echo "🟢 Route QA passed for v2.0.0"
