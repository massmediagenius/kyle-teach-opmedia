"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function FOMOClose() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-bg overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-yellow/5 blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Chapter 09 · The cost of waiting</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-5xl md:text-7xl lg:text-9xl max-w-6xl leading-[0.9]">
            Every day you don&apos;t move <span className="italic text-gold serif font-light">someone else does.</span>
          </h2>
        </Reveal>

        <div className="mt-24 grid md:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {[
            {
              n: "$1,840",
              l: "Lost revenue · every week you wait",
              s: "Conservative — assuming you hit just $7K/mo by Day 90, that's $233/day of unrealized creator revenue. Multiply by Prestige equity on each closer hired.",
            },
            {
              n: "11 / 21",
              l: "Recent reels using the failed template",
              s: "Your last 21 reels include 11 with the TOPIC ⬇️ motivational format. Zero of those broke 3K plays. Every week you keep that format running is a week of compounding under-reach.",
            },
            {
              n: "12",
              l: "Roofing-sales coaches launching this quarter",
              s: "Andy Elliott has 1.2M followers. The Roof Strategist has 78K. The category is consolidating. The window is closing.",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-bg p-8 md:p-12"
            >
              <div className="display text-5xl md:text-7xl text-yellow">{c.n}</div>
              <div className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-ink/50">
                {c.l}
              </div>
              <p className="mt-6 text-ink/60 text-sm leading-relaxed">{c.s}</p>
            </motion.div>
          ))}
        </div>

        {/* The hook */}
        <Reveal delay={0.2}>
          <div className="mt-32 max-w-4xl">
            <p className="serif text-3xl md:text-5xl leading-snug text-ink">
              You have a real business. <span className="text-ink/50">A real niche.</span> A real audience. A real handle.<br /><br />
              <span className="text-ink">The only thing missing</span> is the team that turns it into <span className="hot">a real brand</span>.
            </p>
          </div>
        </Reveal>

        {/* The big counter */}
        <Reveal delay={0.1}>
          <div className="mt-32 py-20 border-y border-[#1a1a1a] text-center">
            <span className="eyebrow">If we start Monday</span>
            <div className="mt-6 display text-7xl md:text-[12rem] leading-none">
              <Counter to={263000} prefix="$" />
            </div>
            <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-ink/60">
              Projected combined revenue from your coaching ladder + Prestige Closer Pipeline equity in your <span className="text-ink">first 12 months</span> after launch.
            </p>
            <p className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-ink/40">
              Conservative · backfilled from real benchmarks · before any virality
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
