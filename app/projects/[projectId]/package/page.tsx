import { notFound } from "next/navigation";
import { ProjectArtifactPackagePreview } from "@/components/ProjectArtifactPackagePreview";
import { getProductDataAdapter, withDataFallback } from "@/lib/data";
import { buildProjectArtifactFiles } from "@/lib/export-package";

export default async function ProjectPackagePage({ params }: { params: Promise<{ projectId: string }> | { projectId: string } }) {
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
  const files = buildProjectArtifactFiles(project, exports);

  return (
    <main className="avs-page-shell">
      <section className="avs-hero-small">
        <div className="avs-section-kicker">Project Package Preview</div>
        <h1>{project.title}</h1>
        <p>Review the complete downloadable artifact package before handing it to a generator, teammate, client, or archive.</p>
        <div className="avs-inline-proof">
          <span>Files: {files.length}</span>
          <span>Exports: {exports.length}</span>
          <span>Mode: {source.mode}</span>
          <span>Fallback: {source.fallback ? "yes" : "no"}</span>
        </div>
        <div className="avs-actions">
          <a className="avs-button-primary" href={`/projects/${project.id}`}>Back to project</a>
          <a className="avs-button-secondary" href={`/projects/${project.id}/exports`}>Export history</a>
        </div>
      </section>

      <ProjectArtifactPackagePreview project={project} exports={exports} />

      <section className="avs-panel avs-stack">
        <div className="avs-section-kicker">Package Manifest</div>
        <pre className="avs-code-block">{JSON.stringify(files.map(({ content, ...file }) => ({ ...file, bytes: content.length })), null, 2)}</pre>
      </section>
    </main>
  );
}
