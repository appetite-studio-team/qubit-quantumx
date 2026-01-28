"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { FilterTags } from "@/components/FilterTags";
import { QubitCard } from "@/components/QubitCard";
import { qubits } from "@/data/qubits";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredQubits = useMemo(() => {
    return qubits.filter((qubit) => {
      const matchesSearch =
        searchQuery === "" ||
        qubit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        qubit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        qubit.companies.some((c) =>
          c.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesFilter =
        activeFilter === "all" || qubit.category === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Search */}
        <div className="mb-4 sm:mb-6 border-2 border-black">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Filters */}
        <div className="mb-4 sm:mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <FilterTags activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        {/* Results count */}
        <div className="mb-4 sm:mb-6 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-500">
          {filteredQubits.length} QUBIT TYPES FOUND
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredQubits.map((qubit, index) => (
            <QubitCard key={qubit.id} qubit={qubit} index={index} />
          ))}
        </div>

        {filteredQubits.length === 0 && (
          <div className="text-center py-12 sm:py-16 border-2 border-dashed border-gray-300">
            <p className="text-gray-500 uppercase tracking-wider text-xs sm:text-sm px-4">
              No qubit types found matching your criteria
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-8 sm:mt-16 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-4">
          <a 
            href="https://quantumx.foundation/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/App-Icon-Black.png"
              alt="Quantumx Foundation"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </a>
          <div className="text-center">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-500 mb-1">
              QUBIT DATABASE — QUANTUM COMPUTING TECHNOLOGIES
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400">
              A project by{" "}
              <a 
                href="https://quantumx.foundation/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black font-medium hover:text-[#ff6b35] transition-colors"
              >
                Quantumx Foundation
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
