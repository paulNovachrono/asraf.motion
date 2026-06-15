"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Showreel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1.5,
        },
      });

      tl.fromTo(
        containerRef.current,
        { width: "40%", borderRadius: "24px" },
        { width: "100%", borderRadius: "0px", duration: 1 }
      );
    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-ink">
      <div ref={containerRef} className="mx-auto h-full overflow-hidden">
        <div className="relative h-full w-full">
          <iframe
            ref={iframeRef}
            src="https://www.youtube.com/embed/gQldOO6KiU8?autoplay=1&mute=1&loop=1&playlist=gQldOO6KiU8&controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0"
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen"
            title="Demo Reel"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <a
          href="/contact"
          className="rounded-pill bg-canvas px-5 py-2 text-body-sm font-medium text-ink transition-all hover:opacity-85"
        >
          CONTACT ME
        </a>
      </div>
    </section>
  );
}
