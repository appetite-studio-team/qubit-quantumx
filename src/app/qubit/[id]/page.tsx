import type { Metadata } from "next";
import { qubits } from "@/data/qubits";
import { QubitDetailClient } from "./QubitDetailClient";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const qubit = qubits.find((q) => q.id === id);

  if (!qubit) {
    return {
      title: "Qubit Not Found - Quantumx",
      description: "The requested qubit technology was not found.",
    };
  }

  return {
    title: `${qubit.name} - Qubit Database - Quantumx`,
    description: qubit.description,
    keywords: [
      qubit.name,
      "quantum computing",
      "qubits",
      ...qubit.companies,
      qubit.category,
    ],
    openGraph: {
      title: `${qubit.name} - Qubit Database - Quantumx`,
      description: qubit.description,
      images: [
        {
          url: "/App-Icon-Black.png",
          width: 1024,
          height: 1024,
          alt: `${qubit.name} - Quantumx`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${qubit.name} - Qubit Database - Quantumx`,
      description: qubit.description,
      images: ["/App-Icon-Black.png"],
    },
  };
}

export function generateStaticParams() {
  return qubits.map((qubit) => ({
    id: qubit.id,
  }));
}

export default async function QubitDetailPage({ params }: Props) {
  const { id } = await params;
  return <QubitDetailClient id={id} />;
}
