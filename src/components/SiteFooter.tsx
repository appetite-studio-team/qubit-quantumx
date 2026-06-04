import { siteBrand } from "@/lib/site-brand";
import { FoundationLink, SiteBrandMark } from "@/components/SiteBrandMark";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t-2 border-black sm:mt-16">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <SiteBrandMark size="lg" showTagline linkHome={false} />
            <p className="mt-4 text-[10px] uppercase tracking-[0.15em] text-gray-500 sm:text-xs sm:tracking-[0.2em]">
              A project by{" "}
              <a
                href={siteBrand.orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-black transition-colors hover:text-[#ff6b35]"
              >
                {siteBrand.orgName}
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <p className="text-[10px] uppercase tracking-[0.15em] text-gray-500 sm:text-xs sm:tracking-[0.2em]">
              Open database · Updated regularly
            </p>
            <FoundationLink />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-dashed border-gray-300 pt-6 sm:flex-row">
          <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 sm:tracking-[0.2em]">
            © {new Date().getFullYear()} {siteBrand.orgName}
          </p>
          <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 sm:tracking-[0.2em]">
            {siteBrand.productName}
          </p>
        </div>
      </div>
    </footer>
  );
}
