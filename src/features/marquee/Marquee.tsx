import { BentoGridDemo } from "./components/Cards";
import BackgroundMarquee from "./components/BackgroundMarquee";

/**
 * マーキーセクションコンポーネント
 * ポートフォリオのスキルやプロジェクトを表示するセクション
 */
export default function Marquee() {
  return (
    <div className="w-full min-h-screen relative pt-10 mt-20" id="marquee">
      {/* 上部のグラデーションオーバーレイ */}
      <div className="absolute z-10 h-16 inset-0 bg-gradient-to-b from-background to-transparent" />

      {/* 背景マーキー */}
      <div className="absolute inset-0">
        <BackgroundMarquee />
        <div className="absolute inset-0 bg-background/30 pointer-events-none" />
      </div>

      {/* メインコンテンツ */}
      <BentoGridDemo />
    </div>
  );
}
