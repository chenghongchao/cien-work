"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { profile } from "@/data/profile";
import { projects, type Project } from "@/data/projects";
import { ui } from "@/data/ui";

import { useLanguage } from "./language-provider";
import { ProjectVisual } from "./project-visual";

export function ProjectDetail({ project }: { project: Project }) {
  const { language } = useLanguage();
  const copy = ui[language];
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const textSections = [
    {
      index: "01",
      label: copy.detailLabels.background,
      content: project.background[language],
    },
    {
      index: "02",
      label: copy.detailLabels.problem,
      content: project.problem[language],
    },
  ];

  return (
    <article>
      <header className="container-shell pb-16 pt-10 sm:pt-14 lg:pb-24">
        <Link
          href="/#projects"
          className="mb-12 inline-flex items-center gap-2 text-xs font-semibold text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          {copy.backHome}
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-accent">
                <span>{project.number}</span>
                <span className="text-muted">{project.category[language]}</span>
              </p>
              <h1 className="max-w-[13ch] text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                {project.title[language]}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
                {project.summary[language]}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 lg:mt-16">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <ProjectVisual project={project} />
        </div>
      </header>

      <div className="bg-white py-20 sm:py-24">
        <div className="container-shell grid gap-16 lg:grid-cols-[0.42fr_1.58fr] lg:gap-20">
          <aside>
            <div className="sticky top-28 border-t border-ink pt-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                {copy.projectIndex}
              </p>
              <ol className="mt-6 grid gap-3 text-sm text-muted">
                {Object.values(copy.detailLabels).map((label, index) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="w-6 text-[10px] text-accent">
                      0{index + 1}
                    </span>
                    {label}
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div>
            {textSections.map((section) => (
              <section
                key={section.label}
                className="grid gap-5 border-t border-border py-10 sm:grid-cols-[0.42fr_1.58fr]"
              >
                <h2 className="flex gap-3 text-sm font-semibold">
                  <span className="text-accent">{section.index}</span>
                  {section.label}
                </h2>
                <p className="max-w-3xl text-xl leading-9 tracking-[-0.02em] sm:text-2xl">
                  {section.content}
                </p>
              </section>
            ))}

            <section className="grid gap-5 border-t border-border py-10 sm:grid-cols-[0.42fr_1.58fr]">
              <h2 className="flex gap-3 text-sm font-semibold">
                <span className="text-accent">03</span>
                {copy.detailLabels.method}
              </h2>
              <ol className="grid gap-3">
                {project.method[language].map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border pb-4 text-base leading-7 text-muted"
                  >
                    <span className="text-xs font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </section>

            <section className="grid gap-5 border-t border-border py-10 sm:grid-cols-[0.42fr_1.58fr]">
              <h2 className="flex gap-3 text-sm font-semibold">
                <span className="text-accent">04</span>
                {copy.detailLabels.execution}
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.execution[language].map((item) => (
                  <li
                    key={item}
                    className="min-h-32 border border-border bg-paper p-5 text-sm leading-7 text-muted"
                  >
                    <span className="mb-4 block size-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-5 border-t border-border py-10 sm:grid-cols-[0.42fr_1.58fr]">
              <h2 className="flex gap-3 text-sm font-semibold">
                <span className="text-accent">05</span>
                {copy.detailLabels.result}
              </h2>
              <p className="border-l-2 border-accent pl-6 text-2xl font-semibold leading-9 tracking-[-0.03em] sm:text-3xl">
                {project.result[language]}
              </p>
            </section>

            <section className="grid gap-5 border-y border-border py-10 sm:grid-cols-[0.42fr_1.58fr]">
              <h2 className="flex gap-3 text-sm font-semibold">
                <span className="text-accent">06</span>
                {copy.detailLabels.reflection}
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-muted">
                {project.reflection[language]}
              </p>
            </section>
          </div>
        </div>
      </div>

      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="container-shell grid gap-10 md:grid-cols-[0.5fr_1.5fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e46d7d]">
              {copy.nextProject}
            </p>
            <p className="mt-5 text-sm text-white/50">{nextProject.category[language]}</p>
          </div>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-end justify-between gap-6 border-t border-white/20 pt-6"
          >
            <h2 className="max-w-[16ch] text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              {nextProject.title[language]}
            </h2>
            <ArrowRight
              size={32}
              className="shrink-0 transition-transform group-hover:translate-x-2"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      <section className="bg-accent py-12 text-white">
        <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xl font-semibold leading-8">
            {profile.workingPrinciple[language]}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 text-sm font-bold"
          >
            {copy.contactMe}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
    </article>
  );
}
