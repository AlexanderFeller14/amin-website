"use client";

import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { useEffect, useRef } from "react";

const QA = [
  {
    q: "Was kostet die Beratung?",
    a: "Das Erstgespräch ist kostenlos und unverbindlich. Versicherungs- und Vorsorgelösungen werden über die Anbieter finanziert, daher fallen für Sie in der Regel keine direkten Honorare an. Komplexere, separat beauftragte Analysen werden vor Beginn schriftlich vereinbart.",
  },
  {
    q: "Wo findet die Beratung statt?",
    a: "Sie haben die Wahl: Termin im Büro an der Bernstrasse 162 in Zollikofen oder bei Ihnen vor Ort, je nachdem was besser in Ihren Alltag passt. Auf Wunsch ist auch ein Termin per Videocall möglich.",
  },
  {
    q: "Welche Versicherungen prüfe ich?",
    a: "Krankenkasse (Grund- und Zusatzversicherung), Privathaftpflicht, Hausrat, Lebens- und Risikolebensversicherung, Berufs- und Erwerbsunfähigkeit, Motorfahrzeug, Rechtsschutz sowie Vorsorgelösungen der Pensionskasse. Bei Selbständigen zusätzlich BVG, UVG und Krankentaggeld.",
  },
  {
    q: "Wie lange dauert eine Beratung?",
    a: "Vom Erstgespräch bis zur Empfehlung 4 bis 6 Wochen. Umsetzung (Kündigungen, Anbieterwechsel, neue Anträge) weitere 4 bis 12 Wochen, je nach Vertrag. Sie erhalten zu jedem Zeitpunkt einen klaren Statusbericht.",
  },
  {
    q: "Wer sieht meine Daten?",
    a: "Ihre Unterlagen werden vertraulich behandelt und nur für die Beratung verwendet. Die Datenverarbeitung erfolgt nach Schweizer Datenschutzgesetz; auf Wunsch Löschung nach Mandatsende, schriftlich bestätigt.",
  },
];

export function Faq() {
  const listRef = useRef<HTMLDivElement>(null);

  // accordion behavior, open only one at a time
  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLDetailsElement>("details"));
    const onToggle = (e: Event) => {
      const target = e.target as HTMLDetailsElement;
      if (target.open) {
        items.forEach((d) => {
          if (d !== target) d.open = false;
        });
      }
    };
    items.forEach((d) => d.addEventListener("toggle", onToggle));
    return () => {
      items.forEach((d) => d.removeEventListener("toggle", onToggle));
    };
  }, []);

  return (
    <section id="faq" className="relative py-[clamp(72px,10vw,140px)]">
      <div className="wrap">
        <SectionHead index="06" kicker="Häufige Fragen">
          Was Sie vor dem Erstgespräch{" "}
          <em className="italic text-green">noch wissen</em> sollten.
        </SectionHead>

        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 self-start md:col-span-4 md:sticky md:top-24">
            <p className="max-w-[30ch] font-serif text-[clamp(20px,1.8vw,26px)] font-light leading-[1.3] tracking-[-0.005em] text-ink-2">
              Wenn Ihre Frage nicht dabei ist, schreiben Sie uns.{" "}
              <em className="italic text-green">
                Wir antworten persönlich,
              </em>{" "}
              meist am gleichen Tag.
            </p>
            <div className="mt-6 text-[11px] uppercase tracking-[0.1em] text-ink-muted">
              Direkter Draht:{" "}
              <a
                href="mailto:amin.barraza@swisslife-select.ch"
                className="border-b border-ink pb-0.5 text-ink"
              >
                amin.barraza@swisslife-select.ch
              </a>
            </div>
          </Reveal>

          <div ref={listRef} className="col-span-12 md:col-span-7 md:col-start-6">
            {QA.map((item, i) => (
              <Reveal key={item.q} delay={0.04 * i}>
                <details
                  className="group border-t border-line py-6 last:border-b"
                  open={i === 0}
                >
                  <summary className="grid cursor-pointer list-none grid-cols-[32px_1fr_24px] items-baseline gap-3.5 md:grid-cols-[48px_1fr_32px] md:gap-4 [&::-webkit-details-marker]:hidden">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                      Q · {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-[clamp(19px,1.6vw,24px)] font-normal leading-[1.28] tracking-[-0.008em] text-ink">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative grid h-6 w-6 self-center place-items-center rounded-full border border-ink transition-colors group-open:bg-ink group-open:text-bone"
                    >
                      <span className="absolute h-px w-2.5 bg-current" />
                      <span className="absolute h-2.5 w-px bg-current transition-transform group-open:scale-y-0" />
                    </span>
                  </summary>
                  <div className="mt-4 ml-[46px] max-w-[62ch] text-[15px] leading-[1.6] text-ink-2 md:ml-[66px]">
                    <p>{item.a}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
