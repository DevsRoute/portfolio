import { siteFacts } from "@/config/site-facts";

/**
 * Industry domains for the homepage carousel.
 * HealthTech / Logistics / On-Demand are gated via site-facts flags.
 */

export type IndustryDomain = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  /** REPLACE_IMAGE: temporary placeholder — supply a real asset */
  needsImageReplace?: boolean;
  enabled: boolean;
};

const allIndustryDomains: IndustryDomain[] = [
  {
    id: "ai-products",
    title: "AI-Powered Products",
    description:
      "Chatbots, automation and AI features added to new or existing products, using OpenAI and modern web stacks.",
    href: "/services/ai-solutions",
    image: "/brand/industries/ai-products.jpg",
    imageAlt: "Placeholder visual for AI-powered product interfaces",
    needsImageReplace: true,
    enabled: true,
  },
  {
    id: "saas",
    title: "SaaS & MVPs",
    description:
      "From idea to launch-ready MVP in 2-6 weeks, then scale to multi-tenant SaaS as your users grow.",
    href: "/services/custom-software-development",
    image: "/brand/industries/saas-mvp.jpg",
    imageAlt: "SaaS dashboard on a laptop overlooking a city skyline",
    enabled: true,
  },
  {
    id: "travel",
    title: "Travel & Tourism",
    description:
      "Booking platforms and travel experiences that help guests discover, plan, and go.",
    href: "/services/mobile-app-development",
    image: "/brand/industries/travel-tourism.jpg",
    imageAlt: "Travel booking app with passport, camera, and boarding passes",
    enabled: true,
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description:
      "Storefronts, checkout flows, and commerce systems designed to convert and grow with demand.",
    href: "/services/web-application-development",
    image: "/brand/industries/ecommerce-shop.jpg",
    imageAlt: "Mobile shopping app surrounded by bags, boxes, and a cart",
    enabled: true,
  },
  {
    id: "edtech",
    title: "EdTech",
    description:
      "Learning platforms and tutoring tools for schools, tutors and course businesses.",
    href: "/services/web-application-development",
    image: "/brand/industries/edtech-learning.jpg",
    imageAlt: "Placeholder visual for learning and tutoring platforms",
    needsImageReplace: true,
    enabled: true,
  },
  {
    id: "fintech",
    title: "FinTech",
    description:
      "Onboarding, identity verification and finance-related web products.",
    href: "/services/web-application-development",
    image: "/brand/industries/fintech-banking.jpg",
    imageAlt: "Mobile banking app with cards and coins on a studio surface",
    enabled: true,
  },
  {
    id: "on-demand",
    title: "On-Demand",
    description:
      "Marketplace and service platforms that connect customers with providers in real time.",
    href: "/services/mobile-app-development",
    image: "/brand/industries/on-demand.jpg",
    imageAlt: "Abstract blue waves representing on-demand digital platforms",
    enabled: siteFacts.industries.showOnDemand,
  },
  {
    id: "healthtech",
    title: "HealthTech",
    description:
      "Patient-ready platforms, clinical workflows, and digital health products your teams can trust.",
    href: "/services/custom-software-development",
    image: "/brand/industries/healthtech-care.jpg",
    imageAlt: "Healthcare app shown across laptop, phone, and smartwatch",
    enabled: siteFacts.industries.showHealthTech,
  },
  {
    id: "logistics",
    title: "Logistics",
    description:
      "Ops software for inventory, fulfillment, and supply chains that need to move without friction.",
    href: "/services/custom-software-development",
    image: "/brand/industries/logistics-shipping.jpg",
    imageAlt: "Shipping boxes, map routes, and port logistics at sunset",
    enabled: siteFacts.industries.showLogistics,
  },
];

export const industryDomains = allIndustryDomains.filter((d) => d.enabled);
