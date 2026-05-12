import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";

const SERVICES = [
  {
    tag: "Sparen",
    titleStart: "Budget & ",
    titleEm: "Sparplan",
    body: "Fixkosten analysiert, stille Abos sichtbar, ein Plan, der zu Ihrem Leben passt.",
  },
  {
    tag: "Versicherung",
    titleStart: "Versicherungs-",
    titleEm: "Check",
    body: "Alle Policen geprüft, Doppeldeckung raus, Vergleichsofferten geholt.",
  },
  {
    tag: "Vorsorge",
    titleStart: "Säule 3a & ",
    titleEm: "Pensionskasse",
    body: "3a-Anbieter verglichen, BVG-Auszug geprüft, Steuerwirkung simuliert.",
  },
  {
    tag: "Aufbau",
    titleStart: "Vermögens-",
    titleEm: "aufbau",
    body: "Vom ersten ETF-Sparplan zur diversifizierten Allokation. Ohne Provision.",
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
        <SectionHead index="02" kicker="Leistungen">
          Vier Bereiche, ein Auftrag:
          <br />
          <em className="italic text-green">Klarheit</em> über Ihre Finanzen.
        </SectionHead>

        <div className="grid grid-cols-12 border-t border-l border-line">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.tag}
              delay={0.08 * i}
              as="article"
              className="group col-span-12 flex min-h-[260px] flex-col gap-4 border-b border-r border-line bg-paper px-9 py-10 transition-colors hover:bg-bone md:col-span-6"
            >
              <span className="self-start rounded-full border border-green px-2 py-[3px] text-[10.5px] uppercase tracking-[0.1em] text-green">
                {s.tag}
              </span>
              <h3 className="font-serif text-[clamp(24px,2.4vw,36px)] font-light leading-[1.05] tracking-[-0.015em] text-ink">
                {s.titleStart}
                <em className="italic text-green">{s.titleEm}</em>
              </h3>
              <p className="max-w-[42ch] text-[14.5px] leading-[1.55] text-ink-2">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
