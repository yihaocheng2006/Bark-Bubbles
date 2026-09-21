"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient as createServerSupabaseClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

async function requireUser() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }
}

export async function setAppointmentCompleted(id: number, completed: boolean) {
  await requireUser();
  const admin = createAdminClient();
  const { error } = await admin.from("appointments").update({ completed }).eq("id", id);

  if (error) {
    console.error("Failed to update appointment:", error.message);
  }

  revalidatePath("/admin/dashboard");
}

export async function deleteAppointment(id: number) {
  await requireUser();
  const admin = createAdminClient();
  const { error } = await admin.from("appointments").delete().eq("id", id);

  if (error) {
    console.error("Failed to delete appointment:", error.message);
  }

  revalidatePath("/admin/dashboard");
}

export async function logout() {
  const supabase = await createServerSupabaseClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
