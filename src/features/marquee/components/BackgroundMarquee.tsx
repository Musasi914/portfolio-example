"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { BACKGROUND_IMAGES } from "@/constants";

/**
 * 背景マーキーコンポーネント
 * 3Dマーキー効果を持つ背景画像を表示
 */
export default function BackgroundMarquee() {
  return (
    <div className="mx-auto rounded-3xl p-2 ring-1 ring-neutral-700/10">
      <ThreeDMarquee images={BACKGROUND_IMAGES} />
    </div>
  );
}
