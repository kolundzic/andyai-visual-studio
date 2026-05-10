#!/usr/bin/env bash
set -euo pipefail

pass(){ echo "🟢 $*"; }
fail(){ echo "🔴 $*"; exit 1; }
line(){ echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"; }

line
echo "🅰️💥 Verifying AndyAI Visual Studio v0.5.0"
line

required_files=(
  ".env.example"
  "package.json"
  "lib/supabase/env.ts"
  "lib/supabase/browser.ts"
  "lib/supabase/server.ts"
  "lib/data/types.ts"
  "lib/data/mock-data.ts"
  "lib/data/local-mock-adapter.ts"
  "lib/data/supabase-adapter.ts"
  "lib/data/index.ts"
  "app/gallery/page.tsx"
  "app/templates/[templateId]/page.tsx"
  "app/tap-editor/page.tsx"
  "app/data-preview/page.tsx"
  "components/TemplateGallery.tsx"
  "components/TapEditorShell.tsx"
  "docs/LIVE_SUPABASE_CLIENT_WIRING_v0.5.0.md"
  "docs/ENVIRONMENT_SETUP_v0.5.0.md"
  "docs/DATA_ADAPTER_SWITCH_v0.5.0.md"
  "docs/V0_5_0_LIVE_SUPABASE_CLIENT_WIRING_RELEASE.md"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || fail "Missing file: $file"
  pass "File OK: $file"
done

required_dirs=(
  "lib/supabase"
  "lib/data"
  "app/gallery"
  "app/templates/[templateId]"
  "app/tap-editor"
  "app/data-preview"
  "docs"
)

for dir in "${required_dirs[@]}"; do
  [ -d "$dir" ] || fail "Missing directory: $dir"
  pass "Directory OK: $dir"
done

node -e "const p=require('./package.json'); if(!p.dependencies || !p.dependencies['@supabase/supabase-js']) process.exit(1);" \
  && pass "package.json includes @supabase/supabase-js" \
  || fail "package.json missing @supabase/supabase-js dependency"

grep -q "NEXT_PUBLIC_SUPABASE_URL" .env.example || fail ".env.example missing NEXT_PUBLIC_SUPABASE_URL"
grep -q "NEXT_PUBLIC_SUPABASE_ANON_KEY" .env.example || fail ".env.example missing NEXT_PUBLIC_SUPABASE_ANON_KEY"
grep -q "AVS_DATA_MODE" .env.example || fail ".env.example missing AVS_DATA_MODE"
pass ".env.example keys present"

grep -q "createClient" lib/supabase/browser.ts || fail "browser client missing createClient"
grep -q "createClient" lib/supabase/server.ts || fail "server client missing createClient"
grep -q "avs_templates" lib/data/supabase-adapter.ts || fail "Supabase adapter missing avs_templates query"
grep -q "supabase-fallback" lib/data/index.ts || fail "Data switch missing fallback status"
grep -q "listTemplatesWithSource" app/gallery/page.tsx || fail "Gallery route not wired to data adapter"
grep -q "getTemplateWithSource" app/templates/[templateId]/page.tsx || fail "Template detail route not wired to data adapter"
grep -q "listTemplatesWithSource" app/tap-editor/page.tsx || fail "TAP Editor route not wired to data adapter"
pass "Live data wiring checks passed"

node -e "JSON.parse(require('fs').readFileSync('package.json','utf8'));" && pass "package.json valid"

line
pass "v0.5.0 verification passed"
