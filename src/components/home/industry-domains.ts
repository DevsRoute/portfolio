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
    image: "/brand/industries/ai-powered-products.png",
    imageAlt: "AI-powered product interfaces",
    needsImageReplace: true,
    enabled: true,
  },
  {
    id: "saas",
    title: "SaaS & MVPs",
    description:
      "SaaS MVP development with a clear scope and a defined end date, then room to grow as users do.",
    href: "/services/custom-software-development",
    image: "/brand/previews/saas-compliance.webp",
    imageAlt: "SaaS product dashboard for compliance training",
    enabled: true,
  },
  {
    id: "travel",
    title: "Travel & Tourism",
    description:
      "Booking platforms and travel experiences that help guests discover, plan, and go.",
    href: "/services/web-application-development",
    image: "/brand/previews/travel-website.webp",
    imageAlt: "Travel website with destinations and a booking call to action",
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
    image: "/brand/previews/learning-platform.webp",
    imageAlt: "Learning platform interface for courses and tutoring",
    enabled: true,
  },
  {
    id: "fintech",
    title: "FinTech",
    description:
      "Onboarding, identity verification and finance-related web products.",
    href: "/services/web-application-development",
    image: "/brand/previews/identity-verification.webp",
    imageAlt: "Identity verification product for onboarding and KYC checks",
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
