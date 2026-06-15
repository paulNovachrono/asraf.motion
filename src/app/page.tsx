"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import SelectedWork from "@/components/SelectedWork";
import Showreel from "@/components/Showreel";
import AboutStrip from "@/components/AboutStrip";
import Services from "@/components/Services";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import Button from "@/components/Button";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <>
      <Hero />
      <MarqueeStrip />
      <SelectedWork />
      <Showreel />
      <AboutStrip />
      <Services />
      <Metrics />
      <Testimonials />
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
