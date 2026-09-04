"use client";

import { skillGroups, tools } from "@/data/skills";
import { ui } from "@/data/ui";

import { useLanguage } from "../language-provider";
import { SectionHeading } from "../section-heading";

export function SkillsSection() {
  const { language } = useLanguage();
  const copy = ui[language];

  return (
    <section id="skills" className="section-pad scroll-mt-20 bg-white">
      <div className="container-shell">
        <SectionHeading
          index="04"
          kicker={copy.sectionSkillsKicker}
          title={copy.sectionSkills}
        />

        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article key={group.title.en} className="bg-white p-6 sm:p-8">
              <div className="mb-8 flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                    {group.title[language]}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {group.description[language]}
                  </p>
                </div>
                <span className="text-xs font-bold text-accent">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-paper px-3 py-2 text-xs font-medium text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-y border-border py-7 md:grid-cols-[0.4fr_1.6fr]">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            {copy.tools}
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-muted">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
