import { promptToTemplateStages } from "@/lib/prompt-template-generator";

export function PromptToTemplateSpecPanel() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-600">v3.5.0 Generator Spec</p>
      <h1 className="mt-3 text-4xl font-black text-slate-950">Prompt-to-Template Generator</h1>
      <p className="mt-4 text-slate-600">
        The generator converts a raw visual request into a reusable marketplace template with canon metadata.
      </p>
      <div className="mt-8 grid gap-4">
        {promptToTemplateStages.map((stage) => (
          <article key={stage.step} className="rounded-2xl border border-slate-200 p-5">
            <p className="text-xs font-bold text-purple-600">STEP {stage.step}</p>
            <h2 className="mt-1 text-xl font-bold">{stage.title}</h2>
            <p className="mt-2 text-sm text-slate-600">Input: {stage.input}</p>
            <p className="mt-1 text-sm text-slate-600">Output: {stage.output}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
