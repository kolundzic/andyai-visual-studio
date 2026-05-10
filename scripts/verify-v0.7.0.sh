#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 Verifying AndyAI Visual Studio v0.7.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required_files=(
  "app/actions/project-actions.ts"
  "components/ProjectCreateForm.tsx"
  "components/TemplateGallery.tsx"
  "app/gallery/page.tsx"
  "app/templates/[templateId]/page.tsx"
  "app/tap-editor/page.tsx"
  "app/projects/page.tsx"
  "app/projects/[projectId]/page.tsx"
  "app/dashboard/page.tsx"
  "app/data-preview/page.tsx"
  "lib/data/types.ts"
  "lib/data/mock-data.ts"
  "lib/data/local-mock-adapter.ts"
  "lib/data/supabase-adapter.ts"
  "lib/data/index.ts"
  "lib/supabase/env.ts"
  "lib/supabase/server.ts"
  "lib/supabase/browser.ts"
  "supabase/migrations/0003_template_save_project_creation_flow.sql"
  "docs/TEMPLATE_SAVE_PROJECT_CREATION_FLOW_v0.7.0.md"
  "docs/PROJECT_WORKSPACE_FLOW_v0.7.0.md"
  "docs/PROJECT_CREATION_DATA_CONTRACT_v0.7.0.md"
  "docs/V0_7_0_TEMPLATE_SAVE_PROJECT_CREATION_FLOW_RELEASE.md"
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
  "app/projects"
  "app/projects/[projectId]"
  "app/tap-editor"
  "components"
  "lib/data"
  "lib/supabase"
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

grep -q "createProjectFromTemplateAction" app/actions/project-actions.ts
grep -q "ProjectCreateForm" components/ProjectCreateForm.tsx
grep -q "createProjectFromTemplate" lib/data/types.ts
grep -q "createProjectFromTemplate" lib/data/local-mock-adapter.ts
grep -q "createProjectFromTemplate" lib/data/supabase-adapter.ts
grep -q "tap_prompt" supabase/migrations/0003_template_save_project_creation_flow.sql
grep -q "input_snapshot" supabase/migrations/0003_template_save_project_creation_flow.sql
grep -q "output_snapshot" supabase/migrations/0003_template_save_project_creation_flow.sql
grep -q "/projects/" app/actions/project-actions.ts

echo "🟢 Project creation flow checks passed"

node -e "JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('🟢 package.json valid')"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🟢 v0.7.0 verification passed"
