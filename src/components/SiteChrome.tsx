"use client";

import { usePathname } from "next/navigation";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { SiteMenuBar } from "@/components/SiteMenuBar";

/** Routes that use a full-screen overlay instead of the main chrome */
function shouldHideAnnouncementBanner(pathname: string | null): boolean {
  return pathname?.startsWith("/qubit") ?? false;
}

/** Banner (2.5rem) + menu bar (3.5rem) */
const CHROME_OFFSET_WITH_BANNER = "pt-[calc(2.5rem+3.5rem)]";
/** Menu bar only */
const CHROME_OFFSET_MENU_ONLY = "pt-14";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideBanner = shouldHideAnnouncementBanner(pathname);
  const offsetClass = hideBanner
    ? CHROME_OFFSET_MENU_ONLY
    : CHROME_OFFSET_WITH_BANNER;

  return (
    <>
      {!hideBanner && <AnnouncementBanner />}
      <SiteMenuBar belowAnnouncement={!hideBanner} />
      <div className={offsetClass}>{children}</div>
    </>
  );
}
