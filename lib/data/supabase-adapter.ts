import { createServerSupabaseClient } from "../supabase/server";
import type { ProductDataAdapter, VisualTemplate } from "./types";

function asStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String);
  }

  if (typeof value === "string" && value.trim()) {
    return value.split(",").map((item) => item.trim()).filter(Boolean);
  }

  return [];
}

function mapTemplate(row: Record<string, unknown>): VisualTemplate {
  return {
    id: String(row.id ?? row.template_id ?? ""),
    template_id: String(row.template_id ?? row.id ?? ""),
    slug: String(row.slug ?? row.template_id ?? row.id ?? ""),
    title: String(row.title ?? "Untitled template"),
    category: String(row.category ?? "General"),
    summary: String(row.summary ?? row.description ?? ""),
    prompt: String(row.prompt ?? row.master_prompt ?? ""),
    workflow_steps: asStringArray(row.workflow_steps),
    tags: asStringArray(row.tags),
    tier: (row.tier === "creator" || row.tier === "pro" || row.tier === "studio" ? row.tier : "free") as VisualTemplate["tier"],
    status: (row.status === "draft" || row.status === "archived" ? row.status : "published") as VisualTemplate["status"],
    created_at: row.created_at ? String(row.created_at) : undefined,
    updated_at: row.updated_at ? String(row.updated_at) : undefined,
  };
}

export const supabaseAdapter: ProductDataAdapter = {
  async listTemplates() {
    const supabase = createServerSupabaseClient();

    if (!supabase) {
      throw new Error("Supabase client is not configured. Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
    }

    const { data, error } = await supabase
      .from("avs_templates")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(`Supabase templates fetch failed: ${error.message}`);
    }

    return (data ?? []).map((row) => mapTemplate(row as Record<string, unknown>));
  },

  async getTemplate(templateIdOrSlug: string) {
    const templates = await this.listTemplates();
    return (
      templates.find(
        (template) =>
          template.id === templateIdOrSlug ||
          template.template_id === templateIdOrSlug ||
          template.slug === templateIdOrSlug,
      ) ?? null
    );
  },
};
