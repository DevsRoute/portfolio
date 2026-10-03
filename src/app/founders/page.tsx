import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { calendlyHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "MVP for Funded Founders",
  description:
    "Scoped MVPs in 2-6 weeks for funded non-technical founders. Senior developers, weekly demos, direct access — no hiring detour.",
  alternates: { canonical: `${siteConfig.url}/founders` },
  robots: { index: true, follow: true },
};

const steps = [
  {
    title: "Scope call",
    body: "A 20-minute call to understand the idea, constraints, and what “done” means for v1.",
  },
  {
    title: "One-page scope",
    body: "We write a clear scope: features in, features out, timeline, and how we’ll work together.",
  },
  {
    title: "Build in sprints",
    body: "Senior developers ship weekly demos. You talk to the people writing the code.",
  },
  {
    title: "Launch-ready handoff",
    body: "You get a working MVP you can put in front of users, investors, or early customers.",
  },
] as const;

const faqs = [
  {
    q: "Do I need a technical co-founder first?",
    a: "No. Many founders come to us before hiring. We keep scope honest so you can validate before building a full team.",
  },
  {
    q: "What does 2-6 weeks actually cover?",
    a: "A focused MVP — the smallest useful product for your next milestone. Timeline depends on scope we agree together.",
  },
  {
    q: "Who do I talk to day to day?",
    a: "The developers building your product. No account-manager layer between you and the work.",
  },
] as const;

export default function FoundersPage() {
  return (
    <main className="flex-1">
      <section className="bg-[#F4F7FC] pt-40 pb-16 sm:pt-44 lg:pt-48">
        <div className="container-site max-w-3xl">
          <p className="font-mono text-xs tracking-[0.14em] text-brand-600 uppercase">
            For founders
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem]">
            Stop losing months to hiring.{" "}
            <span className="text-brand-500">Ship an MVP in 2-6 weeks.</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-ink-500 sm:text-lg">
            You&apos;re funded. You&apos;re non-technical (or lightly technical).
            You need a real product — not a six-month recruiting loop.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={calendlyHref("/founders")} size="lg">
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
            Hiring a full team takes months. Agencies pad timelines. Freelancers
            disappear. Meanwhile your runway and investor updates keep moving.
            You need a small senior team that scopes tightly and ships.
          </p>
        </div>
      </section>

      <section className="bg-[#F4F7FC] py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-ink-700 sm:text-3xl">
            Our offer
          </h2>
          <p className="mt-4 text-base leading-8 text-ink-500">
            A scoped MVP in {siteConfig.name === "DevsRoute" ? "2-6 weeks" : "2-6 weeks"}{" "}
            with senior developers, weekly demos, and a clear written scope
            before we start.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-ink-700 sm:text-3xl">
            How it works
          </h2>
          <ol className="mt-8 space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4 border-t border-ink-200 pt-6">
                <span className="font-mono text-sm text-brand-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-ink-700">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-ink-500">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#F4F7FC] py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-ink-700 sm:text-3xl">
            What you get
          </h2>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-8 text-ink-500">
            <li>A one-page scope before build starts</li>
            <li>Weekly demos you can show stakeholders</li>
            <li>Direct access to the developers</li>
            <li>A working MVP aimed at your next milestone</li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
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
            <Button href={calendlyHref("/founders")} size="lg">
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
