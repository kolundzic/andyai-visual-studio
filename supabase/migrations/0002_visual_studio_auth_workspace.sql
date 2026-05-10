alter table public.avs_projects
  alter column owner_id set default auth.uid();

alter table public.avs_exports
  alter column owner_id set default auth.uid();

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
