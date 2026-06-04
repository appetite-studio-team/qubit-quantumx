import Image from "next/image";
import Link from "next/link";
import { siteBrand } from "@/lib/site-brand";

type SiteBrandMarkProps = {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  linkHome?: boolean;
};

const logoSizes = { sm: 32, md: 40, lg: 52 } as const;

export function SiteBrandMark({
  size = "md",
  showTagline = false,
  linkHome = true,
}: SiteBrandMarkProps) {
  const dimension = logoSizes[size];

  const inner = (
    <>
      <Image
        src={siteBrand.logoSrc}
        alt={siteBrand.logoAlt}
        width={dimension}
        height={dimension}
        className="shrink-0 rounded-lg border-2 border-black"
      />
      <div className="min-w-0 text-left">
        <p className="truncate text-xs font-bold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.15em]">
          {siteBrand.productName}
        </p>
        {showTagline && (
          <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-gray-500 sm:text-xs">
            {siteBrand.productTagline}
          </p>
        )}
      </div>
    </>
  );

  const className =
    "group flex min-w-0 items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-90";

  if (linkHome) {
    return (
      <Link href={siteBrand.homePath} className={className} aria-label="Qubit Database home">
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}

export function FoundationLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={siteBrand.orgUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1.5 border-2 border-black px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] transition-colors hover:bg-black hover:text-white sm:text-xs sm:tracking-[0.15em] ${className}`}
    >
      <span>{siteBrand.orgName}</span>
      <span aria-hidden className="text-[#ff6b35] transition-colors group-hover:text-white">
        ↗
      </span>
    </a>
  );
}
