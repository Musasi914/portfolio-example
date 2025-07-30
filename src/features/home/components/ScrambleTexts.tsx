"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useCallback, useMemo } from "react";
import SplitText from "gsap/SplitText";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { cn } from "@/lib/utils";
import { getRandomPosition } from "@/lib/utils";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

interface ScrambleTextsProps {
  quotes: string[];
  className?: string;
}

/**
 * スクランブルテキストコンポーネント
 * ランダムな位置でテキストがスクランブル表示されるアニメーション
 */
export default function ScrambleTexts({ quotes, className }: ScrambleTextsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // スクランブル文字の設定
  const scrambleChars = useMemo(() => "upperAndLowerCase", []);

  // ランダム位置の取得
  const getRandomPos = useCallback(() => {
    if (typeof window === "undefined") return { x: 0, y: 0 };
    return getRandomPosition();
  }, []);

  // スクランブルアニメーションの設定
  const createScrambleAnimation = useCallback(
    (quote: HTMLElement, text: string) => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      tl.call(() => {
        const { x, y } = getRandomPos();
        gsap.set(quote, { x, y });
      })
        .to(quote, {
          delay: Math.random() * 5,
          duration: 1,
          opacity: 1,
          scrambleText: {
            text,
            chars: scrambleChars,
            revealDelay: 0.5,
            speed: 1,
          },
          ease: "power2.out",
        })
        .to(quote, {
          delay: 0.5,
          duration: 1,
          scrambleText: {
            text: "",
            chars: scrambleChars,
          },
          opacity: 0,
          ease: "power2.in",
        });
    },
    [getRandomPos, scrambleChars]
  );

  useGSAP(() => {
    if (!containerRef.current) return;

    const quoteElements = gsap.utils.toArray<HTMLElement>(".quote");

    // 各引用文にアニメーションを設定
    quoteElements.forEach((quote) => {
      gsap.set(quote, {
        position: "absolute",
        opacity: 0,
        whiteSpace: "nowrap",
      });

      createScrambleAnimation(quote, quote.textContent ?? "");
    });
  }, [containerRef, createScrambleAnimation]);

  return (
    <div className={cn("absolute top-0 left-0 inset-0 contain-paint text-xs font-semibold text-white/30", className)}>
      {quotes.map((quote, index) => (
        <div key={index} className="quote opacity-0">
          {quote}
        </div>
      ))}
    </div>
  );
}
