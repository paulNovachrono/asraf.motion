import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-light leading-[1.05] tracking-[-1.72px]">
          THIS FRAME
          <br />
          IS MISSING.
        </h1>
        <p className="mt-6 text-body-lg font-light leading-relaxed tracking-[-0.14px] text-ink/60">
          The page you&apos;re looking for got lost in the edit.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center rounded-pill bg-ink px-6 py-3 text-body-sm font-medium text-canvas transition-all hover:opacity-85"
          >
            BACK TO HOME
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center rounded-pill border border-ink px-6 py-3 text-body-sm font-medium transition-all hover:bg-ink hover:text-canvas"
          >
            VIEW ALL WORK
          </Link>
        </div>
      </div>
      <div className="mt-16 h-px w-32 bg-hairline" />
      <p className="mt-4 font-mono text-caption uppercase tracking-[0.60px] text-ink/30">
        Error 404
      </p>
    </div>
  );
}
