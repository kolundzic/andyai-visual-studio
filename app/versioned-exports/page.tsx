import { versionedArtifacts } from "@/lib/versioned-artifacts";

export default function VersionedExportsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">v2.5.0</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Export History + Versioned Artifacts</h1>
      <p className="mt-4 max-w-3xl text-lg text-neutral-700">
        Exports are no longer just files. They are versioned product artifacts with
        history, format, and purpose.
      </p>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {versionedArtifacts.map((artifact) => (
          <article key={artifact.version} className="rounded-3xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-red-600">{artifact.version}</p>
            <h2 className="mt-2 text-2xl font-bold">{artifact.format}</h2>
            <p className="mt-3 text-neutral-700">{artifact.purpose}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
