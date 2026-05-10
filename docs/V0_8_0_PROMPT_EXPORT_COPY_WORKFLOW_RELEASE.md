# v0.8.0 Release Notes
## Prompt Export & Copy Workflow

## Summary

v0.8.0 adds prompt export, copy-to-clipboard, export history, and project export preview.

## Added

- `app/actions/export-actions.ts`
- `components/CopyPromptButton.tsx`
- `components/PromptExportPanel.tsx`
- `components/ProjectExportHistory.tsx`
- `/exports`
- `/projects/[projectId]/exports`
- `createPromptExport` adapter method
- `listProjectExports` adapter method
- `0004_prompt_export_copy_workflow.sql`
- v0.8.0 docs and verifier

## Verified

- export action present
- copy button present
- project detail includes export panel
- export history component present
- migration includes prompt snapshot fields
- local and Supabase adapters support export creation
- package.json remains valid

## Canonical product flow

Prompt is edited. Prompt is copied. Export is saved. Export history proves the work.
