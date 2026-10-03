"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { Clock3, Mail, MapPin, MessageSquare } from "lucide-react";

import { AboutEyebrow } from "@/components/about/AboutSectionHeading";
import { Button } from "@/components/ui/button";
import { trackContactSubmit } from "@/lib/analytics/track";
import { calendlyHref, siteConfig } from "@/lib/site-config";
import { isConfirmed, siteFacts } from "@/config/site-facts";

const expectations = [
  {
    title: "Book a call",
    description: `Pick a 20-min slot and we'll walk through goals, constraints, and next steps.`,
  },
  {
    title: "Discovery call",
    description:
      "We clarify scope together and recommend the best path forward.",
  },
  {
    title: "Clear proposal",
    description:
      "You get a practical one-page scope with approach, timeline, and next step.",
  },
];

const budgetOptions = [
  "",
  "Under $5k",
  "$5k–$15k",
  "$15k–$40k",
  "$40k+",
  "Not sure yet",
];

const timelineOptions = [
  "",
  "ASAP (2–4 weeks)",
  "1–2 months",
  "3+ months",
  "Exploring",
];

export function ContactHero() {
  return (
    <section className="overflow-hidden bg-[#F4F7FC] pt-40 pb-12 sm:pt-44 sm:pb-14 lg:pt-48 lg:pb-16">
      <div className="container-site">
        <div className="max-w-3xl">
          <AboutEyebrow>Contact</AboutEyebrow>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] xl:text-[3.1rem]">
            Tell us what you&apos;re{" "}
            <span className="text-[#1d81f2]">building.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-500 sm:text-lg sm:leading-8">
            Whether you need an MVP or an AI feature in an existing product,
            we&apos;ll help map a clear next step.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ContactMain() {
  const formId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
          budget,
          timeline,
          website: honeypot,
        }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        mode?: string;
        mailto?: { to: string; subject: string; body: string };
      };

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong.");
        return;
      }

      trackContactSubmit("/contact");

      if (data.mode === "mailto" && data.mailto) {
        const href = `mailto:${data.mailto.to}?subject=${encodeURIComponent(data.mailto.subject)}&body=${encodeURIComponent(data.mailto.body)}`;
        window.location.href = href;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setBudget("");
      setTimeline("");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please email us directly.");
    }
  }

  return (
    <section className="bg-[#F4F7FC] pb-16 sm:pb-20 lg:pb-24">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-14">
          <aside className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-[1.5rem] bg-[#1d81f2] p-7 text-white sm:rounded-[1.75rem] sm:p-8">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Reach us directly
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/88">
                Prefer email or a quick call? Book a 20-min technical call and
                we&apos;ll help you map the next step.
              </p>

              <div className="mt-7 flex flex-col gap-4">
                <Button
                  href={calendlyHref("/contact")}
                  size="lg"
                  variant="light"
                  className="w-fit"
                  data-analytics="calendly"
                >
                  {siteConfig.calendly.label}
                </Button>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:text-base"
                >
                  <Mail className="size-5 shrink-0" strokeWidth={2} />
                  {siteConfig.email}
                </a>
                <div className="inline-flex items-start gap-3 text-sm text-white/88 sm:text-base">
                  <Clock3 className="mt-0.5 size-5 shrink-0" strokeWidth={2} />
                  <span>
                    20-min call · Mon–Fri
                    {isConfirmed(siteFacts.usTimeOverlap)
                      ? ` · ${siteFacts.usTimeOverlap}`
                      : " · US-friendly overlap"}
                  </span>
                </div>
                <div className="inline-flex items-start gap-3 text-sm text-white/88 sm:text-base">
                  <MapPin className="mt-0.5 size-5 shrink-0" strokeWidth={2} />
                  <span>{siteFacts.address}</span>
                </div>
              </div>
            </div>

            <div>
              <AboutEyebrow>What happens next</AboutEyebrow>
              <ol className="mt-5 divide-y divide-ink-200 border-y border-ink-200">
                {expectations.map((item, index) => (
                  <li
                    key={item.title}
                    className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-4"
                  >
                    <span className="font-mono text-sm text-[#1d81f2]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-ink-700">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-ink-500">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-[1.5rem] border border-[#E6EBF3] bg-white p-6 shadow-[0_16px_48px_rgb(29_129_242/0.06)] sm:rounded-[1.75rem] sm:p-8 lg:p-10"
          >
            <div className="mb-7 flex items-start gap-3">
              <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1d81f2]/10 text-[#1d81f2]">
                <MessageSquare className="size-4" strokeWidth={2.2} />
              </span>
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-ink-700 sm:text-3xl">
                  Start a conversation
                </h2>
                <p className="mt-2 text-sm leading-6 text-ink-500">
                  Share a short overview — we&apos;ll follow up with clear next
                  steps.
                </p>
              </div>
            </div>

            {/* Honeypot */}
            <div className="absolute -left-[9999px] opacity-0" aria-hidden>
              <label htmlFor={`${formId}-website`}>Website</label>
              <input
                id={`${formId}-website`}
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
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
                  Work email
                </label>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 rounded-xl border border-[#DCE3F0] px-3.5 text-sm text-ink-700 outline-none transition-colors placeholder:text-ink-400 focus:border-[#1d81f2]"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label
                htmlFor={`${formId}-company`}
                className="text-xs font-semibold tracking-wide text-ink-700"
              >
                Company
              </label>
              <input
                id={`${formId}-company`}
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Acme Inc."
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="h-12 rounded-xl border border-[#DCE3F0] px-3.5 text-sm text-ink-700 outline-none transition-colors placeholder:text-ink-400 focus:border-[#1d81f2]"
              />
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label
                htmlFor={`${formId}-message`}
                className="text-xs font-semibold tracking-wide text-ink-700"
              >
                What are you building?
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                rows={5}
                required
                placeholder="MVP for … / AI feature for …"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="resize-none rounded-xl border border-[#DCE3F0] px-3.5 py-3.5 text-sm text-ink-700 outline-none transition-colors placeholder:text-ink-400 focus:border-[#1d81f2]"
              />
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor={`${formId}-budget`}
                  className="text-xs font-semibold tracking-wide text-ink-700"
                >
                  Budget{" "}
                  <span className="font-normal text-ink-400">(optional)</span>
                </label>
                <select
                  id={`${formId}-budget`}
                  name="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="h-12 rounded-xl border border-[#DCE3F0] px-3.5 text-sm text-ink-700 outline-none focus:border-[#1d81f2]"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt || "none"} value={opt}>
                      {opt || "Select…"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor={`${formId}-timeline`}
                  className="text-xs font-semibold tracking-wide text-ink-700"
                >
                  Timeline{" "}
                  <span className="font-normal text-ink-400">(optional)</span>
                </label>
                <select
                  id={`${formId}-timeline`}
                  name="timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="h-12 rounded-xl border border-[#DCE3F0] px-3.5 text-sm text-ink-700 outline-none focus:border-[#1d81f2]"
                >
                  {timelineOptions.map((opt) => (
                    <option key={opt || "none"} value={opt}>
                      {opt || "Select…"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="mt-5 text-xs leading-5 text-ink-400">
              By submitting, you agree we may use your details to respond to
              this inquiry. See our{" "}
              <Link href="/privacy" className="font-medium text-brand-600">
                Privacy Policy
              </Link>
              .
            </p>

            {status === "success" ? (
              <p className="mt-4 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-700" role="status">
                Thanks — we got your message
                {process.env.NEXT_PUBLIC_CONTACT_HINT === "mailto"
                  ? " (or your email client should open)."
                  : "."}{" "}
                We&apos;ll reply soon.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                {errorMsg} Or email{" "}
                <a className="underline" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                .
              </p>
            ) : null}

            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="mt-7 w-full bg-[#1d81f2] text-white hover:bg-[#1d81f2]/90 sm:w-auto [&_[data-slot=btn-arrow]]:bg-white [&_[data-slot=btn-arrow]]:text-[#1d81f2]"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
