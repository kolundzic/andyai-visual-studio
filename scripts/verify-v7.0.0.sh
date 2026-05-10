#!/usr/bin/env bash
set -euo pipefail
line() { echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"; }
line
echo "🅰️💥 Verifying AndyAI Visual Studio v7.0.0"
line
files=(
  components/VisualCanonSyncPanel.tsx
  components/VisualFactoryExportBridge.tsx
  components/AnimatorStudioHandoffSpec.tsx
  components/KnowledgeFactoryVisualPackExport.tsx
  components/DirectorProjectBriefExport.tsx
  components/TapforgeGovernanceMetadata.tsx
  components/RepoReadmeVisualPackGenerator.tsx
  components/MultiProjectVisualLibrary.tsx
  components/EcosystemCrosslinkingQa.tsx
  components/AndyAiVisualEcosystemLockBadge.tsx
  lib/visual-canon-sync.ts
  lib/visual-factory-bridge.ts
  lib/animator-handoff.ts
  lib/knowledge-visual-pack.ts
  lib/director-brief-export.ts
  lib/tapforge-governance.ts
  lib/repo-readme-visual-pack.ts
  lib/multi-project-visual-library.ts
  lib/ecosystem-crosslinking.ts
  lib/visual-ecosystem-lock.ts
  docs/ANDYAI_VISUAL_ECOSYSTEM_LOCK_v7.0.0.md
  docs/MASTER_UDARAC_v6.1.0_to_v7.0.0.md
  scripts/ecosystem-qa-v6.9.0.sh
  scripts/route-qa-v7.0.0.sh
)
for file in "${files[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "🔴 Missing: $file"
    exit 1
  fi
  echo "🟢 File OK: $file"
done
./scripts/ecosystem-qa-v6.9.0.sh
./scripts/route-qa-v7.0.0.sh
python3 -m json.tool package.json >/dev/null
echo "🟢 package.json valid"
line
echo "🟢 v7.0.0 verification passed"
line
