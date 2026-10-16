"use client";

import { useEffect, useState, ReactNode } from "react";

type FadeRotatorProps = {
  items: ReactNode[];
  interval?: number;
  fadeDuration?: number;
  minHeight?: number;
  onChange?: (index: number) => void;
};

export default function FadeRotator({
  items,
  interval = 3500,
  fadeDuration = 500,
  minHeight,
  onChange,
}: FadeRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % items.length;
        onChange?.(next);
        return next;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval, onChange]);

  if (items.length === 0) return null;

  return (
    <div
      className="relative"
      style={{ minHeight: minHeight ? `${minHeight}px` : undefined }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{ transitionDuration: `${fadeDuration}ms` }}
          className={`transition-opacity ease-in-out ${
            i === index
              ? "opacity-100 relative"
              : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}