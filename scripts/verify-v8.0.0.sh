#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 Verifying AndyAI Visual Studio v8.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required=(
  "components/PublicShowcasePolish.tsx"
  "components/ProductDemoStoryline.tsx"
  "components/DemoNavigationHub.tsx"
  "components/VisualProofGallery.tsx"
  "components/CaseStudyPreviewLayer.tsx"
  "components/PersonaDemoPaths.tsx"
  "components/ProductTourCtaSystem.tsx"
  "components/SocialPreviewLaunchAssets.tsx"
  "components/ShowcaseQaDemoSmoke.tsx"
  "components/ProductDemoLockBadge.tsx"
  "lib/public-showcase-polish.ts"
  "lib/product-demo-storyline.ts"
  "lib/demo-navigation-hub.ts"
  "lib/visual-proof-gallery.ts"
  "lib/case-study-preview.ts"
  "lib/persona-demo-paths.ts"
  "lib/product-tour-cta.ts"
  "lib/social-preview-launch-assets.ts"
  "lib/showcase-qa.ts"
  "lib/product-demo-lock.ts"
  "docs/PUBLIC_SHOWCASE_PRODUCT_DEMO_LOCK_v8.0.0.md"
  "docs/MASTER_UDARAC_v7.1.0_to_v8.0.0.md"
  "scripts/showcase-demo-smoke-v7.9.0.sh"
  "scripts/route-qa-v8.0.0.sh"
  "public/andyai-visual-studio-social-preview.svg"
)

for file in "${required[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 File missing: $file"
    exit 1
  fi
  echo "🟢 File OK: $file"
done

./scripts/showcase-demo-smoke-v7.9.0.sh
./scripts/route-qa-v8.0.0.sh

node -e "JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('🟢 package.json valid')"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🟢 v8.0.0 verification passed"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
