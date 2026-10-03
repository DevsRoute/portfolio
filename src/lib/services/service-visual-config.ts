import type { ServiceVisualType } from "@/components/services/ServiceMockups";

export type ServiceBuildItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type ServiceIndustryBlock = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type ServiceVisualConfig = {
  visualType: ServiceVisualType;
  heroTone: "tint" | "white";
  intro: {
    image: string;
    imageAlt: string;
    reverse?: boolean;
  };
  visualBreak: {
    image: string;
    imageAlt: string;
    caption?: string;
  };
  buildItems: ServiceBuildItem[];
  industryBlocks: ServiceIndustryBlock[];
  projectIds: string[];
  showAiFlow?: boolean;
};

export const serviceVisualConfig: Record<string, ServiceVisualConfig> = {
  "custom-software-development": {
    visualType: "custom-software",
    heroTone: "tint",
    intro: {
      image: "/brand/projects/flowdesk.jpg",
      imageAlt: "Custom business management dashboard interface",
    },
    visualBreak: {
      image: "/brand/projects/fleetcore.jpg",
      imageAlt: "Operations dashboard for custom business software platform",
      caption: "Custom platforms built around real operational workflows.",
    },
    buildItems: [
      {
        title: "Business Dashboards",
        description: "Operational visibility with KPIs, reporting, and role-based views.",
        image: "/brand/projects/flowdesk.jpg",
        imageAlt: "Business dashboard interface preview",
      },
      {
        title: "Internal Tools",
        description: "Workflow systems that help teams manage work more efficiently.",
        image: "/brand/projects/fleetcore.jpg",
        imageAlt: "Internal operations tool interface preview",
      },
      {
        title: "Customer Portals",
        description: "Self-service experiences for clients, partners, and end users.",
        image: "/brand/projects/havenhome.jpg",
        imageAlt: "Customer portal interface preview",
      },
      {
        title: "SaaS Platforms",
        description: "Subscription products designed to scale with your business.",
        image: "/brand/projects/northpeak.jpg",
        imageAlt: "SaaS platform dashboard preview",
      },
    ],
    industryBlocks: [
      {
        name: "Healthcare",
        description: "Digital platforms that simplify patient, provider, and operational workflows.",
        image: "/brand/industries/healthtech-care.jpg",
        imageAlt: "Healthcare software platform visual",
      },
      {
        name: "Finance",
        description: "Secure applications for financial workflows, analytics, and customer experiences.",
        image: "/brand/industries/fintech-banking.jpg",
        imageAlt: "FinTech application interface visual",
      },
      {
        name: "Logistics",
        description: "Systems for fleet visibility, delivery coordination, and operations.",
        image: "/brand/industries/logistics-shipping.jpg",
        imageAlt: "Logistics operations software visual",
      },
      {
        name: "SaaS",
        description: "Product platforms built for growth, onboarding, and recurring value.",
        image: "/brand/industries/saas-mvp.jpg",
        imageAlt: "SaaS product interface visual",
      },
    ],
    projectIds: ["flowdesk", "fleetcore", "northpeak"],
  },
  "web-application-development": {
    visualType: "web-applications",
    heroTone: "tint",
    intro: {
      image: "/brand/projects/ai-compliance-training-platform.png",
      imageAlt: "SaaS web application dashboard with courses and product navigation",
      reverse: true,
    },
    visualBreak: {
      image: "/brand/projects/conversational-ai-messaging-platform.png",
      imageAlt: "Full-screen SaaS web application with conversations and admin views",
      caption: "Web applications designed for performance, clarity, and scale.",
    },
    buildItems: [
      {
        title: "SaaS Applications",
        description: "Subscription products with dashboards, billing, and user management.",
        image: "/brand/projects/ai-compliance-training-platform.png",
        imageAlt: "SaaS application dashboard with training and user workflows",
      },
      {
        title: "Customer Portals",
        description: "Secure web experiences for clients and account management.",
        image: "/brand/projects/identity-verification-platform.png",
        imageAlt: "Customer portal for identity checks and account status",
      },
      {
        title: "Marketplaces",
        description: "Platforms that connect buyers, sellers, and service providers.",
        image: "/brand/projects/directory-website.png",
        imageAlt: "Directory marketplace with listings and browse navigation",
      },
      {
        title: "Business Platforms",
        description: "Operational web apps for teams, workflows, and reporting.",
        image: "/brand/projects/learning-platform.png",
        imageAlt: "Business learning platform for teams and operational workflows",
      },
    ],
    industryBlocks: [
      {
        name: "SaaS",
        description: "Product-led web platforms built for recurring user value.",
        image: "/brand/industries/saas-mvp.jpg",
        imageAlt: "SaaS web application industry visual",
      },
      {
        name: "eCommerce",
        description: "Shopping experiences focused on discovery and conversion.",
        image: "/brand/industries/ecommerce-shop.jpg",
        imageAlt: "eCommerce web application visual",
      },
      {
        name: "Finance",
        description: "Web apps for accounts, analytics, and digital financial workflows.",
        image: "/brand/industries/fintech-banking.jpg",
        imageAlt: "FinTech web application visual",
      },
      {
        name: "Travel",
        description: "Booking platforms and digital travel experiences.",
        image: "/brand/industries/travel-tourism.jpg",
        imageAlt: "Travel web platform visual",
      },
    ],
    projectIds: ["flowdesk", "marketly", "northpeak"],
  },
  "mobile-app-development": {
    visualType: "mobile-apps",
    heroTone: "tint",
    intro: {
      image: "/brand/industries/on-demand.jpg",
      imageAlt: "On-demand mobile application experience",
    },
    visualBreak: {
      image: "/brand/projects/caresync.jpg",
      imageAlt: "Healthcare mobile application interface showcase",
      caption: "Mobile products designed for clarity, speed, and repeat usage.",
    },
    buildItems: [
      {
        title: "Customer Apps",
        description: "Consumer-facing mobile experiences with polished onboarding and UX.",
        image: "/brand/industries/on-demand.jpg",
        imageAlt: "Customer mobile app preview",
      },
      {
        title: "Business Apps",
        description: "Field and operations apps for teams working on the move.",
        image: "/brand/projects/fleetcore.jpg",
        imageAlt: "Business mobile app preview",
      },
      {
        title: "eCommerce Apps",
        description: "Shopping and product discovery optimized for mobile conversion.",
        image: "/brand/projects/marketly.jpg",
        imageAlt: "eCommerce mobile app preview",
      },
      {
        title: "SaaS Mobile Apps",
        description: "Companion apps that extend web products into mobile workflows.",
        image: "/brand/projects/caresync.jpg",
        imageAlt: "SaaS mobile app preview",
      },
    ],
    industryBlocks: [
      {
        name: "Health & Wellness",
        description: "Apps that support care, coaching, and member engagement.",
        image: "/brand/industries/healthtech-care.jpg",
        imageAlt: "Healthcare mobile app industry visual",
      },
      {
        name: "Retail",
        description: "Mobile commerce and customer loyalty experiences.",
        image: "/brand/industries/ecommerce-shop.jpg",
        imageAlt: "Retail mobile app visual",
      },
      {
        name: "On-Demand",
        description: "Marketplace and service apps that connect users in real time.",
        image: "/brand/industries/on-demand.jpg",
        imageAlt: "On-demand mobile app visual",
      },
      {
        name: "Travel",
        description: "Booking, itineraries, and travel experiences on mobile.",
        image: "/brand/industries/travel-tourism.jpg",
        imageAlt: "Travel mobile app visual",
      },
    ],
    projectIds: ["caresync", "marketly", "fleetcore"],
  },
  "ai-solutions": {
    visualType: "ai-solutions",
    heroTone: "tint",
    intro: {
      image: "/brand/industries/ai-powered-products.png",
      imageAlt: "AI-powered product dashboard with chatbots and automation features",
      reverse: true,
    },
    visualBreak: {
      image: "/brand/projects/conversational-ai-messaging-platform.png",
      imageAlt: "Conversational AI messaging product with in-app assistant",
      caption: "Practical AI features integrated into real product workflows.",
    },
    buildItems: [
      {
        title: "AI Assistants",
        description: "In-product assistants that help users complete tasks faster.",
        image: "/brand/projects/conversational-ai-messaging-platform.png",
        imageAlt: "Conversational AI assistant inside a messaging product",
      },
      {
        title: "Intelligent Search",
        description: "Search across documents, data, and product content.",
        image: "/brand/projects/ai-compliance-training-platform.png",
        imageAlt: "AI training platform with searchable courses and content",
      },
      {
        title: "Workflow Automation",
        description: "Automated routing, classification, and repetitive task handling.",
        image: "/brand/projects/identity-verification-platform.png",
        imageAlt: "Identity verification workflows and status automation",
      },
      {
        title: "Document Processing",
        description: "Extract, summarize, and organize business documents at scale.",
        image: "/brand/industries/ai-powered-products.png",
        imageAlt: "AI document and content processing product interface",
      },
    ],
    industryBlocks: [
      {
        name: "SaaS",
        description: "AI features that improve product value and user productivity.",
        image: "/brand/industries/saas-mvp.jpg",
        imageAlt: "SaaS AI solution visual",
      },
      {
        name: "Healthcare",
        description: "Assistive workflows for providers, patients, and operations.",
        image: "/brand/industries/healthtech-care.jpg",
        imageAlt: "Healthcare AI application visual",
      },
      {
        name: "Finance",
        description: "Insights, classification, and automation for financial products.",
        image: "/brand/industries/fintech-banking.jpg",
        imageAlt: "FinTech AI solution visual",
      },
      {
        name: "Operations",
        description: "Automation across logistics, support, and internal systems.",
        image: "/brand/industries/logistics-shipping.jpg",
        imageAlt: "Operations AI workflow visual",
      },
    ],
    projectIds: ["flowdesk", "northpeak", "caresync"],
    showAiFlow: true,
  },
  "ui-ux-design": {
    visualType: "ui-ux-design",
    heroTone: "tint",
    intro: {
      image: "/brand/services/ui-ux-design-v2.jpg",
      imageAlt: "Product design workspace with interface screens and components",
    },
    visualBreak: {
      image: "/brand/projects/havenhome.jpg",
      imageAlt: "Polished property platform interface design showcase",
      caption: "Design systems and interfaces that feel clear from the first screen.",
    },
    buildItems: [
      {
        title: "SaaS Product Design",
        description: "Dashboards and flows designed for clarity and adoption.",
        image: "/brand/projects/flowdesk.jpg",
        imageAlt: "SaaS product design preview",
      },
      {
        title: "Web App UI",
        description: "Responsive interfaces for complex business applications.",
        image: "/brand/projects/northpeak.jpg",
        imageAlt: "Web application UI design preview",
      },
      {
        title: "Mobile App Design",
        description: "Native-feeling mobile experiences with strong hierarchy.",
        image: "/brand/projects/caresync.jpg",
        imageAlt: "Mobile app UI design preview",
      },
      {
        title: "Design Systems",
        description: "Reusable components and patterns for scalable product teams.",
        image: "/brand/services/ui-ux-design-v2.jpg",
        imageAlt: "Design system components preview",
      },
    ],
    industryBlocks: [
      {
        name: "SaaS",
        description: "Product experiences that simplify complex software.",
        image: "/brand/industries/saas-mvp.jpg",
        imageAlt: "SaaS UI design visual",
      },
      {
        name: "eCommerce",
        description: "Shopping flows focused on clarity and conversion.",
        image: "/brand/industries/ecommerce-shop.jpg",
        imageAlt: "eCommerce UI design visual",
      },
      {
        name: "Travel",
        description: "Booking and travel experiences with strong visual hierarchy.",
        image: "/brand/industries/travel-tourism.jpg",
        imageAlt: "Travel platform UI design visual",
      },
      {
        name: "Finance",
        description: "Clear interfaces for data-heavy financial products.",
        image: "/brand/industries/fintech-banking.jpg",
        imageAlt: "FinTech UI design visual",
      },
    ],
    projectIds: ["havenhome", "flowdesk", "marketly"],
  },
  "cloud-devops": {
    visualType: "cloud-devops",
    heroTone: "tint",
    intro: {
      image: "/brand/services/cloud-devops-v2.jpg",
      imageAlt: "Cloud infrastructure and deployment engineering visual",
      reverse: true,
    },
    visualBreak: {
      image: "/brand/projects/fleetcore.jpg",
      imageAlt: "Operations monitoring dashboard for cloud-hosted applications",
      caption: "Infrastructure and delivery workflows built for reliability at scale.",
    },
    buildItems: [
      {
        title: "Cloud Infrastructure",
        description: "Scalable environments designed for production workloads.",
        image: "/brand/services/cloud-devops-v2.jpg",
        imageAlt: "Cloud infrastructure visual preview",
      },
      {
        title: "CI/CD Pipelines",
        description: "Automated build, test, and deployment workflows.",
        image: "/brand/projects/flowdesk.jpg",
        imageAlt: "CI/CD pipeline dashboard preview",
      },
      {
        title: "Monitoring",
        description: "Visibility into uptime, performance, and production health.",
        image: "/brand/projects/fleetcore.jpg",
        imageAlt: "Application monitoring dashboard preview",
      },
      {
        title: "Cloud Migration",
        description: "Move applications to modern infrastructure with less risk.",
        image: "/brand/projects/northpeak.jpg",
        imageAlt: "Cloud migration platform preview",
      },
    ],
    industryBlocks: [
      {
        name: "SaaS",
        description: "Reliable delivery for products with growing user demand.",
        image: "/brand/industries/saas-mvp.jpg",
        imageAlt: "SaaS cloud infrastructure visual",
      },
      {
        name: "Logistics",
        description: "Infrastructure for high-availability operations platforms.",
        image: "/brand/industries/logistics-shipping.jpg",
        imageAlt: "Logistics cloud platform visual",
      },
      {
        name: "Finance",
        description: "Secure, observable systems for financial applications.",
        image: "/brand/industries/fintech-banking.jpg",
        imageAlt: "FinTech cloud infrastructure visual",
      },
      {
        name: "eCommerce",
        description: "Scalable hosting and deployment for peak traffic.",
        image: "/brand/industries/ecommerce-shop.jpg",
        imageAlt: "eCommerce cloud infrastructure visual",
      },
    ],
    projectIds: ["fleetcore", "flowdesk", "northpeak"],
  },
};

export function getServiceVisualConfig(slug: string) {
  return serviceVisualConfig[slug];
}
