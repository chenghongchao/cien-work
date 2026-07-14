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
    <section id="contact" className="scroll-mt-20 bg-accent py-20 text-white sm:py-24 lg:py-28">
      <div className="container-shell">
        <div className="mb-12 grid gap-7 border-t border-white/25 pt-5 md:grid-cols-[0.4fr_1.15fr_0.65fr] md:gap-10">
          <div className="flex gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
            <span className="text-white">06</span>
            <span className="text-white/55">{copy.sectionContactKicker}</span>
          </div>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            {copy.sectionContact}
          </h2>
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="max-w-xl text-2xl font-semibold leading-[1.35] tracking-[-0.035em] sm:text-3xl">
              {copy.contactTitle}
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-10 flex max-w-xl items-center justify-between border-b border-white/40 py-5 text-sm font-semibold transition-colors hover:border-white"
            >
              <span className="flex items-center gap-3">
                <Mail size={18} aria-hidden="true" />
                {profile.email}
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>

            {profile.socials.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-4">
                {profile.socials.map((social) => (
                  <a key={social.href} href={social.href}>
                    {social.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <ContactForm />
            <p className="mt-5 max-w-xl text-xs leading-5 text-white/55">
              {copy.contactNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
