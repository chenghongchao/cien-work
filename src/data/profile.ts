import type { LocalizedList, LocalizedText } from "./types";

export const profile = {
  name: "Cien",
  chineseName: "程红超",
  role: {
    zh: "社媒运营与 KOL 合作专员",
    en: "Social Media & Influencer Marketing Specialist",
  } satisfies LocalizedText,
  positioning: {
    zh: "专注于创作者合作、内容运营、数据分析与流程搭建。",
    en: "Focused on creator partnerships, content operations, performance analysis, and scalable workflows.",
  } satisfies LocalizedText,
  heroDescription: {
    zh: "我负责把零散的社媒执行，整理成可以持续推进、复盘和优化的运营系统。",
    en: "I turn fragmented social execution into a system that can be tracked, reviewed, and improved.",
  } satisfies LocalizedText,
  company: "FlyAchilles",
  email: "chenghongchao72@gmail.com",
  location: "",
  portrait: "/images/cien-portrait.png",
  resume: {
    zh: "",
    en: "",
  },
  socials: [] as Array<{ label: string; href: string }>,
  focus: [
    "Creator Partnerships",
    "Social Media Operations",
    "Content Strategy",
    "Performance Analysis",
    "Workflow Design",
  ],
  about: {
    zh: [
      "我目前专注于社媒运营和 KOL / Influencer Marketing。在实际工作中，我负责创作者筛选、开发、数据判断、合作谈判、合同与 Brief、内容交付和后续复盘。",
      "我关注的不只是“有没有发内容”，而是合作是否符合品牌目标、预算是否合理、交付是否清晰、内容是否能被持续利用，以及整个流程能否被复用和优化。",
      "我的工作方式偏务实：先了解完整情况，再判断；遇到信息不足时继续追问；对于价格、数据和合作权益保持敏感；同时尊重创作者的表达方式，尽量让合作成为双方价值交换，而不是单方面要求。",
    ],
    en: [
      "I currently focus on social media operations and KOL / influencer marketing. My work covers creator sourcing, outreach, data evaluation, negotiation, contracts and briefs, content delivery, and post-campaign review.",
      "I look beyond whether content was simply published. I consider whether a partnership supports the brand objective, whether the budget is reasonable, whether deliverables are clear, whether the content can retain value, and whether the process can be reused and improved.",
      "My approach is practical: understand the full context before making a judgment, ask for missing information, stay attentive to pricing, data, and usage rights, and respect how creators communicate with their audiences.",
    ],
  } satisfies LocalizedList,
  workingPrinciple: {
    zh: "立场坚定，表达温和；尊重创作者，也保护品牌利益。",
    en: "Be firm in position and thoughtful in expression — respect creators while protecting brand interests.",
  } satisfies LocalizedText,
};

export const verifiedFacts = [
  {
    value: "5",
    label: { zh: "覆盖社媒平台", en: "Social platforms covered" },
  },
  {
    value: "E2E",
    label: { zh: "独立推进完整流程", en: "End-to-end ownership" },
  },
  {
    value: "CPM",
    label: { zh: "合作成本评估", en: "Cost evaluation framework" },
  },
  {
    value: "KOL ID",
    label: { zh: "多平台数据关联", en: "Cross-platform data link" },
  },
] as const;
