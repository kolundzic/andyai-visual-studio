alter table public.avs_projects
  add column if not exists tap_prompt text,
  add column if not exists input_snapshot jsonb not null default '{}'::jsonb,
  add column if not exists output_snapshot jsonb not null default '{}'::jsonb;

create index if not exists avs_projects_owner_updated_idx
  on public.avs_projects(owner_id, updated_at desc);

create index if not exists avs_projects_template_idx
  on public.avs_projects(template_id);

create policy if not exists "avs_projects_insert_own_projects"
  on public.avs_projects
  for insert
  to authenticated
  with check (auth.uid() = owner_id);

create policy if not exists "avs_projects_update_own_projects"
  on public.avs_projects
  for update
  to authenticated
  using (auth.uid() = owner_id)
  with check (auth.uid() = owner_id);
