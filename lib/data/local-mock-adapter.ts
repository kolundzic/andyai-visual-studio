import { mockExports, mockProjects, mockTemplates } from "./mock-data";
import type { ProductDataAdapter } from "./product-data-adapter";
import type { AvsExport, AvsProject, AvsTemplate, CreateExportInput, CreateProjectInput } from "./types";

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function matchesTemplate(template: AvsTemplate, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  return [
    template.templateCode,
    template.slug,
    template.title,
    template.category,
    template.summary,
    ...template.tags,
  ]
    .join(" ")
    .toLowerCase()
    .includes(q);
}

const projects: AvsProject[] = clone(mockProjects);
const exportsList: AvsExport[] = clone(mockExports);

export const localProductDataAdapter: ProductDataAdapter = {
  async listTemplates(input = {}) {
    const { query = "", category, tag, includeDrafts = false } = input;

    return clone(
      mockTemplates.filter((template) => {
        if (!includeDrafts && template.status !== "published") return false;
        if (category && template.category !== category) return false;
        if (tag && !template.tags.includes(tag)) return false;
        return matchesTemplate(template, query);
      }),
    );
  },

  async getTemplateByCodeOrSlug(codeOrSlug) {
    const key = codeOrSlug.trim().toLowerCase();
    const template = mockTemplates.find(
      (item) => item.templateCode.toLowerCase() === key || item.slug.toLowerCase() === key,
    );
    return template ? clone(template) : null;
  },

  async listProjects(ownerId) {
    return clone(projects.filter((project) => project.ownerId === ownerId));
  },

  async getProject(projectId, ownerId) {
    const project = projects.find((item) => item.id === projectId && item.ownerId === ownerId);
    return project ? clone(project) : null;
  },

  async createProject(input: CreateProjectInput) {
    const timestamp = new Date().toISOString();
    const project: AvsProject = {
      id: `project-${Date.now()}`,
      ownerId: input.ownerId,
      templateId: input.templateId ?? null,
      title: input.title,
      status: "draft",
      userPrompt: input.userPrompt,
      generatedPrompt: input.generatedPrompt ?? "",
      settings: input.settings ?? {},
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    projects.unshift(project);
    return clone(project);
  },

  async listExportsByProject(projectId, ownerId) {
    return clone(exportsList.filter((item) => item.projectId === projectId && item.ownerId === ownerId));
  },

  async createExport(input: CreateExportInput) {
    const exportRecord: AvsExport = {
      id: `export-${Date.now()}`,
      projectId: input.projectId,
      ownerId: input.ownerId,
      exportType: input.exportType,
      status: "created",
      artifactUrl: input.artifactUrl ?? null,
      metadata: input.metadata ?? {},
      createdAt: new Date().toISOString(),
    };

    exportsList.unshift(exportRecord);
    return clone(exportRecord);
  },
};
