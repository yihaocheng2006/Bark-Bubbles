"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "10:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const PawIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <ellipse cx="12" cy="16" rx="6" ry="5" />
    <ellipse cx="5" cy="8" rx="2.2" ry="3" />
    <ellipse cx="10" cy="5" rx="2.2" ry="3" />
    <ellipse cx="14" cy="5" rx="2.2" ry="3" />
    <ellipse cx="19" cy="8" rx="2.2" ry="3" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 0 1 2-2h2.28a1 1 0 0 1 .97.76l1 4a1 1 0 0 1-.5 1.11L7 10a11 11 0 0 0 7 7l1.13-1.75a1 1 0 0 1 1.11-.5l4 1a1 1 0 0 1 .76.97V19a2 2 0 0 1-2 2h-1C10.4 21 3 13.6 3 4.5Z"
    />
  </svg>
);

const EnvelopeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
  </svg>
);

const PinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z"
    />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
  </svg>
);

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      if (!res.ok) {
        setError("Something went wrong. Please try again.");
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
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-yellow-800 via-yellow-700 to-yellow-500">
        <Image
          src="/bubble.webp"
          alt=""
          aria-hidden="true"
          width={40}
          height={23}
          className="pointer-events-none absolute left-8 top-8 h-5 w-auto opacity-80 sm:left-20"
        />
        <Image
          src="/bubble.webp"
          alt=""
          aria-hidden="true"
          width={40}
          height={23}
          className="pointer-events-none absolute right-10 top-16 h-4 w-auto opacity-70 sm:right-24"
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="pointer-events-none absolute bottom-6 right-10 h-7 w-7 rotate-12 text-white/25 sm:right-24"
        >
          <ellipse cx="12" cy="16" rx="6" ry="5" />
          <ellipse cx="5" cy="8" rx="2.2" ry="3" />
          <ellipse cx="10" cy="5" rx="2.2" ry="3" />
          <ellipse cx="14" cy="5" rx="2.2" ry="3" />
          <ellipse cx="19" cy="8" rx="2.2" ry="3" />
        </svg>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: -6 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.08, rotate: 0, zIndex: 20, transition: { duration: 0.2 } }}
          className="absolute -bottom-4 -right-2 z-10 w-24 bg-white p-1.5 pb-4 shadow-xl sm:bottom-6 sm:right-10 sm:w-32 md:w-36"
        >
          <motion.div
            initial={{ rotate: 9 }}
            className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 border border-white/40 bg-white/50 shadow-sm"
            style={{ backdropFilter: "blur(1px)" }}
          />
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/groomers3.jpg"
              alt="A dog being gently bathed"
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 8 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          whileHover={{ scale: 1.08, rotate: 0, zIndex: 20, transition: { duration: 0.2 } }}
          className="absolute -top-4 -left-2 z-10 hidden w-24 bg-white p-1.5 pb-4 shadow-xl sm:-top-2 sm:left-10 sm:block sm:w-32 md:w-36"
        >
          <motion.div
            initial={{ rotate: -10 }}
            className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 border border-white/40 bg-white/50 shadow-sm"
            style={{ backdropFilter: "blur(1px)" }}
          />
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/2.webp"
              alt="A dog being rinsed after a bath"
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto w-full max-w-3xl px-8 py-16 text-center sm:px-16 sm:py-20 lg:max-w-5xl xl:max-w-6xl"
        >
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            Get in{" "}
            <span className="relative inline-block">
              Touch
              <svg
                viewBox="0 0 200 20"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 left-0 h-4 w-full text-[#fee199]"
              >
                <path
                  d="M2 12 Q 26 2, 50 12 T 98 12 T 146 12 T 198 12"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 [font-family:var(--font-fredoka)]">
            Questions, bookings, or just want to say hi to the pups? We&apos;d
            love to hear from you.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.15 } }}
            className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm [font-family:var(--font-fredoka)]"
          >
            <EnvelopeIcon className="h-4 w-4" />
            We reply within 24 hours
          </motion.div>
        </motion.div>
      </section>

      <section className="w-full bg-[#fee199] px-8 py-16 sm:px-16">
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-12 lg:max-w-5xl xl:max-w-6xl sm:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-black">Contact Info</h2>
              <div className="mt-4 flex flex-col gap-4 text-lg text-zinc-700 [font-family:var(--font-fredoka)]">
                {[
                  { icon: PhoneIcon, text: "(555) 123-4567" },
                  { icon: EnvelopeIcon, text: "hello@barkandbubbles.com" },
                  { icon: PinIcon, text: "123 Main Street, Anytown, USA" },
                ].map(({ icon: Icon, text }) => (
                  <motion.div
                    key={text}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c1440e]/10 text-[#c1440e]">
                      <Icon className="h-4 w-4" />
                    </span>
                    {text}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-black">
                <ClockIcon className="h-5 w-5 text-[#c1440e]" />
                Business Hours
              </h2>
              <div className="mt-4 flex flex-col gap-2">
                {hours.map((slot) => (
                  <motion.div
                    key={slot.day}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className={`flex items-center justify-between gap-4 text-lg ${
                      slot.time === "Closed" ? "text-zinc-500 italic" : "text-zinc-700"
                    }`}
                  >
                    <span className="font-medium text-black">{slot.day}</span>
                    <span>{slot.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -16 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex items-center gap-4 rounded-2xl bg-white/60 p-4"
            >
              <div className="flex -space-x-3">
                {[
                  { src: "/jamie-rivera.jpg", alt: "Jamie, founder and master groomer" },
                  { src: "/sam.jpeg", alt: "Sam, senior groomer" },
                  { src: "/priya.webp", alt: "Priya, bath and spa specialist" },
                ].map((person) => (
                  <div
                    key={person.src}
                    className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white"
                  >
                    <Image
                      src={person.src}
                      alt={person.alt}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm leading-5 text-zinc-700 [font-family:var(--font-fredoka)]">
                Jamie, Sam &amp; Priya can&apos;t wait to meet you and your pup!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="relative rounded-2xl bg-white p-8 shadow-sm"
          >
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [-6, 6, -6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#fee199] shadow-md"
            >
              <PawIcon className="h-7 w-7 text-[#c1440e]" />
            </motion.div>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
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
                <h3 className="text-xl font-semibold text-black">
                  Thanks for reaching out!
                </h3>
                <p className="text-zinc-600">
                  We&apos;ll get back to you as soon as we can.
                </p>
                <motion.button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setError(null);
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="mt-2 flex h-12 items-center justify-center rounded-full bg-black px-8 text-base font-medium text-white transition-colors hover:bg-zinc-800"
                >
                  Send Another Message
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
                    Name
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
                  <label htmlFor="message" className="text-sm font-medium text-black">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="resize-none rounded-lg border border-black/10 px-4 py-2 text-black outline-none focus:border-[#c1440e]"
                  />
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 flex h-12 items-center justify-center rounded-full bg-black px-8 text-base font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
