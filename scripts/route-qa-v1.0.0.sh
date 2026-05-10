#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Route QA v1.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required_routes=(
  "app/page.tsx"
  "app/gallery/page.tsx"
  "app/templates/[templateId]/page.tsx"
  "app/tap-editor/page.tsx"
  "app/projects/page.tsx"
  "app/projects/[projectId]/page.tsx"
  "app/projects/[projectId]/exports/page.tsx"
  "app/projects/[projectId]/package/page.tsx"
  "app/exports/page.tsx"
  "app/data-preview/page.tsx"
  "app/demo/page.tsx"
  "app/status/page.tsx"
)

for route in "${required_routes[@]}"; do
  if [ ! -f "$route" ]; then
    echo "🔴 Route missing: $route"
    exit 1
  fi
  echo "🟢 Route OK: $route"
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🟢 Route QA passed for v1.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
