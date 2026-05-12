"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { useEffect, useRef } from "react";

const QA = [
  {
    q: "Was kostet die Beratung?",
    a: "Das Erstgespräch ist kostenlos. Lösungen werden über die Anbieter finanziert, in der Regel ohne direkte Honorare. Separat beauftragte Analysen werden vorab schriftlich vereinbart.",
  },
  {
    q: "Wo findet die Beratung statt?",
    a: "Im Büro an der Bernstrasse 162 in Zollikofen, bei Ihnen vor Ort, oder per Videocall. Sie wählen, was am besten passt.",
  },
  {
    q: "Welche Versicherungen prüfe ich?",
    a: "Krankenkasse, Haftpflicht, Hausrat, Leben und Risikoleben, Erwerbs- und Berufsunfähigkeit, Motorfahrzeug, Rechtsschutz, Pensionskasse. Bei Selbständigen zusätzlich BVG, UVG und Krankentaggeld.",
  },
  {
    q: "Wie lange dauert eine Beratung?",
    a: "Erstgespräch bis Empfehlung: 4–6 Wochen. Umsetzung weitere 4–12 Wochen, je nach Vertrag. Statusbericht jederzeit.",
  },
  {
    q: "Wer sieht meine Daten?",
    a: "Vertraulich, nur für die Beratung verwendet. Verarbeitung nach Schweizer Datenschutzgesetz. Auf Wunsch Löschung nach Mandatsende, schriftlich bestätigt.",
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
          <Reveal className="order-last col-span-12 mt-10 flex items-start gap-5 self-start border-t border-line pt-10 md:order-none md:mt-0 md:block md:border-0 md:pt-0 md:col-span-4 md:sticky md:top-24">
            <svg
              viewBox="0 0 80 96"
              aria-hidden="true"
              className="h-[56px] w-auto shrink-0 -rotate-[7deg] md:mb-4 md:h-[clamp(72px,7vw,108px)]"
            >
              <path
                d="M22 30 C 22 18, 30 10, 42 10 C 54 10, 62 18, 62 30 C 62 38, 56 43, 48 48 C 43 51, 41 55, 41 64"
                stroke="#B2342A"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="41" cy="78" r="3.6" fill="#B2342A" />
              <path
                d="M19 30 C 21 22, 28 14, 38 12"
                stroke="#B2342A"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="round"
                opacity="0.4"
              />
            </svg>
            <div>
              <p className="max-w-[30ch] font-serif text-[clamp(19px,1.8vw,26px)] font-light leading-[1.3] tracking-[-0.005em] text-ink-2">
                Wenn Ihre Frage nicht dabei ist, schreiben Sie mir.{" "}
                <em className="italic text-green">
                  Ich antworte persönlich,
                </em>{" "}
                meist am gleichen Tag.
              </p>
              <a
                href="mailto:amin.barraza@swisslife-select.ch"
                className="mt-5 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:text-green-deep md:mt-6"
              >
                Direkter Draht per E-Mail
                <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
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
