// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/config/business";
import Reveal from "@/components/Reveal";
import AboutContent from "@/components/AboutContent";
import Values from "@/components/Values";
import TeamRotator from "@/components/TeamRotator";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Talos Industries is a Harare-based web design studio building modern websites for growing businesses across Zimbabwe and Southern Africa.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="py-24 px-6 bg-surface">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-text-muted uppercase tracking-wider">
              {business.About.intro.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-text leading-tight">
              {business.About.intro.headline}
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              {business.About.intro.description}
            </p>
          </div>
        </Reveal>
      </section>

      {/* 2. Story + Mission/Vision */}
      <AboutContent
        title={business.About.title}
        contents={business.About.content}
      />
      {/* 3. Team */}
      <TeamRotator
        title={business.Team.title}
        contents={business.Team.content}
      />
      {/* 4. Values */}
      <Values
        title={business.Values.title}
        subtitle={business.Values.subtitle}
        items={business.Values.items}
      />

      {/* 5. CTA */}
      <section className="py-24 px-6 bg-hero-bg text-hero-text text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold">
            Want to work with us?
          </h2>
          <p className="mt-4 text-hero-text/70 max-w-xl mx-auto">
            Tell us about your project — we&apos;ll get back to you within one
            business day.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-6 py-3 bg-primary text-text-inverse rounded-lg hover:bg-primary-hover transition font-medium"
          >
            Get in touch
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
