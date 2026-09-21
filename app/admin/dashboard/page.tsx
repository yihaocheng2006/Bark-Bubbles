import { redirect } from "next/navigation";
import { createClient as createServerSupabaseClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { AppointmentActions, LogoutButton } from "./DashboardControls";

export const dynamic = "force-dynamic";

type Appointment = {
  id: number;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  dog_size: string;
  date: string;
  time: string;
  completed: boolean | null;
};

type ContactMessage = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  message: string;
};

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function AdminDashboardPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const admin = createAdminClient();

  const [{ data: appointments, error: appointmentsError }, { data: contacts, error: contactsError }] =
    await Promise.all([
      admin
        .from("appointments")
        .select("*")
        .order("created_at", { ascending: false })
        .returns<Appointment[]>(),
      admin
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false })
        .returns<ContactMessage[]>(),
    ]);

  return (
    <main className="min-h-screen w-full bg-zinc-50 px-4 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900">Admin Dashboard</h1>
            <p className="text-sm text-zinc-500">Signed in as {user.email}</p>
          </div>
          <LogoutButton />
        </div>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900">
            Appointments {appointments ? `(${appointments.length})` : ""}
          </h2>

          {appointmentsError && (
            <p className="mt-2 text-sm text-red-600">
              Couldn&apos;t load appointments: {appointmentsError.message}
            </p>
          )}

          <div className="mt-3 overflow-x-auto rounded-lg border border-zinc-200 bg-white">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Phone</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Dog Size</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Time</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {(appointments ?? []).map((appointment) => (
                  <tr
                    key={appointment.id}
                    className={appointment.completed ? "bg-zinc-50/60" : undefined}
                  >
                    <td className="px-4 py-3 font-medium text-zinc-900">{appointment.name}</td>
                    <td className="px-4 py-3 text-zinc-600">{appointment.phone}</td>
                    <td className="px-4 py-3 text-zinc-600">{appointment.email ?? "—"}</td>
                    <td className="px-4 py-3 text-zinc-600">{appointment.dog_size}</td>
                    <td className="px-4 py-3 text-zinc-600">{appointment.date}</td>
                    <td className="px-4 py-3 text-zinc-600">{appointment.time}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          appointment.completed
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {appointment.completed ? "Completed" : "Pending"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <AppointmentActions
                        id={appointment.id}
                        completed={Boolean(appointment.completed)}
                      />
                    </td>
                  </tr>
                ))}
                {(appointments ?? []).length === 0 && !appointmentsError && (
                  <tr>
                    <td colSpan={8} className="px-4 py-6 text-center text-zinc-500">
                      No appointments yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900">
            Contact Messages {contacts ? `(${contacts.length})` : ""}
          </h2>

          {contactsError && (
            <p className="mt-2 text-sm text-red-600">
              Couldn&apos;t load contact messages: {contactsError.message}
            </p>
          )}

          <div className="mt-3 flex flex-col gap-3">
            {(contacts ?? []).map((contact) => (
              <div key={contact.id} className="rounded-lg border border-zinc-200 bg-white p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium text-zinc-900">{contact.name}</span>
                  <span className="text-xs text-zinc-500">
                    {formatDateTime(contact.created_at)}
                  </span>
                </div>
                <p className="text-sm text-zinc-500">{contact.email}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">{contact.message}</p>
              </div>
            ))}
            {(contacts ?? []).length === 0 && !contactsError && (
              <p className="text-sm text-zinc-500">No messages yet.</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
