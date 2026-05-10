import { evidenceMetadataFields } from "../lib/evidence-metadata";

export default function EvidenceMetadataPanel() {
  return (
    <section className="studio-panel">
      <p className="eyebrow">v4.8.0 · Evidence + Metadata Export Layer</p>
      <h1>Evidence metadata contract</h1>
      <p className="muted">Every artifact should carry proof of source, ownership, format, and review status.</p>
      <div className="grid three">
        {evidenceMetadataFields.map((field) => <article className="card" key={field}><h3>{field}</h3></article>)}
      </div>
    </section>
  );
}
