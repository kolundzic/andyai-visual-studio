import { notFound } from "next/navigation";
import { PromptExportPanel } from "@/components/PromptExportPanel";
import { ProjectArtifactPackagePreview } from "@/components/ProjectArtifactPackagePreview";
import { ProjectExportHistory } from "@/components/ProjectExportHistory";
import { getProductDataAdapter, withDataFallback } from "@/lib/data";

export default async function ProjectDetailPage({ params, searchParams }: { params: Promise<{ projectId: string }> | { projectId: string }; searchParams?: Promise<Record<string, string | string[] | undefined>> | Record<string, string | string[] | undefined> }) {
  const resolvedParams = await Promise.resolve(params);
  const resolvedSearchParams = await Promise.resolve(searchParams ?? {});

  const project = await withDataFallback(
    async (adapter) => adapter.getProjectById(resolvedParams.projectId),
    async (fallbackAdapter) => fallbackAdapter.getProjectById(resolvedParams.projectId)
  );

  if (!project) {
    notFound();
  }

  const exports = await withDataFallback(
    async (adapter) => adapter.listProjectExports(project.id),
    async (fallbackAdapter) => fallbackAdapter.listProjectExports(project.id)
  );

  const source = getProductDataAdapter().getSourceState();
  const exportedNotice = resolvedSearchParams.exported === "1";

  return (
    <main className="avs-page-shell">
      <section className="avs-panel avs-stack">
        <div className="avs-section-kicker">Project Preview</div>
        <h1>{project.title}</h1>
        <p className="avs-muted">{project.description || "Saved visual project created from a reusable template."}</p>

        {exportedNotice ? <div className="avs-success-strip">Prompt export saved. Export history has been refreshed.</div> : null}

        <div className="avs-inline-proof">
          <span>Status: {project.status}</span>
          <span>Source: {project.source}</span>
          <span>Exports: {exports.length}</span>
          <span>Updated: {new Date(project.updatedAt).toLocaleString()}</span>
        </div>

        <div className="avs-actions">
          <a className="avs-button-primary" href={`/tap-editor?templateId=${project.templateId ?? ""}`}>Create another from template</a>
          <a className="avs-button-secondary" href="/projects">Back to projects</a>
          <a className="avs-button-secondary" href={`/projects/${project.id}/exports`}>Export history</a>
          <a className="avs-button-secondary" href={`/projects/${project.id}/package`}>Package preview</a>
        </div>
      </section>

      <PromptExportPanel project={project} />
      <ProjectArtifactPackagePreview project={project} exports={exports} />
      <ProjectExportHistory exports={exports} />

      <section className="avs-grid avs-grid-2">
        <article className="avs-card">
          <div className="avs-card-topline">Project data</div>
          <pre className="avs-code-block">
            {JSON.stringify(
              {
                id: project.id,
                templateId: project.templateId,
                status: project.status,
                inputSnapshot: project.inputSnapshot,
                outputSnapshot: project.outputSnapshot,
                dataMode: source.mode
              },
              null,
              2
            )}
          </pre>
        </article>

        <article className="avs-card">
          <div className="avs-card-topline">Download Layer</div>
          <h3>Export, download, and preserve</h3>
          <p>The v0.9.0 layer turns a saved project into a reusable artifact package with TXT, Markdown, and JSON downloads.</p>
        </article>
      </section>
    </main>
  );
}
