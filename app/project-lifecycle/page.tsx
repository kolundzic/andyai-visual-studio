import { projectLifecycle } from "@/lib/project-lifecycle";

export default function ProjectLifecyclePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">v2.4.0</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Project Lifecycle Management</h1>
      <p className="mt-4 max-w-3xl text-lg text-neutral-700">
        The project lifecycle turns saved work into a managed flow: create, edit,
        export, and archive.
      </p>
      <ol className="mt-10 grid gap-4">
        {projectLifecycle.map((step, index) => (
          <li key={step.status} className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-red-600">Step {index + 1}</div>
            <h2 className="mt-2 text-2xl font-bold">{step.status}</h2>
            <p className="mt-2 text-neutral-700">{step.explanation}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}
