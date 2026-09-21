"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sizeTiers = [
  {
    name: "Small Dogs",
    weight: "Up to 10kg",
    bg: "bg-[#fff3d1]",
    delay: 0,
    services: [
      { name: "Bath & Brush", price: "$35" },
      { name: "Full Grooming", price: "$65" },
      { name: "Nail Trim", price: "$12" },
      { name: "De-Shedding Treatment", price: "$28" },
    ],
  },
  {
    name: "Medium Dogs",
    weight: "11–25kg",
    bg: "bg-[#ffe08a]",
    delay: 0.1,
    services: [
      { name: "Bath & Brush", price: "$45" },
      { name: "Full Grooming", price: "$85" },
      { name: "Nail Trim", price: "$15" },
      { name: "De-Shedding Treatment", price: "$38" },
    ],
  },
  {
    name: "Large Dogs",
    weight: "25kg+",
    bg: "bg-[#f5c842]",
    delay: 0.2,
    services: [
      { name: "Bath & Brush", price: "$60" },
      { name: "Full Grooming", price: "$110" },
      { name: "Nail Trim", price: "$18" },
      { name: "De-Shedding Treatment", price: "$52" },
    ],
  },
];

const addOns = [
  {
    name: "Teeth Brushing",
    price: "$10",
    description: "A gentle brush to keep breath fresh and gums healthy.",
  },
  {
    name: "Ear Cleaning",
    price: "$8",
    description: "Careful cleaning to prevent buildup and irritation.",
  },
  {
    name: "Flea & Tick Treatment",
    price: "$20",
    description: "A soothing treatment to keep pests away between visits.",
  },
  {
    name: "Nail Polish",
    price: "$6",
    description: "A fun, pet-safe polish for a little extra sparkle.",
  },
];

