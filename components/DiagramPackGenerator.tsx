import { diagramPackTypes } from "../lib/diagram-pack-generator";

export default function DiagramPackGenerator() {
  return (
    <section className="studio-panel">
      <p className="eyebrow">v4.6.0 · Diagram Pack Generator</p>
      <h1>Canonical five-diagram output set</h1>
      <p className="muted">A generator model for producing the AndyAI standard diagram set from one project brief.</p>
      <div className="grid two">
        {diagramPackTypes.map((type) => <article className="card" key={type}><h3>{type}</h3></article>)}
      </div>
    </section>
  );
}
