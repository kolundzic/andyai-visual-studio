#!/usr/bin/env bash
set -euo pipefail

echo "🔵 Verifying AndyAI Visual Studio v0.1.0..."
required=(
  README.md
  PRODUCT_BRIEF.md
  SAAS_ARCHITECTURE.md
  DATABASE_SCHEMA.md
  LANDING_PAGE_COPY.md
  GALLERY_SPEC.md
  TAP_EDITOR_SPEC.md
  PRICING_MODEL.md
  NEXTJS_APP_STRUCTURE.md
  TAP_TAP_SEMAFOR_STANDARD.md
  package.json
  app/page.tsx
  app/gallery/page.tsx
  app/templates/[slug]/page.tsx
  app/tap/[templateId]/page.tsx
  lib/templates.ts
  lib/prompt-builder.ts
)
for f in "${required[@]}"; do
  if [[ ! -f "$f" ]]; then
    echo "🔴 Missing required file: $f"
    exit 1
  fi
done

echo "🟢 v0.1.0 scaffold verification passed."
