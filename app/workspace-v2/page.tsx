import { WorkspaceDashboardV2 } from "@/components/WorkspaceDashboardV2";

export default function WorkspaceV2Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">v2.3.0</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">User Workspace Dashboard v2</h1>
      <p className="mt-4 max-w-3xl text-lg text-neutral-700">
        A clearer dashboard model for beta users: projects, exports, readiness signals,
        and workspace ownership all become visible.
      </p>
      <div className="mt-10">
        <WorkspaceDashboardV2 />
      </div>
    </main>
  );
}
