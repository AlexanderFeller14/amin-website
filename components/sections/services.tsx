import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";

const SERVICES = [
  {
    code: "SVC / 01",
    tag: "Sparen",
    titleStart: "Budget & ",
    titleEm: "Sparplan",
    body: "Wir analysieren Ihre Fixkosten, decken stille Abos und Doppelausgaben auf und entwickeln einen Sparplan, der zu Ihrem Leben passt — nicht zu einer Banken-App. Inklusive 12-Monats-Review.",
    duration: "2–3 Wochen",
    fee: "ab CHF 480",
  },
  {
    code: "SVC / 02",
    tag: "Versicherung",
    titleStart: "Versicherungs-",
    titleEm: "Check",
    body: "Hausrat, Haftpflicht, Lebens-, Kranken- und Berufsunfähigkeitsversicherung — wir prüfen alle Policen, eliminieren Doppeldeckung und holen Vergleichsofferten ein. Bei gleicher Sicherheit, weniger Prämie.",
    duration: "3–4 Wochen",
    fee: "ab CHF 690",
  },
  {
    code: "SVC / 03",
    tag: "Vorsorge",
    titleStart: "Säule 3a & ",
    titleEm: "Pensionskasse",
    body: "Wir vergleichen 3a-Anbieter (Konto vs. Wertschriften), prüfen Ihren BVG-Auszug, simulieren Einkäufe und zeigen die Steuerwirkung — Jahr für Jahr, bis zur Pensionierung.",
    duration: "4–6 Wochen",
    fee: "ab CHF 980",
  },
  {
    code: "SVC / 04",
    tag: "Aufbau",
    titleStart: "Vermögens-",
    titleEm: "aufbau",
    body: "Vom ersten ETF-Sparplan bis zur diversifizierten Allokation. Wir empfehlen Produkte nach Kostenstruktur und Risikoprofil — nicht nach Provision. Sie behalten Ihr Depot, immer.",
    duration: "laufend",
    fee: "ab CHF 1’200/Jahr",
  },
];

export function Services() {
  return (
    <section
      id="leistungen"
      className="relative bg-paper py-[clamp(72px,10vw,140px)]"
    >
      <span className="deckle-top" aria-hidden="true" />
      <span className="deckle-bottom" aria-hidden="true" />

      <div className="wrap">
        <SectionHead index="02" kicker="— Leistungen">
          Vier Bereiche, ein Auftrag —{" "}
          <em className="italic text-green">Klarheit</em> über Ihre Finanzen.
        </SectionHead>

        <div className="grid grid-cols-12 border-t border-l border-line">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.code}
              delay={0.08 * i}
              as="article"
              className="group col-span-12 flex min-h-[340px] flex-col gap-4 border-b border-r border-line bg-paper px-9 py-10 transition-colors hover:bg-bone md:col-span-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                  {s.code}
                </span>
                <span className="rounded-full border border-green px-2 py-[3px] text-[10.5px] uppercase tracking-[0.1em] text-green">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-serif text-[clamp(24px,2.4vw,36px)] font-light leading-[1.05] tracking-[-0.015em] text-ink">
                {s.titleStart}
                <em className="italic text-green">{s.titleEm}</em>
              </h3>
              <p className="max-w-[42ch] text-[14.5px] leading-[1.55] text-ink-2">
                {s.body}
              </p>
              <div className="mt-auto flex items-baseline justify-between gap-4 border-t border-line-soft pt-4 text-[11px] uppercase tracking-[0.05em] text-ink-muted">
                <span>Dauer</span>
                <span className="tabular text-ink">{s.duration}</span>
                <span>Honorar</span>
                <span className="tabular text-ink">{s.fee}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
