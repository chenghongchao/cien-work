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
          index="01"
          kicker={copy.sectionAboutKicker}
          title={copy.sectionAbout}
        />

        <div className="grid gap-10 md:grid-cols-[0.4fr_1.6fr] md:gap-12">
          <div>
            <div className="sticky top-28 border-l-2 border-accent pl-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                Position
              </p>
              <p className="mt-3 max-w-[18rem] text-lg font-semibold leading-7">
                {profile.role[language]}
              </p>
              <p className="mt-5 text-sm text-muted">{profile.company}</p>
            </div>
          </div>

          <div className="grid gap-8">
            {profile.about[language].map((paragraph, index) => (
              <p
                key={paragraph}
                className={`max-w-4xl leading-[1.75] tracking-[-0.02em] ${
                  index === 0
                    ? "text-2xl font-medium sm:text-3xl lg:text-4xl"
                    : "text-base text-muted sm:text-lg"
                }`}
              >
                {paragraph}
              </p>
            ))}

            <blockquote className="mt-4 border-y border-border py-7 text-xl font-semibold leading-8 text-accent sm:text-2xl">
              “{profile.workingPrinciple[language]}”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
