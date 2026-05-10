-- AndyAI Visual Studio v2.1.0
-- Supabase Production Schema Hardening
-- Purpose: add safer timestamps, lifecycle status fields, indexes, and owner-friendly lookup patterns.

alter table if exists public.avs_templates
  add column if not exists production_status text default 'draft',
  add column if not exists reviewed_at timestamptz,
  add column if not exists reviewed_by uuid;

alter table if exists public.avs_projects
  add column if not exists lifecycle_status text default 'active',
  add column if not exists archived_at timestamptz,
  add column if not exists last_opened_at timestamptz default now();

alter table if exists public.avs_exports
  add column if not exists export_status text default 'ready',
  add column if not exists artifact_version integer default 1,
  add column if not exists download_count integer default 0;

create index if not exists avs_templates_production_status_idx
  on public.avs_templates (production_status);

create index if not exists avs_projects_owner_lifecycle_idx
  on public.avs_projects (owner_id, lifecycle_status);

create index if not exists avs_exports_project_version_idx
  on public.avs_exports (project_id, artifact_version);

comment on table public.avs_templates is
  'AndyAI Visual Studio templates. v2.1.0 adds production status fields for governed publishing.';

comment on table public.avs_projects is
  'AndyAI Visual Studio user projects. v2.1.0 adds lifecycle fields for beta-ready workspace behavior.';

comment on table public.avs_exports is
  'AndyAI Visual Studio exports. v2.1.0 adds artifact version and download tracking fields.';
