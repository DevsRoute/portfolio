export type DeliveredProject = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const deliveredProjects: DeliveredProject[] = [
  {
    id: "flowdesk",
    number: "01",
    name: "FlowDesk",
    category: "SaaS Platform",
    description:
      "A streamlined business management platform designed to simplify daily workflows and improve team productivity.",
    image: "/brand/projects/flowdesk.jpg",
    imageAlt: "FlowDesk SaaS dashboard with workflow and team management interface",
  },
  {
    id: "northpeak",
    number: "02",
    name: "NorthPeak",
    category: "FinTech",
    description:
      "A modern financial platform focused on clear data visualization, account management, and a seamless digital experience.",
    image: "/brand/projects/northpeak.jpg",
    imageAlt: "NorthPeak fintech dashboard with financial analytics and account overview",
  },
  {
    id: "havenhome",
    number: "03",
    name: "HavenHome",
    category: "Real Estate",
    description:
      "A modern property platform that makes discovering, comparing, and managing properties simple.",
    image: "/brand/projects/havenhome.jpg",
    imageAlt: "HavenHome premium property listing and real-estate platform interface",
  },
  {
    id: "marketly",
    number: "04",
    name: "Marketly",
    category: "eCommerce",
    description:
      "A scalable online shopping experience built around simple navigation, product discovery, and conversion.",
    image: "/brand/projects/marketly.jpg",
    imageAlt: "Marketly modern eCommerce storefront with product discovery layout",
  },
  {
    id: "caresync",
    number: "05",
    name: "CareSync",
    category: "Healthcare Platform",
    description:
      "A user-friendly digital platform designed to connect patients, professionals, and essential healthcare services.",
    image: "/brand/projects/caresync.jpg",
    imageAlt: "CareSync healthcare web application connecting patients and providers",
  },
  {
    id: "fleetcore",
    number: "06",
    name: "FleetCore",
    category: "Logistics & Operations",
    description:
      "An operations platform that helps businesses monitor vehicles, manage deliveries, and keep their teams connected.",
    image: "/brand/projects/fleetcore.jpg",
    imageAlt: "FleetCore logistics operations dashboard for fleet and delivery management",
  },
];
