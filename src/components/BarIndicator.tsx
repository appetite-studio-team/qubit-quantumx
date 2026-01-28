"use client";

interface BarIndicatorProps {
  label: string;
  value: number;
  maxValue?: number;
  icon?: string;
}

export function BarIndicator({ label, value, maxValue = 5, icon = "◈" }: BarIndicatorProps) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-gray-500">{icon}</span>
      <span className="uppercase tracking-wide text-gray-600">{label}</span>
      <div className="bar-indicator ml-1">
        {Array.from({ length: maxValue }).map((_, i) => (
          <div
            key={i}
            className={`bar-segment ${i < value ? "filled" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
