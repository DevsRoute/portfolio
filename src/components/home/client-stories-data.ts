export type ClientStory = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const clientStories: ClientStory[] = [
  {
    id: "sarah",
    quote:
      "DevsRoute turned our product idea into a launch-ready platform in weeks, not months. Clear communication and solid engineering every step of the way.",
    name: "Sarah Mitchell",
    role: "CEO, NorthPeak Finance",
    initials: "SM",
  },
  {
    id: "james",
    quote:
      "They moved fast without cutting corners. The team kept us aligned on priorities and delivered quality we could ship with confidence.",
    name: "James Okonkwo",
    role: "Founder, FlowDesk",
    initials: "JO",
  },
  {
    id: "elena",
    quote:
      "From discovery to launch, everything felt structured and transparent. Our new platform is faster, cleaner, and easier for our customers to use.",
    name: "Elena Vargas",
    role: "Product Lead, HavenHome",
    initials: "EV",
  },
  {
    id: "marcus",
    quote:
      "We needed a partner who understood both product and scale. DevsRoute delivered a reliable platform our team still builds on today.",
    name: "Marcus Chen",
    role: "CTO, Marketly",
    initials: "MC",
  },
  {
    id: "priya",
    quote:
      "Communication stayed clear throughout. Milestones were realistic, demos were useful, and the final product matched what we envisioned.",
    name: "Priya Shah",
    role: "Operations Director, CareSync",
    initials: "PS",
  },
  {
    id: "daniel",
    quote:
      "Their process made a complex build feel manageable. We launched on schedule with a product our customers actually enjoy using.",
    name: "Daniel Brooks",
    role: "Managing Partner, FleetCore",
    initials: "DB",
  },
];
