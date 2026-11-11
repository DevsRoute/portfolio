import { siteFacts } from "@/config/site-facts";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import { getServicePage, getServicePageSlugs } from "@/lib/services/service-pages-data";
import { siteConfig } from "@/lib/site-config";

export function GET() {
  const origin = siteConfig.url;
  const services = getServicePageSlugs()
    .map((slug) => {
      const page = getServicePage(slug);
      if (!page) return null;
      return `- [${page.hero.eyebrow}](${origin}/services/${slug}): ${page.meta.description}`;
    })
    .filter(Boolean)
    .join("\n");

  const work = getProjectSlugs(siteFacts.showConcepts)
    .map((slug) => {
      const project = getProjectBySlug(slug, siteFacts.showConcepts);
      if (!project) return null;
      return `- [${project.title}](${origin}/work/${slug}): ${project.summary}`;
    })
    .filter(Boolean)
    .join("\n");

  const body = `# ${siteFacts.companyName}

> ${siteFacts.companyName} is a remote software studio. We help startups and B2B founders build SaaS MVPs and AI-native products. Every project starts with a clear scope and a defined end date. You talk directly to the people building the product.

This file describes public pages for answer engines and generative search tools. It is not a ranking signal, an indexing guarantee, or a claim that any AI product will cite the site.

## Identity
- Name: ${siteFacts.companyName}
- Website: ${origin}
- Email: ${siteFacts.email}
- Location: Remote. No public street address.
- LinkedIn: ${siteFacts.social.linkedin}
- Book a call: ${siteFacts.calendly.href}

## What we do
- SaaS MVP development for startups and B2B founders
- AI product development: chat assistants, automation, and AI features in new or existing products
- Custom software, web applications, mobile apps, UI/UX design, and cloud/DevOps
- Technologies we use when they fit the product: React, Next.js, TypeScript, Node.js, and Python

## What we do not claim
- No published client names unless a project page names the client
- No invented metrics, ratings, or testimonials
- No fixed delivery time in weeks. The end date is agreed on the first call, with a demo every week
- No public price list. Cost follows the written scope
- No MERN-only or Python-only service. Those languages are tools, not separate offers

## Pages
- [Home](${origin}/): SaaS MVP development and AI product development
- [For founders](${origin}/founders): SaaS MVP development with a clear scope and a defined end date
- [AI features](${origin}/ai-features): Add AI to an existing product without stalling the roadmap
- [About](${origin}/about): Remote studio for startups and B2B founders
- [Approach](${origin}/approach): Discover, design, build, and launch
- [Work](${origin}/work): Honest project roles and screenshots
- [Contact](${origin}/contact): ${siteFacts.email}

## Services
${services}

## Work
${work}

## Optional
- [Privacy](${origin}/privacy)
- [Terms](${origin}/terms)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
