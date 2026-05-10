# Public Demo Readiness Checklist — v1.0.0

## Demo routes

| Route | Purpose | Status |
|---|---|---:|
| `/` | Public landing and product positioning | 🟢 |
| `/gallery` | Template discovery | 🟢 |
| `/templates/[templateId]` | Template detail | 🟢 |
| `/tap-editor` | Prompt editing workspace | 🟢 |
| `/projects` | User project workspace | 🟡 depends on auth/live env |
| `/projects/[projectId]` | Project preview | 🟡 depends on demo data/auth |
| `/projects/[projectId]/exports` | Project export history | 🟡 depends on demo data/auth |
| `/projects/[projectId]/package` | Artifact package preview | 🟡 depends on demo data/auth |
| `/exports` | Export history overview | 🟢 |
| `/data-preview` | Adapter/data source preview | 🟢 |
| `/demo` | Public walkthrough | 🟢 |
| `/status` | MVP status page | 🟢 |

## Pre-demo actions

- Run `npm install` if dependencies are not installed.
- Run `npm run verify:v1.0.0`.
- Run `npm run route:qa`.
- Confirm `.env.local` exists for live Supabase testing, or use local mock fallback.
- Open `/demo` first for reviewers.
- Use `/status` as the public maturity snapshot.

## Demo framing

Use this simple explanation:

> This MVP proves the core product loop: choose a reusable visual template, edit the TAP prompt, save a project, preview the package, and download reusable prompt artifacts.
