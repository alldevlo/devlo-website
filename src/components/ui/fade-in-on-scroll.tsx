"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeInOnScrollProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  eager?: boolean;
};

export function FadeInOnScroll({ children, delay = 0, direction = "up", className, eager = false }: FadeInOnScrollProps) {
  if (eager) {
    return <div className={className}>{children}</div>;
  }
  void direction;

  return (
    <motion.div
      // Keep content visible in SSR/bot rendering even if client JS fails.
      initial={false}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
