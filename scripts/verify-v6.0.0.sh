#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 Verifying AndyAI Visual Studio v6.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required=(
  "components/ClientWorkspaceModel.tsx"
  "components/TeamSharingPanel.tsx"
  "components/PublicShareLinkPanel.tsx"
  "components/ClientReviewMode.tsx"
  "components/VisualArtifactApprovalGate.tsx"
  "components/AgencyTemplatePackPanel.tsx"
  "components/BrandKitProfilePanel.tsx"
  "components/ClientDeliveryPackagePanel.tsx"
  "components/AgencyDashboardQaPanel.tsx"
  "components/AgencyVisualStudioLockBadge.tsx"
  "lib/client-workspace.ts"
  "lib/team-sharing.ts"
  "lib/public-share-links.ts"
  "lib/client-review.ts"
  "lib/artifact-approval-gate.ts"
  "lib/agency-templates.ts"
  "lib/brand-kit-profiles.ts"
  "lib/client-delivery-package.ts"
  "lib/agency-dashboard-qa.ts"
  "supabase/migrations/0014_client_workspace_model.sql"
  "supabase/migrations/0015_team_project_sharing.sql"
  "supabase/migrations/0016_public_share_links.sql"
  "supabase/migrations/0017_client_review_mode.sql"
  "supabase/migrations/0018_visual_artifact_approval_gate.sql"
  "supabase/migrations/0019_brand_kit_profiles.sql"
  "supabase/migrations/0020_client_delivery_package.sql"
  "docs/AGENCY_VISUAL_STUDIO_LOCK_v6.0.0.md"
  "docs/MASTER_UDARAC_v5.1.0_to_v6.0.0.md"
  "scripts/agency-dashboard-qa-v5.9.0.sh"
  "scripts/route-qa-v6.0.0.sh"
)

for file in "${required[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "🔴 Missing: $file"
    exit 1
  fi
  echo "🟢 File OK: $file"
done

./scripts/agency-dashboard-qa-v5.9.0.sh
./scripts/route-qa-v6.0.0.sh

python3 -m json.tool package.json >/dev/null
echo "🟢 package.json valid"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🟢 v6.0.0 verification passed"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
