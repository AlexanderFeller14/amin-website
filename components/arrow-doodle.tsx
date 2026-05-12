export function ArrowDoodle({
  className = "inline-block h-[26px] w-[62px] align-middle",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 26"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 14 C 18 6, 36 18, 56 12"
        stroke="var(--warm)"
        strokeWidth={2.2}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M48 6 L 56 12 L 49 19"
        stroke="var(--warm)"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
