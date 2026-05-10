-- AndyAI Visual Studio v4.8.0
-- Evidence + Metadata Export Layer

create table if not exists public.avs_artifact_evidence (
  id uuid primary key default gen_random_uuid(),
  project_id uuid,
  template_id text,
  export_format text not null,
  source_prompt_hash text,
  review_status text not null default 'draft',
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.avs_artifact_evidence enable row level security;

create policy if not exists "artifact evidence owner read"
  on public.avs_artifact_evidence
  for select
  using (created_by = auth.uid());
