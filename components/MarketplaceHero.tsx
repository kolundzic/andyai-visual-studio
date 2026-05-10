import { marketplacePrinciples, marketplaceTemplates } from "@/lib/marketplace-model";

export function MarketplaceHero() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950 p-8 text-white shadow-2xl">
      <div className="mb-6 inline-flex rounded-full border border-emerald-400/30 px-4 py-2 text-sm text-emerald-200">
        v3.1.0 Marketplace Structure
      </div>
      <h1 className="text-4xl font-black tracking-tight md:text-6xl">
        AndyAI Visual Marketplace
      </h1>
      <p className="mt-5 max-w-3xl text-lg text-slate-300">
        A commercial template layer where reusable visual systems become searchable,
        packageable, and ready for production workflows.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {marketplaceTemplates.map((template) => (
          <article key={template.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{template.id}</p>
            <h2 className="mt-3 text-xl font-bold">{template.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{template.summary}</p>
            <p className="mt-4 text-sm text-emerald-200">{template.category} · {template.license}</p>
          </article>
        ))}
      </div>
      <ul className="mt-8 space-y-2 text-sm text-slate-300">
        {marketplacePrinciples.map((item) => <li key={item}>✅ {item}</li>)}
      </ul>
    </section>
  );
}
