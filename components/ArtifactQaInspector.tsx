import { artifactQaChecks } from "../lib/artifact-qa-inspector";

export default function ArtifactQaInspector() {
  return (
    <section className="studio-panel">
      <p className="eyebrow">v4.9.0 · Artifact QA + Preview Inspector</p>
      <h1>Artifact QA inspector</h1>
      <p className="muted">A visible inspection model before artifact delivery, sharing, or export.</p>
      <div className="grid two">
        {artifactQaChecks.map((check) => <article className="card" key={check}><h3>🟢 {check}</h3></article>)}
      </div>
    </section>
  );
}
