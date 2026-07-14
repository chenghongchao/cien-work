import type { LocalizedText } from "./types";

export const methodology = {
  intro: {
    zh: "我不倾向于在信息不完整时快速下结论。我会先补齐背景、数据、预算、平台和交付，再做判断。对于合作，我既考虑品牌的成本和权益，也考虑创作者的表达方式与合作体验。",
    en: "I avoid rushing to conclusions when information is incomplete. I clarify the context, data, budget, platform, and deliverables before making a judgment. I consider both the brand's costs and rights and the creator's voice and partnership experience.",
  } satisfies LocalizedText,
  steps: [
    { zh: "收集信息", en: "Gather context" },
    { zh: "验证数据", en: "Validate data" },
    { zh: "明确目标", en: "Define goals" },
    { zh: "判断价值", en: "Assess value" },
    { zh: "设计方案", en: "Design approach" },
    { zh: "推进执行", en: "Execute" },
    { zh: "复盘优化", en: "Review & improve" },
  ] satisfies LocalizedText[],
};
