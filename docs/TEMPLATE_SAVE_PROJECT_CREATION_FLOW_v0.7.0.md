# AndyAI Visual Studio v0.7.0
## Template Save & Project Creation Flow

Status: canonical release layer  
Repo: `andyai-visual-studio`  
Version: `v0.7.0`  
Base: `v0.6.0`  

## Purpose

v0.7.0 turns the product shell into the first useful SaaS workflow:

Template → TAP Editor → Edit Prompt → Save Project → Project Preview → Workspace List

This is the first release where the user can start from a reusable visual template and create a saved project record.

## What changed

- Added project creation server action.
- Added editable TAP prompt save form.
- Added project detail preview route.
- Added workspace list refresh model.
- Added local mock project creation.
- Added Supabase project creation adapter.
- Added migration support for project prompt snapshots.
- Added dashboard counters for templates and projects.
- Added `/data-preview` project visibility.

## Product meaning

Before v0.7.0, the product could display templates, data, auth routes, and workspace pages.

After v0.7.0, the product can perform a complete creation loop.

## Canonical flow

1. User opens Gallery.
2. User chooses a visual template.
3. User opens the template in TAP Editor.
4. User edits the TAP prompt.
5. User saves the project.
6. System redirects to project detail preview.
7. Workspace list shows saved projects.

## Safe fallback

If Supabase is not configured, the app uses the local mock adapter.

If Supabase is configured and the user is authenticated, project creation writes into `avs_projects`.

If Supabase requires login, the adapter raises a login-required state that can be converted into a polished UX in the next release.
