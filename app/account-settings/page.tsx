import { accountProfileFields } from "@/lib/account-profile";

export default function AccountSettingsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">v2.8.0</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Account Settings + User Profile</h1>
      <p className="mt-4 max-w-3xl text-lg text-neutral-700">
        Account settings prepare the product for personalization, brand identity,
        and export preferences.
      </p>
      <section className="mt-10 grid gap-4">
        {accountProfileFields.map((field) => (
          <article key={field.label} className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">{field.label}</h2>
            <p className="mt-3 text-neutral-700">{field.purpose}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
