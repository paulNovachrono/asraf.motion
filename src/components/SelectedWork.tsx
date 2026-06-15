import Link from "next/link";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="font-mono text-eyebrow uppercase tracking-[0.54px] text-ink/60">
            Selected Work
          </h2>
          <span className="text-body-sm text-ink/40">{featured.length} projects</span>
        </div>

        <div className="flex flex-col gap-12">
          {featured.map((project, i) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="project-strip group flex flex-col gap-4 md:flex-row"
            >
              <div className="flex-shrink-0 overflow-hidden rounded-lg bg-surface-soft md:w-[55%]">
                <div className="aspect-video w-full bg-gradient-to-br from-block-lilac/40 to-block-mint/40" />
              </div>
              <div className="flex flex-col justify-center md:w-[45%] md:px-6">
                <span className="font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-headline font-medium tracking-[-0.26px]">
                  {project.title}
                </h3>
                <div className="mt-1 h-px w-12 bg-ink/20" />
                <p className="mt-3 text-body-sm font-light tracking-[-0.14px] text-ink/60">
                  {project.tags.join(" · ")} · {project.year}
                </p>
                <p className="mt-2 text-body-sm font-light tracking-[-0.14px] text-ink/60">
                  {project.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium tracking-[-0.10px] transition-all group-hover:gap-2">
                  VIEW PROJECT →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-pill border border-hairline px-6 py-3 text-body-sm font-medium transition-all hover:bg-ink hover:text-canvas"
          >
            ALL WORK ({projects.length}) →
          </Link>
        </div>
      </div>
    </section>
  );
}
