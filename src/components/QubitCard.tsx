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
        className="qubit-card border-2 border-black bg-white p-6 cursor-pointer animate-fade-in"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-lg font-bold uppercase tracking-wide">
            {qubit.name}
          </h2>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>◈</span>
            <span className="uppercase">{qubit.readinessLevel}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {qubit.description}
        </p>

        <div className="flex items-center gap-4 mb-6">
          <span className="tag-accent tag text-xs">
            {qubit.companies.length} {qubit.companies.length === 1 ? "COMPANY" : "COMPANIES"}
          </span>
          <span className="tag text-xs">
            ◈ {qubit.category}
          </span>
        </div>

        <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
          HOVER FOR DETAILS
        </div>

        <div className="pt-4 border-t border-dashed border-gray-300 grid grid-cols-3 gap-2">
          <BarIndicator label="READINESS" value={readinessScore} icon="◇" />
          <BarIndicator label="SCALE" value={scalabilityScore} icon="◈" />
          <BarIndicator label="COHERENCE" value={coherenceScore} icon="◎" />
        </div>
      </article>
    </Link>
  );
}
