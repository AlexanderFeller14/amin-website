"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "span" | "article" | "section" | "p" | "h2" | "h3";
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag] as typeof motion.div;

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.9,
        ease: [0.2, 0.7, 0.15, 1],
        delay,
      }}
    >
      {children}
    </MotionTag>
  );
}
