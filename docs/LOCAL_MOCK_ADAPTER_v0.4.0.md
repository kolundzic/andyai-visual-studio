# 🧪 Local Mock Adapter — v0.4.0

The local mock adapter lets AndyAI Visual Studio behave like a real product before live Supabase wiring is finished.

Files:

```text
lib/data/types.ts
lib/data/mock-data.ts
lib/data/product-data-adapter.ts
lib/data/local-mock-adapter.ts
lib/data/index.ts
```

Preview route:

```text
/data-preview
```

---

# Why use this?

Because product development should not wait for every backend decision.

We can safely build:

- Gallery rendering,
- Template detail rendering,
- TAP Editor data flow,
- Dashboard previews,
- Export records,
- later Supabase adapter parity.

---

# Canonical Rule

> Mock adapter first. Supabase adapter second. Auth/RLS before production actions.
