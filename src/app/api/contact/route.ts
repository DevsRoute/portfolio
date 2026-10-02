import { NextResponse } from "next/server";

import { siteFacts } from "@/config/site-facts";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  budget?: string;
  timeline?: string;
  website?: string; // honeypot
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — bots fill this; humans leave empty
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";
  const timeline = body.timeline?.trim() ?? "";

  if (!name || name.length > 120) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email || !isValidEmail(email) || email.length > 200) {
    return NextResponse.json({ error: "Valid work email is required." }, { status: 400 });
  }
  if (!message || message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: "Please describe what you’re building (at least a short paragraph)." },
      { status: 400 },
    );
  }

  const text = [
    `New inquiry from ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Budget: ${budget || "—"}`,
    `Timeline: ${timeline || "—"}`,
    "",
    "What they're building:",
    message,
  ].join("\n");

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteFacts.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "DevsRoute Website <onboarding@resend.dev>";

  if (resendKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Project inquiry — ${name}`,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error", detail);
      return NextResponse.json(
        { error: "Could not send message. Email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, mode: "email" });
  }

  // Fallback when email provider is not configured — client can mailto
  return NextResponse.json({
    ok: true,
    mode: "mailto",
    mailto: {
      to: siteFacts.email,
      subject: `Project inquiry — ${name}`,
      body: text,
    },
  });
}
