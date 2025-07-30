"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useRef } from "react";
import { LoadingContext } from "../provider/LoadingProvider";

gsap.registerPlugin(ScrollTrigger);

export default function Backgrounds({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoading } = useContext(LoadingContext);

  useGSAP(() => {
    const tl = gsap
      .timeline({
        defaults: {
          ease: "none",
        },
      })
      .to(".bg__mountain-2", { y: 50 })
      .to(".bg__mountain-3", { y: 100 }, 0)
      .to(".bg__planets", { y: 120, duration: 1 }, 0)
      .to(".bg__sky", { y: 150 }, 0);
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      animation: tl,
    });

    if (!isLoading) {
      gsap.from(".bg__mountain-3", {
        yPercent: 10,
        duration: 2,
        delay: 0.0,
        ease: "power2.out",
      });

      gsap.from(".bg__mountain-2", {
        yPercent: 100,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
      });
      gsap.from(".bg__mountain-1", {
        yPercent: 100,
        duration: 1,
        delay: 1,
        ease: "power2.out",
      });

      gsap.from(".bg__planets", {
        yPercent: 5,
        duration: 2,
        delay: 0.0,
        ease: "power2.inOut",
      });
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
      <Image src="/hero/sky.webp" alt="" width={1820} height={1020} className="bg__sky w-full h-full" />
      <Image src="/hero/mountain-3.webp" alt="" width={1820} height={1020} className="bg__mountain-3 bottom-0" priority />
      <Image src="/hero/mountain-2.webp" alt="" width={1820} height={1020} className="bg__mountain-2 bottom-0" />
      <Image src="/hero/mountain-1.webp" alt="" width={1820} height={1020} className="bg__mountain-1 bottom-0" />
      <Image src="/hero/planets.webp" alt="" width={1820} height={1020} className="bg__planets top-1/4" />
    </div>
  );
}
