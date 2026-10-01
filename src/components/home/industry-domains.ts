export const industryDomains = [
  {
    id: "on-demand",
    title: "On-Demand",
    description:
      "Marketplace and service platforms that connect customers with providers in real time.",
    href: "/services/mobile-app-development",
    image: "/brand/industries/on-demand.jpg",
    imageAlt: "Abstract blue waves representing on-demand digital platforms",
  },
  {
    id: "saas",
    title: "SaaS & MVPs",
    description:
      "Launch-ready SaaS products — from MVP to multi-tenant platforms that scale with your users.",
    href: "/services/custom-software-development",
    image: "/brand/industries/saas-mvp.jpg",
    imageAlt: "SaaS dashboard on a laptop overlooking a city skyline",
  },
  {
    id: "fintech",
    title: "FinTech",
    description:
      "Secure payments, banking experiences, and finance products built for compliance and scale.",
    href: "/services/web-application-development",
    image: "/brand/industries/fintech-banking.jpg",
    imageAlt: "Mobile banking app with cards and coins on a studio surface",
  },
  {
    id: "travel",
    title: "Travel & Tourism",
    description:
      "Booking platforms and travel experiences that help guests discover, plan, and go.",
    href: "/services/mobile-app-development",
    image: "/brand/industries/travel-tourism.jpg",
    imageAlt: "Travel booking app with passport, camera, and boarding passes",
  },
  {
    id: "healthtech",
    title: "HealthTech",
    description:
      "Patient-ready platforms, clinical workflows, and digital health products your teams can trust.",
    href: "/services/custom-software-development",
    image: "/brand/industries/healthtech-care.jpg",
    imageAlt: "Healthcare app shown across laptop, phone, and smartwatch",
  },
  {
    id: "logistics",
    title: "Logistics",
    description:
      "Ops software for inventory, fulfillment, and supply chains that need to move without friction.",
    href: "/services/custom-software-development",
    image: "/brand/industries/logistics-shipping.jpg",
    imageAlt: "Shipping boxes, map routes, and port logistics at sunset",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description:
      "Storefronts, checkout flows, and commerce systems designed to convert and grow with demand.",
    href: "/services/web-application-development",
    image: "/brand/industries/ecommerce-shop.jpg",
    imageAlt: "Mobile shopping app surrounded by bags, boxes, and a cart",
  },
] as const;

export type IndustryDomain = (typeof industryDomains)[number];
