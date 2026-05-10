import { getCurrentSupabaseUser, createServerSupabaseClient } from "@/lib/supabase/server";
import type {
  AvsDataSourceState,
  AvsExport,
  AvsProductDataAdapter,
  AvsProject,
  AvsProjectCreateInput,
  AvsProjectUpdateInput,
  AvsTemplate
} from "./types";

type TemplateRow = {
  id: string;
  slug: string | null;
  title: string | null;
  description: string | null;
  category: string | null;
  tags: string[] | null;
  status: string | null;
  preview_kind: string | null;
  tap_prompt: string | null;
  workflow: string[] | null;
  created_at: string | null;
  updated_at: string | null;
};

type ProjectRow = {
  id: string;
  owner_id: string | null;
  template_id: string | null;
  title: string | null;
  description: string | null;
  tap_prompt: string | null;
  status: string | null;
  input_snapshot: Record<string, unknown> | null;
  output_snapshot: Record<string, unknown> | null;
  created_at: string | null;
  updated_at: string | null;
};

function mapTemplate(row: TemplateRow): AvsTemplate {
  return {
    id: row.id,
    slug: row.slug ?? row.id,
    title: row.title ?? "Untitled Template",
    description: row.description ?? "",
    category: row.category ?? "General",
    tags: row.tags ?? [],
    status: row.status === "draft" || row.status === "archived" ? row.status : "published",
    previewKind: row.preview_kind ?? "prompt",
    tapPrompt: row.tap_prompt ?? "",
    workflow: row.workflow ?? [],
    createdAt: row.created_at ?? undefined,
    updatedAt: row.updated_at ?? undefined
  };
}

function mapProject(row: ProjectRow): AvsProject {
  return {
    id: row.id,
    ownerId: row.owner_id ?? "unknown",
    templateId: row.template_id,
    title: row.title ?? "Untitled Project",
    description: row.description ?? "",
    tapPrompt: row.tap_prompt ?? "",
    status: row.status === "ready" || row.status === "exported" || row.status === "archived" ? row.status : "draft",
    source: "supabase",
    inputSnapshot: row.input_snapshot ?? {},
    outputSnapshot: row.output_snapshot ?? {},
    createdAt: row.created_at ?? new Date().toISOString(),
    updatedAt: row.updated_at ?? new Date().toISOString()
  };
}

export function createSupabaseAdapter(): AvsProductDataAdapter {
  return {
    getSourceState(): AvsDataSourceState {
      return {
        mode: "supabase",
        fallback: false,
        reason: "Live Supabase adapter active"
      };
    },

    async listTemplates(): Promise<AvsTemplate[]> {
      const supabase = await createServerSupabaseClient();
      const { data, error } = await supabase
        .from("avs_templates")
        .select("*")
        .eq("status", "published")
        .order("updated_at", { ascending: false });

      if (error || !data) {
        throw new Error(error?.message ?? "Unable to load templates");
      }

      return (data as TemplateRow[]).map(mapTemplate);
    },

    async getTemplateById(templateId: string): Promise<AvsTemplate | null> {
      const supabase = await createServerSupabaseClient();
      const { data, error } = await supabase
        .from("avs_templates")
        .select("*")
        .or(`id.eq.${templateId},slug.eq.${templateId}`)
        .limit(1)
        .maybeSingle();

      if (error) {
        throw new Error(error.message);
      }

      return data ? mapTemplate(data as TemplateRow) : null;
    },

    async listProjects(ownerId?: string): Promise<AvsProject[]> {
      const user = await getCurrentSupabaseUser();
      const effectiveOwnerId = ownerId ?? user?.id;

      if (!effectiveOwnerId) {
        return [];
      }

      const supabase = await createServerSupabaseClient();
      const { data, error } = await supabase
        .from("avs_projects")
        .select("*")
        .eq("owner_id", effectiveOwnerId)
        .order("updated_at", { ascending: false });

      if (error || !data) {
        throw new Error(error?.message ?? "Unable to load projects");
      }

      return (data as ProjectRow[]).map(mapProject);
    },

    async getProjectById(projectId: string, ownerId?: string): Promise<AvsProject | null> {
      const user = await getCurrentSupabaseUser();
      const effectiveOwnerId = ownerId ?? user?.id;

      if (!effectiveOwnerId) {
        return null;
      }

      const supabase = await createServerSupabaseClient();
      const { data, error } = await supabase
        .from("avs_projects")
        .select("*")
        .eq("id", projectId)
        .eq("owner_id", effectiveOwnerId)
        .maybeSingle();

      if (error) {
        throw new Error(error.message);
      }

      return data ? mapProject(data as ProjectRow) : null;
    },

    async createProjectFromTemplate(input: AvsProjectCreateInput): Promise<AvsProject> {
      const user = await getCurrentSupabaseUser();

      if (!user?.id) {
        throw new Error("LOGIN_REQUIRED");
      }

      const supabase = await createServerSupabaseClient();
      const payload = {
        owner_id: user.id,
        template_id: input.templateId,
        title: input.title,
        description: input.description ?? "",
        tap_prompt: input.tapPrompt,
        status: "draft",
        input_snapshot: input.inputSnapshot ?? {},
        output_snapshot: {
          preview: "Project saved. Export and generation steps are prepared for the next release."
        }
      };

      const { data, error } = await supabase
        .from("avs_projects")
        .insert(payload)
        .select("*")
        .single();

      if (error || !data) {
        throw new Error(error?.message ?? "Unable to create project");
      }

      return mapProject(data as ProjectRow);
    },

    async updateProject(input: AvsProjectUpdateInput): Promise<AvsProject | null> {
      const user = await getCurrentSupabaseUser();

      if (!user?.id) {
        throw new Error("LOGIN_REQUIRED");
      }

      const patch: Record<string, unknown> = {
        updated_at: new Date().toISOString()
      };

      if (input.title !== undefined) patch.title = input.title;
      if (input.description !== undefined) patch.description = input.description;
      if (input.tapPrompt !== undefined) patch.tap_prompt = input.tapPrompt;
      if (input.status !== undefined) patch.status = input.status;
      if (input.outputSnapshot !== undefined) patch.output_snapshot = input.outputSnapshot;

      const supabase = await createServerSupabaseClient();
      const { data, error } = await supabase
        .from("avs_projects")
        .update(patch)
        .eq("id", input.projectId)
        .eq("owner_id", user.id)
        .select("*")
        .single();

      if (error || !data) {
        throw new Error(error?.message ?? "Unable to update project");
      }

      return mapProject(data as ProjectRow);
    },

    async listExports(projectId: string, ownerId?: string): Promise<AvsExport[]> {
      const user = await getCurrentSupabaseUser();
      const effectiveOwnerId = ownerId ?? user?.id;

      if (!effectiveOwnerId) {
        return [];
      }

      const supabase = await createServerSupabaseClient();
      const { data, error } = await supabase
        .from("avs_exports")
        .select("*")
        .eq("project_id", projectId)
        .eq("owner_id", effectiveOwnerId)
        .order("created_at", { ascending: false });

      if (error || !data) {
        throw new Error(error?.message ?? "Unable to load exports");
      }

      return data.map((row: any) => ({
        id: row.id,
        ownerId: row.owner_id,
        projectId: row.project_id,
        exportType: row.export_type,
        exportPayload: row.export_payload ?? {},
        createdAt: row.created_at
      }));
    }
  };
}
