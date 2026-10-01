"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

const SUGGESTIONS = [
  "What services do you offer?",
  "Can you build an MVP?",
  "How does your process work?",
  "Do you build AI features?",
] as const;

const INTRO_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-1",
    role: "assistant",
    content:
      "Welcome — I’m DevsRoute AI Engine. I can walk you through our services, approach, and how we ship products.",
  },
  {
    id: "welcome-2",
    role: "assistant",
    content:
      "DevsRoute · Software development agency focused on custom software, AI solutions, and launch-ready digital products.",
  },
];

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function getAssistantReply(question: string) {
  const q = question.toLowerCase();

  if (q.includes("service") || q.includes("offer") || q.includes("skill")) {
    return "We offer custom software, AI solutions, web apps, mobile apps, UI/UX design, and Cloud & DevOps. Tell me what you’re building and I’ll map the best path.";
  }

  if (q.includes("mvp") || q.includes("project") || q.includes("idea")) {
    return "Yes — we help teams go from idea to a launch-ready MVP with clear scope, strong UX, and reliable engineering.";
  }

  if (q.includes("process") || q.includes("approach") || q.includes("experience")) {
    return "Our process is discovery → design → build → launch → iterate. We ship in focused milestones and stay close to your business goals.";
  }

  if (q.includes("contact") || q.includes("talk") || q.includes("price")) {
    return "For a detailed proposal, use Let’s talk on the site. Share a short brief and our team will follow up with next steps.";
  }

  if (q.includes("ai")) {
    return "We add practical AI where it creates value — assistants, automation, search, and smarter product features inside real software.";
  }

  return "Great question. Ask about services, MVPs, timelines, or AI — or use Let’s talk to connect with the DevsRoute team.";
}

export function HeroAIEngine() {
  const [messages, setMessages] = useState<ChatMessage[]>(INTRO_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  async function sendMessage(raw: string) {
    const content = raw.trim();
    if (!content || isTyping) return;

    setMessages((prev) => [
      ...prev,
      { id: createId(), role: "user", content },
    ]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 650 + Math.random() * 450));

    setMessages((prev) => [
      ...prev,
      {
        id: createId(),
        role: "assistant",
        content: getAssistantReply(content),
      },
    ]);
    setIsTyping(false);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    void sendMessage(input);
  }

  const showSuggestions = messages.length <= INTRO_MESSAGES.length && !isTyping;

  return (
    <aside
      aria-label="AI Engine chat"
      className="relative flex h-[min(24rem,calc(100svh-12rem))] w-full flex-col rounded-2xl bg-white p-3.5 shadow-[0_12px_36px_rgb(16_52_126/0.12)] sm:h-[min(26rem,calc(100svh-11rem))] sm:px-6 sm:py-5 lg:h-[min(28rem,calc(100svh-10rem))]"
    >
      <div className="mb-3 flex shrink-0 items-center gap-2.5">
        <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-500 text-white">
          <Sparkles className="size-3.5" />
        </span>
        <div>
          <p className="text-sm font-semibold tracking-tight text-ink-700">
            AI Engine
          </p>
          <p className="text-[11px] text-brand-600/80">DevsRoute assistant</p>
        </div>
      </div>

      <div
        ref={listRef}
        className="scrollbar-site min-h-0 flex-1 space-y-2.5 overflow-y-auto overscroll-contain pr-1"
      >
        {messages.map((message) => {
          const isUser = message.role === "user";
          return (
            <div
              key={message.id}
              className={cn("flex", isUser ? "justify-end" : "justify-start")}
            >
              <div
                className={cn(
                  "max-w-[100%] rounded-xl px-3 py-2 text-[13px] leading-5",
                  isUser
                    ? "rounded-br-md bg-brand-500 text-white"
                    : "rounded-bl-md border-[0.5px] border-brand-500/35 bg-white text-ink-600",
                )}
              >
                {message.content}
              </div>
            </div>
          );
        })}

        {isTyping ? (
          <div className="inline-flex items-center gap-1 rounded-xl rounded-bl-md border-[0.5px] border-brand-500/35 bg-white px-3 py-2.5">
            <span className="size-1.5 animate-bounce rounded-full bg-brand-400 [animation-delay:0ms]" />
            <span className="size-1.5 animate-bounce rounded-full bg-brand-400 [animation-delay:120ms]" />
            <span className="size-1.5 animate-bounce rounded-full bg-brand-400 [animation-delay:240ms]" />
          </div>
        ) : null}

        {showSuggestions ? (
          <div className="pt-0.5">
            <p className="mb-2 text-[10px] font-semibold tracking-[0.16em] text-brand-600/80 uppercase">
              Suggested questions
            </p>
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => void sendMessage(suggestion)}
                  className="inline-flex items-center gap-1.5 rounded-full border-[0.5px] border-brand-500 bg-white px-2.5 py-2 text-left text-[11px] font-medium text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  <Sparkles className="size-3 shrink-0 text-brand-500" />
                  <span className="leading-snug">{suggestion}</span>
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="mt-3 shrink-0">
        <div className="flex items-center gap-2 rounded-full border-[0.5px] border-brand-500 bg-white py-0.5 pr-0.5 pl-3.5 focus-within:ring-2 focus-within:ring-brand-300/50">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="What do you want to know?"
            className="min-w-0 flex-1 bg-transparent py-2 text-sm text-ink-600 outline-none placeholder:text-ink-400"
            aria-label="Ask AI Engine"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            aria-label="Send message"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      </form>
    </aside>
  );
}
