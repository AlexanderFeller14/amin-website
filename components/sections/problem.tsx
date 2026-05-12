import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";

const PEN = "#B2342A";
const PEN_FILL = "rgba(178, 52, 42, 0.05)";

function IconStackedDocs() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-full w-full">
      <rect
        x="3.5"
        y="6"
        width="14"
        height="18"
        rx="1"
        stroke={PEN}
        strokeWidth="1.4"
        fill={PEN_FILL}
        transform="rotate(-5 10.5 15)"
      />
      <rect
        x="14.5"
        y="8"
        width="14"
        height="18"
        rx="1"
        stroke={PEN}
        strokeWidth="1.4"
        fill={PEN_FILL}
        transform="rotate(4 21.5 17)"
      />
    </svg>
  );
}

function IconCoinJar() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-full w-full">
      <ellipse
        cx="16"
        cy="9"
        rx="11"
        ry="3"
        stroke={PEN}
        strokeWidth="1.4"
        fill={PEN_FILL}
      />
      <path
        d="M5 9 L 5 23 C 5 25.5, 11 27, 16 27 C 21 27, 27 25.5, 27 23 L 27 9"
        stroke={PEN}
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M5 16 C 5 18, 11 19.5, 16 19.5 C 21 19.5, 27 18, 27 16"
        stroke={PEN}
        strokeWidth="1.2"
        fill="none"
        opacity="0.55"
      />
      <line
        x1="13"
        y1="6"
        x2="19"
        y2="6"
        stroke={PEN}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHealthCard() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-full w-full">
      <rect
        x="3"
        y="7"
        width="26"
        height="18"
        rx="2"
        stroke={PEN}
        strokeWidth="1.4"
        fill={PEN_FILL}
      />
      <path
        d="M9 13 L 9 19 M6 16 L 12 16"
        stroke={PEN}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="14"
        x2="26"
        y2="14"
        stroke={PEN}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <line
        x1="16"
        y1="18"
        x2="23"
        y2="18"
        stroke={PEN}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

const ITEMS = [
  {
    idx: "01",
    title: "Doppelte Versicherungsdeckung.",
    body: "Hausrat, Haftpflicht und Zusatzversicherungen überschneiden sich in 6 von 10 Mandaten.",
    value: 712,
    unit: "/Jahr",
    icon: <IconStackedDocs />,
    tilt: "-rotate-[5deg]",
  },
  {
    idx: "02",
    title: "Säule 3a auf dem Sparkonto.",
    body: "Nach 30 Jahren ein sechsstelliger Unterschied, verglichen mit einem 3a-Depot.",
    value: 184500,
    unit: null,
    icon: <IconCoinJar />,
    tilt: "rotate-[4deg]",
  },
  {
    idx: "03",
    title: "Krankenkasse ungeprüft.",
    body: "Nur 18 % vergleichen jährlich. Bei gleicher Deckung spart eine Optimierung:",
    value: 1420,
    unit: "/Jahr",
    icon: <IconHealthCard />,
    tilt: "-rotate-[3deg]",
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="relative py-[clamp(72px,10vw,140px)]"
    >
      <div className="wrap">
        <SectionHead index="01" kicker="Wo Geld verloren geht">
          <span className="block text-ink-muted">Doppelt versichert.</span>
          <span className="block text-ink-2">Falsch angelegt.</span>
          <em className="block italic text-green">Zu teuer abgesichert.</em>
        </SectionHead>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <Reveal
              as="p"
              className="font-serif text-[clamp(20px,2vw,28px)] font-light leading-[1.32] tracking-[-0.005em] text-ink-2"
            >
              Schweizer Familien zahlen im Schnitt für Versicherungen, die
              sie doppelt haben, und sparen in der Säule 3a auf Konten, die
              seit Jahren{" "}
              <em className="italic text-green">real an Wert verlieren.</em>
            </Reveal>

            <Reveal
              delay={0.12}
              className="mt-7 flex items-start gap-5"
            >
              <svg
                viewBox="0 0 64 64"
                aria-hidden="true"
                className="mt-0.5 h-[clamp(52px,5.2vw,72px)] w-[clamp(52px,5.2vw,72px)] shrink-0 -rotate-[8deg] drop-shadow-[0_1px_0_rgba(178,52,42,0.12)]"
              >
                {/* lens - subtle warm fill like glass */}
                <ellipse
                  cx="24"
                  cy="24"
                  rx="17"
                  ry="16.4"
                  stroke="#B2342A"
                  strokeWidth="2.2"
                  fill="rgba(178, 52, 42, 0.045)"
                  transform="rotate(-4 24 24)"
                />
                {/* second sketch line for hand-drawn feel */}
                <ellipse
                  cx="24"
                  cy="24"
                  rx="16.4"
                  ry="15.6"
                  stroke="#B2342A"
                  strokeWidth="0.8"
                  fill="none"
                  transform="rotate(3 24 24)"
                  opacity="0.35"
                />
                {/* glass reflection arc, top-left */}
                <path
                  d="M12 18 C 14 13, 19 10, 25 11"
                  stroke="#B2342A"
                  strokeWidth="1.4"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.55"
                />
                {/* handle, slight curve */}
                <path
                  d="M36 36 C 40 40, 47 46, 56 55"
                  stroke="#B2342A"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* grip ferrule - small cross-stroke near the tip */}
                <path
                  d="M50 50 L 58 58"
                  stroke="#B2342A"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
              <p className="font-serif text-[clamp(22px,2.4vw,32px)] italic font-light leading-[1.2] tracking-[-0.01em] text-ink">
                Ich mache sichtbar, was bisher unsichtbar war.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 flex flex-col md:col-span-6 md:col-start-7">
            {ITEMS.map((item, i) => (
              <Reveal
                key={item.idx}
                delay={0.08 * i}
                as="article"
                className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-5 border-t border-line py-6 last:border-b"
              >
                <span className="self-start pt-1 text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                  {item.idx}
                </span>
                <span
                  className={`block h-9 w-9 shrink-0 self-start ${item.tilt}`}
                >
                  {item.icon}
                </span>
                <span className="max-w-[42ch] self-start text-[15.5px] leading-[1.45] text-ink-2">
                  <strong className="font-medium text-ink">
                    {item.title}
                  </strong>{" "}
                  {item.body}
                </span>
                <span className="whitespace-nowrap font-serif text-[clamp(28px,3vw,44px)] font-light leading-none tracking-[-0.015em] tabular text-ink">
                  <CountUp to={item.value} prefix="CHF " />
                  {item.unit && (
                    <span className="ml-1 align-[0.4em] font-sans text-[0.42em] tracking-[0.04em] text-ink-muted">
                      {item.unit}
                    </span>
                  )}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
