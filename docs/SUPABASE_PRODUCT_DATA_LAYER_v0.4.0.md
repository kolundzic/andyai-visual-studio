# 🅰️💥 AndyAI Visual Studio v0.4.0
## Supabase Product Data Layer

**Status:** Canonical / Active  
**Repo:** `andyai-visual-studio`  
**Version:** `v0.4.0`  
**Layer:** Product Data Foundation  
**Stack Direction:** Next.js + Vercel + Supabase + Stripe later  

---

# 1. Purpose

`v0.4.0` gives AndyAI Visual Studio its first real product data structure.

The frontend shell from `v0.3.0` now has a data layer contract for:

- templates
- user projects
- exports
- starter Supabase migration
- starter seed data
- starter RLS policy model
- local mock adapter
- data preview route

This keeps development fast while preparing the app for real Supabase auth and storage later.

---

# 2. Tables

| Table | Purpose |
|---|---|
| `avs_templates` | Reusable visual templates shown in Gallery and Template Detail |
| `avs_projects` | User-created work based on a template and prompt/workflow edits |
| `avs_exports` | Generated/exported outputs from a project |

---

# 3. Product Flow Mapping

| Product screen | Data source |
|---|---|
| Landing | public positioning content |
| Gallery | `avs_templates` |
| Template Detail | one `avs_templates` row |
| TAP Editor | selected template + generated project draft |
| Dashboard | `avs_projects` + `avs_exports` |
| Pricing | static now, subscription table later |

---

# 4. Development Rule

Do not connect expensive generation or paid export logic until the data layer has:

1. auth identity,
2. RLS enabled,
3. project ownership,
4. export ownership,
5. usage quota hooks,
6. audit/evidence records.

Canonical rule:

> No owner. No private project. No export. No paid generation.
