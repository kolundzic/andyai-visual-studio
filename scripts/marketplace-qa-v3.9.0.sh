#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Marketplace QA v3.9.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required=(
  "app/marketplace/page.tsx"
  "app/marketplace-search/page.tsx"
  "app/premium-templates/page.tsx"
  "app/visual-canon-packs/page.tsx"
  "app/prompt-to-template/page.tsx"
  "app/template-preview-renderer/page.tsx"
  "app/template-favorites/page.tsx"
  "app/admin-template-publishing/page.tsx"
  "app/marketplace-governance/page.tsx"
  "supabase/migrations/0010_premium_template_metadata.sql"
  "supabase/migrations/0011_template_rating_favorite_model.sql"
  "supabase/migrations/0012_admin_template_publishing_flow.sql"
)

for file in "${required[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing: $file"
    exit 1
  fi
  echo "🟢 OK: $file"
done

echo "🟢 Marketplace QA passed for v3.9.0"
