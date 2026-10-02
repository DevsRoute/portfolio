/**
 * Real project portfolio. Prefer role-honest copy; set clientNameVisible only
 * when the client approved naming. Screenshots are placeholders until replaced.
 */

export type Project = {
  slug: string;
  title: string;
  category: string;
  roleSummary: string;
  description: string;
  whatWeBuilt: string;
  tech: string[];
  screenshot: string;
  screenshotAlt: string;
  liveUrl?: string;
  clientNameVisible: boolean;
  clientName?: string;
  outcome?: string;
  order: number;
  /** Concept / sample projects — gated by siteFacts.showConcepts */
  isConcept?: boolean;
  /** Simple website grid items */
  isWebsite?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-compliance-training",
    title: "AI Compliance Training Platform",
    category: "SaaS / AI",
    roleSummary: "Front-end development",
    description:
      "A web platform for compliance training workflows with AI-assisted learning experiences. We contributed front-end development on the product UI.",
    whatWeBuilt:
      "Front-end interfaces for training flows, dashboards, and product screens using a modern React stack.",
    tech: ["React", "TypeScript", "Next.js"],
    screenshot: "/brand/projects/placeholder-saas.jpg",
    screenshotAlt: "Placeholder screenshot for an AI compliance training product",
    clientNameVisible: false,
    order: 1,
  },
  {
    slug: "conversational-ai-messaging",
    title: "Conversational AI Messaging Platform",
    category: "AI / SaaS",
    roleSummary: "Front-end / web development",
    description:
      "A messaging product with conversational AI features. Our work focused on the front-end and web application layer.",
    whatWeBuilt:
      "Web UI for conversations, admin views, and product surfaces that connect to AI messaging features.",
    tech: ["React", "TypeScript", "Web APIs"],
    screenshot: "/brand/projects/placeholder-ai.jpg",
    screenshotAlt: "Placeholder screenshot for a conversational AI messaging product",
    clientNameVisible: false,
    order: 2,
  },
  {
    slug: "identity-verification-kyc",
    title: "Identity Verification Platform",
    category: "FinTech / compliance",
    roleSummary: "Front-end / web development",
    description:
      "A KYC/AML identity verification product. We built front-end and web interfaces for verification workflows.",
    whatWeBuilt:
      "Web flows and UI for identity checks, status views, and operator-facing screens.",
    tech: ["React", "TypeScript", "APIs"],
    screenshot: "/brand/projects/placeholder-fintech.jpg",
    screenshotAlt: "Placeholder screenshot for an identity verification platform",
    clientNameVisible: false,
    order: 3,
  },
  {
    slug: "social-recipe-app",
    title: "Social Recipe App",
    category: "Consumer app",
    roleSummary: "Web development",
    description:
      "A social recipe product where people discover and share recipes. We handled web development on the product.",
    whatWeBuilt:
      "Web application screens for browsing, profiles, and recipe content.",
    tech: ["React", "TypeScript"],
    screenshot: "/brand/projects/placeholder-consumer.jpg",
    screenshotAlt: "Placeholder screenshot for a social recipe app",
    clientNameVisible: false,
    order: 4,
  },
  {
    slug: "community-social-network",
    title: "Community Social Network",
    category: "Consumer app",
    roleSummary: "Web development",
    description:
      "A community-focused social product. Our role was web development across core product surfaces.",
    whatWeBuilt:
      "Web UI for feeds, profiles, and community interactions.",
    tech: ["React", "TypeScript"],
    screenshot: "/brand/projects/placeholder-social.jpg",
    screenshotAlt: "Placeholder screenshot for a community social network",
    clientNameVisible: false,
    order: 5,
  },
  {
    slug: "learning-platform",
    title: "Learning Platform",
    category: "EdTech",
    roleSummary: "Web development",
    description:
      "A learning platform for a school or tutoring business. We contributed web development for the product experience.",
    whatWeBuilt:
      "Web interfaces for courses, learners, and tutoring-related workflows.",
    tech: ["React", "TypeScript", "Next.js"],
    screenshot: "/brand/projects/placeholder-edtech.jpg",
    screenshotAlt: "Placeholder screenshot for a learning platform",
    clientNameVisible: false,
    order: 6,
  },
  // Website grid — add real screenshots/titles when available
  {
    slug: "travel-website",
    title: "Travel Website",
    category: "Website",
    roleSummary: "Web development",
    description:
      "A marketing site for a travel business. Simple, fast, and content-focused.",
    whatWeBuilt: "Marketing pages and responsive layout.",
    tech: ["Next.js", "Tailwind CSS"],
    screenshot: "/brand/projects/placeholder-website.jpg",
    screenshotAlt: "Placeholder screenshot for a travel website",
    clientNameVisible: false,
    isWebsite: true,
    order: 101,
  },
  {
    slug: "directory-website",
    title: "Directory Website",
    category: "Website",
    roleSummary: "Web development",
    description:
      "A directory-style site for browsing listings. Built as a straightforward web project.",
    whatWeBuilt: "Listing pages and navigation for a directory experience.",
    tech: ["Next.js", "Tailwind CSS"],
    screenshot: "/brand/projects/placeholder-website.jpg",
    screenshotAlt: "Placeholder screenshot for a directory website",
    clientNameVisible: false,
    isWebsite: true,
    order: 102,
  },
  {
    slug: "small-business-website",
    title: "Small Business Website",
    category: "Website",
    roleSummary: "Web development",
    description:
      "A small business marketing site with clear calls to action.",
    whatWeBuilt: "Home, services, and contact pages.",
    tech: ["Next.js", "Tailwind CSS"],
    screenshot: "/brand/projects/placeholder-website.jpg",
    screenshotAlt: "Placeholder screenshot for a small business website",
    clientNameVisible: false,
    isWebsite: true,
    order: 103,
  },
];

export function getVisibleProjects(showConcepts: boolean) {
  return projects
    .filter((p) => (p.isConcept ? showConcepts : true))
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(showConcepts: boolean) {
  return getVisibleProjects(showConcepts).filter((p) => !p.isWebsite);
}

export function getWebsiteProjects(showConcepts: boolean) {
  return getVisibleProjects(showConcepts).filter((p) => p.isWebsite);
}

export function getProjectBySlug(slug: string, showConcepts: boolean) {
  return getVisibleProjects(showConcepts).find((p) => p.slug === slug);
}

export function getProjectSlugs(showConcepts: boolean) {
  return getVisibleProjects(showConcepts).map((p) => p.slug);
}

export function hasAnonymousProjects(showConcepts: boolean) {
  return getVisibleProjects(showConcepts).some((p) => !p.clientNameVisible);
}
