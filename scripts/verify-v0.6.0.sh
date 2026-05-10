#!/usr/bin/env bash
set -euo pipefail

pass(){ echo "🟢 $*"; }
fail(){ echo "🔴 $*"; exit 1; }
line(){ echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"; }

line
echo "🅰️💥 Verifying AndyAI Visual Studio v0.6.0"
line

required_files=(
  ".env.example"
  "package.json"
  "supabase/migrations/0002_visual_studio_auth_workspace.sql"
  "lib/supabase/env.ts"
  "lib/supabase/browser.ts"
  "lib/supabase/server.ts"
  "lib/auth/types.ts"
  "lib/auth/session.ts"
  "lib/auth/redirects.ts"
  "lib/data/user-projects.ts"
  "components/AuthForm.tsx"
  "components/AuthStatus.tsx"
  "components/ProjectWorkspaceShell.tsx"
  "components/Nav.tsx"
  "app/login/page.tsx"
  "app/auth/callback/route.ts"
  "app/auth/sign-out/route.ts"
  "app/dashboard/page.tsx"
  "app/projects/page.tsx"
  "app/projects/[projectId]/page.tsx"
  "docs/AUTH_USER_PROJECT_WORKSPACE_v0.6.0.md"
  "docs/AUTH_FLOW_MAP_v0.6.0.md"
  "docs/USER_PROJECT_OWNERSHIP_v0.6.0.md"
  "docs/PROTECTED_DASHBOARD_MODEL_v0.6.0.md"
  "docs/V0_6_0_AUTH_WORKSPACE_RELEASE.md"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || fail "Missing file: $file"
  pass "File OK: $file"
done

required_dirs=(
  "app/login"
  "app/auth/callback"
  "app/auth/sign-out"
  "app/projects"
  "app/projects/[projectId]"
  "lib/auth"
  "lib/supabase"
  "lib/data"
  "docs"
)

for dir in "${required_dirs[@]}"; do
  [ -d "$dir" ] || fail "Missing directory: $dir"
  pass "Directory OK: $dir"
done

node -e "const p=require('./package.json'); if(!p.dependencies || !p.dependencies['@supabase/supabase-js'] || !p.dependencies['@supabase/ssr']) process.exit(1)" || fail "package.json missing Supabase auth dependencies"
pass "package.json includes Supabase auth dependencies"

grep -q "NEXT_PUBLIC_SITE_URL" .env.example || fail ".env.example missing NEXT_PUBLIC_SITE_URL"
grep -q "AVS_AUTH_REDIRECT_PATH" .env.example || fail ".env.example missing AVS_AUTH_REDIRECT_PATH"
pass ".env.example auth keys present"

grep -q "createServerSupabaseAuthClient" lib/supabase/server.ts || fail "server auth client missing"
grep -q "signInWithOtp" components/AuthForm.tsx || fail "magic link sign-in missing"
grep -q "exchangeCodeForSession" app/auth/callback/route.ts || fail "auth callback exchange missing"
grep -q "owner_id = auth.uid()" supabase/migrations/0002_visual_studio_auth_workspace.sql || fail "owner RLS rule missing"
grep -q "listWorkspaceProjects" lib/data/user-projects.ts || fail "workspace project loader missing"
grep -q "Protected dashboard model" app/dashboard/page.tsx || fail "dashboard protected model text missing"
pass "Auth and workspace checks passed"

node -e "JSON.parse(require('fs').readFileSync('package.json','utf8'))" || fail "package.json invalid"
pass "package.json valid"

line
pass "v0.6.0 verification passed"
