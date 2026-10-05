"use client";

import { useEffect, useRef, useState } from "react";

type DataPoint = {
  value: number;
  label: string;   // e.g. "2015"
};

type GrowthChartProps = {
  data?: DataPoint[];
  duration?: number;
  width?: number;
  height?: number;
  lineColor?: string;
  glowColor?: string;
  fillColor?: string;
};

// 16 years, roughly exponential growth
const DEFAULT_DATA: DataPoint[] = [
{ value: 2, label: "2008" },
{ value: 7, label: "2009" },
  { value: 7, label: "2010" },
  { value: 6, label: "2011" },
  { value: 8, label: "2012" },
  { value: 13, label: "2013" },
  { value: 19, label: "2014" },
  { value: 15, label: "2015" },
  { value: 25, label: "2016" },
  { value: 15, label: "2017" },
  { value: 39, label: "2018" },
  { value: 45, label: "2019" },
  { value: 59, label: "2020" },
  { value: 56, label: "2021" },
  { value: 78, label: "2022" },
  { value: 90, label: "2023" },
  { value: 104, label: "2024" },
  { value: 120, label: "2025" },
];

export default function GrowthChart({
  data = DEFAULT_DATA,
  duration = 3800,
  width = 780,
  height = 420,
  lineColor = "#62a805",
  glowColor = "#07f950",
  fillColor = "rgba(6, 230, 99, 0.12)",
}: GrowthChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Trigger animation when the chart scrolls into view
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
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // High-DPI crispness
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const padding = { top: 30, right: 30, bottom: 50, left: 30 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;
    const maxValue = Math.max(...data.map((d) => d.value)) * 1.08;

    // Convert data → canvas points
    const points = data.map((d, i) => ({
      x: padding.left + (i / (data.length - 1)) * chartW,
      y: padding.top + chartH - (d.value / maxValue) * chartH,
      label: d.label,
    }));

    let start: number | null = null;
    let raf = 0;

    const draw = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      ctx.clearRect(0, 0, width, height);

      // --- Grid lines (subtle) ---
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 1;
      for (let i = 0; i <= 4; i++) {
        const y = padding.top + (i / 4) * chartH;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(padding.left + chartW, y);
        ctx.stroke();
      }

      // --- How far along the line are we? ---
      const drawnLength = eased * (points.length - 1);

      // --- Build the smooth path ---
      const path = new Path2D();
      buildSmoothPath(path, points, drawnLength);

      // --- Fill area under the curve ---
      const fillPath = new Path2D(path);
      const tipIndex = Math.min(Math.floor(drawnLength), points.length - 1);
      const tip = interpolatePoint(points, drawnLength);
      fillPath.lineTo(tip.x, padding.top + chartH);
      fillPath.lineTo(points[0].x, padding.top + chartH);
      fillPath.closePath();

      const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
      gradient.addColorStop(0, fillColor);
      gradient.addColorStop(1, "rgba(96, 165, 250, 0)");
      ctx.fillStyle = gradient;
      ctx.fill(fillPath);

      // --- Draw the line with glow ---
      ctx.save();
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 12;
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 2.5;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.stroke(path);
      ctx.restore();

      // --- Glowing leading point ---
      // Outer halo
      const haloRadius = 14;
      const halo = ctx.createRadialGradient(tip.x, tip.y, 0, tip.x, tip.y, haloRadius);
      halo.addColorStop(0, "rgba(147, 197, 253, 0.55)");
      halo.addColorStop(0.5, "rgba(96, 165, 250, 0.25)");
      halo.addColorStop(1, "rgba(96, 165, 250, 0)");
      ctx.beginPath();
      ctx.arc(tip.x, tip.y, haloRadius, 0, Math.PI * 2);
      ctx.fillStyle = halo;
      ctx.fill();

      // Solid core
      ctx.beginPath();
      ctx.arc(tip.x, tip.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;

      // --- Year labels at the bottom ---
      ctx.font = "11px system-ui, -apple-system, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      points.forEach((p, i) => {
        // Fade in each label as the line reaches it
        const reach = i / (points.length - 1);
        const labelOpacity = Math.min(Math.max((eased - reach) * 5, 0), 1);
        if (labelOpacity <= 0) return;

        // Show every other year if too crowded
        if (i % 2 !== 0 && points.length > 10) return;

        ctx.fillStyle = `rgba(148, 163, 184, ${labelOpacity * 0.7})`;
        ctx.fillText(p.label, p.x, padding.top + chartH + 14);
      });

      if (progress < 1) {
        raf = requestAnimationFrame(draw);
      }
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, data, duration, width, height, lineColor, glowColor, fillColor]);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <canvas
        ref={canvasRef}
        style={{ width: `${width}px`, height: `${height}px`, maxWidth: "100%" }}
        aria-label="Business website growth chart"
      />
    </div>
  );
}

/* ---------- helpers ---------- */

function interpolatePoint(
  points: { x: number; y: number }[],
  drawnLength: number
) {
  const i = Math.floor(drawnLength);
  const t = drawnLength - i;
  const a = points[Math.min(i, points.length - 1)];
  const b = points[Math.min(i + 1, points.length - 1)];
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
  };
}

function buildSmoothPath(
  path: Path2D,
  points: { x: number; y: number }[],
  drawnLength: number
) {
  if (points.length === 0) return;
  path.moveTo(points[0].x, points[0].y);

  for (let i = 1; i <= drawnLength && i < points.length; i++) {
    const curr = points[i];
    const prev = points[i - 1];

    if (i === Math.floor(drawnLength) + 1 && i > 0) {
      // Partial segment: stop at the interpolated tip
      const t = drawnLength - Math.floor(drawnLength);
      const x = prev.x + (curr.x - prev.x) * t;
      const y = prev.y + (curr.y - prev.y) * t;
      path.lineTo(x, y);
      break;
    }

    // Quadratic curve using the midpoint technique:
    // control point is the current point, curve ends at the midpoint of curr→next
    const next = points[i + 1];
    if (next) {
      const midX = (curr.x + next.x) / 2;
      const midY = (curr.y + next.y) / 2;
      path.quadraticCurveTo(curr.x, curr.y, midX, midY);
    } else {
      path.lineTo(curr.x, curr.y);
    }
  }
}