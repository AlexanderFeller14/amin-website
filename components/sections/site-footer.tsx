import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

const COLS = [
  {
    title: "Leistungen",
    links: [
      { href: "#leistungen", label: "Sparen & Budget" },
      { href: "#leistungen", label: "Versicherungs-Check" },
      { href: "#leistungen", label: "Säule 3a & PK" },
      { href: "#leistungen", label: "Vermögensaufbau" },
    ],
  },
  {
    title: "Firma",
    links: [
      { href: "#", label: "Über uns" },
      { href: "#", label: "Beraterteam" },
      { href: "#", label: "Honorar & Mandat" },
      { href: "#", label: "Karriere" },
    ],
  },
  {
    title: "Ressourcen",
    links: [
      { href: "#faq", label: "FAQ" },
      { href: "#", label: "Magazin" },
      { href: "#", label: "Steuerkalender" },
      { href: "#", label: "3a-Rechner" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      {
        href: "mailto:amin.barraza@swisslife-select.ch",
        label: "amin.barraza@swisslife-select.ch",
      },
      { href: "tel:+41764674002", label: "+41 76 467 40 02" },
      { href: "#kontakt", label: "Termin buchen" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bone pb-7 pt-16">
      <div className="wrap">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 flex flex-col gap-3.5 md:col-span-4">
            <Link
              href="#top"
              className="flex items-center gap-2.5 font-serif text-[20px] leading-none tracking-[-0.01em]"
            >
              <BrandMark className="h-[22px] w-[22px] text-ink" />
              <span>
                Amin&nbsp;<em className="italic text-green">Finanzberatung</em>
              </span>
            </Link>
            <p className="max-w-[30ch] font-serif text-[18px] font-light leading-[1.35] tracking-[-0.005em] text-ink-2">
              Persönliche Finanzberatung in Zollikofen. Termin im Büro oder bei
              Ihnen vor Ort.
            </p>
          </div>

          {COLS.map((col) => (
            <div
              key={col.title}
              className="col-span-6 flex flex-col gap-2.5 md:col-span-2"
            >
              <h5 className="mb-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted">
                {col.title}
              </h5>
              {col.links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-[14px] text-ink-2 transition-colors hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-[11px] uppercase tracking-[0.08em] text-ink-muted">
          <span>© 2026 Amin Finanzberatung · Zollikofen</span>
          <span>
            <Link href="#" className="hover:text-ink">
              Impressum
            </Link>{" "}
            ·{" "}
            <Link href="#" className="hover:text-ink">
              Datenschutz
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
