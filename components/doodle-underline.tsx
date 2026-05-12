"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function DoodleUnderline({
  children,
  delay = 0,
  duration = 1.4,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        viewBox="0 0 320 28"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute -left-[4%] -right-[4%] w-[108%]"
        style={{
          bottom: "-0.18em",
          height: "0.36em",
        }}
      >
        <motion.path
          d="M4 18 C 40 6, 90 24, 140 14 S 240 6, 316 18"
          stroke="var(--warm)"
          strokeWidth={3.5}
          strokeLinecap="round"
          fill="none"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: reduce ? 0 : duration,
            ease: [0.2, 0.7, 0.15, 1],
            delay,
          }}
        />
      </svg>
    </span>
  );
}
