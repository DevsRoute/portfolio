import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { calendlyHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AI Features for SaaS Teams",
  description:
    "Add chatbots, automation, and OpenAI integrations to your SaaS without pulling your core team off the roadmap.",
  alternates: { canonical: `${siteConfig.url}/ai-features` },
  robots: { index: true, follow: true },
};

const examples = [
  "Customer-facing chatbots and assistants",
  "Internal tools that summarize, classify, or draft",
  "Workflow automation with OpenAI and your APIs",
  "Document Q&A and knowledge helpers inside your product",
] as const;

const faqs = [
  {
    q: "Will this distract our core product team?",
    a: "That’s the point of hiring us — we take a focused AI slice so your team stays on the roadmap.",
  },
  {
    q: "Do you only use OpenAI?",
    a: "OpenAI is common, but we pick the stack that fits your product, data, and constraints.",
  },
  {
    q: "How do we start?",
    a: "Book a 15-min call. We’ll map a small, shippable AI feature and a realistic timeline.",
  },
] as const;

export default function AiFeaturesPage() {
  return (
    <main className="flex-1">
      <section className="bg-[#F4F7FC] pt-40 pb-16 sm:pt-44 lg:pt-48">
        <div className="container-site max-w-3xl">
          <p className="font-mono text-xs tracking-[0.14em] text-brand-600 uppercase">
            For SaaS teams
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem]">
            Add AI to your product{" "}
            <span className="text-brand-500">without stalling the roadmap.</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-ink-500 sm:text-lg">
            Your customers expect AI. Your team is already full. We ship focused
            AI features so the core product keeps moving.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={calendlyHref("/ai-features")} size="lg">
              {siteConfig.cta.label}
            </Button>
            <Button href="/contact" size="lg" variant="outline" arrow={false}>
              Get a free one-page scope
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-ink-700 sm:text-3xl">
            The problem
          </h2>
          <p className="mt-4 text-base leading-8 text-ink-500">
            AI spikes pull senior engineers into spikes, prototypes, and vendor
            evals. Roadmaps slip. We take a clear AI deliverable and ship it as
            a partner, not a distraction.
          </p>
        </div>
      </section>

      <section className="bg-[#F4F7FC] py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-ink-700 sm:text-3xl">
            Examples of what we build
          </h2>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-8 text-ink-500">
            {examples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-ink-700 sm:text-3xl">
            Process
          </h2>
          <ol className="mt-8 list-decimal space-y-3 pl-5 text-base leading-8 text-ink-500">
            <li>15-min call to pick one high-value AI use case</li>
            <li>One-page scope: data, UX, model choice, success criteria</li>
            <li>Build and integrate with weekly demos</li>
            <li>Handoff with docs so your team can own it</li>
          </ol>
        </div>
      </section>

      <section className="bg-[#F4F7FC] py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-ink-700 sm:text-3xl">
            FAQ
          </h2>
          <dl className="mt-8 space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="border-t border-ink-200 pt-6">
                <dt className="font-heading text-lg font-semibold text-ink-700">
                  {item.q}
                </dt>
                <dd className="mt-2 text-sm leading-7 text-ink-500">{item.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button href={calendlyHref("/ai-features")} size="lg">
              {siteConfig.cta.label}
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-semibold text-brand-600"
            >
              Or request a free one-page scope →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
