#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Route QA v3.0.0"
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
  "app/schema-hardening/page.tsx"
  "app/auth-polish/page.tsx"
  "app/workspace-v2/page.tsx"
  "app/project-lifecycle/page.tsx"
  "app/versioned-exports/page.tsx"
  "app/pricing-architecture/page.tsx"
  "app/usage-limits/page.tsx"
  "app/account-settings/page.tsx"
  "app/feedback/page.tsx"
  "app/commercial-foundation/page.tsx"
)

for route in "${routes[@]}"; do
  if [ ! -f "$route" ]; then
    echo "🔴 Missing route: $route"
    exit 1
  fi
  echo "🟢 Route OK: $route"
done

echo "🟢 Route QA passed for v3.0.0"
