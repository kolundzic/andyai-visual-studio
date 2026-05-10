#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 AndyAI Visual Studio — Production Smoke v1.1.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

[ -f vercel.json ] || { echo "🔴 Missing vercel.json"; exit 1; }
[ -f app/production-smoke/page.tsx ] || { echo "🔴 Missing app/production-smoke/page.tsx"; exit 1; }
[ -f docs/VERCEL_ENV_CHECKLIST_v1.1.0.md ] || { echo "🔴 Missing env checklist"; exit 1; }
[ -f docs/VERCEL_DEPLOY_PROOF_GUIDE_v1.1.0.md ] || { echo "🔴 Missing deploy proof guide"; exit 1; }

grep -q '"framework": "nextjs"' vercel.json || { echo "🔴 vercel.json missing Next.js framework preset"; exit 1; }
grep -q 'Production Smoke Route' app/production-smoke/page.tsx || { echo "🔴 Production smoke route missing proof title"; exit 1; }
grep -q 'NEXT_PUBLIC_SUPABASE_URL' docs/VERCEL_ENV_CHECKLIST_v1.1.0.md || { echo "🔴 Env checklist missing Supabase URL"; exit 1; }
grep -q '/production-smoke' docs/VERCEL_DEPLOY_PROOF_GUIDE_v1.1.0.md || { echo "🔴 Deploy proof guide missing smoke route"; exit 1; }

echo "🟢 Production smoke checks passed for v1.1.0"
