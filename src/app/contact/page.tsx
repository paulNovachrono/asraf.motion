"use client";

import { useState } from "react";
import Button from "@/components/Button";

const serviceOptions = [
  "Social Media Strategy",
  "Motion Graphics & Animation",
  "Video Editing & Post-Production",
  "Full Brand Content System",
  "Something else",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("wassimasraf@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback
    }
  };

  return (
    <>
      <section className="pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h1 className="text-display-lg font-light tracking-[-0.96px]">Contact</h1>
            <p className="mt-2 text-body-lg font-light tracking-[-0.14px] text-ink/60">
              Let&apos;s make something that moves.
            </p>
          </div>

          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:w-1/2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-lg bg-block-lime p-12 text-center">
                  <div className="text-3xl">✓</div>
                  <h3 className="mt-4 text-headline font-medium tracking-[-0.26px]">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-body-sm font-light text-ink/60">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label className="mb-1 block text-body-sm font-medium">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full border-b border-hairline bg-transparent pb-2 text-body font-light outline-none transition-all focus:border-ink"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-body-sm font-medium">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full border-b border-hairline bg-transparent pb-2 text-body font-light outline-none transition-all focus:border-ink"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-body-sm font-medium">
                      WHAT DO YOU NEED?
                    </label>
                    <div className="flex flex-col gap-3">
                      {serviceOptions.map((option) => (
                        <label
                          key={option}
                          className="flex cursor-pointer items-center gap-3 rounded-lg border border-hairline px-4 py-3 transition-all has-[:checked]:border-ink has-[:checked]:bg-ink/5"
                        >
                          <input
                            type="radio"
                            name="service"
                            value={option}
                            checked={formState.service === option}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                service: e.target.value,
                              })
                            }
                            className="h-4 w-4 accent-ink"
                          />
                          <span className="text-body-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-body-sm font-medium">
                      TELL ME MORE
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full resize-none border-b border-hairline bg-transparent pb-2 text-body font-light outline-none transition-all focus:border-ink"
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full md:w-auto">
                    SEND IT →
                  </Button>
                </form>
              )}
            </div>

            <div className="md:w-1/2 md:pl-12">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 animate-pulse-dot rounded-full bg-semantic-success" />
                <span className="font-mono text-caption uppercase tracking-[0.60px]">
                  Available for projects
                </span>
              </div>
              <p className="mt-1 font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
                Usually responds within 24 hours
              </p>

              <div className="mt-8">
                <button
                  onClick={copyEmail}
                  className="group relative text-body-lg font-light tracking-[-0.14px] underline-offset-4 hover:underline"
                >
                  {copied ? "Copied!" : "wassimasraf@gmail.com"}
                </button>
              </div>

              <div className="mt-8">
                <p className="text-body-sm font-medium">Cairo, Egypt</p>
                <p className="font-mono text-caption uppercase tracking-[0.60px] text-ink/40">
                  GMT+2 · Open to remote worldwide
                </p>
              </div>

              <div className="mt-8 border-t border-hairline-soft pt-8">
                <div className="flex flex-col gap-3 font-mono text-caption uppercase tracking-[0.60px]">
                  <a href="#" className="hover:text-ink/60">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-ink/60">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-ink/60">
                    Behance
                  </a>
                  <a href="#" className="hover:text-ink/60">
                    Vimeo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
