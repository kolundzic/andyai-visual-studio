#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️💥 Verifying AndyAI Visual Studio v0.9.0"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required_files=(
  "lib/export-package.ts"
  "components/ExportDownloadButton.tsx"
  "components/ProjectArtifactPackagePreview.tsx"
  "app/projects/[projectId]/page.tsx"
  "app/projects/[projectId]/exports/page.tsx"
  "app/projects/[projectId]/package/page.tsx"
  "app/exports/page.tsx"
  "supabase/migrations/0005_export_download_artifact_package.sql"
  "docs/EXPORT_DOWNLOAD_ARTIFACT_PACKAGE_v0.9.0.md"
  "docs/EXPORT_FORMAT_CONTRACT_v0.9.0.md"
  "docs/PROJECT_ARTIFACT_PACKAGE_PREVIEW_v0.9.0.md"
  "docs/V0_9_0_EXPORT_DOWNLOAD_ARTIFACT_PACKAGE_RELEASE.md"
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
  "app/projects/[projectId]/package"
  "components"
  "lib"
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

grep -q "buildProjectArtifactFiles" lib/export-package.ts
grep -q "renderPromptTxt" lib/export-package.ts
grep -q "renderPromptMarkdown" lib/export-package.ts
grep -q "renderPromptJson" lib/export-package.ts
grep -q "URL.createObjectURL" components/ExportDownloadButton.tsx
grep -q "ProjectArtifactPackagePreview" components/ProjectArtifactPackagePreview.tsx
grep -q "ProjectArtifactPackagePreview" app/projects/'[projectId]'/page.tsx
grep -q "Package preview" app/projects/'[projectId]'/exports/page.tsx
grep -q "buildSingleExportFiles" app/projects/'[projectId]'/exports/page.tsx
grep -q "download_format" supabase/migrations/0005_export_download_artifact_package.sql
grep -q "artifact_metadata" supabase/migrations/0005_export_download_artifact_package.sql
grep -q "Export Download" docs/EXPORT_DOWNLOAD_ARTIFACT_PACKAGE_v0.9.0.md

echo "🟢 Export download and artifact package checks passed"

node -e "JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('🟢 package.json valid')"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🟢 v0.9.0 verification passed"
