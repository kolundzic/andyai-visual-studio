#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Agency Dashboard QA v5.9.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required=(
  "app/client-workspace/page.tsx"
  "app/team-sharing/page.tsx"
  "app/public-share-links/page.tsx"
  "app/client-review/page.tsx"
  "app/artifact-approval-gate/page.tsx"
  "app/agency-templates/page.tsx"
  "app/brand-kits/page.tsx"
  "app/client-delivery-package/page.tsx"
  "app/agency-dashboard/page.tsx"
)

for file in "${required[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "🔴 Missing: $file"
    exit 1
  fi
  echo "🟢 OK: $file"
done

echo "🟢 Agency Dashboard QA passed for v5.9.0"
