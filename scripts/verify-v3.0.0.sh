#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 Verifying AndyAI Visual Studio v3.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required_files=(
  "supabase/migrations/0006_production_schema_hardening.sql"
  "supabase/migrations/0007_versioned_artifact_history.sql"
  "supabase/migrations/0008_account_profile_preferences.sql"
  "supabase/migrations/0009_beta_feedback_layer.sql"
  "components/AuthSessionPanel.tsx"
  "components/WorkspaceDashboardV2.tsx"
  "components/UsagePlanGateCard.tsx"
  "components/BetaFeedbackPanel.tsx"
  "components/CommercialFoundationBadge.tsx"
  "app/commercial-foundation/page.tsx"
  "docs/COMMERCIAL_SAAS_FOUNDATION_LOCK_v3.0.0.md"
  "docs/MASTER_UDARAC_v2.1.0_to_v3.0.0.md"
  "scripts/route-qa-v3.0.0.sh"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing file: $file"
    exit 1
  fi
  echo "🟢 File OK: $file"
done

./scripts/route-qa-v3.0.0.sh

node -e "JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('🟢 package.json valid')"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🟢 v3.0.0 verification passed"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
