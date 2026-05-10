import { AndyAiVisualEcosystemLockBadge } from "../../components/AndyAiVisualEcosystemLockBadge";

export default function Page() {
  return (
    <main className="min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-black/80 p-8 text-white shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">v7.0.0</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">AndyAI Visual Ecosystem Lock</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200">Locks the Visual Studio ecosystem bridge across Visual Canon, Visual Factory, Animator, Knowledge Factory, Director, TAPFORGE, and repo README visual packs.</p>
        </div>
        <AndyAiVisualEcosystemLockBadge />
      </section>
    </main>
  );
}
