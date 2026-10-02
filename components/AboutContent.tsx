// components/AboutContent.tsx
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type Content = {
  id: string;
  subtitle?: string;
  paragraphs: string[];
  features?: string[];
  image?: string;
  button?: {
    text: string;
    href: string;
  };
};

type AboutContentProps = {
  title: string;
  contents: Content[];
};

export default function AboutContent({
  title,
  contents,
}: AboutContentProps) {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">

        <Reveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text uppercase text-center">
            {title}
          </h2>
        </Reveal>

        <div className="mt-16 space-y-24">

          {contents.map((content, index) => (
            <Reveal key={content.id} delay={index * 150}>

              <div
                id={content.id}
                className={`grid gap-10 md:grid-cols-2 md:items-center ${
                  index % 2 === 1
                    ? "md:[&>*:first-child]:order-2"
                    : ""
                }`}
              >

                {/* Text */}
                <div>

                  {content.subtitle && (
                    <p className="text-sm font-semibold text-text-muted uppercase tracking-wider">
                      {content.subtitle}
                    </p>
                  )}

                  {content.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="mt-4 text-text-muted leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {content.features && (
                    <ul className="mt-6 space-y-2">
                      {content.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-text"
                        >
                          <span className="text-accent font-bold">
                            ✓
                          </span>

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {content.button && (
                    <Link
                      href={content.button.href}
                      className="inline-block mt-8 px-6 py-3 bg-primary text-text-inverse rounded-lg hover:bg-primary-hover transition font-medium"
                    >
                      {content.button.text}
                    </Link>
                  )}

                </div>

                {/* Image */}
                <div className="aspect-[4/3] rounded-2xl bg-surface overflow-hidden">

                  {content.image ? (
                    <Image
                      src={content.image}
                      alt={content.subtitle || "About us"}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-text-muted/60 text-sm">
                      image coming soon
                    </div>
                  )}

                </div>

              </div>

            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}
