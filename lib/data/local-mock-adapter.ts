import { avsProjects, avsTemplates } from "./mock-data";
import type {
  AvsDataSourceState,
  AvsExport,
  AvsProductDataAdapter,
  AvsProject,
  AvsProjectCreateInput,
  AvsProjectUpdateInput,
  AvsPromptExportCreateInput,
  AvsTemplate
} from "./types";

const localProjects: AvsProject[] = [...avsProjects];
const localExports: AvsExport[] = [];

function nowIso() {
  return new Date().toISOString();
}

function makeProjectId() {
  return `local-project-${Date.now()}`;
}

function makeExportId() {
  return `local-export-${Date.now()}`;
}

function buildExportPayload(project: AvsProject | null, input: AvsPromptExportCreateInput) {
  if (input.exportPayload) {
    return input.exportPayload;
  }

  if (input.exportType === "json") {
    return {
      type: "json",
      projectId: input.projectId,
      title: project?.title ?? "Untitled Project",
      prompt: input.promptSnapshot,
      status: project?.status ?? "draft",
      exportedAt: nowIso()
    };
  }

  if (input.exportType === "markdown") {
    return {
      type: "markdown",
      content: `# ${project?.title ?? "AndyAI Visual Project"}\n\n## TAP Prompt\n\n${input.promptSnapshot}\n`
    };
  }

  return {
    type: "prompt",
    content: input.promptSnapshot
  };
}

export function createLocalMockAdapter(reason = "Local mock adapter active"): AvsProductDataAdapter {
  return {
    getSourceState(): AvsDataSourceState {
      return {
        mode: "local-mock",
        fallback: true,
        reason
      };
    },

    async listTemplates(): Promise<AvsTemplate[]> {
      return avsTemplates.filter((template) => template.status === "published");
    },

    async getTemplateById(templateId: string): Promise<AvsTemplate | null> {
      return avsTemplates.find((template) => template.id === templateId || template.slug === templateId) ?? null;
    },

    async listProjects(ownerId = "local-user"): Promise<AvsProject[]> {
      return localProjects
        .filter((project) => project.ownerId === ownerId || ownerId === "local-user")
        .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    },

    async getProjectById(projectId: string, ownerId = "local-user"): Promise<AvsProject | null> {
      return localProjects.find((project) => project.id === projectId && (project.ownerId === ownerId || ownerId === "local-user")) ?? null;
    },

    async createProjectFromTemplate(input: AvsProjectCreateInput): Promise<AvsProject> {
      const template = avsTemplates.find((item) => item.id === input.templateId || item.slug === input.templateId) ?? null;
      const timestamp = nowIso();
      const project: AvsProject = {
        id: makeProjectId(),
        ownerId: input.ownerId ?? "local-user",
        templateId: template?.id ?? input.templateId,
        title: input.title || template?.title || "Untitled Visual Project",
        description: input.description ?? template?.description ?? "",
        tapPrompt: input.tapPrompt || template?.tapPrompt || "",
        status: "draft",
        source: "local-mock",
        inputSnapshot: {
          template,
          ...(input.inputSnapshot ?? {})
        },
        outputSnapshot: {
          preview: "Saved locally. Connect Supabase for persistent workspace storage."
        },
        createdAt: timestamp,
        updatedAt: timestamp
      };

      localProjects.unshift(project);
      return project;
    },

    async updateProject(input: AvsProjectUpdateInput): Promise<AvsProject | null> {
      const index = localProjects.findIndex((project) => project.id === input.projectId);
      if (index === -1) {
        return null;
      }

      const updated: AvsProject = {
        ...localProjects[index],
        title: input.title ?? localProjects[index].title,
        description: input.description ?? localProjects[index].description,
        tapPrompt: input.tapPrompt ?? localProjects[index].tapPrompt,
        status: input.status ?? localProjects[index].status,
        outputSnapshot: input.outputSnapshot ?? localProjects[index].outputSnapshot,
        updatedAt: nowIso()
      };

      localProjects[index] = updated;
      return updated;
    },

    async createPromptExport(input: AvsPromptExportCreateInput): Promise<AvsExport> {
      const project = localProjects.find((item) => item.id === input.projectId) ?? null;
      const timestamp = nowIso();
      const exportRecord: AvsExport = {
        id: makeExportId(),
        ownerId: input.ownerId ?? project?.ownerId ?? "local-user",
        projectId: input.projectId,
        exportType: input.exportType,
        label: input.label ?? `${input.exportType.toUpperCase()} export`,
        promptSnapshot: input.promptSnapshot,
        exportPayload: buildExportPayload(project, input),
        source: "local-mock",
        createdAt: timestamp
      };

      localExports.unshift(exportRecord);

      if (project) {
        await this.updateProject({
          projectId: project.id,
          status: "exported",
          outputSnapshot: {
            ...project.outputSnapshot,
            lastExportId: exportRecord.id,
            lastExportType: exportRecord.exportType,
            lastExportedAt: timestamp
          }
        });
      }

      return exportRecord;
    },

    async listProjectExports(projectId: string, ownerId = "local-user"): Promise<AvsExport[]> {
      return localExports
        .filter((item) => item.projectId === projectId && (item.ownerId === ownerId || ownerId === "local-user"))
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    },

    async listExports(projectId: string, ownerId = "local-user"): Promise<AvsExport[]> {
      return this.listProjectExports(projectId, ownerId);
    }
  };
}
