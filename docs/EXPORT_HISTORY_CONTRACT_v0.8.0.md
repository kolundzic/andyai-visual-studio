# Export History Contract v0.8.0

## Export record

```ts
type AvsExport = {
  id: string;
  ownerId: string;
  projectId: string;
  exportType: "prompt" | "markdown" | "json" | "html";
  label: string;
  promptSnapshot: string;
  exportPayload: Record<string, unknown>;
  source: "local-mock" | "supabase";
  createdAt: string;
};
```

## Required adapter methods

```ts
createPromptExport(input): Promise<AvsExport>
listProjectExports(projectId, ownerId?): Promise<AvsExport[]>
```

## Supabase table

Target table: `avs_exports`

Important fields:

- `owner_id`
- `project_id`
- `export_type`
- `label`
- `prompt_snapshot`
- `export_payload`
- `source`
- `created_at`

## UX rule

The export history is not only a log. It is proof that the user produced a reusable artifact from the project.
