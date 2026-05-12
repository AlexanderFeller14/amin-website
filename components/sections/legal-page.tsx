import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function LegalPage({
  index,
  kicker,
  title,
  updated,
  children,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative bg-bone py-[clamp(72px,10vw,140px)] text-ink">
      <div className="wrap">
        <Reveal className="mb-[clamp(48px,7vw,88px)] grid grid-cols-12 gap-6 border-t border-line pt-6">
          <div className="col-span-12 flex items-baseline gap-3.5 text-[11px] uppercase tracking-[0.12em] text-ink-muted md:col-span-3">
            <span className="text-ink">{index}</span>
            <span>{kicker}</span>
          </div>
          <h1 className="col-span-12 max-w-[22ch] font-serif text-[clamp(34px,5.5vw,76px)] font-light leading-[0.98] tracking-[-0.022em] md:col-span-9">
            {title}
          </h1>
        </Reveal>

        <div className="grid grid-cols-12 gap-6">
          {updated ? (
            <div className="col-span-12 md:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                {updated}
              </p>
            </div>
          ) : (
            <div className="hidden md:col-span-3 md:block" />
          )}

          <div className="col-span-12 flex flex-col gap-12 md:col-span-9">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section" className="grid grid-cols-12 gap-6 border-t border-line pt-6">
      <div className="col-span-12 flex items-baseline gap-3.5 text-[11px] uppercase tracking-[0.12em] text-ink-muted md:col-span-3">
        <span className="text-ink">{number}</span>
        <span>{title}</span>
      </div>
      <div className="col-span-12 flex flex-col gap-4 font-serif text-[17px] font-light leading-[1.55] tracking-[-0.003em] text-ink-2 md:col-span-9 [&_a.underline-link]:text-ink [&_a.underline-link]:underline [&_a.underline-link]:decoration-line [&_a.underline-link]:underline-offset-[4px] [&_a.underline-link:hover]:decoration-ink [&_strong]:font-medium [&_strong]:text-ink [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_li]:list-disc [&_li]:marker:text-ink-muted">
        {children}
      </div>
    </Reveal>
  );
}
