import type { Metadata } from "next";
import "@fontsource-variable/instrument-sans/wght.css";
import "@fontsource-variable/newsreader/wght-italic.css";
import "./globals.css";
import "./refinements.css";
import { SiteProvider } from "@/components/site-provider";
import { HomeNavigation } from "@/components/home-navigation";
import { SiteMotion } from "@/components/site-motion";

export const metadata: Metadata = {
  title: "CIEN — 海外社媒与 Creator / KOL 运营",
  description:
    "聚焦北美市场的海外社媒与 Creator / KOL 全链路运营：系统搭建、商业判断与跨部门项目交付。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" translate="no">
      <body><SiteProvider><HomeNavigation />{children}<SiteMotion /></SiteProvider></body>
    </html>
  );
}
