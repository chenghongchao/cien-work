"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { profile, verifiedFacts } from "@/data/profile";
import { localize } from "@/data/types";
import { ui } from "@/data/ui";

import { useLanguage } from "../language-provider";

export function Hero() {
  const { language } = useLanguage();
  const copy = ui[language];

  return (
    <section
      id="home"
      className="container-shell scroll-mt-24 pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20"
    >
      <div className="mb-14 flex items-center justify-between border-b border-border pb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
        <span>{copy.availableProfile}</span>
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-accent" />
          {copy.currentAt} {profile.company}
        </span>
      </div>

      <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="pt-2">
          <p className="mb-7 text-sm font-semibold text-accent">
            {profile.positioning[language]}
          </p>
          <h1 className="max-w-[12ch] text-balance text-[clamp(3.4rem,7.2vw,7.1rem)] font-semibold leading-[0.92] tracking-[-0.075em]">
            {language === "zh" ? (
              <>
                Cien，<br />社媒运营与
                <span className="text-accent"> KOL 合作</span>专员
              </>
            ) : (
              <>
                Cien — Social Media &amp;
                <span className="text-accent"> Influencer Marketing</span>
              </>
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {profile.heroDescription[language]}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {copy.viewProjects}
              <ArrowDownRight size={17} aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold transition-colors hover:border-ink"
            >
              {copy.contactMe}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:justify-self-end">
          <div className="grid grid-cols-[1fr_4.2fr] gap-3">
            <div className="flex flex-col justify-between border border-border bg-white p-3">
              <span className="vertical-label text-[9px] font-bold uppercase tracking-[0.2em] text-muted">
                Social operations
              </span>
              <span className="text-center text-3xl font-semibold text-accent">C.</span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#e6e1d8]">
              <Image
                src={profile.portrait}
                alt={`${profile.name} / ${profile.chineseName}`}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 35vw"
                className="object-cover object-center grayscale-[12%]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-linear-to-t from-black/65 to-transparent p-5 pt-20 text-white">
                <div>
                  <p className="text-lg font-semibold">{profile.name}</p>
                  <p className="text-xs text-white/65">{profile.chineseName}</p>
                </div>
                <p className="text-right text-[9px] font-bold uppercase leading-4 tracking-[0.15em]">
                  {profile.company}
                  <br />2026 — Present
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 border border-border bg-white sm:grid-cols-4">
            {verifiedFacts.map((fact) => (
              <div
                key={fact.value}
                className="border-b border-r border-border p-4 last:border-r-0 sm:border-b-0"
              >
                <strong className="block text-xl tracking-[-0.04em]">
                  {fact.value}
                </strong>
                <span className="mt-1 block text-[10px] leading-4 text-muted">
                  {localize(fact.label, language)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap gap-2 border-t border-border pt-5">
        {profile.focus.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
