"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

const TITLE_LINES = [
  <>Klarheit über</>,
  (
    <>
      Ihre <span className="pen-mark">Finanzen.</span>
    </>
  ),
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative pt-[clamp(56px,7vw,108px)] pb-[clamp(80px,10vw,160px)]">
      <div className="wrap">
        <div className="relative">
          {/* the file tab sticking out of the top */}
          <div className="akten-tab left-[clamp(24px,5vw,72px)]">
            <span>Vorsorge</span>
            <span className="tab-sep" aria-hidden="true">·</span>
            <span>Versicherung</span>
            <span className="tab-sep" aria-hidden="true">·</span>
            <span>Vermögen</span>
          </div>

          {/* the paper sheet */}
          <article className="paper-sheet relative px-[clamp(20px,4vw,72px)] pt-[clamp(40px,5vw,72px)] pb-[clamp(40px,5vw,80px)]">
            {/* stamp top-right */}
            <div className="pointer-events-none absolute right-[clamp(20px,5vw,80px)] top-[clamp(20px,3vw,40px)] z-[3]">
              <div className="stempel">
                <span>Erstgespräch</span>
                <span>kostenlos</span>
              </div>
            </div>

            {/* dossier kopfzeile: single line of real metadata */}
            <div className="flex items-baseline gap-3 border-b border-line pb-4 text-[10.5px] uppercase tracking-[0.18em] text-ink-muted">
              <span className="font-semibold tracking-[0.22em] text-ink-2">
                Persönliche Finanzberatung
              </span>
              <span aria-hidden="true">·</span>
              <span>Büro Zollikofen</span>
              <span aria-hidden="true">·</span>
              <span>Termin vor Ort möglich</span>
            </div>

            <div className="relative mt-[clamp(36px,5vw,72px)] grid grid-cols-12 gap-x-[clamp(20px,4vw,56px)] gap-y-10">
              {/* LEFT: portrait placeholder with paper clip */}
              <figure className="col-span-12 md:col-span-4">
                <div className="relative mx-auto max-w-[300px] md:mx-0">
                  {/* paper clip SVG, sits over the top edge */}
                  <svg
                    viewBox="0 0 64 110"
                    aria-hidden="true"
                    className="absolute -top-7 left-6 z-[2] h-[88px] w-[52px] drop-shadow-[0_2px_2px_rgba(26,23,15,0.18)]"
                  >
                    <path
                      d="M22 8 C 14 8, 10 14, 10 22 L 10 78 C 10 92, 22 100, 34 100 C 46 100, 56 92, 56 78 L 56 32 C 56 22, 50 16, 42 16 C 34 16, 28 22, 28 30 L 28 72 C 28 78, 32 82, 38 82 C 44 82, 48 78, 48 72 L 48 40"
                      stroke="#8a8270"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* portrait photo, slightly tilted like a clipped print */}
                  <div className="relative aspect-[3/4] w-full -rotate-[1.2deg] overflow-hidden border border-ink/40 bg-bone-2 shadow-[0_2px_4px_rgba(26,23,15,0.12),0_10px_24px_-8px_rgba(26,23,15,0.22)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/portrait.jpeg"
                      alt="Portrait Amin Barraza"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    {/* tape strips at corners: small amber rectangles */}
                    <span
                      className="photo-tape absolute -left-3 top-3 z-[2] h-3 w-12 -rotate-[18deg]"
                      aria-hidden="true"
                    />
                    <span
                      className="photo-tape absolute -right-3 bottom-6 z-[2] h-3 w-12 rotate-[14deg]"
                      aria-hidden="true"
                    />
                  </div>

                  <figcaption className="mt-4 flex flex-col gap-0.5 pl-1">
                    <span className="text-[10.5px] uppercase tracking-[0.18em] text-ink-muted">
                      Berater
                    </span>
                    <span className="font-serif text-[17px] leading-tight text-ink">
                      Amin Barraza
                    </span>
                    <span className="text-[12.5px] text-ink-muted">
                      Beratung in Zollikofen oder vor Ort
                    </span>
                  </figcaption>
                </div>
              </figure>

              {/* RIGHT: title + lead + ctas */}
              <div className="col-span-12 md:col-span-8">
                <h1 className="font-serif text-[clamp(40px,7.2vw,108px)] font-light leading-[0.98] tracking-[-0.022em] text-ink">
                  {TITLE_LINES.map((line, i) => (
                    <span
                      key={i}
                      className="block overflow-hidden pb-[0.08em]"
                    >
                      <motion.span
                        className="inline-block"
                        initial={reduce ? false : { y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 1.1,
                          ease: [0.2, 0.7, 0.15, 1],
                          delay: 0.1 * i,
                        }}
                      >
                        {line}
                      </motion.span>
                    </span>
                  ))}
                </h1>

                <div className="mt-[clamp(28px,4vw,56px)] grid grid-cols-12 gap-6 border-t border-line pt-7">
                  <p className="col-span-12 max-w-[44ch] font-serif text-[clamp(17px,1.55vw,21px)] font-light leading-[1.45] tracking-[-0.005em] text-ink-2 md:col-span-7">
                    Persönliche Beratung für Vorsorge, Versicherung und
                    Vermögen, vom ersten Sparplan bis zur Pensionierung. Wir
                    sortieren, was vorhanden ist, schliessen Lücken, und Sie
                    behalten den Überblick.
                  </p>

                  <div className="col-span-12 flex flex-col items-start gap-4 md:col-span-5">
                    <div className="flex flex-wrap gap-2.5">
                      <Link
                        href="#leistungen"
                        className="inline-flex items-center gap-2.5 border border-ink px-5 py-3.5 text-[13.5px] text-ink transition-colors hover:bg-ink hover:text-bone"
                      >
                        Leistungen ansehen
                      </Link>
                      <Link
                        href="#kontakt"
                        className="inline-flex items-center gap-2.5 border border-ink bg-ink px-5 py-3.5 text-[13.5px] text-bone transition-colors hover:bg-green-deep hover:border-green-deep"
                      >
                        Erstgespräch buchen
                        <ArrowRight
                          className="h-3.5 w-3.5"
                          strokeWidth={1.5}
                        />
                      </Link>
                    </div>

                    {/* hand-written margin note, curling up to the CTAs */}
                    <div className="relative mt-1 flex items-start gap-2">
                      <svg
                        viewBox="0 0 56 64"
                        aria-hidden="true"
                        className="mt-1 h-[58px] w-[40px] shrink-0"
                      >
                        {/* curving line that loops from the note up-left toward the buttons,
                            with the arrowhead at the TOP pointing at the CTAs */}
                        <path
                          d="M14 58 C 6 50, 4 36, 12 26 C 22 14, 32 10, 38 6 M38 6 L 29 7 M38 6 L 34 14"
                          stroke="#B2342A"
                          strokeWidth="1.8"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          opacity="0.9"
                        />
                      </svg>
                      <p className="margin-note text-[26px] -rotate-[3deg]">
                        45 Min.,
                        <br />
                        kostenlos &amp; unverbindlich.
                      </p>
                    </div>
                  </div>
                </div>

                {/* signature row at the bottom of the sheet */}
                <div className="mt-[clamp(40px,5vw,72px)] flex items-end justify-between gap-6 border-t border-line pt-6">
                  <span className="text-[10.5px] uppercase tracking-[0.18em] text-ink-muted">
                    Ihr Berater
                  </span>
                  <div className="flex flex-col items-end gap-1">
                    {/* signature placeholder, to be replaced with real scan */}
                    <span
                      className="font-serif text-[34px] italic font-light leading-none text-pen-red -rotate-[3deg]"
                      style={{ letterSpacing: "0.01em" }}
                    >
                      Amin Barraza
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted-2">
                      Signatur · Platzhalter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
