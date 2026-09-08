export type EvidenceCategory = "website" | "platform" | "creator";
export type EvidenceItem = {
  id: string;
  category: EvidenceCategory;
  title: { zh: string; en: string };
  /** Add a public-safe image path here when the approved image is ready. */
  src: string | null;
  alt: { zh: string; en: string };
};

export const evidenceItems: EvidenceItem[] = [
  { id: "website-01", category: "website", title: { zh: "网站转化 · 01", en: "Website conversion · 01" }, src: null, alt: { zh: "网站转化成果展示一", en: "Website conversion evidence, first view" } },
  { id: "website-02", category: "website", title: { zh: "网站转化 · 02", en: "Website conversion · 02" }, src: null, alt: { zh: "网站转化成果展示二", en: "Website conversion evidence, second view" } },
  { id: "platform-01", category: "platform", title: { zh: "平台数据 · 01", en: "Platform performance · 01" }, src: null, alt: { zh: "平台数据成果展示一", en: "Platform performance evidence, first view" } },
  { id: "platform-02", category: "platform", title: { zh: "平台数据 · 02", en: "Platform performance · 02" }, src: null, alt: { zh: "平台数据成果展示二", en: "Platform performance evidence, second view" } },
  { id: "platform-03", category: "platform", title: { zh: "平台数据 · 03", en: "Platform performance · 03" }, src: null, alt: { zh: "平台数据成果展示三", en: "Platform performance evidence, third view" } },
  { id: "platform-04", category: "platform", title: { zh: "平台数据 · 04", en: "Platform performance · 04" }, src: null, alt: { zh: "平台数据成果展示四", en: "Platform performance evidence, fourth view" } },
  { id: "creator-01", category: "creator", title: { zh: "红人合作案例 · 01", en: "Creator collaboration · 01" }, src: null, alt: { zh: "红人合作案例展示一", en: "Creator collaboration evidence, first case" } },
  { id: "creator-02", category: "creator", title: { zh: "红人合作案例 · 02", en: "Creator collaboration · 02" }, src: null, alt: { zh: "红人合作案例展示二", en: "Creator collaboration evidence, second case" } },
];

export const evidenceCopy = {
  zh: { eyebrow: "成果影像 / 08", title: "让工作，被看见。", all: "全部", website: "网站转化", platform: "平台数据", creator: "红人合作", pending: "图片待补充", zoom: "放大查看", close: "关闭图片", count: "个展示位置" },
  en: { eyebrow: "EVIDENCE / 08", title: "The work, in view.", all: "All", website: "Website", platform: "Platforms", creator: "Creators", pending: "Image forthcoming", zoom: "View image", close: "Close image", count: "image spaces" },
};

export const projectSummaries: Record<string, { zh: string; en: string }> = {
  "audience-recalibration": { zh: "统一内容与受众信号，让增长回到北美目标市场。", en: "Aligned content and audience signals to bring growth back to the North American market." },
  "creator-pipeline": { zh: "从筛选、谈判到内容上线与结算，建立完整合作流程。", en: "Built the operating process from screening and negotiation through launch and settlement." },
  "social-operations": { zh: "一套素材，五种平台判断；连接内容、流量与转化信号。", en: "One source of material, five channel strategies—connecting content, traffic and conversion signals." },
  "community-system": { zh: "从零建立 Facebook 社区与会员日，验证持续承接路径。", en: "Established a Facebook community and recurring Member Day to validate ongoing engagement." },
};
