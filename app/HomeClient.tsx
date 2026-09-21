"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    name: "Maria Gonzalez",
    initials: "MG",
    rating: 5,
    quote: "Bark & Bubbles turned my anxious rescue into a spa regular. He practically drags me through the door now!",
    bg: "bg-[#fff3d1]",
  },
  {
    name: "Jordan Lee",
    initials: "JL",
    rating: 5,
    quote: "Gentle, patient, and so thorough. My golden retriever has never looked (or smelled) this good.",
    bg: "bg-[#ffe08a]",
  },
  {
    name: "Priya Shah",
    initials: "PS",
    rating: 4,
    quote: "Booking was easy and the team really took their time with my nervous senior pup. Highly recommend.",
    bg: "bg-[#f5c842]",
  },
  {
    name: "Tom Bennett",
    initials: "TB",
    rating: 5,
    quote: "Consistent, friendly, and always on time. This is the only place I trust with my dog's grooming.",
    bg: "bg-[#fff3d1]",
  },
];

const spacePhotos = [
  {
    src: "/facilities1.jpeg",
    alt: "A groomer carefully trimming a Shih Tzu in our studio",
    caption: "Careful, precise grooming",
  },
  {
    src: "/facilities2.webp",
    alt: "A happy Golden Retriever with its groomer",
    caption: "Happy pups, happy groomers",
  },
  {
    src: "/facilities3.webp",
    alt: "A freshly groomed poodle sitting on the grooming table",
    caption: "Fresh cuts in our bright, colorful studio",
  },
];

const team = [
  {
    name: "Jamie Rivera",
    role: "Founder & Master Groomer",
    bio: "Certified master groomer with 12 years of experience and a soft spot for nervous first-timers.",
    photo: "/jamie-rivera.jpg",
  },
  {
    name: "Sam Okafor",
    role: "Senior Groomer",
    bio: "Specializes in breed-standard cuts and de-shedding treatments for double-coated dogs.",
    photo: "/sam.jpeg",
  },
  {
    name: "Priya Nair",
    role: "Bath & Spa Specialist",
    bio: "Turns bath time into the best part of the day, one bubble at a time.",
    photo: "/priya.webp",
  },
];

const CertifiedIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <circle cx="12" cy="8" r="5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5" />
  </svg>
);

const HomeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 11.5 12 4l8 7.5" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 10v9a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-9"
    />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 21s-7.5-4.6-10-9.3C.4 8.4 2 5 5.5 5c2 0 3.3 1.1 4 2.2.7-1.1 2-2.2 4-2.2C17 5 18.6 8.4 17 11.7 14.5 16.4 12 21 12 21Z" />
  </svg>
);

