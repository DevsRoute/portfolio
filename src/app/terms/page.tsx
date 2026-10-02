import type { Metadata } from "next";
import Link from "next/link";

import { siteFacts } from "@/config/site-facts";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms for using the DevsRoute website. Project work is governed by a separate agreement.",
  alternates: { canonical: `${siteConfig.url}/terms` },
};

/**
 * LAWYER REVIEW REQUIRED — short placeholder terms for the marketing site.
 * Project engagements are covered by a separate statement of work / contract.
 */
export default function TermsPage() {
  return (
    <main className="flex-1">
      <section className="bg-[#F4F7FC] pt-40 pb-12 sm:pt-44 lg:pt-48">
        <div className="container-site max-w-3xl">
          <h1 className="font-heading text-3xl font-semibold text-ink-700 sm:text-4xl">
            Terms of Use
          </h1>
          <p className="mt-3 text-sm text-ink-500">
            Last updated: {new Date().getFullYear()} · Placeholder for counsel
            review
          </p>
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16">
        <div className="container-site max-w-3xl space-y-6 text-base leading-8 text-ink-500">
          <p>
            By using {siteConfig.url}, you agree to these terms. The site is
            informational. Nothing here is a binding offer for project work
            until we sign a separate agreement.
          </p>
          <h2 className="font-heading text-xl font-semibold text-ink-700">
            Website content
          </h2>
          <p>
            We try to keep copy accurate. Services, timelines, and examples may
            change. Portfolio items describe our role honestly and may omit
            client names at their request.
          </p>
          <h2 className="font-heading text-xl font-semibold text-ink-700">
            No warranties
          </h2>
          <p>
            The site is provided &quot;as is&quot; without warranties of any
            kind. We are not liable for decisions you make based solely on
            marketing content.
          </p>
          <h2 className="font-heading text-xl font-semibold text-ink-700">
            Contact
          </h2>
          <p>
            {siteFacts.companyName} · {siteFacts.email} · {siteFacts.address}
          </p>
          <p>
            <Link href="/privacy" className="font-medium text-brand-600">
              Privacy Policy
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
