import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Bark & Bubbles",
};

const EFFECTIVE_DATE = "September 20, 2026";

export default function PrivacyPolicyPage() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        <h1 className="text-3xl font-bold text-black sm:text-4xl [font-family:var(--font-inter)]">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Effective Date: {EFFECTIVE_DATE}
        </p>

        <div className="mt-10 flex flex-col gap-8 text-base leading-7 text-zinc-700">
          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              1. Purpose of This Notice
            </h2>
            <p className="mt-2">
              This Privacy Policy explains how Bark &amp; Bubbles
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              collects, uses, and protects personal information submitted
              through www.barkandbubbles.com (the &ldquo;Site&rdquo;). By
              using the Site, you agree to the practices described in this
              policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              2. Information We Collect
            </h2>
            <p className="mt-2">
              When you submit our Book Appointment or Contact forms, we may
              collect your name, email address, phone number, and details
              about your dog, such as size and grooming needs. We do not
              collect any payment information through this Site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              3. How We Use Your Information
            </h2>
            <p className="mt-2">
              We use the information you provide to schedule and manage
              grooming appointments, respond to inquiries submitted through
              our Contact form, and send appointment confirmation emails. We
              do not sell or share your personal information with third
              parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              4. Third-Party Services
            </h2>
            <p className="mt-2">
              To operate the Site, we rely on the following third-party
              service providers, each of which processes your data only to
              provide the function described below:
            </p>
            <ul className="mt-2 list-disc pl-6">
              <li>
                <span className="font-semibold text-black">Supabase</span> —
                securely stores appointment and contact form submissions in
                our database.
              </li>
              <li>
                <span className="font-semibold text-black">Resend</span> —
                sends automated appointment confirmation emails on our
                behalf.
              </li>
            </ul>
            <p className="mt-2">
              These providers are limited to using your data solely to
              deliver these services to us and do not use it for their own
              purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              5. Data Retention
            </h2>
            <p className="mt-2">
              We retain personal information only for as long as necessary to
              schedule and manage your appointment or respond to your
              inquiry. We do not retain your information indefinitely and
              periodically review stored data to remove what is no longer
              needed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              6. Your Rights
            </h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your
              personal information at any time by emailing us at{" "}
              <a
                href="mailto:hello@barkandbubbles.com"
                className="font-semibold text-black underline underline-offset-2"
              >
                hello@barkandbubbles.com
              </a>
              . We will respond to your request within a reasonable
              timeframe.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              7. Cookies
            </h2>
            <p className="mt-2">
              This Site uses cookies to support certain site functionality.
              For details on the types of cookies we use and how to manage
              them, please see our{" "}
              <Link
                href="/cookie-policy"
                className="font-semibold text-black underline underline-offset-2"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              8. Children&apos;s Data
            </h2>
            <p className="mt-2">
              This Site is not directed at children under the age of 16, and
              we do not knowingly collect personal information from children
              under 16. If you believe a child has provided us with personal
              information, please contact us so we can delete it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              9. Changes to This Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Any
              changes will be posted on this page along with an updated
              effective date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              10. Contact Us
            </h2>
            <p className="mt-2">
              If you have questions about this Privacy Policy or how your
              information is handled, please contact us at{" "}
              <a
                href="mailto:hello@barkandbubbles.com"
                className="font-semibold text-black underline underline-offset-2"
              >
                hello@barkandbubbles.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
