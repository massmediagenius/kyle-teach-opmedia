"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

export default function Counter({
  from = 0,
  to,
  duration = 2,
  prefix = "",
  suffix = "",
  format,
}: {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const value = useMotionValue(from);
  const display = useTransform(value, (latest) =>
    format ? format(latest) : Math.round(latest).toLocaleString(),
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(value, to, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration, value]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
