export default function SchemaHardeningPage() {
  const checks = [
    "Template production status",
    "Project lifecycle status",
    "Export artifact versioning",
    "Owner-scoped indexes",
    "Beta-ready schema comments",
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">v2.1.0</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Supabase Production Schema Hardening</h1>
      <p className="mt-4 max-w-3xl text-lg text-neutral-700">
        The data model is now prepared for public beta behavior: production templates,
        user-owned project lifecycle states, export versions, and safer query paths.
      </p>
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {checks.map((check) => (
          <div key={check} className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-neutral-500">Schema Check</div>
            <div className="mt-2 text-xl font-semibold">{check}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
