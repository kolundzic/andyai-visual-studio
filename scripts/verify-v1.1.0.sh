#!/usr/bin/env bash
set -euo pipefail

line() {
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
}

check_file() {
  if [ -f "$1" ]; then
    echo "🟢 File OK: $1"
  else
    echo "🔴 Missing file: $1"
    exit 1
  fi
}

check_dir() {
  if [ -d "$1" ]; then
    echo "🟢 Directory OK: $1"
  else
    echo "🔴 Missing directory: $1"
    exit 1
  fi
}

line
echo "🅰️💥 Verifying AndyAI Visual Studio v1.1.0"
line

check_file vercel.json
check_file app/production-smoke/page.tsx
check_file docs/VERCEL_PRODUCTION_DEPLOY_PACK_v1.1.0.md
check_file docs/VERCEL_ENV_CHECKLIST_v1.1.0.md
check_file docs/VERCEL_DEPLOY_PROOF_GUIDE_v1.1.0.md
check_file docs/VERCEL_DEPLOY_RUNBOOK_v1.1.0.md
check_file docs/V1_1_0_VERCEL_PRODUCTION_DEPLOY_PACK_RELEASE.md
check_file scripts/production-smoke-v1.1.0.sh
check_file scripts/verify-v1.1.0.sh
check_file README.md
check_file CHANGELOG.md
check_file package.json
check_dir app/production-smoke
check_dir docs
check_dir scripts

node -e "JSON.parse(require('fs').readFileSync('vercel.json','utf8')); JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('🟢 JSON valid')"

grep -q '"framework": "nextjs"' vercel.json || { echo "🔴 vercel.json missing Next.js framework preset"; exit 1; }
grep -q '"buildCommand": "npm run build"' vercel.json || { echo "🔴 vercel.json missing build command"; exit 1; }
grep -q 'Production Smoke Route' app/production-smoke/page.tsx || { echo "🔴 Production smoke route missing proof title"; exit 1; }
grep -q 'Vercel Production Deploy Pack' docs/VERCEL_PRODUCTION_DEPLOY_PACK_v1.1.0.md || { echo "🔴 Deploy pack docs missing release title"; exit 1; }
grep -q 'NEXT_PUBLIC_SUPABASE_ANON_KEY' docs/VERCEL_ENV_CHECKLIST_v1.1.0.md || { echo "🔴 Env checklist missing anon key"; exit 1; }
grep -q 'v1.1.0' CHANGELOG.md || { echo "🔴 CHANGELOG missing v1.1.0"; exit 1; }
grep -q 'v1.1.0' README.md || { echo "🔴 README missing v1.1.0"; exit 1; }

bash scripts/production-smoke-v1.1.0.sh

line
echo "🟢 v1.1.0 verification passed"
line
