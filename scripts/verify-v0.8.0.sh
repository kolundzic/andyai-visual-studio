#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 Verifying AndyAI Visual Studio v0.8.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required_files=(
  "app/actions/export-actions.ts"
  "components/CopyPromptButton.tsx"
  "components/PromptExportPanel.tsx"
  "components/ProjectExportHistory.tsx"
  "app/projects/[projectId]/page.tsx"
  "app/projects/[projectId]/exports/page.tsx"
  "app/exports/page.tsx"
  "app/data-preview/page.tsx"
  "lib/data/types.ts"
  "lib/data/local-mock-adapter.ts"
  "lib/data/supabase-adapter.ts"
  "supabase/migrations/0004_prompt_export_copy_workflow.sql"
  "docs/PROMPT_EXPORT_COPY_WORKFLOW_v0.8.0.md"
  "docs/EXPORT_HISTORY_CONTRACT_v0.8.0.md"
  "docs/PROJECT_EXPORT_PREVIEW_v0.8.0.md"
  "docs/V0_8_0_PROMPT_EXPORT_COPY_WORKFLOW_RELEASE.md"
  "package.json"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing file: $file"
    exit 1
  fi
  echo "🟢 File OK: $file"
done

required_dirs=(
  "app/actions"
  "app/exports"
  "app/projects/[projectId]/exports"
  "components"
  "lib/data"
  "docs"
  "supabase/migrations"
)

for dir in "${required_dirs[@]}"; do
  if [ ! -d "$dir" ]; then
    echo "🔴 Missing directory: $dir"
    exit 1
  fi
  echo "🟢 Directory OK: $dir"
done

grep -q "createPromptExportAction" app/actions/export-actions.ts
grep -q "navigator.clipboard.writeText" components/CopyPromptButton.tsx
grep -q "PromptExportPanel" app/projects/'[projectId]'/page.tsx
grep -q "ProjectExportHistory" app/projects/'[projectId]'/page.tsx
grep -q "createPromptExport" lib/data/types.ts
grep -q "listProjectExports" lib/data/types.ts
grep -q "createPromptExport" lib/data/local-mock-adapter.ts
grep -q "createPromptExport" lib/data/supabase-adapter.ts
grep -q "prompt_snapshot" supabase/migrations/0004_prompt_export_copy_workflow.sql
grep -q "avs_exports" supabase/migrations/0004_prompt_export_copy_workflow.sql
grep -q "Prompt Export" docs/PROMPT_EXPORT_COPY_WORKFLOW_v0.8.0.md

echo "🟢 Prompt export and copy workflow checks passed"

node -e "JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('🟢 package.json valid')"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🟢 v0.8.0 verification passed"
