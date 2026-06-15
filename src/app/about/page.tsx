"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { name: "After Effects", level: 100, label: "Expert" },
  { name: "Premiere Pro", level: 100, label: "Expert" },
  { name: "Photoshop", level: 100, label: "Expert" },
  { name: "Instagram", level: 100, label: "Expert" },
  { name: "TikTok", level: 80, label: "Advanced" },
  { name: "DaVinci Resolve", level: 80, label: "Advanced" },
  { name: "Figma", level: 60, label: "Intermediate" },
];

export default function AboutPage() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bars = barRef.current?.querySelectorAll(".skill-bar-fill");
      bars?.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${width}%`,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, barRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="pt-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.15] tracking-[-0.96px]">
            &ldquo;Three things make great content:
            <br />
            a sharp eye, a feel for timing,
            <br />
            and knowing what people
            <br />
            actually want.&rdquo;
          </p>
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-shrink-0 md:w-[40%]">
              <div className="aspect-[3/4] w-full rounded-lg bg-gradient-to-br from-block-lilac/30 to-block-cream/30" />
            </div>
            <div className="flex flex-col justify-center md:w-[60%] md:px-8">
              <span className="font-mono text-eyebrow uppercase tracking-[0.54px] text-ink/40">
                Who Is Wassim?
              </span>
              <p className="mt-4 text-body-lg font-light leading-relaxed tracking-[-0.14px]">
                I&apos;m a Social Media Manager, Motion Designer, and Video Editor
                based in Cairo — working with brands worldwide to create content
                that actually moves people.
              </p>
              <p className="mt-4 text-body font-light leading-relaxed tracking-[-0.26px] text-ink/60">
                With over 5 years of experience and 50+ brands served, I focus
                on the intersection of creative vision and performance metrics.
                Every project starts with strategy, runs on craft, and delivers
                measurable results.
              </p>
              <p className="mt-4 text-body font-light leading-relaxed tracking-[-0.26px] text-ink/60">
                Whether it&apos;s a 15-second Reel or a full brand campaign, my
                approach is the same: understand the audience deeply, then
                create something they won&apos;t scroll past.
              </p>
              <div className="mt-6">
                <Button variant="secondary">DOWNLOAD CV</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={barRef} className="bg-block-lime py-section">
        <div className="mx-auto max-w-4xl px-6">
          <span className="font-mono text-eyebrow uppercase tracking-[0.54px] text-ink/40">
            Tools & Platforms
          </span>
          <div className="mt-8 flex flex-col gap-4">
            {tools.map((tool) => (
              <div key={tool.name}>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-body-sm font-medium">{tool.name}</span>
                  <span className="font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
                    {tool.label}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-ink/10">
                  <div
                    className="skill-bar-fill h-full rounded-full bg-ink"
                    data-width={tool.level}
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-8">
            <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-tight tracking-[-0.96px] italic text-ink/80">
              &ldquo;Motion is not decoration. It&apos;s communication.&rdquo;
            </p>
            <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-tight tracking-[-0.96px] italic text-ink/80">
              &ldquo;Strategy without content is just a spreadsheet.&rdquo;
            </p>
            <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-tight tracking-[-0.96px] italic text-ink/80">
              &ldquo;The algorithm doesn&apos;t pick winners. The audience does.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-section text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-display-lg font-light tracking-[-0.96px]">
            Let&apos;s work together.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="secondary" href="mailto:wassimasraf@gmail.com">
              EMAIL WASSIM
            </Button>
            <Button variant="primary" href="/contact">
              BOOK A DISCOVERY CALL
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
