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
    <section id="projects" className="section-pad scroll-mt-20 bg-ink text-white">
      <div className="container-shell">
        <SectionHeading
          index="03"
          kicker={copy.sectionProjectsKicker}
          title={copy.sectionProjects}
          note={copy.sectionProjectsNote}
          inverse
        />

        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={index % 2 === 1 ? "md:mt-20" : ""}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e46d7d]"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 group-hover:scale-[1.015]">
                    <ProjectVisual project={project} />
                  </div>
                </div>
                <div className="border-t border-white/20 pt-5">
                  <div className="mb-4 flex items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                    <span>{project.category[language]}</span>
                    <ArrowUpRight
                      size={18}
                      className="text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
                    {project.title[language]}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
                    {project.summary[language]}
                  </p>
                  <span className="mt-6 inline-block text-xs font-semibold text-[#e46d7d]">
                    {copy.viewCase}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
