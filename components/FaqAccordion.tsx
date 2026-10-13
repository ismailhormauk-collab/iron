"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { Faq } from "@/lib/faqs";
import { PlusIcon } from "./icons";

type Props = { items: Faq[]; headingLevel?: "h2" | "h3"; defaultOpen?: number | null };

/**
 * WAI-ARIA accordion: each header is a button with aria-expanded/aria-controls,
 * ArrowUp/ArrowDown/Home/End move focus between headers. Answers remain in the
 * DOM (good for SEO) and are made inert while collapsed.
 */
export function FaqAccordion({ items, headingLevel = "h3", defaultOpen = 0 }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const Heading = headingLevel;

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = items.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      buttons.current[next]?.focus();
    }
  }

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
      {items.map((item, i) => {
        const open = openIndex === i;
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.question}>
            <Heading className="font-sans text-base tracking-normal">
              <button
                ref={(el) => {
                  buttons.current[i] = el;
                }}
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left font-semibold text-ink transition hover:bg-paper-soft sm:px-7"
              >
                <span>{item.question}</span>
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full border transition duration-300 ${
                    open ? "rotate-45 border-transparent bg-brand-gradient text-white" : "border-line text-ink"
                  }`}
                  aria-hidden="true"
                >
                  <PlusIcon className="size-4" strokeWidth={2.2} />
                </span>
              </button>
            </Heading>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!open}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 pr-14 text-[0.95rem] leading-relaxed text-body sm:px-7 sm:pr-20">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
