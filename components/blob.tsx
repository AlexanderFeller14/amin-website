"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";

type Variant = "warm" | "green" | "rust";

const fills: Record<Variant, string> = {
  warm: "rgba(201,122,74,.35)",
  green: "rgba(35,70,58,.28)",
  rust: "rgba(176,83,42,.22)",
};

export function Blob({
  variant = "warm",
  className,
  style,
  duration = 22,
  reverse = false,
}: {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  duration?: number;
  reverse?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className={`pointer-events-none absolute blur-[40px] opacity-60 ${className ?? ""}`}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${fills[variant]}, transparent 70%)`,
        borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
        ...style,
      }}
      animate={
        reduce
          ? undefined
          : {
              x: reverse ? [0, -40, 0] : [0, 40, 0],
              y: reverse ? [0, 30, 0] : [0, -30, 0],
              rotate: reverse ? [0, -18, 0] : [0, 18, 0],
              scale: [1, 1.08, 1],
            }
      }
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
