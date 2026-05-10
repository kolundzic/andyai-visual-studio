import { svgArtifactContract } from "../lib/svg-artifact-generator";

export default function SvgArtifactGeneratorPanel() {
  return (
    <section className="studio-panel">
      <p className="eyebrow">v4.3.0 · SVG Artifact Generator Layer</p>
      <h1>SVG artifact generator contract</h1>
      <p className="muted">Defines how visual template outputs can become lightweight, editable SVG artifacts.</p>
      <div className="card">
        <h2>{svgArtifactContract.purpose}</h2>
        <p>Format: {svgArtifactContract.format}</p>
        <ul>{svgArtifactContract.rules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
      </div>
    </section>
  );
}
