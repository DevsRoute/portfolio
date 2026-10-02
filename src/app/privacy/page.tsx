import type { Metadata } from "next";
import Link from "next/link";

import { siteFacts } from "@/config/site-facts";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DevsRoute handles contact form data, analytics, and cookies on our website.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

/**
 * LAWYER REVIEW REQUIRED — this is a short placeholder policy for launch.
 * Have counsel review before treating it as definitive legal advice.
 */
export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <section className="bg-[#F4F7FC] pt-40 pb-12 sm:pt-44 lg:pt-48">
        <div className="container-site max-w-3xl">
          <h1 className="font-heading text-3xl font-semibold text-ink-700 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-ink-500">
            Last updated: {new Date().getFullYear()} · Placeholder for counsel
            review
          </p>
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16">
        <div className="container-site prose prose-ink max-w-3xl space-y-6 text-base leading-8 text-ink-500">
          <p>
            {siteFacts.companyName} (&quot;we&quot;) operates {siteConfig.url}.
            This page explains what we collect when you use the site or contact
            us.
          </p>
          <h2 className="font-heading text-xl font-semibold text-ink-700">
            Contact form and email
          </h2>
          <p>
            If you submit a form or email {siteFacts.email}, we receive the
            details you provide (name, work email, company, project notes,
            optional budget/timeline). We use that information only to respond
            to your inquiry and related project discussions.
          </p>
          <h2 className="font-heading text-xl font-semibold text-ink-700">
            Analytics and cookies
          </h2>
          <p>
            We may use privacy-friendly analytics (e.g. Plausible) or Google
            Analytics 4 if configured. Plausible does not use advertising
            cookies. If GA4 is enabled, a consent banner defaults to decline
            until you accept.
          </p>
          <h2 className="font-heading text-xl font-semibold text-ink-700">
            Calendly
          </h2>
          <p>
            Booking a call takes you to Calendly, which has its own privacy
            policy. We receive the meeting details you share there.
          </p>
          <h2 className="font-heading text-xl font-semibold text-ink-700">
            Contact
          </h2>
          <p>
            Questions:{" "}
            <a
              className="font-medium text-brand-600"
              href={`mailto:${siteFacts.email}`}
            >
              {siteFacts.email}
            </a>
            . Address: {siteFacts.address}.
          </p>
          <p>
            See also our{" "}
            <Link href="/terms" className="font-medium text-brand-600">
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
