"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Blob } from "@/components/blob";
import { ArrowDoodle } from "@/components/arrow-doodle";

const HERO_LINES = [
  { plain: "Ihr Geld verdient", em: null },
  { plain: "ein ", em: "zweites" },
  { plain: "Paar Augen —", em: null },
  { plain: "eines, das nichts ", em: "verkauft.", doodle: true },
] as const;

const STATS = [
  {
    num: "4’238",
    sup: "CHF",
    lbl: "Ø jährliche Ersparnis pro Mandat im Vorjahr",
  },
  { num: "473", sup: null, lbl: "Haushalte beraten seit 2011" },
  {
    num: "0",
    em: "%",
    lbl: "Verkaufsprovisionen — wir sind reine Honorarberater",
  },
  { num: "4.9", suffix: "/5", lbl: "Bewertung Google & Trustpilot · 168 Bewertungen" },
] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-[clamp(40px,6vw,88px)] pb-[clamp(60px,9vw,140px)]">
      <Blob
        variant="warm"
        className="-top-40 -right-32 h-[520px] w-[520px]"
      />
      <Blob
        variant="green"
        className="-bottom-32 -left-28 h-[420px] w-[420px]"
        duration={28}
        reverse
      />

      <div className="wrap relative z-[2]">
        {/* meta strip */}
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-6 text-[11px] uppercase tracking-[0.14em] text-ink-2">
          <span className="inline-flex items-baseline gap-2.5">
            <span className="text-ink-muted">Ausgabe</span>
            <span className="tabular">04 — 2026</span>
          </span>
          <span className="text-ink-muted-2">/</span>
          <span className="inline-flex items-baseline gap-2.5">
            <span className="text-ink-muted">Standort</span>
            <span>Zürich · Bern · Online</span>
          </span>
          <span className="text-ink-muted-2">/</span>
          <span className="inline-flex items-baseline gap-2.5">
            <span className="text-ink-muted">Mandat seit</span>
            <span className="tabular">2011</span>
          </span>
          <span className="text-ink-muted-2">/</span>
          <span className="inline-flex items-baseline gap-2.5">
            <span className="text-ink-muted">Status</span>
            <span className="text-green">Termine Mai verfügbar</span>
          </span>
        </div>

        {/* title — masked staggered reveal */}
        <h1 className="mt-[clamp(40px,7vw,80px)] font-serif text-[clamp(46px,10.5vw,168px)] font-light leading-[0.92] tracking-[-0.025em] text-ink">
          {HERO_LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden">
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
                {line.plain}
                {line.em ? (
                  <em className="italic font-light text-green">
                    {"doodle" in line && line.doodle ? (
                      <span className="doodle-underline">{line.em}</span>
                    ) : (
                      line.em
                    )}
                  </em>
                ) : null}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* lead + ctas */}
        <div className="mt-[clamp(36px,5vw,72px)] grid grid-cols-12 gap-6 border-t border-line pt-7">
          <p className="col-span-12 max-w-[46ch] font-serif text-[clamp(18px,1.6vw,22px)] font-light leading-[1.42] tracking-[-0.005em] text-ink-2 md:col-span-6">
            Wir prüfen Versicherungen, Säule 3a, Pensionskasse und Sparpläne
            neutral.{" "}
            <em className="italic text-green">
              Honorarbasiert, ohne Provisionen
            </em>{" "}
            — und zeigen Ihnen schwarz auf weiss, wo Sie jährlich{" "}
            <span className="doodle-circle">vierstellig sparen</span>, ohne auf
            Sicherheit zu verzichten.
          </p>

          <div className="col-span-12 flex flex-col items-start gap-3.5 md:col-span-5 md:col-start-8">
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-2.5 border border-ink bg-ink px-5 py-3.5 text-[13.5px] text-bone transition-colors hover:bg-green-deep hover:border-green-deep"
              >
                Erstgespräch buchen
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
              <Link
                href="#leistungen"
                className="inline-flex items-center gap-2.5 border border-ink px-5 py-3.5 text-[13.5px] text-ink transition-colors hover:bg-ink hover:text-bone"
              >
                Leistungen ansehen
              </Link>
            </div>
            <span className="flex items-center gap-2 text-[11.5px] uppercase tracking-[0.05em] text-ink-muted">
              <ArrowDoodle />
              45&nbsp;Minuten · kostenlos · unverbindlich
            </span>
          </div>
        </div>

        {/* stats */}
        <div className="mt-[clamp(60px,8vw,108px)] grid grid-cols-12 gap-6 border-t border-line pt-7">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="relative col-span-12 flex flex-col gap-2 sm:col-span-6 lg:col-span-3 [&:not(:last-child)]:lg:after:absolute [&:not(:last-child)]:lg:after:right-[-12px] [&:not(:last-child)]:lg:after:top-0 [&:not(:last-child)]:lg:after:h-full [&:not(:last-child)]:lg:after:w-px [&:not(:last-child)]:lg:after:bg-line-soft [&:not(:last-child)]:lg:after:content-['']"
            >
              <div className="font-serif text-[clamp(40px,5.5vw,84px)] font-light leading-[0.95] tracking-[-0.02em] tabular">
                {s.num}
                {"em" in s && s.em ? (
                  <em className="italic text-green">{s.em}</em>
                ) : null}
                {"sup" in s && s.sup ? (
                  <sup className="ml-[0.05em] align-[1.6em] font-sans text-[0.32em] font-medium tracking-[0.06em] text-ink-muted">
                    {s.sup}
                  </sup>
                ) : null}
                {"suffix" in s && s.suffix ? (
                  <span className="text-[0.4em] text-ink-muted">{s.suffix}</span>
                ) : null}
              </div>
              <div className="max-w-[22ch] text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
