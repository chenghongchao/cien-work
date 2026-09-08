# 页面图片替换

所有页面的主图都通过 `content/page-visuals.ts` 管理，并由 `components/page-visual.tsx` 统一渲染。

| 提供的图片 | 页面 | 当前静态文件 |
| --- | --- | --- |
| IMAGE 01 / 1.png | HOME | `public/images/cien-hero-original.png` |
| IMAGE 02 / 2.png | CAPABILITIES | `public/images/cien-capabilities-original.png` |
| IMAGE 03 / 3.png | RESULTS | `public/images/cien-results-original.png` |
| IMAGE 04 / 4.png | METHODOLOGY | `public/images/cien-methodology-original.png` |
| IMAGE 05 / 5.png | CONTACT | `public/images/cien-contact-original.png` |

五张图片均是原文件的字节一致副本，没有重新生成、修图或重新编码。

## 替换步骤

1. 将新图片放入 `public/images/`，建议使用新的英文文件名，避免浏览器继续显示旧缓存。
2. 在 `content/page-visuals.ts` 对应页面的 `src` 修改一个路径，例如 `/images/cien-capabilities-v2.png`。
3. 需要时调整 `objectPositionDesktop` 和 `objectPositionMobile`，例如 `60% 50%`。这两个值控制实际显示位置。`focalPoint` 记录主体的位置，作为后续美术调整的参考。
4. 更新 `altZh` / `altEn`，使替代文字准确描述新图片。

当前图像尺寸均为 1672 × 941，接近 16:9。替换图建议至少保持该尺寸与比例；更大版本可用，但应关注单页加载体积。若尺寸改变，同时更新 `width` / `height` 以预留准确空间。

HOME 使用 `object-fit: contain`，保留完整画面；手机上将文字放到图片前方，仍不裁掉原图。其他页面在手机采用 4:3 的摄影视窗，用移动端 object position 保留主体。所有内容均由 HTML 承载，不烘焙进图片。

## Hero 切片的保护

`components/home-geometry.ts` 的切片边界描摹自原始 IMAGE 01。HOME 更换为一个新 `src` 后，旧边界的附加切片动效会自动停用；新图片仍正常显示，不需要改组件。

只有新 Hero 被再次确认适用同一切片结构时，才把映射中的 `fragmentationSource` 更新到新路径。若新图的结构完全不同，应先重新描摹边界，再启用效果。

切片只存在于 Hero 内部。进入 Operator 后，仅保留全站的颗粒、色调和光线连续性，不再重复显示竖向切片。

## 目前的性能取舍

每张原 PNG 约 2.4 MiB，每个主页面只请求自己的主图。为保护批准的画面，本轮没有把原图有损压缩成 WebP / AVIF。图片是当前主要加载成本；后续可以用经过视觉确认的压缩副本替换路径。
