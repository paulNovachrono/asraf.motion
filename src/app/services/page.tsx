"use client";

import Button from "@/components/Button";

const services = [
  {
    title: "Motion Design",
    desc: "Animated logos, explainers, social assets, and brand films that capture attention in the first frame.",
    slug: "motion-design",
  },
  {
    title: "Video Editing",
    desc: "Post-production, color grading, sound design, and pacing — from raw footage to finished content.",
    slug: "video-editing",
  },
  {
    title: "Social Media Management",
    desc: "Content calendars, platform strategy, community management, and performance optimization across all major platforms.",
    slug: "social-media",
  },
  {
    title: "Content Strategy",
    desc: "Audience research, competitive analysis, content pillars, and campaign planning that drives measurable results.",
    slug: "content-strategy",
  },
  {
    title: "Brand Identity",
    desc: "Visual identity systems, mood boards, style guides, and consistent brand language across every touchpoint.",
    slug: "brand-identity",
  },
  {
    title: "Production",
    desc: "End-to-end video production — scripting, storyboarding, shooting, directing, and post-production.",
    slug: "production",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <span className="font-mono text-eyebrow uppercase tracking-[0.54px] text-ink/40">
              Services
            </span>
            <h1 className="mt-4 text-display-lg font-light tracking-[-0.96px]">
              Motion. Content.<br />Results.
            </h1>
            <p className="mt-4 text-body-lg font-light tracking-[-0.14px] text-ink/60">
              Every service is built around one goal: making content that
              stops the scroll and drives real business outcomes.
            </p>
          </div>

          <div className="grid gap-px border-t border-hairline">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group flex flex-col gap-4 border-b border-hairline py-8 md:flex-row md:items-center md:justify-between"
              >
                <div className="md:w-2/3">
                  <h2 className="text-headline font-light tracking-[-0.26px]">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-body-sm font-light leading-relaxed text-ink/60">
                    {service.desc}
                  </p>
                </div>
                <Button variant="tertiary" className="self-start md:self-auto">
                  Learn More →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-section mt-16 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-display-lg font-light tracking-[-0.96px]">
            Not sure what you need?
          </h2>
          <p className="mt-4 text-body-lg font-light text-ink/60">
            Let&apos;s talk about your project and find the right approach.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="primary" href="/contact">
              BOOK A DISCOVERY CALL
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
