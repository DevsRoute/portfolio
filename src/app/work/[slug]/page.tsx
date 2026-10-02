import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { siteFacts } from "@/config/site-facts";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import { calendlyHref, siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjectSlugs(siteFacts.showConcepts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug, siteFacts.showConcepts);
  if (!project) return { title: "Project" };

  return {
    title: project.title.slice(0, 55),
    description: project.description.slice(0, 155),
    alternates: { canonical: `${siteConfig.url}/work/${project.slug}` },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, siteFacts.showConcepts);
  if (!project) notFound();

  return (
    <main className="flex-1">
      <section className="bg-[#F4F7FC] pt-40 pb-12 sm:pt-44 lg:pt-48">
        <div className="container-site max-w-3xl">
          <Link
            href="/work"
            className="text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            ← All work
          </Link>
          <p className="mt-6 font-mono text-xs tracking-[0.14em] text-brand-600 uppercase">
            {project.category}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl">
            {project.clientNameVisible && project.clientName
              ? project.clientName
              : project.title}
          </h1>
          <p className="mt-4 text-base text-ink-500">
            Our role: {project.roleSummary}
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container-site max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-ink-100">
            <Image
              src={project.screenshot}
              alt={project.screenshotAlt}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-ink-700">
                Overview
              </h2>
              <p className="mt-3 text-base leading-8 text-ink-500">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-ink-700">
                Our role
              </h2>
              <p className="mt-3 text-base leading-8 text-ink-500">
                {project.roleSummary}. We stay close to the product surface and
                ship in focused milestones with clear communication.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-ink-700">
                What we built
              </h2>
              <p className="mt-3 text-base leading-8 text-ink-500">
                {project.whatWeBuilt}
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-ink-700">
                Tech
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-[#F4F7FC] px-3 py-1.5 text-sm font-medium text-ink-600"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </section>

            {project.outcome ? (
              <section>
                <h2 className="font-heading text-2xl font-semibold text-ink-700">
                  Outcome
                </h2>
                <p className="mt-3 text-base leading-8 text-ink-500">
                  {project.outcome}
                </p>
              </section>
            ) : null}
          </div>

          <div className="mt-14 flex flex-wrap gap-4 border-t border-ink-100 pt-10">
            <Button href={calendlyHref(`/work/${project.slug}`)} size="lg">
              {siteConfig.cta.label}
            </Button>
            {project.liveUrl ? (
              <Button
                href={project.liveUrl}
                size="lg"
                variant="outline"
                arrow={false}
              >
                Visit live site
              </Button>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
