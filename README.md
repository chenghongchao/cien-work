# Cien — 个人作品网站

程红超（Cien）的中英双语个人作品网站，聚焦海外社媒运营与 KOL / Influencer Marketing。项目使用 Next.js、TypeScript 和 Tailwind CSS 构建，可直接部署到 Vercel。

## 已实现

- 中英文切换，并在浏览器中记住语言偏好
- 个人介绍、工作经历、作品案例、能力、方法论和联系方式
- 4 个独立项目详情页
- 桌面端、平板和手机端响应式适配
- 页面标题、描述、Open Graph、Twitter Card、站点地图、robots.txt 和 favicon
- 邮件联系表单：不会收集或存储访客数据，提交后调用本机邮件应用
- Vercel 部署配置和站点网址环境变量

网站没有展示手机号，也没有补写未经确认的个人经历、业绩数据或社交账号。

## 本地运行

需要 Node.js 20.9 或更高版本，以及 npm。

```bash
npm install
copy .env.example .env.local
npm run dev
```

浏览器打开 <http://localhost:3000>。

macOS 或 Linux 可将第二条命令改为：

```bash
cp .env.example .env.local
```

正式检查：

```bash
npm run typecheck
npm run lint
npm run build
```

## 修改内容

主要内容集中在 `src/data`，无需在页面组件中寻找文字：

- `src/data/profile.ts`：姓名、职位、介绍、邮箱和头像
- `src/data/experience.ts`：工作经历
- `src/data/projects.ts`：作品案例和详情页内容
- `src/data/skills.ts`：能力模块
- `src/data/methodology.ts`：方法论
- `src/data/ui.ts`：导航和界面文案

替换头像时，覆盖 `public/images/cien-portrait.png` 即可。建议使用竖版图片，并保持文件名不变。

### 添加新项目

在 `src/data/projects.ts` 的 `projects` 数组中复制一个项目对象并修改内容。`slug` 只能使用英文小写字母、数字和连字符，例如 `new-campaign-workflow`。保存后，首页卡片和 `/projects/slug` 详情页会自动生成。

### 添加简历

目前简历入口按需求隐藏。准备好文件后：

1. 将中英文 PDF 放入 `public/resume/`。
2. 在 `src/data/profile.ts` 的 `resume.zh` 和 `resume.en` 中填写以 `/resume/` 开头的路径。
3. 如需在页面显示下载按钮，再在对应组件中启用入口。

## 上传到 GitHub

1. 登录 GitHub，创建一个空仓库，例如 `cien-portfolio`。不要预先添加 README、`.gitignore` 或 License。
2. 在本项目文件夹中运行：

```bash
git init
git add .
git commit -m "Build Cien portfolio website"
git branch -M main
git remote add origin https://github.com/你的用户名/cien-portfolio.git
git push -u origin main
```

如果 GitHub 要求登录，按终端提示通过浏览器授权，或使用 GitHub Desktop 上传。

## 部署到 Vercel

1. 登录 [Vercel](https://vercel.com/)，选择 **New Project**。
2. 连接 GitHub，找到刚创建的仓库并选择 **Import**。
3. Framework Preset 保持 **Next.js**，Root Directory 保持仓库根目录，其余构建设置使用默认值。
4. 点击 **Deploy**。部署完成后，Vercel 会提供一个公开的 `vercel.app` 网址。项目会自动读取 Vercel 提供的生产域名，因此首次发布不必手动填写环境变量。

如果希望固定使用指定域名生成 SEO 链接，可在 Environment Variables 中添加 `NEXT_PUBLIC_SITE_URL`，值为完整网址，例如 `https://cien.example.com`。

Vercel 连接 GitHub 后，向 `main` 分支推送的新提交会自动触发正式部署；其他分支和 Pull Request 会获得预览网址。

## 后续修改并重新发布

修改文件并在本地确认后运行：

```bash
npm run typecheck
npm run lint
npm run build
git add .
git commit -m "Update portfolio content"
git push
```

代码推送到 GitHub 后，Vercel 会自动重新构建和发布。

## 绑定个人域名

1. 在 Vercel 项目中打开 **Settings → Domains**。
2. 输入已购买的域名并添加。
3. 按 Vercel 页面显示的记录，到域名注册商或 Cloudflare DNS 中添加对应的 A、CNAME 或 TXT 记录。请以项目页面显示的具体值为准。
4. DNS 验证成功后，Vercel 会自动配置 HTTPS。
5. 项目会自动读取 Vercel 的生产域名。若设置了 `NEXT_PUBLIC_SITE_URL`，请将它更新为最终域名（包含 `https://`，末尾不加 `/`），然后重新部署一次。

如果同时绑定根域名和 `www` 子域名，建议在 Vercel 中将其中一个设置为另一个的重定向，避免搜索引擎收录重复页面。

## 环境变量

| 名称 | 必填 | 说明 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 可选 | 覆盖自动识别的网站网址，用于 SEO、站点地图和社交分享链接 |

本项目不需要数据库、第三方 API 密钥或其他服务端环境变量。

## 项目结构

```text
src/
  app/                  页面、SEO 和项目详情路由
  components/           页面组件与各内容板块
  data/                 可编辑的中英文内容
  lib/                  站点网址工具
public/
  images/               头像与图片资源
```

## 官方参考

- [GitHub：将本地项目添加到 GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
- [Vercel：从 Git 仓库部署](https://vercel.com/docs/git)
- [Vercel：添加和配置个人域名](https://vercel.com/docs/domains/working-with-domains/add-a-domain)

<!-- preview rebuild marker -->
