set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 Verifying AndyAI Visual Studio v5.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required=(
  "components/AiPromptAssistantShell.tsx"
  "components/TemplateCustomizationWizard.tsx"
  "components/SvgArtifactGeneratorPanel.tsx"
  "components/HtmlExportPreview.tsx"
  "components/ReadmeVisualPackExport.tsx"
  "components/DiagramPackGenerator.tsx"
  "components/ArtifactBundleZipPanel.tsx"
  "components/EvidenceMetadataPanel.tsx"
  "components/ArtifactQaInspector.tsx"
  "components/ArtifactFactoryLockBadge.tsx"
  "lib/ai-prompt-assistant.ts"
  "lib/template-customization-wizard.ts"
  "lib/svg-artifact-generator.ts"
  "lib/html-export.ts"
  "lib/readme-visual-pack.ts"
  "lib/diagram-pack-generator.ts"
  "lib/artifact-bundle.ts"
  "lib/evidence-metadata.ts"
  "lib/artifact-qa-inspector.ts"
  "supabase/migrations/0013_artifact_evidence_metadata.sql"
  "docs/ANDYAI_VISUAL_ARTIFACT_FACTORY_LOCK_v5.0.0.md"
  "docs/MASTER_UDARAC_v4.1.0_to_v5.0.0.md"
  "scripts/artifact-qa-v4.9.0.sh"
  "scripts/route-qa-v5.0.0.sh"
)

for item in "${required[@]}"; do
  if [ ! -f "$item" ]; then
    echo "🔴 Missing: $item"
    exit 1
  fi
  echo "🟢 File OK: $item"
done

./scripts/artifact-qa-v4.9.0.sh
./scripts/route-qa-v5.0.0.sh

python3 -m json.tool package.json >/dev/null
echo "🟢 package.json valid"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🟢 v5.0.0 verification passed"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
