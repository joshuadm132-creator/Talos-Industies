
"use client";

import { useRef, useState } from "react";
import { mapConfig,destinations } from "@/config/Map";
import ProcessMap from "./ProcessMap";
import ProcessDetails from "./ProcessDetails";
import { findRoute } from "./findRoute";

const allPins = [
  ...mapConfig.pins,
  ...destinations,
];

export default function MapNavigation() {
const [selectedPinId, setSelectedPinId] = useState(
  mapConfig.pins[1].id
);

const [currentNodeId, setCurrentNodeId] = useState(
  mapConfig.pins[1].id
);

  // Coordinates used to draw the marker between nodes.
  const [markerPosition, setMarkerPosition] = useState(() => {
    
    const start = mapConfig.paths.nodes.find(
      (node) => node.id === mapConfig.pins[0].id
    )!;

    return { x: start.x, y: start.y };
  });
const animationFrame = useRef<number | null>(null);
 const selectedPin =
  allPins.find((pin) => pin.id === selectedPinId) ??
  mapConfig.pins[0];
  
function handlePinSelect(id: string) {
  setSelectedPinId(id);

  // Stop any animation already in progress.
  if (animationFrame.current !== null) {
    cancelAnimationFrame(animationFrame.current);
    animationFrame.current = null;
  }

  // Restart from the last node the marker reached.
  const route = findRoute(
    currentNodeId,
    id,
    mapConfig.paths.nodes
  );

  const routeNodes = route
    .map((nodeId) =>
      mapConfig.paths.nodes.find((node) => node.id === nodeId)
    )
    .filter((node) => node !== undefined);

  if (routeNodes.length < 2) return;

  const start = routeNodes[0];


  setMarkerPosition({ x: start.x, y: start.y });

  let segmentIndex = 0;
  let segmentStartTime: number | null = null;

  const segmentDuration = 700;

  function animate(timestamp: number) {
    const from = routeNodes[segmentIndex];
    const to = routeNodes[segmentIndex + 1];

    if (!from || !to) {
      animationFrame.current = null;
      return;
    }

    if (segmentStartTime === null) {
      segmentStartTime = timestamp;
    }

    const progress = Math.min(
      (timestamp - segmentStartTime) / segmentDuration,
      1
    );

    // Interpolate between the two nodes.
    const x = from.x + (to.x - from.x) * progress;
    const y = from.y + (to.y - from.y) * progress;

    setMarkerPosition({ x, y });

    if (progress >= 1) {
      setCurrentNodeId(to.id);
      segmentIndex++;
      segmentStartTime = null;

      if (segmentIndex >= routeNodes.length - 1) {
        animationFrame.current = null;
        return;
      }
    }

    animationFrame.current = requestAnimationFrame(animate);
  }

  // Begin travelling along the route.
  animationFrame.current = requestAnimationFrame(animate);
}

  return (
    <section className="min-h-screen bg-[#06152B] px-4 py-10 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold">
          {mapConfig.title}
        </h1>

        <p className="mb-8 text-slate-400">
          {mapConfig.subtitle}
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
          <ProcessMap
            pins={allPins}
            selectedPinId={selectedPinId}
            currentNodeId={currentNodeId}
            markerPosition={markerPosition}
            
            onSelect={handlePinSelect}
          />

          <ProcessDetails pin={selectedPin} />
        </div>
      </div>
    </section>
  );
}
