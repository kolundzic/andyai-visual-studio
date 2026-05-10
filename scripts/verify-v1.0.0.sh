#!/usr/bin/env bash
set -euo pipefail

require_file() {
  local file="$1"
  if [ ! -f "$file" ]; then
    echo "🔴 Missing file: $file"
    exit 1
  fi
  echo "🟢 File OK: $file"
}

require_dir() {
  local dir="$1"
  if [ ! -d "$dir" ]; then
    echo "🔴 Missing directory: $dir"
    exit 1
  fi
  echo "🟢 Directory OK: $dir"
}

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 Verifying AndyAI Visual Studio v1.0.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

require_file "app/page.tsx"
require_file "app/demo/page.tsx"
require_file "app/status/page.tsx"
require_file "components/MvpStatusBadge.tsx"
require_file "components/ProductFlowShowcase.tsx"
require_file "lib/demo-content.ts"
require_file "public/andyai-visual-studio-mvp-badge.svg"
require_file "docs/MVP_PRODUCT_LOCK_v1.0.0.md"
require_file "docs/PUBLIC_DEMO_READINESS_CHECKLIST_v1.0.0.md"
require_file "docs/ROUTE_QA_REPORT_v1.0.0.md"
require_file "docs/VERCEL_DEPLOY_CHECKLIST_v1.0.0.md"
require_file "docs/V1_0_0_MVP_PRODUCT_LOCK_RELEASE.md"
require_file "scripts/route-qa-v1.0.0.sh"
require_file "scripts/verify-v1.0.0.sh"
require_file "README.md"
require_file "CHANGELOG.md"
require_file "package.json"

require_dir "app/demo"
require_dir "app/status"
require_dir "components"
require_dir "docs"
require_dir "scripts"
require_dir "public"

bash scripts/route-qa-v1.0.0.sh

grep -q "v1.0.0" README.md || { echo "🔴 README missing v1.0.0 block"; exit 1; }
grep -q "v1.0.0 — MVP Product Lock" CHANGELOG.md || { echo "🔴 CHANGELOG missing v1.0.0 entry"; exit 1; }
grep -q "verify:v1.0.0" package.json || { echo "🔴 package.json missing verify:v1.0.0 script"; exit 1; }
grep -q "route:qa" package.json || { echo "🔴 package.json missing route:qa script"; exit 1; }

python3 - <<'PY'
import json
from pathlib import Path
json.loads(Path('package.json').read_text())
print('🟢 package.json valid')
PY

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🟢 v1.0.0 verification passed"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
