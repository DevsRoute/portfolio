export const featuredServices = [
  {
    id: "ai-solutions",
    title: "AI & Product Intelligence",
    description:
      "Practical AI inside real products — assistants, automation, and insights that help teams move faster without sacrificing reliability.",
    offerings: [
      "AI assistants & chat",
      "Workflow automation",
      "Document intelligence",
      "Recommendation systems",
      "ML model integration",
      "Analytics & insights",
    ],
    href: "/services/ai-solutions",
    image: "/brand/services/ai-solutions-v2.jpg",
    imageAlt: "Neural network sphere representing AI product intelligence",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "Bespoke products engineered around your workflow — from MVP to production systems that scale cleanly with your business.",
    offerings: [
      "MVP & product builds",
      "Internal tools",
      "API development",
      "System integrations",
      "Legacy modernization",
      "Product engineering",
    ],
    href: "/services/custom-software-development",
    image: "/brand/services/custom-software-v2.jpg",
    imageAlt: "Custom software workspace with code editor and tech stack",
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
    image: "/brand/services/web-applications-v2.jpg",
    imageAlt: "Web application development workspace with laptop and tech stack",
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
    image: "/brand/services/ui-ux-design-v2.jpg",
    imageAlt: "UI/UX design workspace with wireframes and design system tools",
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
