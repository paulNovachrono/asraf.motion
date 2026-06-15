"use client";

import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "magenta";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-pill px-5 py-2.5 text-button font-medium leading-tight tracking-[-0.10px] transition-all duration-200";

  const variants = {
    primary: "bg-ink text-canvas hover:opacity-85",
    secondary: "bg-canvas text-ink hover:bg-surface-soft",
    tertiary: "bg-transparent text-ink hover:opacity-70",
    magenta: "bg-accent-magenta text-canvas hover:opacity-85",
  };

  if (href) {
    return (
      <a
        href={href}
        className={cn(baseStyles, variants[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}
