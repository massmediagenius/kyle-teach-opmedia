"use client";
import { motion } from "motion/react";
import Reveal from "./Reveal";

const rows = [
  ["Niche", "Vague DMV sales coach", "Roofing/trades sales coach · $200B niche"],
  ["Bio", "5 ✖️ bullets · no CTA", "Identity → company → promise → proof → DM keyword"],
  ["Hooks", "GROWTH ⬇️", "Identity callouts · specific numbers · open loops"],
  ["Cadence", "Inconsistent · no documented schedule", "5 reels + 2 carousels + daily stories"],
  ["Reels share", "25%", "70% — the format that actually works for you"],
  ["Static images", "18 in 11 months · all failed", "Archived. New ones premium quote tiles only."],
  ["Highlights", "19 · all titled 'Highlights'", "6 themed: Start Here · Wins · Hiring · Playbook · Jobsites · Work With Me"],
  ["Hashtags", "#explore #vibe (noise)", "#roofingsales #stormrestoration #mdroofer (niche)"],
  ["Likes & views", "Hidden", "Visible — social proof restored"],
  ["CTA", "Contact me (2 of 36 posts)", "DM keyword on every reel + carousel"],
  ["Lead magnet", "None", "The Roofing Sales Playbook"],
  ["Email list", "None", "80+ subs/mo · 7-day nurture sequence"],
  ["Offer ladder", "None visible", "$0 → $97 → $497 → $2.5K → $10K · plus Closer Pipeline"],
  ["Story strategy", "Reshared Hormozi clips", "Daily 10-frame stack: hook → teach → proof → CTA"],
  ["Aesthetic", "Mixed motivational stock", "Editorial DMV operator · matte black + gold + yellow"],
  ["Named framework", "None", "The Roofing Sales Playbook"],
  ["Prestige integration", "Disconnected", "Dual-capture content engine · cross-tagged · pipeline"],
  ["90-day creator revenue", "$0 tracked", "$12K–22K/mo"],
];

export default function BeforeAfter() {
  return (
    <section className="relative py-32 md:py-48 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Chapter 07 · The transformation</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            18 things change <span className="italic text-gold serif font-light">on day one.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink/60 leading-relaxed">
            Side-by-side. No spin. Every line is a decision you&apos;ve already made — or one we&apos;ll make for you in Week 1.
          </p>
        </Reveal>

        <div className="mt-20 border border-[#1a1a1a]">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-12 gap-px bg-[#1a1a1a]">
            <div className="col-span-3 bg-bg p-4">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/40">Dimension</span>
            </div>
            <div className="col-span-4 bg-bg p-4">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-red-400/80">Before · today</span>
            </div>
            <div className="col-span-5 bg-bg p-4">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-yellow">After · with OPMEDIA</span>
            </div>
          </div>

          {rows.map(([k, before, after], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.025 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#1a1a1a] border-t border-[#1a1a1a] group"
            >
              <div className="col-span-1 md:col-span-3 bg-bg p-4 md:p-5 group-hover:bg-[#0d0d0d] transition-colors">
                <span className="text-ink/80 text-sm font-medium">{k}</span>
              </div>
              <div className="col-span-1 md:col-span-4 bg-bg p-4 md:p-5 group-hover:bg-[#0d0d0d] transition-colors">
                <span className="text-ink/50 text-sm line-through decoration-red-500/40">{before}</span>
              </div>
              <div className="col-span-1 md:col-span-5 bg-bg p-4 md:p-5 group-hover:bg-[#0d0d0d] transition-colors flex items-start gap-2">
                <span className="text-yellow mt-0.5">→</span>
                <span className="text-ink text-sm">{after}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
