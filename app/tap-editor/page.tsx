import { notFound } from "next/navigation";
import { ProjectCreateForm } from "@/components/ProjectCreateForm";
import { getProductDataAdapter, withDataFallback } from "@/lib/data";

type TapEditorPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>> | Record<string, string | string[] | undefined>;
};

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function TapEditorPage({ searchParams }: TapEditorPageProps) {
  const resolvedSearchParams = await Promise.resolve(searchParams ?? {});
  const requestedTemplateId = firstValue(resolvedSearchParams.templateId);

  const templates = await withDataFallback(
    async (adapter) => adapter.listTemplates(),
    async (fallbackAdapter) => fallbackAdapter.listTemplates()
  );

  const templateId = requestedTemplateId ?? templates[0]?.id;
  const template = templateId
    ? await withDataFallback(
        async (adapter) => adapter.getTemplateById(templateId),
        async (fallbackAdapter) => fallbackAdapter.getTemplateById(templateId)
      )
    : null;

  if (!template) {
    notFound();
  }

  const source = getProductDataAdapter().getSourceState();

  return (
    <main className="avs-page-shell">
      <section className="avs-hero-small">
        <div className="avs-section-kicker">v0.7.0 Project Creation Flow</div>
        <h1>Template → TAP Editor → Saved Project</h1>
        <p>
          Edit the reusable template prompt and save it into the user workspace as a project preview.
        </p>
        <div className="avs-inline-proof">
          <span>Template: {template.title}</span>
          <span>Data mode: {source.mode}</span>
          <span>{source.reason}</span>
        </div>
      </section>

      <ProjectCreateForm template={template} />
    </main>
  );
}
