import Link from "next/link";

const ORIENTIERUNG = [
  { href: "#prozess", label: "Prozess" },
  { href: "#vorteile", label: "Vorteile" },
  { href: "#stimmen", label: "Stimmen" },
  { href: "#faq", label: "FAQ" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bone pb-7 pt-[clamp(72px,9vw,120px)]">
      <div className="wrap">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-7">
            <Link
              href="#top"
              aria-label="Zurück nach oben"
              className="group inline-flex w-fit items-baseline gap-1 font-serif text-[clamp(34px,4vw,46px)] font-light leading-[0.95] tracking-[-0.018em] text-ink"
            >
              <span>Finanz</span>
              <em className="italic text-green transition-colors group-hover:text-green-deep">
                Burrata
              </em>
              <span className="text-green">.</span>
            </Link>

            <p className="max-w-[28ch] font-serif text-[18px] font-light leading-[1.4] tracking-[-0.005em] text-ink-2">
              Persönliche Finanzberatung in Zollikofen. Termin im Büro oder bei
              Ihnen vor Ort.
            </p>

            <p className="mt-1 inline-flex flex-wrap items-center gap-x-2 text-[10.5px] uppercase tracking-[0.14em] text-ink-muted">
              <span>Persönlich beraten</span>
              <span className="text-ink-muted-2">·</span>
              <span>Zollikofen</span>
              <span className="text-ink-muted-2">·</span>
              <span>Edition MMXXVI</span>
            </p>
          </div>

          <nav
            aria-label="Orientierung"
            className="col-span-6 flex flex-col gap-3 md:col-span-2"
          >
            <h5 className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-muted">
              Orientierung
            </h5>
            <ul className="flex flex-col gap-2.5">
              {ORIENTIERUNG.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-baseline gap-1.5 text-[14px] text-ink-2 transition-colors hover:text-ink"
                  >
                    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_1px] bg-[position:0_95%] bg-no-repeat transition-[background-size] duration-200 group-hover:bg-[length:100%_1px]">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="col-span-6 flex flex-col gap-4 not-italic md:col-span-3">
            <h5 className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-muted">
              Kontakt
            </h5>

            <div className="flex flex-col gap-1 text-[14px] leading-[1.55] text-ink-2">
              <span>Bernstrasse 162</span>
              <span>3052 Zollikofen</span>
            </div>

            <div className="flex flex-col gap-1 text-[14px] leading-[1.55]">
              <a
                href="tel:+41764674002"
                className="w-fit text-ink-2 transition-colors hover:text-ink"
              >
                +41&nbsp;76&nbsp;467&nbsp;40&nbsp;02
              </a>
              <a
                href="mailto:amin.barraza@swisslife-select.ch"
                className="w-fit break-all text-ink-2 transition-colors hover:text-ink"
              >
                amin.barraza@swisslife-select.ch
              </a>
            </div>

            <p className="text-[12px] uppercase tracking-[0.1em] text-ink-muted">
              Mo–Fr · 09–18 Uhr
              <br />
              Sa nach Vereinbarung
            </p>

            <Link
              href="#kontakt"
              className="mt-1 inline-flex w-fit items-center gap-2 border border-ink bg-ink px-4 py-2.5 text-[12px] uppercase tracking-[0.08em] text-bone transition-colors hover:bg-green-deep hover:border-green-deep"
            >
              Termin buchen
              <span aria-hidden className="-mr-0.5">
                →
              </span>
            </Link>
          </address>
        </div>

        <div className="mt-[clamp(56px,8vw,96px)] grid grid-cols-12 items-center gap-y-3 border-t border-line pt-5 text-[10.5px] uppercase tracking-[0.12em] text-ink-muted">
          <span className="col-span-12 md:col-span-4">
            © 2026 Amin Barraza
          </span>
          <span className="col-span-12 text-ink-muted-2 md:col-span-4 md:text-center">
            Swiss Life Select Zollikofen
          </span>
          <span className="col-span-12 flex flex-wrap gap-x-3 gap-y-1 md:col-span-4 md:justify-end">
            <Link
              href="/impressum"
              className="transition-colors hover:text-ink"
            >
              Impressum
            </Link>
            <span className="text-ink-muted-2">·</span>
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-ink"
            >
              Datenschutz
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
