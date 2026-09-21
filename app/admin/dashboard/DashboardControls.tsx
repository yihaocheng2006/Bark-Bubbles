"use client";

import { useTransition } from "react";
import { deleteAppointment, logout, setAppointmentCompleted } from "./actions";

export function AppointmentActions({
  id,
  completed,
}: {
  id: number;
  completed: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        disabled={isPending}
        onClick={() => startTransition(() => setAppointmentCompleted(id, !completed))}
        className="rounded-md border border-zinc-300 px-2.5 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 disabled:opacity-50"
      >
        {completed ? "Mark Pending" : "Mark Completed"}
      </button>
      <button
        type="button"
        disabled={isPending}
        onClick={() => {
          if (confirm("Delete this appointment? This cannot be undone.")) {
            startTransition(() => deleteAppointment(id));
          }
        }}
        className="rounded-md border border-red-200 px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
      >
        Delete
      </button>
    </div>
  );
}

export function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => startTransition(() => logout())}
      className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 disabled:opacity-50"
    >
      {isPending ? "Logging out…" : "Log Out"}
    </button>
  );
}
