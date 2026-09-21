import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isHoneypotTripped, isNonEmptyString, isValidEmail } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { name, email, message, company } = body as {
    name?: string;
    email?: string;
    message?: string;
    company?: string; // honeypot field — must stay empty
  };

  if (isHoneypotTripped(company)) {
    // Pretend success so bots don't learn the honeypot gave them away.
    return NextResponse.json({ success: true });
  }

  if (!isNonEmptyString(name, 100)) {
    return NextResponse.json({ error: "invalid_name" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (!isNonEmptyString(message, 2000)) {
    return NextResponse.json({ error: "invalid_message" }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { error } = await supabase.from("contacts").insert({ name, email, message });

  if (error) {
    console.error("Failed to save contact message:", error.message);
    return NextResponse.json({ error: "insert_failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
