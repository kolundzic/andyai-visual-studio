#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="andyai-visual-studio"
EXPECTED_REMOTE_FRAGMENT="github.com/kolundzic/andyai-visual-studio"

fail() { printf '🔴 %s\n' "$1" >&2; exit 1; }
ok() { printf '🟢 %s\n' "$1"; }

[[ "$(basename "$PWD")" == "$REPO_NAME" ]] || fail "Wrong folder: expected ${REPO_NAME}, got $(basename "$PWD")"
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || fail "Not inside git repo"
REMOTE_URL="$(git remote get-url origin 2>/dev/null || true)"
[[ "$REMOTE_URL" == *"$EXPECTED_REMOTE_FRAGMENT"* ]] || fail "Wrong remote: $REMOTE_URL"

required_files=(
  "README.md"
  "docs/product/PRODUCT_SPEC.md"
  "docs/product/GALLERY_SPEC.md"
  "docs/product/TAP_EDITOR_SPEC.md"
  "docs/product/SUPABASE_SCHEMA.md"
  "docs/product/PRICING_MODEL.md"
  "docs/product/ROADMAP.md"
  "docs/product/CHANGELOG.md"
  "docs/product/VERIFY.md"
  "docs/governance/SEMAFOR.md"
  "docs/architecture/ARCHITECTURE.md"
  "docs/diagrams/visual-studio-flow.mmd"
  "data/templates/starter-templates.json"
  "public/brand/andyai-visual-studio-mark.svg"
)

for file in "${required_files[@]}"; do
  [[ -f "$file" ]] || fail "Missing required file: $file"
done

# JSON validation when node is available, otherwise skip softly.
if command -v node >/dev/null 2>&1; then
  node -e "JSON.parse(require('fs').readFileSync('data/templates/starter-templates.json','utf8'));" || fail "Invalid JSON: data/templates/starter-templates.json"
  ok "Starter template JSON valid"
else
  printf '🟠 Node not found; skipped JSON validation\n'
fi

ok "Repo identity verified"
ok "Required v0.2.0 files present"
printf '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'
printf '🟢 v0.2.0 verification passed\n'
