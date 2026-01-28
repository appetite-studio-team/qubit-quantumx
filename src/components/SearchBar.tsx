"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <Search size={20} strokeWidth={1.5} />
      </div>
      <input
        type="text"
        placeholder="SEARCH THE DATABASE..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full py-4 pl-12 pr-4 text-sm uppercase tracking-[0.15em] border-2 border-black bg-white placeholder:text-gray-400 focus:outline-none focus:border-[#ff6b35]"
      />
    </div>
  );
}
