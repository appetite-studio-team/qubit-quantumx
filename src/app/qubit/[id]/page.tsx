"use client";

import { useParams, useRouter } from "next/navigation";
import { X } from "lucide-react";
import { qubits, getReadinessScore, getScalabilityScore, getCoherenceScore } from "@/data/qubits";
import { BarIndicator } from "@/components/BarIndicator";

export default function QubitDetailPage() {
  const params = useParams();
  const router = useRouter();
  const qubit = qubits.find((q) => q.id === params.id);

  if (!qubit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold uppercase mb-4">QUBIT NOT FOUND</h1>
          <button
            onClick={() => router.push("/")}
            className="tag"
          >
            ← BACK TO LIST
          </button>
        </div>
      </div>
    );
  }

  const readinessScore = getReadinessScore(qubit.readinessLevel);
  const scalabilityScore = getScalabilityScore(qubit);
  const coherenceScore = getCoherenceScore(qubit);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 modal-backdrop z-40"
        onClick={() => router.push("/")}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-8 pb-8 px-4 overflow-y-auto">
        <div 
          className="relative bg-white border-2 border-black w-full max-w-2xl animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => router.push("/")}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors z-10"
          >
            <X size={16} />
          </button>

          {/* Category tag */}
          <div className="p-6 pb-0">
            <span className="tag-accent tag text-xs mb-4 inline-block">
              {qubit.category}
            </span>
          </div>

          {/* Header */}
          <div className="px-6 pb-6">
            <h1 className="text-2xl font-bold uppercase tracking-wide mb-2">
              {qubit.name}
            </h1>
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              {qubit.readinessLevel}
            </p>
          </div>

          {/* Description */}
          <div className="px-6 pb-6">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
              WHAT IT IS
            </h2>
            <p className="text-sm leading-relaxed">
              {qubit.description}
            </p>
          </div>

          {/* Stats */}
          <div className="px-6 pb-6">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
              THE METRICS
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-black p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  ADVANTAGES
                </p>
                <p className="text-2xl font-bold text-[#ff6b35]">
                  {qubit.advantages.length}
                </p>
              </div>
              <div className="border-2 border-black p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  CHALLENGES
                </p>
                <p className="text-2xl font-bold">
                  {qubit.disadvantages.length}
                </p>
              </div>
              <div className="border-2 border-black p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  COMPANIES
                </p>
                <p className="text-2xl font-bold">
                  {qubit.companies.length}
                </p>
              </div>
              <div className="border-2 border-black p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  READINESS SCORE
                </p>
                <p className="text-2xl font-bold text-[#ff6b35]">
                  {readinessScore}/5
                </p>
              </div>
            </div>
          </div>

          {/* Advantages */}
          <div className="px-6 pb-6">
            <div className="dashed-separator pt-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
                KEY ADVANTAGES
              </h2>
              <div className="flex flex-wrap gap-2">
                {qubit.advantages.map((advantage, i) => (
                  <span key={i} className="tag text-xs">
                    {advantage}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Disadvantages */}
          <div className="px-6 pb-6">
            <div className="dashed-separator pt-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
                CURRENT CHALLENGES
              </h2>
              <div className="flex flex-wrap gap-2">
                {qubit.disadvantages.map((disadvantage, i) => (
                  <span key={i} className="tag text-xs border-[#ff6b35] text-[#ff6b35]">
                    {disadvantage}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Companies */}
          <div className="px-6 pb-6">
            <div className="dashed-separator pt-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
                COMPANIES & INSTITUTIONS
              </h2>
              <div className="border-2 border-black p-4 bg-gray-50">
                <ul className="space-y-2">
                  {qubit.companies.map((company, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-[#ff6b35]">◈</span>
                      {company}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bar indicators */}
          <div className="px-6 pb-6">
            <div className="dashed-separator pt-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
                PERFORMANCE INDICATORS
              </h2>
              <div className="flex flex-wrap gap-8">
                <BarIndicator label="READINESS" value={readinessScore} icon="◇" />
                <BarIndicator label="SCALABILITY" value={scalabilityScore} icon="◈" />
                <BarIndicator label="COHERENCE" value={coherenceScore} icon="◎" />
              </div>
            </div>
          </div>

          {/* Back button */}
          <div className="px-6 pb-6">
            <button
              onClick={() => router.push("/")}
              className="w-full py-4 border-2 border-black text-sm uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
            >
              ← BACK TO DATABASE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
