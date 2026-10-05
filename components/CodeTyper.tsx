"use client";

import { useEffect, useRef, useState } from "react";

type CodeTyperProps = {
  code?: string;
  speed?: number;
};

const DEFAULT_CODE = `const business = {
  name: "Talos Industries",
  services: [
    "Web Development",
    "SEO",
    "Digital Solutions"
  ]
};

function buildForGrowth(business) {
  return {
    strategy: "Digital",
    result: "Growth"
  };
}`;

export default function CodeTyper({
  code = DEFAULT_CODE,
  speed = 55,
}: CodeTyperProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [displayedCode, setDisplayedCode] = useState("");

  // Start typing when the component enters the viewport
  useEffect(() => {
    const node = containerRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // Type the code character by character
  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;

    const interval = setInterval(() => {
      setDisplayedCode(code.slice(0, index + 1));

      index++;

      if (index >= code.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [hasStarted, code, speed]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-2xl overflow-hidden bg-slate-950 border border-slate-600 shadow-xl"
    >
      {/* Window header */}
      <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-slate-500">
          talos.ts
        </span>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-3 text-sm leading-6 bg-gradient-to-r from-blue-600 via-green-500 to-red-400 bg-clip-text text-transparent">
        <code>{displayedCode}</code>

        {/* Cursor */}
        {hasStarted && displayedCode.length < code.length && (
          <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-green-400" />
        )}
      </pre>
    </div>
  );
}