import { SiteMenuBar } from "@/components/SiteMenuBar";

/** Menu bar (3.5rem) */
const CHROME_OFFSET = "pt-14";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteMenuBar belowAnnouncement={false} />
      <div className={CHROME_OFFSET}>{children}</div>
    </>
  );
}
