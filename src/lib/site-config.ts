export const services = [
  {
    label: "Custom Software",
    description: "Bespoke products built around your workflow.",
    href: "/services/custom-software-development",
    icon: "code",
  },
  {
    label: "Web Applications",
    description: "Fast, scalable web apps ready to launch.",
    href: "/services/web-application-development",
    icon: "globe",
  },
  {
    label: "Mobile Apps",
    description: "iOS and Android apps your users will keep.",
    href: "/services/mobile-app-development",
    icon: "smartphone",
  },
  {
    label: "AI Solutions",
    description: "Practical AI features inside real products.",
    href: "/services/ai-solutions",
    icon: "sparkles",
  },
  {
    label: "UI / UX Design",
    description: "Interfaces that are clear, usable, and on-brand.",
    href: "/services/ui-ux-design",
    icon: "layers",
  },
  {
    label: "Cloud & DevOps",
    description: "Infrastructure, CI/CD, and reliable releases.",
    href: "/services/cloud-devops",
    icon: "cloud",
  },
] as const;

export type ServiceIcon = (typeof services)[number]["icon"];

export const siteConfig = {
  name: "DevsRoute",
  title: "DevsRoute — Software Development Agency",
  description:
    "DevsRoute is a software development agency helping startups and growing companies turn ideas into launch-ready products.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devsroute.com",
  email: "hello@devsroute.com",
  calendly: {
    href: "https://calendly.com/devsroute/technical-read",
    label: "Book a 20-min call",
  },
  colors: {
    blue: "#1d81f2",
    black: "#454648",
  },
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/work" },
    { label: "Approach", href: "/approach" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    label: "Book a 20-min call",
    href: "https://calendly.com/devsroute/technical-read",
  },
} as const;
