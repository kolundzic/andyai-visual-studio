set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Artifact QA v4.9.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required=(
  "app/ai-prompt-assistant/page.tsx"
  "app/template-customization-wizard/page.tsx"
  "app/svg-artifact-generator/page.tsx"
  "app/html-export/page.tsx"
  "app/readme-visual-pack/page.tsx"
  "app/diagram-pack-generator/page.tsx"
  "app/artifact-bundle/page.tsx"
  "app/evidence-metadata/page.tsx"
  "app/artifact-qa-inspector/page.tsx"
  "supabase/migrations/0013_artifact_evidence_metadata.sql"
)

for item in "${required[@]}"; do
  if [ ! -f "$item" ]; then
    echo "🔴 Missing: $item"
    exit 1
  fi
  echo "🟢 OK: $item"
done

echo "🟢 Artifact QA passed for v4.9.0"
