"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".testimonial-card");
      cards?.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
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
        <div className="mb-12">
          <span className="font-mono text-eyebrow uppercase tracking-[0.54px] text-ink/60">
            Testimonials
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => {
            const colors = [
              { bg: "bg-block-lilac", quote: "text-white/80", border: "border-block-lilac", text: "text-white" },
              { bg: "bg-block-cream", quote: "text-ink/70", border: "border-block-cream", text: "text-ink" },
              { bg: "bg-block-mint", quote: "text-ink/70", border: "border-block-mint", text: "text-ink" },
            ][i % 3];
            return (
              <div
                key={t.author}
                className={`testimonial-card relative rounded-lg border p-6 ${colors.bg} ${colors.border}`}
              >
                <span className={`absolute right-4 top-4 text-[4rem] font-light leading-none ${colors.quote}`}>
                  &ldquo;
                </span>
                <p className={`text-body font-light leading-relaxed tracking-[-0.26px] ${colors.quote}`}>
                  {t.quote}
                </p>
                <div className={`mt-6 border-t pt-4 ${colors.border}`}>
                  <div className={`text-body-sm font-medium tracking-[-0.14px] ${colors.text}`}>
                    {t.author}
                  </div>
                  <div className={`font-mono text-caption uppercase tracking-[0.60px] ${colors.quote}`}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
