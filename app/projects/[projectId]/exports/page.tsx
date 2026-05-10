import { notFound } from "next/navigation";
import { CopyPromptButton } from "@/components/CopyPromptButton";
import { ExportDownloadButton } from "@/components/ExportDownloadButton";
import { getProductDataAdapter, withDataFallback } from "@/lib/data";
import { buildSingleExportFiles } from "@/lib/export-package";

export default async function ProjectExportsPage({ params }: { params: Promise<{ projectId: string }> | { projectId: string } }) {
  const resolvedParams = await Promise.resolve(params);
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

  return (
    <main className="avs-page-shell">
      <section className="avs-hero-small">
        <div className="avs-section-kicker">Project Export Preview</div>
        <h1>{project.title}</h1>
        <p>Review prompt snapshots, saved payloads, download formats, and copy-ready export content for this project.</p>
        <div className="avs-inline-proof">
          <span>Mode: {source.mode}</span>
          <span>Exports: {exports.length}</span>
        </div>
        <div className="avs-actions">
          <a className="avs-button-primary" href={`/projects/${project.id}`}>Back to project</a>
          <a className="avs-button-secondary" href={`/projects/${project.id}/package`}>Package preview</a>
          <CopyPromptButton text={project.tapPrompt} />
        </div>
      </section>

      <section className="avs-stack">
        {exports.length === 0 ? (
          <article className="avs-card">
            <div className="avs-card-topline">No exports yet</div>
            <h3>Save an export first</h3>
            <p>Return to the project preview and click Save prompt export.</p>
          </article>
        ) : (
          exports.map((item) => {
            const files = buildSingleExportFiles(project, item);
            return (
              <article className="avs-card" key={item.id}>
                <div className="avs-card-topline">{item.exportType}</div>
                <h3>{item.label}</h3>
                <div className="avs-inline-proof">
                  <span>{item.id}</span>
                  <span>{new Date(item.createdAt).toLocaleString()}</span>
                </div>
                <pre className="avs-code-block">{JSON.stringify(item, null, 2)}</pre>
                <div className="avs-actions">
                  {files.map((file) => (
                    <ExportDownloadButton key={file.filename} filename={file.filename} content={file.content} mimeType={file.mimeType} label={file.label} />
                  ))}
                </div>
              </article>
            );
          })
        )}
      </section>
    </main>
  );
}
