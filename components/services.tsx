// components/services.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ServiceCardReveal, type ServiceCardData } from "@/components/serviceCard";

/* ============================================================
   Types — match your Talos.tsx shape
   ============================================================ */

export type ServiceContent = {
  id: string;
  subtitle?: string;
  paragraphs?: string[];
  features?: string[];
  image?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  /** Optional short tag — falls back to nothing */
  tag?: string;
  content?: ServiceContent[];
  button?: { text: string; href: string };
};

type ServicesProps = {
  headline: string;
  /** Optional subtitle under the headline */
  subheadline?: string;
  services: Service[];
  variant?: "preview" | "full";
};

/* ============================================================
   Section wrapper
   ============================================================ */

export default function Services({
  headline,
  subheadline,
  services,
  variant = "preview",
}: ServicesProps) {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text uppercase">
            {headline}
          </h2>
          {subheadline && (
            <p className="mt-4 text-lg text-text-muted leading-relaxed">
              {subheadline}
            </p>
          )}
        </div>

        {variant === "preview" && (
          <PreviewGrid services={services} />
        )}

        {variant === "full" && (
          <FullAccordion services={services} />
        )}
      </div>
    </section>
  );
}

/* ============================================================
   HOME / PREVIEW — a clean 3-column grid of cards

   Personal note . No idea how this works need to lean it.
   ============================================================ */

function PreviewGrid({ services }: { services: Service[] }) {
  return (
    <>
      <div className="mt-14 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <ServiceCardReveal
            key={service.id}
            delay={i * 80}
            service={toCardData(service, i)}
            href={`/services/#${service.id}`}
          />
        ))}
      </div>

      <Reveal delay={services.length * 80 + 100}>
        <div className="mt-12">
          <Link
            href="/services"
            className="inline-block px-6 py-3 bg-primary text-text-inverse rounded-lg hover:bg-primary-hover transition font-medium"
          >
            Explore All Services
          </Link>
        </div>
      </Reveal>
    </>
  );
}

/* ============================================================
   SERVICES PAGE / FULL — same cards, click to expand in place
   ============================================================ */

function FullAccordion({ services }: { services: Service[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const openService = services.find((s) => s.id === openId) ?? null;

  const detailRef = useRef<HTMLDivElement | null>(null);
  // Skip the scroll on the very first render (initial state, no user action)
  const hasInteracted = useRef(false);

  // Deep-link support (unchanged)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const match = services.find((s) =>
      s.content?.some((c) => c.id === hash)
    );
    if (match) {
      setOpenId(match.id);
      hasInteracted.current = true;   // deep link counts as interaction
    }
  }, [services]);

  // Scroll to the detail panel whenever it opens or changes
  useEffect(() => {
    if (!hasInteracted.current) return;
    if (!openId) return;   // closing — do NOT scroll

    // Wait one frame so the panel has actually mounted in the DOM
    const raf = requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [openId]);

  const toggle = (id: string) => {
    hasInteracted.current = true;
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="mt-14 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div key={service.id} id={service.id} className="scroll-mt-24">
            <ServiceCardReveal
              delay={i * 60}
              service={toCardData(service, i)}
              onClick={() => toggle(service.id)}
              active={openId === service.id}
            />
          </div>
        ))}
      </div>

      {openService && (
        <div
          ref={detailRef}
          id="service-detail"
          className="mt-6 scroll-mt-24"
        >
          <ServiceDetail service={openService} />
        </div>
      )}
    </>
  );
}

/* ============================================================
   Expanded detail panel (replaces the old "full" content stack)
   ============================================================ */

function ServiceDetail({ service }: { service: Service }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 md:p-10">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        {/* Text column */}
        <div>
          {service.content?.map((block) => (
            <div key={block.id} id={block.id} className="scroll-mt-24">
              {block.subtitle && (
                <h4 className="text-xl md:text-2xl font-heading font-semibold text-text">
                  {block.subtitle}
                </h4>
              )}

              <div className="mt-4 space-y-4">
                {block.paragraphs?.map((p, i) => (
                  <p key={i} className="text-text-muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {block.features && (
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {block.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text"
                    >
                      <span className="text-accent font-bold shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {service.button && (
            <Link
              href={service.button.href}
              className="inline-block mt-8 px-6 py-3 bg-primary text-text-inverse rounded-lg hover:bg-primary-hover transition font-medium"
            >
              {service.button.text}
            </Link>
          )}
        </div>

        {/* Visual column — image or a placeholder */}
        <div className="order-first md:order-last">
          <div className="aspect-[6/4] rounded-xl overflow-hidden ">
            {service.content?.[0]?.image ? (
              <Image
                src={service.content[0].image}
                alt={service.title}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-text-muted/50 text-sm">
                {service.title}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Helpers
   ============================================================ */

function toCardData(service: Service, index: number): ServiceCardData {
  return {
    id: service.id,
    title: service.title,
    description: service.description,
    tag: service.tag,
    index: String(index + 1).padStart(2, "0"),
  };
}