"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

function formatSwiss(n: number): string {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "’");
}

export function CountUp({
  to,
  prefix,
  duration = 1.4,
  className,
}: {
  to: number;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.2, 0.7, 0.15, 1],
      onUpdate: (v) => setN(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  const target = `${prefix ?? ""}${formatSwiss(to)}`;
  const current = `${prefix ?? ""}${formatSwiss(n)}`;

  return (
    <span
      ref={ref}
      className={`relative inline-block ${className ?? ""}`}
    >
      <span aria-hidden="true" className="invisible">
        {target}
      </span>
      <span className="absolute inset-0 text-right">{current}</span>
    </span>
  );
}
