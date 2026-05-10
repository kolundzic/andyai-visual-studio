# v0.7.0 Release Notes
## Template Save & Project Creation Flow

## Summary

v0.7.0 adds the first complete user-value loop to AndyAI Visual Studio.

A user can now open a visual template, edit the TAP prompt, save it as a project, preview the project, and return to the workspace list.

## Added

- `app/actions/project-actions.ts`
- `components/ProjectCreateForm.tsx`
- `/tap-editor?templateId=...`
- `/projects`
- `/projects/[projectId]`
- Supabase project creation adapter method
- Local mock project creation adapter method
- project data contract
- project creation migration
- dashboard project summary
- v0.7.0 verifier

## Verified

- required files present
- project action present
- adapter methods present
- project routes present
- migration contains project prompt fields
- package.json remains valid

## Canonical product flow

Template enters. Human edits. TAP prompt is saved. Workspace remembers. Project preview proves the loop.
