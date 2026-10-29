import { cta } from "@/lib/site-config";

export const heroContent = {
  headline:
    "We help startups and B2B founders build SaaS MVPs and AI-native products.",
  description:
    "SaaS MVP development and AI product development with a clear scope and a defined end date. You talk directly to the people building your product.",
  primaryCta: cta.label,
  primaryHref: cta.href,
  secondaryCta: "See our work",
  secondaryHref: "/work",
} as const;
