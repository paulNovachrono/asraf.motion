"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete,
    });

    if (svgRef.current) {
      tl.fromTo(
        svgRef.current,
        { strokeDashoffset: 200 },
        { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" }
      );
    }

    if (barRef.current) {
      tl.to(
        barRef.current,
        { width: "100%", duration: 1.5, ease: "power2.inOut" },
        "-=0.8"
      );
    }

    if (containerRef.current) {
      tl.to(containerRef.current, {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.6,
        ease: "power2.inOut",
        delay: 0.2,
      });
      tl.to(containerRef.current, {
        display: "none",
        duration: 0,
      });
    }

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
    >
      <div className="flex flex-col items-center gap-6">
        <svg width="80" height="40" viewBox="0 0 80 40" className="text-canvas">
          <path
            ref={svgRef}
            d="M10 30 L40 10 L70 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="200"
            strokeDashoffset="200"
          />
        </svg>
        <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/20">
          <div
            ref={barRef}
            className="h-full w-0 rounded-full bg-canvas"
          />
        </div>
      </div>
    </div>
  );
}
