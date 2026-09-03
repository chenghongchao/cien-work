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
          title: "我负责的不只是一个账号，而是一整块业务。",
          items: [
            {
              title: "Social Media Operations",
              subtitle: "海外社媒运营",
              description:
                "负责 TikTok、Instagram、Facebook、YouTube、Pinterest 多平台定位、内容、发布、受众校准、增长测试及数据复盘。",
            },
            {
              title: "Creator / KOL Operations",
              subtitle: "Creator 全链路",
              description:
                "从红人搜索、Audience 审核和谈价，到寄样、物流、Brief、内容审核、Tracking、上线、数据及付款闭环。",
            },
            {
              title: "Content & Growth Testing",
              subtitle: "内容策略与增长测试",
              description:
                "持续测试 Hook、视频结构、场景、Caption、Title、Hashtag 与发布方式，并根据平台及站外流量结果调整策略。",
            },
            {
              title: "Project Ownership",
              subtitle: "项目统筹与闭环",
              description:
                "在单人 Owner 环境下制定标准、搭建 SOP，并协调采购、仓储、客服、网站、设计、财务及 Creator 推动项目落地。",
            },
          ],
        }
      : {
          eyebrow: "WHAT I DO",
          title: "I operate the function — not just the account.",
          items: [
            {
              title: "Social Media Operations",
              subtitle: "Multi-platform operations",
              description:
                "Strategy, content, publishing, audience repositioning, growth testing and performance review across TikTok, Instagram, Facebook, YouTube and Pinterest.",
            },
            {
              title: "Creator / KOL Operations",
              subtitle: "End-to-end creator operations",
              description:
                "From sourcing, audience validation and negotiation to seeding, logistics, briefing, review, tracking, publishing, reporting and payment.",
            },
            {
              title: "Content & Growth Testing",
              subtitle: "Content systems",
              description:
                "Testing hooks, formats, scenarios, captions, titles, hashtags and publishing approaches based on platform and downstream traffic signals.",
            },
            {
              title: "Project Ownership",
              subtitle: "Cross-functional delivery",
              description:
                "Building SOPs, making operational decisions and coordinating internal teams and creators to move projects from idea to completion.",
            },
          ],
        };

  const icons = [
    BarChart3,
    UsersRound,
    Clapperboard,
    BriefcaseBusiness,
  ];

  return (
    <section className="container-shell section-pad">
      <div className="mb-12 max-w-3xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
          {copy.eyebrow}
        </p>

        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
          {copy.title}
        </h2>
      </div>

      <div className="grid border-l border-t border-border md:grid-cols-2">
        {copy.items.map((item, index) => {
          const Icon = icons[index];

          return (
            <article
              key={item.title}
              className="group min-h-72 border-b border-r border-border bg-white p-6 transition-colors hover:bg-[#f0eee9] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold text-muted">
                  0{index + 1}
                </span>

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
