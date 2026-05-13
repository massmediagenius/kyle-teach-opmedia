"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-bg grain">
      {/* Background skyline glow */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-40"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-yellow/10 blur-[180px]" />
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-black via-black/60 to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-40 md:pt-48 pb-24">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-px bg-gold" />
          <span className="eyebrow">OPMEDIA × Kyle Teach</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="display text-[14vw] md:text-[120px] lg:text-[160px] leading-[0.85] tracking-tight"
        >
          You have <span className="italic text-gold serif font-light">every</span>
          <br />
          ingredient.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 max-w-2xl text-xl md:text-2xl text-ink/70 leading-relaxed"
        >
          A real roofing company across the <span className="text-ink">DMV</span>. A defensible local market. A handle that says <span className="text-ink">&ldquo;teacher.&rdquo;</span> A $200B niche waiting for you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 max-w-2xl text-xl md:text-2xl"
        >
          You once hit <span className="hot">259,160 plays</span> on a single reel. Then you quit on yourself.
        </motion.p>

        {/* Marquee stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a] border border-[#1a1a1a]"
        >
          {[
            { k: "7,110", v: "followers today" },
            { k: "259K", v: "your peak reel plays" },
            { k: "1,140", v: "your last 21 reels avg" },
            { k: "$200B", v: "niche on the table" },
          ].map((s, i) => (
            <div key={i} className="bg-bg p-6 md:p-8">
              <div className="display text-3xl md:text-5xl text-ink">{s.k}</div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-ink/50">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-6 md:left-10 right-6 md:right-10 flex items-end justify-between"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/40">
            scroll · see what&apos;s broken
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
