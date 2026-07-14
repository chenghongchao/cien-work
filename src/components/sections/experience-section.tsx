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

        <article className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[0.45fr_1.55fr] lg:gap-16">
          <div>
            <p className="text-3xl font-semibold tracking-[-0.05em]">
              {experience.company}
            </p>
            <p className="mt-3 text-sm font-medium text-accent">
              {experience.period}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              {experience.context[language]}
            </p>
          </div>

          <div>
            <h3 className="mb-10 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">
              {experience.role[language]}
            </h3>

            <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              {experience.groups.map((group, groupIndex) => (
                <div key={group.title.en} className="bg-white p-6 sm:p-7">
                  <div className="mb-8 flex items-center justify-between">
                    <h4 className="font-semibold">{group.title[language]}</h4>
                    <span className="text-xs font-semibold text-accent">
                      0{groupIndex + 1}
                    </span>
                  </div>
                  <ul className="grid gap-4">
                    {group.items[language].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-muted"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
