"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const numbers = statsRef.current?.querySelectorAll(".stat-number");
      numbers?.forEach((el) => {
        const target = parseInt(el.textContent || "0");
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 1.2,
            ease: "power1.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-[60%]">
            <p className="text-body-lg font-light leading-relaxed tracking-[-0.14px]">
              Wassim Asraf creates content that moves — literally and figuratively.
              Based in Cairo. Working globally.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 text-body-sm font-medium tracking-[-0.10px] transition-all hover:gap-2"
            >
              READ MORE ABOUT ME →
            </Link>
          </div>
          <div ref={statsRef} className="md:w-[40%]">
            <div className="rounded-lg bg-surface-soft p-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="stat-number text-display-lg font-light tracking-[-0.96px]">
                    50
                  </div>
                  <div className="mt-1 font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
                    Brands
                  </div>
                </div>
                <div>
                  <div className="stat-number text-display-lg font-light tracking-[-0.96px]">
                    12
                  </div>
                  <div className="mt-1 font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
                    M+ Views
                  </div>
                </div>
                <div>
                  <div className="stat-number text-display-lg font-light tracking-[-0.96px]">
                    5
                  </div>
                  <div className="mt-1 font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
                    Years
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
