// Shared between the client (app/book/page.tsx, for slot-picker UX) and the
// server (app/api/book, app/api/availability) so both sides agree on hours,
// durations, and overlap math.

// Business hours by day of week (0 = Sunday .. 6 = Saturday), in 24h local time.
export const businessHours: Record<number, { open: number; close: number } | null> = {
  0: null,
  1: { open: 9, close: 18 },
  2: { open: 9, close: 18 },
  3: { open: 9, close: 18 },
  4: { open: 9, close: 18 },
  5: { open: 9, close: 18 },
  6: { open: 10, close: 16 },
};

// Small and Medium dogs take 30 minutes, Large dogs take 1 hour.
export function getDurationMinutes(dogSize: string | null | undefined): number {
  return dogSize?.startsWith("Large") ? 60 : 30;
}

export function toMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function rangesOverlap(
  startA: number,
  endA: number,
  startB: number,
  endB: number
): boolean {
  return startA < endB && startB < endA;
}

export function getTimeSlotsForDate(dateStr: string): string[] {
  if (!dateStr) return [];
  const [year, month, day] = dateStr.split("-").map(Number);
  const dayOfWeek = new Date(year, month - 1, day).getDay();
  const hours = businessHours[dayOfWeek];
  if (!hours) return [];

  const slots: string[] = [];
  for (let minutes = hours.open * 60; minutes < hours.close * 60; minutes += 30) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
  }
  return slots;
}

export function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}
