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
