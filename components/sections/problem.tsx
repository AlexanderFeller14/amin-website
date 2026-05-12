import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";

const ITEMS = [
  {
    idx: "01",
    title: "Doppelte Versicherungsdeckung.",
    body: "Hausrat, Haftpflicht und Zusatzversicherungen überschneiden sich in 6 von 10 Mandaten.",
    figure: "CHF 712",
    unit: "/Jahr",
  },
  {
    idx: "02",
    title: "Säule 3a auf dem Sparkonto.",
    body: "Nach 30 Jahren ein sechsstelliger Unterschied, verglichen mit einem 3a-Depot.",
    figure: "CHF 184’500",
    unit: null,
  },
  {
    idx: "03",
    title: "Krankenkasse ungeprüft.",
    body: "Nur 18 % vergleichen jährlich. Bei gleicher Deckung spart eine Optimierung:",
    figure: "CHF 1’420",
    unit: "/Jahr",
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="relative py-[clamp(72px,10vw,140px)]"
    >
      <div className="wrap">
        <SectionHead index="01" kicker="Wo Geld verloren geht">
          <span className="block text-ink-muted">Doppelt versichert.</span>
          <span className="block text-ink-2">Falsch angelegt.</span>
          <em className="block italic text-green">Zu teuer abgesichert.</em>
        </SectionHead>

        <div className="grid grid-cols-12 gap-6">
          <Reveal
            as="p"
            className="col-span-12 font-serif text-[clamp(20px,2vw,28px)] font-light leading-[1.32] tracking-[-0.005em] text-ink-2 md:col-span-5"
          >
            Schweizer Familien zahlen im Schnitt für Versicherungen, die sie
            doppelt haben, und sparen in der Säule 3a auf Konten, die seit
            Jahren{" "}
            <em className="italic text-green">real an Wert verlieren.</em>{" "}
            Wir machen sichtbar, was bisher unsichtbar war.
          </Reveal>

          <div className="col-span-12 flex flex-col md:col-span-6 md:col-start-7">
            {ITEMS.map((item, i) => (
              <Reveal
                key={item.idx}
                delay={0.08 * i}
                as="article"
                className="grid grid-cols-[auto_1fr_auto] items-baseline gap-5 border-t border-line py-6 last:border-b"
              >
                <span className="text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                  {item.idx}
                </span>
                <span className="max-w-[42ch] text-[15.5px] leading-[1.45] text-ink-2">
                  <strong className="font-medium text-ink">
                    {item.title}
                  </strong>{" "}
                  {item.body}
                </span>
                <span className="whitespace-nowrap font-serif text-[clamp(28px,3vw,44px)] font-light leading-none tracking-[-0.015em] tabular text-ink">
                  {item.figure}
                  {item.unit && (
                    <span className="ml-1 align-[0.4em] font-sans text-[0.42em] tracking-[0.04em] text-ink-muted">
                      {item.unit}
                    </span>
                  )}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
