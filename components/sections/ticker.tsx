const ITEMS = [
  "Termin im Büro oder vor Ort",
  "Vorsorge mit Schweizer Tradition",
  "Erstgespräch kostenlos",
  "Säule 3a optimieren",
  "Pensionskasse vergleichen",
  "Versicherungs-Check",
  "Vermögensaufbau",
  "Steuern planen",
];

function Item({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-3.5">
      <span className="h-[5px] w-[5px] rounded-full bg-green" />
      {label}
    </span>
  );
}

export function Ticker() {
  return (
    <>
      <style>{`
        @keyframes amin-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .amin-ticker-track {
          animation: amin-ticker 60s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .amin-ticker-track { animation: none; }
        }
      `}</style>
      <div className="overflow-hidden border-y border-line bg-bone py-3.5">
        <div className="amin-ticker-track flex gap-12 whitespace-nowrap text-[11.5px] uppercase tracking-[0.12em] text-ink-2">
          {[...ITEMS, ...ITEMS].map((label, i) => (
            <span key={i} className="inline-flex items-center gap-3.5">
              <Item label={label} />
              <span className="text-ink-muted-2">·</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
