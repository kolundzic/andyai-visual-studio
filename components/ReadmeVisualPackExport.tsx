import { readmeVisualPackItems } from "../lib/readme-visual-pack";

export default function ReadmeVisualPackExport() {
  return (
    <section className="studio-panel">
      <p className="eyebrow">v4.5.0 · Markdown/README Visual Pack Export</p>
      <h1>README visual pack export</h1>
      <p className="muted">A structured export model for turning projects into polished GitHub-ready visual README packs.</p>
      <div className="grid three">
        {readmeVisualPackItems.map((item) => <article className="card" key={item}><h3>{item}</h3></article>)}
      </div>
    </section>
  );
}
