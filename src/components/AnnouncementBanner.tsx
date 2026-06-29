// Edit these per deployment
const BRAND_NAME = "QuantumX School";
const ANNOUNCEMENT_MESSAGE =
  "July cohort about to start, register today";
const SHORT_MOBILE_MESSAGE = "July cohort — register today";
const CTA_LABEL = "Register";
const CTA_URL = "https://quantumx.school/";

export function AnnouncementBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[10002] bg-white border-b border-black/10"
      role="region"
      aria-label="Announcement"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/15 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span
            aria-hidden
            className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-violet-400"
          />
          <p className="min-w-0 truncate font-sans text-xs text-black md:text-sm">
            <span className="hidden items-center gap-2 md:inline-flex">
              <span className="font-semibold">{BRAND_NAME}</span>
              <span
                aria-hidden
                className="h-3 w-px shrink-0 bg-black/25"
              />
              <span>{ANNOUNCEMENT_MESSAGE}</span>
            </span>
            <span className="md:hidden">
              <span className="font-semibold">{BRAND_NAME}</span>
              {", "}
              {SHORT_MOBILE_MESSAGE}
            </span>
          </p>
        </div>

        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-black/10 bg-white px-3 py-0.5 font-sans text-xs font-semibold text-black transition-colors hover:bg-black/5 md:text-sm"
        >
          {CTA_LABEL} →
        </a>
      </div>
    </div>
  );
}
