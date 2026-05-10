#!/usr/bin/env bash
set -euo pipefail
line() { echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"; }
line
echo "🅰️💥 AndyAI Visual Studio — Ecosystem QA v6.9.0"
line
files=(
  app/visual-canon-sync/page.tsx
  app/visual-factory-bridge/page.tsx
  app/animator-handoff/page.tsx
  app/knowledge-visual-pack/page.tsx
  app/director-brief-export/page.tsx
  app/tapforge-governance/page.tsx
  app/repo-readme-visual-pack/page.tsx
  app/multi-project-visual-library/page.tsx
  app/ecosystem-crosslinking/page.tsx
)
for file in "${files[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "🔴 Missing: $file"
    exit 1
  fi
  echo "🟢 OK: $file"
done
echo "🟢 Ecosystem QA passed for v6.9.0"
