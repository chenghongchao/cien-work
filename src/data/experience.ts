import type { LocalizedText } from "./types";

export type ExperienceGroup = {
  title: LocalizedText;
  items: Record<"zh" | "en", string[]>;
};

export const experience = {
  company: "FlyAchilles · Pulens",
  period: "2026.05 — Present",
  role: {
    zh: "双品牌社媒与 KOL 运营负责人（独立执行）",
    en: "Multi-brand Social & Influencer Operations Lead",
  } satisfies LocalizedText,
  context: {
    zh: "2026 年 5 月加入后，从社媒执行逐步扩展至 KOL 全链路与第二品牌 Pulens 的内容体系搭建。目前独立负责两个品牌，并将流程沉淀为可协作、可交接和可扩展的运营系统。",
    en: "Since joining in May 2026, the scope has expanded from social execution to end-to-end creator operations and the content system for a second brand, Pulens. I currently own both brands independently while structuring the work for collaboration, handoff, and team scale.",
  } satisfies LocalizedText,
  groups: [
    {
      title: { zh: "品牌与内容运营", en: "Brand & content operations" },
      items: {
        zh: [
          "同时运营 FlyAchilles 与 Pulens，建立相互独立的品牌定位和内容规则",
          "负责 TikTok、Instagram、YouTube、Facebook、Pinterest 的平台适配与发布",
          "从 Hook、视觉与文案，到推荐、搜索、留存和互动进行完整复盘",
          "推动 TikTok 近期均播提升至原基线 3.5 倍，YouTube Shorts 均播提升至 5 倍",
        ],
        en: [
          "Operate FlyAchilles and Pulens with distinct positioning and content rules",
          "Adapt and publish across TikTok, Instagram, YouTube, Facebook, and Pinterest",
          "Review hooks, visuals, copy, recommendation, search, retention, and engagement as one loop",
          "Lifted recent TikTok average views to 3.5x the prior baseline and YouTube Shorts average views to 5x",
        ],
      },
    },
    {
      title: { zh: "创作者合作", en: "Creator partnerships" },
      items: {
        zh: [
          "从零建立 6,000+ 自主开发的家居、生活方式、DIY 与室内设计创作者库",
          "累计联系 2,500+ 位创作者，推进 35 个合作进入确认与发货阶段",
          "基于均播、商业帖表现、美国受众比例、CPM 与使用权益判断合作价值",
          "负责外联、谈判、合同、Brief、产品、物流、内容审核和上线复盘",
        ],
        en: [
          "Built a self-sourced database of 6,000+ home, lifestyle, DIY, and interior-design creators",
          "Managed outreach to 2,500+ creators and moved 35 collaborations into confirmation and fulfillment",
          "Evaluate average views, branded-content performance, US audience share, CPM, and usage rights",
          "Own outreach, negotiation, agreements, briefs, product coordination, logistics, review, and reporting",
        ],
      },
    },
    {
      title: { zh: "系统与团队扩展", en: "Systems & team readiness" },
      items: {
        zh: [
          "用唯一 KOL ID 关联多平台账号、报价、CPM、状态与上线数据",
          "统一合同、Creative Brief、审核边界、使用权与交付规则",
          "为筛选、跟进、物流、内容回收和复盘建立同一数据来源",
          "将个人执行沉淀为可交接、可协作并能支持团队扩展的流程",
        ],
        en: [
          "Link platform accounts, quotes, CPM, status, and live performance through a unique KOL ID",
          "Standardize agreements, creative briefs, review boundaries, usage rights, and deliverables",
          "Use one data source across sourcing, follow-up, logistics, content collection, and review",
          "Turn individual execution into a handoff-ready workflow that can support a growing team",
        ],
      },
    },
  ] satisfies ExperienceGroup[],
};
