"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    number: "01",
    title: "Discovery",
    desc: "Deep dive into your brand, audience, and goals.",
    gradient: "from-purple-600 to-blue-500",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "Tailored content plan with clear KPIs and roadmap.",
    gradient: "from-blue-500 to-cyan-400",
    icon: "🎯",
  },
  {
    number: "03",
    title: "Creation",
    desc: "Scripting, motion design, editing — every frame crafted with intention.",
    gradient: "from-cyan-400 to-emerald-400",
    icon: "✨",
  },
  {
    number: "04",
    title: "Delivery",
    desc: "Optimized assets for every platform with captions and schedules.",
    gradient: "from-emerald-400 to-amber-400",
    icon: "🚀",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We start with a deep dive into your brand, audience, and goals. No assumptions — just research and real insights.",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "A tailored content plan with clear KPIs, content pillars, platform strategy, and a roadmap that aligns with your objectives.",
  },
  {
    number: "03",
    title: "Creation",
    desc: "Scripting, storyboarding, motion design, editing — every frame is crafted with intention and attention to detail.",
  },
  {
    number: "04",
    title: "Delivery",
    desc: "Optimized assets delivered in the right formats for every platform, with captions, thumbnails, and posting schedules.",
  },
  {
    number: "05",
    title: "Measure & Iterate",
    desc: "Performance data informs the next round. We track what works, double down, and keep improving.",
  },
];

export default function ProcessPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouse = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetPos.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      };
    };

    container.addEventListener("mousemove", onMouse);
    return () => container.removeEventListener("mousemove", onMouse);
  }, []);

  useEffect(() => {
    const cards = swiperRef.current?.querySelectorAll(".hero-card");
    if (!cards || cards.length === 0) return;

    const animate = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.08;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.08;
      const { x, y } = currentPos.current;

      cards.forEach((card, i) => {
        const offset = i - activeIdx;
        const baseX = offset * 20;
        const baseY = Math.abs(offset) * 4;
        const rotate = offset * 3;
        const mx = x * (6 + Math.abs(offset) * 2);
        const my = y * (4 + Math.abs(offset) * 2);

        (card as HTMLElement).style.transform = `translateX(${baseX + mx}px) translateY(${baseY + my}px) rotate(${rotate + mx * 0.3}deg)`;
        (card as HTMLElement).style.zIndex = `${cards.length - Math.abs(offset)}`;
        (card as HTMLElement).style.opacity = `${1 - Math.abs(offset) * 0.15}`;
        (card as HTMLElement).style.scale = `${1 - Math.abs(offset) * 0.05}`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [activeIdx]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".process-item");
      items?.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNext = () => setActiveIdx((p) => Math.min(p + 1, cards.length - 1));
  const handlePrev = () => setActiveIdx((p) => Math.max(p - 1, 0));

  return (
    <>
      <section ref={containerRef} className="relative min-h-screen overflow-hidden pt-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-surface-soft/30 to-surface-soft" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-20">
          <div className="max-w-lg flex-shrink-0">
            <span className="font-mono text-eyebrow uppercase tracking-[0.54px] text-ink/40">
              Process
            </span>
            <h1 className="mt-4 text-display-lg font-light tracking-[-0.96px]">
              How I work.
            </h1>
            <p className="mt-4 text-body-lg font-light leading-relaxed tracking-[-0.14px] text-ink/60">
              A repeatable system that turns ideas into content that performs.
            </p>

            <div className="mt-8 flex gap-3">
              <button
                onClick={handlePrev}
                disabled={activeIdx === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-canvas text-ink transition-colors hover:bg-ink/5 disabled:opacity-30"
                aria-label="Previous card"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={handleNext}
                disabled={activeIdx === cards.length - 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-canvas text-ink transition-colors hover:bg-ink/5 disabled:opacity-30"
                aria-label="Next card"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              <span className="ml-2 self-center font-mono text-sm text-ink/40">
                {String(activeIdx + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div ref={swiperRef} className="relative h-[420px] w-full max-w-md lg:h-[500px]">
            {cards.map((card, i) => (
              <div
                key={card.number}
                className="hero-card absolute inset-0 cursor-grab active:cursor-grabbing"
                onClick={() => setActiveIdx(i)}
              >
                <div className={`flex h-full flex-col justify-end rounded-3xl bg-gradient-br ${card.gradient} p-8 text-white shadow-2xl`}>
                  <span className="font-mono text-5xl font-bold opacity-40">{card.number}</span>
                  <h3 className="mt-4 text-3xl font-semibold">{card.title}</h3>
                  <p className="mt-2 text-white/80">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="pb-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="absolute left-8 top-0 hidden h-full w-px bg-hairline md:block" />
            <div className="flex flex-col">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="process-item relative flex flex-col md:flex-row md:gap-12"
                >
                  <div className="relative z-10 flex w-16 flex-shrink-0 items-start pt-1">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-hairline bg-canvas font-mono text-lg tracking-[0.1em]">
                      {step.number}
                    </span>
                  </div>
                  <div className="mt-6 flex-1 pb-16 md:mt-0 md:pb-20">
                    <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-tight tracking-[-0.48px]">
                      {step.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-body-lg font-light leading-relaxed tracking-[-0.14px] text-ink/60">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-section text-center">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-display-sm font-light tracking-[-0.96px] italic text-ink/80">
            &ldquo;Strategy without execution is just a wish.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
