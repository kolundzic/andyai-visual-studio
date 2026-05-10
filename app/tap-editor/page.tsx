import TapEditorShell from "@/components/TapEditorShell";
import { listTemplatesWithSource } from "@/lib/data";

export default async function TapEditorPage() {
  const { templates, status } = await listTemplatesWithSource();

  return (
    <main className="avs-page">
      <div className="avs-status-card">
        <strong>Data source:</strong> {status.source} · <strong>Mode:</strong> {status.requestedMode} · <strong>Fallback:</strong> {status.fallbackUsed ? "yes" : "no"}
        <p>{status.message}</p>
      </div>
      <TapEditorShell templates={templates} />
    </main>
  );
}
