# Changelog

All notable changes to AndyAI Visual Studio will be documented in this file.

## v0.4.0 — Supabase Product Data Layer

- Added Supabase product data migration for `avs_templates`, `avs_projects`, and `avs_exports`.
- Added starter seed data for template/product previews.
- Added starter RLS policy documentation.
- Added local mock adapter for frontend development before live Supabase wiring.
- Added `/data-preview` route for inspecting product data flow.
- Added v0.4.0 documentation and verification script.

## v0.5.0 — Live Supabase Client Wiring

- Added `.env.example` for mock and live Supabase modes.
- Added Supabase browser/server client helpers.
- Added Supabase adapter for `avs_templates`.
- Added adapter switch with safe fallback to local mock data.
- Wired Gallery, Template Detail, TAP Editor, and Data Preview routes to the data adapter.
- Added v0.5.0 documentation and verifier.

## v0.6.0 — Supabase Auth & User Project Workspace

- Added login-ready Supabase Auth architecture.
- Added auth callback and sign-out routes.
- Added protected dashboard model.
- Added user-owned projects route and project detail route.
- Added owner-scoped workspace project adapter.
- Added starter RLS migration for project and export ownership.
- Added auth and workspace documentation.

## v0.7.0 — Template Save & Project Creation Flow

- Added create-project-from-template flow.
- Added editable TAP prompt save form.
- Added project detail preview route.
- Added workspace project list refresh model.
- Added local mock and Supabase adapter methods for project creation.
- Added project prompt snapshot migration.
- Added v0.7.0 docs and verifier.

## v0.8.0 — Prompt Export & Copy Workflow

- Added copy-to-clipboard prompt workflow.
- Added prompt export server action.
- Added project export panel and export history component.
- Added `/exports` and `/projects/[projectId]/exports` routes.
- Added local mock and Supabase export creation adapter methods.
- Added prompt snapshot migration for `avs_exports`.
- Added export visibility to `/data-preview`.
- Added v0.8.0 docs and verifier.

## v0.9.0 — Export Download & Artifact Package Layer

- Added TXT, Markdown, and JSON download generation for project artifacts.
- Added export metadata and package manifest builder.
- Added project artifact package preview component.
- Added `/projects/[projectId]/package` route.
- Added download buttons to project export preview.
- Added package preview links from project and exports pages.
- Added Supabase migration for download format and artifact metadata.
- Added v0.9.0 docs and verifier.

## v1.0.0 — MVP Product Lock

- Polished the public home page for MVP positioning.
- Added `/demo` public demo route.
- Added `/status` MVP status route.
- Added MVP status badge component and public SVG badge.
- Added product/demo content module.
- Added route QA script and v1.0.0 verifier.
- Added public demo readiness, route QA, and Vercel deploy documentation.
- Added README launch pass block.

## v1.1.0 — Vercel Production Deploy Pack

- Added `vercel.json` for explicit Next.js deployment configuration.
- Added `/production-smoke` route for public deployment proof.
- Added Vercel environment checklist, deploy runbook, and deploy proof guide.
- Added production smoke and v1.1.0 verification scripts.
- Added public deployment readiness docs after the v1.0.0 MVP lock.

## v1.2.0 — Public Demo Content Expansion

- Added  route.
- Added structured public demo content scenarios.
- Added founder, agency, and educator demo flows.

## v1.3.0 — UX Polish & Navigation Hardening

- Added  route.
- Added navigation proof component for public MVP QA.
- Documented core user path hardening.

## v1.4.0 — Template Catalog Expansion Pack

- Added beta-oriented template catalog structure.
- Added  route.
- Added template metadata for categories, audiences, formats, and beta readiness.

## v1.5.0 — Public Launch README + Partner Page

- Added  route.
- Added public launch positioning to README.
- Added partner and pilot audience documentation.

## v1.6.0 — Demo QA + Smoke Test Automation

- Added demo smoke QA script.
- Added route coverage checks for public MVP demo paths.

## v1.7.0 — Mobile Responsive Polish

- Added  route.
- Added mobile-first QA notes for public beta readiness.

## v1.8.0 — Public Showcase Screenshots + Visual Proof Pack

- Added  route.
- Added visual proof SVG card.
- Added visual proof strip component.

## v1.9.0 — MVP Launch Candidate

- Added  route.
- Added launch candidate QA script.
- Added public beta pre-lock checklist.

## v2.0.0 — Public SaaS Beta Lock

- Added  Public SaaS Beta Lock route.
- Added beta lock badge component.
- Added full master sequence documentation for v1.2.0 → v2.0.0.
- Added v2.0.0 route QA and verifier scripts.
- Locked the public beta foundation after the v1.x stabilization series.

## v2.1.0 — Supabase Production Schema Hardening

- Added production schema hardening migration.
- Added lifecycle fields for templates, projects, and exports.
- Added indexes for owner/project/export lookup.
- Added v2.1.0 schema hardening docs and route.

## v2.2.0 — Auth Session UX Polish

- Added auth session explainer component.
- Added auth polish route.
- Added auth/session UX documentation.
- Preserved public demo safety while preparing beta workspace behavior.
