alter table public.avs_exports
  add column if not exists download_format text not null default 'txt',
  add column if not exists artifact_metadata jsonb not null default '{}'::jsonb,
  add column if not exists package_preview jsonb not null default '{}'::jsonb;

create index if not exists avs_exports_download_format_idx
  on public.avs_exports(download_format);

create index if not exists avs_exports_artifact_metadata_idx
  on public.avs_exports using gin(artifact_metadata);
