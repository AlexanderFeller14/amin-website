import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { Avatar } from "@/components/avatar";

const TESTIS = [
  {
    quote:
      "Wir dachten, wir hätten alles im Griff. Nach dem Check wurde sichtbar, dass wir drei Versicherungen mit fast identischer Deckung zahlten. Herr Amin hat in Ruhe erklärt, was wirklich gebraucht wird und was wir bedenkenlos kündigen können.",
    name: "Andrea Keller & Familie",
    meta: ["Lehrerin, 42 · Winterthur", "Mandat seit 2023"],
    saved: "CHF 3’180",
    savedLbl: "jährlich gespart",
    initials: "AK",
    tone: "green" as const,
    tilt: "rotate-[-0.4deg]",
  },
  {
    quote:
      "Als ich angefangen habe Vollzeit zu arbeiten, hatte ich keine Ahnung von 3a oder ETFs. Herr Amin hat sich Zeit genommen, mir in 90 Minuten zu erklären, wie alles zusammenhängt. Heute spare ich strukturiert. Und verstehe wofür.",
    name: "Tobias Schmid",
    meta: ["UX Engineer, 29 · Zürich", "Mandat seit 2024"],
    saved: "+CHF 9’600",
    savedLbl: "Vermögen p.a.",
    initials: "TS",
    tone: "warm" as const,
    tilt: "rotate-[0.3deg]",
  },
  {
    quote:
      "Wir hatten vor der Pensionierung Angst, etwas Wichtiges zu übersehen. Der Bericht war ehrlich, auch dort, wo wir gut aufgestellt waren. Das hat Vertrauen geschaffen, das wir bei der Bank vermisst haben.",
    name: "Heinz & Mira Hofmann",
    meta: ["Architekt & Pflegefachfrau, 58/56 · Bern", "Mandat seit 2022"],
    saved: "CHF 41’200",
    savedLbl: "Steuern eingespart (PK-Einkauf)",
    initials: "HM",
    tone: "ink" as const,
    tilt: "rotate-[-0.2deg]",
  },
];

export function Testimonials() {
  return (
    <section
      id="stimmen"
      className="relative bg-paper py-[clamp(72px,10vw,140px)]"
    >
      <span className="deckle-top" aria-hidden="true" />
      <span className="deckle-bottom" aria-hidden="true" />

      <div className="wrap">
        <SectionHead index="05" kicker="Kundenstimmen">
          Was Mandantinnen und Mandanten nach{" "}
          <em className="italic text-green">einem Jahr</em> berichten.
        </SectionHead>

        <div className="grid grid-cols-12 gap-6">
          {TESTIS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={0.1 * i}
              as="article"
              className={`col-span-12 flex min-h-[380px] flex-col gap-6 border border-line bg-paper px-8 pb-7 pt-9 shadow-[0_1px_0_rgba(26,23,15,.05),0_12px_32px_-22px_rgba(26,23,15,.35)] sm:col-span-6 lg:col-span-4 ${t.tilt}`}
            >
              <p className="relative font-serif text-[clamp(20px,1.6vw,26px)] font-light italic leading-[1.32] tracking-[-0.008em] text-ink">
                <span
                  aria-hidden="true"
                  className="mb-4 block h-6 font-serif text-[64px] not-italic leading-[0.5] text-green"
                >
                  &ldquo;
                </span>
                {t.quote}
              </p>

              <div className="mt-auto flex items-end justify-between gap-3 border-t border-line-soft pt-4">
                <div className="flex items-center gap-3.5">
                  <Avatar initials={t.initials} tone={t.tone} />
                  <div>
                    <div className="text-[14px] font-medium">{t.name}</div>
                    <div className="mt-1 text-[10.5px] uppercase tracking-[0.08em] leading-[1.5] text-ink-muted">
                      {t.meta.map((m, j) => (
                        <div key={j}>{m}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-[24px] font-light italic leading-none tracking-[-0.01em] tabular text-green">
                    {t.saved}
                  </div>
                  <div className="mt-1 text-[9.5px] font-medium uppercase tracking-[0.1em] text-ink-muted">
                    {t.savedLbl}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
