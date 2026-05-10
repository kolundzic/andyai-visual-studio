import { EcosystemCrosslinkingQa } from "../../components/EcosystemCrosslinkingQa";

export default function Page() {
  return (
    <main className="min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-black/80 p-8 text-white shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">v6.9.0</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Ecosystem QA + Cross-Linking</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200">Verifies ecosystem-facing routes and locks cross-linking between Visual Studio and core AndyAI systems.</p>
        </div>
        <EcosystemCrosslinkingQa />
      </section>
    </main>
  );
}
