import Link from "next/link";
import { siteBrand } from "@/lib/site-brand";
import { FoundationLink, SiteBrandMark } from "@/components/SiteBrandMark";

type SiteMenuBarProps = {
  belowAnnouncement?: boolean;
};

export function SiteMenuBar({ belowAnnouncement = true }: SiteMenuBarProps) {
  return (
    <nav
      aria-label="Site"
      className={`fixed left-0 right-0 z-[10001] border-b-2 border-black bg-white shadow-[0_2px_0_0_rgba(0,0,0,0.04)] ${
        belowAnnouncement ? "top-10" : "top-0"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6">
        <SiteBrandMark size="sm" />

        <p className="hidden max-w-xs truncate text-center text-[10px] uppercase tracking-[0.2em] text-gray-400 md:block">
          {siteBrand.productTagline}
        </p>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href={siteBrand.homePath}
            className="hidden border-2 border-transparent px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-gray-500 transition-colors hover:border-black hover:text-black sm:inline-block"
          >
            Browse
          </Link>
          <FoundationLink />
        </div>
      </div>
    </nav>
  );
}
