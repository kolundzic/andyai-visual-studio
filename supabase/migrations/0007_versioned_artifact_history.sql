-- AndyAI Visual Studio v2.5.0
-- Export History + Versioned Artifacts

alter table if exists public.avs_exports
  add column if not exists artifact_label text,
  add column if not exists artifact_notes text,
  add column if not exists previous_export_id uuid references public.avs_exports(id);

create index if not exists avs_exports_previous_export_idx
  on public.avs_exports (previous_export_id);

comment on column public.avs_exports.previous_export_id is
  'Optional link to previous artifact export for version history.';
