import type { LocalizedText } from "./types";

export const methodology = {
  intro: {
    zh: "我更习惯先判断问题，再决定动作。先明确目标市场和业务结果，再建立筛选标准、推进机制和复盘指标，最后把有效做法沉淀成 SOP 与可交接流程。",
    en: "I prefer to diagnose before acting. I clarify the target market and business outcome first, then define decision rules, execution stages, and review metrics before documenting what works into SOPs and handoff-ready workflows.",
  } satisfies LocalizedText,
  steps: [
    { zh: "判断业务问题", en: "Diagnose the business problem" },
    { zh: "明确目标与市场", en: "Define target and market" },
    { zh: "建立判断标准", en: "Set decision rules" },
    { zh: "设计 Pipeline 与状态", en: "Design pipeline and stages" },
    { zh: "推进跨部门执行", en: "Drive cross-functional execution" },
    { zh: "看数据与业务信号", en: "Review data and business signals" },
    { zh: "沉淀 SOP 并迭代", en: "Document SOPs and iterate" },
  ] satisfies LocalizedText[],
};
