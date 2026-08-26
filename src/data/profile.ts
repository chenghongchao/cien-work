import type { LocalizedList, LocalizedText } from "./types";

export const profile = {
  name: "Cien",
  chineseName: "程红超",
  role: {
    zh: "海外社媒与 KOL 运营负责人",
    en: "Social Media & Influencer Operations Lead",
  } satisfies LocalizedText,
  positioning: {
    zh: "独立负责双品牌社媒、创作者合作与运营系统搭建。",
    en: "Owning multi-brand social, creator partnerships, and operating systems end to end.",
  } satisfies LocalizedText,
  heroDescription: {
    zh: "从品牌定位、内容策略和 KOL 开发，到商务谈判、交付管理与数据复盘，我把两套北美品牌业务整理成可持续推进、可交接、可扩展的运营系统。",
    en: "From brand positioning and creator sourcing to negotiation, delivery, and performance review, I build operating systems that can scale beyond one person across two North American brands.",
  } satisfies LocalizedText,
  company: "FlyAchilles · Pulens",
  dataAsOf: {
    zh: "数据截至 2026.08.26",
    en: "Data as of Aug 26, 2026",
  } satisfies LocalizedText,
  email: "chenghongchao72@gmail.com",
  location: "",
  portrait: "/images/cien-portrait.png",
  resume: {
    zh: "",
    en: "",
  },
  socials: [] as Array<{ label: string; href: string }>,
  focus: [
    "Multi-brand Operations",
    "Creator Partnerships",
    "Content Strategy",
    "Performance Analysis",
    "Scalable Workflows",
  ],
  about: {
    zh: [
      "我独立搭建并运营 FlyAchilles 与 Pulens 两个北美照明品牌的社媒和创作者合作体系。两个品牌面向不同受众、使用不同内容语言，也需要独立的选题、素材标准、平台策略与复盘方式。",
      "在创作者业务中，我从零建立了 6,000+ 自主开发的 KOL 数据库，累计联系 2,500+ 位创作者，并推进 35 个合作进入确认与发货阶段。我的工作覆盖筛选、外联、数据判断、谈判、合同、Brief、交付与上线复盘。",
      "目前这些链路主要由我独立执行，但系统不是为“一个人一直做”而设计。我会把判断标准、状态、文件和复盘结构沉淀下来，使工作能够被交接、协作，并具备后续带团队扩展的基础。",
    ],
    en: [
      "I independently build and operate the social and creator-partnership systems for FlyAchilles and Pulens, two North American lighting brands with different audiences, content languages, asset standards, channel strategies, and review criteria.",
      "For creator operations, I built a self-sourced database of 6,000+ creators, managed outreach to 2,500+, and moved 35 collaborations into confirmation and fulfillment. My scope covers evaluation, outreach, negotiation, agreements, briefs, delivery, publishing, and review.",
      "The work is currently execution-led by me, but the system is designed to outgrow a single operator. I document decision rules, statuses, files, and review structures so the workflow can be handed over, shared, and scaled by a team.",
    ],
  } satisfies LocalizedList,
  workingPrinciple: {
    zh: "先建立判断标准，再让执行可复制；既对结果负责，也为团队扩展留下结构。",
    en: "Build the decision system first, make execution repeatable, and leave a structure a team can scale.",
  } satisfies LocalizedText,
};

export const verifiedFacts = [
  {
    value: "6K+",
    label: { zh: "自主开发 KOL 数据库", en: "Self-sourced creator database" },
  },
  {
    value: "2.5K+",
    label: { zh: "累计联系创作者", en: "Creators contacted" },
  },
  {
    value: "35",
    label: { zh: "确认并完成发货", en: "Confirmed and fulfilled" },
  },
  {
    value: "2",
    label: { zh: "独立运营北美品牌", en: "Brands operated end to end" },
  },
] as const;
