type Tone = "green" | "warm" | "ink";

const tones: Record<Tone, string> = {
  green: "linear-gradient(135deg,#3A5A4A,#23463A)",
  warm: "linear-gradient(135deg,#C97A4A,#8E4622)",
  ink: "linear-gradient(135deg,#5A4A3A,#2C2418)",
};

export function Avatar({
  initials,
  tone = "green",
}: {
  initials: string;
  tone?: Tone;
}) {
  return (
    <span
      aria-hidden="true"
      className="relative grid h-12 w-12 flex-none place-items-center rounded-full font-serif text-[18px] font-normal tracking-[0.01em] text-bone shadow-[0_1px_0_rgba(0,0,0,.08),inset_0_0_0_1px_rgba(255,255,255,.18)]"
      style={{ background: tones[tone] }}
    >
      {initials}
      <span
        className="absolute -inset-0.5 rotate-[8deg] rounded-full border border-dashed border-ink/25"
        aria-hidden="true"
      />
    </span>
  );
}
