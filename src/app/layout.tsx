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
    default: "Cien｜社媒运营与 KOL Influencer Marketing 个人主页",
    template: "%s",
  },
  description:
    "Cien 的个人主页与作品集，展示社媒运营、KOL 合作、内容策略、数据分析与运营流程搭建经验。",
  keywords: [
    "Cien",
    "程红超",
    "社媒运营",
    "KOL 营销",
    "Influencer Marketing",
    "Creator Partnerships",
    "Social Media Operations",
  ],
  authors: [{ name: `${profile.name} / ${profile.chineseName}` }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    url: "/",
    title: "Cien｜社媒运营与 KOL Influencer Marketing 个人主页",
    description:
      "展示社媒运营、创作者合作、内容策略、数据分析与运营流程搭建经验。",
    siteName: "Cien Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cien | Social Media & Influencer Marketing Specialist",
    description:
      "Creator partnerships, content operations, performance analysis, and scalable workflows.",
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
