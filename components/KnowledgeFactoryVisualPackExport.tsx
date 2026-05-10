const items = [
  "Concept cards",
  "Evidence maps",
  "Explainer diagrams",
];

export function KnowledgeFactoryVisualPackExport() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">KNOWLEDGE VISUAL PACK</p>
          <h2 className="mt-3 text-xl font-black text-slate-950">{item}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">AndyAI Visual Studio turns this layer into a visible, reusable, evidence-ready production asset.</p>
        </article>
      ))}
    </section>
  );
}
