import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

const NAV = [
  { href: "#problem", label: "Problem" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#prozess", label: "Prozess" },
  { href: "#vorteile", label: "Vorteile" },
  { href: "#stimmen", label: "Stimmen" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[60] border-b border-line bg-bone/[.88] backdrop-blur">
      <div className="wrap">
        <nav className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-8">
          <Link
            href="#top"
            className="flex items-center gap-2.5 font-serif text-[20px] leading-none tracking-[-0.01em]"
            aria-label="Amin Finanzberatung"
          >
            <BrandMark className="h-[22px] w-[22px] text-ink" />
            <span>
              Amin&nbsp;<em className="italic text-green">Finanzberatung</em>
            </span>
          </Link>

          <ul className="hidden justify-center gap-7 text-[13.5px] md:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative py-1 text-ink-2 transition-colors hover:text-ink"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-200 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 text-[11.5px] uppercase tracking-[0.06em] text-ink-muted">
            <span
              className="hidden gap-1.5 sm:flex"
              aria-label="Sprache"
            >
              <span className="text-ink">DE</span>
              <span className="text-ink-muted-2">/</span>
              <span className="text-ink-muted-2">FR</span>
              <span className="text-ink-muted-2">/</span>
              <span className="text-ink-muted-2">EN</span>
            </span>
            <Link
              href="#kontakt"
              className="inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2.5 text-[12.5px] text-bone transition-colors hover:bg-green-deep hover:border-green-deep"
            >
              Termin
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
