import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Bark & Bubbles",
};

const EFFECTIVE_DATE = "September 20, 2026";

export default function CookiePolicyPage() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        <h1 className="text-3xl font-bold text-black sm:text-4xl [font-family:var(--font-inter)]">
          Cookie Policy
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Effective Date: {EFFECTIVE_DATE}
        </p>

        <div className="mt-10 flex flex-col gap-8 text-base leading-7 text-zinc-700">
          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              1. What Are Cookies
            </h2>
            <p className="mt-2">
              Cookies are small text files stored on your device by your
              browser. They help websites function properly and remember
              certain information between visits.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              2. Cookies We Use
            </h2>
            <p className="mt-2">
              We use only functional cookies that are necessary for the Site
              to work properly, such as keeping an administrator logged in
              during a session. We do not use tracking, advertising, or
              analytics cookies, and we do not share cookie data with third
              parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              3. Managing Cookies
            </h2>
            <p className="mt-2">
              You can disable or delete cookies through your browser settings
              at any time. Please note that disabling cookies may affect
              certain site functionality, such as staying logged in during a
              session.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black [font-family:var(--font-inter)]">
              4. Contact Us
            </h2>
            <p className="mt-2">
              If you have questions about this Cookie Policy, please contact
              us at{" "}
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
