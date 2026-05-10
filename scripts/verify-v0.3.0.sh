#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

LINE="━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "$LINE"
echo "🅰️💥 Verifying AndyAI Visual Studio v0.3.0"
echo "$LINE"

require_file() {
  if [ ! -f "$1" ]; then
    echo "🔴 Missing file: $1"
    exit 1
  fi
  echo "🟢 File OK: $1"
}

require_dir() {
  if [ ! -d "$1" ]; then
    echo "🔴 Missing directory: $1"
    exit 1
  fi
  echo "🟢 Directory OK: $1"
}

require_file package.json
require_file next.config.mjs
require_file tsconfig.json
require_file app/layout.tsx
require_file app/globals.css
require_file app/page.tsx
require_file app/gallery/page.tsx
require_file app/templates/[templateId]/page.tsx
require_file app/tap-editor/page.tsx
require_file app/pricing/page.tsx
require_file app/dashboard/page.tsx
require_file components/Nav.tsx
require_file components/Footer.tsx
require_file components/TemplateGallery.tsx
require_file components/TapEditorShell.tsx
require_file lib/templates.ts
require_file lib/product-flow.ts
require_file docs/FRONTEND_PRODUCT_SHELL_v0.3.0.md
require_file docs/UI_ROUTES_MAP_v0.3.0.md
require_file docs/FRONTEND_COMPONENT_INVENTORY_v0.3.0.md
require_file public/andyai-visual-studio-mark.svg

require_dir app
require_dir components
require_dir lib
require_dir docs
require_dir public

python3 - <<'PY'
import json
from pathlib import Path
json.loads(Path("package.json").read_text())
json.loads(Path("tsconfig.json").read_text())
print("🟢 JSON valid")
PY

grep -q "v0.3.0" README.md
grep -q "Frontend Product Shell" docs/FRONTEND_PRODUCT_SHELL_v0.3.0.md
grep -q "AVS-001" lib/templates.ts
grep -q "TapEditorShell" components/TapEditorShell.tsx

echo "$LINE"
echo "🟢 v0.3.0 verification passed"
