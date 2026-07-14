"use client";

import { ArrowUpRight } from "lucide-react";
import type { FormEvent } from "react";

import { profile } from "@/data/profile";
import { ui } from "@/data/ui";

import { useLanguage } from "./language-provider";

export function ContactForm() {
  const { language } = useLanguage();
  const copy = ui[language];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = language === "zh" ? `网站联系：${name}` : `Website inquiry from ${name}`;
    const body = `${message}\n\n${language === "zh" ? "联系邮箱" : "Reply email"}: ${email}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-semibold">
          {copy.name}
          <input
            required
            name="name"
            autoComplete="name"
            placeholder={copy.namePlaceholder}
            className="h-12 rounded-none border-0 border-b border-white/30 bg-transparent px-0 text-base font-normal text-white outline-none placeholder:text-white/35 focus:border-white"
          />
        </label>
        <label className="grid gap-2 text-xs font-semibold">
          {copy.email}
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder={copy.emailPlaceholder}
            className="h-12 rounded-none border-0 border-b border-white/30 bg-transparent px-0 text-base font-normal text-white outline-none placeholder:text-white/35 focus:border-white"
          />
        </label>
      </div>
      <label className="grid gap-2 text-xs font-semibold">
        {copy.message}
        <textarea
          required
          name="message"
          rows={4}
          placeholder={copy.messagePlaceholder}
          className="resize-y rounded-none border-0 border-b border-white/30 bg-transparent px-0 py-3 text-base font-normal leading-7 text-white outline-none placeholder:text-white/35 focus:border-white"
        />
      </label>
      <button
        type="submit"
        className="mt-2 flex w-full items-center justify-between rounded-full bg-white px-6 py-4 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5 sm:w-auto sm:min-w-56"
      >
        {copy.send}
        <ArrowUpRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
