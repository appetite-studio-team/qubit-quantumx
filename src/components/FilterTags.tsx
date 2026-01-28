"use client";

import { categories } from "@/data/qubits";

interface FilterTagsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const iconMap: Record<string, string> = {
  "all": "⚛",
  "MATURE": "◈",
  "PROTOTYPE": "◇",
  "RESEARCH": "◊",
  "FOUNDATIONAL": "□",
};

export function FilterTags({ activeFilter, onFilterChange }: FilterTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`tag text-[10px] sm:text-xs ${activeFilter === category.id ? "active" : ""}`}
        >
          <span>{iconMap[category.id]}</span>
          <span className="hidden xs:inline sm:inline">{category.label}</span>
          <span className="xs:hidden sm:hidden">{category.id === "all" ? "ALL" : category.id.slice(0, 4)}</span>
        </button>
      ))}
    </div>
  );
}
