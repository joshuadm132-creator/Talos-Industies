
type TravellingMarkerProps = {
  x: number;
  y: number;
};

export default function TravellingMarker({
  x,
  y,
}: TravellingMarkerProps) {
  return (
    <g>
      {/* Soft blue glow */}
      <circle
        cx={x}
        cy={y}
        r="4"
        fill="#168CFF"
        opacity="0.18"
      />

      {/* Brighter inner halo */}
      <circle
        cx={x}
        cy={y}
        r="2.4"
        fill="#168CFF"
        opacity="0.3"
      />

      {/* Marker core */}
      <circle
        cx={x}
        cy={y}
        r="1.15"
        fill="#63C9FF"
        stroke="#FFFFFF"
        strokeWidth="0.3"
      />
    </g>
  );
}
