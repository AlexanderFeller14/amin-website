import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";

function PenCheck({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 17 C 7 18, 10 22, 13 25 C 16 19, 22 11, 28 6"
        stroke="#B2342A"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const BENEFITS = [
  {
    ix: "/01",
    title: "Persönlich, nicht delegiert.",
    body: "Sie sprechen mit dem Berater, der Ihre Akte kennt. Antwort innerhalb 24h.",
  },
  {
    ix: "/02",
    title: "Erstgespräch kostenlos.",
    body: "45 Minuten, bei Ihnen, im Büro oder online. Ohne Verpflichtung.",
  },
  {
    ix: "/03",
    title: "Breites Produkt-Netzwerk.",
    body: "Zugang zu einem breiten Netzwerk Schweizer Versicherer, Banken und Vorsorge-Anbieter. Lösung passt zur Situation, nicht zum Anbieter.",
  },
];

export function Benefits() {
  return (
    <section
      id="vorteile"
      className="relative py-[clamp(72px,10vw,140px)]"
    >
      <div className="wrap">
        <SectionHead index="04" kicker="Vorteile">
          Warum Kundinnen und Kunden uns ihre{" "}
          <em className="italic text-green">Finanzen</em> anvertrauen.
        </SectionHead>

        <div className="grid grid-cols-12 gap-6">
          <Reveal
            as="p"
            className="col-span-12 font-serif text-[clamp(22px,2.2vw,30px)] font-light leading-[1.28] tracking-[-0.008em] text-ink-2 md:col-span-5"
          >
            Beratung, die langfristig denkt. Vom ersten 3a bis zur
            Pensionierung.{" "}
            <em className="italic text-green">Ein Ansprechpartner, eine Akte,</em>{" "}
            über Jahre. Das ist der Unterschied, der alles ändert.
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
                <span className="grid h-10 w-10 place-items-center rounded-full border border-ink transition-transform group-hover:scale-105">
                  <PenCheck className="h-5 w-5 -rotate-[6deg]" />
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
