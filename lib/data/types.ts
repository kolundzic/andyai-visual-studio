export type TemplateTier = "free" | "creator" | "pro" | "studio";
export type TemplateStatus = "draft" | "published" | "archived";
export type DataMode = "mock" | "supabase";
export type DataSource = "local-mock" | "supabase" | "supabase-fallback";

export type VisualTemplate = {
  id: string;
  template_id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  prompt: string;
  workflow_steps: string[];
  tags: string[];
  tier: TemplateTier;
  status: TemplateStatus;
  created_at?: string;
  updated_at?: string;
};

export type VisualProject = {
  id: string;
  user_id: string | null;
  template_id: string | null;
  title: string;
  prompt_input: string;
  generated_prompt: string;
  status: string;
  created_at?: string;
  updated_at?: string;
};

export type VisualExport = {
  id: string;
  project_id: string | null;
  export_type: string;
  export_payload: Record<string, unknown>;
  created_at?: string;
};

export type ProductDataAdapter = {
  listTemplates: () => Promise<VisualTemplate[]>;
  getTemplate: (templateIdOrSlug: string) => Promise<VisualTemplate | null>;
};

export type DataSourceStatus = {
  requestedMode: DataMode;
  source: DataSource;
  supabaseConfigured: boolean;
  fallbackUsed: boolean;
  message: string;
};

export type TemplatesResult = {
  templates: VisualTemplate[];
  status: DataSourceStatus;
};

export type TemplateResult = {
  template: VisualTemplate | null;
  status: DataSourceStatus;
};
