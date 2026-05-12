import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";

const PEN = "#B2342A";
const PEN_FILL = "rgba(178, 52, 42, 0.05)";

function IconBars() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
      <line
        x1="6"
        y1="40"
        x2="42"
        y2="40"
        stroke={PEN}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
      <rect
        x="11"
        y="29"
        width="7"
        height="11"
        stroke={PEN}
        strokeWidth="1.6"
        fill={PEN_FILL}
        transform="rotate(-1.5 14.5 34.5)"
      />
      <rect
        x="20.5"
        y="20"
        width="7"
        height="20"
        stroke={PEN}
        strokeWidth="1.6"
        fill={PEN_FILL}
        transform="rotate(1 24 30)"
      />
      <rect
        x="30"
        y="11"
        width="7"
        height="29"
        stroke={PEN}
        strokeWidth="1.6"
        fill={PEN_FILL}
        transform="rotate(-1 33.5 25.5)"
      />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
      <path
        d="M24 6 C 18 8, 12 10, 8 10 L 8 24 C 8 32, 14 38, 24 42 C 34 38, 40 32, 40 24 L 40 10 C 36 10, 30 8, 24 6 Z"
        stroke={PEN}
        strokeWidth="1.8"
        fill={PEN_FILL}
        strokeLinejoin="round"
      />
      <path
        d="M16 24 L 22 30 L 32 18"
        stroke={PEN}
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconColumn() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
      <path
        d="M9 9 L 39 9 L 37 14 L 11 14 Z"
        stroke={PEN}
        strokeWidth="1.6"
        fill={PEN_FILL}
        strokeLinejoin="round"
      />
      <path
        d="M14 14 L 14 36 M20 14 L 20 36 M28 14 L 28 36 M34 14 L 34 36"
        stroke={PEN}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9 36 L 39 36 L 41 42 L 7 42 Z"
        stroke={PEN}
        strokeWidth="1.6"
        fill={PEN_FILL}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGrowth() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
      <line
        x1="6"
        y1="42"
        x2="42"
        y2="42"
        stroke={PEN}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M8 36 L 18 26 L 26 32 L 40 14"
        stroke={PEN}
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 14 L 32 13 M40 14 L 40 22"
        stroke={PEN}
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SERVICES = [
  {
    tag: "Sparen",
    titleStart: "Budget & ",
    titleEm: "Sparplan",
    body: "Fixkosten analysiert, stille Abos sichtbar, ein Plan, der zu Ihrem Leben passt.",
    icon: <IconBars />,
    tilt: "-rotate-[6deg]",
  },
  {
    tag: "Versicherung",
    titleStart: "Versicherungs-",
    titleEm: "Check",
    body: "Alle Policen geprüft, Doppeldeckung raus, Vergleichsofferten geholt.",
    icon: <IconShield />,
    tilt: "rotate-[5deg]",
  },
  {
    tag: "Vorsorge",
    titleStart: "Säule 3a & ",
    titleEm: "Pensionskasse",
    body: "3a-Anbieter verglichen, BVG-Auszug geprüft, Steuerwirkung simuliert.",
    icon: <IconColumn />,
    tilt: "-rotate-[4deg]",
  },
  {
    tag: "Aufbau",
    titleStart: "Vermögens-",
    titleEm: "aufbau",
    body: "Vom ersten ETF-Sparplan zur diversifizierten Allokation. Ohne Provision.",
    icon: <IconGrowth />,
    tilt: "rotate-[7deg]",
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
              className="group relative col-span-12 flex min-h-[260px] flex-col gap-4 border-b border-r border-line bg-paper px-9 py-10 transition-colors hover:bg-bone md:col-span-6"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-7 top-7 h-[clamp(44px,5vw,64px)] w-[clamp(44px,5vw,64px)] opacity-90 transition-transform duration-500 group-hover:scale-105"
              >
                {s.icon}
              </div>
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

        <Reveal
          delay={0.2}
          className="mt-[clamp(40px,5vw,72px)] flex justify-center"
        >
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-2.5 border border-ink bg-ink px-6 py-4 text-[13.5px] text-bone transition-colors hover:bg-green-deep hover:border-green-deep"
          >
            Termin vereinbaren
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
