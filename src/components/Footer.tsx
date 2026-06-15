"use client";

import { useState } from "react";
import Link from "next/link";

const linkGroups = [
  {
    title: "Links",
    links: [
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Motion Design", href: "/work" },
      { label: "Video Editing", href: "/work" },
      { label: "Social Media", href: "/work" },
      { label: "Content Strategy", href: "/work" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Behance", href: "#" },
      { label: "Vimeo", href: "#" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="border-t border-hairline bg-canvas text-ink">
      <div className="mx-auto max-w-7xl px-6">
        {/* CTA */}
        <div className="flex flex-col gap-6 py-16 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-display-lg font-light leading-[1.1] tracking-[-0.96px] max-w-2xl">
              Let&apos;s create something<br />great together.
            </h2>
            <p className="mt-4 max-w-2xl  font-mono text-xs tracking-[0.2em] text-ink/50">
              Motion Designer & Video Editor based in Cairo, working globally.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-hairline px-6 py-3 font-mono text-xs tracking-[0.2em] transition-all hover:bg-ink hover:text-canvas"
          >
            START A PROJECT
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
              <path d="M9.33333 3.83301L13.5 7.99967L9.33333 12.1663M13 7.99967H2.5" />
            </svg>
          </Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4 border-t border-hairline py-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs tracking-[0.2em] text-ink/50 max-w-2xl">
            Subscribe for updates on new work and available slots.
          </p>
          <form onSubmit={handleSubmit} className="flex">
            {subscribed ? (
              <p className="font-mono text-xs tracking-[0.2em] text-ink/70">
                Thank you for subscribing!
              </p>
            ) : (
              <div className="flex border border-hairline">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-transparent px-4 py-3 font-mono text-xs tracking-[0.2em] outline-none placeholder:text-ink/30"
                />
                <button
                  type="submit"
                  className="border-l border-hairline px-4 font-mono text-xs tracking-[0.2em] transition-all hover:bg-ink hover:text-canvas"
                >
                  SUBSCRIBE
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Link Grid */}
        <div className="grid gap-10 border-t border-hairline py-12 sm:grid-cols-2 md:grid-cols-3">
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-xs tracking-[0.2em] text-ink/40 mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-mono text-xs tracking-[0.2em] text-ink/70 transition-all hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-hairline py-6 font-mono text-xs tracking-[0.2em] text-ink/40 md:flex-row md:items-center md:justify-between">
          <span>© 2025 Wassim Asraf. All rights reserved.</span>
          <div className="flex gap-6">
            <span>Cairo · GMT+2</span>
            <span>Available worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
