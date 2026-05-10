import { visualCanonPacks } from "@/lib/visual-canon-packs";

export default function VisualCanonPacksPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="rounded-3xl bg-slate-950 p-8 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">v3.4.0 Visual Canon Packs</p>
        <h1 className="mt-3 text-4xl font-black">Visual Canon Template Packs</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Packs group marketplace templates into coherent AndyAI visual systems.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {visualCanonPacks.map((pack) => (
            <article key={pack.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs text-cyan-200">{pack.id}</p>
              <h2 className="mt-2 text-xl font-bold">{pack.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{pack.purpose}</p>
              <p className="mt-4 text-xs text-slate-400">Templates: {pack.templates.join(", ")}</p>
              <p className="mt-2 text-xs text-slate-400">Canon: {pack.canonLinks.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
