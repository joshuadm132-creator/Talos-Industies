// components/TeamRotator.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import FadeRotator from "@/components/FadeRotator";

type Content = {
  id: string;
  subtitle?: string;
  paragraphs: string[];
  features?: string[];
  button?: { text: string; href: string };
};

type TeamRotatorProps = {
  title: string;
  contents: Content[];
};

export default function TeamRotator({ title, contents }: TeamRotatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = contents.length;

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-[#0b1a35] via-[#0a1628] to-[#071021] text-hero-text">
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #de7b4a, transparent 70%)" }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-accent" />
            </span>
            <h2 className="text-sm font-mono uppercase tracking-[0.25em] text-white/80">
              {title}
            </h2>
          </div>

          <span className="text-xs font-mono text-white/50">
            {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Rotating content */}
        <div className="mt-12">
          <FadeRotator
            interval={8000}
            minHeight={420}
            onChange={setActiveIndex}
            items={contents.map((member, index) => (
              <div
                key={member.id}
                id={member.id}
                className="grid gap-10 md:grid-cols-[240px_1fr] md:items-start"
              >
                {/* LEFT: Index + initial box */}
                <div className="animate-team-fade-in">
                  <div className="text-xs font-mono text-accent tracking-[0.3em] ">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative mt-4 aspect-square rounded-2xl border border-accent/40 bg-white/5 backdrop-blur overflow-hidden">
                    {/* Pulsing glow behind the letter */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgba(238, 238, 39, 0.35), transparent 80%)",
                      }}
                    />

                  

                    {/* Corner brackets */}
                    <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-accent/60" />
                    <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-accent/60" />
                    <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-accent/60" />
                    <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-accent/60" />

                    {/* The letter */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <span className="font-heading text-8xl font-bold text-white drop-shadow-[0_0_25px_rgba(74,222,128,0.6)]">
                        {member.subtitle?.charAt(0).toUpperCase() || "?"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Bio */}
                <div className="animate-team-fade-in">
                  {member.subtitle && (
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                      {member.subtitle}
                    </h3>
                  )}

                   {member.paragraphs.map((p, i) => (
                    <p key={i} className="mt-4 text-white/80 leading-relaxed">
                      {p.split(" ").map((word, wi) => (
                        <span
                          key={wi}
                          className="hover:text-accent transition-colors duration-300"
                        >
                          {word}{" "}
                        </span>
                      ))}
                    </p>
                  ))}

                  {member.features && member.features.length > 0 && (
                    <ul className="mt-6 space-y-2">
                      {member.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/85 text-sm">
                          <span className="text-accent font-mono leading-5">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {member.button && (
                    <Link
                      href={member.button.href}
                      className="inline-block mt-6 text-sm font-mono text-accent hover:text-white transition-colors"
                    >
                      {member.button.text} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          />
        </div>

        {/* Footer: progress + label */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex gap-2">
            {contents.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === activeIndex
                    ? "w-10 bg-accent shadow-[0_0_12px_rgba(74,222,128,0.8)]"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>

          <span className="text-xs font-mono text-white/40 tracking-wider">
            TEAM // ACTIVE
          </span>
        </div>

      </div>
    </section>
  );
}