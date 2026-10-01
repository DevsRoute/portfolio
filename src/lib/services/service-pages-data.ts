import type { ServiceIcon } from "@/lib/site-config";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceBenefit = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  title: string;
  description?: string;
};

export type ServiceTechGroup = {
  category: string;
  items: string[];
};

export type ServicePageData = {
  slug: string;
  icon: ServiceIcon;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    headingAccent?: string;
    supporting: string;
    cta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    image: string;
    imageAlt: string;
    imagePosition?: "right" | "left";
  };
  intro: {
    heading: string;
    headingAccent?: string;
    paragraphs: string[];
    bullets?: string[];
  };
  whatWeBuild?: {
    eyebrow?: string;
    title: string;
    titleAccent?: string;
    items: string[];
    layout?: "grid" | "columns";
  };
  benefits?: {
    title: string;
    titleAccent?: string;
    items: ServiceBenefit[];
    layout?: "grid" | "list";
  };
  qualities?: {
    title: string;
    titleAccent?: string;
    paragraphs: string[];
    items: string[];
  };
  capabilities?: {
    title: string;
    titleAccent?: string;
    groups: { title: string; items: string[] }[];
  };
  designServices?: {
    title: string;
    titleAccent?: string;
    items: string[];
  };
  designPrinciples?: {
    title: string;
    titleAccent?: string;
    items: ServiceBenefit[];
  };
  whatWeDesign?: {
    title: string;
    items: string[];
  };
  aiAutomation?: {
    title: string;
    titleAccent?: string;
    paragraphs: string[];
  };
  responsibleAi?: {
    title: string;
    items: string[];
  };
  devopsWhy?: {
    title: string;
    titleAccent?: string;
    paragraphs: string[];
    items: string[];
  };
  process: {
    eyebrow?: string;
    title: string;
    titleAccent?: string;
    steps: ServiceProcessStep[];
    layout?: "horizontal" | "vertical";
  };
  technologies?: {
    eyebrow?: string;
    title: string;
    titleAccent?: string;
    groups: ServiceTechGroup[];
  };
  industries?: {
    title: string;
    titleAccent?: string;
    items: string[];
  };
  useCases?: {
    title: string;
    titleAccent?: string;
    items: string[];
  };
  whyChooseUs?: {
    title: string;
    titleAccent?: string;
    items: ServiceBenefit[];
  };
  faq: ServiceFaq[];
  relatedSlugs: string[];
  cta: {
    eyebrow: string;
    title: string;
    titleAccent?: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

export const servicePages: ServicePageData[] = [
  {
    slug: "custom-software-development",
    icon: "code",
    meta: {
      title: "Custom Software Development Services | DevsRoute",
      description:
        "Build scalable custom software tailored to your business workflows. DevsRoute develops secure, reliable software solutions designed around your goals and users.",
    },
    hero: {
      eyebrow: "Custom Software Development",
      heading: "Software Built Around the Way",
      headingAccent: "Your Business Works.",
      supporting:
        "Build custom software designed around your workflows, users, and business goals. We turn complex requirements into reliable, scalable digital products that are built to evolve with your business.",
      cta: { label: "Start a Project", href: "/contact" },
      secondaryCta: { label: "View Our Work", href: "/work" },
      image: "/brand/services/custom-software-v2.jpg",
      imageAlt:
        "Custom business software dashboard with workflow management interface",
    },
    intro: {
      heading: "Off-the-Shelf Software",
      headingAccent: "Doesn't Always Fit.",
      paragraphs: [
        "Many businesses start with generic tools, then discover their operations do not map cleanly to ready-made software. Processes become harder to manage, teams create workarounds, and growth exposes gaps in how systems connect.",
        "Custom software development gives you a product shaped around how your business actually works — not the other way around. That means clearer workflows, better visibility, and software that supports long-term growth instead of limiting it.",
      ],
      bullets: [
        "Complex workflows and internal business systems",
        "Custom dashboards and operational visibility",
        "Business automation and process improvement",
        "Integrations with existing tools and data sources",
        "Scalable architecture and long-term maintainability",
      ],
    },
    whatWeBuild: {
      eyebrow: "What We Build",
      title: "Custom Software for",
      titleAccent: "Real Business Needs.",
      items: [
        "Custom Business Applications",
        "SaaS Products",
        "Internal Tools",
        "Customer Portals",
        "Admin Dashboards",
        "Workflow Management Systems",
        "API-Driven Applications",
        "Enterprise Software",
      ],
    },
    benefits: {
      title: "Why Custom Software",
      titleAccent: "Makes Sense.",
      items: [
        {
          title: "Built for Your Workflow",
          description:
            "Software shaped around how your teams work, not generic templates that force compromises.",
        },
        {
          title: "Scalable Architecture",
          description:
            "Systems designed to grow with your users, data, and product roadmap over time.",
        },
        {
          title: "Seamless Integrations",
          description:
            "Connect with CRMs, payment platforms, internal tools, and third-party APIs where needed.",
        },
        {
          title: "Better Operational Efficiency",
          description:
            "Reduce manual work, improve visibility, and help teams move faster with less friction.",
        },
        {
          title: "Secure & Maintainable Code",
          description:
            "Clean engineering practices that support reliability, security, and ongoing improvement.",
        },
      ],
    },
    process: {
      eyebrow: "Our Process",
      title: "From Discovery to",
      titleAccent: "Continuous Improvement.",
      steps: [
        { title: "Discovery", description: "Understand goals, users, and constraints." },
        { title: "Planning", description: "Define scope, architecture, and roadmap." },
        { title: "Design", description: "Shape flows, interfaces, and product structure." },
        { title: "Development", description: "Build in focused, testable milestones." },
        { title: "Testing", description: "Validate quality, performance, and reliability." },
        { title: "Launch", description: "Deploy with confidence and clear handoff." },
        { title: "Improvement", description: "Refine based on usage and business feedback." },
      ],
    },
    industries: {
      title: "Industries We",
      titleAccent: "Work With.",
      items: [
        "Healthcare",
        "Finance",
        "Real Estate",
        "Logistics",
        "eCommerce",
        "Education",
        "Professional Services",
        "SaaS",
      ],
    },
    faq: [
      {
        question: "What is custom software development?",
        answer:
          "Custom software development is the process of designing and building software specifically for a business, team, or product need. Instead of adapting operations to off-the-shelf tools, the software is shaped around your workflows, users, and goals.",
      },
      {
        question: "When should a business build custom software?",
        answer:
          "Custom software makes sense when existing tools create friction, when workflows are unique, when integrations are critical, or when the product itself is part of your business model. It is often the right path for SaaS products, internal platforms, and systems that need to scale over time.",
      },
      {
        question: "How long does custom software development take?",
        answer:
          "Timelines depend on scope, complexity, integrations, and how clearly requirements are defined. A focused MVP may take a few months, while larger platforms are usually delivered in phases so you can launch value early and expand over time.",
      },
      {
        question: "Can custom software integrate with existing systems?",
        answer:
          "Yes. We regularly connect custom applications with CRMs, ERPs, payment providers, authentication systems, analytics tools, and internal databases through APIs and secure integrations.",
      },
      {
        question: "Can you maintain software after launch?",
        answer:
          "Yes. We support ongoing maintenance, improvements, monitoring, and feature development so your product stays reliable as your business and user needs evolve.",
      },
      {
        question: "Do you help with product strategy before development starts?",
        answer:
          "We do. Discovery and planning are part of how we work. That helps clarify priorities, reduce wasted effort, and align the technical approach with business outcomes before build begins.",
      },
    ],
    relatedSlugs: [
      "web-application-development",
      "ui-ux-design",
      "cloud-devops",
      "ai-solutions",
    ],
    cta: {
      eyebrow: "Let's Build",
      title: "Ready to Build Software That",
      titleAccent: "Fits Your Business?",
      description:
        "Tell us what you are trying to solve. We will help you shape the right product approach and delivery plan.",
      buttonLabel: "Start a Project",
      buttonHref: "/contact",
    },
  },
  {
    slug: "web-application-development",
    icon: "globe",
    meta: {
      title: "Web Application Development Services | DevsRoute",
      description:
        "Build fast, scalable web applications with modern technologies. DevsRoute develops secure, responsive web apps designed for performance, usability, and growth.",
    },
    hero: {
      eyebrow: "Web Application Development",
      heading: "Web Applications Built for Speed, Scale, and",
      headingAccent: "Real Users.",
      supporting:
        "We design and develop modern web applications that combine intuitive user experiences with reliable, scalable technology.",
      cta: { label: "Build Your Web App", href: "/contact" },
      secondaryCta: { label: "View Our Work", href: "/work" },
      image: "/brand/services/web-applications-v2.jpg",
      imageAlt:
        "Modern web application interface displayed on a laptop screen",
      imagePosition: "left",
    },
    intro: {
      heading: "Your Product Lives",
      headingAccent: "in the Browser.",
      paragraphs: [
        "Web applications power everything from SaaS platforms and customer portals to internal dashboards and marketplaces. When built well, they give users fast access from any device without the friction of installs or updates.",
        "We focus on web apps that feel responsive, are easy to use, and are engineered to handle growth — from early product launches to platforms serving thousands of users.",
      ],
    },
    whatWeBuild: {
      title: "Web Applications We",
      titleAccent: "Develop.",
      items: [
        "SaaS Applications",
        "Customer Portals",
        "Business Platforms",
        "Dashboards",
        "Marketplaces",
        "Booking Platforms",
        "eCommerce Applications",
        "Membership Platforms",
      ],
      layout: "columns",
    },
    qualities: {
      title: "What Makes a Good",
      titleAccent: "Web Application.",
      paragraphs: [
        "Strong web applications are not just visually polished — they are fast, secure, accessible, and maintainable. Those qualities matter whether you are launching a new product or improving an existing platform.",
      ],
      items: [
        "Performance and fast load times",
        "Accessibility for diverse users",
        "Responsive design across devices",
        "Security and data protection",
        "Scalable architecture",
        "Maintainable codebase",
        "Clear, intuitive user experience",
      ],
    },
    process: {
      title: "How We Build",
      titleAccent: "Web Applications.",
      steps: [
        { title: "Discover", description: "Define users, goals, and product scope." },
        { title: "Design", description: "Structure flows and interface patterns." },
        { title: "Develop", description: "Build with modern frontend and backend tools." },
        { title: "Test", description: "Validate usability, performance, and reliability." },
        { title: "Launch", description: "Deploy and monitor the live product." },
        { title: "Improve", description: "Iterate based on usage and feedback." },
      ],
      layout: "horizontal",
    },
    technologies: {
      eyebrow: "Technology",
      title: "Modern Tools for",
      titleAccent: "Modern Web Apps.",
      groups: [
        {
          category: "Frontend",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
        },
        {
          category: "Backend & Data",
          items: ["Node.js", "Python", "REST APIs", "Databases", "Authentication"],
        },
        {
          category: "Infrastructure",
          items: ["Cloud hosting", "CI/CD", "Monitoring", "Scalable deployment"],
        },
      ],
    },
    useCases: {
      title: "Common Use",
      titleAccent: "Cases.",
      items: [
        "Launching a new SaaS product",
        "Replacing spreadsheets with a custom platform",
        "Building a customer self-service portal",
        "Creating an internal operations dashboard",
        "Scaling an existing product for more users",
      ],
    },
    faq: [
      {
        question: "What is the difference between a website and a web application?",
        answer:
          "A website is primarily informational, while a web application allows users to complete tasks, manage data, authenticate, and interact with dynamic functionality. Examples include SaaS platforms, dashboards, and booking systems.",
      },
      {
        question: "Which technologies do you use for web application development?",
        answer:
          "We commonly use React, Next.js, TypeScript, Node.js, Python, and modern cloud infrastructure. The stack depends on your product goals, integrations, scalability needs, and existing systems.",
      },
      {
        question: "Can you build a scalable SaaS web application?",
        answer:
          "Yes. We design SaaS products with user management, subscription logic, role-based access, integrations, and architecture that can grow as usage increases.",
      },
      {
        question: "How do you approach performance for web apps?",
        answer:
          "We focus on efficient frontend rendering, optimized assets, sensible API design, caching where appropriate, and monitoring in production so performance issues are caught early.",
      },
      {
        question: "Can you redesign or rebuild an existing web application?",
        answer:
          "Yes. We help teams modernize legacy interfaces, improve UX, refactor architecture, and migrate products to more maintainable technology stacks.",
      },
      {
        question: "Do you handle deployment and hosting?",
        answer:
          "We can support cloud deployment, CI/CD setup, and infrastructure planning, either as part of development or in collaboration with your internal team.",
      },
    ],
    relatedSlugs: [
      "custom-software-development",
      "ui-ux-design",
      "cloud-devops",
      "mobile-app-development",
    ],
    cta: {
      eyebrow: "Start Building",
      title: "Have a Web App",
      titleAccent: "in Mind?",
      description:
        "Share your product idea or platform challenge. We will help you define the right technical path forward.",
      buttonLabel: "Build Your Web App",
      buttonHref: "/contact",
    },
  },
  {
    slug: "mobile-app-development",
    icon: "smartphone",
    meta: {
      title: "Mobile App Development Services | iOS & Android | DevsRoute",
      description:
        "Design and develop modern mobile applications for iOS and Android. Build reliable, intuitive apps that deliver great user experiences and support business growth.",
    },
    hero: {
      eyebrow: "Mobile App Development",
      heading: "Mobile Experiences Your Users Will",
      headingAccent: "Want to Come Back To.",
      supporting:
        "We design and develop intuitive mobile applications that combine thoughtful UX, reliable engineering, and performance across modern devices.",
      cta: { label: "Build a Mobile App", href: "/contact" },
      image: "/brand/services/mobile-apps-v2.jpg",
      imageAlt:
        "Mobile application interface shown on smartphone devices",
    },
    intro: {
      heading: "Mobile Products Need",
      headingAccent: "More Than a Good Idea.",
      paragraphs: [
        "Users expect mobile apps to be fast, intuitive, and dependable from the first tap. Whether you are launching a customer-facing product or an internal business tool, the experience on iOS and Android needs to feel native to the device.",
        "We help teams design and build mobile applications with clear user flows, reliable backend connections, and the features users expect — from authentication and notifications to payments and analytics.",
      ],
    },
    whatWeBuild: {
      title: "Mobile Apps",
      titleAccent: "We Build.",
      items: [
        "Customer Apps",
        "Business Apps",
        "SaaS Mobile Apps",
        "eCommerce Apps",
        "Booking Apps",
        "On-Demand Apps",
        "Membership Apps",
        "Internal Business Apps",
      ],
    },
    capabilities: {
      title: "Development",
      titleAccent: "Capabilities.",
      groups: [
        {
          title: "Platforms",
          items: ["iOS", "Android", "Cross-platform applications"],
        },
        {
          title: "Core Features",
          items: [
            "API integration",
            "Authentication",
            "Push notifications",
            "Payments",
            "Analytics",
            "App deployment",
          ],
        },
      ],
    },
    process: {
      title: "Our Mobile App",
      titleAccent: "Process.",
      steps: [
        { title: "Research", description: "Understand users, devices, and product goals." },
        { title: "UX/UI", description: "Design flows and mobile-native interfaces." },
        { title: "Development", description: "Build, integrate, and test core features." },
        { title: "Testing", description: "Validate performance across devices and scenarios." },
        { title: "Launch", description: "Prepare for App Store and Google Play release." },
        { title: "Optimization", description: "Improve based on real usage and feedback." },
      ],
    },
    industries: {
      title: "Where Mobile Apps",
      titleAccent: "Create Value.",
      items: [
        "Health & Wellness",
        "Retail & eCommerce",
        "Professional Services",
        "Logistics",
        "Education",
        "SaaS",
        "Hospitality",
        "Field Operations",
      ],
    },
    faq: [
      {
        question: "Should we build for iOS, Android, or both?",
        answer:
          "It depends on your audience and business goals. If your users are split across platforms, supporting both iOS and Android is often the right move. We can help you decide based on market, budget, and launch timeline.",
      },
      {
        question: "What is the difference between native and cross-platform development?",
        answer:
          "Native apps are built specifically for iOS or Android, while cross-platform approaches share more code across platforms. The right choice depends on performance needs, feature requirements, timeline, and long-term maintenance plans.",
      },
      {
        question: "How long does mobile app development take?",
        answer:
          "A focused MVP may take a few months, while more complex apps with integrations, payments, and advanced features usually require phased delivery. We typically break work into milestones so you can launch value early.",
      },
      {
        question: "Can you help with App Store and Google Play launch?",
        answer:
          "Yes. We support release preparation, build configuration, store assets, and the technical steps needed to publish and maintain apps in production.",
      },
      {
        question: "Do you provide mobile app maintenance after launch?",
        answer:
          "Yes. We can handle updates, bug fixes, OS compatibility changes, feature improvements, and ongoing performance monitoring.",
      },
      {
        question: "Can a mobile app connect to our existing backend?",
        answer:
          "Absolutely. We integrate mobile apps with existing APIs, authentication systems, databases, and third-party services so the app fits into your broader product ecosystem.",
      },
    ],
    relatedSlugs: [
      "ui-ux-design",
      "web-application-development",
      "custom-software-development",
      "cloud-devops",
    ],
    cta: {
      eyebrow: "Mobile Product",
      title: "Ready to Launch a",
      titleAccent: "Mobile App?",
      description:
        "Tell us about your users, platform goals, and timeline. We will help you plan the right mobile product approach.",
      buttonLabel: "Build a Mobile App",
      buttonHref: "/contact",
    },
  },
  {
    slug: "ai-solutions",
    icon: "sparkles",
    meta: {
      title: "AI Development & Automation Services | DevsRoute",
      description:
        "Build practical AI solutions that solve real business problems. From AI-powered applications to workflow automation, DevsRoute helps businesses use AI effectively.",
    },
    hero: {
      eyebrow: "AI Solutions",
      heading: "Practical AI That Solves",
      headingAccent: "Real Business Problems.",
      supporting:
        "We help businesses turn AI from an idea into useful products, features, and automated workflows that save time and improve how teams work.",
      cta: { label: "Explore AI Solutions", href: "/contact" },
      image: "/brand/services/ai-solutions-v2.jpg",
      imageAlt:
        "AI-powered business application dashboard with intelligent workflow features",
      imagePosition: "left",
    },
    intro: {
      heading: "AI Should Create",
      headingAccent: "Real Value.",
      paragraphs: [
        "AI is most useful when it is embedded into real workflows — not added as a novelty. That might mean smarter search, automated document processing, assistant experiences, or systems that help teams make better decisions faster.",
        "We focus on practical AI development: identifying where AI can help, building reliable integrations, and shipping features that teams can actually use with confidence.",
      ],
    },
    whatWeBuild: {
      title: "AI Solutions",
      titleAccent: "We Build.",
      items: [
        "AI-Powered Applications",
        "AI Assistants",
        "Document Processing",
        "Intelligent Search",
        "Recommendation Systems",
        "AI Chatbots",
        "Workflow Automation",
        "LLM Integrations",
        "Data & Knowledge Systems",
      ],
    },
    aiAutomation: {
      title: "AI Automation That Keeps",
      titleAccent: "People in Control.",
      paragraphs: [
        "Automation can reduce repetitive work, speed up operations, and improve consistency — but the best systems still leave room for human judgment where it matters.",
        "We design AI automation around real business processes: intake, classification, routing, summarization, approvals, and handoffs between systems and teams.",
      ],
    },
    responsibleAi: {
      title: "Responsible AI Practices",
      items: [
        "Data privacy and access control",
        "Security-minded implementation",
        "Human oversight for critical decisions",
        "Reliability testing and monitoring",
        "Appropriate use cases, not hype-driven features",
      ],
    },
    process: {
      title: "AI Development",
      titleAccent: "Process.",
      steps: [
        { title: "Identify", description: "Find high-value AI opportunities." },
        { title: "Evaluate", description: "Assess data, feasibility, and risk." },
        { title: "Prototype", description: "Validate the approach quickly." },
        { title: "Build", description: "Develop production-ready AI features." },
        { title: "Integrate", description: "Connect AI into existing products and workflows." },
        { title: "Test", description: "Measure quality, accuracy, and reliability." },
        { title: "Improve", description: "Refine based on real-world usage." },
      ],
    },
    technologies: {
      title: "AI & Integration",
      titleAccent: "Expertise.",
      groups: [
        {
          category: "AI Capabilities",
          items: [
            "LLM integrations",
            "Retrieval systems",
            "Classification & extraction",
            "Recommendation logic",
          ],
        },
        {
          category: "Product Integration",
          items: [
            "APIs",
            "Workflow automation",
            "Dashboards",
            "Knowledge bases",
            "Monitoring",
          ],
        },
      ],
    },
    faq: [
      {
        question: "What kinds of AI solutions do you build?",
        answer:
          "We build AI assistants, document processing systems, intelligent search, recommendation features, workflow automation, and LLM-powered product experiences integrated into real applications.",
      },
      {
        question: "Can you add AI to an existing product?",
        answer:
          "Yes. We often integrate AI into existing web apps, mobile apps, and internal tools rather than building from scratch. That can include search, automation, assistants, and data extraction features.",
      },
      {
        question: "How do you approach AI privacy and security?",
        answer:
          "We design with access control, secure data handling, and clear boundaries around what AI can and cannot do. Sensitive workflows are built with human oversight and monitoring where appropriate.",
      },
      {
        question: "Do we need a large dataset to start?",
        answer:
          "Not always. Some AI features rely on LLMs, retrieval, or structured business rules rather than massive custom datasets. We evaluate what data is available and what approach makes sense for your use case.",
      },
      {
        question: "How long does AI development take?",
        answer:
          "A focused prototype or single AI feature may move quickly, while larger systems with integrations, governance, and monitoring require phased delivery. We usually start with a clear pilot use case.",
      },
      {
        question: "Can AI help automate internal business processes?",
        answer:
          "Yes. Common examples include document intake, support triage, content summarization, lead qualification, and workflow routing — always designed around how your team actually operates.",
      },
    ],
    relatedSlugs: [
      "custom-software-development",
      "web-application-development",
      "cloud-devops",
    ],
    cta: {
      eyebrow: "Explore AI",
      title: "Want to Put AI to",
      titleAccent: "Work in Your Product?",
      description:
        "Tell us where your team spends time or where users need smarter experiences. We will help identify practical next steps.",
      buttonLabel: "Explore AI Solutions",
      buttonHref: "/contact",
    },
  },
  {
    slug: "ui-ux-design",
    icon: "layers",
    meta: {
      title: "UI/UX Design Services | Product & Web Design | DevsRoute",
      description:
        "Create intuitive digital experiences with UI/UX design focused on usability, clarity, and conversion. From product strategy to polished interfaces, we design experiences users understand.",
    },
    hero: {
      eyebrow: "UI / UX Design",
      heading: "Design That Makes Complex Products",
      headingAccent: "Feel Simple.",
      supporting:
        "We design clear, intuitive digital experiences that help users understand your product, complete tasks, and enjoy the experience along the way.",
      cta: { label: "Design Your Product", href: "/contact" },
      image: "/brand/services/ui-ux-design-v2.jpg",
      imageAlt:
        "Product designer reviewing UI screens and interface design workflow",
    },
    intro: {
      heading: "Good Design Reduces",
      headingAccent: "Friction.",
      paragraphs: [
        "Users should not have to guess how your product works. Strong UI/UX design makes navigation obvious, tasks easier to complete, and complex systems feel approachable.",
        "We design for real product goals — clarity, usability, consistency, and conversion — whether you are launching something new or improving an existing experience.",
      ],
    },
    designServices: {
      title: "Our Design",
      titleAccent: "Services.",
      items: [
        "UX Research",
        "User Flows",
        "Wireframes",
        "Information Architecture",
        "UI Design",
        "Design Systems",
        "Prototyping",
        "Responsive Design",
        "Product Design",
      ],
    },
    designPrinciples: {
      title: "Our Design",
      titleAccent: "Principles.",
      items: [
        {
          title: "Clarity",
          description: "Make products easy to understand at a glance.",
        },
        {
          title: "Usability",
          description: "Design flows that help users complete tasks efficiently.",
        },
        {
          title: "Consistency",
          description: "Create predictable patterns across screens and states.",
        },
        {
          title: "Accessibility",
          description: "Support diverse users with thoughtful interface decisions.",
        },
        {
          title: "Visual Hierarchy",
          description: "Guide attention to what matters most on each screen.",
        },
        {
          title: "Business Alignment",
          description: "Connect design decisions to product and growth goals.",
        },
      ],
    },
    whatWeDesign: {
      title: "What We Design",
      items: [
        "SaaS Products",
        "Web Applications",
        "Mobile Apps",
        "Dashboards",
        "eCommerce",
        "Customer Portals",
        "Business Platforms",
      ],
    },
    process: {
      title: "Design",
      titleAccent: "Process.",
      steps: [
        { title: "Understand", description: "Learn users, goals, and constraints." },
        { title: "Structure", description: "Define information architecture and flows." },
        { title: "Wireframe", description: "Explore layout and interaction patterns." },
        { title: "Design", description: "Create polished UI and visual systems." },
        { title: "Prototype", description: "Test ideas before development begins." },
        { title: "Test", description: "Validate usability with real feedback." },
        { title: "Refine", description: "Improve based on insights and handoff needs." },
      ],
    },
    faq: [
      {
        question: "What is the difference between UI and UX design?",
        answer:
          "UX design focuses on how a product works and how users move through it. UI design focuses on the visual interface — layout, typography, components, and visual style. Strong products need both working together.",
      },
      {
        question: "Do you only design, or also develop products?",
        answer:
          "We do both. Many clients work with us for end-to-end product design and development, while others engage us for design-only phases before or during build.",
      },
      {
        question: "Can you redesign an existing product?",
        answer:
          "Yes. We help teams improve confusing flows, modernize interfaces, increase conversion, and create more consistent design systems across web and mobile products.",
      },
      {
        question: "Do you create design systems?",
        answer:
          "Yes. Design systems help products scale with reusable components, consistent patterns, and clearer collaboration between design and engineering teams.",
      },
      {
        question: "Will we get prototypes before development?",
        answer:
          "When appropriate, we create interactive prototypes so stakeholders can review flows and usability before engineering begins.",
      },
      {
        question: "How does design work with development?",
        answer:
          "We align closely with engineering through structured handoff, component thinking, and iterative review so designs are practical to build and maintain.",
      },
    ],
    relatedSlugs: [
      "web-application-development",
      "mobile-app-development",
      "custom-software-development",
    ],
    cta: {
      eyebrow: "Design Your Product",
      title: "Ready to Improve How Your",
      titleAccent: "Product Feels?",
      description:
        "Share your product, users, and goals. We will help shape an experience that is clearer and easier to use.",
      buttonLabel: "Design Your Product",
      buttonHref: "/contact",
    },
  },
  {
    slug: "cloud-devops",
    icon: "cloud",
    meta: {
      title: "Cloud & DevOps Services | CI/CD & Cloud Infrastructure | DevsRoute",
      description:
        "Build reliable cloud infrastructure and automated deployment pipelines with DevOps services focused on scalability, security, performance, and reliable software delivery.",
    },
    hero: {
      eyebrow: "Cloud & DevOps",
      heading: "Infrastructure That Keeps Your",
      headingAccent: "Product Moving.",
      supporting:
        "We build reliable cloud infrastructure and automated delivery workflows that help teams deploy faster, scale confidently, and keep applications running smoothly.",
      cta: { label: "Improve Your Infrastructure", href: "/contact" },
      image: "/brand/services/cloud-devops-v2.jpg",
      imageAlt:
        "Cloud infrastructure and deployment pipeline engineering workspace",
      imagePosition: "left",
    },
    intro: {
      heading: "Reliable Delivery",
      headingAccent: "Matters.",
      paragraphs: [
        "As products grow, deployment speed, uptime, and infrastructure clarity become critical. Strong DevOps practices reduce release risk and help teams respond to issues faster.",
        "We help businesses improve cloud infrastructure, automate deployments, and build systems that scale with confidence — without unnecessary complexity.",
      ],
    },
    whatWeBuild: {
      eyebrow: "What We Do",
      title: "Cloud & DevOps",
      titleAccent: "Services.",
      items: [
        "Cloud Infrastructure",
        "CI/CD Pipelines",
        "Deployment Automation",
        "Cloud Migration",
        "Infrastructure as Code",
        "Monitoring",
        "Application Scaling",
        "Security & Reliability",
        "DevOps Consulting",
      ],
    },
    devopsWhy: {
      title: "Why DevOps",
      titleAccent: "Matters.",
      paragraphs: [
        "Good infrastructure is not just about servers — it is about how confidently your team can ship, scale, and support software in production.",
      ],
      items: [
        "Release faster with automated pipelines",
        "Reduce deployment errors and downtime",
        "Improve reliability in production",
        "Scale applications as usage grows",
        "Automate repetitive operational work",
        "Monitor systems and respond proactively",
      ],
    },
    process: {
      title: "How We",
      titleAccent: "Work.",
      steps: [
        { title: "Assess", description: "Review infrastructure, workflows, and bottlenecks." },
        { title: "Plan", description: "Define architecture and automation priorities." },
        { title: "Implement", description: "Build pipelines, infrastructure, and monitoring." },
        { title: "Migrate", description: "Move workloads safely when needed." },
        { title: "Optimize", description: "Improve performance, cost, and reliability." },
        { title: "Support", description: "Help teams operate confidently in production." },
      ],
    },
    technologies: {
      eyebrow: "Technology",
      title: "Cloud & Delivery",
      titleAccent: "Stack.",
      groups: [
        {
          category: "Cloud & Containers",
          items: ["AWS", "Docker", "Linux", "Cloud services", "Containers"],
        },
        {
          category: "Automation & Ops",
          items: [
            "CI/CD",
            "Infrastructure as Code",
            "Monitoring",
            "Deployment automation",
            "Scaling strategies",
          ],
        },
      ],
    },
    faq: [
      {
        question: "What is DevOps?",
        answer:
          "DevOps is a set of practices that combine software development and operations to improve how teams build, deploy, monitor, and maintain applications. It often includes automation, CI/CD, infrastructure management, and reliability practices.",
      },
      {
        question: "Why does a business need DevOps?",
        answer:
          "As products grow, manual deployments and unclear infrastructure become risky and slow. DevOps helps teams release more reliably, recover faster, and scale with less operational friction.",
      },
      {
        question: "What is CI/CD?",
        answer:
          "CI/CD stands for Continuous Integration and Continuous Delivery. It automates testing and deployment so code changes can move from development to production more safely and efficiently.",
      },
      {
        question: "Can you help migrate to the cloud?",
        answer:
          "Yes. We support cloud migration planning, infrastructure setup, deployment automation, and phased transitions that reduce downtime and operational risk.",
      },
      {
        question: "Do you set up monitoring and alerting?",
        answer:
          "Yes. Monitoring helps teams detect issues early, understand performance trends, and respond before users are heavily impacted.",
      },
      {
        question: "Can DevOps work with our existing development team?",
        answer:
          "Absolutely. We often collaborate with internal engineering teams to improve pipelines, infrastructure, and release practices without disrupting ongoing product work.",
      },
    ],
    relatedSlugs: [
      "web-application-development",
      "custom-software-development",
      "ai-solutions",
    ],
    cta: {
      eyebrow: "Infrastructure",
      title: "Need a More Reliable Way to",
      titleAccent: "Ship Software?",
      description:
        "Tell us about your deployment challenges and infrastructure goals. We will help identify practical improvements.",
      buttonLabel: "Improve Your Infrastructure",
      buttonHref: "/contact",
    },
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function getServicePageSlugs() {
  return servicePages.map((page) => page.slug);
}
