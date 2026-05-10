# Project Creation Data Contract v0.7.0

## Project create input

```ts
type AvsProjectCreateInput = {
  ownerId?: string;
  templateId: string;
  title: string;
  description?: string;
  tapPrompt: string;
  inputSnapshot?: Record<string, unknown>;
};
```

## Project output

```ts
type AvsProject = {
  id: string;
  ownerId: string;
  templateId: string | null;
  title: string;
  description: string;
  tapPrompt: string;
  status: "draft" | "ready" | "exported" | "archived";
  source: "local-mock" | "supabase";
  inputSnapshot: Record<string, unknown>;
  outputSnapshot: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};
```

## Supabase target

Table: `avs_projects`

Required fields for v0.7.0:

- `owner_id`
- `template_id`
- `title`
- `description`
- `tap_prompt`
- `status`
- `input_snapshot`
- `output_snapshot`
- `created_at`
- `updated_at`

## Local fallback

The local adapter creates an in-memory project record and returns the same contract.

This keeps the frontend usable before real Supabase environment variables are configured.
