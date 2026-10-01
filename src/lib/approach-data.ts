export const approachProcess = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, users, goals, technical requirements, and the problem we're solving.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn requirements into a clear product scope, technical direction, priorities, and roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create intuitive user flows and interfaces that balance user needs with business goals.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Our development team turns the approved direction into a reliable, scalable digital product.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "After launch, we use feedback, data, and real-world usage to continuously improve the product.",
  },
] as const;

export const approachPrinciples = [
  {
    title: "Clarity Over Complexity",
    description: "We keep decisions and communication straightforward.",
  },
  {
    title: "Build for the Real World",
    description:
      "We prioritize practical solutions that solve actual business problems.",
  },
  {
    title: "Quality Is Part of the Process",
    description:
      "Testing, performance, accessibility, and maintainability are considered throughout development.",
  },
  {
    title: "Think Beyond Launch",
    description:
      "We build products with future growth and iteration in mind.",
  },
] as const;

export const approachCommunication = [
  "Clear milestones",
  "Regular updates",
  "Shared priorities",
  "Transparent progress",
  "Direct communication",
  "Fast feedback loops",
] as const;

export const approachTechGroups = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "REST APIs", "Databases"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "CI/CD", "Monitoring"],
  },
  {
    category: "AI & Automation",
    items: ["LLM integrations", "Workflow automation", "Search", "Analytics"],
  },
] as const;

export const approachTimeline = [
  "Initial Conversation",
  "Discovery & Scope",
  "Design & Planning",
  "Development",
  "Launch & Support",
] as const;
