# AndyAI Visual Studio v0.8.0
## Prompt Export & Copy Workflow

Status: canonical release layer  
Repo: `andyai-visual-studio`  
Version: `v0.8.0`  
Base: `v0.7.0`

## Purpose

v0.8.0 adds the next commercial product layer:

Template → TAP Editor → Save Project → Project Preview → Copy Prompt → Save Export → Export History

This release lets a user take the edited TAP prompt and turn it into a copy-ready or history-backed export record.

## Added

- copy prompt button
- prompt export server action
- project export panel
- project export history component
- `/exports` global export overview
- `/projects/[projectId]/exports` project export preview
- local mock export creation
- Supabase export creation
- `avs_exports` prompt snapshot migration
- `/data-preview` export visibility

## Product meaning

The user can now do something directly useful:

1. create a project from a template
2. copy the final prompt
3. save an export snapshot
4. return later to inspect export history

## Canonical formula

Edited prompt becomes export. Export becomes evidence. Evidence becomes product value.
