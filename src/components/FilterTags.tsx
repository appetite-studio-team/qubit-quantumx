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
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`tag ${activeFilter === category.id ? "active" : ""}`}
        >
          <span>{iconMap[category.id]}</span>
          <span>{category.label}</span>
        </button>
      ))}
    </div>
  );
}
