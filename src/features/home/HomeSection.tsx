import { FlipWords } from "@/components/ui/flip-words";
import ScrambleTexts from "./components/ScrambleTexts";
import Backgrounds from "./components/Backgrounds";
import Model from "./components/Model";

export default function () {
  const quotes = [
    "久しぶりの模写な気がする",
    "自分の頭の悪さに絶望する時がある",
    "Hello World!!",
    "これはどうだろう",
    "これを見ている人はいますか？",
    "7/27作成",
    "お疲れ様でした",
    "おはようございます",
    "こんなポートフォリオでございます",
    "自分のはもっと出来のいいのがいい",
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <h1 className="sr-only">田中のポートフォリオサイト</h1>
      <ScrambleTexts quotes={quotes} className="-z-20" />
      <div className="pt-40 wrapper">
        <div className="w-[min(100%,450px)] p-6 mx-auto md:mx-0 text-white text-shadow-lg">
          <p className="font-semibold text-2xl">
            こんにちは。
            <br />
            私の名前は田中です。
            <br />
            このサイトは私の
          </p>
          <FlipWords words={["Next.js", "React", "TypeScript", "Tailwind", "ShadcnUi"]} className="font-bold text-4xl md:text-6xl " />
          <p className="ml-10 md:ml-30">のスキルで構築されています。</p>
        </div>
      </div>
      <Backgrounds className="-z-30" />
      <Model />
    </section>
  );
}
