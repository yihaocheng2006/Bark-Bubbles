"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const storyContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { y: 24 },
  visible: { y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

const fadeIn = {
  hidden: { x: 24 },
  visible: { x: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

const facilityPhotos = [
  {
    src: "/facilities1.jpeg",
    alt: "A groomer carefully trimming a Shih Tzu in our studio",
    rotate: "-rotate-2",
    hoverRotate: 0,
  },
  {
    src: "/facilities2.webp",
    alt: "A happy Golden Retriever with its groomer",
    rotate: "rotate-2",
    hoverRotate: -2,
  },
  {
    src: "/facilities3.webp",
    alt: "A freshly groomed poodle sitting on the grooming table",
    rotate: "-rotate-1",
    hoverRotate: 2,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-yellow-800 via-yellow-700 to-yellow-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 7 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.08, rotate: 0, zIndex: 20, transition: { duration: 0.2 } }}
          className="absolute -bottom-4 -left-2 z-10 w-24 bg-white p-1.5 pb-4 shadow-xl sm:bottom-4 sm:left-8 sm:w-32 md:w-36"
        >
          <motion.div
            initial={{ rotate: -10 }}
            className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 border border-white/40 bg-white/50 shadow-sm"
            style={{ backdropFilter: "blur(1px)" }}
          />
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/groomers2.webp"
              alt="A groomer scissor-trimming a curly-haired poodle mix"
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: -9 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          whileHover={{ scale: 1.08, rotate: 0, zIndex: 20, transition: { duration: 0.2 } }}
          className="absolute -top-4 -right-2 z-10 hidden w-24 bg-white p-1.5 pb-4 shadow-xl sm:-top-2 sm:right-10 sm:block sm:w-32 md:w-36"
        >
          <motion.div
            initial={{ rotate: 11 }}
            className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 border border-white/40 bg-white/50 shadow-sm"
            style={{ backdropFilter: "blur(1px)" }}
          />
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/1.webp"
              alt="A groomer trimming a curly black poodle"
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
            About{" "}
            <span className="inline-block -rotate-2 text-[#fee199]">Bark</span>{" "}
            &amp;{" "}
            <span className="relative inline-block">
              Bubbles
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
            Gentle care, happy tails, and a whole lot of bubbles.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.15 } }}
            className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm [font-family:var(--font-fredoka)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M12 21s-7.5-4.6-10-9.3C.4 8.4 2 5 5.5 5c2 0 3.3 1.1 4 2.2.7-1.1 2-2.2 4-2.2C17 5 18.6 8.4 17 11.7 14.5 16.4 12 21 12 21Z" />
            </svg>
            Family-run since day one
          </motion.div>
        </motion.div>
      </section>

      <section className="w-full bg-[#fee199]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={storyContainer}
          className="mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-10 px-8 py-16 text-left sm:px-16 lg:max-w-5xl xl:max-w-6xl sm:grid-cols-2"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1440e] [font-family:var(--font-fredoka)]">
              Our Story
            </span>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl">
              A salon built on trust
            </h2>
            <p className="max-w-xl text-xl font-normal leading-8 text-zinc-800 [font-family:var(--font-fredoka)]">
              At Bark &amp; Bubbles, we believe your dog is more than just a
              pet—they are a cherished member of your family.
            </p>
            <blockquote className="border-l-4 border-[#c1440e] pl-4 text-xl font-semibold italic leading-snug text-[#c1440e] [font-family:var(--font-fredoka)]">
              &ldquo;Every dog deserves to feel safe, loved, and pampered—every
              single visit.&rdquo;
            </blockquote>
            <p className="max-w-xl text-base leading-7 text-zinc-700">
              Founded by passionate animal lovers and certified grooming
              professionals, our salon was built on a simple philosophy:
              grooming should be a positive, stress-free experience. We take
              the time to build trust with every dog that walks through our
              doors, ensuring they feel safe and relaxed from the bath to the
              styling table.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="relative">
            <Image
              src="/bubble.webp"
              alt=""
              aria-hidden="true"
              width={40}
              height={23}
              className="pointer-events-none absolute -left-4 -top-5 z-10 h-9 w-auto"
            />
            <Image
              src="/bubble.webp"
              alt=""
              aria-hidden="true"
              width={40}
              height={23}
              className="pointer-events-none absolute -right-3 -top-3 z-10 h-6 w-auto"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="pointer-events-none absolute -bottom-5 -right-4 z-10 h-10 w-10 rotate-12 text-[#c1440e]/70"
            >
              <ellipse cx="12" cy="16" rx="6" ry="5" />
              <ellipse cx="5" cy="8" rx="2.2" ry="3" />
              <ellipse cx="10" cy="5" rx="2.2" ry="3" />
              <ellipse cx="14" cy="5" rx="2.2" ry="3" />
              <ellipse cx="19" cy="8" rx="2.2" ry="3" />
            </svg>
            <div className="grid h-72 grid-cols-2 grid-rows-2 gap-3 sm:h-full sm:min-h-[380px]">
              {facilityPhotos.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.12 }}
                  whileHover={{
                    scale: 1.06,
                    rotate: photo.hoverRotate,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  className={`relative overflow-hidden rounded-2xl border-4 border-white shadow-lg ${photo.rotate} ${
                    i === 0 ? "row-span-2" : ""
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
