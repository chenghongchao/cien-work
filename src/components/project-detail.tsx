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

  const local =
    language === "zh"
      ? {
          caseStudy: "CASE STUDY",
          overview: "PROJECT OVERVIEW",
          selectedEvidence: "SELECTED EVIDENCE",
          visualTitle: "真实案例图预留位",
          visualNote: "后续将替换为后台数据、Creator 内容、流程或 Campaign 截图。",
          visualSlot: "PROJECT VISUAL",
          resultLabel: "BUSINESS RESULT",
          nextLabel: "CONTINUE TO NEXT CASE",
        }
      : {
          caseStudy: "CASE STUDY",
          overview: "PROJECT OVERVIEW",
          selectedEvidence: "SELECTED EVIDENCE",
          visualTitle: "Real project visuals reserved",
          visualNote: "To be replaced with selected analytics, creator content, workflow, or campaign screenshots.",
          visualSlot: "PROJECT VISUAL",
          resultLabel: "BUSINESS RESULT",
          nextLabel: "CONTINUE TO NEXT CASE",
        };

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

  const decisionSections = [
    {
      index: "03",
      label: copy.detailLabels.diagnosis,
      items: project.diagnosis[language],
    },
    {
      index: "04",
      label: copy.detailLabels.decision,
      items: project.decision[language],
    },
  ];

  const indexLabels = [
    copy.detailLabels.background,
    copy.detailLabels.problem,
    copy.detailLabels.diagnosis,
    copy.detailLabels.decision,
    copy.detailLabels.execution,
    copy.detailLabels.evidence,
    copy.detailLabels.result,
    copy.detailLabels.reflection,
  ];

  return (
    <article className="bg-paper text-ink">
      <header className="container-shell pb-14 pt-8 sm:pb-20 sm:pt-12 lg:pb-24">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-xs font-semibold text-muted transition-colors hover:text-ink sm:mb-14"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          {copy.backHome}
        </Link>

        <div className="mb-7 flex items-center justify-between border-b border-border pb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-muted">
          <span>{local.caseStudy} / {project.number}</span>
          <span>{project.category[language]}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14">
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-accent">
                {local.overview}
              </p>

              <h1 className="max-w-[13ch] text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                {project.title[language]}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {project.summary[language]}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 lg:mt-14">
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

        <div className="mt-10 grid border-l border-t border-border sm:grid-cols-3">
          {project.evidence.slice(0, 3).map((item) => (
            <div
              key={`${project.slug}-${item.value}`}
              className="min-h-36 border-b border-r border-border bg-white p-5 sm:min-h-40 sm:p-6"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted">
                {local.selectedEvidence}
              </p>
              <strong className="mt-5 block text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                {item.value}
              </strong>
              <p className="mt-3 max-w-[20ch] text-xs leading-5 text-muted">
                {item.label[language]}
              </p>
            </div>
          ))}
        </div>
      </header>

      <div className="border-t border-border bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-14 lg:grid-cols-[0.34fr_1.66fr] lg:gap-20">
          <aside>
            <div className="sticky top-28 border-t border-ink pt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                {copy.projectIndex}
              </p>

              <ol className="mt-6 grid gap-3 text-xs leading-5 text-muted">
                {indexLabels.map((label, index) => (
                  <li key={`${index}-${label}`} className="grid grid-cols-[1.75rem_1fr] gap-2">
                    <span className="text-[9px] font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div>
            {textSections.map((section) => (
              <section
                key={section.label}
                className="grid gap-5 border-t border-border py-9 sm:grid-cols-[0.38fr_1.62fr] sm:py-11"
              >
                <h2 className="flex gap-3 text-sm font-semibold">
                  <span className="text-accent">{section.index}</span>
                  {section.label}
                </h2>
                <p className="max-w-3xl text-xl leading-9 tracking-[-0.025em] sm:text-2xl">
                  {section.content}
                </p>
              </section>
            ))}

            {decisionSections.map((section) => (
              <section
                key={section.label}
                className="grid gap-5 border-t border-border py-9 sm:grid-cols-[0.38fr_1.62fr] sm:py-11"
              >
                <h2 className="flex gap-3 text-sm font-semibold">
                  <span className="text-accent">{section.index}</span>
                  {section.label}
                </h2>

                <ol className="grid gap-0 border-t border-border">
                  {section.items.map((item, index) => (
                    <li
                      key={item}
                      className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-border py-4 text-sm leading-7 text-muted sm:text-base"
                    >
                      <span className="text-[10px] font-bold text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </section>
            ))}

            <section className="grid gap-5 border-t border-border py-9 sm:grid-cols-[0.38fr_1.62fr] sm:py-11">
              <h2 className="flex gap-3 text-sm font-semibold">
                <span className="text-accent">05</span>
                {copy.detailLabels.execution}
              </h2>

              <ul className="grid gap-3 sm:grid-cols-2">
                {project.execution[language].map((item, index) => (
                  <li
                    key={item}
                    className="min-h-36 border border-border bg-paper p-5 text-sm leading-7 text-muted"
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-accent">
                        STEP {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="size-2 rounded-full bg-accent" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="border-t border-border py-9 sm:py-11">
              <div className="mb-6 grid gap-5 sm:grid-cols-[0.38fr_1.62fr]">
                <h2 className="flex gap-3 text-sm font-semibold">
                  <span className="text-accent">06</span>
                  {copy.detailLabels.evidence}
                </h2>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                    {local.visualTitle}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                    {local.visualNote}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="grid min-h-72 place-items-center border border-dashed border-border bg-paper p-6 sm:min-h-80">
                  <div className="text-center">
                    <div className="mx-auto mb-4 grid size-11 place-items-center rounded-full border border-border bg-white text-lg text-accent">
                      +
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                      {local.visualSlot} 01
                    </p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="grid min-h-36 place-items-center border border-dashed border-border bg-paper p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                      {local.visualSlot} 02
                    </p>
                  </div>
                  <div className="grid min-h-36 place-items-center border border-dashed border-border bg-paper p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                      {local.visualSlot} 03
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {project.evidence.map((item) => (
                  <div key={item.value} className="border border-border p-5">
                    <strong className="block text-3xl font-semibold tracking-[-0.055em]">
                      {item.value}
                    </strong>
                    <span className="mt-3 block text-sm leading-6 text-muted">
                      {item.label[language]}
                    </span>
                    {item.detail ? (
                      <span className="mt-1 block text-xs font-semibold text-accent">
                        {item.detail[language]}
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-5 border-t border-border py-9 sm:grid-cols-[0.38fr_1.62fr] sm:py-11">
              <h2 className="flex gap-3 text-sm font-semibold">
                <span className="text-accent">07</span>
                {copy.detailLabels.result}
              </h2>

              <div className="bg-ink p-6 text-white sm:p-8">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e46d7d]">
                  {local.resultLabel}
                </p>
                <p className="mt-5 text-2xl font-semibold leading-9 tracking-[-0.035em] sm:text-3xl sm:leading-10">
                  {project.result[language]}
                </p>
              </div>
            </section>

            <section className="grid gap-5 border-y border-border py-9 sm:grid-cols-[0.38fr_1.62fr] sm:py-11">
              <h2 className="flex gap-3 text-sm font-semibold">
                <span className="text-accent">08</span>
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
        <div className="container-shell">
          <div className="mb-8 flex items-center justify-between border-b border-white/15 pb-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">
            <span>{copy.nextProject}</span>
            <span>{local.nextLabel}</span>
          </div>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group grid gap-6 md:grid-cols-[0.5fr_1.5fr] md:items-end"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e46d7d]">
                CASE {nextProject.number}
              </p>
              <p className="mt-3 text-sm text-white/45">
                {nextProject.category[language]}
              </p>
            </div>

            <div className="flex items-end justify-between gap-6">
              <h2 className="max-w-[17ch] text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
                {nextProject.title[language]}
              </h2>
              <ArrowRight
                size={32}
                className="shrink-0 transition-transform group-hover:translate-x-2"
                aria-hidden="true"
              />
            </div>
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
