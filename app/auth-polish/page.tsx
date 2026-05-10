import { AuthSessionPanel } from "@/components/AuthSessionPanel";

export default function AuthPolishPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">v2.2.0</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Auth Session UX Polish</h1>
      <p className="mt-4 max-w-3xl text-lg text-neutral-700">
        This layer explains the user session model in plain product language and keeps
        the public demo safe even when live auth is not yet configured.
      </p>
      <div className="mt-10">
        <AuthSessionPanel />
      </div>
    </main>
  );
}
