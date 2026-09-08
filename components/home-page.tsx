"use client";

import { HomeEnvironment } from "@/components/home-environment";
import { HomeHeroVisual } from "@/components/home-hero";
import { HomeContinuity } from "@/components/home-continuity";
import { HomeCapabilities } from "@/components/home-capabilities";
import { OperatingPerspective } from "@/components/operating-perspective";
import { StageExplorer } from "@/components/stage-explorer";
import { ProofComposition } from "@/components/proof-composition";
import { SelectedWork } from "@/components/selected-work";
import { ExperienceComposition } from "@/components/experience-composition";
import { ContactLinks } from "@/components/contact-links";
import { NextScene } from "@/components/next-scene";
import { useSite } from "@/components/site-provider";

export function HomePage() {
  const { t } = useSite();
  const stages = t.ownership.map(item => ({ ...item, fields: (["evaluate", "decision", "coordinate", "output"] as const).map(key => ({ label: t.common[key], value: item[key] })) }));
  return <main id="top" className="home-world" data-motion="static">
    <HomeEnvironment /><HomeContinuity />
    <div id="main-content" className="home-content" tabIndex={-1}>
      <section className="scene scene-hero" data-scene="hero" aria-labelledby="hero-title">
        <div className="hero-stage"><HomeHeroVisual /><div className="hero-copy" data-content>
          <h1 id="hero-title">CIEN</h1><p className="hero-role micro">{t.hero.role}</p><p className="hero-thesis">{t.hero.thesis.map((line, index) => <span key={index}>{line}</span>)}</p><p className="hero-principles micro">{t.hero.principles}</p>
          <div className="hero-actions"><a className="text-link" href="#operate">{t.common.capabilities}<span aria-hidden="true">↗</span></a><a className="text-link" href="#proof">{t.common.results}<span aria-hidden="true">↘</span></a></div>
        </div></div>
        <div className="hero-foot scene-margin micro" data-content><span>{t.hero.location}</span><a href="#operator">{t.common.scroll}<span aria-hidden="true">↓</span></a></div>
      </section>
      <section id="operator" className="scene scene-operator" data-scene="operator" aria-labelledby="operator-title">
        <div className="operator-composition scene-margin" data-content><p className="scene-caption micro">{t.home.operator}</p><h2 id="operator-title" className="editorial-aside operator-aside">{t.home.operatorTitle}</h2><OperatingPerspective /><p className="operator-intro">{t.home.operatorIntro}</p></div>
      </section>
      <section id="ownership" className="scene scene-ownership" data-scene="ownership" aria-labelledby="ownership-title">
        <div className="scene-margin" data-content><p className="scene-caption micro">{t.home.chain}</p><div className="section-intro"><h2 id="ownership-title">{t.home.chainTitle}</h2><p>{t.home.chainIntro}</p></div><StageExplorer stages={stages} label={t.home.chainTitle} /></div>
      </section>
      <section id="proof" className="scene scene-proof" data-scene="proof" aria-labelledby="proof-title"><div className="scene-margin" data-content><h2 id="proof-title" className="scene-caption micro">{t.home.proof}</h2><ProofComposition /></div></section>
      <section id="operate" className="scene scene-operate" data-scene="operate" aria-labelledby="operate-title"><div className="scene-margin" data-content><p className="scene-caption micro">{t.home.operate}</p><h2 id="operate-title" className="section-title">{t.home.operateTitle}</h2><HomeCapabilities /></div></section>
      <section id="work" className="scene scene-work" data-scene="work" aria-labelledby="work-title"><div className="scene-margin" data-content><p className="scene-caption micro">{t.home.work}</p><h2 id="work-title" className="section-title">{t.home.workTitle}</h2><SelectedWork /></div></section>
      <section id="experience" className="scene scene-experience" data-scene="experience" aria-labelledby="experience-title"><div className="scene-margin" data-content><p className="scene-caption micro">{t.home.experience}</p><h2 id="experience-title" className="section-title">{t.home.experienceTitle}</h2><ExperienceComposition /></div></section>
      <section id="ai-workflow" className="scene scene-ai" data-scene="ai" aria-labelledby="ai-title"><div className="scene-margin ai-composition" data-content><p className="micro">{t.home.ai}</p><h2 id="ai-title">{t.home.aiTitle}</h2><p>{t.home.aiTools}</p>{process.env.NODE_ENV === "development" && <p className="ai-approval-note">{t.home.aiPlaceholder}</p>}</div></section>
      <section id="contact-home" className="scene scene-contact" data-scene="contact" aria-labelledby="contact-title"><div className="scene-margin" data-content><p className="micro">{t.home.contact}</p><h2 id="contact-title" className="section-title">{t.home.contactTitle}</h2><ContactLinks /></div></section>
      <div className="scene-closing" data-scene="closing" data-content><NextScene to="capabilities" title={t.home.nextTitle} /></div>
    </div>
  </main>;
}
