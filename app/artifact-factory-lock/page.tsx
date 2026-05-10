import ArtifactFactoryLockBadge from "../../components/ArtifactFactoryLockBadge";

const layers = [
  "AI Prompt Assistant",
  "Template Customization Wizard",
  "SVG Artifact Generator",
  "HTML Export Layer",
  "README Visual Pack Export",
  "Diagram Pack Generator",
  "Artifact Bundle ZIP Export",
  "Evidence Metadata Export",
  "Artifact QA Inspector",
];

export default function ArtifactFactoryLockPage() {
  return (
    <section className="studio-panel">
      <ArtifactFactoryLockBadge />
      <p className="eyebrow">v5.0.0 · Factory Lock</p>
      <h1>AndyAI Visual Artifact Factory</h1>
      <p className="muted">
        The product now has a locked artifact factory architecture: guided prompt, customization, export,
        evidence, QA, and bundle handoff.
      </p>
      <div className="grid three">
        {layers.map((layer) => <article className="card" key={layer}><h3>{layer}</h3></article>)}
      </div>
    </section>
  );
}
