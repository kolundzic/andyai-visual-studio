#!/usr/bin/env bash
set -euo pipefail
line() { echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"; }
line
echo "🅰️💥 AndyAI Visual Studio — Route QA v7.0.0"
line
routes=(
  app/visual-canon-sync/page.tsx
  app/visual-factory-bridge/page.tsx
  app/animator-handoff/page.tsx
  app/knowledge-visual-pack/page.tsx
  app/director-brief-export/page.tsx
  app/tapforge-governance/page.tsx
  app/repo-readme-visual-pack/page.tsx
  app/multi-project-visual-library/page.tsx
  app/ecosystem-crosslinking/page.tsx
  app/visual-ecosystem-lock/page.tsx
)
for route in "${routes[@]}"; do
  if [[ ! -f "$route" ]]; then
    echo "🔴 Missing route: $route"
    exit 1
  fi
  echo "🟢 Route OK: $route"
done
echo "🟢 Route QA passed for v7.0.0"
