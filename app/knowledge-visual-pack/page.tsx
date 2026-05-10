import { KnowledgeFactoryVisualPackExport } from "../../components/KnowledgeFactoryVisualPackExport";

export default function Page() {
  return (
    <main className="min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-black/80 p-8 text-white shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">v6.4.0</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Knowledge Factory Visual Pack Export</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200">Exports visual explanation packs from projects into Knowledge Factory learning and evidence structures.</p>
        </div>
        <KnowledgeFactoryVisualPackExport />
      </section>
    </main>
  );
}
