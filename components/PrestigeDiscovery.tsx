"use client";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function PrestigeDiscovery() {
  return (
    <section id="vision" className="relative py-32 md:py-48 bg-charcoal grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Chapter 02</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            The hidden gold you&apos;re <span className="italic text-gold serif font-light">sitting on.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-ink/60 leading-relaxed">
            We researched @prestigerestorationsllc — your roofing company — and what we found changes everything.
          </p>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-12 gap-px bg-[#252220]">
          {/* Big left card */}
          <Reveal className="md:col-span-7 bg-charcoal p-10 md:p-16" delay={0.1}>
            <span className="eyebrow">Your actual business</span>
            <h3 className="display text-4xl md:text-6xl mt-6">
              A <span className="hot">multi-state</span> roofing contractor.
            </h3>
            <p className="mt-8 text-ink/70 text-lg leading-relaxed">
              Maryland. Pennsylvania. Virginia. Roofing + Solar + Siding. 692 posts. A &ldquo;Multi Sales Platform.&rdquo; A live careers page actively recruiting closers.
            </p>
            <p className="mt-6 serif text-2xl md:text-3xl text-ink">
              You don&apos;t need to <em>invent</em> a coach persona. You need to <span className="gold-underline">point the camera at the business you already run.</span>
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              {["MD", "VA", "PA", "Roofing", "Solar", "Siding", "Storm Restoration", "Insurance Claims"].map((tag) => (
                <span key={tag} className="font-mono text-[10px] tracking-[0.18em] uppercase px-3 py-2 border border-gold/40 text-gold/90">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Right stack */}
          <div className="md:col-span-5 grid grid-rows-3 gap-px bg-[#252220]">
            {[
              { v: 692, l: "Prestige posts published" },
              { v: 1558, l: "Followers on your company account" },
              { v: 0, l: "Times you appear on your own brand" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                className="bg-charcoal p-8 md:p-10 flex flex-col justify-center"
              >
                <div className="display text-5xl md:text-6xl text-ink">
                  <Counter to={s.v} />
                </div>
                <div className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-ink/50">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The competitor reframe */}
        <Reveal delay={0.2}>
          <div className="mt-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="eyebrow">Why this changes your niche</span>
              <h3 className="display text-4xl md:text-5xl mt-6">
                You don&apos;t compete with sales gurus.<br />
                <span className="text-gold serif italic font-light">You compete with Andy Elliott.</span>
              </h3>
              <p className="mt-8 text-ink/70 text-lg leading-relaxed">
                Roofing sales is a <span className="text-ink">$200B+</span> coaching market. Andy Elliott, The Roof Strategist, D2D Empire — they all teach it. None of them own a roofing company. <span className="hot">You do.</span>
              </p>
              <p className="mt-6 text-ink/70 text-lg leading-relaxed">
                That&apos;s not a marketing angle. That&apos;s a moat.
              </p>
            </div>
            <div className="border border-[#2a2724] p-8 md:p-12 bg-bg">
              <span className="eyebrow">The unfair advantage stack</span>
              <ul className="mt-6 space-y-5">
                {[
                  ["Real operating contractor", "MD, PA, VA"],
                  ["Active hiring pipeline", "Closers wanted, paid"],
                  ["Trained sales reps already", "Real case studies"],
                  ["Insurance-restoration sub-niche", "Premium ticket"],
                  ["Storm-damage market", "Recession-resistant"],
                ].map(([t, s], i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-gold mt-1.5">0{i + 1}</span>
                    <div>
                      <div className="text-ink text-base">{t}</div>
                      <div className="text-ink/50 text-sm">{s}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
