"use client";

import Link from "next/link";
import { Qubit, getReadinessScore, getScalabilityScore, getCoherenceScore } from "@/data/qubits";
import { BarIndicator } from "./BarIndicator";

interface QubitCardProps {
  qubit: Qubit;
  index: number;
}

export function QubitCard({ qubit, index }: QubitCardProps) {
  const readinessScore = getReadinessScore(qubit.readinessLevel);
  const scalabilityScore = getScalabilityScore(qubit);
  const coherenceScore = getCoherenceScore(qubit);

  return (
    <Link href={`/qubit/${qubit.id}`}>
      <article
        className="qubit-card border-2 border-black bg-white p-4 sm:p-6 cursor-pointer animate-fade-in"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide">
            {qubit.name}
          </h2>
          <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-gray-500 shrink-0">
            <span>◈</span>
            <span className="uppercase">{qubit.readinessLevel}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
          {qubit.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <span className="tag-accent tag text-[10px] sm:text-xs">
            {qubit.companies.length} {qubit.companies.length === 1 ? "COMPANY" : "COMPANIES"}
          </span>
          <span className="tag text-[10px] sm:text-xs">
            ◈ {qubit.category}
          </span>
        </div>

        <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">
          TAP FOR DETAILS
        </div>

        <div className="pt-3 sm:pt-4 border-t border-dashed border-gray-300 grid grid-cols-3 gap-1 sm:gap-2">
          <BarIndicator label="READINESS" value={readinessScore} icon="◇" />
          <BarIndicator label="SCALE" value={scalabilityScore} icon="◈" />
          <BarIndicator label="COHERENCE" value={coherenceScore} icon="◎" />
        </div>
      </article>
    </Link>
  );
}
