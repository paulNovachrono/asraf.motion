"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Vimeo", href: "#" },
];

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(formatted);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>Kolkata, IN &nbsp;{time}</span>;
}

export default function KymaNav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    timeoutRef.current = setTimeout(() => {
      window.location.href = href;
    }, 350);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-[2em] left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-50",
          "rounded-xl border border-white/10",
          "transition-all duration-400",
          scrolled || isOpen
            ? "bg-[#111]/80 backdrop-blur-md"
            : "bg-[#111]/60 backdrop-blur-sm",
        )}
      >
        <div className="grid grid-cols-3 items-center px-5 py-3 max-md:px-4 max-md:py-2.5">
          <span className="text-[11px] uppercase tracking-[0.14em] text-white/40 hidden md:block">
            Motion. Content. Results.
          </span>

          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-[0.18em] text-white text-center"
          >
            W·A
          </Link>

          <div className="flex items-center justify-end gap-6">
            <span className="text-[11px] uppercase tracking-[0.14em] text-white/40 hidden md:block">
              <LiveClock />
            </span>

            <button
              onClick={isOpen ? closeMenu : openMenu}
              className="text-[11px] uppercase tracking-[0.14em] text-white hover:text-white/50 transition-opacity duration-200 cursor-pointer"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={overlayRef}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-screen h-screen z-40 bg-[#0d0d0d] flex"
          >
            <div className="flex-1 flex flex-col justify-end px-10 pb-16 pt-24 max-md:px-6">
              <div className="flex flex-col gap-1 group">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.055 + 0.15,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="text-[clamp(2.5rem,5.5vw,5rem)] font-light text-white leading-tight w-fit transition-all duration-200 group-hover:opacity-20 hover:!opacity-100 hover:translate-x-2"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-8 mt-12">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.04 + 0.5,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="text-[11px] uppercase tracking-[0.12em] text-white/35 hover:text-white/70 transition-colors duration-200"
                  >
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="hidden md:block w-[45%] relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute inset-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=3387&auto=format&fit=crop"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0d0d0d]" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
