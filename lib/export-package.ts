import type { AvsExport, AvsProject } from "@/lib/data";

export type ExportDownloadFormat = "txt" | "md" | "json";

export type ExportArtifactFile = {
  filename: string;
  label: string;
  format: ExportDownloadFormat;
  mimeType: string;
  content: string;
  description: string;
};

export type ExportArtifactMetadata = {
  projectId: string;
  projectTitle: string;
  projectStatus: string;
  templateId: string | null;
  exportCount: number;
  generatedAt: string;
  packageVersion: string;
  formats: ExportDownloadFormat[];
};

function safeSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80) || "andyai-visual-project";
}

function latestExport(exports: AvsExport[]) {
  return [...exports].sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0] ?? null;
}

export function buildArtifactMetadata(project: AvsProject, exports: AvsExport[]): ExportArtifactMetadata {
  return {
    projectId: project.id,
    projectTitle: project.title,
    projectStatus: project.status,
    templateId: project.templateId,
    exportCount: exports.length,
    generatedAt: new Date().toISOString(),
    packageVersion: "v0.9.0",
    formats: ["txt", "md", "json"]
  };
}

export function renderPromptTxt(project: AvsProject, exports: AvsExport[]) {
  const latest = latestExport(exports);
  return [
    `AndyAI Visual Studio Export`,
    `Project: ${project.title}`,
    `Project ID: ${project.id}`,
    `Status: ${project.status}`,
    `Template ID: ${project.templateId ?? "none"}`,
    `Latest export: ${latest ? latest.id : "none"}`,
    `Generated: ${new Date().toISOString()}`,
    ``,
    `TAP PROMPT`,
    project.tapPrompt
  ].join("\n");
}

export function renderPromptMarkdown(project: AvsProject, exports: AvsExport[]) {
  const metadata = buildArtifactMetadata(project, exports);
  return [
    `# ${project.title}`,
    ``,
    `## Export Metadata`,
    ``,
    `- Project ID: \`${metadata.projectId}\``,
    `- Status: \`${metadata.projectStatus}\``,
    `- Template ID: \`${metadata.templateId ?? "none"}\``,
    `- Export count: \`${metadata.exportCount}\``,
    `- Package version: \`${metadata.packageVersion}\``,
    `- Generated: \`${metadata.generatedAt}\``,
    ``,
    `## TAP Prompt`,
    ``,
    "```text",
    project.tapPrompt,
    "```",
    ``,
    `## Export History`,
    ``,
    exports.length === 0
      ? `No saved exports yet.`
      : exports.map((item) => `- ${item.label} — ${item.exportType} — ${item.createdAt}`).join("\n")
  ].join("\n");
}

export function renderPromptJson(project: AvsProject, exports: AvsExport[]) {
  return JSON.stringify(
    {
      metadata: buildArtifactMetadata(project, exports),
      project: {
        id: project.id,
        ownerId: project.ownerId,
        templateId: project.templateId,
        title: project.title,
        description: project.description,
        status: project.status,
        source: project.source,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt
      },
      prompt: project.tapPrompt,
      inputSnapshot: project.inputSnapshot,
      outputSnapshot: project.outputSnapshot,
      exports
    },
    null,
    2
  );
}

export function buildProjectArtifactFiles(project: AvsProject, exports: AvsExport[]): ExportArtifactFile[] {
  const slug = safeSlug(project.title);

  return [
    {
      filename: `${slug}-tap-prompt.txt`,
      label: "Download TXT",
      format: "txt",
      mimeType: "text/plain;charset=utf-8",
      content: renderPromptTxt(project, exports),
      description: "Plain prompt export for direct copy, storage, and quick provider handoff."
    },
    {
      filename: `${slug}-tap-prompt.md`,
      label: "Download Markdown",
      format: "md",
      mimeType: "text/markdown;charset=utf-8",
      content: renderPromptMarkdown(project, exports),
      description: "Notion/GitHub friendly export with metadata, prompt, and history."
    },
    {
      filename: `${slug}-artifact-package.json`,
      label: "Download JSON",
      format: "json",
      mimeType: "application/json;charset=utf-8",
      content: renderPromptJson(project, exports),
      description: "Structured artifact package for automation, replay, and future generation pipelines."
    }
  ];
}

export function buildSingleExportFiles(project: AvsProject, item: AvsExport): ExportArtifactFile[] {
  const slug = safeSlug(`${project.title}-${item.label}`);
  const content = item.promptSnapshot || JSON.stringify(item.exportPayload, null, 2);

  return [
    {
      filename: `${slug}.txt`,
      label: "TXT",
      format: "txt",
      mimeType: "text/plain;charset=utf-8",
      content,
      description: "Single export prompt snapshot as plain text."
    },
    {
      filename: `${slug}.md`,
      label: "MD",
      format: "md",
      mimeType: "text/markdown;charset=utf-8",
      content: [`# ${item.label}`, ``, `Project: ${project.title}`, `Export type: ${item.exportType}`, `Created: ${item.createdAt}`, ``, "```text", content, "```"].join("\n"),
      description: "Single export snapshot wrapped as Markdown."
    },
    {
      filename: `${slug}.json`,
      label: "JSON",
      format: "json",
      mimeType: "application/json;charset=utf-8",
      content: JSON.stringify({ project, export: item }, null, 2),
      description: "Single export snapshot with project context as JSON."
    }
  ];
}
