"use client";

import { useId, useState, type FormEvent } from "react";
import { CalendarDays, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ContactCta() {
  const formId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const subject = encodeURIComponent("Project inquiry — DevsRoute");
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        "",
        message.trim() || "—",
      ].join("\n"),
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <div
          className={cn(
            "overflow-hidden rounded-[1.75rem] bg-[#1d81f2] text-white sm:rounded-[2rem]",
            "",
            // bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
            "bg-[length:48px_48px]",
            "p-7 sm:p-10 lg:p-14 xl:p-16",
          )}
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-14 xl:gap-16">
            <div className="flex min-w-0 flex-1 flex-col gap-6 lg:gap-7">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.05] xl:text-[3.5rem]">
                Ready to build what&apos;s next?
              </h2>
              <p className="max-w-md text-sm leading-7 text-white/88 sm:text-base sm:leading-8 lg:text-lg">
                Tell us what you&apos;re working on and let&apos;s explore how we
                can help.
              </p>

              <div className="mt-2 flex flex-col gap-3.5 sm:mt-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex w-fit items-center gap-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:text-base"
                >
                  <Mail className="size-5 shrink-0" strokeWidth={2} />
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.calendly.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:text-base"
                >
                  <CalendarDays className="size-5 shrink-0" strokeWidth={2} />
                  {siteConfig.calendly.label}
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex w-full shrink-0 flex-col gap-5 rounded-2xl bg-white p-6 text-ink-700 sm:p-8 lg:max-w-[28rem] xl:max-w-[32rem]"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={`${formId}-name`}
                    className="text-xs font-semibold tracking-wide text-ink-700"
                  >
                    Name
                  </label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="h-12 rounded-xl border border-[#DCE3F0] px-3.5 text-sm text-ink-700 outline-none transition-colors placeholder:text-ink-400 focus:border-[#1d81f2]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={`${formId}-email`}
                    className="text-xs font-semibold tracking-wide text-ink-700"
                  >
                    Email
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-12 rounded-xl border border-[#DCE3F0] px-3.5 text-sm text-ink-700 outline-none transition-colors placeholder:text-ink-400 focus:border-[#1d81f2]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor={`${formId}-message`}
                  className="text-xs font-semibold tracking-wide text-ink-700"
                >
                  Message
                </label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  rows={4}
                  placeholder="Share a short overview of your idea or project…"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="resize-none rounded-xl border border-[#DCE3F0] px-3.5 py-3.5 text-sm text-ink-700 outline-none transition-colors placeholder:text-ink-400 focus:border-[#1d81f2]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-1 w-full bg-[#1d81f2] text-white hover:bg-[#1d81f2]/90 [&_[data-slot=btn-arrow]]:bg-white [&_[data-slot=btn-arrow]]:text-[#1d81f2]"
              >
                {submitted ? "Opening email…" : "Start a conversation"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
