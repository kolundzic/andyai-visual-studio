import type { AvsExport, AvsProject } from "@/lib/data";
import { buildArtifactMetadata, buildProjectArtifactFiles } from "@/lib/export-package";
import { ExportDownloadButton } from "./ExportDownloadButton";

export function ProjectArtifactPackagePreview({ project, exports }: { project: AvsProject; exports: AvsExport[] }) {
  const files = buildProjectArtifactFiles(project, exports);
  const metadata = buildArtifactMetadata(project, exports);

  return (
    <section className="avs-panel avs-stack">
      <div className="avs-section-kicker">Artifact Package</div>
      <h2>Download-ready project package</h2>
      <p className="avs-muted">
        Export the edited TAP prompt as plain text, Markdown, or structured JSON with project metadata and export history.
      </p>

      <div className="avs-metadata-grid">
        <span>Project: {metadata.projectTitle}</span>
        <span>Status: {metadata.projectStatus}</span>
        <span>Exports: {metadata.exportCount}</span>
        <span>Package: {metadata.packageVersion}</span>
      </div>

      <div className="avs-file-grid">
        {files.map((file) => (
          <article className="avs-download-card" key={file.filename}>
            <div className="avs-card-topline">.{file.format}</div>
            <h3>{file.filename}</h3>
            <p>{file.description}</p>
            <ExportDownloadButton filename={file.filename} content={file.content} mimeType={file.mimeType} label={file.label} />
          </article>
        ))}
      </div>
    </section>
  );
}
