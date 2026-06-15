"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Wassim transformed our social presence. Our engagement rate tripled within two months of working together.",
    author: "Sarah K.",
    role: "Marketing Director, Beauty Brand",
  },
  {
    quote:
      "The motion design work was next level. He understood our brand voice immediately and translated it into stunning visuals.",
    author: "Marcus J.",
    role: "Founder, Tech Startup",
  },
  {
    quote:
      "We've worked with many editors, but nobody nails pacing like Wassim. Our retention metrics prove it.",
    author: "Lena P.",
    role: "Head of Content, Media Agency",
  },
  {
    quote:
      "He doesn't just execute — he thinks strategically. Every piece of content serves a purpose and drives results.",
    author: "David R.",
    role: "CEO, E-commerce Platform",
  },
  {
    quote:
      "Reliable, fast, and ridiculously talented. Wassim has been our go-to motion designer for over two years.",
    author: "Aisha M.",
    role: "Creative Director, Ad Agency",
  },
  {
    quote:
      "The best investment we made for our brand content. Our Reels views went from 2K to 200K+ consistently.",
    author: "Tom W.",
    role: "Brand Manager, Lifestyle Brand",
  },
];

export default function TestimonialsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const cards = sectionRef.current.querySelectorAll(".testimonial-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
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
    <>
      <section className="pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <span className="font-mono text-eyebrow uppercase tracking-[0.54px] text-ink/40">
              Testimonials
            </span>
            <h1 className="mt-4 text-display-lg font-light tracking-[-0.96px]">
              What clients say.
            </h1>
            <p className="mt-4 text-body-lg font-light tracking-[-0.14px] text-ink/60">
              Real words from real people I&apos;ve had the privilege of working with.
            </p>
          </div>

          <div ref={sectionRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card flex flex-col justify-between rounded-lg border border-hairline p-8"
              >
                <p className="text-body font-light leading-relaxed tracking-[-0.14px] text-ink/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-hairline-soft pt-4">
                  <p className="text-body-sm font-medium">{t.author}</p>
                  <p className="font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-block-lilac/20 py-section mt-16 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-display-lg font-light tracking-[-0.96px]">
            Ready to be the next one?
          </h2>
          <p className="mt-4 text-body-lg font-light text-ink/60">
            Let&apos;s create something your clients will talk about.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="primary" href="/contact">
              START A PROJECT
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
