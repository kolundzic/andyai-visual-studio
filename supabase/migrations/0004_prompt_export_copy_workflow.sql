alter table public.avs_exports
  add column if not exists label text,
  add column if not exists prompt_snapshot text,
  add column if not exists source text not null default 'supabase',
  add column if not exists metadata jsonb not null default '{}'::jsonb;

create index if not exists avs_exports_owner_project_created_idx
  on public.avs_exports(owner_id, project_id, created_at desc);

create index if not exists avs_exports_project_created_idx
  on public.avs_exports(project_id, created_at desc);

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'avs_exports'
      and policyname = 'avs_exports_select_own_exports'
  ) then
    create policy "avs_exports_select_own_exports"
      on public.avs_exports
      for select
      to authenticated
      using (auth.uid() = owner_id);
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'avs_exports'
      and policyname = 'avs_exports_insert_own_exports'
  ) then
    create policy "avs_exports_insert_own_exports"
      on public.avs_exports
      for insert
      to authenticated
      with check (auth.uid() = owner_id);
  end if;
end $$;
