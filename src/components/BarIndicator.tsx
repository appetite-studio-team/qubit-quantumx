"use client";

interface BarIndicatorProps {
  label: string;
  value: number;
  maxValue?: number;
  icon?: string;
}

export function BarIndicator({ label, value, maxValue = 5, icon = "◈" }: BarIndicatorProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1 text-[10px]">
        <span className="text-gray-500">{icon}</span>
        <span className="uppercase tracking-wide text-gray-600 truncate">{label}</span>
      </div>
      <div className="bar-indicator">
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
