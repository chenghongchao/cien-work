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
    default: "Cien | Social Media & Creator Operations",
    template: "%s | Cien",
  },
  description:
    "Cien's portfolio: North America-focused social media operations, creator partnerships, audience repositioning, project ownership, and end-to-end operating systems.",
  keywords: [
    "Social Media Operations",
    "Creator Operations",
    "KOL Operations",
    "North America Social Media",
    "Creator Partnerships",
    "Project Ownership",
    "Cien Portfolio",
  ],
  authors: [{ name: `${profile.name} / ${profile.chineseName}` }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    url: "/",
    title: "Cien | Social Media & Creator Operations",
    description:
      "North America-focused social and creator operations: content systems, audience repositioning, creator pipelines, commercial judgment, and cross-functional delivery.",
    siteName: "Cien Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cien | Social Media & Creator Operations",
    description:
      "North America-focused social media and creator operations portfolio, covering strategy, creator partnerships, systems, and project delivery.",
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
