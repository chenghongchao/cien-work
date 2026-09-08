# CIEN — Social & Creator Operations

Cien 的中英双语专业能力网站，包含首页、能力、成果、方法论、联系和四个成果详情页。

## Windows 本地预览

安装 Node.js 22.13 或更新版本，解压完整项目后双击 `start-site.cmd`。启动完成后打开 http://localhost:5173/ 。保留命令行窗口，关闭窗口会结束服务。

手动运行：

```bash
npm install
npm run dev
```

## Vercel

项目保留原生 Next.js 生产构建。`vercel.json` 已指定 `npm ci` 和 `npm run build:vercel`，无需数据库、密钥或额外服务。

```bash
npm run typecheck
npm run build:vercel
```

发布源仓库为 `chenghongchao/cien-work`，使用 `main` 分支。Vercel 项目名为 `cien-work`；用户已授权公开发布完整网站、现有照片、联系方式及中文简历。

## Sites / Vinext

本地开发与 Sites 构建保持原有 Vinext 流程：

```bash
npm run build
node --test tests/site-contract.test.mjs tests/rendered-html.test.mjs
```

## 内容维护

- `content/zh.ts`、`content/en.ts`：中英内容与职业事实。
- `content/page-visuals.ts`：五张主图、页面路由和联系方式。
- `content/result-evidence.ts`：八个成果图位与案例摘要。
- `app/globals.css`、`app/refinements.css`：基础视觉与 v0.6 交互样式。
- `public/downloads/Cien_Resume_ZH.docx`：原中文简历。

八个成果图位的补图方式见 `RESULT_IMAGES.md`；本轮改动与验证范围见 `V06_REVIEW.md`。仅上传已经确认可公开的脱敏材料。
