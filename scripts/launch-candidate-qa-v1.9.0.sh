#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Launch Candidate QA v1.9.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required=(
  "app/launch-candidate/page.tsx"
  "app/showcase/page.tsx"
  "app/mobile-preview/page.tsx"
  "app/template-library/page.tsx"
  "app/partners/page.tsx"
  "app/public-demo/page.tsx"
  "app/production-smoke/page.tsx"
  "vercel.json"
)

for path in "${required[@]}"; do
  test -f "$path" || { echo "🔴 Missing: $path"; exit 1; }
  echo "🟢 OK: $path"
done

echo "🟢 Launch candidate QA passed for v1.9.0"
