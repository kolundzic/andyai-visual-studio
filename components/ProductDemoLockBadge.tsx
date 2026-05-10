import { productDemoLockLayers } from "@/lib/product-demo-lock";

export function ProductDemoLockBadge() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">v8.0.0 Lock</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">Public Showcase Polish and Product Demo Lock</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          AndyAI Visual Studio now has a public showcase polish layer, product demo storyline, visual proof gallery,
          persona paths, launch assets, and demo smoke verification.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {productDemoLockLayers.map((layer, index) => (
            <div key={layer} className="rounded-2xl border border-emerald-200 bg-white p-4">
              <span className="text-xs font-bold text-emerald-700">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-1 font-semibold text-slate-900">{layer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