const whyUs = [
  {
    Icon: CertifiedIcon,
    bg: "bg-[#fff3d1]",
    heading: "A Higher Standard of Grooming",
    items: [
      "Certified, experienced groomers",
      "Gentle with every breed, age & size",
      "A cozy bandana & treat after every visit",
    ],
  },
  {
    Icon: HomeIcon,
    bg: "bg-[#ffe08a]",
    heading: "Locally Loved, Family Run",
    items: [
      "A neighborhood studio, not a chain",
      "Groomers who know your dog by name",
      "Serving Anytown since day one",
    ],
  },
  {
    Icon: HeartIcon,
    bg: "bg-[#f5c842]",
    heading: "Calm & Stress-Free",
    items: [
      "One-on-one attention, no crowded cages",
      "A quiet, low-stress studio",
      "Plenty of belly rubs & treat breaks",
    ],
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-5 w-5 text-[#c1440e]"
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomeClient() {
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setReviewIndex((i) => (i + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <main className="flex w-full flex-col items-stretch lg:flex-row">
        <div className="relative flex w-full flex-col items-start justify-center gap-10 bg-gradient-to-br from-yellow-800 via-yellow-700 to-yellow-500 px-8 pt-12 pb-20 text-left sm:gap-12 sm:px-16 sm:py-24 lg:z-10 lg:w-[55%] lg:-mr-[5%] lg:[clip-path:polygon(0%_0%,91%_0%,92.4%_5%,93.8%_10%,95.1%_15%,96.3%_20%,97.4%_25%,98.3%_30%,99%_35%,99.6%_40%,99.9%_45%,100%_50%,99.9%_55%,99.6%_60%,99%_65%,98.3%_70%,97.4%_75%,96.3%_80%,95.1%_85%,93.8%_90%,92.4%_95%,91%_100%,0%_100%)]">
          <Image
            src="/bubble.webp"
            alt=""
            aria-hidden="true"
            width={40}
            height={23}
            className="pointer-events-none absolute left-6 top-6 h-5 w-auto opacity-80 sm:left-12"
          />
          <Image
            src="/bubble.webp"
            alt=""
            aria-hidden="true"
            width={40}
            height={23}
            className="pointer-events-none absolute right-10 top-16 h-4 w-auto opacity-70 sm:right-20"
          />
          <Image
            src="/bubble.webp"
            alt=""
            aria-hidden="true"
            width={40}
            height={23}
            className="pointer-events-none absolute bottom-10 left-16 h-7 w-auto opacity-70 sm:left-28"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="pointer-events-none absolute right-6 bottom-24 h-6 w-6 rotate-12 text-white/25 sm:right-16"
          >
            <ellipse cx="12" cy="16" rx="6" ry="5" />
            <ellipse cx="5" cy="8" rx="2.2" ry="3" />
            <ellipse cx="10" cy="5" rx="2.2" ry="3" />
            <ellipse cx="14" cy="5" rx="2.2" ry="3" />
            <ellipse cx="19" cy="8" rx="2.2" ry="3" />
          </svg>
          <motion.h1
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          >
            <span className="inline-block -rotate-3 text-[#fee199]">Dog</span>
            <br />
            <span className="relative inline-block">
              Grooming
              <svg
                viewBox="0 0 200 20"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 left-0 h-4 w-full text-white"
              >
                <path
                  d="M2 12 Q 26 2, 50 12 T 98 12 T 146 12 T 198 12"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>
          <Link href="/book" className="inline-block">
            <motion.div
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex h-14 items-center justify-center rounded-full bg-black px-8 text-lg font-medium text-white shadow-lg shadow-black/20 transition-colors hover:bg-zinc-800 [font-family:var(--font-fredoka)]"
            >
              Book a Grooming
            </motion.div>
          </Link>
          <motion.p
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
            className="max-w-md text-sm italic leading-relaxed text-white/75 sm:text-base [font-family:var(--font-fredoka)]"
          >
            &ldquo;We use gentle care and plenty of bubbles to transform your
            lovable dirt-magnet back into a sparkling, fluffy best friend
            ready for couch snuggles!&rdquo;
          </motion.p>
        </div>
        <div className="relative -mt-12 h-[clamp(220px,55vw,340px)] w-full bg-gradient-to-br from-yellow-100 to-[#fee199] [clip-path:polygon(0%_100%,100%_100%,100%_12%,95%_10.1%,90%_8.3%,85%_6.5%,80%_4.9%,75%_3.5%,70%_2.3%,65%_1.3%,60%_0.6%,55%_0.1%,50%_0%,45%_0.1%,40%_0.6%,35%_1.3%,30%_2.3%,25%_3.5%,20%_4.9%,15%_6.5%,10%_8.3%,5%_10.1%,0%_12%)] lg:mt-0 lg:h-auto lg:aspect-[2/3] lg:max-h-[600px] lg:w-1/2 lg:[clip-path:none]">
          <Image
            src="/doghero2.png"
            alt="Freshly groomed dog"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain"
            priority
          />
        </div>
      </main>

      <section className="w-full bg-[#fee199] px-8 py-16 sm:px-16">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-10 lg:max-w-5xl xl:max-w-6xl">
          <div className="flex w-full flex-col items-center gap-10 sm:flex-row sm:items-stretch">
            <div className="grid h-80 w-full grid-cols-2 grid-rows-2 gap-3 sm:h-auto sm:w-1/2">
              {spacePhotos.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  initial={{ y: 16 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl shadow-md ${
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

            <div className="relative min-h-[240px] w-full sm:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={reviewIndex}
                  initial={{ x: 24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -24, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 flex flex-col items-center gap-3 px-4 text-center sm:items-start sm:justify-center sm:text-left"
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${reviews[reviewIndex].bg} text-lg font-bold text-black [font-family:var(--font-fredoka)]`}
                  >
                    {reviews[reviewIndex].initials}
                  </div>
                  <StarRating rating={reviews[reviewIndex].rating} />
                  <p className="text-lg italic leading-snug text-zinc-700 [font-family:var(--font-fredoka)]">
                    &ldquo;{reviews[reviewIndex].quote}&rdquo;
                  </p>
                  <span className="font-semibold text-black">
                    {reviews[reviewIndex].name}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {reviews.map((review, i) => (
              <motion.button
                key={review.name}
                type="button"
                aria-label={`Show review from ${review.name}`}
                onClick={() => setReviewIndex(i)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === reviewIndex ? "bg-[#c1440e]" : "bg-black/20"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#fee199] px-8 py-16 sm:px-16">
        <svg
          aria-hidden="true"
          viewBox="0 0 200 12"
          preserveAspectRatio="none"
          className="pointer-events-none absolute top-0 left-0 h-3 w-full text-[#c1440e]/30"
        >
          <path
            d="M0,6 Q10,0 20,6 T40,6 T60,6 T80,6 T100,6 T120,6 T140,6 T160,6 T180,6 T200,6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <Image
          src="/bubble.webp"
          alt=""
          aria-hidden="true"
          width={40}
          height={23}
          className="pointer-events-none absolute left-1/2 top-4 h-5 w-auto -translate-x-1/2 opacity-70 sm:top-6"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-6 top-24 hidden opacity-60 sm:block md:right-16"
        >
          <Image src="/bubble.webp" alt="" width={40} height={23} className="h-6 w-auto" />
        </motion.div>
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="pointer-events-none absolute left-6 bottom-28 hidden opacity-60 sm:block md:left-16"
        >
          <Image src="/bubble.webp" alt="" width={40} height={23} className="h-5 w-auto" />
        </motion.div>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="pointer-events-none absolute bottom-4 left-1/2 h-6 w-6 -translate-x-1/2 rotate-12 text-[#c1440e]/25"
        >
          <ellipse cx="12" cy="16" rx="6" ry="5" />
          <ellipse cx="5" cy="8" rx="2.2" ry="3" />
          <ellipse cx="10" cy="5" rx="2.2" ry="3" />
          <ellipse cx="14" cy="5" rx="2.2" ry="3" />
          <ellipse cx="19" cy="8" rx="2.2" ry="3" />
        </svg>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          whileHover={{ scale: 1.08, rotate: 0, zIndex: 20, transition: { duration: 0.2 } }}
          className="absolute top-6 left-4 z-10 hidden w-24 bg-white p-1.5 pb-4 shadow-xl sm:left-8 sm:block sm:w-28 md:w-32"
        >
          <motion.div
            initial={{ rotate: 9 }}
            className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 border border-white/40 bg-white/50 shadow-sm"
            style={{ backdropFilter: "blur(1px)" }}
          />
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/1.webp"
              alt="A groomer trimming a curly black poodle"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 7 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.22 }}
          whileHover={{ scale: 1.08, rotate: 0, zIndex: 20, transition: { duration: 0.2 } }}
          className="absolute top-6 right-4 z-10 hidden w-24 bg-white p-1.5 pb-4 shadow-xl sm:right-8 sm:block sm:w-28 md:w-32"
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
              sizes="128px"
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.08, rotate: 0, zIndex: 20, transition: { duration: 0.2 } }}
          className="absolute bottom-6 left-4 z-10 hidden w-24 bg-white p-1.5 pb-4 shadow-xl sm:left-8 sm:block sm:w-28 md:w-32"
        >
          <motion.div
            initial={{ rotate: -11 }}
            className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 border border-white/40 bg-white/50 shadow-sm"
            style={{ backdropFilter: "blur(1px)" }}
          />
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/3.jpg"
              alt="A dog getting a bubbly shampoo at bath time"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -7 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.38 }}
          whileHover={{ scale: 1.08, rotate: 0, zIndex: 20, transition: { duration: 0.2 } }}
          className="absolute bottom-6 right-4 z-10 hidden w-24 bg-white p-1.5 pb-4 shadow-xl sm:right-8 sm:block sm:w-28 md:w-32"
        >
          <motion.div
            initial={{ rotate: 10 }}
            className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 border border-white/40 bg-white/50 shadow-sm"
            style={{ backdropFilter: "blur(1px)" }}
          />
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/4.jpg"
              alt="An apricot poodle standing on the grooming table"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
        </motion.div>
        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center lg:max-w-5xl xl:max-w-6xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="block -rotate-2 text-2xl font-semibold text-[#c1440e] sm:text-3xl [font-family:var(--font-fredoka)]">
              why
            </span>
            <h2 className="mt-1 text-4xl font-extrabold uppercase tracking-tight text-black sm:text-5xl [font-family:var(--font-fredoka)]">
              <span className="inline-block -rotate-2 text-[#c1440e]">Bark</span>{" "}
              &amp;{" "}
              <span className="relative inline-block">
                Bubbles?
                <svg
                  viewBox="0 0 200 20"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full text-[#c1440e]"
                >
                  <path
                    d="M2 12 Q 26 2, 50 12 T 98 12 T 146 12 T 198 12"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600 [font-family:var(--font-fredoka)]">
              Simply put, we bring{" "}
              <span className="font-semibold text-black">
                expert care full of love and bubbles
              </span>{" "}
              to every dog that walks through our door.
            </p>
          </motion.div>

          <div className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            {whyUs.map((col, i) => (
              <motion.div
                key={col.heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.12 }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { duration: 0.15, ease: "easeOut" },
                }}
                className={`relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl ${col.bg} p-6 text-left shadow-sm transition-shadow duration-150 hover:shadow-md`}
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
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#c1440e] shadow-sm"
                >
                  <col.Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-black [font-family:var(--font-fredoka)]">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-2">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-6 text-zinc-700 sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c1440e]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            className="mt-12 flex flex-col items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c1440e] text-white shadow-md"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z"
                />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
            </motion.div>
            <p className="max-w-xs text-sm text-zinc-600 [font-family:var(--font-fredoka)]">
              Right on Main Street, with easy parking out front.
            </p>
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=123+Main+Street+Anytown+USA"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-medium text-white shadow-md transition-colors hover:bg-zinc-800 sm:h-12 sm:px-8 sm:text-base"
            >
              Find Us — Get Directions
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4 sm:h-5 sm:w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[#c1440e] px-8 py-16 sm:px-16">
        <div className="mx-auto w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl">
          <motion.div
            initial={{ y: 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 [font-family:var(--font-fredoka)]">
              Our People
            </span>
            <h2 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl [font-family:var(--font-fredoka)]">
              Meet the Team
            </h2>
          </motion.div>
          <div className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ y: 24 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 text-center shadow-sm hover:shadow-md"
              >
                <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-[#fee199]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-black [font-family:var(--font-fredoka)]">
                  {member.name}
                </h3>
                <span className="rounded-full bg-[#fee199] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#c1440e]">
                  {member.role}
                </span>
                <p className="text-sm leading-6 text-zinc-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
