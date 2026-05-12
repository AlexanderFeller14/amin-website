"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { Blob } from "@/components/blob";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const META = [
  {
    lbl: "Standort",
    val: (
      <>
        Swiss Life Select
        <br />
        3052 Zollikofen
      </>
    ),
  },
  {
    lbl: "Telefon",
    val: (
      <a className="hover:text-signal" href="tel:+41313000000">
        +41&nbsp;31&nbsp;300&nbsp;00&nbsp;00
      </a>
    ),
  },
  {
    lbl: "E-Mail",
    val: (
      <a className="hover:text-signal" href="mailto:hallo@amin-finanz.ch">
        hallo@amin-finanz.ch
      </a>
    ),
  },
  {
    lbl: "Sprechstunden",
    val: (
      <>
        Mo–Fr · 09:00–18:00
        <br />
        Sa nach Vereinbarung
      </>
    ),
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-green-deep py-[clamp(72px,10vw,140px)] text-bone"
    >
      <Blob
        variant="warm"
        className="-top-20 -right-24 h-[580px] w-[580px] opacity-60 blur-[60px]"
      />

      <div className="wrap relative z-[2]">
        <SectionHead index="07" kicker="Kontakt" variant="dark">
          Reden wir.{" "}
          <em className="italic text-signal">45 Minuten,</em> keine
          Verpflichtung.
        </SectionHead>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 flex flex-col gap-12 md:col-span-5">
            <Reveal
              as="p"
              className="font-serif text-[clamp(28px,3vw,42px)] font-light italic leading-[1.15] tracking-[-0.015em] text-bone"
            >
              Wir nehmen jährlich nur eine begrenzte Zahl neuer Mandate an,
              damit jede Beratung die Tiefe bekommt, die sie verdient.
            </Reveal>

            <Reveal delay={0.08}>
              <span className="signature" style={{ color: "var(--signal)" }}>
                R. Amin
                <small className="mt-2 block rotate-[3deg] font-sans text-[10px] font-medium not-italic uppercase tracking-[0.12em] text-bone-2">
                  Geschäftsführer · seit 2011
                </small>
              </span>
            </Reveal>

            <div className="grid grid-cols-2 gap-8 border-t border-bone/[.18] pt-6">
              {META.map((m, i) => (
                <Reveal
                  key={m.lbl}
                  delay={0.05 * i}
                  className="flex flex-col gap-1.5"
                >
                  <span className="text-[10.5px] uppercase tracking-[0.12em] text-bone-2">
                    {m.lbl}
                  </span>
                  <span className="text-[17px] leading-[1.4] text-bone">
                    {m.val}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal
            as="div"
            delay={0.15}
            className="col-span-12 bg-bone px-6 py-10 text-ink md:col-span-6 md:col-start-7 md:px-10 md:py-11"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-baseline justify-between border-b border-line pb-4">
                <span className="font-serif text-[22px] font-normal tracking-[-0.005em]">
                  Erstgespräch anfragen
                </span>
                <span className="text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                  F · 2026-04
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Field id="name" label="Vor- und Nachname">
                  <Input id="name" placeholder="Maja Brunner" required autoComplete="name" />
                </Field>
                <Field id="year" label="Geburtsjahr (opt.)">
                  <Input
                    id="year"
                    inputMode="numeric"
                    placeholder="1989"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Field id="email" label="E-Mail">
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="maja@example.ch"
                    autoComplete="email"
                  />
                </Field>
                <Field id="phone" label="Telefon (opt.)">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+41 79 ___ __ __"
                    autoComplete="tel"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Field id="topic" label="Worum geht es?">
                  <Select defaultValue="vers">
                    <SelectTrigger id="topic" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vers">Versicherungs-Check</SelectItem>
                      <SelectItem value="vorsorge">
                        Säule 3a & Vorsorge
                      </SelectItem>
                      <SelectItem value="sparen">Sparen & Budget</SelectItem>
                      <SelectItem value="etf">
                        Vermögensaufbau / ETF
                      </SelectItem>
                      <SelectItem value="komplett">
                        Komplette Finanzanalyse
                      </SelectItem>
                      <SelectItem value="other">Etwas Anderes</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field id="when" label="Wunsch-Termin">
                  <Select defaultValue="diese">
                    <SelectTrigger id="when" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diese">Diese Woche</SelectItem>
                      <SelectItem value="naechste">Nächste Woche</SelectItem>
                      <SelectItem value="24w">In den nächsten 2–4 Wochen</SelectItem>
                      <SelectItem value="flex">Flexibel</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <Field id="msg" label="Nachricht (opt.)">
                <Textarea
                  id="msg"
                  placeholder="Kurze Beschreibung Ihrer Situation, falls Sie möchten."
                  className="min-h-[88px]"
                />
              </Field>

              <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                <span className="max-w-[32ch] text-[10.5px] uppercase leading-[1.6] tracking-[0.06em] text-ink-muted">
                  Datenhaltung Schweiz · keine Weitergabe an Dritte
                </span>
                <Button
                  type="submit"
                  className="rounded-none bg-ink px-5 py-3.5 text-[13.5px] text-bone hover:bg-green-deep"
                >
                  {sent ? "Vielen Dank, wir melden uns." : "Anfrage senden"}
                  {!sent && (
                    <ArrowRight className="ml-2 h-3.5 w-3.5" strokeWidth={1.5} />
                  )}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label
        htmlFor={id}
        className="text-[10.5px] uppercase tracking-[0.12em] text-ink-muted"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}
