"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 0 1 2-2h2.28a1 1 0 0 1 .97.76l1 4a1 1 0 0 1-.5 1.11L7 10a11 11 0 0 0 7 7l1.13-1.75a1 1 0 0 1 1.11-.5l4 1a1 1 0 0 1 .76.97V19a2 2 0 0 1-2 2h-1C10.4 21 3 13.6 3 4.5Z"
    />
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

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const PawIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <ellipse cx="12" cy="16" rx="6" ry="5" />
    <ellipse cx="5" cy="8" rx="2.2" ry="3" />
    <ellipse cx="10" cy="5" rx="2.2" ry="3" />
    <ellipse cx="14" cy="5" rx="2.2" ry="3" />
    <ellipse cx="19" cy="8" rx="2.2" ry="3" />
  </svg>
);

const HomeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 10.5 12 4l8 6.5" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 9.5V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.5"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M12 11v5" />
    <circle cx="12" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const ScissorsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <path strokeLinecap="round" d="M20 5 7.5 13.5M20 19 7.5 10.5" />
  </svg>
);

const EnvelopeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
  </svg>
);

const QuestionIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M9.5 9.2a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.8" />
    <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const BlogIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);

const exploreLinks = [
  { href: "/", label: "Home", Icon: HomeIcon },
  { href: "/about", label: "About", Icon: InfoIcon },
  { href: "/services", label: "Services", Icon: ScissorsIcon },
  { href: "/contact", label: "Contact", Icon: EnvelopeIcon },
  { href: "/faq", label: "FAQ", Icon: QuestionIcon },
  { href: "/blog", label: "Blog", Icon: BlogIcon },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className="relative w-full overflow-x-hidden bg-yellow-800">
      <svg
        aria-hidden="true"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-[7px] left-0 z-20 h-2 w-full text-yellow-800"
      >
        <path
          d="M0,0 L0,4 Q5,12 10,4 T20,4 T30,4 T40,4 T50,4 T60,4 T70,4 T80,4 T90,4 T100,4 T110,4 T120,4 T130,4 T140,4 T150,4 T160,4 T170,4 T180,4 T190,4 T200,4 L200,0 Z"
          fill="currentColor"
        />
      </svg>
      <div className="relative z-40 mx-auto flex h-11 w-full max-w-3xl flex-nowrap items-center justify-between gap-1 px-3 sm:h-16 sm:gap-4 sm:px-8 md:h-20 lg:max-w-5xl xl:max-w-6xl">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-1 sm:gap-2"
        >
          <Image
            src="/logo222.png"
            alt="Bark & Bubbles"
            width={96}
            height={96}
            className="h-14 w-auto shrink-0 sm:h-20 md:h-24"
          />
          <span className="hidden whitespace-nowrap text-[11px] font-bold tracking-tight text-white min-[380px]:inline-block sm:text-lg sm:text-xl md:text-2xl [font-family:var(--font-fredoka)]">
            Bark &amp; Bubbles
          </span>
        </Link>
        <div className="flex min-w-0 flex-nowrap items-center gap-2 sm:gap-4 md:gap-6">
          <Link href="/services">
            <motion.span
              whileHover={{ scale: 1.12, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="inline-block whitespace-nowrap text-[11px] font-bold text-white hover:text-yellow-100 sm:text-sm md:text-base [font-family:var(--font-fredoka)]"
            >
              Services
            </motion.span>
          </Link>
          <Link href="/book" className="inline-block shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex h-6 items-center justify-center whitespace-nowrap rounded-full bg-black px-2 text-[10px] font-medium text-white sm:h-9 sm:px-4 sm:text-sm md:h-10 md:px-6 md:text-base"
            >
              Book an Appointment
            </motion.div>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/10 sm:h-11 sm:w-11"
          >
            <span className="relative flex h-5 w-6 flex-col items-center justify-between">
              <motion.span
                animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="h-0.5 w-6 rounded-full bg-white"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="h-0.5 w-6 rounded-full bg-white"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="h-0.5 w-6 rounded-full bg-white"
              />
            </span>
          </button>
        </div>
      </div>
      <div className="relative z-40 w-full border-t border-white/10 bg-yellow-900">
        <div className="mx-auto flex h-8 w-full max-w-3xl items-center justify-between gap-2 px-3 sm:h-10 sm:px-8 lg:max-w-5xl xl:max-w-6xl">
          <a href="tel:+15551234567" className="inline-block">
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1.5 text-[10px] font-medium text-white/90 hover:text-white sm:gap-2 sm:text-sm [font-family:var(--font-fredoka)]"
            >
              <PhoneIcon className="h-3 w-3 shrink-0 sm:h-4 sm:w-4" />
              <span className="whitespace-nowrap">Call or Text (555) 123-4567</span>
            </motion.span>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=123+Main+Street+Anytown+USA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1.5 text-[10px] font-medium text-white/90 hover:text-white sm:gap-2 sm:text-sm [font-family:var(--font-fredoka)]"
            >
              <PinIcon className="h-3 w-3 shrink-0 sm:h-4 sm:w-4" />
              <span className="whitespace-nowrap">Find Us</span>
            </motion.span>
          </a>
        </div>
      </div>
    </nav>

    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/30"
          />
          <motion.div
            id="site-menu"
            role="menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-40 flex w-full max-w-sm flex-col bg-white shadow-2xl"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-black/10 px-5 py-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <Image
                  src="/logo222.png"
                  alt="Bark & Bubbles"
                  width={64}
                  height={64}
                  className="h-10 w-auto"
                />
                <span className="text-lg font-bold tracking-tight text-black [font-family:var(--font-fredoka)]">
                  Bark &amp; Bubbles
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#c1440e] transition-colors hover:bg-[#fee199]"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              <div className="flex flex-col gap-3">
                <Link href="/book" role="menuitem" onClick={() => setOpen(false)}>
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex h-14 items-center gap-3 rounded-full bg-[#c1440e] px-5 text-base font-semibold text-white shadow-sm [font-family:var(--font-fredoka)]"
                  >
                    <PawIcon className="h-5 w-5 shrink-0" />
                    Book an Appointment
                  </motion.span>
                </Link>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123+Main+Street+Anytown+USA"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex h-14 items-center gap-3 rounded-full bg-[#fee199] px-5 text-base font-semibold text-black [font-family:var(--font-fredoka)]"
                  >
                    <PinIcon className="h-5 w-5 shrink-0 text-[#c1440e]" />
                    Find Us
                  </motion.span>
                </a>
              </div>

              <div className="mt-6 border-t border-black/10 pt-5">
                <span className="px-3 text-xs font-semibold uppercase tracking-wide text-zinc-500 [font-family:var(--font-fredoka)]">
                  Explore
                </span>
                <div className="mt-2 flex flex-col gap-1">
                  {exploreLinks.map((link, i) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                    >
                      <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.03 }}
                        whileHover={{ x: 4 }}
                        className="flex min-h-[52px] items-center gap-3 rounded-xl px-3 py-3.5 text-base font-semibold text-black transition-colors hover:bg-[#fee199] hover:text-[#c1440e] [font-family:var(--font-fredoka)]"
                      >
                        <link.Icon className="h-5 w-5 shrink-0 text-[#c1440e]" />
                        {link.label}
                      </motion.span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0 border-t border-black/10 p-5">
              <a href="tel:+15551234567" onClick={() => setOpen(false)}>
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex h-14 items-center justify-center gap-2 rounded-full bg-black text-base font-semibold text-white [font-family:var(--font-fredoka)]"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0" />
                  Call or Text (555) 123-4567
                </motion.span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
