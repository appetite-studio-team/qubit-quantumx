"use client";

import { useState, useMemo } from "react";
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

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Search */}
        <div className="mb-6 border-2 border-black">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Filters */}
        <div className="mb-8">
          <FilterTags activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        {/* Results count */}
        <div className="mb-6 text-xs uppercase tracking-[0.2em] text-gray-500">
          {filteredQubits.length} QUBIT TYPES FOUND
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQubits.map((qubit, index) => (
            <QubitCard key={qubit.id} qubit={qubit} index={index} />
          ))}
        </div>

        {filteredQubits.length === 0 && (
          <div className="text-center py-16 border-2 border-dashed border-gray-300">
            <p className="text-gray-500 uppercase tracking-wider text-sm">
              No qubit types found matching your criteria
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            QUBIT EXPLORER — QUANTUM COMPUTING TECHNOLOGIES DATABASE
          </p>
        </div>
      </footer>
    </div>
  );
}
