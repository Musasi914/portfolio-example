"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useRef } from "react";
import { LoadingContext } from "../provider/LoadingProvider";
import { ANIMATION_CONFIG } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

interface BackgroundsProps {
  className?: string;
}

/**
 * 背景画像コンポーネント
 * パララックス効果を持つ背景画像を表示
 */
export default function Backgrounds({ className }: BackgroundsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoading } = useContext(LoadingContext);

  useGSAP(() => {
    if (!containerRef.current) return;

    // パララックスアニメーションの設定
    const tl = gsap
      .timeline({
        defaults: {
          ease: "none",
        },
      })
      .to(".bg__mountain-2", ANIMATION_CONFIG.parallax.mountain2)
      .to(".bg__mountain-3", ANIMATION_CONFIG.parallax.mountain3, 0)
      .to(".bg__planets", ANIMATION_CONFIG.parallax.planets, 0)
      .to(".bg__sky", ANIMATION_CONFIG.parallax.sky, 0);

    // スクロールトリガーの設定
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      animation: tl,
    });

    // ローディング完了後のエントランスアニメーション
    if (!isLoading) {
      gsap.from(".bg__mountain-3", ANIMATION_CONFIG.entrance.mountain3);
      gsap.from(".bg__mountain-2", ANIMATION_CONFIG.entrance.mountain2);
      gsap.from(".bg__mountain-1", ANIMATION_CONFIG.entrance.mountain1);
      gsap.from(".bg__planets", ANIMATION_CONFIG.entrance.planets);
    }
  }, [containerRef, isLoading]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "background absolute top-0 left-0 w-full h-full [&>img]:absolute [&>img]:object-cover [&>img]:object-center",
        className
      )}
    >
      <Image src="/hero/sky.webp" alt="空の背景" width={1820} height={1020} className="bg__sky w-full h-full" />
      <Image src="/hero/mountain-3.webp" alt="山の背景3" width={1820} height={1020} className="bg__mountain-3 bottom-0" priority />
      <Image src="/hero/mountain-2.webp" alt="山の背景2" width={1820} height={1020} className="bg__mountain-2 bottom-0" />
      <Image src="/hero/mountain-1.webp" alt="山の背景1" width={1820} height={1020} className="bg__mountain-1 bottom-0" />
      <Image src="/hero/planets.webp" alt="惑星の背景" width={1820} height={1020} className="bg__planets top-1/4" />
    </div>
  );
}
