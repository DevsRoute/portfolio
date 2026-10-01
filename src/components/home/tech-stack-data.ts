export type TechItem = {
  name: string;
  slug: string;
  color?: string;
};

export type TechGroup = {
  category: string;
  items: TechItem[];
};

export const techStackGroups: TechGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "000000" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
      { name: "shadcn/ui", slug: "shadcnui", color: "000000" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", slug: "react", color: "61DAFB" },
      { name: "Flutter", slug: "flutter", color: "02569B" },
      { name: "Swift", slug: "swift", color: "F05138" },
      { name: "Kotlin", slug: "kotlin", color: "7F52FF" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
      { name: "NestJS", slug: "nestjs", color: "E0234E" },
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "FastAPI", slug: "fastapi", color: "009688" },
      { name: "Django", slug: "django", color: "092E20" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "MySQL", slug: "mysql", color: "4479A1" },
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "Redis", slug: "redis", color: "FF4438" },
      { name: "Supabase", slug: "supabase", color: "3FCF8E" },
    ],
  },
  {
    category: "AI & LLMs",
    items: [
      { name: "OpenAI", slug: "openai", color: "412991" },
      { name: "Claude", slug: "anthropic", color: "D4A27F" },
      { name: "Gemini", slug: "googlegemini", color: "8E75B2" },
      { name: "LangChain", slug: "langchain", color: "1C3C3C" },
      { name: "Hugging Face", slug: "huggingface", color: "FFD21E" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", slug: "amazonwebservices", color: "232F3E" },
      { name: "Google Cloud", slug: "googlecloud", color: "4285F4" },
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
      { name: "GitHub Actions", slug: "githubactions", color: "2088FF" },
    ],
  },
];
