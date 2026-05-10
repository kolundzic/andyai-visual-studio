export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24">
        <div className="inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
          AndyAI Visual Studio · SaaS Scaffold v0.1
        </div>
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Professional AI Visual Templates for Serious Ideas
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">
          Browse reusable academic sci-fi templates for diagrams, dashboards, posters,
          evidence cards, and product visuals. Pick a template, customize it, and generate
          your final prompt with one TAP.
        </p>
        <div className="flex gap-4">
          <a className="rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950" href="/gallery">Explore Templates</a>
          <a className="rounded-2xl border border-white/20 px-6 py-3 font-semibold" href="/tap/AVTS-014">Try TAP</a>
        </div>
      </section>
    </main>
  );
}
