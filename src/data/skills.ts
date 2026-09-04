import type { LocalizedText } from "./types";

export type SkillGroup = {
  title: LocalizedText;
  description: LocalizedText;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { zh: "海外社媒运营", en: "Social Media Operations" },
    description: {
      zh: "从平台定位、内容策略到受众质量和数据复盘",
      en: "From channel positioning and content strategy to audience quality and performance review",
    },
    items: [
      "Platform Strategy",
      "Content Planning",
      "Audience Repositioning",
      "Hook & Format Testing",
      "Publishing System",
      "Performance Review",
    ],
  },
  {
    title: { zh: "Creator / KOL 运营", en: "Creator / KOL Operations" },
    description: {
      zh: "独立负责从搜索、审核和谈判到上线、数据与付款的完整链路",
      en: "End-to-end ownership from sourcing and evaluation through publishing, reporting, and payment",
    },
    items: [
      "Creator Sourcing",
      "Audience Review",
      "Rate Negotiation",
      "Product Seeding",
      "Draft Review",
      "Tracking & Payment",
    ],
  },
  {
    title: { zh: "商业判断与数据", en: "Commercial Judgment & Data" },
    description: {
      zh: "用受众、内容表现、成本与转化信号判断资源是否值得投入",
      en: "Evaluating where to invest through audience, performance, cost, and conversion signals",
    },
    items: [
      "Audience Quality",
      "Average / Median Views",
      "CPM Judgment",
      "Rate Evaluation",
      "Referral Traffic",
      "Conversion Signals",
    ],
  },
  {
    title: { zh: "项目 Ownership 与系统", en: "Project Ownership & Systems" },
    description: {
      zh: "把个人执行变成有标准、有状态、有下一步动作的可管理流程",
      en: "Turning individual execution into manageable workflows with rules, status, and next actions",
    },
    items: [
      "SOP Design",
      "Status Management",
      "Cross-functional Delivery",
      "Campaign Operations",
      "Process Documentation",
      "Team-ready Workflow",
    ],
  },
];

export const tools = [
  "Excel / Google Sheets",
  "Notion / Lark",
  "Meta Business Suite",
  "TikTok Analytics",
  "YouTube Studio",
  "Pinterest Analytics",
  "Canva",
  "CapCut",
  "Runway",
  "17TRACK",
  "ChatGPT",
  "Codex",
];
