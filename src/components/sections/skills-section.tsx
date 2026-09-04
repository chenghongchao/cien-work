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
            <article key={group.title.en} className="bg-white p-6 sm:p-8 lg:p-9">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
                    Capability {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                    {group.title[language]}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                    {group.description[language]}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="border-t border-border py-3 text-xs font-semibold text-muted"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-y border-border py-8 md:grid-cols-[0.35fr_1.65fr]">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
              {copy.tools}
            </h3>
            <p className="mt-2 text-xs leading-5 text-muted">
              Social · Creator · Content · Operations
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-paper px-3 py-2 text-xs font-semibold text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
