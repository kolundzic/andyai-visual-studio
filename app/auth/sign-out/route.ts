import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabaseAuthClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const supabase = await createServerSupabaseAuthClient();

  if (supabase) {
    await supabase.auth.signOut();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}
