"use client";

import { useLanguage } from "../language-provider";

export function ResultsSection() {
  const { language } = useLanguage();

  const copy =
    language === "zh"
      ? {
          eyebrow: "SELECTED RESULTS",
          title: "不是只发内容，而是解决业务问题。",
          description:
            "重点展示目标市场校准与 Creator Operations 的实际业务规模。弱粉丝增长和普通播放数据不作为核心成果展示。",
        }
      : {
          eyebrow: "SELECTED RESULTS",
          title: "Not just publishing. Solving operational problems.",
          description:
            "Selected results focus on audience quality and creator operations rather than vanity metrics such as follower growth.",
        };

  const results =
    language === "zh"
      ? [
          {
            value: "80%+",
            title: "北美受众占比",
            note: "核心自然流量平台",
          },
          {
            value: "90%+",
            title: "TikTok 北美受众",
            note: "从全球跑偏重新校准",
          },
          {
            value: "8,000+",
            title: "Creator 开发",
            note: "美国 Creator Pipeline",
          },
          {
            value: "37",
            title: "正式合作 Creator",
            note: "完成合作确认与寄样",
          },
        ]
      : [
          {
            value: "80%+",
            title: "North America audience",
            note: "Across core organic channels",
          },
          {
            value: "90%+",
            title: "TikTok North America",
            note: "Repositioned from global traffic",
          },
          {
            value: "8,000+",
            title: "Creator outreach",
            note: "U.S. Creator pipeline",
          },
          {
            value: "37",
            title: "Creator partnerships",
            note: "Confirmed and product-seeded",
          },
        ];

  return (
    <section className="border-y border-border bg-white">
      <div className="container-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              {copy.eyebrow}
            </p>

            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
              {copy.title}
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted">
              {copy.description}
            </p>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-border">
            {results.map((item) => (
              <div
                key={item.value + item.title}
                className="min-h-44 border-b border-r border-border p-5 sm:min-h-52 sm:p-7"
              >
                <strong className="block text-4xl font-semibold tracking-[-0.06em] text-ink sm:text-5xl">
                  {item.value}
                </strong>

                <p className="mt-8 text-sm font-semibold">
                  {item.title}
                </p>

                <p className="mt-2 text-xs leading-5 text-muted">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
