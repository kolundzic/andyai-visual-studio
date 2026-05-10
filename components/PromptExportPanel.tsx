import { createPromptExportAction } from "@/app/actions/export-actions";
import type { AvsProject } from "@/lib/data";
import { CopyPromptButton } from "./CopyPromptButton";

type PromptExportPanelProps = {
  project: AvsProject;
};

export function PromptExportPanel({ project }: PromptExportPanelProps) {
  return (
    <section className="avs-panel avs-stack">
      <div className="avs-section-kicker">Prompt Export</div>
      <h2>Export edited TAP prompt</h2>
      <p className="avs-muted">
        Save the current prompt snapshot into export history, copy it to clipboard, or use the generated payload as the next production handoff.
      </p>

      <pre className="avs-code-block">{project.tapPrompt}</pre>

      <div className="avs-actions">
        <CopyPromptButton text={project.tapPrompt} />
        <form action={createPromptExportAction} className="avs-inline-form">
          <input type="hidden" name="projectId" value={project.id} />
          <input type="hidden" name="promptSnapshot" value={project.tapPrompt} />
          <input type="hidden" name="exportType" value="prompt" />
          <input type="hidden" name="label" value="Prompt clipboard export" />
          <button className="avs-button-primary" type="submit">Save prompt export</button>
        </form>
        <form action={createPromptExportAction} className="avs-inline-form">
          <input type="hidden" name="projectId" value={project.id} />
          <input type="hidden" name="promptSnapshot" value={project.tapPrompt} />
          <input type="hidden" name="exportType" value="markdown" />
          <input type="hidden" name="label" value="Markdown prompt export" />
          <button className="avs-button-secondary" type="submit">Save Markdown export</button>
        </form>
        <a className="avs-button-secondary" href={`/projects/${project.id}/exports`}>Open export preview</a>
      </div>
    </section>
  );
}
