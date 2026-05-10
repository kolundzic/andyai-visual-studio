import { getDataAdapterMode, hasSupabaseEnv } from "@/lib/supabase/env";
import { createLocalMockAdapter } from "./local-mock-adapter";
import { createSupabaseAdapter } from "./supabase-adapter";
import type { AvsProductDataAdapter } from "./types";

export function getProductDataAdapter(): AvsProductDataAdapter {
  const mode = getDataAdapterMode();

  if (mode === "mock") {
    return createLocalMockAdapter("Forced local mock adapter through NEXT_PUBLIC_AVS_DATA_ADAPTER=mock");
  }

  if (mode === "supabase") {
    return createSupabaseAdapter();
  }

  if (hasSupabaseEnv()) {
    return createSupabaseAdapter();
  }

  return createLocalMockAdapter("Supabase environment is not configured. Falling back to local mock data.");
}

export async function withDataFallback<T>(operation: (adapter: AvsProductDataAdapter) => Promise<T>, fallback: (adapter: AvsProductDataAdapter) => Promise<T>): Promise<T> {
  const adapter = getProductDataAdapter();

  try {
    return await operation(adapter);
  } catch {
    return fallback(createLocalMockAdapter("Live adapter failed. Safe fallback to local mock data."));
  }
}

export type {
  AvsDataSourceState,
  AvsExport,
  AvsProductDataAdapter,
  AvsProject,
  AvsProjectCreateInput,
  AvsProjectUpdateInput,
  AvsTemplate
} from "./types";
