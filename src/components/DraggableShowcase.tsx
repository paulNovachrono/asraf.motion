"use client";

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const items = [
  {
    title: "Motion Design",
    tag: "Motion",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=3387&auto=format&fit=crop",
    bg: "bg-block-lilac",
    className: "absolute top-10 left-[18%] -rotate-[5deg] z-10",
  },
  {
    title: "Brand Campaign",
    tag: "Campaigns",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=3464&auto=format&fit=crop",
    bg: "bg-block-cream",
    className: "absolute top-36 left-[24%] -rotate-[7deg] z-20",
  },
  {
    title: "Video Editing",
    tag: "Video",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=3542&auto=format&fit=crop",
    bg: "bg-block-mint",
    className: "absolute top-4 left-[38%] rotate-[8deg] z-10",
  },
  {
    title: "Social Content",
    tag: "Social",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=3540&auto=format&fit=crop",
    bg: "bg-block-pink",
    className: "absolute top-28 left-[52%] rotate-[10deg] z-20",
  },
  {
    title: "Showreel 2025",
    tag: "Motion",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=3390&auto=format&fit=crop",
    bg: "bg-block-lime",
    className: "absolute top-12 right-[22%] rotate-[3deg] z-10",
  },
  {
    title: "Product Launch",
    tag: "Campaigns",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=3540&auto=format&fit=crop",
    bg: "bg-block-coral",
    className: "absolute top-32 right-[28%] -rotate-[6deg] z-20",
  },
  {
    title: "Documentary",
    tag: "Video",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=3540&auto=format&fit=crop",
    bg: "bg-block-navy",
    className: "absolute top-6 left-[30%] rotate-[4deg] z-30",
  },
];

export default function DraggableShowcase() {
  return (
    <section className="relative overflow-hidden py-section">
      <div className="mx-auto mb-16 max-w-7xl px-6">
        <h2 className="text-display-lg font-light tracking-[-0.96px]">
          Interactive Showcase
        </h2>
        <p className="mt-2 text-body-lg font-light tracking-[-0.14px] text-ink/60">
          Drag cards around — each one reveals a project category.
        </p>
      </div>

      <DraggableCardContainer className="relative mx-auto flex min-h-[600px] w-full max-w-7xl items-center justify-center px-6 max-md:min-h-[500px]">
        <div className="pointer-events-none absolute inset-0 select-none">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-block-lilac/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-block-mint/20 blur-3xl" />
          <div className="absolute left-1/3 top-1/3 h-3 w-3 rounded-full bg-block-coral" />
          <div className="absolute right-1/4 top-1/4 h-2 w-2 rounded-full bg-block-lime" />
          <div className="absolute bottom-1/3 left-1/4 h-4 w-4 rounded-full bg-block-pink" />
          <div className="absolute right-[15%] top-[60%] h-1.5 w-1.5 rounded-full bg-block-lilac" />
          <div className="absolute left-[10%] top-[70%] h-20 w-20 rotate-45 border border-block-lime/40" />
          <div className="absolute right-[8%] top-[15%] h-16 w-16 rotate-12 rounded-3xl border border-block-pink/30" />
          <div className="absolute left-[35%] top-[55%] h-10 w-10 rotate-[30deg] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border border-block-lilac/30" />
        </div>

        <p className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-black text-ink/10 max-md:text-lg dark:text-ink/5">
          Every project starts with a single frame.
        </p>

        {items.map((item) => (
          <DraggableCardBody key={item.title} className={item.className}>
            <div className={`absolute inset-0 ${item.bg}`} />
            <div className="relative z-10 flex h-full flex-col">
              <span className="mb-2 inline-flex w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
                {item.tag}
              </span>
              <div className="mt-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none h-52 w-full rounded-md object-cover shadow-lg"
                />
                <h3 className="mt-3 text-xl font-bold text-white drop-shadow-sm">
                  {item.title}
                </h3>
              </div>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
}
