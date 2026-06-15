"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      if (!overlayRef.current || !linksRef.current) return;
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      tl.fromTo(
        overlayRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.6 }
      );
      tl.fromTo(
        linksRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.07,
          ease: "power2.out",
        },
        "-=0.4"
      );
    });
  };

  const closeMenu = () => {
    gsap.to(overlayRef.current, {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setIsOpen(false);
        document.body.style.overflow = "";
      },
    });
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href")!;
    closeMenu();
    timeoutRef.current = setTimeout(() => {
      window.location.href = href;
    }, 450);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 flex items-center justify-between",
          "px-10 py-6 max-md:px-5 max-md:py-4",
          "transition-all duration-300",
          scrolled
            ? "bg-canvas/80 backdrop-blur-xl border-b border-hairline"
            : "bg-transparent"
        )}
      >
        <Link
          href="/"
          className={cn(
            "text-lg font-light tracking-wider transition-opacity hover:opacity-70",
            scrolled ? "text-ink" : "text-inverse-ink"
          )}
        >
          W·A
        </Link>

        <button
          onClick={isOpen ? closeMenu : openMenu}
          className="flex items-center gap-3 cursor-pointer group"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={cn(
              "text-xs uppercase tracking-[0.2em] max-md:hidden transition-colors",
              scrolled ? "text-ink" : "text-inverse-ink"
            )}
          >
            {isOpen ? "Close" : "Menu"}
          </span>
          <div className="relative w-5 h-3.5 flex flex-col justify-between">
            <span
              className={cn(
                "block h-px w-full transition-all duration-300 origin-center",
                scrolled ? "bg-ink" : "bg-inverse-ink",
                isOpen ? "translate-y-[6px] rotate-45" : ""
              )}
            />
            <span
              className={cn(
                "block h-px w-full transition-all duration-300 origin-center",
                scrolled ? "bg-ink" : "bg-inverse-ink",
                isOpen ? "-translate-y-[6px] -rotate-45" : ""
              )}
            />
          </div>
        </button>
      </header>

      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-40 flex flex-col bg-[#0a0a0a] text-white"
          style={{ clipPath: "inset(0 0 100% 0)" }}
        >
          <div className="flex flex-1 flex-col justify-center px-10 pb-16 max-md:px-5">
            <div ref={linksRef} className="flex flex-col nav-links-group">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleNav}
                  className="nav-link text-white no-underline transition-all duration-200"
                >
                  <span className="block text-[clamp(3rem,8vw,7rem)] font-light leading-[1.1] tracking-tight max-md:text-[clamp(2.5rem,10vw,4rem)]">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="px-10 pb-10 max-md:px-5 flex items-end justify-between max-md:flex-col max-md:gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-white/40 tracking-wider uppercase">
                Buff Motion Showreel 2025
              </p>
              <div className="flex gap-6 text-xs text-white/50">
                <span className="cursor-pointer hover:text-white/80 transition-colors">Instagram</span>
                <span className="cursor-pointer hover:text-white/80 transition-colors">LinkedIn</span>
                <span className="cursor-pointer hover:text-white/80 transition-colors">Behance</span>
                <span className="cursor-pointer hover:text-white/80 transition-colors">Vimeo</span>
              </div>
            </div>
            <div className="text-xs text-white/40">
              hello@wassimasraf.com
            </div>
          </div>
        </div>
      )}
    </>
  );
}
