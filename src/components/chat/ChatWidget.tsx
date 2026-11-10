"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChatContext } from "./ChatContext";
import { renderMarkdown } from "./renderMarkdown";

export function ChatWidget() {
  const { messages, loading, send } = useChatContext();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend() {
    await send(input);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void handleSend();
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[480px] w-[340px] flex-col overflow-hidden rounded-2xl border border-[var(--ink-100)] bg-white shadow-2xl sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-[var(--brand-500)] px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-full bg-white/20">
                <MessageCircle className="size-4 text-white" strokeWidth={2} />
              </span>
              <div>
                <p className="text-[0.8rem] font-semibold leading-none text-white">
                  DevsRoute
                </p>
                <p className="mt-0.5 text-[0.68rem] leading-none text-white/70">
                  Usually replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 text-white/70 transition hover:bg-white/20 hover:text-white"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "flex",
                  m.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[82%] rounded-2xl px-3.5 py-2.5 leading-relaxed",
                    m.role === "user"
                      ? "bg-[var(--brand-500)] text-white"
                      : "bg-[var(--ink-50)] text-[var(--ink-700)]",
                  )}
                >
                  {m.role === "assistant" ? renderMarkdown(m.content) : m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl bg-[var(--ink-50)] px-3.5 py-2.5">
                  <Loader2 className="size-3.5 animate-spin text-[var(--ink-400)]" />
                  <span className="text-xs text-[var(--ink-400)]">Typing…</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[var(--ink-100)] bg-white px-3 py-3">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything…"
                rows={1}
                className="flex-1 resize-none rounded-xl border border-[var(--ink-200)] bg-[var(--ink-50)] px-3 py-2 text-sm text-[var(--ink-700)] placeholder:text-[var(--ink-400)] outline-none focus:border-[var(--brand-400)] focus:bg-white transition"
                style={{ maxHeight: "80px" }}
                disabled={loading}
              />
              <button
                onClick={() => void handleSend()}
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-500)] text-white transition hover:bg-[var(--brand-600)] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send className="size-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[0.65rem] text-[var(--ink-400)]">
              Powered by AI · Answers may not be 100% accurate
            </p>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex size-14 items-center justify-center rounded-full bg-[var(--brand-500)] text-white shadow-lg transition hover:bg-[var(--brand-600)] hover:scale-105 active:scale-95"
      >
        {open ? (
          <X className="size-6" />
        ) : (
          <MessageCircle className="size-6" strokeWidth={2} />
        )}
      </button>
    </div>
  );
}
