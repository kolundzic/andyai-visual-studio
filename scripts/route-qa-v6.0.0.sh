#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Route QA v6.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

routes=(
  "app/client-workspace/page.tsx"
  "app/team-sharing/page.tsx"
  "app/public-share-links/page.tsx"
  "app/client-review/page.tsx"
  "app/artifact-approval-gate/page.tsx"
  "app/agency-templates/page.tsx"
  "app/brand-kits/page.tsx"
  "app/client-delivery-package/page.tsx"
  "app/agency-dashboard/page.tsx"
  "app/agency-visual-studio-lock/page.tsx"
)

for route in "${routes[@]}"; do
  if [[ ! -f "$route" ]]; then
    echo "🔴 Route missing: $route"
    exit 1
  fi
  echo "🟢 Route OK: $route"
done

echo "🟢 Route QA passed for v6.0.0"
