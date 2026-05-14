"use client";
import { motion } from "motion/react";

export default function LockIn() {
  return (
    <section className="relative py-24 md:py-40 bg-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-gold/5 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">Day 1 starts when you do</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 display text-5xl md:text-7xl lg:text-8xl leading-[0.9]"
        >
          Send us your <span className="italic text-gold serif font-light">filming day.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto text-lg md:text-xl text-ink/60 leading-relaxed"
        >
          One reply. The filmer is on the calendar within 24 hours. The first reel ships within 14 days. Everything else compounds from there.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a] max-w-3xl mx-auto"
        >
          {[
            ["24 hrs", "Filmer assigned + first shoot scheduled"],
            ["7 days", "Brand rebuild + first batch shot"],
            ["14 days", "First new reel live on your feed"],
          ].map(([k, v], i) => (
            <div key={i} className="bg-bg p-8 text-center">
              <div className="display text-3xl md:text-4xl text-yellow">{k}</div>
              <div className="mt-3 text-ink/60 text-sm leading-relaxed">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-32 border-t border-[#1a1a1a] pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="OPMEDIA" className="w-8 h-8 object-contain" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/50">
              OPMEDIA × KYLE TEACH
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/30">
            Launch plan · May 2026
          </span>
        </div>
      </div>
    </section>
  );
}
