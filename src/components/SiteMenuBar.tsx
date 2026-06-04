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

        <FoundationLink />
      </div>
    </nav>
  );
}
