import type { AvsExport } from "@/lib/data";
import { CopyPromptButton } from "./CopyPromptButton";

type ProjectExportHistoryProps = {
  exports: AvsExport[];
};

export function ProjectExportHistory({ exports }: ProjectExportHistoryProps) {
  return (
    <section className="avs-panel avs-stack">
      <div className="avs-section-kicker">Export History</div>
      <h2>Saved exports</h2>
      <p className="avs-muted">
        Every export keeps a prompt snapshot, format, timestamp, and payload preview for later proof or regeneration.
      </p>

      {exports.length === 0 ? (
        <div className="avs-empty-state">No exports yet. Save the first prompt export from the panel above.</div>
      ) : (
        <div className="avs-stack">
          {exports.map((item) => (
            <article className="avs-card" key={item.id}>
              <div className="avs-card-topline">{item.exportType}</div>
              <h3>{item.label}</h3>
              <div className="avs-inline-proof">
                <span>{item.source}</span>
                <span>{new Date(item.createdAt).toLocaleString()}</span>
              </div>
              <pre className="avs-code-block">{item.promptSnapshot || JSON.stringify(item.exportPayload, null, 2)}</pre>
              <div className="avs-actions">
                <CopyPromptButton text={item.promptSnapshot || JSON.stringify(item.exportPayload, null, 2)} label="Copy snapshot" />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
