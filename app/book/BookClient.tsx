"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  formatTime,
  getDurationMinutes,
  getTimeSlotsForDate,
  rangesOverlap,
  toMinutes,
} from "@/lib/appointment-availability";

const dogSizes = ["Small (up to 10kg)", "Medium (11–25kg)", "Large (25kg+)"];

const PawIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <ellipse cx="12" cy="16" rx="6" ry="5" />
    <ellipse cx="5" cy="8" rx="2.2" ry="3" />
    <ellipse cx="10" cy="5" rx="2.2" ry="3" />
    <ellipse cx="14" cy="5" rx="2.2" ry="3" />
    <ellipse cx="19" cy="8" rx="2.2" ry="3" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path strokeLinecap="round" d="M3 9h18M8 3v4M16 3v4" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
  </svg>
);

const countryCodes = [
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Ireland", code: "+353", flag: "🇮🇪" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Portugal", code: "+351", flag: "🇵🇹" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "Belgium", code: "+32", flag: "🇧🇪" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Austria", code: "+43", flag: "🇦🇹" },
  { name: "Sweden", code: "+46", flag: "🇸🇪" },
  { name: "Norway", code: "+47", flag: "🇳🇴" },
  { name: "Denmark", code: "+45", flag: "🇩🇰" },
  { name: "Finland", code: "+358", flag: "🇫🇮" },
  { name: "Poland", code: "+48", flag: "🇵🇱" },
  { name: "Greece", code: "+30", flag: "🇬🇷" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" },
  { name: "Chile", code: "+56", flag: "🇨🇱" },
  { name: "Colombia", code: "+57", flag: "🇨🇴" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Israel", code: "+972", flag: "🇮🇱" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "Kenya", code: "+254", flag: "🇰🇪" },
  { name: "Egypt", code: "+20", flag: "🇪🇬" },
];


function CountryCodeSelect() {
  return (
    <select
      name="countryCode"
      defaultValue={countryCodes[0].code}
      aria-label="Country code"
      className="w-24 shrink-0 rounded-lg border border-black/10 px-2 py-2 text-black outline-none focus:border-[#c1440e]"
    >
      {countryCodes.map((country) => (
        <option key={`${country.name}-${country.code}`} value={country.code}>
          {country.flag} {country.code} {country.name}
        </option>
      ))}
    </select>
  );
}

export default function BookClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDogSize, setSelectedDogSize] = useState("");
  const [bookedAppointments, setBookedAppointments] = useState<
    { time: string; dog_size: string }[]
  >([]);

  const timeSlots = useMemo(() => getTimeSlotsForDate(selectedDate), [selectedDate]);
  const isClosed = selectedDate !== "" && timeSlots.length === 0;

  // Computed client-side only, after mount: the server has no reliable
  // notion of the visitor's "today", and computing it during render (e.g.
  // via useMemo) runs independently on the server and the client, which can
  // produce different values and trigger a hydration mismatch on the date
  // input's `min` attribute. Starting undefined keeps the server-rendered
  // and first-client-render markup identical; this fills in right after.
  const [today, setToday] = useState<string | undefined>(undefined);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: reading the real client clock is the point, this can only happen client-side post-mount.
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    if (!selectedDate) return;
    let cancelled = false;
    fetch(`/api/availability?date=${selectedDate}`)
      .then((res) => (res.ok ? res.json() : { appointments: [] }))
      .then((body) => {
        if (!cancelled) setBookedAppointments(body.appointments ?? []);
      })
      .catch(() => {
        if (!cancelled) setBookedAppointments([]);
      });
    return () => {
      cancelled = true;
    };
  }, [selectedDate]);

  // A candidate slot's own duration depends on the dog size the user picks;
  // default to the shortest (30min) so we don't over-restrict before it's chosen.
  const unavailableSlots = useMemo(() => {
    const duration = selectedDogSize ? getDurationMinutes(selectedDogSize) : 30;
    const unavailable = new Set<string>();
    for (const slot of timeSlots) {
      const start = toMinutes(slot);
      const end = start + duration;
      const conflict = bookedAppointments.some((appt) => {
        const apptStart = toMinutes(appt.time);
        const apptEnd = apptStart + getDurationMinutes(appt.dog_size);
        return rangesOverlap(start, end, apptStart, apptEnd);
      });
      if (conflict) unavailable.add(slot);
    }
    return unavailable;
  }, [timeSlots, bookedAppointments, selectedDogSize]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const phone = `${formData.get("countryCode")} ${formData.get("phone")}`.trim();

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone,
          dogSize: formData.get("dogSize"),
          date: formData.get("date"),
          time: formData.get("time"),
          company: formData.get("company"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        if (body.error === "slot_taken") {
          setError(
            "That slot isn't free — it overlaps with another appointment. Please choose another time."
          );
        } else {
          setError("Something went wrong. Please try again.");
        }
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#fee199] px-8 pt-14 pb-10 sm:px-16 sm:pt-16 sm:pb-14">
        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between lg:max-w-5xl xl:max-w-6xl">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-4 pb-4 text-center sm:items-start sm:pb-6 sm:text-left"
          >
            <motion.span
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: -3 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
              className="inline-block rounded-lg bg-black px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-white [font-family:var(--font-fredoka)]"
            >
              book
            </motion.span>
            <h1 className="leading-[0.9]">
              <span className="block text-5xl font-extrabold text-black sm:text-6xl md:text-7xl [font-family:var(--font-fredoka)]">
                time for a
              </span>
              <span className="block text-7xl font-extrabold text-[#c1440e] sm:text-8xl md:text-9xl [font-family:var(--font-fredoka)]">
                trim
              </span>
            </h1>
            <p className="max-w-md text-lg text-zinc-700 [font-family:var(--font-fredoka)]">
              Pick a time that works for you and your pup — we&apos;ll take
              care of the rest.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative h-64 w-72 shrink-0 sm:h-80 sm:w-[22rem] md:h-[26rem] md:w-[26rem]"
          >
            <Image
              src="/puppy2.png"
              alt="A Dalmatian puppy sitting"
              fill
              sizes="(min-width: 768px) 416px, 288px"
              className="object-contain object-bottom"
              style={{
                maskImage: "linear-gradient(to bottom, black 75%, transparent 94%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 94%)",
              }}
              priority
            />
          </motion.div>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 400 24"
          preserveAspectRatio="none"
          className="pointer-events-none relative z-10 -mt-3 h-7 w-full text-[#c1440e] sm:-mt-4"
        >
          <motion.path
            d="M0 14 Q 40 0, 80 14 T 160 14 T 240 14 T 320 14 T 400 14"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeWidth="7"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.path
            d="M0 20 Q 40 6, 80 20 T 160 20 T 240 20 T 320 20 T 400 20"
            stroke="currentColor"
            strokeWidth="7"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.45 }}
          />
        </svg>
      </section>

      <section className="w-full bg-[#fff3d1] px-8 py-16 sm:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-8 flex w-full max-w-xl items-center gap-4 rounded-2xl bg-white/60 p-4"
        >
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
            <Image
              src="/sam.jpeg"
              alt="Sam, senior groomer"
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl ring-2 ring-white sm:h-14 sm:w-24">
            <Image
              src="/facilities1.jpeg"
              alt="A groomer carefully trimming a Shih Tzu"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <p className="text-sm leading-5 text-zinc-700 [font-family:var(--font-fredoka)]">
            You&apos;re in good hands — Sam and the team treat every pup like
            family.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl rounded-2xl bg-white p-8 shadow-sm sm:p-10"
        >
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [6, -6, 6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#fff3d1] shadow-md"
          >
            <PawIcon className="h-7 w-7 text-[#c1440e]" />
          </motion.div>
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c1440e]/10 text-[#c1440e]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-semibold text-black">
                Appointment requested!
              </h3>
              <p className="text-zinc-600">
                We&apos;ll be in touch shortly to confirm your booking.
              </p>
              <motion.button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setError(null);
                  setSelectedDate("");
                  setSelectedDogSize("");
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="mt-2 flex h-12 items-center justify-center rounded-full bg-black px-8 text-base font-medium text-white transition-colors hover:bg-zinc-800"
              >
                Book Another Appointment
              </motion.button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium text-black">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-lg border border-black/10 px-4 py-2 text-black outline-none focus:border-[#c1440e]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium text-black">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-lg border border-black/10 px-4 py-2 text-black outline-none focus:border-[#c1440e]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm font-medium text-black">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <CountryCodeSelect />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-lg border border-black/10 px-4 py-2 text-black outline-none focus:border-[#c1440e]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="dogSize" className="flex items-center gap-1.5 text-sm font-medium text-black">
                  <PawIcon className="h-4 w-4 text-[#c1440e]" />
                  Dog&apos;s Size
                </label>
                <select
                  id="dogSize"
                  name="dogSize"
                  required
                  value={selectedDogSize}
                  onChange={(e) => setSelectedDogSize(e.target.value)}
                  className="rounded-lg border border-black/10 px-4 py-2 text-black outline-none focus:border-[#c1440e]"
                >
                  <option value="" disabled>
                    Select a size
                  </option>
                  {dogSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex flex-1 flex-col gap-1">
                  <label htmlFor="date" className="flex items-center gap-1.5 text-sm font-medium text-black">
                    <CalendarIcon className="h-4 w-4 text-[#c1440e]" />
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    min={today}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="rounded-lg border border-black/10 px-4 py-2 text-black outline-none focus:border-[#c1440e]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <label htmlFor="time" className="flex items-center gap-1.5 text-sm font-medium text-black">
                    <ClockIcon className="h-4 w-4 text-[#c1440e]" />
                    Preferred Time
                  </label>
                  <select
                    key={`${selectedDate}-${selectedDogSize}`}
                    id="time"
                    name="time"
                    required
                    disabled={timeSlots.length === 0}
                    defaultValue=""
                    className="rounded-lg border border-black/10 px-4 py-2 text-black outline-none focus:border-[#c1440e] disabled:opacity-50"
                  >
                    <option value="" disabled>
                      {selectedDate === ""
                        ? "Select a date first"
                        : isClosed
                          ? "We're closed that day"
                          : "Select a time"}
                    </option>
                    {timeSlots.map((slot) => {
                      const taken = unavailableSlots.has(slot);
                      return (
                        <option key={slot} value={slot} disabled={taken}>
                          {formatTime(slot)}
                          {taken ? " — Not available" : ""}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              {isClosed && (
                <p className="text-sm text-zinc-600">
                  We&apos;re closed on that day. We&apos;re open Monday–Friday
                  9am–6pm and Saturday 10am–4pm.
                </p>
              )}
              {error && <p className="text-sm text-red-600">{error}</p>}
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="mt-2 flex h-12 items-center justify-center rounded-full bg-black px-8 text-base font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Request Appointment"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </section>
    </>
  );
}
