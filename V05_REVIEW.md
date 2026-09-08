# CIEN v0.5 — 交付与审核记录

## 范围

已实现五个主页面和四个真实成果详情路由，全部内容双语。保留 v0.4 视觉方向和原始 Hero，并扩展为完整的内容与交互实现。没有部署、没有 GitHub 推送、没有引入数据库、登录、CMS、API 或联系表单。

本地恢复点：`278e7ea`，提交名 `v0.4-immersive-home-checkpoint`。

## 本地入口

在自己的电脑解压后，双击 `start-site.cmd`。Vite 就绪后访问 [http://localhost:5173/](http://localhost:5173/)。Node.js 要求为 22.13.0 或更高版本。

本次工作环境已成功启动内部受管预览；其内部地址无法作为用户电脑上的 localhost 交付。完整运行步骤见 `README.md`。

## 功能与内容

| 项目 | 实现 |
| --- | --- |
| 默认语言 | 中文 |
| 语言切换 | 所有页面共用字典；原路由切换，localStorage 保留选择 |
| 固定导航 | CIEN、五个主页面、下载、中 / EN；当前页面指示 |
| 手机导航 | 可键盘操作的菜单，关闭后恢复焦点；下载与语言在页头可见 |
| 中文简历 | `/downloads/Cien_Resume_ZH.docx`，带 download 属性的普通链接 |
| 英文下载 | 显示 `RÉSUMÉ (ZH)`，同一中文原件 |
| 电话 / 邮箱 | 首页末段与 Contact；tel / mailto 链接 |
| 图片 | IMAGE 01–05 对应 Home、Capabilities、Results、Methodology、Contact |
| 图片替换 | `content/page-visuals.ts`；详见 `IMAGE_REPLACEMENT.md` |
| 成果详情 | `/results/creator-pipeline`、`/results/audience-recalibration`、`/results/social-operations`、`/results/community-system` |

首页按 Hero → Operator → Ownership → Proof → Capabilities → Selected Work → Experience → AI → Contact / Résumé → Next Page 展开。四个项目在首页和 Results 直接展示背景、责任、关键判断、结果，详情增加诊断、方法、推进与复盘。

公开数字来自提供的工作流母版与简历。80%+ 受众口径排除长期投放广告的 YouTube；Creator 开发、回复、合作、内容、上线数字明确为不同阶段的累计记录。没有添加销售金额、GMV、内部预算或未确认的团队管理经历。

## 重要视觉决定

- HOME 原图完整呈现，不改像素、不重绘头发、不增加滤镜，也不在手机裁掉肖像。
- 切片只在 Hero 内活动，随退出逐渐淡出。Operator 之后没有竖向切片墙，保留光线、颗粒和明暗连续性。
- Proof 保留三个错落的主证据；次级数字放在较安静的阅读位置，并附解释。
- Capabilities 的六个领域都有可见范围和证据；详细判断与方法可展开，能力页默认展开全部。
- 手机先显示完整文字，再进入图片；项目与证据改为可读序列，不缩小桌面布局。
- 所有主要正文至少 16px。英文使用已有的 Instrument Sans / Newsreader；中文使用设备原生中文字体回退，避免额外字体下载。

## 交互

| 模块 | 鼠标 / 焦点 / 触控行为 |
| --- | --- |
| 导航 | 当前路由短线、悬停与焦点反馈；真正路由跳转 |
| Hero | 原图边界内的克制切片位移；滚动退出时淡出；CTA 定位首页内容 |
| Operator | 四个空间文字节点选择，更新相应判断说明与产出 |
| Ownership | 14 个阶段；桌面方向键 / 上下阶段按钮，按顺序变化的阅读过渡；手机逐项点开 |
| Proof | 轻微前移、上下文变清晰，点击进入对应案例；没有数字滚动计数 |
| Capabilities | 局部随指针变化的亮度、少量文字位移、可展开判断与系统方法；范围与证据始终可读 |
| Selected Work | 细线揭示、元信息明度变化、箭头反馈；预览文字始终可见 |
| Experience | 责任摘要保持可读；悬停与焦点增强，点击展开完整职责 |
| Contact / Résumé | 克制的吸附响应、清晰焦点、直接执行 mailto / tel / download |
| Methodology | 7 阶段循环和 5 阶段 Creator Pipeline；每阶段呈现输入 / 评估 / 决策 / 产出 / 下一步 |
| 次页摄影 | 可见区域内少量滚动位移，离开可见区域不持续运行动画 |

没有安装新的动效库。主要由 CSS transitions / keyframes 完成，少量 requestAnimationFrame 只在滚动或指针事件后更新变量，没有永久循环。

`prefers-reduced-motion` 关闭动效、平滑滚动和位移，保留点击、键盘和触控功能。`?review=still` 用于本地静态构图检查，会展开阶段内容并取消动效。`?review=environment` 可在首页观察环境层。

参考方向：从 [MotionSites](https://motionsites.ai/)、[React Bits](https://reactbits.dev/animations/magnet)、[Uiverse](https://uiverse.io/)、[Aceternity 的方向感交互](https://ui.aceternity.com/components/direction-aware-hover) 中选择局部响应、方向反馈、细微位移等概念；没有复制视觉皮肤或安装这些组件库。

## 验证结果与边界

- 生产构建已成功。
- 全部路由 / 布局入口的 TypeScript 检查：0 个诊断。
- 9 个真实路由的服务端渲染：200；不存在的案例返回 404。
- 页面渲染检查覆盖默认中文、五项导航、案例链接、图片路径、下载链接、电话和邮箱。
- 双语结构、14 阶段顺序、6 个能力领域、7 阶段方法论、4 个案例及主要证据数字一致。
- 5 张图片和中文简历均与提供的原文件字节一致。
- 项目测试已用实际网站的元信息、焦点与响应式要求替换过时的 starter-only 断言。
- 最终项目测试：8 项通过，0 项失败；最终生产构建成功。

**浏览器视觉 QA 尚未完成。** 前一次浏览器操作被自动审批审核拒绝，理由为工作区额度不足。没有通过其他浏览器或控制路径绕过该拒绝。因此，本记录不把服务端渲染测试当作真实浏览器点击、语言刷新行为、手机视口、200% 文字放大或 reduced-motion 视觉验收。

代码中这些行为已实现，但需要工作区额度恢复后再进行实际浏览器验证，才能判定全部 23 条验收项均已通过。当前状态是完整实现已交付、等待最终视觉审核，不能宣称所有验收项已验证。

## 性能与素材边界

- 主图约 2.4 MiB / 页，是最大加载成本；一页只加载自己的主图。
- 没有 WebGL、全屏持续模糊、循环视频或新增动效依赖。
- 双语内容是本地字典，无 CMS 请求；字典客户端 chunk 约 16.4 KiB gzip。
- 保持原有 React / TypeScript / Vite / Vinext 及依赖锁文件。
- 英文简历未提供，按要求下载中文原件，不伪造英文版。
- 原中文简历仍列 QQ 邮箱，网站使用本轮指定的 Gmail；如要统一下载件，应在最终审核时一起确认新版原件。
- AI 具体工作案例尚未确认。开发预览显示约定提示；生产页面只保留已确认的 ChatGPT / Claude 工具使用事实，不输出占位提示。

## 文件清单

新增：

```text
app/capabilities/page.tsx
app/contact/page.tsx
app/methodology/page.tsx
app/results/page.tsx
app/results/[slug]/page.tsx
components/contact-links.tsx
components/experience-composition.tsx
components/home-page.tsx
components/next-scene.tsx
components/operating-perspective.tsx
components/page-visual.tsx
components/primary-pages.tsx
components/proof-composition.tsx
components/result-detail.tsx
components/selected-work.tsx
components/site-motion.tsx
components/site-provider.tsx
components/stage-explorer.tsx
content/en.ts
content/zh.ts
content/page-visuals.ts
public/downloads/Cien_Resume_ZH.docx
public/images/cien-capabilities-original.png
public/images/cien-results-original.png
public/images/cien-methodology-original.png
public/images/cien-contact-original.png
tests/site-contract.test.mjs
start-site.cmd
IMAGE_REPLACEMENT.md
V05_REVIEW.md
```

修改：

```text
app/globals.css
app/layout.tsx
app/page.tsx
components/home-capabilities.tsx
components/home-continuity.tsx
components/home-environment.tsx
components/home-geometry.ts
components/home-hero.tsx
components/home-navigation.tsx
tests/rendered-html.test.mjs
tests/ui-components.test.mjs
start-home.cmd
README.md
```
