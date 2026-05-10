import { getRequestedDataMode, isSupabaseConfigured } from "@/lib/supabase/env";
import { createServerSupabaseAuthClient } from "@/lib/supabase/server";

export type WorkspaceProject = {
  id: string;
  ownerId: string;
  templateId: string | null;
  title: string;
  status: string;
  userPrompt: string;
  generatedPrompt: string;
  createdAt: string;
  updatedAt: string;
};

export type WorkspaceProjectSource = "local-mock" | "supabase" | "supabase-fallback";

export type WorkspaceProjectsResult = {
  projects: WorkspaceProject[];
  source: WorkspaceProjectSource;
  fallbackUsed: boolean;
  message: string;
};

function mockProjectsFor(ownerId: string): WorkspaceProject[] {
  const now = new Date().toISOString();

  return [
    {
      id: "mock-project-001",
      ownerId,
      templateId: "mock-avts-001",
      title: "Agent Architecture Map Draft",
      status: "draft",
      userPrompt: "Explain an AI agent system with tools, memory, approval, and evidence.",
      generatedPrompt: "Create a premium block diagram for an AI agent architecture with human approval and evidence gates.",
      createdAt: now,
      updatedAt: now,
    },
    {
      id: "mock-project-002",
      ownerId,
      templateId: "mock-avts-002",
      title: "Visual Studio Product Flow",
      status: "ready",
      userPrompt: "Map the SaaS user journey from gallery to export.",
      generatedPrompt: "Create a clean SaaS journey board showing gallery, template detail, TAP editor, export, pricing, and dashboard.",
      createdAt: now,
      updatedAt: now,
    },
  ];
}

function mapProject(row: Record<string, unknown>): WorkspaceProject {
  return {
    id: String(row.id ?? ""),
    ownerId: String(row.owner_id ?? row.user_id ?? ""),
    templateId: row.template_id ? String(row.template_id) : null,
    title: String(row.title ?? "Untitled project"),
    status: String(row.status ?? "draft"),
    userPrompt: String(row.user_prompt ?? row.prompt_input ?? ""),
    generatedPrompt: String(row.generated_prompt ?? ""),
    createdAt: String(row.created_at ?? ""),
    updatedAt: String(row.updated_at ?? row.created_at ?? ""),
  };
}

export async function listWorkspaceProjects(ownerId: string): Promise<WorkspaceProjectsResult> {
  const mode = getRequestedDataMode();

  if (mode !== "supabase") {
    return {
      projects: mockProjectsFor(ownerId),
      source: "local-mock",
      fallbackUsed: false,
      message: "Using local mock workspace projects because AVS_DATA_MODE is not supabase.",
    };
  }

  if (!isSupabaseConfigured()) {
    return {
      projects: mockProjectsFor(ownerId),
      source: "supabase-fallback",
      fallbackUsed: true,
      message: "Supabase mode requested, but env vars are missing. Falling back to mock workspace projects.",
    };
  }

  try {
    const supabase = await createServerSupabaseAuthClient();

    if (!supabase) {
      throw new Error("Auth-aware Supabase server client is not available.");
    }

    const { data, error } = await supabase
      .from("avs_projects")
      .select("*")
      .eq("owner_id", ownerId)
      .order("updated_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return {
      projects: (data ?? []).map((row) => mapProject(row as Record<string, unknown>)),
      source: "supabase",
      fallbackUsed: false,
      message: "Using authenticated Supabase workspace project data.",
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Supabase workspace error.";

    return {
      projects: mockProjectsFor(ownerId),
      source: "supabase-fallback",
      fallbackUsed: true,
      message: `Supabase workspace read failed. Falling back to mock data. ${message}`,
    };
  }
}

export async function getWorkspaceProject(ownerId: string, projectId: string): Promise<WorkspaceProject | null> {
  const result = await listWorkspaceProjects(ownerId);
  return result.projects.find((project) => project.id === projectId) ?? null;
}
