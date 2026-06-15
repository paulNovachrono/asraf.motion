"use client";

import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  layout?: "landscape" | "portrait";
}

export default function ProjectCard({ project, layout = "landscape" }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative flex overflow-hidden rounded-lg border border-hairline bg-surface-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        layout === "portrait" ? "aspect-[3/4]" : "aspect-video"
      }`}
    >
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-block-cream/40 to-block-lilac/40 p-6 dark:from-block-cream/60 dark:to-block-lilac/60">
        <div className="text-center">
          <h3 className="text-headline font-medium tracking-[-0.26px]">
            {project.title}
          </h3>
          <p className="mt-2 font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
            {project.category} · {project.year}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/50 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
        <span className="text-body-sm font-medium text-canvas">
          VIEW PROJECT →
        </span>
      </div>
    </Link>
  );
}
