"use client";

import Image from "next/image";
import MapPin from "./MapPin";
import {
  mapConfig,
  pathConnections,
  destinations,
  type MapPinData,
} from "@/config/Map";
import TravellingMarker from "./TravellingMarker";

type ProcessMapProps = {
  pins: MapPinData[];
  selectedPinId: string;
  currentNodeId: string;
  markerPosition: { x: number; y: number };
  onSelect: (id: string) => void;
};
export default function ProcessMap({
  pins,
  selectedPinId,
  currentNodeId,
  markerPosition,
  onSelect,
}: ProcessMapProps) {
  const currentNode = mapConfig.paths.nodes.find(
    (node) => node.id === currentNodeId,
  );
  const nodes = mapConfig.paths.nodes;

  // Create one line for each connection.
  // Avoid drawing the same connection twice.
  const edges = pathConnections.flatMap((connection) => {
    const node = nodes.find((item) => item.id === connection.from);

    const target = nodes.find((item) => item.id === connection.to);

    if (!node || !target) return [];

    return [{ node, target, variant: connection.variant }];
  });
 

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl
      border border-blue-900 bg-[#06152B]"
    >
      <div className="relative aspect-[8/5] w-full">
        {/* Background map */}
        <Image
          src={mapConfig.image}
          alt="Illustrated development process map"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 65vw"
          className="object-cover"
        />

        {/* Path network */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {edges.map(({ node, target, variant }) => {
            const isMain = variant === "main";
            const roadColor = isMain ? "#168CFF" : "#FF9B45";

            return (
              <g key={`${node.id}-${target.id}`}>
                {/* Subtle dark outline */}
                <line
                  x1={node.x}
                  y1={node.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="#06152B"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                />

                {/* Colour-coded dashed road */}
                <line
                  x1={node.x}
                  y1={node.y}
                  x2={target.x}
                  y2={target.y}
                  stroke={roadColor}
                  strokeWidth={isMain ? "0.35" : "0.15"}
                  strokeDasharray={isMain ? "1 1.6" : "1.4 1.3"}
                  strokeLinecap="round"
                  opacity={isMain ? 1 : 0.9}
                />
              </g>
            );
          })}

          {currentNode && (
            <TravellingMarker x={markerPosition.x} y={markerPosition.y} />
          )}
        </svg>

        {/* Pins appear above the roads */}

        {pins.map((pin) => (
          <MapPin
            key={pin.id}
            title={pin.title}
            x={pin.x}
            y={pin.y}
            selected={selectedPinId === pin.id}
            onClick={() => onSelect(pin.id)}
            variant={pin.variant}
            step={pin.step}
          />
        ))}
      </div>
    </div>
  );
}
