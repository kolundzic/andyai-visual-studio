set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Route QA v5.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

routes=(
  "app/ai-prompt-assistant/page.tsx"
  "app/template-customization-wizard/page.tsx"
  "app/svg-artifact-generator/page.tsx"
  "app/html-export/page.tsx"
  "app/readme-visual-pack/page.tsx"
  "app/diagram-pack-generator/page.tsx"
  "app/artifact-bundle/page.tsx"
  "app/evidence-metadata/page.tsx"
  "app/artifact-qa-inspector/page.tsx"
  "app/artifact-factory-lock/page.tsx"
)

for route in "${routes[@]}"; do
  if [ ! -f "$route" ]; then
    echo "🔴 Missing route: $route"
    exit 1
  fi
  echo "🟢 Route OK: $route"
done

echo "🟢 Route QA passed for v5.0.0"
