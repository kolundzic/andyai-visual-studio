#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Route QA v4.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

routes=(
  "app/marketplace/page.tsx"
  "app/marketplace-search/page.tsx"
  "app/premium-templates/page.tsx"
  "app/visual-canon-packs/page.tsx"
  "app/prompt-to-template/page.tsx"
  "app/template-preview-renderer/page.tsx"
  "app/template-favorites/page.tsx"
  "app/admin-template-publishing/page.tsx"
  "app/marketplace-governance/page.tsx"
  "app/visual-template-marketplace-lock/page.tsx"
)

for route in "${routes[@]}"; do
  if [ ! -f "$route" ]; then
    echo "🔴 Route missing: $route"
    exit 1
  fi
  echo "🟢 Route OK: $route"
done

echo "🟢 Route QA passed for v4.0.0"
