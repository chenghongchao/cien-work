export const pageVisuals = {
  home: { src: "/images/cien-hero-original.png", fragmentationSource: "/images/cien-hero-original.png" as string, altZh: "CIEN 的黑白切片肖像", altEn: "A monochrome fragmented portrait of Cien", objectPositionDesktop: "50% 50%", objectPositionMobile: "50% 50%", focalPoint: { x: .64, y: .42 }, width: 1672, height: 941 },
  capabilities: { src: "/images/cien-capabilities-original.png", altZh: "CIEN 在窗边审视笔记本电脑上的工作", altEn: "Cien reviewing work at a desk by the window", objectPositionDesktop: "50% 50%", objectPositionMobile: "61% 50%", focalPoint: { x: .6, y: .46 }, width: 1672, height: 941 },
  results: { src: "/images/cien-results-original.png", altZh: "笔记本电脑与数据分析的黑白工作场景", altEn: "A monochrome working scene with a laptop and analytics", objectPositionDesktop: "50% 50%", objectPositionMobile: "70% 50%", focalPoint: { x: .73, y: .49 }, width: 1672, height: 941 },
  methodology: { src: "/images/cien-methodology-original.png", altZh: "CIEN 在内容工作室进行规划与制作", altEn: "Cien planning and producing content in a studio", objectPositionDesktop: "50% 50%", objectPositionMobile: "62% 50%", focalPoint: { x: .6, y: .53 }, width: 1672, height: 941 },
  contact: { src: "/images/cien-contact-original.png", altZh: "CIEN 站在窗前望向城市", altEn: "Cien looking out over the city from a window", objectPositionDesktop: "50% 50%", objectPositionMobile: "69% 50%", focalPoint: { x: .7, y: .52 }, width: 1672, height: 941 },
} as const;
export type PageKey = keyof typeof pageVisuals;
export const routes: { key: PageKey; href: string }[] = [
  { key: "home", href: "/" }, { key: "capabilities", href: "/capabilities" },
  { key: "results", href: "/results" }, { key: "methodology", href: "/methodology" }, { key: "contact", href: "/contact" },
];
export const resume = { href: "/downloads/Cien_Resume_ZH_2026-09.pdf", filename: "Cien_Resume_ZH.pdf" };
export const contact = { phone: "15768637644", email: "ciens.work@gmail.com" };
