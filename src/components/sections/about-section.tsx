"use client";

import { profile } from "@/data/profile";
import { ui } from "@/data/ui";

import { useLanguage } from "../language-provider";
import { SectionHeading } from "../section-heading";

export function AboutSection() {
  const { language } = useLanguage();
  const copy = ui[language];

  return (
    <section id="about" className="section-pad scroll-mt-20 bg-white">
      <div className="container-shell">
        <SectionHeading
          index="05"
          kicker={copy.sectionAboutKicker}
          title={copy.sectionAbout}
        />

        <div className="grid gap-12 lg:grid-cols-[0.38fr_1.62fr] lg:gap-20">
          <aside>
            <div className="sticky top-28 border-t border-ink pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                Current positioning
              </p>
              <p className="mt-4 max-w-xs text-xl font-semibold leading-8 tracking-[-0.03em]">
                {profile.role[language]}
              </p>
              <p className="mt-4 text-sm text-muted">{profile.company}</p>

              <div className="mt-8 border-t border-border pt-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted">
                  Market
                </p>
                <p className="mt-2 text-sm font-semibold">North America</p>
              </div>
            </div>
          </aside>

          <div>
            <div className="grid gap-8">
              {profile.about[language].map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`max-w-5xl leading-[1.72] tracking-[-0.025em] ${
                    index === 0
                      ? "text-2xl font-medium sm:text-3xl lg:text-[2.6rem] lg:leading-[1.45]"
                      : "text-base text-muted sm:text-lg"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="mt-10 border-l-2 border-accent bg-paper px-6 py-6 text-xl font-semibold leading-8 tracking-[-0.025em] sm:text-2xl">
              “{profile.workingPrinciple[language]}”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
