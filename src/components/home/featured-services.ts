export const featuredServices = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "Chatbots, automation, and OpenAI-powered features for SaaS teams — without pulling your core roadmap off track.",
    offerings: [
      "AI assistants & chat",
      "Workflow automation",
      "Document intelligence",
      "Recommendation systems",
      "ML model integration",
      "Analytics & insights",
    ],
    href: "/services/ai-solutions",
    image: "/brand/previews/ai-messaging.webp",
    imageAlt: "Conversational AI messaging product with an in-app assistant",
  },
  {
    id: "custom-software",
    title: "Custom Software & MVPs",
    description:
      "Scoped MVPs for funded founders in 2-6 weeks, then grow into the product your users need — with senior developers only.",
    offerings: [
      "MVP & product builds",
      "Internal tools",
      "API development",
      "System integrations",
      "Legacy modernization",
      "Product engineering",
    ],
    href: "/services/custom-software-development",
    image: "/brand/previews/saas-compliance.webp",
    imageAlt: "SaaS compliance training dashboard with courses and workflows",
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description:
      "Fast, scalable web apps ready to launch — clean architecture, strong UX, and performance that holds under growth.",
    offerings: [
      "SaaS platforms",
      "Customer portals",
      "Admin dashboards",
      "Progressive web apps",
      "API-driven frontends",
      "Performance optimization",
    ],
    href: "/services/web-application-development",
    image: "/brand/previews/learning-platform.webp",
    imageAlt: "Learning platform web app with courses and learner workflows",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description:
      "iOS and Android apps your users will keep — polished interfaces, solid performance, and reliable release cycles.",
    offerings: [
      "iOS & Android apps",
      "Cross-platform builds",
      "App redesigns",
      "Push & notifications",
      "App Store launch support",
      "Ongoing iteration",
    ],
    href: "/services/mobile-app-development",
    image: "/brand/services/mobile-apps-v2.jpg",
    imageAlt: "Mobile app development scene with phone, code, and platform icons",
  },
  {
    id: "ui-ux-design",
    title: "UI / UX Design",
    description:
      "Interfaces that are clear, usable, and on-brand — from discovery and wireframes to polished product experiences.",
    offerings: [
      "Product UX research",
      "Wireframes & flows",
      "UI design systems",
      "Prototype validation",
      "Design handoff",
      "Usability improvements",
    ],
    href: "/services/ui-ux-design",
    image: "/brand/previews/social-recipe.webp",
    imageAlt: "Polished consumer product interface for discovering and sharing recipes",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Infrastructure, CI/CD, and reliable releases — so your product ships fast and stays stable in production.",
    offerings: [
      "Cloud architecture",
      "CI/CD pipelines",
      "Container & Kubernetes",
      "Monitoring & alerting",
      "Security hardening",
      "Release automation",
    ],
    href: "/services/cloud-devops",
    image: "/brand/services/cloud-devops-v2.jpg",
    imageAlt: "DevOps infinity loop with cloud providers and deployment tools",
  },
] as const;

export type FeaturedService = (typeof featuredServices)[number];
