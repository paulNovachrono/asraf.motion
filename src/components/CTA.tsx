"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (wordsRef.current) {
        gsap.fromTo(
          wordsRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-surface-soft py-section text-center"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div ref={wordsRef} className="flex flex-col items-center">
          <span className="block text-[clamp(2.5rem,8vw,5rem)] font-light leading-[1.05] tracking-[-1.72px]">
            LET&apos;S MAKE
          </span>
          <span className="block text-[clamp(2.5rem,8vw,5rem)] font-light leading-[1.05] tracking-[-1.72px]">
            SOMETHING
          </span>
          <span className="block text-[clamp(2.5rem,8vw,5rem)] font-light leading-[1.05] tracking-[-1.72px]">
            MOVE.
          </span>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:wassimasraf@gmail.com"
            className="inline-flex items-center rounded-pill border border-ink px-6 py-3 text-body-sm font-medium transition-all hover:bg-ink hover:text-canvas"
          >
            EMAIL ME
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-pill bg-accent-magenta px-6 py-3 text-body-sm font-medium text-canvas transition-all hover:opacity-85"
          >
            BOOK A CALL
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
          <span className="inline-block h-2 w-2 animate-pulse-dot rounded-full bg-semantic-success" />
          Available for new projects
        </div>
      </div>
    </section>
  );
}
