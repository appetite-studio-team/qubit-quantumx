"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <Search size={18} className="sm:w-5 sm:h-5" strokeWidth={1.5} />
      </div>
      <input
        type="text"
        placeholder="SEARCH THE DATABASE..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full py-3 sm:py-4 pl-10 sm:pl-12 pr-3 sm:pr-4 text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] border-0 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:ring-inset"
      />
    </div>
  );
}
