import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/admin";
import { getDurationMinutes, rangesOverlap, toMinutes } from "@/lib/appointment-availability";
import {
  isHoneypotTripped,
  isNonEmptyString,
  isValidDate,
  isValidEmail,
  isValidTime,
} from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { name, email, phone, dogSize, date, time, company } = body as {
    name?: string;
    email?: string;
    phone?: string;
    dogSize?: string;
    date?: string;
    time?: string;
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
  if (!isNonEmptyString(phone, 30)) {
    return NextResponse.json({ error: "invalid_phone" }, { status: 400 });
  }
  if (!isNonEmptyString(dogSize, 50)) {
    return NextResponse.json({ error: "invalid_dog_size" }, { status: 400 });
  }
  if (!isValidDate(date)) {
    return NextResponse.json({ error: "invalid_date" }, { status: 400 });
  }
  if (!isValidTime(time)) {
    return NextResponse.json({ error: "invalid_time" }, { status: 400 });
  }

  const supabase = createAdminClient();

  const { data: sameDayAppointments, error: checkError } = await supabase
    .from("appointments")
    .select("time, dog_size")
    .eq("date", date);

  if (checkError) {
    console.error("Failed to check appointment availability:", checkError.message);
    return NextResponse.json({ error: "check_failed" }, { status: 500 });
  }

  const newStart = toMinutes(time);
  const newEnd = newStart + getDurationMinutes(dogSize);

  const hasOverlap = (sameDayAppointments ?? []).some((appointment) => {
    const existingStart = toMinutes(appointment.time);
    const existingEnd = existingStart + getDurationMinutes(appointment.dog_size);
    return rangesOverlap(newStart, newEnd, existingStart, existingEnd);
  });

  if (hasOverlap) {
    return NextResponse.json({ error: "slot_taken" }, { status: 409 });
  }

  const { error: insertError } = await supabase.from("appointments").insert({
    name,
    email,
    phone,
    dog_size: dogSize,
    date,
    time,
  });

  if (insertError) {
    console.error("Failed to save appointment:", insertError.message);
    return NextResponse.json({ error: "insert_failed" }, { status: 500 });
  }

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Bark & Bubbles <onboarding@resend.dev>",
        to: email,
        subject: "Your grooming appointment is confirmed!",
        html: `
          <p>Hi ${name},</p>
          <p>Your grooming appointment is confirmed. Here are the details:</p>
          <ul>
            <li><strong>Dog size:</strong> ${dogSize}</li>
            <li><strong>Date:</strong> ${date}</li>
            <li><strong>Time:</strong> ${time}</li>
          </ul>
          <p>We can't wait to see you and your pup!</p>
          <p>— Bark &amp; Bubbles</p>
        `,
      });
    } catch (emailError) {
      // The appointment is already saved — don't fail the request over email delivery.
      console.error("Failed to send confirmation email", emailError);
    }
  } else {
    console.warn("RESEND_API_KEY is not set — skipping confirmation email.");
  }

  return NextResponse.json({ success: true });
}
