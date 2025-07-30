"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { cn } from "@/lib/utils";
gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export default function ScrambleTexts({ quotes, className }: { quotes: string[]; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const quotes = gsap.utils.toArray<HTMLElement>(".quote");
    const scrambleChars = "upperAndLowerCase";

    const getRandomPosition = () => {
      const x = Math.random() * (window.innerWidth - 200);
      const y = Math.random() * (window.innerHeight - 100);
      return { x, y };
    };

    const scrambleQuote = (quote: HTMLElement, text: string) => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      tl.call(() => {
        const { x, y } = getRandomPosition();
        gsap.set(quote, { x, y });
      })
        .to(quote, {
          delay: Math.random() * 5,
          duration: 1,
          opacity: 1,
          scrambleText: { text, chars: scrambleChars, revealDelay: 0.5, speed: 1 },
          ease: "power2.out",
        })

        .to(quote, {
          delay: 0.5,
          duration: 1,
          scrambleText: { text: "", chars: scrambleChars },
          opacity: 0,
          ease: "power2.in",
        });
    };

    quotes.forEach((quote) => {
      gsap.set(quote, {
        position: "absolute",
        opacity: 0,
        whiteSpace: "nowrap",
      });

      scrambleQuote(quote, quote.textContent ?? "");
    });
  }, [containerRef]);
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
