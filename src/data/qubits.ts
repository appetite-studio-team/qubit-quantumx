export interface Qubit {
  id: string;
  name: string;
  advantages: string[];
  companies: string[];
  description: string;
  disadvantages: string[];
  logos: string[];
  readinessLevel: string;
  category: string;
}

export const qubits: Qubit[] = [
  {
    id: "superconducting",
    name: "Superconducting Qubits",
    advantages: [
      "Highly developed and mature technology",
      "High Scalability",
      "Fast Gate Operations",
      "High-Fidelity Operations",
      "Integration with existing semiconductor technology",
      "Strong Coupling Between Qubits"
    ],
    companies: ["IBM Q", "Google Willow", "SpinQ"],
    description: "Superconducting qubits use superconducting circuits with Josephson junctions at ultra-low temperatures. Qubit states are stored in circuit energy levels; widely used by major quantum computing companies due to scalability and control.",
    disadvantages: [
      "Cryogenic Requirements",
      "Decoherence and Noise Sensitivity",
      "Error Correction Complexity"
    ],
    logos: [],
    readinessLevel: "Commercially Deployed",
    category: "MATURE"
  },
  {
    id: "trapped-ion",
    name: "Trapped Ion Qubits",
    advantages: [
      "High Fidelity",
      "Long Coherence Times",
      "High-Quality Entanglement"
    ],
    companies: ["IonQ", "Honeywell Quantum Solutions", "Quantinuum"],
    description: "Trapped ion qubits use charged atoms held by electromagnetic fields. Qubit states are stored in atomic energy levels and controlled by lasers, enabling ultra-low error rates, precise operations, and high-quality entanglement.",
    disadvantages: [
      "Scalability Challenges",
      "Slow Gate Operations"
    ],
    logos: [],
    readinessLevel: "Commercially Deployed",
    category: "MATURE"
  },
  {
    id: "photonic",
    name: "Photonic Qubits",
    advantages: [
      "Room Temperature Operation",
      "Ideal for Quantum Communication",
      "Scalability"
    ],
    companies: ["Xanadu", "PsiQuantum"],
    description: "Photonic qubits use photons to encode data via polarization, phase, or path. Controlled with optical devices like beam splitters and phase shifters, they are ideal for quantum communication and cryptography over long distances.",
    disadvantages: [
      "Difficult to Manipulate",
      "Loss in Transmission"
    ],
    logos: [],
    readinessLevel: "Prototype",
    category: "PROTOTYPE"
  },
  {
    id: "topological",
    name: "Topological Qubits",
    advantages: [
      "Error Resistance",
      "Intrinsic Fault Tolerance"
    ],
    companies: ["Microsoft's StationQ"],
    description: "Topological qubits are a proposed type of qubit that aim to store quantum information in the topological properties of exotic particles called anyons, rather than in fragile local properties like charge or energy. In theory, moving these anyons around each other in special patterns called braiding would perform quantum operations, and because the information is stored in the global structure of these braids, it would be naturally protected from many kinds of noise and errors.",
    disadvantages: [
      "Experimental Challenges",
      "Complexity"
    ],
    logos: [],
    readinessLevel: "Research Stage",
    category: "RESEARCH"
  },
  {
    id: "neutral-atom",
    name: "Neutral Atom Qubits",
    advantages: [
      "Long Coherence Times",
      "Scalable"
    ],
    companies: ["QuEra", "Infleqtion", "Atom Computing", "Harvard University", "Aliro Quantum"],
    description: "Neutral atom qubits use atoms held in laser-light lattices. Qubit states are stored in atomic levels and controlled by lasers; weak environmental interaction gives long coherence and enables large-scale, stable quantum systems.",
    disadvantages: [
      "Difficult to Manipulate",
      "Slow Gate Operations"
    ],
    logos: [],
    readinessLevel: "Scaling Prototype",
    category: "PROTOTYPE"
  },
  {
    id: "spin",
    name: "Spin Qubits",
    advantages: [
      "Compatibility with Existing Semiconductor Technology",
      "Long Coherence Times"
    ],
    companies: ["Intel Quantum Computing", "University of Sydney", "Delft University / QuTech", "HRL Labs"],
    description: "Spin qubits store data in electron or nuclear spin states (up/down). Built in semiconductor materials, they integrate well with classical chip technology and enable compact, scalable quantum processors.",
    disadvantages: [
      "Difficult to Isolate from Environmental Noise",
      "Scalability"
    ],
    logos: [],
    readinessLevel: "Prototype",
    category: "PROTOTYPE"
  },
  {
    id: "quantum-dot",
    name: "Quantum Dot Qubits",
    advantages: [
      "Scalability",
      "Integration with Classical Electronics"
    ],
    companies: ["Intel", "University of Sydney"],
    description: "Quantum dot qubits use nanoscale semiconductor dots that trap electrons. Qubit states are stored in electron charge or spin, and they are compatible with standard chip fabrication, enabling scalable quantum hardware.",
    disadvantages: [
      "Control and Isolation",
      "Limited Coherence Time"
    ],
    logos: [],
    readinessLevel: "Prototype",
    category: "PROTOTYPE"
  },
  {
    id: "nv-center",
    name: "Diamond NV Center Qubits",
    advantages: [
      "Room Temperature Operation",
      "Quantum Sensing Applications"
    ],
    companies: ["Element Six", "University of California, Berkeley"],
    description: "NV center qubits use nitrogen-vacancy defects in diamond. Controlled with microwaves and lasers, they store quantum states in electron spins and uniquely operate at room temperature, unlike most cryogenic qubit systems.",
    disadvantages: [
      "Scalability Issues",
      "Error Rates"
    ],
    logos: [],
    readinessLevel: "Research Ongoing",
    category: "RESEARCH"
  },
  {
    id: "nmr",
    name: "NMR Qubits",
    advantages: [
      "Well-Established Methods",
      "Small-Scale Systems"
    ],
    companies: ["SpinQ", "University of California, Los Angeles (UCLA)"],
    description: "NMR qubits use nuclear spins controlled by magnetic fields and RF pulses. They were an early quantum computing platform but face limits in speed and scalability, making large-scale systems difficult.",
    disadvantages: [
      "Limited Scalability",
      "Slow Operational Speed"
    ],
    logos: [],
    readinessLevel: "Foundational",
    category: "FOUNDATIONAL"
  }
];

