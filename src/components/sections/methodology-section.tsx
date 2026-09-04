"use client";

import { methodology } from "@/data/methodology";
import { ui } from "@/data/ui";

import { useLanguage } from "../language-provider";
import { SectionHeading } from "../section-heading";

export function MethodologySection() {
  const { language } = useLanguage();
  const copy = ui[language];

  return (
    <section className="section-pad bg-ink text-white">
      <div className="container-shell">
        <SectionHeading
          index="03"
          kicker={copy.sectionMethodKicker}
          title={copy.sectionMethod}
          inverse
        />

        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="max-w-xl text-xl leading-9 tracking-[-0.02em] text-white/70 sm:text-2xl">
              {methodology.intro[language]}
            </p>
            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e46d7d]">
              Diagnose → Decide → Execute → Review → Systemize
            </p>
          </div>

          <ol className="border-t border-white/25">
            {methodology.steps.map((step, index) => (
              <li
                key={step.en}
                className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-white/15 py-6 sm:grid-cols-[5rem_1fr_auto]"
              >
                <span className="text-xs font-bold text-[#e46d7d]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xl font-semibold tracking-[-0.03em] text-white transition-colors group-hover:text-[#e46d7d] sm:text-2xl">
                  {step[language]}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Step
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
