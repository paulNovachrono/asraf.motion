"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { projects, categories } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import DraggableShowcase from "@/components/DraggableShowcase";

gsap.registerPlugin(Flip);

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (gridRef.current && viewMode === "grid") {
      const cards = gridRef.current.querySelectorAll(".project-card-grid");
      const state = Flip.getState(cards);
      gridRef.current.append(...cards);
      Flip.from(state, {
        duration: 0.5,
        ease: "power2.inOut",
        absolute: true,
      });
    }
  }, [activeCategory, viewMode]);

  return (
    <>
      <section className="pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h1 className="text-display-lg font-light tracking-[-0.96px]">Work</h1>
            <p className="mt-2 text-body-lg font-light tracking-[-0.14px] text-ink/60">
              Selected projects across motion, social, video, and campaigns.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-pill px-4 py-2 text-body-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-ink text-canvas"
                      : "border border-hairline text-ink/60 hover:border-ink/30"
                  }`}
                >
                  {cat}
                  {cat === "All" && ` (${projects.length})`}
                </button>
              ))}
            </div>
            <div className="flex gap-1 rounded-pill border border-hairline p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`rounded-pill px-3 py-1.5 text-body-sm transition-all ${
                  viewMode === "grid" ? "bg-ink text-canvas" : "text-ink/60"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`rounded-pill px-3 py-1.5 text-body-sm transition-all ${
                  viewMode === "list" ? "bg-ink text-canvas" : "text-ink/60"
                }`}
              >
                List
              </button>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div ref={gridRef} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <div key={project.id} className="project-card-grid">
                  <ProjectCard
                    project={project}
                    layout={i % 3 === 0 ? "portrait" : "landscape"}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col">
              {filtered.map((project, i) => (
                <a
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="group flex items-center border-b border-hairline-soft py-5 transition-all hover:bg-surface-soft dark:hover:bg-hairline"
                >
                  <span className="w-12 font-mono text-caption uppercase tracking-[0.60px] text-ink/30">
                    0{i + 1}
                  </span>
                  <span className="flex-1 text-headline font-medium tracking-[-0.26px]">
                    {project.title}
                  </span>
                  <span className="hidden font-mono text-caption uppercase tracking-[0.60px] text-ink/40 md:block">
                    {project.category} · {project.year}
                  </span>
                  <span className="ml-4 opacity-0 transition-all group-hover:opacity-60">
                    →
                  </span>
                </a>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-body-lg font-light text-ink/40">
                Nothing yet in this category — check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <DraggableShowcase />

      <section className="bg-surface-soft py-section text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-display-lg font-light tracking-[-0.96px]">
            Let&apos;s make something.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="secondary" href="mailto:wassimasraf@gmail.com">
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
