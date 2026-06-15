"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Metrics() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const numbers = sectionRef.current?.querySelectorAll(".metric-number");
      numbers?.forEach((el) => {
        const text = el.textContent || "0";
        const target = parseInt(text.replace(/[^\d]/g, ""));
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

  const metrics = [
    { value: "12M+", label: "Video Views Delivered" },
    { value: "50+", label: "Brands Worked With" },
    { value: "87%", label: "Avg. Engagement Rate" },
    { value: "5+", label: "Years Active" },
  ];

  return (
    <section ref={sectionRef} className="border-y border-ink/10 py-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="metric-number text-[clamp(2.5rem,5vw,5rem)] font-light leading-none tracking-[-1.72px]">
                {metric.value}
              </div>
              <div className="mt-2 font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
