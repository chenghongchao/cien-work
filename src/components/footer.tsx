"use client";

import Link from "next/link";

import { profile } from "@/data/profile";
import { ui } from "@/data/ui";

import { useLanguage } from "./language-provider";

export function Footer() {
  const { language } = useLanguage();
  const copy = ui[language];

  return (
    <footer className="border-t border-border bg-paper py-8 sm:py-10">
      <div className="container-shell grid gap-7 text-xs text-muted md:grid-cols-[1fr_auto_1fr] md:items-end">
        <Link href="/#home" className="flex items-center gap-3 text-ink">
          <span className="grid size-9 place-items-center rounded-full bg-ink font-bold text-white">
            C
          </span>
          <span>
            <strong className="block font-semibold">Cien / 程红超</strong>
            <span className="mt-1 block text-[11px] text-muted">CIEN.WORK</span>
          </span>
        </Link>

        <div className="md:text-center">
          <p className="font-semibold text-ink">{copy.footerRole}</p>
          <p className="mt-1 text-[11px]">North America · Lead / Manager</p>
        </div>

        <div className="md:text-right">
          <p>© {new Date().getFullYear()} Cien. {copy.rights}.</p>
          {profile.email ? (
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 inline-block text-[11px] font-semibold text-ink hover:text-accent"
            >
              {profile.email}
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
