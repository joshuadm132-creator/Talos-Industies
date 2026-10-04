// components/our-work.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import BrowserFrame from "@/components/browser-frame";

/* ============================================================
   Data — Talos-specific, no config file needed
   ============================================================ */

type WorkItem = {
  id: string;
  title: string;
  category: string;
  href: string;
  displayUrl?: string;
  image: string;
  result?: string;
  featured?: boolean;
};

const WORK_ITEMS: WorkItem[] = [
  {
    id: "kariba-lodge",
    title: "Heritage touch",
    category: "Hospitality · Listings",
    href: "https://heritagetouch.org/",
    displayUrl: "heritagetouch.org",
    image: "preview_Sites/Screenshot 2026-09-30 at 22-28-49 Residential Senior Care Home in Frisco TX Heritage Touch Senior Care.png",
    result: "Direct enquiries tripled in 6 weeks",
    featured: true,
  },
  {
    id: "harare-engineering",
    title: "Personal portfolio.",
    category: "Corporate · SEO",
    href: "https://joshuadm132-creator.github.io/Potfolio.github.io/",
    displayUrl: "https://joshuadm132-creator.github.io/Potfolio.github.io/",
    image: "preview_Sites/image.png",
    result: "Private portfolio",
  },
   {
    id: "Catalog",
    title: "Business catalog.",
    category: "Sales · Listing · Products ",
    href: "https://catalog-template-gs-agency-two.vercel.app/products",
    displayUrl: "https://catalog-template-gs-agency-two.vercel.app/products",
    image: "preview_Sites/Catalog.png",
    result: "Business sales Catalogue",
  },

  
];

/* ============================================================
   Section
   ============================================================ */

type OurWorkProps = {
  /** Optional overrides if you ever want to reuse this elsewhere */
  title?: string;
  subtitle?: string;
  background?: "white" | "gray" | "dark";
};

export default function OurWork({
  title = "See Our Work",
  subtitle = "A few of the sites we've designed, built, and launched for businesses like yours.",
  background = "gray",
}: OurWorkProps) {
  const bgClass =
    background === "gray"
      ? "bg-surface"
      : background === "dark"
      ? "bg-hero-bg text-hero-text"
      : "bg-background";

  const headingClass =
    background === "dark" ? "text-hero-text" : "text-text";
  const mutedClass =
    background === "dark" ? "text-hero-text/70" : "text-text-muted";

  return (
    <section className={`py-20 px-6 ${bgClass}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl">
          <h2
            className={`text-3xl md:text-4xl font-heading font-bold uppercase ${headingClass}`}
          >
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-4 text-lg leading-relaxed ${mutedClass}`}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 grid-cols-1 md:grid-cols-2">
          {WORK_ITEMS.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <WorkCard item={item} />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={WORK_ITEMS.length * 100 + 100}>
          <div className="mt-14">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-text-inverse rounded-lg hover:bg-primary-hover transition font-medium"
            >
              Start Your Project
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Individual work card
   ============================================================ */

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      aria-label={`Visit ${item.title} (opens in new tab)`}
    >
      <BrowserFrame
        url={item.displayUrl ?? item.href}
        className="
          transition-all duration-300 ease-out
          group-hover:-translate-y-1
          group-hover:shadow-xl
          group-hover:border-primary/30
        "
      >
        <div className="relative w-full h-full">
          <Image
            src={item.image}
            alt={`${item.title} — ${item.category}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="
              object-cover object-top
              transition-transform duration-500 ease-out
              group-hover:scale-[1.03]
            "
          />

          {item.featured && (
            <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-accent text-text-inverse text-[10px] font-semibold uppercase tracking-wider">
              Featured
            </span>
          )}
        </div>
      </BrowserFrame>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-heading font-semibold text-text group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-text-muted">{item.category}</p>

          {item.result && (
            <p className="mt-3 text-sm text-accent font-medium">
              {item.result}
            </p>
          )}
        </div>

        <span
          aria-hidden="true"
          className="
            shrink-0 mt-1 text-text-muted
            transition-all duration-300
            group-hover:text-primary
            group-hover:translate-x-0.5 group-hover:-translate-y-0.5
          "
        >
          ↗
        </span>
      </div>
    </Link>
  );
}