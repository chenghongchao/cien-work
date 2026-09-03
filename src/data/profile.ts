import type { LocalizedList, LocalizedText } from "./types";

export const profile = {
  name: "Cien",
  chineseName: "程红超",
  role: {
    zh: "海外社媒运营 / Creator & KOL Operations",
    en: "Social Media & Creator Operations",
  } satisfies LocalizedText,
  positioning: {
    zh: "独立负责北美品牌社媒运营，并从 0 到 1 搭建 Creator / KOL 合作体系。",
    en: "Owning North America-focused social operations and building creator operations from 0 to 1.",
  } satisfies LocalizedText,
  heroDescription: {
    zh: "从多平台内容、北美受众校准和增长测试，到 Creator 筛选、商务判断、寄样、内容审核、上线追踪、数据回收与付款，我把分散的运营动作整理成能够持续运转的业务流程。",
    en: "From multi-platform content, North America audience repositioning and growth testing to creator evaluation, negotiation, seeding, review, publishing, tracking and payment, I turn fragmented execution into an operating system that can run end to end.",
  } satisfies LocalizedText,
  company: "FlyAchilles",
  dataAsOf: {
    zh: "更新至 2026.09",
    en: "Updated Sep 2026",
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
    "North America Social",
    "Creator Operations",
    "Content Strategy",
    "Audience Repositioning",
    "Project Ownership",
  ],
  about: {
    zh: [
      "我负责品牌 TikTok、Instagram、Facebook、YouTube 与 Pinterest 的海外社媒运营。接手时账号长期缺乏系统管理、更新不稳定，自然推荐较弱，且核心受众从全球多地跑偏。通过重建内容定位、住宅场景、文案标签与持续 AB Test，除长期广告投放的 YouTube 外，其余核心平台北美受众校准至 80%+，TikTok 达 90%+。",
      "Creator / KOL 是我从 0 搭建的业务链路：累计开发 8,000+ Creator、处理 3,000+ 回复，推动 37 位 Creator 进入正式合作并完成寄样；已回收 24 份内容、8 个项目正式上线。工作覆盖搜索、Audience 与数据审核、商业判断、谈判、选品、物流、Brief、Draft Review、Tracking、上线、数据回收与付款。",
      "海外社媒岗位由我单人负责，因此我不仅执行内容，也需要制定筛选与审核标准、搭建 SOP、判断优先级，并协调老板、采购/仓储、客服、网站、设计、财务和 Creator 处理异常，把项目从开发持续推进到上线和结算。",
    ],
    en: [
      "I manage the brand's TikTok, Instagram, Facebook, YouTube, and Pinterest operations. I inherited accounts with inconsistent publishing, weak organic distribution, and audience geography drifting far beyond the target market. By rebuilding content positioning, residential context, copy, hashtags, and an ongoing A/B testing loop, I repositioned the core organic channels to 80%+ North America audience share, with TikTok above 90%.",
      "I built the Creator / KOL operation from zero: 8,000+ creators sourced, 3,000+ replies handled, and 37 creators moved into confirmed partnerships and product seeding. So far, 24 pieces of creator content have been returned and 8 projects have gone live. My scope spans sourcing, audience and data validation, commercial evaluation, negotiation, product selection, logistics, briefs, draft review, tracking, publishing, reporting, and payment.",
      "As the sole overseas social operator, I do more than execute content. I define screening and review standards, build SOPs, set priorities, and coordinate leadership, procurement/warehouse, customer service, web, design, finance, and creators to move projects from outreach through publishing and settlement.",
    ],
  } satisfies LocalizedList,
  workingPrinciple: {
    zh: "先把判断标准和流程搭清楚，再让执行可复制；对结果负责，也让项目能够被协作和扩展。",
    en: "Build clear decision rules and workflows first, then make execution repeatable, accountable, and ready to scale.",
  } satisfies LocalizedText,
};

export const verifiedFacts = [
  {
    value: "80%+",
    label: { zh: "核心平台北美受众", en: "North America audience on core channels" },
  },
  {
    value: "90%+",
    label: { zh: "TikTok 北美受众", en: "TikTok North America audience" },
  },
  {
    value: "8K+",
    label: { zh: "Creator 开发", en: "Creators sourced" },
  },
  {
    value: "37",
    label: { zh: "正式合作 Creator", en: "Confirmed creator partnerships" },
  },
] as const;
