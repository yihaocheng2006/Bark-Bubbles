import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

// Returns only time + dog_size for a given date — enough for the client to
// grey out taken slots, without exposing any customer PII (name/email/phone).
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  if (!date) {
    return NextResponse.json({ error: "missing_date" }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("appointments")
    .select("time, dog_size")
    .eq("date", date);

  if (error) {
    console.error("Failed to fetch availability:", error.message);
    return NextResponse.json({ error: "fetch_failed" }, { status: 500 });
  }

  return NextResponse.json({ appointments: data ?? [] });
}
