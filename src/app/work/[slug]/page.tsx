"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { projects } from "@/data/projects";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (numberRef.current) {
      const numbers = numberRef.current.querySelectorAll(".count-up");
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
    }
  }, [project]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-display-lg font-light tracking-[-0.96px]">Project Not Found</h1>
          <Link href="/work" className="mt-4 inline-block text-body-lg text-ink/60 underline">
            ← Back to work
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <section className="relative flex min-h-screen items-end overflow-hidden bg-gradient-to-br from-block-cream/30 to-block-lilac/30 pt-28 dark:from-block-cream/60 dark:to-block-lilac/60">
        <div className="mx-auto w-full max-w-7xl px-6 pb-20">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-pill border border-hairline px-3 py-1 font-mono text-caption uppercase tracking-[0.60px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-display-xl font-light leading-[1] tracking-[-1.72px]">
              {project.title}
            </h1>
            <p className="mt-4 text-body-lg font-light tracking-[-0.14px] text-ink/60">
              {project.client} · {project.year}
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-14 z-30 border-b border-hairline-soft bg-canvas/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4 text-body-sm">
            <span className="font-medium">{project.title}</span>
            <span className="text-ink/30">|</span>
            <span className="text-ink/40">{project.client}</span>
            <span className="text-ink/40">{project.year}</span>
          </div>
          <Link
            href="/work"
            className="text-body-sm font-medium text-ink/60 hover:text-ink"
          >
            ↑ Back to work
          </Link>
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="font-mono text-eyebrow uppercase tracking-[0.54px] text-ink/40">
              The Brief
            </span>
            <p className="mt-4 text-body-lg font-light leading-relaxed tracking-[-0.14px]">
              {project.brief}
            </p>
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-lg bg-gradient-to-br from-surface-soft to-block-mint/30 dark:to-block-mint/60">
            <div className="aspect-video w-full" />
          </div>
        </div>
      </section>

      <section className="bg-block-lime py-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="font-mono text-eyebrow uppercase tracking-[0.54px] text-ink/40">
              The Approach
            </span>
            <p className="mt-4 text-body-lg font-light leading-relaxed tracking-[-0.14px]">
              {project.approach}
            </p>
          </div>
        </div>
      </section>

      <section ref={numberRef} className="py-section">
        <div className="mx-auto max-w-7xl px-6">
          <span className="font-mono text-eyebrow uppercase tracking-[0.54px] text-ink/40">
            The Results
          </span>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {project.results.map((r) => (
              <div key={r.metric} className="border-t border-ink/10 pt-6">
                <div className="count-up text-[clamp(2.5rem,5vw,4rem)] font-light leading-none tracking-[-1.72px]">
                  {r.value}
                </div>
                <div className="mt-2 font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
                  {r.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline-soft py-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
                Next Project
              </span>
              <h3 className="mt-1 text-headline font-medium tracking-[-0.26px]">
                {nextProject.title}
              </h3>
            </div>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center gap-2 text-body-lg font-medium"
            >
              View Project
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-section text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-display-lg font-light tracking-[-0.96px]">
            Let&apos;s make something.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="secondary" href={`mailto:wassimasraf@gmail.com`}>
              EMAIL ME
            </Button>
            <Button variant="primary" href="/contact">
              START A PROJECT
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
