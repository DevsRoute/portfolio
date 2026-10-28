export type HomeFaq = {
  id: string;
  question: string;
  answer: string;
};

export const homeFaqs: HomeFaq[] = [
  {
    id: "how-long",
    question: "How long does an MVP take?",
    answer:
      "It depends on scope. The end date is agreed on the first call, and there is a demo every week.",
  },
  {
    id: "technical-cofounder",
    question: "Do I need a technical co-founder first?",
    answer:
      "No. Many startups and B2B founders start with us before they hire. You get a written scope and a defined end date, and you talk to the people building the product.",
  },
  {
    id: "what-is-included",
    question: "What does SaaS MVP development include?",
    answer:
      "A first version of the product your users can actually try: the core flows, a clear scope, and a defined end date. Extra ideas stay out of that first release.",
  },
  {
    id: "ai-existing",
    question: "Can you add AI to a product we already have?",
    answer:
      "Yes. AI product development can be a chat assistant, automation, or search inside the product you already run. We agree the scope and the end date before build starts.",
  },
  {
    id: "who-owns",
    question: "Who owns the code?",
    answer:
      "You do. When the work is complete and paid, you own the product and the code we write for you.",
  },
  {
    id: "how-to-start",
    question: "How do we start?",
    answer:
      "Book a call. We talk through the product, agree a clear scope and a defined end date, and then you see a demo every week.",
  },
];
