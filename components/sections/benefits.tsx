import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";

const BENEFITS = [
  {
    ix: "/01",
    title: "Unabhängig — strukturell.",
    body: "Keine Verkaufsprovisionen, keine Kick-Backs, keine Anbieterbindungen. Wir veröffentlichen unsere Zusammenarbeitsstruktur jährlich.",
  },
  {
    ix: "/02",
    title: "Honorarbasiert & transparent.",
    body: "Festes Honorar, kommuniziert vor Beginn. Keine versteckten Gebühren, keine Folgekosten ohne Ihre Zustimmung.",
  },
  {
    ix: "/03",
    title: "FINMA-konform & reguliert.",
    body: "Mitglied OAK BV — Aufsichtskommission berufliche Vorsorge. Beratung nach FIDLEG. Berufshaftpflicht CHF 5 Mio.",
  },
  {
    ix: "/04",
    title: "Persönlich, nicht delegiert.",
    body: "Sie sprechen mit dem Berater, der Ihre Akte kennt — nicht mit einem Callcenter. Erreichbarkeit innerhalb 24h.",
  },
  {
    ix: "/05",
    title: "Daten in der Schweiz.",
    body: "Verschlüsselter Datenraum gehostet in Zürich (Swiss Cloud). Keine Auswertung durch Dritte, keine Cookies für Werbung.",
  },
];

export function Benefits() {
  return (
    <section
      id="vorteile"
      className="relative py-[clamp(72px,10vw,140px)]"
    >
      <div className="wrap">
        <SectionHead index="04" kicker="— Vorteile">
          Warum Kundinnen und Kunden uns ihre{" "}
          <em className="italic text-green">Finanzen</em> anvertrauen.
        </SectionHead>

        <div className="grid grid-cols-12 gap-6">
          <Reveal
            as="p"
            className="col-span-12 font-serif text-[clamp(22px,2.2vw,30px)] font-light leading-[1.28] tracking-[-0.008em] text-ink-2 md:col-span-5"
          >
            Wir sind keine Bank, keine Versicherung und kein
            Multi-Level-Anbieter.{" "}
            <em className="italic text-green">Wir arbeiten für Sie</em> — und
            werden nur von Ihnen bezahlt. Das ist der Unterschied, der alles
            ändert.
          </Reveal>

          <div className="col-span-12 flex flex-col md:col-span-6 md:col-start-7">
            {BENEFITS.map((b, i) => (
              <Reveal
                key={b.ix}
                delay={0.06 * i}
                className="group grid grid-cols-[50px_1fr_auto] items-center gap-4 border-t border-line py-6 last:border-b md:grid-cols-[80px_1fr_auto] md:gap-6"
              >
                <span className="text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                  {b.ix}
                </span>
                <div>
                  <strong className="mb-1 block font-serif text-[20px] font-normal leading-[1.15] tracking-[-0.005em]">
                    {b.title}
                  </strong>
                  <span className="text-[14px] leading-[1.5] text-ink-2">
                    {b.body}
                  </span>
                </div>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-ink transition-colors group-hover:bg-ink group-hover:text-bone">
                  <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
