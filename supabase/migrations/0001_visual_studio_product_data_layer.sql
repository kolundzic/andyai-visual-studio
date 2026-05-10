-- 🅰️💥 AndyAI Visual Studio
-- v0.4.0 Supabase Product Data Layer
-- Tables: templates, projects, exports
-- Principle: public templates are readable; user projects/exports are owner-scoped.

create extension if not exists pgcrypto;

create or replace function public.avs_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.avs_templates (
  id uuid primary key default gen_random_uuid(),
  template_code text not null unique,
  slug text not null unique,
  title text not null,
  category text not null,
  difficulty text not null default 'starter',
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  visibility text not null default 'public' check (visibility in ('public', 'private', 'paid')),
  summary text not null default '',
  prompt_template text not null default '',
  workflow_json jsonb not null default '{}'::jsonb,
  tags text[] not null default '{}',
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.avs_projects (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  template_id uuid references public.avs_templates(id) on delete set null,
  title text not null,
  status text not null default 'draft' check (status in ('draft', 'ready', 'exported', 'archived')),
  user_prompt text not null default '',
  generated_prompt text not null default '',
  settings_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.avs_exports (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.avs_projects(id) on delete cascade,
  owner_id uuid not null references auth.users(id) on delete cascade,
  export_type text not null check (export_type in ('prompt', 'markdown', 'html', 'svg', 'json', 'image_prompt')),
  status text not null default 'created' check (status in ('created', 'queued', 'completed', 'failed')),
  artifact_url text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists avs_templates_status_idx on public.avs_templates(status);
create index if not exists avs_templates_category_idx on public.avs_templates(category);
create index if not exists avs_templates_tags_gin_idx on public.avs_templates using gin(tags);
create index if not exists avs_projects_owner_idx on public.avs_projects(owner_id);
create index if not exists avs_projects_template_idx on public.avs_projects(template_id);
create index if not exists avs_exports_owner_idx on public.avs_exports(owner_id);
create index if not exists avs_exports_project_idx on public.avs_exports(project_id);

create trigger avs_templates_updated_at
before update on public.avs_templates
for each row execute function public.avs_set_updated_at();

create trigger avs_projects_updated_at
before update on public.avs_projects
for each row execute function public.avs_set_updated_at();

alter table public.avs_templates enable row level security;
alter table public.avs_projects enable row level security;
alter table public.avs_exports enable row level security;

drop policy if exists "Published templates are readable" on public.avs_templates;
create policy "Published templates are readable"
on public.avs_templates
for select
to anon, authenticated
using (status = 'published' and visibility in ('public', 'paid'));

drop policy if exists "Template owners can manage templates" on public.avs_templates;
create policy "Template owners can manage templates"
on public.avs_templates
for all
to authenticated
using (created_by = auth.uid())
with check (created_by = auth.uid());

drop policy if exists "Project owners can read projects" on public.avs_projects;
create policy "Project owners can read projects"
on public.avs_projects
for select
to authenticated
using (owner_id = auth.uid());

drop policy if exists "Project owners can insert projects" on public.avs_projects;
create policy "Project owners can insert projects"
on public.avs_projects
for insert
to authenticated
with check (owner_id = auth.uid());

drop policy if exists "Project owners can update projects" on public.avs_projects;
create policy "Project owners can update projects"
on public.avs_projects
for update
to authenticated
using (owner_id = auth.uid())
with check (owner_id = auth.uid());

drop policy if exists "Project owners can delete projects" on public.avs_projects;
create policy "Project owners can delete projects"
on public.avs_projects
for delete
to authenticated
using (owner_id = auth.uid());

drop policy if exists "Export owners can read exports" on public.avs_exports;
create policy "Export owners can read exports"
on public.avs_exports
for select
to authenticated
using (owner_id = auth.uid());

drop policy if exists "Export owners can insert exports" on public.avs_exports;
create policy "Export owners can insert exports"
on public.avs_exports
for insert
to authenticated
with check (owner_id = auth.uid());

drop policy if exists "Export owners can update exports" on public.avs_exports;
create policy "Export owners can update exports"
on public.avs_exports
for update
to authenticated
using (owner_id = auth.uid())
with check (owner_id = auth.uid());
