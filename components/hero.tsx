import Link from "next/link";
import FadeRotator from "@/components/FadeRotator";
import CodeTyper from "./components/CodeTyper";
import { business } from "@/config/business";

/* ============================================================
   Home variant — big two-column hero with chart and rotator
   ============================================================ */

type HomeHeroProps = {
  variant: "home";
  title: string;
  description: string;
};

function HomeHero({ title, description }: HomeHeroProps) {
  return (
    <section className="relative bg-hero-bg text-hero-text overflow-hidden">
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 50%, var(--color-primary), transparent 60%)",
          opacity: 0.15,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* LEFT: Text */}
          <div>
            <p className="text-xs font-body text-primary uppercase tracking-[0.2em]">
              {business.name}
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-heading tracking-tight leading-[1.05]">
              {title}
            </h1>

            <p className="mt-6 text-lg text-hero-text/70 max-w-lg leading-relaxed">
              {description}
            </p>

            <div className="mt-10 h-8">
              <FadeRotator
                interval={3500}
                fadeDuration={500}
                items={[
                  <p key="1" className="text-primary font-medium">
                    Don't be left behind.
                  </p>,
                  <p key="2" className="text-primary font-medium">
                    Growth happens online.
                  </p>,
                  <p key="3" className="text-primary font-medium">
                    Your competitors are already there.
                  </p>,
                ]}
              />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary text-text-inverse rounded-lg hover:bg-primary-hover transition font-medium"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 border border-primary/30 text-hero-text rounded-lg hover:bg-primary/10 transition font-medium"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* RIGHT: Chart */}
          <div className="relative">
            <p className="text-sm font-semibold text-accent uppercase tracking-wide">
              How we do things
            </p>
            <CodeTyper />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Page variant — small centered intro band
   ============================================================ */

type PageHeroProps = {
  variant: "page";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  background?: "white" | "gray";
};

function PageHero({
  eyebrow,
  title,
  subtitle,
  background = "gray",
}: PageHeroProps) {
  const bgClass = background === "gray" ? "bg-surface" : "bg-background";

  return (
    <section className={`py-20 px-6 ${bgClass}`}>
      <div className="max-w-4xl mx-auto text-center">
        {eyebrow && (
          <p className="text-sm font-medium text-text-muted uppercase tracking-wider">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-text">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   Public API — dispatcher
   ============================================================ */

export type HeroProps =
  | ({ variant: "home" } & Omit<HomeHeroProps, "variant">)
  | ({ variant: "page" } & Omit<PageHeroProps, "variant">);

export default function Hero(props: HeroProps) {
  if (props.variant === "page") {
    return <PageHero {...props} />;
  }
  return <HomeHero {...props} />;
}