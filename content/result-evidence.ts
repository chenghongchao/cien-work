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
  {"id":"website-01","category":"website","title":{"zh":"YouTube 站外引流","en":"YouTube referral traffic"},"src":"/images/results-2026-09/01-youtube-referral.png","alt":{"zh":"2026 年 5—8 月 YouTube 来源会话：约 5.2K、4.4K、6.7K、7.1K，包含广告贡献。","en":"YouTube referral sessions, May–August 2026: approximately 5.2K, 4.4K, 6.7K and 7.1K; includes paid traffic."}},
  {"id":"website-02","category":"website","title":{"zh":"Pinterest 站外引流","en":"Pinterest referral traffic"},"src":"/images/results-2026-09/02-pinterest-referral.png","alt":{"zh":"2026 年 5—8 月 Pinterest 来源会话：约 2.5K、2.3K、3.1K、3.3K。","en":"Pinterest referral sessions, May–August 2026: approximately 2.5K, 2.3K, 3.1K and 3.3K."}},
  {"id":"platform-01","category":"platform","title":{"zh":"Pinterest 月浏览量","en":"Pinterest monthly views"},"src":"/images/results-2026-09/03-pinterest-monthly-views.png","alt":{"zh":"Pinterest 主页最新月浏览量约 19 万；主页显示快照。","en":"Latest Pinterest profile snapshot showing approximately 190K monthly views."}},
  {"id":"platform-02","category":"platform","title":{"zh":"Instagram 平台表现","en":"Instagram performance"},"src":"/images/results-2026-09/04-instagram-performance.png","alt":{"zh":"Instagram 浏览量 141,532，链接点击 1,541；2026 年 5 月 12 日至 9 月 9 日。","en":"Instagram: 141,532 views and 1,541 link clicks, May 12–September 9, 2026."}},
  {"id":"platform-03","category":"platform","title":{"zh":"Facebook 平台表现","en":"Facebook performance"},"src":"/images/results-2026-09/05-facebook-performance.png","alt":{"zh":"Facebook 浏览量约 40.6 万、浏览人数约 15.5 万、链接点击 9,839；2026 年 5 月 12 日至 9 月 11 日。","en":"Facebook: approximately 406K views, 155K viewers and 9,839 link clicks, May 12–September 11, 2026."}},
  {"id":"platform-04","category":"platform","title":{"zh":"YouTube · 数据口径核验中","en":"YouTube · Data verification pending"},"src":null,"alt":{"zh":"YouTube 数据提示待核验，暂不展示相关成果数字。","en":"YouTube data notice awaiting verification; related performance figures are not published."}},
  {"id":"creator-01","category":"creator","title":{"zh":"Creator 真实合作内容","en":"Creator collaboration content"},"src":"/images/results-2026-09/07-creator-content.png","alt":{"zh":"真实 Creator 合作视频中的居家灯光场景；本人负责合作推进与内容审核。","en":"A real creator collaboration video still showing home lighting; Cien owned partnership coordination and content review."}},
  {"id":"creator-02","category":"creator","title":{"zh":"独立搭建合作标准体系","en":"Creator partnership operating system"},"src":"/images/results-2026-09/08-creator-workflow.png","alt":{"zh":"独立搭建从开发筛选到上线追踪和数据复盘的 Creator 全流程标准。","en":"Independently built creator operating standards from sourcing and screening through launch tracking and performance review."}},
];

export const evidenceCopy = {
  zh: { eyebrow: "成果影像 / 08", title: "让工作，被看见。", all: "全部", website: "站外引流", platform: "平台数据", creator: "红人合作", pending: "数据口径核验中", zoom: "放大查看", close: "关闭图片", count: "个展示位置" },
  en: { eyebrow: "EVIDENCE / 08", title: "The work, in view.", all: "All", website: "Referrals", platform: "Platforms", creator: "Creators", pending: "Data verification pending", zoom: "View image", close: "Close image", count: "image spaces" },
};

export const projectSummaries: Record<string, { zh: string; en: string }> = {
  "audience-recalibration": { zh: "统一内容与受众信号，让增长回到北美目标市场。", en: "Aligned content and audience signals to bring growth back to the North American market." },
  "creator-pipeline": { zh: "从筛选、谈判到内容上线与结算，建立完整合作流程。", en: "Built the operating process from screening and negotiation through launch and settlement." },
  "social-operations": { zh: "一套素材，五种平台判断；连接内容、流量与转化信号。", en: "One source of material, five channel strategies—connecting content, traffic and conversion signals." },
  "community-system": { zh: "从零建立 Facebook 社区与会员日，验证持续承接路径。", en: "Established a Facebook community and recurring Member Day to validate ongoing engagement." },
};
