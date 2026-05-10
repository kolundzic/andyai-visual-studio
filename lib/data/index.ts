export * from "./types";
export * from "./product-data-adapter";
export * from "./local-mock-adapter";

import { localProductDataAdapter } from "./local-mock-adapter";
import { getDataAdapterMode } from "./product-data-adapter";
import type { ProductDataAdapter } from "./product-data-adapter";

export function getProductDataAdapter(): ProductDataAdapter {
  const mode = getDataAdapterMode();

  if (mode === "supabase") {
    // v0.4.0 intentionally keeps Supabase as a schema/RLS contract first.
    // The production Supabase client adapter lands in a later version after auth wiring.
    return localProductDataAdapter;
  }

  return localProductDataAdapter;
}
