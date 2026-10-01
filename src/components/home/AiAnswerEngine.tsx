"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUp, Search, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
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

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi — I’m the DevsRoute AI assistant. Ask about services, MVPs, timelines, or how we can help turn your idea into a product.",
};

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function getAssistantReply(question: string) {
  const q = question.toLowerCase();

  if (q.includes("service") || q.includes("offer") || q.includes("do you")) {
    return "We build custom software, AI solutions, web apps, mobile apps, UI/UX design, and Cloud & DevOps. Tell me what you’re trying to launch and I’ll point you to the best fit.";
  }

  if (q.includes("mvp") || q.includes("startup") || q.includes("idea")) {
    return "Yes — we help teams go from idea to a launch-ready MVP with clear scope, strong UX, and reliable engineering. Share your product idea and we can outline a practical first release.";
  }

  if (q.includes("process") || q.includes("approach") || q.includes("how")) {
    return "Our approach is discovery → design → build → launch → iterate. We keep communication clear, ship in focused milestones, and stay close to your business goals.";
  }

  if (q.includes("ai") || q.includes("automation") || q.includes("llm")) {
    return "We add practical AI where it creates value — assistants, automation, search, and smarter product features. If you describe your workflow, I can suggest where AI helps most.";
  }

  if (q.includes("price") || q.includes("cost") || q.includes("budget")) {
    return "Pricing depends on scope, timeline, and complexity. Share a short brief and our team can recommend a package that fits — start with “Let’s talk” and we’ll take it from there.";
  }

  return "Great question. DevsRoute helps modern businesses build software that ships — from MVP to production. Ask about a service, timeline, or your product idea, or open “Let’s talk” to connect with the team.";
}

function AiOrb({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-flex size-8 shrink-0 items-center justify-center rounded-full sm:size-9",
        className,
      )}
    >
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_28%,#f0e9ff_0%,#a78bfa_42%,#6366f1_72%,#4338ca_100%)] shadow-[inset_0_1px_2px_rgb(255_255_255/0.55),0_4px_12px_rgb(99_102_241/0.35)]" />
      <span className="absolute top-1.5 left-2 size-2 rounded-full bg-white/70 blur-[0.5px]" />
      <Sparkles className="relative size-3.5 text-white drop-shadow-sm sm:size-4" />
    </span>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-2.5 sm:gap-3",
        isUser ? "flex-row-reverse" : "flex-row",
      )}
    >
      {!isUser ? <AiOrb className="mt-0.5" /> : null}
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 sm:max-w-[78%] sm:px-4 sm:py-3 sm:text-[0.95rem] sm:leading-7",
          isUser
            ? "rounded-br-md bg-brand-500 text-white"
            : "rounded-bl-md border border-ink-100 bg-white text-ink-700",
        )}
      >
        {message.content}
      </div>
    </div>
  );
}

function ChatPanel({
  initialQuestion,
  onConsumedInitial,
}: {
  initialQuestion: string;
  onConsumedInitial: () => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const bootstrapped = useRef(false);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!initialQuestion || bootstrapped.current) return;
    bootstrapped.current = true;
    void sendMessage(initialQuestion);
    onConsumedInitial();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- bootstrap once from section prompt
  }, [initialQuestion]);

  async function sendMessage(raw: string) {
    const content = raw.trim();
    if (!content || isTyping) return;

    const userMessage: ChatMessage = {
      id: createId(),
      role: "user",
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 700 + Math.random() * 500));

    const reply: ChatMessage = {
      id: createId(),
      role: "assistant",
      content: getAssistantReply(content),
    };

    setMessages((prev) => [...prev, reply]);
    setIsTyping(false);
    inputRef.current?.focus();
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div
        ref={listRef}
        className="scrollbar-site min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5"
      >
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {isTyping ? (
          <div className="flex items-center gap-2.5">
            <AiOrb />
            <div className="inline-flex items-center gap-1 rounded-2xl rounded-bl-md border border-ink-100 bg-white px-3.5 py-3">
              <span className="size-1.5 animate-bounce rounded-full bg-ink-300 [animation-delay:0ms]" />
              <span className="size-1.5 animate-bounce rounded-full bg-ink-300 [animation-delay:120ms]" />
              <span className="size-1.5 animate-bounce rounded-full bg-ink-300 [animation-delay:240ms]" />
            </div>
          </div>
        ) : null}

        {messages.length <= 1 && !isTyping ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => void sendMessage(suggestion)}
                className="rounded-full border border-ink-100 bg-white px-3 py-1.5 text-left text-xs font-medium text-ink-600 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 sm:text-sm"
              >
                {suggestion}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <form
        onSubmit={handleSubmit}
        className="shrink-0 border-t border-ink-100 bg-white p-3 sm:p-4"
      >
        <div className="flex items-end gap-2 rounded-2xl border border-ink-100 bg-ink-50/70 p-1.5 focus-within:border-brand-300 focus-within:ring-3 focus-within:ring-brand-500/15">
          <textarea
            ref={inputRef}
            value={input}
            rows={1}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void sendMessage(input);
              }
            }}
            placeholder="Ask about services, MVPs, AI, or delivery…"
            className="max-h-28 min-h-11 flex-1 resize-none bg-transparent px-3 py-2.5 text-sm text-ink-700 outline-none placeholder:text-ink-400 sm:text-[0.95rem]"
            aria-label="Message"
          />
          <Button
            type="submit"
            size="icon-lg"
            disabled={!input.trim() || isTyping}
            className="mb-0.5 shrink-0 rounded-xl"
            aria-label="Send message"
          >
            <ArrowUp />
          </Button>
        </div>
        <p className="mt-2 px-1 text-[11px] leading-4 text-muted-foreground sm:text-xs">
          Demo assistant for product questions — for a detailed proposal, use Let’s talk.
        </p>
      </form>
    </div>
  );
}

