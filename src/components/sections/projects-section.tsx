"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { projects } from "@/data/projects";
import { ui } from "@/data/ui";

import { useLanguage } from "../language-provider";
import { ProjectVisual } from "../project-visual";
import { SectionHeading } from "../section-heading";

export function ProjectsSection() {
  const { language } = useLanguage();
  const copy = ui[language];

  return (
    <section id="projects" className="section-pad scroll-mt-20 border-y border-border bg-[#f4f2ed]">
      <div className="container-shell">
        <SectionHeading
          index="03"
          kicker={copy.sectionProjectsKicker}
          title={copy.sectionProjects}
          note={copy.sectionProjectsNote}
        />

        <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8">
          {projects.map((project, index) => {
            const featured = index === 0;

            return (
              <article
                key={project.slug}
                className="overflow-hidden border border-border bg-white"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={`group grid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                    featured
                      ? "lg:grid-cols-[1.18fr_0.82fr]"
                      : "lg:grid-cols-[0.92fr_1.08fr]"
                  }`}
                >
                  <div className={featured ? "lg:order-1" : "lg:order-2"}>
                    <div className="h-full overflow-hidden">
                      <div className="h-full transition-transform duration-500 group-hover:scale-[1.01]">
                        <ProjectVisual project={project} />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex min-h-full flex-col justify-between p-6 sm:p-8 lg:p-10 ${
                      featured ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-6 border-b border-border pb-5">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                            Case {project.number}
                          </p>
                          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                            {project.category[language]}
                          </p>
                        </div>

                        <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                          <ArrowUpRight size={17} aria-hidden="true" />
                        </span>
                      </div>

                      <h3 className="mt-7 max-w-[17ch] text-3xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-4xl">
                        {project.title[language]}
                      </h3>

                      <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
                        {project.summary[language]}
                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="grid grid-cols-3 border-l border-t border-border">
                        {project.evidence.slice(0, 3).map((item) => (
                          <div
                            key={`${project.slug}-${item.value}`}
                            className="min-h-24 border-b border-r border-border p-3 sm:min-h-28 sm:p-4"
                          >
                            <strong className="block text-xl font-semibold tracking-[-0.05em] sm:text-2xl">
                              {item.value}
                            </strong>
                            <span className="mt-2 block text-[9px] font-semibold leading-4 text-muted">
                              {item.label[language]}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em]">
                        <span className="text-accent">{copy.viewCase}</span>
                        <span className="text-muted">
                          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
