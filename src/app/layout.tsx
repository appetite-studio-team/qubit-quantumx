import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-BP6DEEHG6J";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qubit.quantumx.technology"),
  title: "Qubit Database - Quantumx",
  description: "Explore the various qubit technologies used in quantum computing. A comprehensive database of superconducting, trapped ion, photonic, topological, and other qubit technologies.",
  keywords: ["quantum computing", "qubits", "superconducting qubits", "trapped ion", "photonic qubits", "quantum technology", "IBM Q", "Google Quantum", "IonQ"],
  authors: [{ name: "Quantumx" }],
  creator: "Quantumx",
  publisher: "Quantumx",
  icons: {
    icon: "/App-Icon-Black.png",
    shortcut: "/App-Icon-Black.png",
    apple: "/App-Icon-Black.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qubit.quantumx.technology",
    title: "Qubit Database - Quantumx",
    description: "Explore the various qubit technologies used in quantum computing. A comprehensive database of superconducting, trapped ion, photonic, topological, and other qubit technologies.",
    siteName: "Qubit Database - Quantumx",
    images: [
      {
        url: "/App-Icon-Black.png",
        width: 1024,
        height: 1024,
        alt: "Qubit Database - Quantumx",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qubit Database - Quantumx",
    description: "Explore the various qubit technologies used in quantum computing.",
    images: ["/App-Icon-Black.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        {children}
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
