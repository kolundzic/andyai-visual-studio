-- AndyAI Visual Studio v5.5.0
-- Approval Gate for Visual Artifacts

create table if not exists public.avs_0018_visual_artifact_approval_gate (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade,
  status text not null default 'active',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.avs_0018_visual_artifact_approval_gate enable row level security;
