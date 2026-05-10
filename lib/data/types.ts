export type AvsTemplate = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  status: "draft" | "published" | "archived";
  previewKind: string;
  tapPrompt: string;
  workflow: string[];
  createdAt?: string;
  updatedAt?: string;
};

export type AvsProject = {
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

export type AvsExportType = "prompt" | "markdown" | "json" | "html";

export type AvsExport = {
  id: string;
  ownerId: string;
  projectId: string;
  exportType: AvsExportType;
  label: string;
  promptSnapshot: string;
  exportPayload: Record<string, unknown>;
  source: "local-mock" | "supabase";
  createdAt: string;
};

export type AvsProjectCreateInput = {
  ownerId?: string;
  templateId: string;
  title: string;
  description?: string;
  tapPrompt: string;
  inputSnapshot?: Record<string, unknown>;
};

export type AvsProjectUpdateInput = {
  projectId: string;
  title?: string;
  description?: string;
  tapPrompt?: string;
  status?: AvsProject["status"];
  outputSnapshot?: Record<string, unknown>;
};

export type AvsPromptExportCreateInput = {
  ownerId?: string;
  projectId: string;
  exportType: AvsExportType;
  label?: string;
  promptSnapshot: string;
  exportPayload?: Record<string, unknown>;
};

export type AvsDataSourceState = {
  mode: "local-mock" | "supabase";
  fallback: boolean;
  reason: string;
};

export type AvsProductDataAdapter = {
  getSourceState(): AvsDataSourceState;
  listTemplates(): Promise<AvsTemplate[]>;
  getTemplateById(templateId: string): Promise<AvsTemplate | null>;
  listProjects(ownerId?: string): Promise<AvsProject[]>;
  getProjectById(projectId: string, ownerId?: string): Promise<AvsProject | null>;
  createProjectFromTemplate(input: AvsProjectCreateInput): Promise<AvsProject>;
  updateProject(input: AvsProjectUpdateInput): Promise<AvsProject | null>;
  createPromptExport(input: AvsPromptExportCreateInput): Promise<AvsExport>;
  listProjectExports(projectId: string, ownerId?: string): Promise<AvsExport[]>;
  listExports(projectId: string, ownerId?: string): Promise<AvsExport[]>;
};
