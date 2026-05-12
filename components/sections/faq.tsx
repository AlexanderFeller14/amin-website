"use client";

import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { useEffect, useRef } from "react";

const QA = [
  {
    q: "Wie verdient ihr Geld, wenn ihr keine Provisionen nehmt?",
    a: "Ausschliesslich durch ein festes Honorar, das Sie vor der Mandatsannahme schriftlich erhalten. Wir nehmen weder Provisionen von Versicherern noch Vermittlungsentschädigungen von Banken oder Fondsanbietern an. Sollten dennoch Retrozessionen auf Produkte anfallen, die wir empfehlen, werden diese vollständig an Sie weitergegeben — bilanziert und ausgewiesen.",
  },
  {
    q: "Was kostet eine vollständige Beratung?",
    a: "Einzelmandate beginnen bei CHF 480 (Sparplan), umfassende Mandate inkl. Vorsorge und Vermögen liegen typischerweise zwischen CHF 1’800 und CHF 3’400 — einmalig. Die Begleitung im Folgejahr ist optional (CHF 540/Jahr). Wir nennen den Preis verbindlich vor Beginn.",
  },
  {
    q: "Welche Versicherungen prüft ihr?",
    a: "Krankenkasse (Grund- und Zusatzversicherung), Privathaftpflicht, Hausrat, Lebens- und Risikolebensversicherung, Berufs- und Erwerbsunfähigkeit, Motorfahrzeug, Rechtsschutz sowie Zusatzangebote der Pensionskasse. Bei Selbständigen zusätzlich BVG, UVG und Krankentaggeld.",
  },
  {
    q: "Wie unabhängig seid ihr wirklich?",
    a: "Wir sind weder Teil einer Bank, einer Versicherung noch eines Strukturvertriebs. Unsere Aktionäre sind ausschliesslich die zwei geschäftsführenden Berater. Wir veröffentlichen jährlich eine Übersicht, mit welchen Anbietern wir wie oft empfohlen haben — Sie können nachsehen.",
  },
  {
    q: "Was ist die Säule 3a — und warum lohnt sie sich?",
    a: "Die Säule 3a ist die private, steuerbegünstigte Vorsorge in der Schweiz. Einzahlungen sind bis CHF 7’258 (Angestellte, 2026) vom steuerbaren Einkommen abziehbar. Bei einem Grenzsteuersatz von 30 % entspricht das einer sofortigen Rendite von rund 2’100 CHF pro Einzahlungsjahr — vor jedem Anlageerfolg.",
  },
  {
    q: "Wie lange dauert ein Beratungsprozess?",
    a: "Vom Erstgespräch bis zur Empfehlung typischerweise 4 bis 6 Wochen. Die Umsetzung (Kündigungen, Anbieterwechsel, neue Anträge) übernehmen wir, sofern Sie das wünschen — das dauert je nach Vertrag weitere 4 bis 12 Wochen.",
  },
  {
    q: "Bekommen meine Daten andere zu Gesicht?",
    a: "Nein. Ihre Unterlagen werden in einem verschlüsselten Datenraum auf Schweizer Servern (Infomaniak Swiss Backup, ISO 27001) abgelegt. Zugriff haben ausschliesslich die zwei beratenden Personen. Nach Mandatsende werden Ihre Daten auf Wunsch innerhalb 30 Tagen gelöscht — wir bestätigen schriftlich.",
  },
];

export function Faq() {
  const listRef = useRef<HTMLDivElement>(null);

  // accordion behavior — open only one at a time
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
        <SectionHead index="06" kicker="— Häufige Fragen">
          Was Sie vor dem Erstgespräch{" "}
          <em className="italic text-green">noch wissen</em> sollten.
        </SectionHead>

        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 self-start md:col-span-4 md:sticky md:top-24">
            <p className="max-w-[30ch] font-serif text-[clamp(20px,1.8vw,26px)] font-light leading-[1.3] tracking-[-0.005em] text-ink-2">
              Wenn Ihre Frage nicht dabei ist — schreiben Sie uns.{" "}
              <em className="italic text-green">
                Wir antworten persönlich,
              </em>{" "}
              meist am gleichen Tag.
            </p>
            <div className="mt-6 text-[11px] uppercase tracking-[0.1em] text-ink-muted">
              Direkter Draht —{" "}
              <a
                href="mailto:hallo@amin-finanz.ch"
                className="border-b border-ink pb-0.5 text-ink"
              >
                hallo@amin-finanz.ch
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
