import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";

const STEPS = [
  {
    n: "01",
    title: "Erstgespräch",
    body: "Wir hören zu. Welche Ziele, welche Sorgen, welche Lebenssituation. Kein Verkauf, keine Unterlagen nötig.",
    dur: "45 Min · kostenlos · vor Ort oder online",
  },
  {
    n: "02",
    title: "Analyse",
    body: "Sie übergeben uns Ihre Unterlagen sicher per verschlüsseltem Upload. Wir prüfen jede Police, jeden Vertrag, jeden Vorsorgeauszug.",
    dur: "10–14 Tage · CH-Datenhaltung",
  },
  {
    n: "03",
    title: "Empfehlung",
    body: "Sie erhalten einen klaren Bericht. Was bleibt, was geht, was sich verbessert — mit Zahlen, nicht mit Bauchgefühl.",
    dur: "90-Min-Termin · schriftlicher Plan",
  },
  {
    n: "04",
    title: "Umsetzung",
    body: "Sie entscheiden, wir begleiten. Kündigungen, Anträge, Anbieterwechsel — wir nehmen Ihnen den Papierkram ab. Jahres-Review inklusive.",
    dur: "Begleitung 12 Monate",
  },
];

export function Process() {
  return (
    <section
      id="prozess"
      className="relative bg-green-deep py-[clamp(72px,10vw,140px)] text-bone"
    >
      <div className="wrap">
        <SectionHead index="03" kicker="— Vorgehen" variant="dark">
          Vier Schritte — vom ersten Gespräch bis zum{" "}
          <em className="italic text-signal">messbaren Resultat.</em>
        </SectionHead>

        <div className="grid grid-cols-12 gap-6">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              delay={0.08 * i}
              className="relative col-span-12 flex flex-col gap-5 border-t border-bone/[.22] pt-6 sm:col-span-6 lg:col-span-3"
            >
              <div className="font-serif text-[clamp(56px,6vw,96px)] font-light italic leading-[0.9] tracking-[-0.02em] tabular text-signal">
                {s.n}
              </div>
              <h4 className="font-serif text-[22px] font-normal leading-[1.15] tracking-[-0.01em]">
                {s.title}
              </h4>
              <p className="max-w-[30ch] text-[14px] leading-[1.55] text-bone-2">
                {s.body}
              </p>
              <div className="mt-auto border-t border-bone/[.14] pt-3.5 text-[10.5px] uppercase tracking-[0.1em] text-bone-2">
                {s.dur}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
