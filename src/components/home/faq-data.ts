export type HomeFaq = {
  id: string;
  question: string;
  answer: string;
};

export const homeFaqs: HomeFaq[] = [
  {
    id: "mvp",
    question: "Can you build an MVP?",
    answer:
      "Yes. Our MVP Sprint takes you from idea to a launch-ready product — scope, design and build — so you can validate with real users quickly.",
  },
  {
    id: "process",
    question: "How does your process work?",
    answer:
      "We follow a clear path: discover, define, design, build, and improve. You stay involved at key decisions while we handle design, engineering, testing, and delivery.",
  },
  {
    id: "ai-existing",
    question: "Do you build AI features into existing products?",
    answer:
      "Absolutely. We add practical AI where it creates value — assistants, automation, search, and smarter workflows — integrated into the products you already run.",
  },
  {
    id: "cost",
    question: "How much does a project cost?",
    answer:
      "It depends on scope, timeline, and complexity. After a short discovery conversation, we share a clear estimate and recommended approach — no surprise pricing.",
  },
  {
    id: "ip",
    question: "Who owns the code and IP?",
    answer:
      "You do. Once the project is complete and paid, you own the product, code, and intellectual property we create for your business.",
  },
  {
    id: "support",
    question: "Do you offer support after launch?",
    answer:
      "Yes. We can continue with maintenance, iteration, performance improvements, and new features so your product keeps improving after launch.",
  },
];
