# v0.9.0 Release Notes
## Export Download & Artifact Package Layer

## Summary

v0.9.0 adds download-ready artifact files for saved projects and exports.

## Added

- `lib/export-package.ts`
- `components/ExportDownloadButton.tsx`
- `components/ProjectArtifactPackagePreview.tsx`
- `/projects/[projectId]/package`
- download buttons on project export preview
- package preview link on project detail
- package preview link on exports overview
- `0005_export_download_artifact_package.sql`
- v0.9.0 docs and verifier

## Verified

- artifact package library exists
- TXT, Markdown, and JSON renderers exist
- download button uses browser Blob download
- package preview route exists
- project detail links to package preview
- export page includes download buttons
- Supabase metadata migration exists
- package.json remains valid

## Canonical product flow

Save prompt export → review package → download artifact → reuse outside the app.
