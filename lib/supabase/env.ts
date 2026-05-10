export type AvsDataMode = "mock" | "supabase";

export type SupabasePublicEnv = {
  url: string;
  anonKey: string;
  configured: boolean;
};

export function getSupabasePublicEnv(): SupabasePublicEnv {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

  return {
    url,
    anonKey,
    configured: Boolean(url && anonKey),
  };
}

export function getRequestedDataMode(): AvsDataMode {
  const raw = process.env.AVS_DATA_MODE ?? process.env.NEXT_PUBLIC_AVS_DATA_MODE ?? "mock";
  return raw === "supabase" ? "supabase" : "mock";
}

export function isSupabaseConfigured(): boolean {
  return getSupabasePublicEnv().configured;
}
