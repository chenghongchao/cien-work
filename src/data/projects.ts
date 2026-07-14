import type { LocalizedList, LocalizedText } from "./types";

export type Project = {
  slug: string;
  number: string;
  title: LocalizedText;
  category: LocalizedText;
  summary: LocalizedText;
  background: LocalizedText;
  problem: LocalizedText;
  method: LocalizedList;
  execution: LocalizedList;
  result: LocalizedText;
  reflection: LocalizedText;
  tags: string[];
  accent: "red" | "dark" | "sand" | "paper";
};

export const projects: Project[] = [
  {
    slug: "creator-partnership-workflow",
    number: "01",
    title: {
      zh: "从零搭建创作者合作流程",
      en: "Building a Creator Partnership Workflow from Zero",
    },
    category: {
      zh: "流程设计 · KOL 运营",
      en: "Workflow Design · Influencer Operations",
    },
    summary: {
      zh: "把筛选、开发、谈判、合同、交付与复盘连接成一套可以持续推进的工作流程。",
      en: "Connecting sourcing, outreach, negotiation, contracts, delivery, and review into a repeatable operating workflow.",
    },
    background: {
      zh: "公司需要持续开发家居、生活方式和 DIY 垂类创作者，但合作推进缺少统一的判断标准和结构化流程。",
      en: "The company needed to source creators across home, lifestyle, and DIY verticals on an ongoing basis, while the partnership process lacked shared evaluation criteria and a consistent structure.",
    },
    problem: {
      zh: "当筛选标准、成本判断、合作类型和交付要求分散在不同沟通中时，信息难以复用，后续跟进和复盘也容易失去上下文。",
      en: "When sourcing criteria, cost evaluation, partnership types, and deliverables live across separate conversations, information is difficult to reuse and follow-up loses context.",
    },
    method: {
      zh: [
        "先建立平台与垂类筛选门槛",
        "用平均播放、受众质量和 CPM 辅助成本判断",
        "区分赠品、微付费、付费测试和长期合作",
        "将品牌权益和创作者交付写入统一文件",
      ],
      en: [
        "Set platform and vertical sourcing criteria first",
        "Use average views, audience quality, and CPM to support cost evaluation",
        "Separate gifting, micro-paid, paid test, and longer-term partnership paths",
        "Document brand rights and creator deliverables in a consistent format",
      ],
    },
    execution: {
      zh: [
        "设计开发邮件和分阶段跟进节奏",
        "规范合同、Creative Brief、交付内容与使用权",
        "记录沟通状态、报价、产品选择和发布时间",
        "在合作完成后保留数据与复盘入口",
      ],
      en: [
        "Designed outreach messaging and staged follow-up cadence",
        "Standardized agreements, creative briefs, deliverables, and usage rights",
        "Tracked communication status, quotes, product selection, and publishing timing",
        "Kept a clear path for post-partnership data review",
      ],
    },
    result: {
      zh: "形成了一套可以持续筛选、谈判、执行和复盘的创作者合作流程。",
      en: "Established a workflow that supports continuous creator sourcing, negotiation, execution, and review.",
    },
    reflection: {
      zh: "流程的价值不在于增加步骤，而在于让每次判断都有依据、每次沟通都有上下文，并让下一次合作更容易推进。",
      en: "The value of a workflow is not more steps. It is giving each decision evidence, each conversation context, and each future partnership a clearer starting point.",
    },
    tags: ["Creator Sourcing", "Negotiation", "Contract", "Workflow"],
    accent: "red",
  },
  {
    slug: "kol-data-tracking-system",
    number: "02",
    title: {
      zh: "多平台 KOL 数据与跟进系统",
      en: "Multi-platform KOL Data & Tracking System",
    },
    category: {
      zh: "数据体系 · 运营效率",
      en: "Data System · Operational Efficiency",
    },
    summary: {
      zh: "用唯一 KOL ID 连接多平台账号、筛选数据、报价与合作状态，减少重复录入。",
      en: "Using a unique KOL ID to connect platform accounts, evaluation data, quotes, and partnership status while reducing duplicate entry.",
    },
    background: {
      zh: "同一个创作者可能同时拥有 TikTok、Instagram、YouTube 等多个账号。若按平台重复录入，字段容易不同步，也不利于查看完整合作历史。",
      en: "A single creator may operate across TikTok, Instagram, YouTube, and other platforms. Platform-by-platform duplicate records can drift out of sync and obscure the full partnership history.",
    },
    problem: {
      zh: "需要在保留平台级差异的同时，让筛选、跟进、报价、CPM 和合作进度围绕同一个创作者保持关联。",
      en: "The system needed to preserve platform-level differences while keeping evaluation, follow-up, quotes, CPM, and partnership progress connected to one creator.",
    },
    method: {
      zh: [
        "使用唯一 KOL ID 作为主键",
        "将创作者主体信息与平台账号明细分开",
        "统一粉丝、均播、报价、CPM 与受众字段",
        "为筛选、跟进和月度复盘保留同一数据来源",
      ],
      en: [
        "Use a unique KOL ID as the primary key",
        "Separate creator-level records from platform-account details",
        "Standardize followers, average views, quotes, CPM, and audience fields",
        "Use one data source for evaluation, follow-up, and monthly review",
      ],
    },
    execution: {
      zh: [
        "建立平台账号明细与主表关联",
        "加入 Within $70 cap / Over cap 判断",
        "合并筛选与跟进所需字段",
        "预留月度汇总和可视化结构",
      ],
      en: [
        "Linked platform-account details to a creator master record",
        "Added Within $70 cap / Over cap evaluation",
        "Combined fields needed for sourcing and follow-up",
        "Prepared the structure for monthly summaries and visualization",
      ],
    },
    result: {
      zh: "减少重复录入，并提升创作者筛选、成本判断和合作推进时的信息一致性。",
      en: "Reduced duplicate entry and improved information consistency across creator evaluation, cost judgment, and partnership follow-up.",
    },
    reflection: {
      zh: "运营表格不是信息仓库。字段、主键和状态设计应当服务下一步行动，也要为后续复盘保留足够上下文。",
      en: "An operations sheet is not merely storage. Fields, keys, and statuses should support the next action while preserving enough context for later review.",
    },
    tags: ["KOL Database", "CPM", "Spreadsheet", "Dashboard"],
    accent: "dark",
  },
  {
    slug: "data-led-negotiation",
    number: "03",
    title: {
      zh: "基于数据和权益的合作谈判",
      en: "Data- and Rights-led Partnership Negotiation",
    },
    category: {
      zh: "合作判断 · 商务沟通",
      en: "Partnership Evaluation · Communication",
    },
    summary: {
      zh: "不只看粉丝数，用内容表现、受众、成本与使用权益判断合作是否合理。",
      en: "Looking beyond follower count to assess partnerships through content performance, audience, cost, and usage rights.",
    },
    background: {
      zh: "创作者报价、粉丝规模和品牌合作表现并不总是直接对应。合作判断需要同时考虑近期内容表现、目标受众、预算和交付权益。",
      en: "Creator rates, follower scale, and branded-content performance do not always align. Partnership decisions need to consider recent performance, target audience, budget, and delivery rights together.",
    },
    problem: {
      zh: "既要保护品牌预算和使用权益，也要避免把创作者简单视为流量采购，需要在商业合理性和合作体验之间找到平衡。",
      en: "The challenge is protecting brand budget and usage rights without reducing creators to media inventory, balancing commercial rationale with partnership experience.",
    },
    method: {
      zh: [
        "查看近期平均播放和品牌内容表现",
        "验证美国受众比例与目标受众匹配度",
        "使用 CPM 辅助判断报价合理性",
        "明确自然转发、无水印素材和品牌标注",
      ],
      en: [
        "Review recent average views and branded-content performance",
        "Validate US audience share and target-audience fit",
        "Use CPM as a supporting signal for rate evaluation",
        "Clarify organic reposting, watermark-free assets, and brand disclosure",
      ],
    },
    execution: {
      zh: [
        "让创作者先提供报价或首轮测试价",
        "根据信息完整度继续追问，而不是快速下结论",
        "在沟通中清晰说明预算、交付和品牌边界",
        "保留尊重和长期关系视角",
      ],
      en: [
        "Invite creators to share a quote or first-test rate",
        "Ask for missing information instead of rushing to a conclusion",
        "Communicate budget, deliverables, and brand boundaries clearly",
        "Maintain respect and a longer-term relationship perspective",
      ],
    },
    result: {
      zh: "形成了以数据、成本和合作权益为基础的判断方式，并用于实际创作者合作推进。",
      en: "Developed a decision approach grounded in data, cost, and partnership rights and applied it to creator collaboration work.",
    },
    reflection: {
      zh: "立场坚定不等于表达强硬。把判断依据讲清楚，通常比只给结论更有利于维护合作关系。",
      en: "A firm position does not require harsh communication. Explaining the reasoning is often more constructive than presenting a conclusion alone.",
    },
    tags: ["Negotiation", "Audience Quality", "CPM", "Usage Rights"],
    accent: "sand",
  },
  {
    slug: "multi-platform-content-operations",
    number: "04",
    title: {
      zh: "家居灯具品牌的多平台内容运营",
      en: "Multi-platform Content Operations for a Home Lighting Brand",
    },
    category: {
      zh: "内容运营 · 平台适配",
      en: "Content Operations · Platform Adaptation",
    },
    summary: {
      zh: "围绕同一内容，根据平台语境调整标题、文案、分发方式和复盘维度。",
      en: "Adapting titles, copy, distribution, and review criteria to each platform while working from the same content source.",
    },
    background: {
      zh: "同一条家居灯具内容需要分发到 TikTok、Instagram、YouTube、Facebook 和 Pinterest，但不同平台的用户意图和内容发现方式并不相同。",
      en: "The same home-lighting content needed distribution across TikTok, Instagram, YouTube, Facebook, and Pinterest, where user intent and discovery behavior differ.",
    },
    problem: {
      zh: "简单复制同一标题和文案无法充分利用平台特点，需要在保持品牌表达一致的同时进行平台化改写。",
      en: "Copying the same title and caption across platforms underuses each channel. The work required platform-specific adaptation without losing brand consistency.",
    },
    method: {
      zh: [
        "TikTok / Instagram 侧重氛围、视觉和即时吸引力",
        "YouTube 兼顾推荐流和搜索表达",
        "Pinterest 使用灵感型、场景型文案",
        "按平台观察推荐、搜索和主页访问来源",
      ],
      en: [
        "Prioritize atmosphere, visuals, and immediate appeal on TikTok and Instagram",
        "Balance recommendation and search intent on YouTube",
        "Use inspiration- and scenario-led copy on Pinterest",
        "Review recommendation, search, and profile traffic by platform",
      ],
    },
    execution: {
      zh: [
        "针对平台重写标题、描述、标签和发布形式",
        "观察视频首轮推荐、完播和互动信号",
        "记录不同内容方向的表现差异",
        "根据数据调整后续内容和发布策略",
      ],
      en: [
        "Rewrote titles, descriptions, tags, and publishing formats by platform",
        "Observed initial recommendation, completion, and engagement signals",
        "Recorded performance differences across content directions",
        "Adjusted future content and publishing strategy from the data",
      ],
    },
    result: {
      zh: "形成了同一内容按平台改写、分发并分别复盘的日常运营方式。",
      en: "Established a day-to-day approach for platform-specific rewriting, distribution, and review of shared content.",
    },
    reflection: {
      zh: "多平台运营不是增加发布次数，而是理解每个平台如何承接用户兴趣，并让内容以合适的形式出现。",
      en: "Multi-platform operations is not about multiplying posts. It is about understanding how each platform captures intent and presenting content in the appropriate form.",
    },
    tags: ["TikTok", "Instagram", "YouTube", "Pinterest"],
    accent: "paper",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
