import { marketplaceCategories, searchV2Rules } from "@/lib/marketplace-taxonomy";

export function MarketplaceSearchPanel() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">v3.2.0 Search v2</p>
      <h1 className="mt-3 text-4xl font-black text-slate-950">Categories, Tags, and Search Logic</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Marketplace discovery is organized around categories, tags, output formats,
        and proof metadata so users can find useful templates quickly.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {marketplaceCategories.map((category) => (
          <article key={category.slug} className="rounded-2xl border border-slate-200 p-5">
            <h2 className="text-xl font-bold text-slate-950">{category.label}</h2>
            <p className="mt-2 text-sm text-slate-600">{category.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-2xl bg-slate-950 p-5 text-white">
        <h2 className="text-lg font-bold">Search v2 Rules</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {searchV2Rules.map((rule) => <li key={rule}>✅ {rule}</li>)}
        </ul>
      </div>
    </section>
  );
}
