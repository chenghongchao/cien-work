import type { LocalizedText } from "./types";

export type ExperienceGroup = {
  title: LocalizedText;
  items: Record<"zh" | "en", string[]>;
};

export const experience = {
  company: "FlyAchilles",
  period: "2026.05 — Present",
  role: {
    zh: "海外社媒运营 / Creator & KOL Operations（独立 Owner）",
    en: "Social Media & Creator Operations · Independent Owner",
  } satisfies LocalizedText,
  context: {
    zh: "2026 年 5 月加入后，从品牌多平台社媒执行逐步扩展至 Creator / KOL 全链路搭建与项目落地。公司只有我一名海外社媒运营，因此从内容策略、受众校准、视频拍剪与发布，到 Creator 搜索、审核、谈判、寄样、内容上线、数据回收和付款，均由我独立推动并协调跨部门完成。",
    en: "Since joining in May 2026, my scope expanded from multi-platform social execution into end-to-end creator operations. As the sole overseas social operator, I independently drive content strategy, audience repositioning, video production, publishing, creator sourcing, evaluation, negotiation, seeding, content launch, reporting, and payment while coordinating cross-functional delivery.",
  } satisfies LocalizedText,
  groups: [
    {
      title: { zh: "海外社媒运营", en: "Social media operations" },
      items: {
        zh: [
          "独立负责 TikTok、Instagram、Facebook、YouTube、Pinterest 五个平台的定位、内容策略、选题、剪辑、文案、发布与数据复盘",
          "接手时账号长期断更、自然推荐弱、主页与内容老旧，并且多个平台受众严重偏离北美目标市场",
          "通过稳定更新、北美住宅场景、Hook、标题、Caption、Hashtag 与持续 AB Test 重建平台信号",
          "除长期广告投放的 YouTube 外，其余核心平台北美受众校准至 80%+，TikTok 达 90%+，并持续产生私信询盘",
        ],
        en: [
          "Own positioning, content strategy, ideation, editing, copy, publishing, and performance review across TikTok, Instagram, Facebook, YouTube, and Pinterest",
          "Inherited accounts with inconsistent publishing, weak organic distribution, outdated presentation, and audience geography drifting away from North America",
          "Rebuilt channel signals through consistent publishing, U.S. residential context, hooks, titles, captions, hashtags, and continuous A/B testing",
          "Repositioned core organic channels to 80%+ North America audience share, with TikTok above 90%, while generating ongoing inbound messages",
        ],
      },
    },
    {
      title: { zh: "Creator / KOL 全链路", en: "End-to-end creator operations" },
      items: {
        zh: [
          "从 0 搭建美国 Creator Pipeline，累计开发 8,000+ Creator、处理 3,000+ 回复，推动 37 位 Creator 进入正式合作并完成寄样",
          "独立完成红人搜索、Audience 与数据审核、内容质量判断、报价评估、CPM 判断、谈价、预算控制与合作模式设计",
          "负责选品、地址收集、发货协调、物流跟踪、Brief、Draft Review、Caption/Title、Tracking Link、Discount Code 与发布排期",
          "目前已回收 24 份 Creator 内容、8 个项目正式上线；上线后继续回收数据、付款信息并判断二次合作，且已有 Creator 内容产生订单",
        ],
        en: [
          "Built a U.S. creator pipeline from zero: 8,000+ creators sourced, 3,000+ replies handled, and 37 creators moved into confirmed partnerships and product seeding",
          "Independently own creator sourcing, audience and data validation, content-quality review, rate evaluation, CPM judgment, negotiation, budget control, and partnership-model design",
          "Manage product selection, addresses, fulfillment, logistics tracking, briefs, draft review, captions/titles, tracking links, discount codes, and publishing schedules",
          "Collected 24 pieces of creator content with 8 projects live; continue post-live reporting, payment coordination, and repeat-partnership evaluation, with creator content already contributing orders",
        ],
      },
    },
    {
      title: { zh: "系统搭建与跨部门闭环", en: "Systems & cross-functional delivery" },
      items: {
        zh: [
          "从 0 建立 KOL 筛选标准、报价判断、合作 SOP、邮件 SOP、视频审核、上线、Tracking Link、Discount Code、数据回收与付款流程",
          "建立 KOL 状态管理、内容发布排期、社媒内容体系、数据复盘、周报/月报、Campaign、Facebook Group 与 Member Day 等运营机制",
          "作为项目单一 Owner，协调老板、采购/仓储、客服、网站、设计、财务、物流与 Creator，处理库存、损坏补发、清关、链接、折扣码和付款异常",
          "能够独立拒绝不合理报价、谈价、判断 ROI、决定合作/暂停及置换/佣金/付费模式，并将个人执行沉淀为可交接、可协作的流程",
        ],
        en: [
          "Built creator screening, rate evaluation, partnership, email, content-review, publishing, tracking-link, discount-code, reporting, and payment workflows from zero",
          "Established creator-status management, content calendars, social content systems, performance reviews, weekly/monthly reporting, campaigns, Facebook Group, and Member Day operations",
          "Act as the single project owner coordinating leadership, procurement/warehouse, customer service, web, design, finance, logistics, and creators across inventory, replacement, customs, tracking, discount-code, and payment issues",
          "Independently negotiate or decline rates, assess ROI, decide whether to proceed or pause, choose gifting/commission/paid structures, and turn solo execution into a handoff-ready operating system",
        ],
      },
    },
  ] satisfies ExperienceGroup[],
};
