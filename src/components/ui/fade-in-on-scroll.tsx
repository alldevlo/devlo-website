import type { ReactNode } from "react";

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

  const directionClass =
    direction === "down"
      ? "motion-safe:animate-fade-in-down"
      : direction === "left"
        ? "motion-safe:animate-fade-in-left"
        : direction === "right"
          ? "motion-safe:animate-fade-in-right"
          : "motion-safe:animate-fade-in-up";

  return (
    <div
      className={[directionClass, "motion-reduce:animate-none", className].filter(Boolean).join(" ")}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
