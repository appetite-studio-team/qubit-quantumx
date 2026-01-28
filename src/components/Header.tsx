"use client";

import { qubits } from "@/data/qubits";

export function Header() {
  const totalQubits = qubits.length;
  const matureCount = qubits.filter(q => q.category === "MATURE").length;
  const prototypeCount = qubits.filter(q => q.category === "PROTOTYPE").length;

  return (
    <header className="bg-[#1a1a1a] text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-16 text-center">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold tracking-tight">{totalQubits}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
              QUBIT TYPES
            </span>
          </div>
          
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold tracking-tight text-[#ff6b35]">
              {matureCount}+
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
              COMMERCIALLY READY
            </span>
          </div>
          
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold tracking-tight">{prototypeCount}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
              IN DEVELOPMENT
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
