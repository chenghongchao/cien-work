import type { LocalizedText } from "./types";

export const methodology = {
  intro: {
    zh: "我不是把任务逐条做完，而是先找到业务问题、建立判断标准，再把执行、数据和复盘连接成闭环。每一套流程都要既能支持当前结果，也能被下一位协作者接手。",
    en: "I do not treat operations as a queue of tasks. I diagnose the business problem, define decision rules, and connect execution, data, and review into one loop that another operator can inherit.",
  } satisfies LocalizedText,
  steps: [
    { zh: "诊断问题", en: "Diagnose" },
    { zh: "明确目标", en: "Set the target" },
    { zh: "建立标准", en: "Define decision rules" },
    { zh: "设计系统", en: "Build the system" },
    { zh: "推进执行", en: "Execute" },
    { zh: "衡量结果", en: "Measure" },
    { zh: "沉淀与扩展", en: "Document & scale" },
  ] satisfies LocalizedText[],
};
