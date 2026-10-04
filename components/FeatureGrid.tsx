// components/FeatureGrid.tsx
import Link from "next/link";
import Reveal from "@/components/Reveal";

export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon?: string;        // optional short label or emoji — keep it simple
};

type FeatureGridProps = {
  /** Small uppercase label above the title */
  eyebrow?: string;

  /** Main heading */
  title: string;

  /** Optional paragraph under the heading */
  subtitle?: string;

  /** The grid items */
  items: FeatureItem[];

  /**
   * Visual style:
   * - "cards"    → bordered boxes on surface background (default, good for "what we do")
   * - "list"     → simple rows, no boxes (good for "what we don't do")
   * - "reasons"  → numbered rows on accent tint (good for "why you need a website")
   */
  variant?: "cards" | "list" | "reasons";

  /** Columns on desktop: 2, 3, or 4. Defaults per variant. */
  columns?: 2 | 3 | 4;

  /** Optional CTA button below the grid */
  cta?: { text: string; href: string };

  /** Section background: "white" | "gray" | "dark" */
  background?: "white" | "gray" | "dark";
};

export default function FeatureGrid({
  eyebrow,
  title,
  subtitle,
  items,
  variant = "cards",
  columns,
  cta,
  background = "white",
}: FeatureGridProps) {
  const cols =
    columns ??
    (variant === "list" ? 2 : items.length >= 4 ? 4 : 3);

  const gridCols =
    cols === 2
      ? "grid-cols-1 md:grid-cols-2"
      : cols === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          {eyebrow && (
            <p className="text-sm font-medium text-accent uppercase tracking-wider">
              {eyebrow}
            </p>
          )}
          <h2
            className={`mt-3 text-3xl md:text-4xl font-heading font-bold uppercase ${headingClass}`}
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
        <div className={`mt-14 grid gap-6 ${gridCols}`}>
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              {variant === "cards" && (
                <CardItem item={item} />
              )}
              {variant === "list" && (
                <ListItem item={item} />
              )}
              {variant === "reasons" && (
                <ReasonItem item={item} index={index} />
              )}
            </Reveal>
          ))}
        </div>

        {/* Optional CTA */}
        {cta && (
          <div className="mt-12 text-center">
            <Link
              href={cta.href}
              className="inline-block px-6 py-3 bg-primary text-text-inverse rounded-lg hover:bg-primary-hover transition font-medium"
            >
              {cta.text}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Variant renderers ---------- */

function CardItem({ item }: { item: FeatureItem }) {
  return (
    <div className="h-full p-6  border border-border bg-background shadow-sm hover:shadow-md transition">
      {item.icon && (
        <div className="w-10 h-10  bg-primary/10 text-primary flex items-center justify-center font-bold">
          {item.icon}.
        </div>
      )}
      <h3 className="mt-4 text-lg font-heading font-semibold text-text">
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

function ListItem({ item }: { item: FeatureItem }) {
  return (
    <div className="flex gap-4 p-5  border border-border bg-background">
      <div className="shrink-0 w-8 h-8  bg-red-300 text-text-muted flex items-center justify-center font-bold">
        ✕
      </div>
      <div>
        <h3 className="font-heading font-semibold text-text">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-text-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function ReasonItem({ item, index }: { item: FeatureItem; index: number }) {
  return (
    <div className="flex gap-4 p-5 bg-background border border-border">
      <div className="shrink-0 w-10 h-10 bg-accent text-text-inverse flex items-center justify-center font-bold">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div>
        <h3 className="font-heading font-semibold text-text">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-text-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}