export const categories = [
  { id: "all", label: "ALL QUBITS", icon: "⚛" },
  { id: "MATURE", label: "MATURE", icon: "◈" },
  { id: "PROTOTYPE", label: "PROTOTYPE", icon: "◇" },
  { id: "RESEARCH", label: "RESEARCH", icon: "◊" },
  { id: "FOUNDATIONAL", label: "FOUNDATIONAL", icon: "□" },
];

export const getReadinessScore = (level: string): number => {
  const scores: Record<string, number> = {
    "Commercially Deployed": 5,
    "Scaling Prototype": 4,
    "Prototype": 3,
    "Research Ongoing": 2,
    "Research Stage": 2,
    "Foundational": 1,
  };
  return scores[level] || 1;
};

export const getScalabilityScore = (qubit: Qubit): number => {
  const hasScalability = qubit.advantages.some(a => 
    a.toLowerCase().includes("scalab")
  );
  const hasScalabilityIssue = qubit.disadvantages.some(d => 
    d.toLowerCase().includes("scalab")
  );
  
  if (hasScalability && !hasScalabilityIssue) return 5;
  if (hasScalability && hasScalabilityIssue) return 3;
  if (!hasScalability && hasScalabilityIssue) return 2;
  return 3;
};

export const getCoherenceScore = (qubit: Qubit): number => {
  const hasLongCoherence = qubit.advantages.some(a => 
    a.toLowerCase().includes("coherence")
  );
  const hasCoherenceIssue = qubit.disadvantages.some(d => 
    d.toLowerCase().includes("coherence") || d.toLowerCase().includes("decoherence")
  );
  
  if (hasLongCoherence && !hasCoherenceIssue) return 5;
  if (hasLongCoherence && hasCoherenceIssue) return 3;
  if (!hasLongCoherence && hasCoherenceIssue) return 2;
  return 3;
};
