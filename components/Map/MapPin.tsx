
"use client";

type MapPinProps = {
  title: string;
  x: number;
  y: number;
  selected: boolean;
  onClick: () => void;
  variant?: "main" | "support";
  step?: number;
};

export default function MapPin({
  title,
  x,
  y,
  selected,
  onClick,
  variant = "main",
  step,
}: MapPinProps) {
  const isMain = variant === "main";

  const color = isMain
    ? "#27F0C0"
    : "#FF9B45";

  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      aria-label={`Explore ${title}`}
      className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {/* Pin body */}
      <span
        className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-transform duration-200"
        style={{
          backgroundColor: selected ? color : "#0B2544",
          borderColor: color,
          boxShadow: selected
            ? `0 0 8px ${color}, 0 0 20px ${color}66`
            : `0 0 8px ${color}55`,
          transform: selected ? "scale(0.9)" : "scale(0.6)",
        }}
      >
        {step !== undefined ? (
          <span
            className="text-sm font-bold"
            style={{ color: selected ? "#06152B" : color }}
          >
            {step}
          </span>
        ) : (
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 8px ${color}`,
            }}
          />
        )}
      </span>

      {/* Pin label */}
      <span
        className="whitespace-nowrap rounded-md border px-2 py-1 text-xs font-semibold shadow-lg transition-colors"
        style={{
          color: selected ? "#FFFFFF" : "#DCEBFF",
          backgroundColor: "#071A35",
          borderColor: selected ? color : "#17436B",
        }}
      >
        {title}
      </span>
    </button>
  );
}
