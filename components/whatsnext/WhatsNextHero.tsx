"use client";
import { motion } from "motion/react";

export default function WhatsNextHero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-bg grain pt-40 md:pt-48 pb-24">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-40 right-1/3 w-[900px] h-[900px] rounded-full bg-yellow/8 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-px bg-gold" />
          <span className="eyebrow">You&apos;re in · the launch plan</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="display text-[14vw] md:text-[120px] lg:text-[160px] leading-[0.85] tracking-tight"
        >
          What&apos;s <span className="italic text-gold serif font-light">next.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 max-w-3xl text-xl md:text-2xl text-ink/70 leading-relaxed"
        >
          You&apos;re locked in. The next 14 days run on <span className="text-ink">two parallel tracks</span> — what we need from you, what we ship for you. Below is the full playbook.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-20 grid grid-cols-2 gap-px bg-[#1a1a1a] border border-[#1a1a1a]"
        >
          <div className="bg-bg p-8 md:p-10">
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold mb-3">Track 01</div>
            <div className="display text-3xl md:text-5xl">From <span className="italic serif font-light text-ink/60">you.</span></div>
            <div className="mt-3 text-ink/60 text-sm">4 things we need to ship.</div>
          </div>
          <div className="bg-bg p-8 md:p-10">
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-yellow mb-3">Track 02</div>
            <div className="display text-3xl md:text-5xl">From <span className="italic serif font-light text-gold">us.</span></div>
            <div className="mt-3 text-ink/60 text-sm">12 deliverables across 4 systems.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
