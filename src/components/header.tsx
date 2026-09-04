"use client";

import { ArrowDownToLine, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { profile } from "@/data/profile";
import { ui } from "@/data/ui";

import { useLanguage } from "./language-provider";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const copy = ui[language];
  const [open, setOpen] = useState(false);
  const resumeUrl = profile.resume[language];

  const links = [
    { label: copy.nav.projects, href: "/#projects" },
    { label: copy.nav.experience, href: "/#experience" },
    { label: copy.nav.skills, href: "/#skills" },
    { label: copy.nav.about, href: "/#about" },
    { label: copy.nav.contact, href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-paper/95 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-4 sm:h-[72px] sm:gap-6">
        <Link
          href="/#home"
          className="flex min-w-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-sm font-bold text-white">
            C
          </span>
          <span className="hidden truncate text-sm font-semibold tracking-[-0.02em] sm:block">
            Cien <span className="font-normal text-muted">/ 程红超</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div
            className="flex rounded-full border border-border bg-white p-1"
            aria-label="Language"
          >
            {(["zh", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={language === item}
                onClick={() => setLanguage(item)}
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${
                  language === item
                    ? "bg-ink text-white"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item === "zh" ? "中" : "EN"}
              </button>
            ))}
          </div>

          {resumeUrl ? (
            <a
              href={resumeUrl}
              download
              className="hidden items-center gap-2 rounded-full border border-ink px-4 py-2 text-xs font-semibold transition-colors hover:bg-ink hover:text-white md:flex"
            >
              <ArrowDownToLine size={14} aria-hidden="true" />
              {copy.downloadResume}
            </a>
          ) : (
            <span
              className="hidden cursor-default items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted md:flex"
              title={copy.resumeSoon}
            >
              <ArrowDownToLine size={14} aria-hidden="true" />
              {copy.resumeSoon}
            </span>
          )}

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-border bg-white lg:hidden"
            aria-label={open ? copy.menuClose : copy.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="container-shell border-t border-border bg-paper py-3 lg:hidden"
          aria-label="Mobile"
        >
          <div className="grid">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-border py-4 text-lg font-semibold"
              >
                {link.label}
                <span className="text-xs font-medium text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
