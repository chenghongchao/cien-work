"use client";

import { experience } from "@/data/experience";
import { ui } from "@/data/ui";

import { useLanguage } from "../language-provider";
import { SectionHeading } from "../section-heading";

export function ExperienceSection() {
  const { language } = useLanguage();
  const copy = ui[language];

  return (
    <section id="experience" className="section-pad scroll-mt-20 bg-paper">
      <div className="container-shell">
        <SectionHeading
          index="02"
          kicker={copy.sectionExperienceKicker}
          title={copy.sectionExperience}
        />

        <article className="grid gap-12 lg:grid-cols-[0.42fr_1.58fr] lg:gap-20">
          <aside>
            <div className="sticky top-28 border-t border-ink pt-5">
              <p className="text-4xl font-semibold tracking-[-0.06em]">
                {experience.company}
              </p>
              <p className="mt-3 text-sm font-semibold text-accent">
                {experience.period}
              </p>
              <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
                {experience.context[language]}
              </p>
            </div>
          </aside>

          <div>
            <h3 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
              {experience.role[language]}
            </h3>

            <div className="mt-10 grid gap-6">
              {experience.groups.map((group, groupIndex) => (
                <section
                  key={group.title.en}
                  className="grid gap-5 border-t border-border pt-6 sm:grid-cols-[0.42fr_1.58fr]"
                >
                  <div>
                    <span className="text-[10px] font-bold text-accent">
                      {String(groupIndex + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mt-2 text-lg font-semibold tracking-[-0.03em]">
                      {group.title[language]}
                    </h4>
                  </div>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {group.items[language].map((item) => (
                      <li
                        key={item}
                        className="min-h-28 border border-border bg-white p-5 text-sm leading-7 text-muted"
                      >
                        <span className="mb-4 block h-px w-8 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