const scatteredPhotos = [
  {
    src: "/facilities1.jpeg",
    alt: "A groomer carefully trimming a Shih Tzu in our studio",
    rotate: -8,
    y: -10,
    tapeRotate: -14,
  },
  {
    src: "/facilities2.webp",
    alt: "A happy Golden Retriever with its groomer",
    rotate: 5,
    y: 14,
    tapeRotate: 10,
  },
  {
    src: "/facilities3.webp",
    alt: "A freshly groomed poodle sitting on the grooming table",
    rotate: -4,
    y: -4,
    tapeRotate: -6,
  },
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

function WaveDivider() {
  return (
    <div className="w-full bg-[#fee199] px-8 py-3 sm:px-16">
      <svg
        aria-hidden="true"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        className="mx-auto h-3 w-full max-w-3xl text-[#c1440e]/30 lg:max-w-5xl xl:max-w-6xl"
      >
        <motion.path
          d="M0,6 Q10,0 20,6 T40,6 T60,6 T80,6 T100,6 T120,6 T140,6 T160,6 T180,6 T200,6"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

export default function ServicesClient() {
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
          className="pointer-events-none absolute right-10 top-14 h-4 w-auto opacity-70 sm:right-24"
        />
        <Image
          src="/bubble.webp"
          alt=""
          aria-hidden="true"
          width={40}
          height={23}
          className="pointer-events-none absolute bottom-8 right-16 h-7 w-auto opacity-70 sm:right-32"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: -8 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.08, rotate: 0, zIndex: 20, transition: { duration: 0.2 } }}
          className="absolute -bottom-4 -right-2 z-10 w-24 bg-white p-1.5 pb-4 shadow-xl sm:bottom-4 sm:right-8 sm:w-32 md:w-36"
        >
          <motion.div
            initial={{ rotate: 12 }}
            className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 border border-white/40 bg-white/50 shadow-sm"
            style={{ backdropFilter: "blur(1px)" }}
          />
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/groomers.webp"
              alt="A groomer scissor-trimming a wire fox terrier"
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 9 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          whileHover={{ scale: 1.08, rotate: 0, zIndex: 20, transition: { duration: 0.2 } }}
          className="absolute -top-4 -left-2 z-10 hidden w-24 bg-white p-1.5 pb-4 shadow-xl sm:-top-2 sm:left-10 sm:block sm:w-32 md:w-36"
        >
          <motion.div
            initial={{ rotate: -11 }}
            className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 border border-white/40 bg-white/50 shadow-sm"
            style={{ backdropFilter: "blur(1px)" }}
          />
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/4.jpg"
              alt="An apricot poodle standing on the grooming table"
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
            Our{" "}
            <span className="relative inline-block">
              Services
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
            Gentle, thorough grooming tailored to every dog, priced by size so
            you always know what to expect.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.15 } }}
            className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm [font-family:var(--font-fredoka)]"
          >
            <PawIcon className="h-4 w-4" />
            Priced by size — no surprises
          </motion.div>
        </motion.div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#fee199] px-8 py-16 sm:px-16">
        <Image
          src="/bubble.webp"
          alt=""
          aria-hidden="true"
          width={40}
          height={23}
          className="pointer-events-none absolute left-8 top-10 h-5 w-auto opacity-70 sm:left-20"
        />
        <Image
          src="/bubble.webp"
          alt=""
          aria-hidden="true"
          width={40}
          height={23}
          className="pointer-events-none absolute right-10 top-8 h-4 w-auto opacity-60 sm:right-24"
        />
        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-10 text-center lg:max-w-5xl xl:max-w-6xl">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1440e] [font-family:var(--font-fredoka)]">
              How Pricing Works
            </span>
            <h2 className="mt-2 text-4xl font-bold leading-tight tracking-wide text-black sm:text-5xl md:text-6xl">
              We price by{" "}
              <span className="relative inline-block -rotate-2 text-[#c1440e]">
                size
                <svg
                  viewBox="0 0 140 20"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-3 left-0 h-4 w-full"
                >
                  <path
                    d="M2 12 Q 20 2, 38 12 T 74 12 T 110 12 T 138 12"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </motion.div>

          <div className="flex items-end justify-center gap-6 sm:gap-12">
            {[
              { label: "Small", badge: "bg-[#fff3d1]", box: "h-16 w-16 sm:h-20 sm:w-20", icon: "h-7 w-7 sm:h-8 sm:w-8", delay: 0 },
              { label: "Medium", badge: "bg-[#ffe08a]", box: "h-20 w-20 sm:h-24 sm:w-24", icon: "h-9 w-9 sm:h-10 sm:w-10", delay: 0.3 },
              { label: "Large", badge: "bg-[#f5c842]", box: "h-24 w-24 sm:h-28 sm:w-28", icon: "h-11 w-11 sm:h-12 sm:w-12", delay: 0.6 },
            ].map((size, i) => (
              <motion.div
                key={size.label}
                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                  delay: i * 0.15,
                }}
                className="flex flex-col items-center gap-3"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: size.delay,
                  }}
                  whileHover={{ scale: 1.1, rotate: 6, transition: { duration: 0.2 } }}
                  className={`flex ${size.box} items-center justify-center rounded-full ${size.badge} text-[#c1440e] shadow-md`}
                >
                  <PawIcon className={size.icon} />
                </motion.div>
                <span className="text-sm font-bold text-black sm:text-base [font-family:var(--font-fredoka)]">
                  {size.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col items-start gap-6 bg-[#fee199] px-8 py-6 text-left sm:px-16">
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {sizeTiers.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ y: 24 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: tier.delay }}
              whileHover={{ y: -3, transition: { duration: 0.15, ease: "easeOut" } }}
              className={`relative flex flex-col gap-4 overflow-hidden rounded-2xl ${tier.bg} p-6 shadow-sm transition-shadow duration-150 hover:shadow-md`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
                className="pointer-events-none absolute left-0 top-0 h-2.5 w-full text-white/50"
              >
                <path
                  d="M0,0 Q5,10 10,0 T20,0 T30,0 T40,0 T50,0 T60,0 T70,0 T80,0 T90,0 T100,0 T110,0 T120,0 T130,0 T140,0 T150,0 T160,0 T170,0 T180,0 T190,0 T200,0 L200,0 L0,0 Z"
                  fill="currentColor"
                />
              </svg>
              <div>
                <div className="flex items-center gap-2">
                  <PawIcon className="h-5 w-5 text-black" />
                  <h3 className="text-xl font-semibold leading-8 tracking-tight text-black">
                    {tier.name}
                  </h3>
                </div>
                <p className="text-sm text-zinc-500">{tier.weight}</p>
              </div>
              <div className="flex flex-col gap-3 text-lg text-zinc-600">
                {tier.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between gap-4"
                  >
                    <span>{service.name}</span>
                    <span className="font-medium text-black">{service.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <WaveDivider />

      <section className="w-full overflow-hidden bg-[#fee199] px-8 py-16 sm:px-16">
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto w-full max-w-3xl text-center lg:max-w-5xl xl:max-w-6xl"
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
            A Peek Inside Our Studio
          </h2>
          <p className="mx-auto mt-2 max-w-md text-lg text-zinc-700 [font-family:var(--font-fredoka)]">
            A few snapshots from the grooming table.
          </p>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-10">
            {scatteredPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: photo.y + 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: photo.y, rotate: photo.rotate }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.15 }}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  zIndex: 20,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="relative w-40 shrink-0 bg-white p-2 pb-6 shadow-xl sm:w-52"
              >
                <motion.div
                  initial={{ rotate: photo.tapeRotate }}
                  className="absolute -top-4 left-1/2 h-7 w-20 -translate-x-1/2 border border-white/40 bg-white/50 shadow-sm"
                  style={{ backdropFilter: "blur(1px)" }}
                />
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 640px) 208px, 160px"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <WaveDivider />

      <section className="w-full bg-[#fee199] px-8 py-16 sm:px-16">
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl"
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
            Add-On Services
          </h2>
          <p className="mt-2 text-lg text-zinc-700 [font-family:var(--font-fredoka)]">
            Round out any visit with a little extra care.
          </p>
          <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            {addOns.map((addOn, i) => (
              <motion.div
                key={addOn.name}
                initial={{ y: 24 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.15, ease: "easeOut" } }}
                className="flex items-start justify-between gap-4 rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-150 hover:shadow-md"
              >
                <div>
                  <h3 className="text-lg font-semibold text-black">{addOn.name}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{addOn.description}</p>
                </div>
                <span className="shrink-0 text-lg font-medium text-black">
                  {addOn.price}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
