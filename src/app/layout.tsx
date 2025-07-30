import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "田中 ポートフォリオ | Next.js Developer",
  description: "田中によるNext.js、React、TypeScriptを使用したポートフォリオサイトです。モダンなWeb開発スキルを紹介しています。",
  keywords: ["Next.js", "React", "TypeScript", "ポートフォリオ", "Web開発"],
  authors: [{ name: "田中" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * ルートレイアウトコンポーネント
 * アプリケーション全体のレイアウトを定義
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
