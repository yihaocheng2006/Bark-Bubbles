"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "Use our online booking page to pick a date, time, and your dog's size. Once submitted, you'll receive a confirmation email with your appointment details. If you need to make changes afterward, just reach out through our Contact page.",
  },
  {
    question: "What's included in a grooming session?",
    answer:
      "Every grooming session includes a bath, blow-dry, brushing, nail trim, and ear cleaning. These core services are included regardless of your dog's size, so you always know what to expect.",
  },
  {
    question: "How should I prepare my dog before arriving?",
    answer:
      "Let your dog relieve itself before you arrive so they're comfortable during the appointment. If your dog is high-energy, a short walk beforehand can help them settle down and stay calmer on the grooming table.",
  },
  {
    question: "How long does an appointment take?",
    answer:
      "Small and medium dogs typically take about 30 minutes, while large dogs take about 1 hour. Appointments that include additional services, like de-shedding or flea treatment, may take a bit longer.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Please notify us at least 24 hours in advance if you need to cancel or reschedule. Cancellations made with less than 24 hours' notice may prevent us from filling that time slot, so we ask that you let us know as early as possible, and repeated late cancellations may require booking further in advance for future visits.",
  },
  {
    question: "Do I need to provide vaccination records?",
    answer:
      "Yes, your dog's vaccinations should be up to date before your visit to keep every dog in our studio safe and healthy. We may ask for proof of vaccination at check-in, so it helps to have records on hand.",
  },
  {
    question: "Is tipping expected?",
    answer:
      "Tipping is never required, but it's always appreciated by our groomers. If you'd like to tip, you're welcome to do so directly with your groomer at pickup.",
  },
  {
    question: "What if it's my dog's first time being groomed?",
    answer:
      "Let us know when booking that it's your dog's first grooming visit. We take extra time with first-timers — moving slowly, offering breaks, and using positive reinforcement — so your dog can get comfortable with the sounds, tools, and handling involved in grooming.",
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

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          animate={{ opacity: 1, scale: 1, rotate: -7 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.08, rotate: 0, zIndex: 20, transition: { duration: 0.2 } }}
          className="absolute -bottom-4 -right-2 z-10 w-24 bg-white p-1.5 pb-4 shadow-xl sm:bottom-6 sm:right-10 sm:w-32 md:w-36"
        >
          <motion.div
            initial={{ rotate: 10 }}
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
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto w-full max-w-3xl px-8 py-16 text-center sm:px-16 sm:py-20 lg:max-w-5xl xl:max-w-6xl"
        >
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            Got Questions?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 [font-family:var(--font-fredoka)]">
            Everything you need to know before your pup&apos;s next bubble
            bath.
          </p>
        </motion.div>
      </section>

      <section className="w-full bg-[#fee199] px-8 py-16 sm:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mx-auto flex w-full max-w-3xl flex-col gap-4 lg:max-w-4xl"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fee199] text-[#c1440e]">
                    <PawIcon className="h-4 w-4" />
                  </span>
                  <span className="flex-1 text-lg font-semibold text-black [font-family:var(--font-fredoka)]">
                    {faq.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5 shrink-0 text-[#c1440e]"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                  </motion.svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pl-19 text-base leading-7 text-zinc-700 sm:pl-[4.25rem]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}
