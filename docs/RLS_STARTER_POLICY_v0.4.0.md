# 🛡️ RLS Starter Policy — v0.4.0

RLS means **Row Level Security**.

Prizemno: baza ne sme da vrati tuđi projekat samo zato što frontend slučajno pogreši query.

---

# 1. Starter Rules

| Data | Read rule | Write rule |
|---|---|---|
| Published templates | anyone can read | only owner/creator can manage |
| User projects | only owner can read | only owner can create/update/delete |
| Exports | only owner can read | only owner can create/update |

---

# 2. Why this matters

AndyAI Visual Studio will eventually handle:

- user prompts,
- private project drafts,
- paid exports,
- saved template variations,
- customer workflow data.

So the database must be owner-scoped from the beginning.

---

# 3. Canonical Security Rule

> Public templates may be visible. Private work must belong to a user. Exported results must never leak across users.

---

# 4. Migration File

The starter SQL is here:

```text
supabase/migrations/0001_visual_studio_product_data_layer.sql
```

It creates:

- tables,
- indexes,
- updated_at triggers,
- RLS enablement,
- starter policies.
