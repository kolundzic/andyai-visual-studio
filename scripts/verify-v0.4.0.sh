#!/usr/bin/env bash
set -euo pipefail

line() { printf '%s\n' "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"; }
ok() { printf '🟢 %s\n' "$1"; }
fail() { printf '🔴 %s\n' "$1"; exit 1; }

line
echo "🅰️💥 Verifying AndyAI Visual Studio v0.4.0"
line

required_files=(
  "supabase/migrations/0001_visual_studio_product_data_layer.sql"
  "supabase/seed.sql"
  "lib/data/types.ts"
  "lib/data/mock-data.ts"
  "lib/data/product-data-adapter.ts"
  "lib/data/local-mock-adapter.ts"
  "lib/data/index.ts"
  "app/data-preview/page.tsx"
  "docs/SUPABASE_PRODUCT_DATA_LAYER_v0.4.0.md"
  "docs/RLS_STARTER_POLICY_v0.4.0.md"
  "docs/DATA_MODEL_MAP_v0.4.0.md"
  "docs/LOCAL_MOCK_ADAPTER_v0.4.0.md"
  "docs/V0_4_0_SUPABASE_DATA_LAYER_RELEASE.md"
)

for file in "${required_files[@]}"; do
  [[ -f "$file" ]] || fail "Missing file: $file"
  ok "File OK: $file"
done

required_dirs=("supabase" "supabase/migrations" "lib/data" "app/data-preview" "docs")
for dir in "${required_dirs[@]}"; do
  [[ -d "$dir" ]] || fail "Missing directory: $dir"
  ok "Directory OK: $dir"
done

sql_file="supabase/migrations/0001_visual_studio_product_data_layer.sql"
grep -q "create table if not exists public.avs_templates" "$sql_file" || fail "SQL missing avs_templates table"
grep -q "create table if not exists public.avs_projects" "$sql_file" || fail "SQL missing avs_projects table"
grep -q "create table if not exists public.avs_exports" "$sql_file" || fail "SQL missing avs_exports table"
grep -q "enable row level security" "$sql_file" || fail "SQL missing RLS enablement"
grep -q "Project owners can read projects" "$sql_file" || fail "SQL missing project owner RLS policy"
grep -q "Export owners can read exports" "$sql_file" || fail "SQL missing export owner RLS policy"
ok "SQL tables and RLS policy checks passed"

grep -q "export const localProductDataAdapter" lib/data/local-mock-adapter.ts || fail "local adapter export missing"
grep -q "getProductDataAdapter" lib/data/index.ts || fail "adapter factory export missing"
grep -q "Data Preview" app/data-preview/page.tsx || fail "data preview page marker missing"
ok "Adapter and preview checks passed"

node -e "JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('🟢 package.json valid')"

line
ok "v0.4.0 verification passed"
