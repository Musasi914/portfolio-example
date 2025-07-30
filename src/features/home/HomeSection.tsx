import { FlipWords } from "@/components/ui/flip-words";
import ScrambleTexts from "./components/ScrambleTexts";
import Backgrounds from "./components/Backgrounds";
import Model from "./components/Model";
import { LoadingProvider } from "./provider/LoadingProvider";
import { HOME_QUOTES, SKILLS } from "@/constants";

/**
 * ホームセクションコンポーネント
 * ポートフォリオのメインページを表示
 */
export default function HomeSection() {
  return (
    <LoadingProvider>
      <section className="relative h-screen overflow-hidden" id="hero">
        <h1 className="sr-only">田中のポートフォリオサイト</h1>

        {/* 背景のスクランブルテキスト */}
        <ScrambleTexts quotes={HOME_QUOTES} className="-z-20" />

        {/* メインコンテンツ */}
        <div className="pt-40 wrapper">
          <div className="w-[min(100%,450px)] p-6 mx-auto md:mx-0 text-white text-shadow-lg">
            <p className="font-semibold text-2xl">
              こんにちは。
              <br />
              私の名前は田中です。
              <br />
              このサイトは私の
            </p>
            <FlipWords words={SKILLS} className="font-bold text-4xl md:text-6xl" />
            <p className="ml-10 md:ml-30">のスキルで構築されています。</p>
          </div>
        </div>

        {/* 背景画像 */}
        <Backgrounds className="-z-30" />

        {/* 3Dモデル */}
        <Model />
      </section>
    </LoadingProvider>
  );
}
