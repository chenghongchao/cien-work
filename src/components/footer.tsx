"use client";

import Link from "next/link";

import { profile } from "@/data/profile";
import { ui } from "@/data/ui";

import { useLanguage } from "./language-provider";

export function Footer() {
  const { language } = useLanguage();
  const copy = ui[language];

  return (
    <footer className="border-t border-border bg-paper py-8">
      <div className="container-shell grid gap-6 text-xs text-muted sm:grid-cols-3 sm:items-end">
        <Link href="/#home" className="flex items-center gap-3 text-ink">
          <span className="grid size-9 place-items-center rounded-full bg-ink font-bold text-white">
            C
          </span>
          <span className="font-semibold">Cien / 程红超</span>
        </Link>
        <p className="sm:text-center">{copy.footerRole}</p>
        <p className="sm:text-right">
          © {new Date().getFullYear()} Cien. {copy.rights}.
        </p>
        {profile.location ? <p>{profile.location}</p> : null}
      </div>
    </footer>
  );
}
