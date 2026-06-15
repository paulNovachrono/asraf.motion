"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardNavLink {
  label: string;
  href?: string;
  ariaLabel?: string;
}

interface CardNavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
}

interface CardNavProps {
  logo?: string;
  logoAlt?: string;
  items?: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const defaultItems: CardNavItem[] = [
  {
    label: "About",
    bgColor: "#1B1722",
    textColor: "#fff",
    links: [
      { label: "About", href: "/about", ariaLabel: "About" },
      { label: "Testimonials", href: "/testimonials", ariaLabel: "Testimonials" },
    ],
  },
  {
    label: "Services",
    bgColor: "#2F293A",
    textColor: "#fff",
    links: [
      { label: "Services", href: "/services", ariaLabel: "Services" },
      { label: "Process", href: "/process", ariaLabel: "Process" },
    ],
  },
  {
    label: "Work",
    bgColor: "#2F293A",
    textColor: "#fff",
    links: [
      { label: "Work", href: "/work", ariaLabel: "Work" },
      { label: "Contact", href: "/contact", ariaLabel: "Contact" },
    ],
  },
];

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export default function CardNav({
  logo,
  logoAlt = "Logo",
  items,
  className,
  ease = "power3.out",
  baseColor = "#fff",
  menuColor,
  buttonBgColor = "#111",
  buttonTextColor = "#fff",
}: CardNavProps) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const navItems = items ?? defaultItems;

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector<HTMLElement>(".card-nav-content");
      if (contentEl) {
        const wasVisibility = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        void contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisibility;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, "-=0.1");

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, navItems]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={cn(
        "fixed top-[2em] left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-50 max-md:w-[90%] max-md:top-[1.2em] ",
        className
      )}
    >
      <nav
        ref={navRef}
        className={cn(
          "block h-[60px] rounded-md shadow-md relative overflow-hidden will-change-[height] ",
          isExpanded && "open"
        )}
        style={{ backgroundColor: baseColor }}
      >
        <div className="absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-[0.5rem_0.45rem_0.55rem_1.1rem] z-10 max-md:px-4 max-md:justify-between bg-block-mint">
          <div
            className={cn(
              "h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] max-md:order-2 "
            )}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleMenu();
            }}
            style={{ color: menuColor ?? "#000" }}
          >
            <div
              className={cn(
                "w-[30px] h-[2px] bg-current transition-all duration-250 origin-center",
                isHamburgerOpen && "translate-y-[4px] rotate-45 "
              )}
            />
            <div
              className={cn(
                "w-[30px] h-[2px] bg-current transition-all duration-250 origin-center",
                isHamburgerOpen && "-translate-y-[4px] -rotate-45"
              )}
            />
          </div>

          <div className="flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-md:static max-md:transform-none max-md:order-1">
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logo} alt={logoAlt} className="h-7" />
            ) : (
              <Link
                href="/"
                className="text-lg font-light tracking-wider hover:opacity-70 transition-opacity"
                style={{ color: menuColor ?? "#000" }}
              >
                W·A
              </Link>
            )}
          </div>

          <button
            type="button"
            className="border-none rounded-[0.4rem] px-4 h-full font-medium cursor-pointer transition-colors duration-300 flex items-center max-md:hidden hover:brightness-125"
            style={{
              backgroundColor: buttonBgColor,
              color: buttonTextColor,
            }}
          >
            Get Started
          </button>
        </div>

        <div
          className={cn(
            "absolute inset-x-0 top-[60px] bottom-0 p-2 flex items-end gap-3 z-[1]",
            "max-md:flex-col max-md:items-stretch max-md:gap-2 max-md:p-2 max-md:bottom-0 max-md:justify-start",
            isExpanded ? "visible pointer-events-auto" : "invisible pointer-events-none "
          )}
          aria-hidden={!isExpanded}
        >
          {navItems.slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              ref={setCardRef(idx)}
              className={cn(
                "h-full flex-1 min-w-0 rounded-[0.55rem] relative flex flex-col px-4 py-3 gap-2 select-none",
                "max-md:h-auto max-md:min-h-[60px] max-md:flex-1 max-md:max-h-none "
              )}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="font-normal text-[22px] tracking-tight max-md:text-lg">
                {item.label}
              </div>
              <div className="mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <Link
                    key={`${lnk.label}-${i}`}
                    href={lnk.href ?? "#"}
                    className="text-base cursor-pointer no-underline transition-opacity duration-300 inline-flex items-center gap-[6px] hover:opacity-75 max-md:text-sm"
                    aria-label={lnk.ariaLabel}
                  >
                    <ArrowIcon />
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
