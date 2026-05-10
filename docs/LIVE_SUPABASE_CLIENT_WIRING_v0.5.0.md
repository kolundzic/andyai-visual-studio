# AndyAI Visual Studio v0.5.0 — Live Supabase Client Wiring

## Purpose

v0.5.0 connects the product data layer to a live Supabase client while preserving a safe local mock fallback.

The goal is controlled production readiness:

1. Local development continues to work without Supabase credentials.
2. Supabase mode can be enabled through environment variables.
3. Gallery, template detail, TAP Editor, and data preview pages read through one adapter boundary.
4. If live Supabase fails or is not configured, the app falls back to local mock templates instead of breaking the product shell.

## Added files

- `.env.example`
- `lib/supabase/env.ts`
- `lib/supabase/browser.ts`
- `lib/supabase/server.ts`
- `lib/data/supabase-adapter.ts`
- Updated `lib/data/index.ts`
- Updated gallery/detail/editor/data-preview routes
- Updated `TemplateGallery` and `TapEditorShell`

## Operating model

```text
UI route
  ↓
listTemplatesWithSource / getTemplateWithSource
  ↓
Adapter switch
  ├─ local mock adapter
  └─ Supabase adapter
        ↓
     avs_templates
```

## Safety principle

Live data is useful only when failure is visible and recoverable. v0.5.0 therefore treats mock fallback as an intentional product safety layer, not as a hidden shortcut.
