import type { LocalizedList, LocalizedText } from "./types";

export type ProjectEvidence = {
  value: string;
  label: LocalizedText;
  detail?: LocalizedText;
};

export type Project = {
  slug: string;
  number: string;
  title: LocalizedText;
  category: LocalizedText;
  summary: LocalizedText;
  background: LocalizedText;
  problem: LocalizedText;
  diagnosis: LocalizedList;
  decision: LocalizedList;
  execution: LocalizedList;
  evidence: ProjectEvidence[];
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
      zh: "从零搭建创作者合作业务链路",
      en: "Building a Creator Partnership Operation from Zero",
    },
    category: {
      zh: "业务搭建 · KOL 运营",
      en: "Operation Building · Creator Partnerships",
    },
    summary: {
      zh: "从名单开发到确认发货，把分散动作整理成一套有判断标准、可持续推进的合作系统。",
      en: "Turning fragmented creator work into a decision-led system that moves partnerships from sourcing through confirmation and fulfillment.",
    },
    background: {
      zh: "品牌需要持续开发北美家居、生活方式、DIY 与室内设计创作者，但早期缺少可复用的名单资产、筛选标准与完整合作流程。",
      en: "The brand needed a continuous pipeline of North American home, lifestyle, DIY, and interior-design creators, without an existing database, shared criteria, or end-to-end workflow.",
    },
    problem: {
      zh: "真正的问题不是发出更多邮件，而是如何在有限预算下找到合适的人，并让筛选、谈判、合同、产品、物流、内容和复盘持续衔接。",
      en: "The real problem was not sending more emails. It was finding the right creators within budget and keeping evaluation, negotiation, agreements, product, logistics, content, and review connected.",
    },
    diagnosis: {
      zh: [
        "名单来源不稳定，无法积累为品牌自己的长期资产",
        "粉丝量不能单独解释内容质量、受众匹配与商业价值",
        "合作信息散落在邮件、文件与表格中，交接成本高",
        "不同合作阶段没有统一状态，难以及时识别阻塞点",
      ],
      en: [
        "Unstable sourcing prevented the brand from building a durable creator asset",
        "Follower count alone could not explain content quality, audience fit, or commercial value",
        "Partnership context was scattered across email, files, and sheets",
        "Inconsistent statuses made bottlenecks difficult to identify early",
      ],
    },
    decision: {
      zh: [
        "优先建立自主开发的 KOL 库，而不是依赖一次性名单",
        "用内容表现、美国受众比例、CPM 与权益共同判断合作",
        "按赠品、微付费、付费测试和长期合作设计不同推进路径",
        "用统一状态与文件让每个合作都能被追踪、复盘和交接",
      ],
      en: [
        "Build a self-sourced creator database instead of relying on one-off lists",
        "Evaluate content performance, US audience share, CPM, and rights together",
        "Create distinct paths for gifting, micro-paid, paid-test, and longer-term work",
        "Use shared statuses and files so every partnership can be tracked, reviewed, and handed over",
      ],
    },
    execution: {
      zh: [
        "建立垂类与平台筛选标准，持续扩充自主名单",
        "设计开发邮件、分阶段跟进节奏和谈判口径",
        "统一合同、Creative Brief、交付要求与使用权",
        "连接产品选择、地址确认、物流、内容审核与上线记录",
      ],
      en: [
        "Set vertical and platform criteria and continuously expand the owned database",
        "Designed outreach, staged follow-up, and negotiation guidelines",
        "Standardized agreements, creative briefs, deliverables, and usage rights",
        "Connected product selection, address confirmation, logistics, review, and publishing records",
      ],
    },
    evidence: [
      {
        value: "6K+",
        label: { zh: "自主开发 KOL 库", en: "Self-sourced creator database" },
      },
      {
        value: "2.5K+",
        label: { zh: "累计联系创作者", en: "Creators contacted" },
      },
      {
        value: "35",
        label: { zh: "确认并完成发货", en: "Confirmed and fulfilled" },
      },
    ],
    result: {
      zh: "创作者合作从零散执行变成一条可持续运转的业务链路，并形成了品牌自己的创作者资产与推进标准。",
      en: "Creator partnerships became a repeatable operating pipeline, supported by an owned creator asset and consistent advancement criteria.",
    },
    reflection: {
      zh: "当名单规模和外联能力建立后，下一阶段的重点不再是单纯扩大触达，而是提升内容回收与上线节奏，并为团队分工设置更清晰的责任节点。",
      en: "Once sourcing scale and outreach capacity were established, the next priority shifted from volume alone to content return, publishing cadence, and clearer ownership for future team collaboration.",
    },
    tags: ["Creator Sourcing", "Negotiation", "Fulfillment", "Workflow"],
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
      zh: "数据体系 · 团队协作",
      en: "Data System · Team Readiness",
    },
    summary: {
      zh: "用唯一 KOL ID 连接多平台账号、筛选数据、报价、合作状态与上线表现，让同一数据支持执行、管理和复盘。",
      en: "Connecting platform accounts, evaluation data, quotes, partnership status, and live performance through a unique KOL ID.",
    },
    background: {
      zh: "同一个创作者可能同时拥有 TikTok、Instagram 与 YouTube 等多个账号。若按平台重复记录，信息容易冲突，也无法看到完整的合作历史。",
      en: "A creator may operate across TikTok, Instagram, YouTube, and other platforms. Duplicate platform records can conflict and obscure the full relationship history.",
    },
    problem: {
      zh: "系统既要保留平台级表现差异，又要围绕同一个创作者连接筛选、沟通、报价、物流、内容与上线结果。",
      en: "The system needed to preserve platform-level performance differences while connecting evaluation, communication, quotes, logistics, content, and results around one creator.",
    },
    diagnosis: {
      zh: [
        "平台账号是表现单位，但创作者才是合作关系主体",
        "重复录入会造成粉丝、均播、报价和状态不同步",
        "只有原始数据、没有判断字段，表格无法指导下一步动作",
        "个人可记住的上下文，进入团队协作后必须显性化",
      ],
      en: [
        "Platform accounts are performance units, while the creator is the relationship owner",
        "Duplicate records cause followers, views, quotes, and statuses to drift",
        "Raw data without decision fields cannot guide the next action",
        "Context one person can remember must become explicit before a team can share the work",
      ],
    },
    decision: {
      zh: [
        "以唯一 KOL ID 为主键，分离创作者主体与平台账号明细",
        "统一粉丝、均播、品牌帖、美国受众、报价和 CPM 字段",
        "把状态设计成下一步动作，而不是静态分类",
        "为月度汇总、筛选视图与团队交接使用同一数据源",
      ],
      en: [
        "Use a unique KOL ID and separate creator records from platform-account details",
        "Standardize followers, average views, branded posts, US audience, quotes, and CPM",
        "Design statuses around the next action rather than static categorization",
        "Use one source for monthly reporting, sourcing views, and team handoff",
      ],
    },
    execution: {
      zh: [
        "建立创作者主表与多平台账号明细的关联结构",
        "加入预算上限、CPM 与受众匹配等决策字段",
        "统一筛选、首次联系、跟进、确认、发货与上线状态",
        "预留月度看板和表现回填结构，避免后期重新整理",
      ],
      en: [
        "Built linked creator-master and multi-platform account structures",
        "Added budget-cap, CPM, and audience-fit decision fields",
        "Standardized sourcing, outreach, follow-up, confirmation, fulfillment, and live statuses",
        "Prepared monthly reporting and performance-return structures from the start",
      ],
    },
    evidence: [
      {
        value: "1 ID",
        label: { zh: "连接一个创作者的多平台信息", en: "Connects each creator across platforms" },
      },
      {
        value: "5",
        label: { zh: "纳入运营的平台", en: "Operating platforms covered" },
      },
      {
        value: "1 Source",
        label: { zh: "筛选、推进与复盘的数据来源", en: "Source for sourcing, progress, and review" },
      },
    ],
    result: {
      zh: "把个人记忆中的合作上下文转成结构化数据，使筛选更快、成本判断更一致，也为后续分工和带团队留下基础。",
      en: "Turned relationship context into structured data, improving sourcing speed and decision consistency while creating a foundation for delegation and team leadership.",
    },
    reflection: {
      zh: "运营系统不是信息仓库。每个字段都应该服务一个判断、动作或复盘问题；没有使用场景的字段只会增加维护成本。",
      en: "An operating system is not an archive. Every field should serve a decision, action, or review question; otherwise it only adds maintenance cost.",
    },
    tags: ["KOL Database", "CPM", "Data Model", "Team Handoff"],
    accent: "dark",
  },
  {
    slug: "data-led-negotiation",
    number: "03",
    title: {
      zh: "基于数据与权益的合作谈判",
      en: "Data- and Rights-led Partnership Negotiation",
    },
    category: {
      zh: "商业判断 · 合作谈判",
      en: "Commercial Judgment · Negotiation",
    },
    summary: {
      zh: "不把粉丝数当作答案，而是结合内容表现、目标受众、成本和品牌权益决定合作方式。",
      en: "Looking beyond follower count to choose partnership terms through performance, audience, cost, and brand rights.",
    },
    background: {
      zh: "创作者报价、粉丝规模和商业内容表现并不总是对应。品牌既需要控制测试成本，也需要拿到清晰、可执行的交付与使用权益。",
      en: "Creator rates, follower scale, and branded-content performance do not always align. The brand needed to control test cost while securing clear deliverables and usage rights.",
    },
    problem: {
      zh: "既不能只按最低价格选择合作，也不能用模糊的品牌诉求换取不可控的交付，需要建立能解释、能沟通的商业判断框架。",
      en: "Choosing the lowest rate was insufficient, while vague brand requests created delivery risk. The team needed a commercial framework that could be explained and negotiated.",
    },
    diagnosis: {
      zh: [
        "粉丝规模可能掩盖近期内容与商业帖表现差异",
        "总播放不等于目标市场中的有效触达",
        "报价必须与交付形式、修改边界和使用权益一起判断",
        "长期合作价值不能只由第一次报价决定",
      ],
      en: [
        "Follower scale can hide major differences in recent and branded-content performance",
        "Total views do not necessarily equal effective reach in the target market",
        "Rates must be evaluated alongside format, revision scope, and usage rights",
        "Long-term partnership value cannot be determined by the first quote alone",
      ],
    },
    decision: {
      zh: [
        "用近期均播与品牌帖表现判断内容稳定性",
        "验证美国受众比例与品牌目标人群的匹配度",
        "将 CPM 作为成本信号，而不是唯一决策标准",
        "根据风险选择赠品、微付费、付费测试或长期合作",
      ],
      en: [
        "Use recent average views and branded posts to assess content consistency",
        "Validate US audience share and target-customer fit",
        "Treat CPM as a cost signal rather than the only decision rule",
        "Choose gifting, micro-paid, paid-test, or longer-term paths based on risk",
      ],
    },
    execution: {
      zh: [
        "先收集报价、平台数据、受众信息和过往品牌案例",
        "对缺失信息继续追问，不在证据不足时快速定价",
        "清晰谈判交付数量、发布时间、素材版本与使用权",
        "在坚持预算边界的同时保留尊重与长期关系空间",
      ],
      en: [
        "Collected rates, platform data, audience information, and prior branded work",
        "Requested missing evidence rather than pricing with incomplete context",
        "Negotiated deliverable count, timing, asset versions, and usage rights clearly",
        "Protected budget boundaries while preserving respect and long-term relationship potential",
      ],
    },
    evidence: [
      {
        value: "CPM",
        label: { zh: "报价合理性的辅助信号", en: "Supporting signal for rate evaluation" },
      },
      {
        value: "US%",
        label: { zh: "目标市场受众匹配检查", en: "Target-market audience check" },
      },
      {
        value: "4 Paths",
        label: { zh: "按风险匹配合作方式", en: "Partnership paths matched to risk" },
      },
    ],
    result: {
      zh: "形成了一套可解释的合作判断方式：预算、内容价值与品牌权益在同一框架中被权衡，并直接用于实际谈判。",
      en: "Established an explainable partnership framework that balances budget, content value, and brand rights and applies directly to real negotiations.",
    },
    reflection: {
      zh: "操盘不是把每个报价压到最低，而是知道哪些条件必须坚持、哪些关系值得继续，并让双方理解决定背后的依据。",
      en: "Operating well is not pushing every rate to its minimum. It is knowing which conditions must hold, which relationships merit investment, and making the rationale clear to both sides.",
    },
    tags: ["Negotiation", "Audience Quality", "CPM", "Usage Rights"],
    accent: "sand",
  },
  {
    slug: "multi-platform-content-operations",
    number: "04",
    title: {
      zh: "用平台数据重构内容增长节奏",
      en: "Rebuilding Content Growth through Platform Signals",
    },
    category: {
      zh: "内容策略 · 增长复盘",
      en: "Content Strategy · Growth Review",
    },
    summary: {
      zh: "围绕同一品牌内容，按平台重新设计表达与复盘方式，让内容增长从凭感觉发布转向有证据的迭代。",
      en: "Redesigning expression and review by platform so content growth moves from instinct-led posting to evidence-led iteration.",
    },
    background: {
      zh: "FlyAchilles 的灯具内容需要覆盖 TikTok、Instagram、YouTube、Facebook 与 Pinterest，但用户意图、内容发现方式和成功指标并不相同。",
      en: "FlyAchilles lighting content needed to work across TikTok, Instagram, YouTube, Facebook, and Pinterest, where user intent, discovery, and success signals differ.",
    },
    problem: {
      zh: "同一套标题、文案与发布逻辑无法充分利用平台特性；如果只看总播放，也无法判断具体是 Hook、选题、搜索表达还是视觉结构起作用。",
      en: "One set of titles, captions, and publishing logic underused each platform. Total views alone could not explain whether the hook, topic, search framing, or visual structure drove performance.",
    },
    diagnosis: {
      zh: [
        "短视频平台需要先解决首屏吸引力和留存问题",
        "YouTube 同时受推荐与搜索表达影响",
        "Pinterest 更依赖场景、灵感和可持续发现",
        "不同平台必须用不同流量来源与内容指标复盘",
      ],
      en: [
        "Short-form platforms first require strong opening frames and retention",
        "YouTube performance is shaped by both recommendation and search framing",
        "Pinterest relies more on scenarios, inspiration, and long-tail discovery",
        "Each platform requires its own traffic-source and content-performance review",
      ],
    },
    decision: {
      zh: [
        "保留同一内容资产，但按平台重写 Hook、标题、描述和标签",
        "TikTok 与 Instagram 优先氛围、视觉和即时吸引力",
        "YouTube 平衡推荐点击与搜索意图",
        "Pinterest 使用场景型、灵感型表达积累长期流量",
      ],
      en: [
        "Reuse the core asset while rewriting hooks, titles, descriptions, and tags by platform",
        "Prioritize atmosphere, visuals, and immediate appeal on TikTok and Instagram",
        "Balance recommendation clicks with search intent on YouTube",
        "Use scenario- and inspiration-led framing for long-tail Pinterest discovery",
      ],
    },
    execution: {
      zh: [
        "记录选题、Hook、视觉结构、发布时间与平台包装方式",
        "观察首轮推荐、完播、互动、搜索和主页访问来源",
        "以近 10 条内容均值减少单条爆款对判断的干扰",
        "把有效元素带入下一轮选题和素材制作，而非简单复制内容",
      ],
      en: [
        "Tracked topic, hook, visual structure, timing, and platform packaging",
        "Reviewed initial recommendation, completion, engagement, search, and profile traffic",
        "Used recent ten-post averages to reduce one-off viral distortion",
        "Carried effective elements into the next production cycle instead of copying posts",
      ],
    },
    evidence: [
      {
        value: "3.5×",
        label: { zh: "TikTok 近 10 条均播", en: "TikTok recent 10-post average" },
        detail: { zh: "195 → 690", en: "195 → 690" },
      },
      {
        value: "5×",
        label: { zh: "YouTube Shorts 均播", en: "YouTube Shorts average views" },
        detail: { zh: "338 → 1.7K", en: "338 → 1.7K" },
      },
      {
        value: "176K",
        label: { zh: "Pinterest 月浏览量", en: "Pinterest monthly views" },
      },
    ],
    result: {
      zh: "多平台运营形成了“发布—识别信号—提炼规律—进入下一轮制作”的增长闭环，核心视频指标出现明确提升。",
      en: "Multi-platform work became a publish–diagnose–learn–rebuild growth loop, with clear gains in core video-performance indicators.",
    },
    reflection: {
      zh: "增长数据要服务决策，而不是装饰结果。下一步需要继续扩大稳定样本，并把高表现规律拆成团队可使用的选题与制作标准。",
      en: "Growth data should guide decisions, not decorate outcomes. The next step is expanding the stable sample and translating winning patterns into team-ready content standards.",
    },
    tags: ["TikTok", "YouTube", "Pinterest", "Performance Review"],
    accent: "paper",
  },
  {
    slug: "two-brand-content-systems",
    number: "05",
    title: {
      zh: "为两个品牌建立不同的内容系统",
      en: "Building Distinct Content Systems for Two Brands",
    },
    category: {
      zh: "双品牌运营 · 定位管理",
      en: "Multi-brand Operations · Positioning",
    },
    summary: {
      zh: "在同一照明品类下，为 FlyAchilles 与 Pulens 划分受众、内容语言、平台策略和制作标准，避免第二品牌成为简单复制。",
      en: "Separating audience, content language, channel strategy, and production standards so a second lighting brand does not become a duplicate.",
    },
    background: {
      zh: "在运营 FlyAchilles 的同时，需要启动 Pulens 的 Facebook、Instagram 与 YouTube。两个品牌都属于照明品类，却不能共享完全相同的定位与表达。",
      en: "While operating FlyAchilles, I also needed to launch Pulens across Facebook, Instagram, and YouTube. Both sit in lighting, but could not share identical positioning and expression.",
    },
    problem: {
      zh: "如果直接复用原品牌的内容逻辑，Pulens 会失去独立辨识度；如果完全拆开制作，又会让一个人运营两套品牌的成本失控。",
      en: "Directly copying the first brand would erase Pulens's identity, while fully separate production would make two-brand operations unsustainable for one operator.",
    },
    diagnosis: {
      zh: [
        "FlyAchilles 更适合温暖、生活方式与家庭场景表达",
        "Pulens 需要更克制、高端、建筑感的视觉与文案语言",
        "品牌可以共享流程，但不能共享未经区分的内容判断",
        "第二品牌启动阶段需要先验证内容方向，再扩大产量",
      ],
      en: [
        "FlyAchilles is better served by warm, lifestyle, and home-led storytelling",
        "Pulens needs a more restrained, premium, architectural visual and verbal language",
        "Brands can share workflows, but not undifferentiated content decisions",
        "A new brand should validate content direction before scaling production volume",
      ],
    },
    decision: {
      zh: [
        "分别建立品牌角色、受众、视觉、语气与内容支柱",
        "共享研究、排期、素材管理和复盘框架，降低重复成本",
        "对 AI 辅助内容设置品牌事实、场景与表述边界",
        "先在三个渠道建立 Pulens 的稳定发布与数据基线",
      ],
      en: [
        "Define separate brand roles, audiences, visuals, tones, and content pillars",
        "Share research, planning, asset management, and review frameworks to reduce duplicate work",
        "Set brand-fact, scenario, and claims boundaries for AI-assisted content",
        "Establish a stable publishing and performance baseline for Pulens across three channels",
      ],
    },
    execution: {
      zh: [
        "为两品牌分别制定内容选题、文案口径与视觉检查项",
        "建立可共享但能按品牌过滤的素材和排期结构",
        "按 Facebook、Instagram 与 YouTube 调整 Pulens 内容包装",
        "在复盘中同时检查平台表现和品牌辨识度，避免只追播放量",
      ],
      en: [
        "Created separate topic, copy, and visual-review criteria for each brand",
        "Built shared asset and planning structures with brand-level filtering",
        "Adapted Pulens packaging for Facebook, Instagram, and YouTube",
        "Reviewed both platform performance and brand distinctiveness instead of views alone",
      ],
    },
    evidence: [
      {
        value: "2",
        label: { zh: "独立运营的品牌", en: "Brands operated independently" },
      },
      {
        value: "3",
        label: { zh: "Pulens 已启动平台", en: "Pulens channels launched" },
        detail: { zh: "FB · IG · YT", en: "FB · IG · YT" },
      },
      {
        value: "1.6K",
        label: { zh: "Pulens 当前跨平台均播", en: "Pulens current cross-channel average" },
      },
    ],
    result: {
      zh: "在单人负责的条件下，两套品牌内容能够并行运转；Pulens 已完成三平台启动，并形成可继续验证与扩展的数据基线。",
      en: "Two distinct brand systems now run in parallel under one owner. Pulens has launched across three channels with an initial performance baseline ready for further testing and scale.",
    },
    reflection: {
      zh: "带团队之前，先要把哪些能力应该共享、哪些判断必须按品牌保留说清楚。下一步是把两套标准沉淀成更明确的岗位分工与审核机制。",
      en: "Before building a team, it is essential to define what should be shared and what must stay brand-specific. The next step is translating both systems into clearer roles and review ownership.",
    },
    tags: ["Brand Positioning", "Content System", "Pulens", "Team Readiness"],
    accent: "red",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
