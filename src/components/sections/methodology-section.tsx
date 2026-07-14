"use client";

import { methodology } from "@/data/methodology";
import { ui } from "@/data/ui";

import { useLanguage } from "../language-provider";
import { SectionHeading } from "../section-heading";

export function MethodologySection() {
  const { language } = useLanguage();
  const copy = ui[language];

  return (
    <section className="section-pad bg-paper">
      <div className="container-shell">
        <SectionHeading
          index="05"
          kicker={copy.sectionMethodKicker}
          title={copy.sectionMethod}
        />

        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <p className="max-w-xl text-lg leading-8 text-muted">
            {methodology.intro[language]}
          </p>

          <ol className="border-t border-ink">
            {methodology.steps.map((step, index) => (
              <li
                key={step.en}
                className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-border py-5 transition-colors hover:text-accent sm:grid-cols-[5rem_1fr_auto]"
              >
                <span className="text-xs font-bold text-accent">
                  0{index + 1}
                </span>
                <span className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                  {step[language]}
                </span>
                <span
                  className="size-2 rounded-full border border-current transition-colors group-hover:bg-current"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
