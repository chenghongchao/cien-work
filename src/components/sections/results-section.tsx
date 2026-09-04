"use client";

import { useLanguage } from "../language-provider";

export function ResultsSection() {
  const { language } = useLanguage();

  const copy =
    language === "zh"
      ? {
          eyebrow: "SELECTED RESULTS",
          title: "先把流量质量和业务链路做对。",
          description:
            "这里优先展示能说明运营判断与业务能力的结果：目标市场校准、Creator Pipeline 规模和真实交付，而不是把普通播放量或弱粉丝增长包装成核心成绩。",
          proofLabel: "OPERATIONAL PROOF",
        }
      : {
          eyebrow: "SELECTED RESULTS",
          title: "Fix the traffic quality. Build the operating system.",
          description:
            "These results prioritize operating judgment, audience quality, creator-pipeline scale, and real delivery — not vanity metrics such as ordinary views or modest follower growth.",
          proofLabel: "OPERATIONAL PROOF",
        };

  const results =
    language === "zh"
      ? [
          {
            value: "80%+",
            title: "核心平台北美受众",
            note: "从全球分散流量重新校准",
          },
          {
            value: "90%+",
            title: "TikTok 北美受众",
            note: "目标市场信号持续稳定",
          },
          {
            value: "8,000+",
            title: "美国 Creator 开发",
            note: "从 0 搭建自主 Pipeline",
          },
          {
            value: "37",
            title: "正式合作 Creator",
            note: "已确认合作并完成寄样",
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
            note: "Sustained target-market signal",
          },
          {
            value: "8,000+",
            title: "U.S. creators sourced",
            note: "Owned pipeline built from zero",
          },
          {
            value: "37",
            title: "Creator partnerships",
            note: "Confirmed and product-seeded",
          },
        ];

  const proof =
    language === "zh"
      ? [
          ["3,000+", "Creator 回复处理"],
          ["24", "已回收内容"],
          ["8", "已正式上线"],
          ["63K", "单条 Creator 内容最高播放"],
        ]
      : [
          ["3,000+", "Creator replies handled"],
          ["24", "Content returned"],
          ["8", "Projects live"],
          ["63K", "Top creator-content views"],
        ];

  return (
    <section className="border-y border-border bg-white">
      <div className="container-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              {copy.eyebrow}
            </p>

            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
              {copy.title}
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-muted">
              {copy.description}
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 border-l border-t border-border">
              {results.map((item) => (
                <div
                  key={item.value + item.title}
                  className="min-h-44 border-b border-r border-border p-5 sm:min-h-52 sm:p-7"
                >
                  <strong className="block whitespace-nowrap text-4xl font-semibold tracking-[-0.06em] text-ink sm:text-5xl">
                    {item.value}
                  </strong>

                  <p className="mt-8 text-sm font-semibold">{item.title}</p>

                  <p className="mt-2 text-xs leading-5 text-muted">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-border pt-5">
              <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-muted">
                {copy.proofLabel}
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                {proof.map(([value, label]) => (
                  <div key={value + label}>
                    <strong className="block text-lg font-semibold tracking-[-0.04em] text-ink">
                      {value}
                    </strong>
                    <span className="mt-1 block text-[11px] leading-5 text-muted">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
