# Data Adapter Switch — v0.5.0

## Modes

| Mode | Behavior |
|---|---|
| `mock` | Always uses local mock templates. |
| `supabase` | Uses Supabase when configured. Falls back to mock if configuration or fetch fails. |

## Main functions

- `listTemplatesWithSource()`
- `getTemplateWithSource(templateIdOrSlug)`
- `getProductDataAdapter()`

## Status payload

The data layer returns a status object:

```ts
{
  requestedMode: "mock" | "supabase",
  source: "local-mock" | "supabase" | "supabase-fallback",
  supabaseConfigured: boolean,
  fallbackUsed: boolean,
  message: string
}
```

This makes data behavior visible in the UI and easier to debug.
