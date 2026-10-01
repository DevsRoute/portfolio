"use client";

import { useId, useState, type FormEvent } from "react";
import { Clock3, Mail, MapPin, MessageSquare } from "lucide-react";

import { AboutEyebrow } from "@/components/about/AboutSectionHeading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const expectations = [
  {
    title: "Book a call",
    description:
      "Pick a 20-min slot and we'll walk through goals, constraints, and next steps.",
  },
  {
    title: "Discovery call",
    description:
      "We clarify scope together and recommend the best path forward.",
  },
  {
    title: "Clear proposal",
    description:
      "You get a practical plan with approach, timeline, and recommended next step.",
  },
];

export function ContactHero() {
  return (
    <section className="overflow-hidden bg-[#F4F7FC] pt-40 pb-12 sm:pt-44 sm:pb-14 lg:pt-48 lg:pb-16">
      <div className="container-site">
        <div className="max-w-3xl">
          <AboutEyebrow>Contact</AboutEyebrow>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] xl:text-[3.1rem]">
            Let&apos;s talk about what you want to{" "}
            <span className="text-[#1d81f2]">build next.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-500 sm:text-lg sm:leading-8">
            Whether you have a clear brief or just an early idea, we&apos;re happy
            to help you find the right path from concept to launch-ready product.
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
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const subject = encodeURIComponent("Project inquiry — DevsRoute");
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Company: ${company.trim() || "—"}`,
        "",
        message.trim() || "—",
      ].join("\n"),
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
                  href={siteConfig.calendly.href}
                  size="lg"
                  variant="light"
                  className="w-fit"
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
                  <span>20-min call · Mon–Fri · replies within 24 hours</span>
                </div>
                <div className="inline-flex items-start gap-3 text-sm text-white/88 sm:text-base">
                  <MapPin className="mt-0.5 size-5 shrink-0" strokeWidth={2} />
                  <span>Remote-first · working with teams worldwide</span>
                </div>
              </div>
            </div>

            <div>
              <AboutEyebrow>What happens next</AboutEyebrow>
              <ol className="mt-5 divide-y divide-ink-200 border-y border-ink-200">
                {expectations.map((item, index) => (
                  <li key={item.title} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-4">
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
                  Share a short overview — we&apos;ll follow up with clear next steps.
                </p>
              </div>
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

            <div className="mt-5 flex flex-col gap-2">
              <label
                htmlFor={`${formId}-company`}
                className="text-xs font-semibold tracking-wide text-ink-700"
              >
                Company <span className="font-normal text-ink-400">(optional)</span>
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
                Project details
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                rows={6}
                placeholder="What are you building, who is it for, and when do you want to launch?"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="resize-none rounded-xl border border-[#DCE3F0] px-3.5 py-3.5 text-sm text-ink-700 outline-none transition-colors placeholder:text-ink-400 focus:border-[#1d81f2]"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-7 w-full bg-[#1d81f2] text-white hover:bg-[#1d81f2]/90 sm:w-auto [&_[data-slot=btn-arrow]]:bg-white [&_[data-slot=btn-arrow]]:text-[#1d81f2]"
            >
              {submitted ? "Opening email…" : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
