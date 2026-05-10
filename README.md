# 🅰️💥 AndyAI Visual Studio

**Status:** CANONICAL / ACTIVE  
**Repo:** `andyai-visual-studio`  
**Version:** `v0.3.0`  
**Layer:** Public SaaS / Commercial AI Visual Template Studio  
**Stack:** Next.js + Vercel + Supabase-ready, Stripe later  
**Operating Standard:** TAP-TAP + SEMAFOR  
**Canon Rule:** Downloads je magacin. Repo folder je radionica.

━━━━━━━━━━━━━━━━━━━━

## 1. Product Definition

AndyAI Visual Studio is the commercial SaaS layer built on top of the AndyAI visual ecosystem:

- `andyai-visual-template-system`
- `andyai-visual-canon`
- `andyai-visual-factory`
- `andyai-visual-artifact-stack`

It turns reusable visual templates into editable TAP workflows, prompt exports, product visuals, evidence cards, diagrams, gallery previews, and future paid production systems.

Core formula:

**Visual Template enters → Human edits → TAP Editor structures → Prompt exports → SaaS monetizes → Evidence proves value**

━━━━━━━━━━━━━━━━━━━━

## 2. v0.3.0 Frontend Product Shell

This version introduces the first real frontend product skeleton:

- Landing page
- Gallery page
- Template detail page
- TAP Editor skeleton
- Pricing page
- Dashboard skeleton
- Seed template catalog
- Search/filter-ready gallery component
- Prompt export preview component
- CSS visual identity layer
- Verification script

━━━━━━━━━━━━━━━━━━━━

## 3. Local Commands

```bash
npm install
npm run dev
npm run verify:v0.3.0
npm run build
```

━━━━━━━━━━━━━━━━━━━━

## 4. Route Map

| Route | Purpose |
|---|---|
| `/` | Landing page and canonical product flow |
| `/gallery` | Browse templates by ID, category, keyword, and use case |
| `/templates/[templateId]` | Template detail and TAP Editor entry point |
| `/tap-editor` | Editable prompt/workflow shell |
| `/pricing` | Commercial plan skeleton |
| `/dashboard` | Future user workspace skeleton |

━━━━━━━━━━━━━━━━━━━━

## 5. Current Roadmap

| Version | Layer |
|---|---|
| `v0.1.0` | Initial SaaS scaffold |
| `v0.2.0` | Product Foundation Pack |
| `v0.3.0` | Frontend Product Shell |
| `v0.4.0` | Supabase Catalog Wiring |
| `v0.5.0` | Auth + Saved Projects |
| `v0.6.0` | Export Engine |
| `v0.7.0` | Stripe Pricing Gate |
| `v1.0.0` | Public MVP Candidate |

━━━━━━━━━━━━━━━━━━━━

## 6. Attribution

**AndyAI — Canonical platform, system direction, and brand layer**  
**Founder:** AndyAI Andrija (Andy) Kolundzic  
**CEO and Owner, Japan IT Business, Tokyo, Japan**

---

## v0.4.0 Supabase Product Data Layer

AndyAI Visual Studio now includes its first product data foundation:

- `avs_templates`
- `avs_projects`
- `avs_exports`
- starter Supabase migration
- starter seed data
- RLS documentation
- TypeScript data contracts
- local mock adapter
- `/data-preview` route

Canonical rule:

> Template is reusable. Project is personal. Export is evidence/output.

## v0.5.0 — Live Supabase Client Wiring

v0.5.0 connects AndyAI Visual Studio to a live Supabase-ready product data layer while keeping safe local mock fallback behavior. Gallery, template detail, TAP Editor, and data preview routes now read through one adapter boundary.
