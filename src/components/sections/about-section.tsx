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

        <div className="grid gap-10 lg:grid-cols-[0.34fr_1.66fr] lg:gap-16">
          <aside>
            <div className="sticky top-28 border-t border-ink pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                Current positioning
              </p>
              <p className="mt-4 max-w-xs text-lg font-semibold leading-7 tracking-[-0.03em]">
                {profile.role[language]}
              </p>
              <p className="mt-3 text-sm text-muted">{profile.company}</p>

              <div className="mt-7 border-t border-border pt-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted">
                  Market
                </p>
                <p className="mt-2 text-sm font-semibold">North America</p>
              </div>
            </div>
          </aside>

          <div>
            <div className="grid max-w-5xl gap-6">
              {profile.about[language].map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`leading-[1.72] tracking-[-0.02em] ${
                    index === 0
                      ? "text-xl font-medium sm:text-2xl lg:text-[2rem] lg:leading-[1.55]"
                      : "text-base text-muted sm:text-[1.05rem]"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="mt-8 border-l-2 border-accent bg-paper px-5 py-5 text-lg font-semibold leading-8 tracking-[-0.02em] sm:text-xl">
              “{profile.workingPrinciple[language]}”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
