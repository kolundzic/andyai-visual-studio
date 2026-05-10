import { htmlExportContract, htmlExportSections } from "../lib/html-export";

export default function HtmlExportPreview() {
  return (
    <section className="studio-panel">
      <p className="eyebrow">v4.4.0 · HTML Export Layer</p>
      <h1>HTML export as a readable working screen</h1>
      <p className="muted">{htmlExportContract.goal}</p>
      <div className="grid two">
        {htmlExportSections.map((section) => (
          <article className="card" key={section}><h3>{section}</h3></article>
        ))}
      </div>
    </section>
  );
}
