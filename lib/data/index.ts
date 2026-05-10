import { getRequestedDataMode, isSupabaseConfigured } from "../supabase/env";
import { localMockAdapter } from "./local-mock-adapter";
import { supabaseAdapter } from "./supabase-adapter";
import type { DataSourceStatus, ProductDataAdapter, TemplateResult, TemplatesResult } from "./types";

export * from "./types";
export { localMockAdapter } from "./local-mock-adapter";
export { supabaseAdapter } from "./supabase-adapter";

export function getProductDataAdapter(): ProductDataAdapter {
  const requestedMode = getRequestedDataMode();

  if (requestedMode === "supabase" && isSupabaseConfigured()) {
    return supabaseAdapter;
  }

  return localMockAdapter;
}

function statusForLocalMock(message: string): DataSourceStatus {
  return {
    requestedMode: getRequestedDataMode(),
    source: "local-mock",
    supabaseConfigured: isSupabaseConfigured(),
    fallbackUsed: false,
    message,
  };
}

function statusForSupabase(message: string): DataSourceStatus {
  return {
    requestedMode: "supabase",
    source: "supabase",
    supabaseConfigured: true,
    fallbackUsed: false,
    message,
  };
}

function statusForFallback(message: string): DataSourceStatus {
  return {
    requestedMode: getRequestedDataMode(),
    source: "supabase-fallback",
    supabaseConfigured: isSupabaseConfigured(),
    fallbackUsed: true,
    message,
  };
}

export async function listTemplatesWithSource(): Promise<TemplatesResult> {
  const requestedMode = getRequestedDataMode();

  if (requestedMode !== "supabase") {
    return {
      templates: await localMockAdapter.listTemplates(),
      status: statusForLocalMock("Using local mock adapter because AVS_DATA_MODE is not set to supabase."),
    };
  }

  if (!isSupabaseConfigured()) {
    return {
      templates: await localMockAdapter.listTemplates(),
      status: statusForFallback("Supabase mode requested, but public Supabase env vars are missing. Falling back to local mock data."),
    };
  }

  try {
    return {
      templates: await supabaseAdapter.listTemplates(),
      status: statusForSupabase("Using live Supabase avs_templates data."),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Supabase adapter error.";
    return {
      templates: await localMockAdapter.listTemplates(),
      status: statusForFallback(`Live Supabase fetch failed. Falling back to local mock data. Reason: ${message}`),
    };
  }
}

export async function getTemplateWithSource(templateIdOrSlug: string): Promise<TemplateResult> {
  const result = await listTemplatesWithSource();

  return {
    template:
      result.templates.find(
        (template) =>
          template.id === templateIdOrSlug ||
          template.template_id === templateIdOrSlug ||
          template.slug === templateIdOrSlug,
      ) ?? null,
    status: result.status,
  };
}
