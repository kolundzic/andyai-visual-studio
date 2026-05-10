# Project Workspace Flow v0.7.0

## Core flow

Template detail and Gallery both point into:

`/tap-editor?templateId=<template-id>`

The TAP Editor renders:

- project title
- source template
- project description
- editable TAP prompt
- prompt statistics
- save button

The save action creates a project and redirects to:

`/projects/<project-id>`

The workspace list is available at:

`/projects`

The dashboard summarizes:

- template count
- project count
- active data source

## Workspace principle

The user should never feel that templates are static examples.

Every template must become an editable project.

## Data ownership principle

Projects are user-owned records.

Supabase mode uses `owner_id`.

Local mock mode uses `local-user`.

## Next release candidates

- polished login redirect for Supabase save flow
- project edit/update flow
- export prompt as JSON/Markdown
- dashboard recent activity
- project duplicate/delete actions
