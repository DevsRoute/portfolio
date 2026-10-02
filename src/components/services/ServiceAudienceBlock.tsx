import { ServiceContainer, ServiceSection } from "@/components/services/ServiceLayout";
import { Button } from "@/components/ui/button";
import { siteFacts } from "@/config/site-facts";
import { calendlyHref, siteConfig } from "@/lib/site-config";

/**
 * Shared audience-facing block for every service page.
 */
export function ServiceAudienceBlock({
  slug,
  forWho,
  whatYouGet,
  timeline,
}: {
  slug: string;
  forWho: string;
  whatYouGet: string[];
  timeline: string;
}) {
  return (
    <ServiceSection tone="soft">
      <ServiceContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-brand-600 uppercase">
              Who it&apos;s for
            </p>
            <p className="mt-3 text-base leading-8 text-ink-600">{forWho}</p>
            <p className="mt-6 font-mono text-xs tracking-[0.14em] text-brand-600 uppercase">
              Typical timeline
            </p>
            <p className="mt-3 text-base leading-8 text-ink-600">{timeline}</p>
            {!siteFacts.certifications.hipaa &&
            !siteFacts.certifications.soc2 &&
            !siteFacts.certifications.pci ? (
              <p className="mt-4 text-sm text-ink-400">
                We don&apos;t claim HIPAA, SOC 2, or PCI certifications unless
                explicitly agreed for an engagement.
              </p>
            ) : null}
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-brand-600 uppercase">
              What you get
            </p>
            <ul className="mt-4 space-y-3">
              {whatYouGet.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-7 text-ink-600 sm:text-base"
                >
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={calendlyHref(`/services/${slug}`)} size="lg">
                {siteConfig.cta.label}
              </Button>
              <Button href="/contact" size="lg" variant="outline" arrow={false}>
                Get a free one-page scope
              </Button>
            </div>
          </div>
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}

const audienceBySlug: Record<
  string,
  { forWho: string; whatYouGet: string[]; timeline: string }
> = {
  "ai-solutions": {
    forWho:
      "SaaS teams (roughly 10–100 people) that want chatbots, automation, or OpenAI features without stalling the core roadmap.",
    whatYouGet: [
      "A scoped AI feature brief",
      "Working integration in your product",
      "Weekly demos and direct developer access",
      "Handoff notes your team can own",
    ],
    timeline: "Often 2–6 weeks for a focused first feature, depending on scope and data access.",
  },
  "custom-software-development": {
    forWho:
      "Funded founders and product teams that need a scoped MVP or custom product built by senior developers.",
    whatYouGet: [
      "One-page written scope",
      "Working MVP aimed at your next milestone",
      "Weekly demos",
      "Direct access to the builders",
    ],
    timeline: "Typical MVP: 2–6 weeks when the brief is clear.",
  },
  "web-application-development": {
    forWho:
      "Teams that need a fast, maintainable web app — dashboards, portals, or customer-facing products.",
    whatYouGet: [
      "Production-minded web UI",
      "Clear architecture choices",
      "Weekly progress demos",
      "Docs for handoff",
    ],
    timeline: "2–6 weeks for a focused first release; larger apps scoped in phases.",
  },
  "mobile-app-development": {
    forWho: "Founders and product teams shipping iOS/Android or cross-platform apps.",
    whatYouGet: [
      "Polished mobile UI",
      "Release-ready builds for stores when in scope",
      "Weekly demos",
      "Direct developer communication",
    ],
    timeline: "Depends on platform and features — scoped honestly before kickoff.",
  },
  "ui-ux-design": {
    forWho: "Teams that need clear product UX before or alongside engineering.",
    whatYouGet: [
      "Flows and wireframes",
      "UI that matches your brand",
      "Handoff-ready designs",
      "Close loop with engineering",
    ],
    timeline: "Often 1–3 weeks for a focused product surface.",
  },
  "cloud-devops": {
    forWho: "Teams that need reliable deploy pipelines, hosting, and ops basics.",
    whatYouGet: [
      "CI/CD that your team can run",
      "Sensible cloud setup",
      "Monitoring starting points",
      "Clear runbooks",
    ],
    timeline: "Scoped per environment — often days to a few weeks.",
  },
};

export function ServiceAudienceForSlug({ slug }: { slug: string }) {
  const data = audienceBySlug[slug];
  if (!data) return null;
  return <ServiceAudienceBlock slug={slug} {...data} />;
}
