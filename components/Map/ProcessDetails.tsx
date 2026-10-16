
import Link from "next/link";
import type { MapPinData } from "@/config/Map";

type ProcessDetailsProps = {
  pin: MapPinData;
};

export default function ProcessDetails({ pin }: ProcessDetailsProps) {
  const features = pin.whatWeDo?.slice(0, 3);

  return (
    <aside className="self-start w-full min-w-0 rounded-2xl border border-blue-400/20 bg-[#0a1628] p-4 sm:p-5 shadow-lg shadow-blue-950/20">
      {/* Stage label */}
      {pin.subtitle && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
          {pin.subtitle}
        </p>
      )}

      {/* Title */}
      <h2 className="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
        {pin.title}
      </h2>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-slate-300">
        {pin.description}
      </p>

      {/* Key activities */}
      {features && features.length > 0 && (
        <div className="mt-4 border-t border-white/10 pt-3">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            What we do
          </h3>

          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={`${pin.id}-feature-${index}`}
                className="flex items-start gap-2 text-sm leading-5 text-slate-200"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      {pin.href && (
        <Link
          href={pin.href}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-sky-400 px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]"
        >
          {pin.cta || "Explore more"}
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </aside>
  );
}
