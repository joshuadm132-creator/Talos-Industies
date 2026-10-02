import AboutContent from "@/components/AboutContent";
import TeamRotator from "@/components/TeamRotator";
import Link from "next/link";
import { business } from "@/config/business";

export default function AboutPage() {
  return (
    <main>

      <section className="py-20 px-6 bg-gray-50">
  <div className="max-w-4xl mx-auto text-center">

    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
      {business.About.intro.eyebrow}
    </p>

    <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
      {business.About.intro.headline}
    </h1>

    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
      {business.About.intro.description}
    </p>

  </div>
</section>


      {/* 2. About / Mission / Vision */}
      <AboutContent
        title={business.About.title}
        contents={business.About.content}
      />


      {/* 3. Values */}
      <AboutContent
        title={business.Values.title}
        contents={business.Values.content}
      />


      {/* 4. Team */}
      <TeamRotator
        title={business.Team.title}
        contents={business.Team.content}
      />


      {/* 5. CTA */}
      <section className="py-20 px-6 bg-black text-white text-center">

        <h2 className="text-3xl font-bold">
          Want to work with us?
        </h2>

        <Link
          href="/contact"
          className="inline-block mt-8 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
        >
          Get in touch
        </Link>

      </section>

    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Talos Industries is a Harare-based web design studio building modern websites for growing businesses across Zimbabwe and Southern Africa.",
  alternates: {
    canonical: "/about",
  },
};