"use client";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import Counter from "./Counter";

const tiers = [
  { tier: "Free", name: "The Roofing Sales Playbook", desc: "1-page PDF · DM keyword ROOF", price: "$0", color: "#1c1c1c" },
  { tier: "Tier 1", name: "7-Day Closer Reset", desc: "Email sequence + group call", price: "$97", color: "#0E3D40" },
  { tier: "Tier 2", name: "Storm-Damage Closer's System", desc: "Self-paced video course", price: "$497", color: "#C9A961" },
  { tier: "Tier 3", name: "30-Day Roofing Sales Sprint", desc: "Group cohort · weekly calls", price: "$2,500", color: "#F7C204" },
  { tier: "Tier 4", name: "Kyle 1:1 — Closer or Owner", desc: "90-day private mentorship", price: "$10,000", color: "#F5F1EA" },
  { tier: "Tier 5", name: "Closer Pipeline (hidden line)", desc: "Coaching audience → Prestige hires", price: "$$$ ongoing", color: "#0a0a0a" },
];

const layers = [
  { l: "1", t: "AWARENESS", b: "Reels + Carousels · 5×/week" },
  { l: "2", t: "INTRIGUE", b: "Bio · 6 highlights · 3 pinned posts" },
  { l: "3", t: "CAPTURE", b: "DM keyword → free PDF → email list" },
  { l: "4", t: "NURTURE", b: "7-day email + daily stories" },
  { l: "5", t: "CONVERT", b: "$97 → $497 → $2.5K → $10K ladder" },
  { l: "6", t: "RETAIN", b: "Community · referrals · Closer Pipeline" },
];

export default function Funnel() {
  return (
    <section id="funnel" className="relative py-32 md:py-48 bg-charcoal grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Chapter 06 · Content → dollars</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            How every reel <span className="italic text-gold serif font-light">becomes money.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink/60 leading-relaxed">
            Your audience already exists. They just have nowhere to spend. We build the funnel that gives them five different doors — plus a sixth, hidden door that funnels recruits into Prestige.
          </p>
        </Reveal>

        {/* Layers */}
        <Reveal delay={0.2}>
          <div className="mt-20 space-y-1">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.l}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-12 gap-4 items-center group"
              >
                <div className="col-span-1 font-mono text-xs text-gold">0{layer.l}</div>
                <div className="col-span-4 md:col-span-3 font-mono text-sm md:text-base tracking-[0.18em] uppercase font-semibold text-ink">
                  {layer.t}
                </div>
                <div className="col-span-7 md:col-span-7 text-ink/60 text-sm md:text-base">
                  {layer.b}
                </div>
                <div className="hidden md:flex col-span-1 justify-end">
                  <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, delay: i * 0.07 + 0.2 }}
                    className="w-8 h-px bg-gold"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Offer ladder */}
        <Reveal delay={0.1}>
          <div className="mt-32">
            <span className="eyebrow">The offer ladder</span>
            <h3 className="display text-3xl md:text-5xl mt-4 mb-12 max-w-3xl">
              Six tiers. Five revenue lines. <span className="italic serif text-gold font-light">One hidden weapon.</span>
            </h3>

            <div className="space-y-2">
              {tiers.map((t, i) => (
                <motion.div
                  key={t.tier}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="grid grid-cols-12 gap-4 md:gap-6 items-stretch border border-[#2a2724] group hover:border-gold/60 transition-colors"
                  style={{
                    background: i === tiers.length - 1 ? "#0a0a0a" : "transparent",
                  }}
                >
                  <div
                    className="col-span-12 md:col-span-2 flex items-center justify-center py-4 md:py-6 font-mono text-xs md:text-sm tracking-[0.18em] uppercase font-semibold"
                    style={{
                      background: t.color,
                      color: ["#F7C204", "#C9A961", "#F5F1EA"].includes(t.color) ? "#000" : "#fff",
                    }}
                  >
                    {t.tier}
                  </div>
                  <div className="col-span-8 md:col-span-7 py-4 md:py-6 px-4 md:px-6">
                    <div className="serif text-xl md:text-2xl text-ink">{t.name}</div>
                    <div className="text-ink/50 text-sm mt-1">{t.desc}</div>
                  </div>
                  <div className="col-span-4 md:col-span-3 py-4 md:py-6 px-4 md:px-6 flex items-center justify-end">
                    <div className="display text-3xl md:text-4xl text-gold">{t.price}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* The math */}
        <Reveal delay={0.2}>
          <div className="mt-32 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow">The 90-day projection</span>
              <h3 className="display text-4xl md:text-6xl mt-6 leading-tight">
                <span className="hot">$12,000<span className="text-ink/30">–</span>$22,000</span><br />
                <span className="text-ink/70 text-3xl md:text-4xl serif italic font-light">per month.</span>
              </h3>
              <p className="mt-8 text-ink/70 text-lg leading-relaxed">
                Conservative monthly run-rate by Day 90. Includes the offer ladder ($97 → $10K) plus Closer Pipeline ownership equity on every closer your coaching brand sources for Prestige.
              </p>
              <p className="mt-6 text-ink/50 text-sm">
                Assumes 2K reach growth/month, 8% email-to-buy, 1–2 hires/month at quota.
              </p>
            </div>

            <div className="border border-[#2a2724] bg-bg p-10 md:p-12">
              <div className="space-y-8">
                {[
                  { label: "Tier 1 · $97 tripwire", value: 582, format: "$" },
                  { label: "Tier 2 · $497 course", value: 750, format: "$" },
                  { label: "Tier 3 · $2.5K sprint", value: 2500, format: "$" },
                  { label: "Tier 4 · $10K 1:1", value: 3300, format: "$" },
                  { label: "Tier 5 · Prestige pipeline", value: 8500, format: "$", hot: true },
                ].map((row, i) => (
                  <div key={i} className="flex items-baseline justify-between border-b border-[#2a2724] pb-3">
                    <span className="text-ink/70 text-sm">{row.label}</span>
                    <span className={`display text-2xl md:text-3xl ${row.hot ? "text-yellow" : "text-ink"}`}>
                      <Counter to={row.value} prefix={row.format} />
                    </span>
                  </div>
                ))}
                <div className="flex items-baseline justify-between pt-2">
                  <span className="font-mono text-xs tracking-[0.18em] uppercase text-gold">Monthly total</span>
                  <span className="display text-3xl md:text-4xl text-gold">
                    <Counter to={15632} prefix="$" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
