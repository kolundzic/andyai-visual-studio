#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 Verifying AndyAI Visual Studio v2.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required_files=(
  "lib/public-demo-content.ts"
  "app/public-demo/page.tsx"
  "components/NavigationHardeningMap.tsx"
  "app/navigation-map/page.tsx"
  "lib/template-catalog-v2.ts"
  "app/template-library/page.tsx"
  "app/partners/page.tsx"
  "scripts/demo-smoke-v1.6.0.sh"
  "app/mobile-preview/page.tsx"
  "public/andyai-visual-proof-card.svg"
  "components/VisualProofStrip.tsx"
  "app/showcase/page.tsx"
  "app/launch-candidate/page.tsx"
  "scripts/launch-candidate-qa-v1.9.0.sh"
  "components/BetaLockBadge.tsx"
  "app/beta/page.tsx"
  "docs/PUBLIC_SAAS_BETA_LOCK_v2.0.0.md"
  "docs/MASTER_UDARAC_v1.2.0_to_v2.0.0.md"
  "scripts/route-qa-v2.0.0.sh"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing file: $file"
    exit 1
  fi
  echo "🟢 File OK: $file"
done

./scripts/demo-smoke-v1.6.0.sh
./scripts/launch-candidate-qa-v1.9.0.sh
./scripts/route-qa-v2.0.0.sh

node -e "JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('🟢 package.json valid')"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🟢 v2.0.0 verification passed"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
