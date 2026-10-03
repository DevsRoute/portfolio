/**
 * Real project portfolio. Prefer role-honest copy; set clientNameVisible only
 * when the client approved naming. Screenshots are placeholders until replaced.
 */

export type Project = {
  slug: string;
  title: string;
  category: string;
  roleSummary: string;
  /** Short blurb for cards / grids */
  summary: string;
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
    summary:
      "Compliance training workflows with AI-assisted courses, calendars, and learning dashboards.",
    description:
      "A web platform for compliance training workflows with AI-assisted learning experiences. We contributed front-end development on the product UI.",
    whatWeBuilt:
      "Front-end interfaces for training flows, dashboards, and product screens using a modern React stack.",
    tech: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "OpenAI"],
    screenshot: "/brand/projects/ai-compliance-training-platform.png",
    screenshotAlt:
      "ComplianceLearn SaaS dashboard with courses, training calendar, and AI learning assistant",
    clientNameVisible: false,
    order: 1,
  },
  {
    slug: "conversational-ai-messaging",
    title: "Conversational AI Messaging Platform",
    category: "AI / SaaS",
    roleSummary: "Front-end / web development",
    summary:
      "AI-powered messaging product with conversation views, assistants, and admin surfaces.",
    description:
      "A messaging product with conversational AI features. Our work focused on the front-end and web application layer.",
    whatWeBuilt:
      "Web UI for conversations, admin views, and product surfaces that connect to AI messaging features.",
    tech: ["React", "TypeScript", "Node.js", "WebSockets", "OpenAI", "REST APIs"],
    screenshot: "/brand/projects/conversational-ai-messaging-platform.png",
    screenshotAlt:
      "Conversational AI messaging platform interface with chat and assistant features",
    clientNameVisible: false,
    order: 2,
  },
  {
    slug: "identity-verification-kyc",
    title: "Identity Verification Platform",
    category: "FinTech / compliance",
    roleSummary: "Front-end / web development",
    summary:
      "KYC and identity checks with clear verification flows for operators and end users.",
    description:
      "A KYC/AML identity verification product. We built front-end and web interfaces for verification workflows.",
    whatWeBuilt:
      "Web flows and UI for identity checks, status views, and operator-facing screens.",
    tech: ["React", "TypeScript", "Node.js", "REST APIs", "PostgreSQL"],
    screenshot: "/brand/projects/identity-verification-platform.png",
    screenshotAlt:
      "Identity verification platform dashboard for KYC and document checks",
    clientNameVisible: false,
    order: 3,
  },
  {
    slug: "social-recipe-app",
    title: "Social Recipe App",
    category: "Consumer app",
    roleSummary: "Web development",
    summary:
      "A social recipe product for discovering, sharing, and browsing food content.",
    description:
      "A social recipe product where people discover and share recipes. We handled web development on the product.",
    whatWeBuilt:
      "Web application screens for browsing, profiles, and recipe content.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "REST APIs"],
    screenshot: "/brand/projects/social-recipe-app.png",
    screenshotAlt:
      "Social recipe app interface for discovering and sharing recipes",
    clientNameVisible: false,
    order: 4,
  },
  {
    slug: "community-social-network",
    title: "Community Social Network",
    category: "Consumer app",
    roleSummary: "Web development",
    summary:
      "Community feeds, profiles, and member interactions built as a social product.",
    description:
      "A community-focused social product. Our role was web development across core product surfaces.",
    whatWeBuilt:
      "Web UI for feeds, profiles, and community interactions.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    screenshot: "/brand/projects/community-social-network.png",
    screenshotAlt:
      "Community social network interface with feeds and member profiles",
    clientNameVisible: false,
    order: 5,
  },
  {
    slug: "learning-platform",
    title: "Learning Platform",
    category: "EdTech",
    roleSummary: "Web development",
    summary:
      "Courses, learners, and tutoring workflows for a school-style learning product.",
    description:
      "A learning platform for a school or tutoring business. We contributed web development for the product experience.",
    whatWeBuilt:
      "Web interfaces for courses, learners, and tutoring-related workflows.",
    tech: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    screenshot: "/brand/projects/learning-platform.png",
    screenshotAlt:
      "Learning platform interface for courses and tutoring workflows",
    clientNameVisible: false,
    order: 6,
  },
  // Website grid — add real screenshots/titles when available
  {
    slug: "travel-website",
    title: "Travel Website",
    category: "Website",
    roleSummary: "Web development",
    summary:
      "A fast, content-led marketing site for destinations and travel CTAs.",
    description:
      "A marketing site for a travel business. Simple, fast, and content-focused.",
    whatWeBuilt: "Marketing pages and responsive layout.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    screenshot: "/brand/projects/travel-website.png",
    screenshotAlt: "Travel website marketing homepage with destinations and booking CTA",
    clientNameVisible: false,
    isWebsite: true,
    order: 101,
  },
  {
    slug: "directory-website",
    title: "Directory Website",
    category: "Website",
    roleSummary: "Web development",
    summary:
      "Browseable listings and navigation for a clean directory experience.",
    description:
      "A directory-style site for browsing listings. Built as a straightforward web project.",
    whatWeBuilt: "Listing pages and navigation for a directory experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    screenshot: "/brand/projects/directory-website.png",
    screenshotAlt: "Directory website with listing cards and browse navigation",
    clientNameVisible: false,
    isWebsite: true,
    order: 102,
  },
  {
    slug: "small-business-website",
    title: "Small Business Website",
    category: "Website",
    roleSummary: "Web development",
    summary:
      "A simple marketing site with services, proof points, and clear contact CTAs.",
    description:
      "A small business marketing site with clear calls to action.",
    whatWeBuilt: "Home, services, and contact pages.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    screenshot: "/brand/projects/small-business-website.png",
    screenshotAlt: "Small business website homepage with services and contact CTA",
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
