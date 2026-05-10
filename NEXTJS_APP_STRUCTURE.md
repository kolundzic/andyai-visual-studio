# Next.js App Structure — AndyAI Visual Studio v0.1

```text
app/
  page.tsx
  gallery/page.tsx
  templates/[slug]/page.tsx
  tap/[templateId]/page.tsx
  pricing/page.tsx
  dashboard/page.tsx

components/
  Hero.tsx
  TemplateCard.tsx
  GalleryFilters.tsx
  TapEditor.tsx
  StyleFamilyBadge.tsx
  PricingSection.tsx
  ProofStrip.tsx

lib/
  templates.ts
  supabase.ts
  prompt-builder.ts
  pricing.ts
  filters.ts

data/
  seed-templates.json
  seed-style-families.json

scripts/
  verify_v0_1.sh
  import_templates.ts
```
