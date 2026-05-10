type AuthSessionPanelProps = {
  mode?: "demo" | "signed-in";
};

export function AuthSessionPanel({ mode = "demo" }: AuthSessionPanelProps) {
  const rows = [
    ["Session state", mode === "signed-in" ? "Signed in" : "Demo / fallback mode"],
    ["Workspace access", "Dashboard, Projects, Exports"],
    ["Safety rule", "Never block public demo if auth is not configured"],
  ];

  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Auth UX</p>
      <h2 className="mt-3 text-2xl font-bold">Session-aware workspace shell</h2>
      <div className="mt-6 grid gap-3">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4">
            <span className="font-medium text-neutral-600">{label}</span>
            <span className="font-semibold">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
