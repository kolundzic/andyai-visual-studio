export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">v7.1.0</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Public Showcase Polish</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A polished public showcase layer that explains AndyAI Visual Studio as a visible, client-ready product rather than an internal build artifact.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"><strong>Show</strong><p className="mt-2 text-sm text-slate-400">Make the product understandable in one glance.</p></div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"><strong>Prove</strong><p className="mt-2 text-sm text-slate-400">Expose routes, QA, locks, and demo evidence.</p></div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"><strong>Convert</strong><p className="mt-2 text-sm text-slate-400">Guide visitors toward demo, partner, and client flows.</p></div>
        </div>
      </section>
    </main>
  );
}
