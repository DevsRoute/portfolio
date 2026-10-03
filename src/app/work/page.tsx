import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteFacts } from "@/config/site-facts";
import {
  getFeaturedProjects,
  getWebsiteProjects,
  hasAnonymousProjects,
} from "@/data/projects";
import { calendlyHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "See SaaS, AI, FinTech, and EdTech projects DevsRoute helped build — honest roles, real product screenshots, and the tech stacks behind them.",
  alternates: { canonical: `${siteConfig.url}/work` },
  openGraph: {
    title: "Work & Case Studies | DevsRoute",
    description:
      "Real product work across MVPs, AI features, and web apps. No invented clients — just clear roles and the stacks we used.",
  },
};

export default function WorkPage() {
  const featured = getFeaturedProjects(siteFacts.showConcepts);
  const websites = getWebsiteProjects(siteFacts.showConcepts);

  return (
    <main className="flex-1">
      <section className="bg-[#F4F7FC] pt-40 pb-12 sm:pt-44 sm:pb-14 lg:pt-48 lg:pb-16">
        <div className="container-site max-w-3xl">
          <p className="font-mono text-xs tracking-[0.14em] text-brand-600 uppercase">
            Our work
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem]">
            Products we&apos;ve helped{" "}
            <span className="text-brand-500">ship and shape.</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-ink-500 sm:text-lg sm:leading-8">
            From AI-powered SaaS to learning platforms and marketing sites —
            here&apos;s a look at recent work. We keep the roles honest: what we
            built, the stack involved, and how it fits your kind of project.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-site">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-ink-700 sm:text-3xl">
              Featured product work
            </h2>
            <p className="mt-2 text-sm leading-7 text-ink-500 sm:text-base">
              SaaS, AI, compliance, and consumer apps where we contributed
              front-end and web engineering — often alongside Node backends and
              modern APIs.
            </p>
          </div>

          <ul className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <li key={project.slug} className="h-full">
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <div className="relative aspect-[16/10] shrink-0 bg-ink-100">
                    <Image
                      src={project.screenshot}
                      alt={project.screenshotAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="font-mono text-[11px] tracking-[0.12em] text-brand-600 uppercase">
                      {project.category}
                    </span>
                    <h2 className="font-heading text-xl font-semibold text-ink-700">
                      {project.title}
                    </h2>
                    <p className="line-clamp-2 text-sm leading-6 text-ink-500">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {websites.length > 0 ? (
            <div className="mt-16 sm:mt-20">
              <h2 className="font-heading text-2xl font-semibold text-ink-700 sm:text-3xl">
                Websites &amp; marketing builds
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-500 sm:text-base">
                Fast, content-led sites for travel, directories, and local
                businesses — still real delivery, just a lighter scope.
              </p>
              <ul className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {websites.map((project) => (
                  <li key={project.slug} className="h-full">
                    <Link
                      href={`/work/${project.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    >
                      <div className="relative aspect-[16/10] shrink-0 bg-ink-100">
                        <Image
                          src={project.screenshot}
                          alt={project.screenshotAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
                        <p className="font-mono text-[11px] tracking-[0.12em] text-brand-600 uppercase">
                          {project.category}
                        </p>
                        <h3 className="font-heading text-lg font-semibold text-ink-700">
                          {project.title}
                        </h3>
                        <p className="line-clamp-2 text-sm leading-6 text-ink-500">
                          {project.summary}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-14 flex flex-col gap-4 border-t border-ink-100 pt-10 sm:flex-row sm:flex-wrap sm:items-center">
            <p className="w-full text-sm text-ink-500 sm:mb-1 sm:w-full">
              Building something similar? Tell us what you need — we&apos;ll map
              a clear next step.
            </p>
            <Button href={calendlyHref("/work")} size="lg">
              {siteConfig.cta.label}
            </Button>
            <Button href="/contact" size="lg" variant="outline" arrow={false}>
              Get a free one-page scope
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
