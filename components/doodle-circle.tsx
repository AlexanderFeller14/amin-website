"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function DoodleCircle({
  children,
  delay = 0,
  duration = 1.6,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <span className="relative inline-block px-[0.15em]">
      {children}
      <svg
        viewBox="0 0 240 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "-0.18em",
          bottom: "-0.12em",
          left: "-0.32em",
          right: "-0.32em",
          width: "calc(100% + 0.64em)",
          height: "calc(100% + 0.30em)",
          transform: "rotate(-1.5deg)",
        }}
      >
        <motion.path
          d="M40 18 C 90 8, 170 6, 210 22 C 230 30, 232 60, 200 72 C 150 86, 60 84, 30 68 C 8 56, 10 28, 40 18 Z"
          stroke="var(--warm)"
          strokeWidth={2.4}
          strokeLinecap="round"
          fill="none"
          opacity={0.9}
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
