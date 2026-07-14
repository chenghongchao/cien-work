import type { LocalizedText } from "./types";

export type SkillGroup = {
  title: LocalizedText;
  description: LocalizedText;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { zh: "创作者合作", en: "Creator Partnership" },
    description: {
      zh: "从开发到交付的完整合作流程",
      en: "The full partnership cycle, from sourcing to delivery",
    },
    items: [
      "Creator Sourcing",
      "Outreach & Follow-up",
      "Negotiation",
      "Contract & Brief",
      "Deliverable Management",
      "Relationship Management",
    ],
  },
  {
    title: { zh: "社媒运营", en: "Social Media Operations" },
    description: {
      zh: "围绕平台语境进行内容适配与发布",
      en: "Platform-native content adaptation and publishing",
    },
    items: [
      "TikTok",
      "Instagram",
      "YouTube",
      "Facebook",
      "Pinterest",
      "Content Publishing",
      "Platform Adaptation",
    ],
  },
  {
    title: { zh: "数据与分析", en: "Data & Analysis" },
    description: {
      zh: "用数据判断合作合理性与内容表现",
      en: "Data-informed evaluation of partnerships and content",
    },
    items: [
      "CPM Evaluation",
      "Average View Analysis",
      "Audience Quality",
      "Campaign Performance",
      "Content Review",
      "Weekly Reporting",
    ],
  },
  {
    title: { zh: "流程与系统", en: "Workflow & Systems" },
    description: {
      zh: "把分散信息整理成可复用的运营系统",
      en: "Turning fragmented information into reusable systems",
    },
    items: [
      "Spreadsheet System Design",
      "KOL Database",
      "Process Optimization",
      "Monthly Review",
      "Dashboard Structure",
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
