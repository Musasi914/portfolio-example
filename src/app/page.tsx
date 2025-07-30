import HomeSection from "@/features/home/HomeSection";
import Marquee from "@/features/marquee/Marquee";
import Contact from "@/features/contact/Contact";

/**
 * メインページコンポーネント
 * ポートフォリオサイトのメインページ
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ホームセクション - ヒーロー部分 */}
      <HomeSection />

      {/* マーキーセクション - スキル・プロジェクト紹介 */}
      <Marquee />

      {/* お問い合わせセクション - コンタクトフォーム */}
      <Contact />
    </main>
  );
}
