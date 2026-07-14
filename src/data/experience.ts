import type { LocalizedText } from "./types";

export type ExperienceGroup = {
  title: LocalizedText;
  items: Record<"zh" | "en", string[]>;
};

export const experience = {
  company: "FlyAchilles",
  period: "2026.05 — Present",
  role: {
    zh: "社媒运营 / KOL & Influencer Marketing",
    en: "Social Media Operations / KOL & Influencer Marketing",
  } satisfies LocalizedText,
  context: {
    zh: "2026 年 5 月中加入 FlyAchilles，5 月底开始社媒运营，6 月中开始接触 KOL / Influencer 运营。目前以独立执行为主。",
    en: "Joined FlyAchilles in mid-May 2026, began social media operations at the end of May, and moved into KOL / influencer operations in mid-June. The role is currently execution-led with independent ownership.",
  } satisfies LocalizedText,
  groups: [
    {
      title: { zh: "社媒运营", en: "Social media operations" },
      items: {
        zh: [
          "负责 TikTok、Instagram、YouTube、Facebook、Pinterest 的日常内容运营",
          "根据平台特点优化标题、文案、标签和发布形式",
          "分析播放、互动、受众、搜索和推荐流量",
          "根据数据调整内容方向与发布策略",
        ],
        en: [
          "Operate day-to-day content across TikTok, Instagram, YouTube, Facebook, and Pinterest",
          "Adapt titles, copy, hashtags, and formats to each platform",
          "Review views, engagement, audience signals, search, and recommendation traffic",
          "Adjust content direction and publishing strategy based on performance",
        ],
      },
    },
    {
      title: { zh: "创作者合作", en: "Creator partnerships" },
      items: {
        zh: [
          "筛选家居、生活方式、DIY、室内设计等垂类创作者",
          "负责开发邮件、跟进、合作方案沟通与谈判",
          "评估粉丝质量、平均播放、品牌合作表现、美国受众比例和 CPM",
          "推进赠品、小额付费和长期合作测试，并管理交付与使用权",
        ],
        en: [
          "Source creators across home, lifestyle, DIY, and interior design verticals",
          "Own outreach, follow-up, partnership communication, and negotiation",
          "Evaluate audience quality, average views, branded-content performance, US audience share, and CPM",
          "Coordinate gifting, paid tests, longer-term trials, deliverables, and usage rights",
        ],
      },
    },
    {
      title: { zh: "合同与流程", en: "Contracts and workflow" },
      items: {
        zh: [
          "起草和修改创作者合作合同与 Creative Brief",
          "明确品牌安全审核、自然转发权、交付内容和违约处理",
          "搭建 KOL 编号、平台账号、状态、报价、CPM 和合作数据表",
          "建立可复盘、可扩展的红人运营流程",
        ],
        en: [
          "Draft and revise creator agreements and creative briefs",
          "Clarify brand-safety review, organic reposting rights, deliverables, and breach handling",
          "Build structured records for KOL IDs, platform accounts, status, quotes, CPM, and partnership data",
          "Develop a reviewable and scalable influencer operations workflow",
        ],
      },
    },
  ] satisfies ExperienceGroup[],
};
