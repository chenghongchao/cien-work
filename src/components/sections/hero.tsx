"use client";

import { ArrowDownRight, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { profile } from "@/data/profile";
import { useLanguage } from "../language-provider";

export function Hero() {
  const { language } = useLanguage();

  const copy =
    language === "zh"
      ? {
          eyebrow: "NORTH AMERICA SOCIAL / CREATOR OPERATIONS",
          title1: "把海外社媒做成",
          title2: "真正能运转的业务系统。",
          description:
            "独立负责品牌海外社媒运营，并从 0 搭建美国 Creator / KOL 合作 Pipeline。覆盖内容策略、受众校准、商务判断、合作执行、上线追踪、数据复盘与跨部门项目推进。",
          work: "查看代表项目",
          contact: "联系我",
          portraitLabel: "SOCIAL & CREATOR OPERATIONS",
          status: "Available for Lead / Manager opportunities",
          market: "North America",
          role: "Social Media × Creator Operations",
        }
      : {
          eyebrow: "NORTH AMERICA SOCIAL / CREATOR OPERATIONS",
          title1: "Building social operations",
          title2: "that actually work.",
          description:
            "I independently manage multi-platform social operations and built a U.S. Creator / KOL pipeline from 0 to 1 — spanning content strategy, audience repositioning, commercial evaluation, campaign execution, tracking and cross-functional delivery.",
          work: "View selected work",
          contact: "Contact me",
          portraitLabel: "SOCIAL & CREATOR OPERATIONS",
          status: "Available for Lead / Manager opportunities",
          market: "North America",
          role: "Social Media × Creator Operations",
        };

  return (
    <section
      id="home"
      className="container-shell scroll-mt-24 pb-14 pt-10 sm:pt-16 lg:pb-20 lg:pt-20"
    >
      <div className="mb-8 flex items-center justify-between border-b border-border pb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
        <span>{copy.eyebrow}</span>

        <span className="hidden items-center gap-2 sm:flex">
          <span className="size-2 rounded-full bg-accent" />
          {copy.market}
        </span>
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16">
        {/* LEFT */}
        <div>
          <p className="mb-6 text-sm font-semibold text-accent">
            {profile.positioning[language]}
          </p>

          <h1 className="max-w-[12ch] text-balance text-[clamp(3.2rem,7.5vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
            {copy.title1}
            <br />
            <span className="text-accent">{copy.title2}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {copy.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {copy.work}
              <ArrowDownRight size={17} aria-hidden="true" />
            </Link>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-ink"
            >
              {copy.contact}
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            <span>{copy.role}</span>
            <span>{copy.market}</span>
            <span>2026 Portfolio</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:justify-self-end">
          <div className="absolute -left-5 -top-5 hidden h-full w-full border border-border lg:block" />

          <div className="relative overflow-hidden border border-border bg-white">
            <div className="flex items-center justify-between border-b border-border px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-muted">
              <span>{copy.portraitLabel}</span>
              <span>C.</span>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden bg-[#ece9e4]">
              <Image
                src={profile.portrait}
                alt={`${profile.name} / ${profile.chineseName}`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-5 pb-5 pt-20 text-white">
                <p className="text-xl font-semibold">{profile.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/75">
                  {profile.chineseName}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-border p-4">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted">
                  Current focus
                </p>
                <p className="mt-1 text-sm font-semibold">
                  {copy.role}
                </p>
              </div>

              <ArrowRight
                size={20}
                className="text-accent"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.14em] text-muted">
            <span>{copy.status}</span>
            <span>CIEN.WORK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
