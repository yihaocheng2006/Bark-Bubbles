"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogHero() {
  return (
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
            blog
          </motion.span>
          <h1 className="leading-[0.9]">
            <span className="block text-5xl font-extrabold text-black sm:text-6xl md:text-7xl [font-family:var(--font-fredoka)]">
              the daily
            </span>
            <span className="block text-7xl font-extrabold text-[#c1440e] sm:text-8xl md:text-9xl [font-family:var(--font-fredoka)]">
              woof
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative h-48 w-56 shrink-0 sm:h-64 sm:w-72 md:h-72 md:w-80"
        >
          <Image
            src="/puppywalking.webp"
            alt="A golden retriever puppy walking"
            fill
            sizes="(min-width: 768px) 320px, 224px"
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
  );
}
