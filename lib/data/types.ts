export type AvsTemplateStatus = "draft" | "published" | "archived";
export type AvsTemplateVisibility = "public" | "private" | "paid";
export type AvsProjectStatus = "draft" | "ready" | "exported" | "archived";
export type AvsExportType = "prompt" | "markdown" | "html" | "svg" | "json" | "image_prompt";
export type AvsExportStatus = "created" | "queued" | "completed" | "failed";

export type AvsWorkflow = {
  steps: string[];
  outputContract?: string;
  approvalRequired?: boolean;
};

export type AvsTemplate = {
  id: string;
  templateCode: string;
  slug: string;
  title: string;
  category: string;
  difficulty: string;
  status: AvsTemplateStatus;
  visibility: AvsTemplateVisibility;
  summary: string;
  promptTemplate: string;
  workflow: AvsWorkflow;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export type AvsProject = {
  id: string;
  ownerId: string;
  templateId: string | null;
  title: string;
  status: AvsProjectStatus;
  userPrompt: string;
  generatedPrompt: string;
  settings: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

export type AvsExport = {
  id: string;
  projectId: string;
  ownerId: string;
  exportType: AvsExportType;
  status: AvsExportStatus;
  artifactUrl: string | null;
  metadata: Record<string, unknown>;
  createdAt: string;
};

export type ListTemplatesInput = {
  query?: string;
  category?: string;
  tag?: string;
  includeDrafts?: boolean;
};

export type CreateProjectInput = {
  ownerId: string;
  templateId?: string | null;
  title: string;
  userPrompt: string;
  generatedPrompt?: string;
  settings?: Record<string, unknown>;
};

export type CreateExportInput = {
  ownerId: string;
  projectId: string;
  exportType: AvsExportType;
  artifactUrl?: string | null;
  metadata?: Record<string, unknown>;
};
