import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function SectionHead({
  index,
  kicker,
  children,
  variant = "light",
}: {
  index: string;
  kicker: string;
  children: ReactNode;
  variant?: "light" | "dark";
}) {
  const borderClass =
    variant === "dark" ? "border-bone/[.18]" : "border-line";
  const labelMuted =
    variant === "dark" ? "text-bone-2" : "text-ink-muted";
  const labelNum =
    variant === "dark" ? "text-signal" : "text-ink";

  return (
    <Reveal
      className={`mb-[clamp(48px,7vw,88px)] grid grid-cols-12 gap-6 border-t ${borderClass} pt-6`}
    >
      <div
        className={`col-span-12 flex items-baseline gap-3.5 text-[11px] uppercase tracking-[0.12em] ${labelMuted} md:col-span-3`}
      >
        <span className={labelNum}>{index}</span>
        <span>{kicker}</span>
      </div>
      <h2 className="col-span-12 max-w-[22ch] font-serif text-[clamp(34px,5.5vw,76px)] font-light leading-[0.98] tracking-[-0.022em] md:col-span-9">
        {children}
      </h2>
    </Reveal>
  );
}
