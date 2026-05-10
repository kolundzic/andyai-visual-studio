import type {
  AvsExport,
  AvsProject,
  AvsTemplate,
  CreateExportInput,
  CreateProjectInput,
  ListTemplatesInput,
} from "./types";

export type ProductDataAdapter = {
  listTemplates(input?: ListTemplatesInput): Promise<AvsTemplate[]>;
  getTemplateByCodeOrSlug(codeOrSlug: string): Promise<AvsTemplate | null>;
  listProjects(ownerId: string): Promise<AvsProject[]>;
  getProject(projectId: string, ownerId: string): Promise<AvsProject | null>;
  createProject(input: CreateProjectInput): Promise<AvsProject>;
  listExportsByProject(projectId: string, ownerId: string): Promise<AvsExport[]>;
  createExport(input: CreateExportInput): Promise<AvsExport>;
};

export type DataAdapterMode = "local-mock" | "supabase";

export function getDataAdapterMode(): DataAdapterMode {
  const mode = process.env.NEXT_PUBLIC_AVS_DATA_MODE;
  return mode === "supabase" ? "supabase" : "local-mock";
}
