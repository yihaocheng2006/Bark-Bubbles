"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-yellow-800 text-white">
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.55, rotate: -6 }}
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ opacity: 0.9, scale: 1.06, rotate: -4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-8"
        title="Signed by the developer, like a little piece of art"
      >
        <Image
          src="/signature.png"
          alt="Hao's signature"
          width={924}
          height={1243}
          className="h-14 w-auto select-none sm:h-16 [filter:brightness(0)_invert(1)]"
        />
      </motion.div>
      <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-10 px-8 py-16 sm:grid-cols-3 sm:px-16 lg:max-w-5xl xl:max-w-6xl">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo222.png"
              alt="Bark & Bubbles"
              width={64}
              height={64}
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold tracking-tight [font-family:var(--font-fredoka)]">
              Bark &amp; Bubbles
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <motion.a
              href="#"
              aria-label="Facebook"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M14 13.5h2.5l.5-3H14V8.5c0-.99.28-1.5 1.5-1.5H17V4.1C16.65 4.05 15.65 4 14.5 4 12.1 4 10.5 5.53 10.5 8.2V10.5H8v3h2.5V21h3v-7.5z" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              aria-label="Instagram"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              aria-label="X (Twitter)"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M18.9 3H21l-6.4 7.3L22 21h-5.7l-4.5-5.9L6.6 21H4.5l6.8-7.8L4 3h5.8l4.1 5.4L18.9 3zm-1 16.2h1.2L8.2 4.7H6.9l11 14.5z" />
              </svg>
            </motion.a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold tracking-tight [font-family:var(--font-fredoka)]">
            Quick Links
          </h3>
          <Link href="/services" className="text-white/80 hover:text-white">
            Services
          </Link>
          <Link href="/about" className="text-white/80 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-white/80 hover:text-white">
            Contact
          </Link>
          <Link href="/blog" className="text-white/80 hover:text-white">
            Blog
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold tracking-tight [font-family:var(--font-fredoka)]">
            Contact
          </h3>
          <span className="text-white/80">(555) 123-4567</span>
          <span className="text-white/80">hello@barkandbubbles.com</span>
          <span className="text-white/80">123 Main Street, Anytown, USA</span>
        </div>
      </div>

      <div className="w-full border-t border-white/15">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-8 py-6 text-center text-sm text-white/60 sm:flex-row sm:justify-between sm:px-16 lg:max-w-5xl xl:max-w-6xl">
          <p>
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            Bark &amp; Bubbles. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
