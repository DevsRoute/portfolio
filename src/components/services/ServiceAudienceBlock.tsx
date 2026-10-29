import { ServiceContainer, ServiceSection } from "@/components/services/ServiceLayout";
import { Button } from "@/components/ui/button";
import { calendlyHref } from "@/lib/site-config";

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
              Scope
            </p>
            <p className="mt-3 text-base leading-8 text-ink-600">{timeline}</p>
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
            <div className="mt-8">
              <Button href={calendlyHref(`/services/${slug}`)} size="lg" variant="outline" arrow={false}>
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
    timeline:
      "It depends on scope. You get a clear scope and a defined end date, agreed before we start, and a demo every week.",
  },
  "custom-software-development": {
    forWho:
      "Startups and B2B founders that need SaaS MVP development or a custom product built by senior developers.",
    whatYouGet: [
      "One-page written scope",
      "Working MVP aimed at your next milestone",
      "Weekly demos",
      "Direct access to the builders",
    ],
    timeline:
      "It depends on scope. You get a clear scope and a defined end date, agreed on the first call, and a demo every week.",
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
    timeline:
      "It depends on scope. A focused first release has a clear scope and a defined end date. Larger apps are scoped in phases, with a demo every week.",
  },
  "mobile-app-development": {
    forWho: "Founders and product teams shipping iOS/Android or cross-platform apps.",
    whatYouGet: [
      "Polished mobile UI",
      "Release-ready builds for stores when in scope",
      "Weekly demos",
      "Direct developer communication",
    ],
    timeline:
      "It depends on platform and features. You get a clear scope and a defined end date before kickoff, and a demo every week.",
  },
  "ui-ux-design": {
    forWho: "Teams that need clear product UX before or alongside engineering.",
    whatYouGet: [
      "Flows and wireframes",
      "UI that matches your brand",
      "Handoff-ready designs",
      "Close loop with engineering",
    ],
    timeline:
      "It depends on scope. A focused product surface gets a clear scope and a defined end date before design starts.",
  },
  "cloud-devops": {
    forWho: "Teams that need reliable deploy pipelines, hosting, and ops basics.",
    whatYouGet: [
      "CI/CD that your team can run",
      "Sensible cloud setup",
      "Monitoring starting points",
      "Clear runbooks",
    ],
    timeline:
      "It depends on the environment. You get a clear scope and a defined end date before the work starts.",
  },
};

export function ServiceAudienceForSlug({ slug }: { slug: string }) {
  const data = audienceBySlug[slug];
  if (!data) return null;
  return <ServiceAudienceBlock slug={slug} {...data} />;
}
