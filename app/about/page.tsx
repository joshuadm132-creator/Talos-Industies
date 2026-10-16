// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
      {/* 1. Hero with Background Image */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden bg-slate-800 text-white">
        {/* Hero Background Image */}
        <Image
          src="/images/about-hero.png" 
          alt="Tech skyline backdrop"
          fill
          priority
          className="object-cover object-center opacity-6// Place your downloaded image in /public/ima0"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950/60" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
              {business.About.intro.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
              {business.About.intro.headline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed font-normal drop-shadow">
              {business.About.intro.description}
            </p>
          </Reveal>
        </div>
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