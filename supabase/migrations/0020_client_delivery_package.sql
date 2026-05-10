create table if not exists avs_client_delivery_packages (
  id uuid primary key default gen_random_uuid(),
  project_id uuid,
  client_workspace_id uuid,
  status text not null default 'draft',
  package_metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table avs_client_delivery_packages enable row level security;
