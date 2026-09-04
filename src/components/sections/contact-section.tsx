"use client";

import { ArrowUpRight, Mail } from "lucide-react";

import { profile } from "@/data/profile";
import { ui } from "@/data/ui";

import { ContactForm } from "../contact-form";
import { useLanguage } from "../language-provider";

export function ContactSection() {
  const { language } = useLanguage();
  const copy = ui[language];

  return (
    <section id="contact" className="scroll-mt-20 bg-accent py-16 text-white sm:py-20 lg:py-24">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
          <div>
            <div className="flex gap-3 border-t border-white/30 pt-5 text-xs font-semibold uppercase tracking-[0.16em]">
              <span>06</span>
              <span className="text-white/55">{copy.sectionContactKicker}</span>
            </div>

            <h2 className="mt-7 max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              {copy.contactTitle}
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/72">
              {language === "zh"
                ? "目标岗位：海外社媒运营 / Creator Operations Lead / Manager。欢迎品牌侧、跨境电商与出海团队交流。"
                : "Target roles: Social Media Operations / Creator Operations Lead or Manager. Open to brand-side and cross-border teams focused on North America."}
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 flex max-w-lg items-center justify-between border-y border-white/35 py-4 text-sm font-semibold transition-colors hover:border-white"
            >
              <span className="flex items-center gap-3">
                <Mail size={17} aria-hidden="true" />
                {profile.email}
              </span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="border-t border-white/30 pt-5">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
              {copy.sectionContact}
            </p>
            <ContactForm />
            <p className="mt-4 max-w-xl text-xs leading-5 text-white/55">
              {copy.contactNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