export function AiAnswerEngine() {
  const [open, setOpen] = useState(false);
  const [pendingQuestion, setPendingQuestion] = useState("");
  const promptRef = useRef<HTMLInputElement>(null);

  function openChat(question = "") {
    setPendingQuestion(question.trim());
    setOpen(true);
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      // Closing restores focus to the prompt; blur so it doesn't feel stuck.
      requestAnimationFrame(() => promptRef.current?.blur());
    }
  }

  return (
    <section
      id="ai-assistant"
      className="ai-answer-engine relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="container-site relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase sm:mb-5 sm:text-[0.8rem]">
            DevsRoute AI
          </p>
          <h2 className="font-heading text-[1.85rem] font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.85rem] lg:leading-[1.12]">
            Need answers before you build?
          </h2>
          <p className="mt-3 font-heading text-[1.85rem] font-semibold tracking-tight text-ink-700 sm:mt-3.5 sm:text-4xl lg:text-[2.85rem] lg:leading-[1.12]">
            Ask our{" "}
            <span className="text-brand-500">AI assistant</span>
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-ink-500 sm:mt-5 sm:text-base sm:leading-7">
            Get quick guidance on services, MVPs, timelines, and how DevsRoute
            can help ship your product.
          </p>

          <div className="mx-auto mt-8 max-w-2xl sm:mt-10">
            <label className="sr-only" htmlFor="ai-question">
              Ask the AI assistant
            </label>
            <div
              role="button"
              tabIndex={0}
              onClick={() => openChat()}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openChat();
                }
              }}
              className="group flex cursor-pointer items-center gap-2.5 rounded-full border border-brand-100/80 bg-white px-2 py-1.5 transition-[border-color,box-shadow] duration-200 hover:border-brand-200 sm:gap-3 sm:px-2.5 sm:py-2"
            >
              <AiOrb className="ml-1 sm:ml-1.5" />
              <input
                ref={promptRef}
                id="ai-question"
                type="text"
                readOnly
                tabIndex={-1}
                placeholder="Ask about services, MVPs, or delivery…"
                className="pointer-events-none min-w-0 flex-1 cursor-pointer bg-transparent py-2 text-sm text-ink-700 outline-none placeholder:text-ink-400 sm:text-base"
              />
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  openChat();
                }}
                className="mr-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600 sm:size-11"
                aria-label="Open AI chat"
              >
                <Search className="size-5" strokeWidth={2.25} />
              </button>
            </div>
            <p className="mt-3 text-xs text-ink-400 sm:text-[0.8rem]">
              Instant answers · No signup required
            </p>
          </div>
        </div>
      </div>

      <Drawer
        open={open}
        onOpenChange={handleOpenChange}
        showSwipeHandle
        swipeDirection="down"
      >
        <DrawerContent className="h-[min(92dvh,880px)] data-[swipe-axis=y]:max-h-[min(92dvh,880px)]">
          <DrawerHeader className="relative border-b border-ink-100 bg-white px-4 py-3 text-left sm:px-5 sm:py-4">
            <div className="flex items-start gap-3 pr-10">
              <AiOrb />
              <div className="min-w-0">
                <DrawerTitle className="text-base font-semibold sm:text-lg">
                  DevsRoute AI assistant
                </DrawerTitle>
                <DrawerDescription className="mt-0.5 text-left text-xs sm:text-sm">
                  Quick guidance on services, MVPs, and delivery.
                </DrawerDescription>
              </div>
            </div>
            <DrawerClose
              render={
                <button
                  type="button"
                  className="absolute top-3 right-3 inline-flex size-9 items-center justify-center rounded-lg text-ink-500 transition-colors hover:bg-ink-50 hover:text-ink-700 sm:top-3.5 sm:right-4"
                  aria-label="Close chat"
                />
              }
            >
              <X className="size-5" />
            </DrawerClose>
          </DrawerHeader>

          {open ? (
            <ChatPanel
              initialQuestion={pendingQuestion}
              onConsumedInitial={() => setPendingQuestion("")}
            />
          ) : null}
        </DrawerContent>
      </Drawer>
    </section>
  );
}
