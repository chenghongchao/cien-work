"use client";

import { useSite } from "@/components/site-provider";
import { PageVisual } from "@/components/page-visual";
import { HomeCapabilities } from "@/components/home-capabilities";
import { ProofComposition } from "@/components/proof-composition";
import { SelectedWork } from "@/components/selected-work";
import { StageExplorer } from "@/components/stage-explorer";
import { ContactLinks } from "@/components/contact-links";
import { NextScene } from "@/components/next-scene";
import { ResultEvidence } from "@/components/result-evidence";
import type { PageKey } from "@/content/page-visuals";

type SecondaryPage = Exclude<PageKey, "home">;
const nextPage: Record<SecondaryPage, PageKey> = { capabilities: "results", results: "methodology", methodology: "contact", contact: "home" };

export function PrimaryPage({ page }: { page: SecondaryPage }) {
  const { t } = useSite();
  const copy = t.pages[page];
  const cycle = t.methodology.cycle.map(item => ({ ...item, fields: (["input", "evaluate", "decision", "output", "nextAction"] as const).map(key => ({ label: t.common[key], value: item[key] })) }));
  const pipeline = t.methodology.pipeline.map(item => ({ ...item, fields: [{ label: t.common.scope, value: item.text }, { label: t.common.stage, value: item.stages }, { label: t.common.output, value: item.output }] }));
  return <main id="top" className={`page-world page-${page}`}>
    <div className="page-grain" aria-hidden="true" />
    <div id="main-content" tabIndex={-1}>
      <section className="page-opening" aria-labelledby="page-title">
        <div className="page-image-stage" data-image-depth><PageVisual page={page} priority /></div>
        <div className="page-introduction scene-margin"><p className="micro">{copy.eyebrow}</p><h1 id="page-title">{copy.title}</h1><p className="page-lead">{copy.intro}</p><a href="#page-body" className="text-link">{page === "contact" ? t.pages.contact.bodyTitle : t.common.scroll}<span aria-hidden="true">↓</span></a></div>
      </section>
      <div id="page-body" className="page-body scene-margin">
        <div className="section-intro"><h2>{copy.bodyTitle}</h2><p>{copy.bodyIntro}</p></div>
        {page === "capabilities" && <HomeCapabilities />}
        {page === "results" && <><nav className="results-jump" aria-label={copy.bodyTitle}><a className="action-link" href="#evidence">{t.common.evidence}<span aria-hidden="true">↓</span></a><a className="text-link" href="#projects">{t.common.viewAll}<span aria-hidden="true">↓</span></a></nav><ProofComposition compact /><ResultEvidence /><section id="projects" aria-labelledby="projects-title"><div className="section-intro"><h2 id="projects-title">{t.home.workTitle}</h2></div><SelectedWork /></section></>}
        {page === "methodology" && <><StageExplorer stages={cycle} label={copy.bodyTitle} variant="cycle" /><div className="pipeline-intro section-intro"><h2>{t.methodology.pipelineTitle}</h2><p>{t.methodology.pipelineIntro}</p></div><StageExplorer stages={pipeline} label={t.methodology.pipelineTitle} variant="pipeline" /></>}
        {page === "contact" && <ContactLinks />}
      </div>
      <NextScene to={nextPage[page]} title={copy.nextTitle} />
    </div>
  </main>;
}
