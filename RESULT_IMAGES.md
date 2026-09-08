# 成果页图片替换

8 个位置已固定在 `content/result-evidence.ts`：网站转化 2 张、平台数据 4 张、红人合作案例 2 张。

1. 将已确认可以公开的图片放进 `public/images/results/`。
2. 在 `content/result-evidence.ts` 对应条目中，把 `src: null` 改成文件的站内路径，例如 `src: "/images/results/website-01.png"`。
3. 填好同一条目的中英文 `title` 和 `alt`。图片会保持完整比例、自动出现在对应分类，并启用点击放大。

建议命名：`website-01.png`、`website-02.png`、`platform-01.png` 至 `platform-04.png`、`creator-01.png`、`creator-02.png`。也支持 JPG / WebP，自行保持扩展名一致。

网站与合作案例默认横向 16:10 画框，平台数据默认纵向 4:5 画框。实际图片采用 `object-fit: contain`，完整保留数据、文字和截图边缘，不强制裁切。未填图片的位置保持留白，不会显示错误图片或假数据。

不要上传未脱敏的业务后台。内部销售额、订单金额、预算、Creator 私人联系方式等应在本地去除，公开图片只保留已批准的汇总证据。
