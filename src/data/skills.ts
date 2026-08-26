import type { LocalizedText } from "./types";

export type SkillGroup = {
  title: LocalizedText;
  description: LocalizedText;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { zh: "双品牌运营", en: "Multi-brand Operations" },
    description: {
      zh: "为不同品牌建立独立的内容语言与运营节奏",
      en: "Distinct content languages and operating rhythms for different brands",
    },
    items: [
      "Brand Positioning",
      "Content System",
      "Platform Strategy",
      "Editorial Planning",
      "Asset Standards",
      "Performance Review",
    ],
  },
  {
    title: { zh: "创作者合作", en: "Creator Operations" },
    description: {
      zh: "从数据库、筛选和谈判到交付与复盘",
      en: "From database and evaluation to negotiation, delivery, and review",
    },
    items: [
      "Creator Sourcing",
      "Outreach & Follow-up",
      "Negotiation",
      "Contract & Brief",
      "Deliverable Management",
      "Usage Rights",
    ],
  },
  {
    title: { zh: "数据与分析", en: "Data & Analysis" },
    description: {
      zh: "用数据判断合作合理性与内容表现",
      en: "Data-informed evaluation of partnerships and content",
    },
    items: [
      "Average / Median Views",
      "CPM / Implied CPM",
      "Audience Quality",
      "Commercial-post Fit",
      "Content Retention",
      "Cross-platform Performance",
    ],
  },
  {
    title: { zh: "系统与团队扩展", en: "Systems & Team Readiness" },
    description: {
      zh: "把个人执行沉淀为可交接、可协作的结构",
      en: "Turning individual execution into handoff-ready team workflows",
    },
    items: [
      "Spreadsheet System Design",
      "KOL Database",
      "SOP & Decision Rules",
      "Handoff-ready Process",
      "Review Structure",
      "Cross-platform Tracking",
    ],
  },
];

export const tools = [
  "Excel / Google Sheets",
  "Notion / Lark",
  "Canva",
  "CapCut",
  "Runway",
  "ChatGPT",
  "Codex",
];
