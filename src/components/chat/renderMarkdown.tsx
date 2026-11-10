import type { ReactNode } from "react";

export function renderMarkdown(text: string): ReactNode {
  const lines = text.split("\n");

  return (
    <>
      {lines.map((line, li) => {
        const trimmed = line.trim();

        // numbered list: "1. ..."
        const numbered = /^(\d+)\.\s+(.+)$/.exec(trimmed);
        if (numbered) {
          return (
            <div key={li} className="flex gap-1.5 mt-1">
              <span className="shrink-0 font-semibold">{numbered[1]}.</span>
              <span>{inlineParse(numbered[2])}</span>
            </div>
          );
        }

        // bullet list: "- ..."
        const bullet = /^[-•]\s+(.+)$/.exec(trimmed);
        if (bullet) {
          return (
            <div key={li} className="flex gap-1.5 mt-1">
              <span className="shrink-0">•</span>
              <span>{inlineParse(bullet[1])}</span>
            </div>
          );
        }

        // empty line → small gap
        if (!trimmed) {
          return <div key={li} className="h-1" />;
        }

        return <p key={li} className="mt-1 first:mt-0">{inlineParse(trimmed)}</p>;
      })}
    </>
  );
}

function inlineParse(text: string): ReactNode {
  // split on **bold** and bare URLs
  const parts = text.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s,)]+)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-[var(--brand-600)] bg-[var(--brand-50)] px-0.5 rounded">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (/^https?:\/\//.test(part)) {
      const label = part.replace(/^https?:\/\//, "").replace(/\/$/, "");
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-[var(--brand-600)] underline underline-offset-2 decoration-[var(--brand-300)] hover:decoration-[var(--brand-600)] transition-colors break-all"
        >
          {label}
        </a>
      );
    }
    return part;
  });
}
