"use client";
import { motion } from "motion/react";
import Reveal from "./Reveal";

const pillars = [
  {
    n: "01",
    pct: 40,
    name: "Teach",
    sub: "Roofing-sales tactics",
    color: "#F7C204",
    items: [
      "What to say when the homeowner says 'I need to think.'",
      "How to read an insurance adjuster's report.",
      "The 4-question knock that opens every storm door.",
      "Closing the deductible objection in 3 sentences.",
    ],
  },
  {
    n: "02",
    pct: 25,
    name: "Proof",
    sub: "Prestige receipts",
    color: "#C9A961",
    items: [
      "Rep commission screenshots (Day 1 → Day 90).",
      "Storm-damage before/after roofs.",
      "Adjuster supplement bumps (anonymized).",
      "Team huddle photos. Hire-day reels.",
    ],
  },
  {
    n: "03",
    pct: 20,
    name: "Story",
    sub: "Origin + leadership",
    color: "#F5F1EA",
    items: [
      "Broke → Prestige owner. Real numbers.",
      "Why roofing. Why MD. Why storm restoration.",
      "The year you almost quit.",
      "Family. Faith. Mentors. Mistakes.",
    ],
  },
  {
    n: "04",
    pct: 15,
    name: "Life",
    sub: "Operator lifestyle",
    color: "#0E3D40",
    items: [
      "The Prestige truck. The warehouse. The jobsites.",
      "DMV city footage. MD weekends.",
      "Solar + siding walkthroughs.",
      "Weekend life — kids, gym, family.",
    ],
  },
];

export default function ContentPillars() {
  return (
    <section className="relative py-32 md:py-48 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Chapter 05 · The content system</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            Four pillars. <span className="italic text-gold serif font-light">Zero filler.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink/60 leading-relaxed">
            Every post lives in exactly one pillar. We rotate them on a weekly cadence so your grid stops looking like a quote-tile farm and starts looking like a publication.
          </p>
        </Reveal>

        {/* Pillar bar visualization */}
        <Reveal delay={0.2}>
          <div className="mt-20 grid md:grid-cols-12 gap-1 h-16">
            {pillars.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-center justify-between px-4 md:px-6 col-span-12 md:col-span-[${p.pct / 100 * 12}] relative`}
                style={{
                  background: p.color,
                  gridColumn: `span ${Math.round(p.pct / 100 * 12)}`,
                  color: p.color === "#F5F1EA" || p.color === "#F7C204" || p.color === "#C9A961" ? "#000" : "#fff",
                }}
              >
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase font-semibold">{p.name}</span>
                <span className="font-mono text-[10px] tracking-[0.18em] font-semibold">{p.pct}%</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Pillar cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg p-8 md:p-10 group hover:bg-[#0d0d0d] transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs tracking-[0.18em] text-gold">{p.n}</span>
                <span className="font-mono text-xs tracking-[0.18em] text-ink/40">{p.pct}%</span>
              </div>
              <h3 className="display text-4xl md:text-5xl mt-6" style={{ color: p.color === "#0E3D40" ? "#fff" : p.color }}>
                {p.name}.
              </h3>
              <p className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-ink/40">
                {p.sub}
              </p>
              <ul className="mt-8 space-y-3">
                {p.items.map((item, j) => (
                  <li key={j} className="text-sm text-ink/70 leading-relaxed flex gap-3">
                    <span className="text-gold mt-1.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
