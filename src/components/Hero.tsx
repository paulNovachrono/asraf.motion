"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (wordsRef.current) {
        gsap.fromTo(
          wordsRef.current.children,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.3 }
        );
      }
      if (infoRef.current) {
        gsap.fromTo(
          infoRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 1.2, ease: "power2.out" }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-surface-soft)_0%,_var(--color-canvas)_70%)]" />
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 px-6 text-center font-mono">
        <div ref={wordsRef} className="flex flex-col items-center">
          <span className="block text-[clamp(3rem,12vw,7rem)] font-light leading-[0.95] tracking-[-1.72px] ">
            MOTION.
          </span>
          <span className="block text-[clamp(3rem,12vw,7rem)] font-light leading-[0.95] tracking-[-1.72px] text-block bg-block-lilac">
            CONTENT.
          </span>
          <span className="block text-[clamp(3rem,12vw,7rem)] font-light leading-[0.95] tracking-[-1.72px] italic">
            RESULTS.
          </span>
        </div>
        <div ref={infoRef} className="mt-8 flex flex-col items-center gap-1">
          <p className="text-body-lg font-light tracking-[-0.14px]">
            Social Media Manager
          </p>
           <p className="text-body-sm font-light tracking-[-0.14px] text-ink/60">
            Motion Designer · Video Editor
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="inline-block animate-bounce-subtle font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
          ↓ Scroll
        </span>
      </div>
    </section>
  );
}
