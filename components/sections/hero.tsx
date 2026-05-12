"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Blob } from "@/components/blob";
import { ArrowDoodle } from "@/components/arrow-doodle";
import { DoodleUnderline } from "@/components/doodle-underline";
import { DoodleCircle } from "@/components/doodle-circle";

const TITLE_LINES = [
  (
    <>
      <em className="italic font-light text-green">Klarheit</em> über
    </>
  ),
  (
    <>
      Ihre{" "}
      <em className="italic font-light text-green">
        <DoodleUnderline delay={1.4}>Finanzen.</DoodleUnderline>
      </em>
    </>
  ),
];

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
            <span className="text-ink-muted">Standort</span>
            <span>Zollikofen · Online</span>
          </span>
          <span className="text-ink-muted-2">/</span>
          <span className="inline-flex items-baseline gap-2.5">
            <span className="text-ink-muted">Beraterpartner</span>
            <span>Swiss Life Select</span>
          </span>
          <span className="text-ink-muted-2">/</span>
          <span className="inline-flex items-baseline gap-2.5">
            <span className="text-ink-muted">Themen</span>
            <span>Vorsorge · Versicherung · Vermögen</span>
          </span>
          <span className="text-ink-muted-2">/</span>
          <span className="inline-flex items-baseline gap-2.5">
            <span className="text-ink-muted">Status</span>
            <span className="text-green">Termine verfügbar</span>
          </span>
        </div>

        {/* title, masked staggered reveal */}
        <h1 className="mt-[clamp(40px,7vw,80px)] font-serif text-[clamp(40px,7.5vw,112px)] font-light leading-[1.0] tracking-[-0.02em] text-ink">
          {TITLE_LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.08em]">
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

        {/* lead + ctas */}
        <div className="mt-[clamp(36px,5vw,72px)] grid grid-cols-12 gap-6 border-t border-line pt-7">
          <p className="col-span-12 max-w-[42ch] font-serif text-[clamp(18px,1.6vw,22px)] font-light leading-[1.42] tracking-[-0.005em] text-ink-2 md:col-span-6">
            <em className="italic text-green">Persönliche Beratung</em> für
            Vorsorge, Versicherung und Vermögen. Vom ersten Sparplan bis zur
            Pensionierung.{" "}
            <DoodleCircle delay={1.9}>Erstgespräch kostenlos.</DoodleCircle>
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

      </div>
    </section>
  );
}
