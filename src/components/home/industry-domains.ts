import { siteFacts } from "@/config/site-facts";

/**
 * Industry domains for the homepage carousel.
 * Logistics stays gated via site-facts.
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
    title: "AI-Native Products",
    description:
      "Chatbots, automation and AI features added to new or existing products, using OpenAI and modern web stacks.",
    href: "/services/ai-solutions",
    image: "/brand/industries/ai-powered-products.png",
    imageAlt: "AI-native product interfaces",
    needsImageReplace: true,
    enabled: true,
  },
  {
    id: "saas",
    title: "SaaS & MVPs",
    description:
      "SaaS MVP development with a clear scope and a defined end date, then room to grow as users do.",
    href: "/services/custom-software-development",
    image: "/brand/industries/mvps-saas.jpg",
    imageAlt: "SaaS product dashboard for compliance training",
    enabled: true,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Portals, scheduling, and care workflows for clinics and healthcare products.",
    href: "/services/custom-software-development",
    image: "/brand/industries/healthtech-care.jpg",
    imageAlt: "Healthcare app shown across laptop, phone, and smartwatch",
    enabled: true,
  },
  {
    id: "travel",
    title: "Travel & Tourism",
    description:
      "Booking platforms and travel experiences that help guests discover, plan, and go.",
    href: "/services/web-application-development",
    image: "/brand/industries/travel-tourism.jpg",
    imageAlt: "Travel app on a phone with a passport, suitcase, and boarding pass",
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
    id: "on-demand",
    title: "On-Demand",
    description:
      "Marketplace and service platforms that connect customers with providers in real time.",
    href: "/services/mobile-app-development",
    image: "/brand/industries/on-demand.jpg",
    imageAlt: "On-demand service app connecting customers with nearby providers",
    enabled: true,
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
