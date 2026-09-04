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
    slug: "us-creator-pipeline",
    number: "01",
    title: {
      zh: "从 0 到 1 搭建美国 Creator Pipeline",
      en: "Building a U.S. Creator Pipeline from 0 to 1",
    },
    category: {
      zh: "Creator Operations · 业务搭建",
      en: "Creator Operations · System Building",
    },
    summary: {
      zh: "把 Creator 搜索、筛选、谈判、寄样、内容审核、上线、数据与付款串成完整业务链路。",
      en: "Building an end-to-end creator workflow from sourcing and screening through publishing, reporting, and payment.",
    },
    background: {
      zh: "公司此前没有成熟的 KOL 体系，也没有专门人员负责 Creator 合作；海外社媒与 Creator 项目由我单人负责。",
      en: "The company had no mature creator operation or dedicated owner. I became the sole owner of overseas social and creator partnerships.",
    },
    problem: {
      zh: "需要同时解决名单来源、筛选标准、报价判断、合作推进以及上线后的数据与付款闭环。",
      en: "The work required a repeatable way to source creators, screen quality, evaluate rates, manage delivery, and close the loop after publishing.",
    },
    diagnosis: {
      zh: [
        "粉丝量不能代表真实合作价值，需要核验美国受众、近期自然播放与内容匹配度",
        "报价必须结合内容质量、互动、CPM、权益和合作风险判断",
        "多个 Creator 并行时，需要统一状态和下一步动作",
        "确认合作只是开始，物流、内容、上线和付款都会影响最终交付",
      ],
      en: [
        "Follower count alone could not represent partnership value; U.S. audience, recent organic performance, and content fit required validation",
        "Rates needed to be evaluated against content quality, engagement, CPM, rights, and delivery risk",
        "Parallel creator projects required shared stages and next actions",
        "A confirmed partnership was only the beginning; logistics, content, publishing, and payment all affected delivery",
      ],
    },
    decision: {
      zh: [
        "建立 Audience、近期表现、内容质量、互动、报价与 CPM 的综合审核框架",
        "美国 Audience 原则上要求 70%+，不满足则直接 PASS",
        "按置换、佣金与付费测试选择合作方式，并独立谈价或拒绝不合理报价",
        "按开发、审核、谈判、寄样、内容、上线、数据、付款建立统一 Pipeline",
      ],
      en: [
        "Built a screening framework across audience, recent performance, content quality, engagement, rates, and CPM",
        "Used 70%+ U.S. audience share as a core qualification threshold",
        "Selected gifting, commission, or paid-test structures and negotiated or declined based on value",
        "Structured the pipeline around sourcing, review, negotiation, seeding, content, publishing, reporting, and payment",
      ],
    },
    execution: {
      zh: [
        "自主搜索并开发美国 Creator，处理回复并完成数据审核",
        "负责谈价、选品、地址收集、发货协调、物流追踪与异常处理",
        "负责 Brief、Draft Review、Caption/Title、Tracking Link、Discount Code 与发布排期",
        "上线后回收数据、收款信息，协调财务付款并判断是否二次合作",
      ],
      en: [
        "Sourced U.S. creators directly, handled replies, and completed audience and performance reviews",
        "Owned negotiation, product selection, addresses, fulfillment, logistics tracking, and issue resolution",
        "Owned briefs, draft review, captions/titles, tracking links, discount codes, and publishing schedules",
        "Collected post-live data and payment details, coordinated finance, and assessed repeat partnerships",
      ],
    },
    evidence: [
      { value: "8,000+", label: { zh: "Creator 开发", en: "Creators sourced" } },
      { value: "3,000+", label: { zh: "回复处理", en: "Replies handled" } },
      { value: "37", label: { zh: "正式合作并寄样", en: "Confirmed partnerships" } },
    ],
    result: {
      zh: "推动 37 位 Creator 进入正式合作并完成寄样，已回收 24 份内容，8 个项目正式上线，且已有 Creator 内容产生订单。",
      en: "Moved 37 creators into confirmed partnerships and product seeding, with 24 pieces of content returned, 8 projects live, and creator content already contributing orders.",
    },
    reflection: {
      zh: "Creator Operations 的核心不是名单规模，而是筛选质量、交付风险和闭环能力。只有把每个阶段的判断标准和下一步动作明确下来，业务才能从个人执行升级成可管理的系统。",
      en: "Creator operations is less about list size and more about screening quality, delivery risk, and operational closure. Clear decision rules and next actions are what make the system manageable and scalable.",
    },
    tags: ["Creator Operations", "Audience Review", "Negotiation", "Pipeline"],
    accent: "red",
  },
  {
    slug: "north-america-audience-repositioning",
    number: "02",
    title: {
      zh: "把跑偏的社媒受众重新校准到北美市场",
      en: "Repositioning Social Audiences Back to North America",
    },
    category: {
      zh: "Social Strategy · Audience",
      en: "Social Strategy · Audience",
    },
    summary: {
      zh: "接手长期断更、自然推荐弱且受众全球跑偏的存量账号，重新建立北美市场信号。",
      en: "Repositioning under-managed accounts with weak organic distribution back toward the target North American market.",
    },
    background: {
      zh: "接手时账号长期缺乏持续管理，想起来就发、想不起来就断更，主页和内容老旧，多个平台受众严重偏离北美目标市场。",
      en: "I inherited accounts with inconsistent publishing, outdated profiles and content, weak organic distribution, and audience geography drifting far beyond the target market.",
    },
    problem: {
      zh: "英文内容并不等于北美流量，需要重新建立稳定更新、住宅场景、文案标签和内容结构等综合信号。",
      en: "English-language content did not automatically create North American distribution, so the channel signals had to be rebuilt through consistency, context, copy, and creative structure.",
    },
    diagnosis: {
      zh: [
        "长期断更削弱平台对账号垂类和受众的判断",
        "历史内容和标签缺少明确北美住宅语境",
        "只看播放量无法判断流量是否来自目标市场",
        "不同平台需要独立测试，不能用一套内容逻辑解决所有问题",
      ],
      en: [
        "Irregular publishing weakened platform understanding of the account and its intended audience",
        "Historical content and hashtags lacked clear North American residential context",
        "Views alone could not indicate whether distribution reached the target market",
        "Each platform required its own testing loop rather than one universal content formula",
      ],
    },
    decision: {
      zh: [
        "先恢复持续稳定更新，并重新统一主页与内容方向",
        "强化 American Homes、Backyard、Front Porch、Outdoor Living 等北美住宅语境",
        "持续测试 Hook、视频结构、Title、Caption、Hashtag 与发布时间",
        "把 Audience 地域变化与 Referral Traffic 一起作为复盘信号",
      ],
      en: [
        "Restored consistent publishing and aligned profile and content direction first",
        "Strengthened U.S. residential context such as American homes, backyard, front porch, and outdoor living",
        "Continuously tested hooks, video structure, titles, captions, hashtags, and timing",
        "Reviewed audience geography together with referral traffic as a quality signal",
      ],
    },
    execution: {
      zh: [
        "重构选题、住宅场景和首 1–2 秒视觉 Hook",
        "调整北美导向文案、标题和标签，并持续 AB Test",
        "根据后台 Audience 与内容表现复盘并调整策略",
        "把受众审核方法进一步应用到 Creator 合作筛选中",
      ],
      en: [
        "Rebuilt topics, residential scenarios, and first-second visual hooks",
        "Adjusted North America-focused copy, titles, and hashtags through ongoing A/B testing",
        "Reviewed audience and content performance and iterated accordingly",
        "Applied the same audience-quality logic to creator partnership screening",
      ],
    },
    evidence: [
      { value: "80%+", label: { zh: "核心平台北美受众", en: "North America audience" } },
      { value: "90%+", label: { zh: "TikTok 北美受众", en: "TikTok North America audience" } },
      { value: "5", label: { zh: "持续运营平台", en: "Operating channels" } },
    ],
    result: {
      zh: "除长期广告投放的 YouTube 外，其余核心平台受众从全球多地重新校准至北美 80%+，其中 TikTok 达 90%+。",
      en: "Excluding YouTube, where ongoing paid media affected the mix, the core channels were repositioned from globally scattered audiences to 80%+ North America, with TikTok above 90%.",
    },
    reflection: {
      zh: "受众校准不是改一次标签就能解决，而是内容、场景、发布节奏和互动信号长期一致的结果。比粉丝增长更重要的是先把流量质量拉回正确市场。",
      en: "Audience repositioning is not a one-time hashtag fix. It comes from consistent creative, context, cadence, and engagement signals. Traffic quality had to be corrected before chasing follower growth.",
    },
    tags: ["Audience Repositioning", "A/B Testing", "North America", "Social Strategy"],
    accent: "dark",
  },
  {
    slug: "multi-platform-social-system",
    number: "03",
    title: {
      zh: "重建长期断更品牌的多平台内容体系",
      en: "Rebuilding a Multi-platform Social System",
    },
    category: {
      zh: "Content Operations · Growth",
      en: "Content Operations · Growth",
    },
    summary: {
      zh: "把 TikTok、Instagram、Facebook、YouTube、Pinterest 从零散发布整理为稳定更新、分平台适配和持续复盘的内容体系。",
      en: "Turning five inconsistently managed channels into a repeatable publishing, adaptation, testing, and review system.",
    },
    background: {
      zh: "公司账户原本权重偏低，长期缺乏专人管理，发布不稳定，主页和内容缺少统一品牌感。",
      en: "The brand accounts had low organic momentum, inconsistent ownership, irregular publishing, and limited consistency in brand presentation.",
    },
    problem: {
      zh: "一个人同时管理五个平台，需要在有限时间内兼顾效率、平台差异、内容质量和业务承接。",
      en: "As a solo operator across five channels, I needed to balance efficiency, platform differences, content quality, and downstream business value.",
    },
    diagnosis: {
      zh: [
        "各平台承担的任务不同，不能简单复制同一条内容",
        "灯具内容最需要最终效果、安装前后和真实住宅夜景来建立视觉说服力",
        "内容价值不能只看播放，还要结合受众质量、私信询盘和网站 Referral Traffic",
        "单人执行必须建立素材复用和清晰的发布规则",
      ],
      en: [
        "Each platform served a different role and could not rely on simple cross-post duplication",
        "Lighting content benefited most from final results, before/after transformation, and real-home night scenes",
        "Content value required audience quality, inbound messages, and referral traffic in addition to views",
        "A solo operating model required reusable assets and clear publishing rules",
      ],
    },
    decision: {
      zh: [
        "建立共用素材池，再按平台重新包装标题、文案、链接和 CTA",
        "TikTok 强测试，Instagram 强 Reels 与品牌感，Facebook 做链接与社区，Pinterest 做视觉发现，YouTube 兼顾 Shorts 与引流",
        "优先测试最终效果前置、安装到夜景、原版与二次剪辑等内容形式",
        "结合站内 Sessions、平台数据与询盘反馈判断渠道价值",
      ],
      en: [
        "Built a reusable asset pool and adapted titles, copy, links, and CTAs by platform",
        "Used TikTok for testing, Instagram for Reels and brand presentation, Facebook for links and community, Pinterest for visual discovery, and YouTube for Shorts and referral value",
        "Prioritized tests around final-result-first, install-to-night reveal, and original-versus-recut formats",
        "Combined referral sessions, platform data, and inbound signals to evaluate channel value",
      ],
    },
    execution: {
      zh: [
        "恢复日更节奏并统一主页品牌形象",
        "建立选题、Hook、字幕、音乐、文案、标签和发布规则",
        "持续做 AB Test，根据数据调整视频内容、标题、标签和方向",
        "把 Creator 实景内容纳入品牌内容二次利用和联动发布",
      ],
      en: [
        "Restored daily publishing cadence and aligned brand presentation",
        "Created repeatable rules for topics, hooks, subtitles, music, copy, hashtags, and publishing",
        "Ran ongoing A/B tests and adjusted creative, titles, hashtags, and direction based on data",
        "Integrated creator-made real-life content into brand-owned reuse and cross-channel publishing",
      ],
    },
    evidence: [
      { value: "5", label: { zh: "核心社媒平台", en: "Core social channels" } },
      { value: "10.8W→17.4W", label: { zh: "Pinterest 月浏览", en: "Pinterest monthly views" } },
      { value: "1", label: { zh: "单人 Owner", en: "Single operating owner" } },
    ],
    result: {
      zh: "五个平台从低频、断更和弱品牌感恢复为持续运营状态，主页、内容体系和北美受众方向得到统一，并持续产生私信询盘。",
      en: "The five channels moved from irregular, low-momentum publishing to an active operating system with aligned brand presentation, content direction, and North America audience targeting, while generating ongoing inbound messages.",
    },
    reflection: {
      zh: "多平台运营的重点不是发得更多，而是让每个平台承担清晰任务，并用同一套业务目标去判断哪些内容值得继续投入。",
      en: "Multi-platform operations is not about posting more. Each channel needs a clear job, while the same business objectives determine which content deserves continued investment.",
    },
    tags: ["Multi-platform", "Content Strategy", "Referral Traffic", "Growth Testing"],
    accent: "sand",
  },
  {
    slug: "creator-publishing-tracking-operations",
    number: "04",
    title: {
      zh: "把 Creator 合作从寄样推进到上线与结算",
      en: "Moving Creator Partnerships from Seeding to Publishing and Settlement",
    },
    category: {
      zh: "Project Ownership · Delivery",
      en: "Project Ownership · Delivery",
    },
    summary: {
      zh: "建立上线前后的检查与异常处理流程，确保 Creator 项目不止停留在确认合作，而是真正完成交付。",
      en: "Building a structured pre- and post-publishing workflow so creator partnerships move beyond confirmation into completed delivery.",
    },
    background: {
      zh: "Creator 合作同时牵涉产品、库存、采购、仓库、物流、客服、网站、内容审核、Tracking、折扣码和财务。",
      en: "Creator delivery depended on product, inventory, procurement, warehouse, logistics, customer service, web, content review, tracking, discount codes, and finance.",
    },
    problem: {
      zh: "多个合作并行时，需要明确每个项目卡在哪一步，并在出现损坏、清关、补发、内容修改或付款问题时快速推动解决。",
      en: "With multiple partnerships progressing in parallel, every project needed a visible stage and a reliable path for resolving logistics, content, tracking, and payment issues.",
    },
    diagnosis: {
      zh: [
        "合作确认不代表交付完成，物流和补发可能直接影响发布排期",
        "内容审核既要满足品牌要求，也不能把 Creator 内容改成僵硬广告",
        "Tracking Link、Discount Code 和发布时间需要在上线前确认",
        "数据回收和付款节点如果不提前定义，项目就无法真正闭环",
      ],
      en: [
        "A confirmed partnership did not guarantee delivery; logistics and replacements could directly affect publishing schedules",
        "Content review had to meet brand requirements without turning creator work into rigid advertising",
        "Tracking links, discount codes, and publishing dates had to be confirmed before launch",
        "Reporting and payment milestones needed to be defined in advance for true operational closure",
      ],
    },
    decision: {
      zh: [
        "为每个合作建立 Stage + Next Action，而不是只记录一个状态",
        "上线前统一检查 Video、Caption、Title、Tracking Link、Discount Code 与发布日期",
        "Creator 对外沟通由我统一承接，内部再协调客服、采购、仓库、网站和财务",
        "上线后按节点回收数据和付款信息，并判断是否进入二次合作",
      ],
      en: [
        "Tracked each partnership by stage plus next action instead of a static status",
        "Used a pre-publish checklist for video, caption, title, tracking link, discount code, and publishing date",
        "Centralized creator communication while coordinating customer service, procurement, warehouse, web, and finance internally",
        "Collected post-live data and payment details on schedule and assessed repeat partnerships",
      ],
    },
    execution: {
      zh: [
        "处理库存、清关、产品损坏、补发和物流异常",
        "审核夜景、Voice-over、音乐版权、产品展示、节奏及标题文案",
        "对接网站生成 Tracking Link 与 Discount Code，并确认上线日期",
        "上线后回收数据、PayPal 等付款信息并协调财务完成付款",
      ],
      en: [
        "Resolved inventory, customs, product-damage, replacement, and logistics issues",
        "Reviewed night shots, voice-over, music rights, product visibility, pacing, titles, and captions",
        "Coordinated tracking links and discount codes with the web team and confirmed publishing dates",
        "Collected post-live performance and payment details and coordinated finance settlement",
      ],
    },
    evidence: [
      { value: "37", label: { zh: "正式合作", en: "Creator partnerships" } },
      { value: "24", label: { zh: "已回收内容", en: "Content returned" } },
      { value: "8", label: { zh: "正式上线", en: "Projects live" } },
    ],
    result: {
      zh: "把 Creator 合作从联系成功推进为产品、物流、内容、Tracking、上线、数据和付款都有明确下一步的项目流程；到目前没有合作项目因流程失控直接跑单。",
      en: "Turned creator partnerships into a delivery workflow with clear next actions across product, logistics, content, tracking, publishing, reporting, and payment, with no partnerships lost to operational drop-off so far.",
    },
    reflection: {
      zh: "Creator Operations 不在 BD 成功时结束，而是要对最终交付负责。真正的项目管理能力体现在异常发生时还能持续推动闭环。",
      en: "Creator operations does not end when business development succeeds. Ownership means continuing to drive closure when exceptions and delivery problems appear.",
    },
    tags: ["Project Delivery", "Draft Review", "Tracking", "Cross-functional"],
    accent: "paper",
  },
  {
    slug: "facebook-community-member-day",
    number: "05",
    title: {
      zh: "从 0 搭建 Facebook Community 与 Member Day",
      en: "Building Facebook Community and Member Day from Zero",
    },
    category: {
      zh: "Community · Campaign",
      en: "Community · Campaign",
    },
    summary: {
      zh: "建立 Facebook Group 与固定会员营销节点，为品牌增加用户沉淀、重复触达和订单承接场景。",
      en: "Adding a retention layer through a Facebook Group and a recurring member campaign.",
    },
    background: {
      zh: "品牌社媒原本偏单向发布，用户看完内容后缺少长期承接空间，也没有固定会员营销机制。",
      en: "The brand's social presence was largely one-way publishing, with limited infrastructure for retaining users or running recurring member campaigns.",
    },
    problem: {
      zh: "需要验证一个从 0 开始的社群和固定营销节点，是否可以形成用户沉淀、重复触达和真实订单。",
      en: "The goal was to validate whether a simple community and recurring campaign could support retention, repeated contact, and real conversion.",
    },
    diagnosis: {
      zh: [
        "普通帖子能够曝光，但很难形成长期关系",
        "Facebook 更适合承接链接、社群与活动机制",
        "新社群早期不应该先追规模，而应该先验证是否有人加入、参与和下单",
        "固定时间和明确利益点有助于培养用户预期",
      ],
      en: [
        "Regular posts could create exposure but not durable relationships",
        "Facebook was better suited to links, community, and recurring campaigns",
        "An early community should validate participation and conversion before chasing scale",
        "A recurring time window and clear benefit help build user expectation",
      ],
    },
    decision: {
      zh: [
        "从 0 建立 Facebook Group 并纳入日常内容承接",
        "设置每月 5 日开始、持续 3 天的固定 Member Day",
        "会员日设置 12% 折扣，形成清晰固定利益点",
        "在 Facebook 内容中连接产品链接、Group 与 Member Day",
      ],
      en: [
        "Built a Facebook Group from zero and integrated it into ongoing social content",
        "Created a recurring Member Day beginning on the 5th of each month and lasting three days",
        "Set a 12% member discount as a clear recurring benefit",
        "Connected product links, the Group, and Member Day messaging in Facebook content",
      ],
    },
    execution: {
      zh: [
        "建立 Group 基础页面、加入路径和运营规则",
        "设计固定会员日文案、优惠机制与内容提醒",
        "在日常 Facebook 内容中持续加入社区与活动承接",
        "根据成员、互动和订单反馈继续验证机制",
      ],
      en: [
        "Set up the Group foundation, join path, and operating rules",
        "Designed recurring Member Day messaging, discount mechanics, and content reminders",
        "Integrated community and campaign calls-to-action into ongoing Facebook content",
        "Continued validating the model through member, interaction, and order feedback",
      ],
    },
    evidence: [
      { value: "0→14", label: { zh: "Facebook Group 成员", en: "Facebook Group members" } },
      { value: "3 Days", label: { zh: "Member Day 周期", en: "Member Day window" } },
      { value: "12%", label: { zh: "会员优惠", en: "Member discount" } },
    ],
    result: {
      zh: "完成 Facebook Group 与 Member Day 从 0 到 1 的机制验证，社群从 0 增长到 14 人，并产生实际订单。",
      en: "Validated the Facebook Group and recurring Member Day model from zero, growing the initial community from 0 to 14 members and generating actual orders.",
    },
    reflection: {
      zh: "这个项目当前价值不在规模，而在于验证社区与固定营销节点确实能够运转并产生订单。下一阶段才是扩大成员和优化活动参与率。",
      en: "The value is not scale yet; it is proving that the community and recurring campaign mechanism can operate and generate orders. Scaling membership and participation comes next.",
    },
    tags: ["Facebook Group", "Member Day", "Community", "Campaign"],
    accent: "red",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
