export function BrandMark({
  className = "h-[26px] w-[26px]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={`${className} -rotate-6`}
    >
      <path
        d="M14 3 C 21 3, 25 8, 25 14 C 25 21, 20 25, 14 25 C 7 25, 3 20, 3 14 C 3 7, 8 3, 14 3 Z"
        stroke="currentColor"
        strokeWidth={1.4}
        fill="var(--warm)"
        fillOpacity={0.18}
      />
      <path
        d="M14 8 L 14 18 M 9 13 L 14 8 L 19 13"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function BrandWordmark({
  className,
  emClassName,
}: {
  className?: string;
  emClassName?: string;
}) {
  return (
    <span
      className={`flex items-center gap-2.5 font-serif text-[20px] leading-none tracking-[-0.01em] ${className ?? ""}`}
    >
      <BrandMark className="h-[22px] w-[22px] text-ink" />
      <span>
        Amin&nbsp;
        <em
          className={`not-italic font-serif italic text-green ${emClassName ?? ""}`}
        >
          Finanzberatung
        </em>
      </span>
    </span>
  );
}
