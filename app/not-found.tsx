"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PawIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <ellipse cx="12" cy="16" rx="6" ry="5" />
    <ellipse cx="5" cy="8" rx="2.2" ry="3" />
    <ellipse cx="10" cy="5" rx="2.2" ry="3" />
    <ellipse cx="14" cy="5" rx="2.2" ry="3" />
    <ellipse cx="19" cy="8" rx="2.2" ry="3" />
  </svg>
);

export default function NotFound() {
  return (
    <section className="relative flex w-full flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-800 via-yellow-700 to-yellow-500 px-8 py-20 sm:px-16">
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-8, 8, -8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-10 top-16 h-10 w-10 text-white/20 sm:left-24"
      >
        <PawIcon className="h-full w-full" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [8, -8, 8] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="pointer-events-none absolute bottom-20 right-10 h-8 w-8 text-white/20 sm:right-24"
      >
        <PawIcon className="h-full w-full" />
      </motion.div>

      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto flex w-full max-w-xl flex-col items-center text-center"
      >
        <h1 className="text-8xl font-extrabold leading-none text-white sm:text-9xl [font-family:var(--font-fredoka)]">
          <span className="relative inline-block -rotate-3">
            404
            <svg
              viewBox="0 0 200 20"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-2 left-0 h-4 w-full text-[#fee199]"
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
        <h2 className="mt-8 text-3xl font-bold text-white sm:text-4xl [font-family:var(--font-fredoka)]">
          This page ran off the leash
        </h2>
        <p className="mx-auto mt-3 max-w-md text-lg text-white/90 [font-family:var(--font-fredoka)]">
          We couldn&apos;t find the page you&apos;re looking for. It might have
          been moved, renamed, or is out chasing squirrels.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex h-14 items-center justify-center rounded-full bg-black px-8 text-lg font-medium text-white shadow-lg shadow-black/20 transition-colors hover:bg-zinc-800 [font-family:var(--font-fredoka)]"
            >
              Back to Home
            </motion.span>
          </Link>
          <Link href="/book">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex h-14 items-center justify-center rounded-full bg-white/15 px-8 text-lg font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/25 [font-family:var(--font-fredoka)]"
            >
              Book a Grooming
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
