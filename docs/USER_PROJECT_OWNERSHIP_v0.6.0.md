# User Project Ownership v0.6.0

## Ownership Standard

Each private project belongs to one Supabase Auth user through `avs_projects.owner_id`.

## Project Access Rule

A user can read, insert, update, and delete only rows where:

```sql
owner_id = auth.uid()
```

## Export Access Rule

Each export belongs to both a project and an owner. Exports are also owner-scoped through `avs_exports.owner_id`.

## Product Meaning

The workspace is now prepared for real SaaS behavior:

- one user,
- one protected workspace,
- user-owned projects,
- user-owned exports,
- safe dashboard model,
- future quota and billing hooks.
