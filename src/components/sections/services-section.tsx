"use client";

import {
  BarChart3,
  BriefcaseBusiness,
  Clapperboard,
  UsersRound,
} from "lucide-react";

import { useLanguage } from "../language-provider";

export function ServicesSection() {
  const { language } = useLanguage();

  const copy =
    language === "zh"
      ? {
          eyebrow: "WHAT I DO",
          title: "我负责的不只是账号，而是从策略到交付的一整块业务。",
          note:
            "当前工作以单人 Owner 形式完成，但方法、标准和流程都按未来团队协作来搭建。",
          items: [
            {
              title: "Social Media Operations",
              subtitle: "海外社媒运营",
              description:
                "负责 TikTok、Instagram、Facebook、YouTube、Pinterest 的定位、内容、发布、受众校准、增长测试、互动与数据复盘。",
            },
            {
              title: "Creator / KOL Operations",
              subtitle: "Creator 全链路",
              description:
                "从 Creator 搜索、Audience 审核、报价判断和谈判，到寄样、物流、Brief、Draft Review、Tracking、上线、数据与付款闭环。",
            },
            {
              title: "Content & Growth Testing",
              subtitle: "内容策略与增长测试",
              description:
                "围绕 Hook、视频结构、住宅场景、Caption、Title、Hashtag、发布时间和素材版本持续测试，并根据平台与站外信号迭代。",
            },
            {
              title: "Project Ownership",
              subtitle: "项目统筹与业务闭环",
              description:
                "独立做判断、搭建 SOP、管理状态和下一步动作，并协调老板、客服、采购、仓储、网站、设计、财务及 Creator 推动项目落地。",
            },
          ],
        }
      : {
          eyebrow: "WHAT I DO",
          title: "I own the function from strategy through delivery.",
          note:
            "The work is currently executed as a single owner, but the standards and workflows are designed for future delegation and team scale.",
          items: [
            {
              title: "Social Media Operations",
              subtitle: "Multi-platform operations",
              description:
                "Positioning, content, publishing, audience repositioning, growth testing, community signals, and performance review across five core channels.",
            },
            {
              title: "Creator / KOL Operations",
              subtitle: "End-to-end creator operations",
              description:
                "From creator sourcing, audience validation, rate judgment and negotiation through seeding, logistics, briefs, draft review, tracking, publishing, reporting, and payment.",
            },
            {
              title: "Content & Growth Testing",
              subtitle: "Content systems",
              description:
                "Testing hooks, video structures, residential scenarios, captions, titles, hashtags, timing, and creative variants based on platform and downstream signals.",
            },
            {
              title: "Project Ownership",
              subtitle: "Cross-functional delivery",
              description:
                "Making operational decisions, building SOPs, managing stages and next actions, and coordinating internal teams and creators from idea through completion.",
            },
          ],
        };

  const icons = [BarChart3, UsersRound, Clapperboard, BriefcaseBusiness];

  return (
    <section className="container-shell section-pad">
      <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            {copy.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
            {copy.title}
          </h2>
        </div>

        <p className="max-w-lg text-sm leading-7 text-muted lg:justify-self-end">
          {copy.note}
        </p>
      </div>

      <div className="grid border-l border-t border-border md:grid-cols-2">
        {copy.items.map((item, index) => {
          const Icon = icons[index];

          return (
            <article
              key={item.title}
              className="group min-h-72 border-b border-r border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0eee9] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold text-muted">0{index + 1}</span>

                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="text-accent"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-14 text-2xl font-semibold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                {item.subtitle}
              </p>

              <p className="mt-6 max-w-lg text-sm leading-7 text-muted">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
