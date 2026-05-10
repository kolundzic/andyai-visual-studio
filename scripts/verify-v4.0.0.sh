#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 Verifying AndyAI Visual Studio v4.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required=(
  "lib/marketplace-model.ts"
  "components/MarketplaceHero.tsx"
  "app/marketplace/page.tsx"
  "lib/marketplace-taxonomy.ts"
  "components/MarketplaceSearchPanel.tsx"
  "app/marketplace-search/page.tsx"
  "lib/premium-template-metadata.ts"
  "app/premium-templates/page.tsx"
  "supabase/migrations/0010_premium_template_metadata.sql"
  "lib/visual-canon-packs.ts"
  "app/visual-canon-packs/page.tsx"
  "lib/prompt-template-generator.ts"
  "components/PromptToTemplateSpecPanel.tsx"
  "app/prompt-to-template/page.tsx"
  "lib/template-preview-renderer.ts"
  "components/TemplatePreviewRenderer.tsx"
  "app/template-preview-renderer/page.tsx"
  "components/TemplateRatingFavoritePanel.tsx"
  "app/template-favorites/page.tsx"
  "supabase/migrations/0011_template_rating_favorite_model.sql"
  "lib/admin-publishing-flow.ts"
  "components/AdminTemplatePublishingFlow.tsx"
  "app/admin-template-publishing/page.tsx"
  "supabase/migrations/0012_admin_template_publishing_flow.sql"
  "app/marketplace-governance/page.tsx"
  "scripts/marketplace-qa-v3.9.0.sh"
  "components/VisualTemplateMarketplaceLockBadge.tsx"
  "app/visual-template-marketplace-lock/page.tsx"
  "docs/VISUAL_TEMPLATE_MARKETPLACE_LOCK_v4.0.0.md"
  "docs/MASTER_UDARAC_v3.1.0_to_v4.0.0.md"
  "scripts/route-qa-v4.0.0.sh"
)

for file in "${required[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 File OK: $file"
done

./scripts/marketplace-qa-v3.9.0.sh
./scripts/route-qa-v4.0.0.sh

node -e "JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('🟢 package.json valid')"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🟢 v4.0.0 verification passed"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
