import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LanguageProvider } from "@/components/language-provider";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site-url";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cien｜海外社媒与 KOL 运营负责人",
    template: "%s",
  },
  description:
    "Cien 的个人作品集：独立负责 FlyAchilles 与 Pulens 两个北美品牌的社媒、创作者合作与运营系统搭建。",
  authors: [{ name: `${profile.name} / ${profile.chineseName}` }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    url: "/",
    title: "Cien｜海外社媒与 KOL 运营负责人",
    description:
      "独立负责两个北美品牌的内容策略、创作者合作、数据复盘与可扩展运营系统。",
    siteName: "Cien Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cien | Social Media & Creator Operations Lead",
    description:
      "Operating two North American brands across creator partnerships, content strategy, performance analysis, and scalable workflows.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F7F5",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
