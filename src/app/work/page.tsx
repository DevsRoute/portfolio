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
  title: "Our Work",
  description:
    "Real web and product work from DevsRoute — SaaS, AI, FinTech, EdTech, and more. Honest roles, no invented case studies.",
  alternates: { canonical: `${siteConfig.url}/work` },
};

export default function WorkPage() {
  const featured = getFeaturedProjects(siteFacts.showConcepts);
  const websites = getWebsiteProjects(siteFacts.showConcepts);

  return (
    <main className="flex-1">
      <section className="bg-[#F4F7FC] pt-40 pb-12 sm:pt-44 sm:pb-14 lg:pt-48 lg:pb-16">
        <div className="container-site max-w-3xl">
          <p className="font-mono text-xs tracking-[0.14em] text-brand-600 uppercase">
            Work
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem]">
            Projects we&apos;ve helped{" "}
            <span className="text-brand-500">ship.</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-ink-500 sm:text-lg">
            We describe our actual role on each engagement. No invented clients
            or metrics.
          </p>
          {hasAnonymousProjects(siteFacts.showConcepts) ? (
            <p className="mt-3 text-sm text-ink-500">
              Some projects are shown without client names at their request.
            </p>
          ) : null}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-site">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <div className="relative aspect-[16/10] bg-ink-100">
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
                    <p className="text-sm text-ink-500">
                      Our role: {project.roleSummary}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-[#F4F7FC] px-2.5 py-1 text-xs font-medium text-ink-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {websites.length > 0 ? (
            <div className="mt-16 sm:mt-20">
              <h2 className="font-heading text-2xl font-semibold text-ink-700 sm:text-3xl">
                More projects
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                Simpler websites and marketing builds. Screenshots are
                placeholders until final assets are added.
              </p>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {websites.map((project) => (
                  <li key={project.slug}>
                    <Link
                      href={`/work/${project.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-ink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    >
                      <div className="relative aspect-[16/10] bg-ink-100">
                        <Image
                          src={project.screenshot}
                          alt={project.screenshotAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-mono text-[11px] tracking-[0.12em] text-brand-600 uppercase">
                          {project.category}
                        </p>
                        <h3 className="mt-1 font-heading text-lg font-semibold text-ink-700">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-ink-500">
                          Our role: {project.roleSummary}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-ink-100 pt-10">
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
