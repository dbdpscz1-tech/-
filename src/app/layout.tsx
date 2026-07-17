import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/analytics/GoogleTagManager";
import { getPageContent } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * SEO 메타데이터를 콘텐츠(seo)에서 동적으로 생성한다. (헌법 규칙 2, 3)
 * 데이터만 바꾸면 title/description/OG 태그가 자동으로 갱신된다.
 */
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent();
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? seo.siteUrl;

  return {
    title: seo.title,
    description: seo.description,
    ...(base ? { metadataBase: new URL(base) } : {}),
    openGraph: {
      title: seo.title,
      description: seo.description,
      ...(base ? { url: base } : {}),
      ...(seo.ogImage ? { images: [{ url: seo.ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      ...(seo.ogImage ? { images: [seo.ogImage] } : {}),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <GoogleTagManager />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleTagManagerNoScript />
        {children}
      </body>
    </html>
  );
}
