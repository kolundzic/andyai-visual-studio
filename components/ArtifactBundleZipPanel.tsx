import { artifactBundleManifest } from "../lib/artifact-bundle";

export default function ArtifactBundleZipPanel() {
  return (
    <section className="studio-panel">
      <p className="eyebrow">v4.7.0 · Project Artifact Bundle ZIP Export</p>
      <h1>Artifact bundle manifest</h1>
      <p className="muted">Defines the future ZIP export structure for complete project handoff.</p>
      <div className="grid two">
        {artifactBundleManifest.map((item) => (
          <article className="card" key={item.file}>
            <h3>{item.file}</h3>
            <p>{item.purpose}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
