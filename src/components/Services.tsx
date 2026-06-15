"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Social Media Strategy",
    subtitle: "Strategy",
    description: "From content pillars to analytics.",
  },
  {
    title: "Motion Graphics",
    subtitle: "Motion",
    description: "After Effects, Premiere, brand templates.",
  },
  {
    title: "Video Editing",
    subtitle: "Video",
    description: "Long-form, Reels, color grading.",
  },
  {
    title: "Content Direction",
    subtitle: "Content",
    description: "Creative strategy and campaign planning.",
  },
  {
    title: "Short-Form Video",
    subtitle: "Social",
    description: "TikTok, Reels, YouTube Shorts.",
  },
  {
    title: "Brand Content Systems",
    subtitle: "Brand",
    description: "Templates, guidelines, scalable assets.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".service-card");
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
    <section ref={sectionRef} className="bg-block-lime py-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <span className="font-mono text-eyebrow uppercase tracking-[0.54px] text-ink/60">
            Services
          </span>
          <h2 className="mt-2 text-display-lg font-light tracking-[-0.96px]">
            What I Do
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card rounded-lg border border-ink/10 bg-canvas/60 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-ink/20"
            >
              <span className="font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
                {service.subtitle}
              </span>
              <h3 className="mt-2 text-headline font-medium tracking-[-0.26px]">
                {service.title}
              </h3>
              <p className="mt-2 text-body-sm font-light tracking-[-0.14px] text-ink/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
