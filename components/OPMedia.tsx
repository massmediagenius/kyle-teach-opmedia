"use client";
import { motion } from "motion/react";
import Reveal from "./Reveal";

const phases = [
  {
    n: "Week 1",
    title: "Reset",
    items: [
      "Profile audit + Creator account switch",
      "Bio rewrite + new pinned posts",
      "Lead magnet design (Roofing Sales Playbook PDF)",
      "DM-keyword automation (ROOF + HIRE)",
      "Email capture page + 7-day sequence",
      "Highlight archive + 6 new themed covers",
      "Content batch shoot — 10 reels in a day",
    ],
  },
  {
    n: "Week 2",
    title: "Launch",
    items: [
      "Origin reel goes live + scheduled cadence",
      "Daily 10-frame story stack starts",
      "First DM keyword triggers tracked",
      "First email sequence sends",
      "Engagement protocol (30 min/day)",
    ],
  },
  {
    n: "Week 3",
    title: "Accelerate",
    items: [
      "$97 'Closer Reset' tripwire launches",
      "Affiliate program opens",
      "First Prestige cross-tagged content",
      "Closer Pipeline keyword (HIRE) goes live",
      "Hook + format A/B tests",
    ],
  },
  {
    n: "Week 4",
    title: "Double Down",
    items: [
      "$2,500 Roofing Sales Sprint cohort launches",
      "Day-1 → Day-90 rep transformation post",
      "Testimonial collection from $97 buyers",
      "30-day review · double down on what worked",
      "First Tier 5 hire placed at Prestige",
    ],
  },
];

const services = [
  ["Strategy", "The brand, niche, and offer ladder you just read."],
  ["Content", "5 reels + 2 carousels + daily stories. Shot, edited, captioned, scheduled."],
  ["Design", "Aesthetic system. Templates. Highlight covers. Pinned posts. Every frame on-brand."],
  ["Funnel", "Lead magnets, DM automation, email sequences, landing pages, tracking."],
  ["Growth", "Hook A/B testing. Format experiments. Posting time optimization. Weekly review."],
  ["Reporting", "Sunday dashboard. New followers, DMs, list growth, dollars in."],
];

export default function OPMedia() {
  return (
    <section className="relative py-32 md:py-48 bg-charcoal grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Chapter 08 · The team behind the build</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            This is what <span className="italic text-gold serif font-light">OPMEDIA</span> does.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-ink/60 leading-relaxed">
            We don&apos;t hand you a strategy doc and ghost. We are your strategy, content, design, funnel, and growth team — built to execute the playbook you just read in the next 30 days.
          </p>
        </Reveal>

        {/* What we do */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#252220] border border-[#252220]">
          {services.map(([t, s], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="bg-charcoal p-8 md:p-10 group hover:bg-bg transition-colors"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-[10px] tracking-[0.18em] text-gold">0{i + 1}</span>
                <div className="h-px flex-1 bg-gold/20" />
              </div>
              <h4 className="serif text-3xl text-ink mb-3">{t}</h4>
              <p className="text-ink/60 text-sm leading-relaxed">{s}</p>
            </motion.div>
          ))}
        </div>

        {/* 30-day timeline */}
        <Reveal delay={0.2}>
          <div className="mt-32">
            <span className="eyebrow">Your first 30 days</span>
            <h3 className="display text-3xl md:text-5xl mt-4 mb-12 max-w-3xl">
              By Day 30 you have a <span className="italic serif text-gold font-light">working funnel</span>, paying customers, and a feed that finally makes sense.
            </h3>

            <div className="relative">
              <div className="absolute left-0 right-0 top-[26px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="grid md:grid-cols-4 gap-6 md:gap-8">
                {phases.map((p, i) => (
                  <motion.div
                    key={p.n}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="w-3 h-3 rounded-full bg-yellow mx-auto mb-6 relative z-10 ring-4 ring-charcoal" />
                    <div className="text-center mb-6">
                      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/40">{p.n}</div>
                      <div className="display text-3xl mt-2 text-ink">{p.title}.</div>
                    </div>
                    <ul className="space-y-3">
                      {p.items.map((item, j) => (
                        <li key={j} className="text-sm text-ink/70 leading-relaxed flex gap-2">
                          <span className="text-gold mt-1 shrink-0">▪</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
