"use client";
import { motion } from "motion/react";
import Reveal from "./Reveal";

const palette = [
  { name: "Matte Black", hex: "#0A0A0A", text: "white" },
  { name: "Charcoal", hex: "#1C1C1C", text: "white" },
  { name: "Ivory", hex: "#F5F1EA", text: "black" },
  { name: "Brushed Gold", hex: "#C9A961", text: "black" },
  { name: "Electric Yellow", hex: "#F7C204", text: "black" },
  { name: "Deep Teal", hex: "#0E3D40", text: "white" },
];

export default function NewBrand() {
  return (
    <section className="relative py-32 md:py-48 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Chapter 03</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            Meet the <span className="italic text-gold serif font-light">new you.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink/60 leading-relaxed">
            One archetype. One look. One promise. Built from your real assets, not a template.
          </p>
        </Reveal>

        {/* The archetype */}
        <Reveal delay={0.1}>
          <div className="mt-24 grid md:grid-cols-12 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
            <div className="md:col-span-7 bg-bg p-10 md:p-16">
              <span className="eyebrow">Your archetype</span>
              <h3 className="display text-4xl md:text-6xl lg:text-7xl mt-6 leading-[0.95]">
                The Roofing<br />
                Sales Operator<br />
                <span className="italic serif font-light text-gold">who teaches.</span>
              </h3>
              <p className="mt-8 text-ink/70 text-lg leading-relaxed">
                Not a guru with a rented Lambo. Not a corporate trainer with no skin in the game. The MD/PA contractor with the truck, the crew, the deals, and the playbook.
              </p>
              <p className="mt-6 serif text-2xl text-ink">
                Cardone × Pineda × Andy Elliott — with a DMV accent and receipts.
              </p>
            </div>
            <div className="md:col-span-5 bg-charcoal p-10 md:p-16 flex flex-col justify-center">
              <span className="eyebrow">Your new tagline</span>
              <p className="display text-4xl md:text-5xl mt-6 leading-tight">
                The Roofing<br />Sales <span className="hot">Playbook</span>.
              </p>
              <p className="mt-8 font-mono text-xs tracking-[0.18em] uppercase text-ink/50">
                Closers, made. Not born.<br />Built in the DMV.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Bio rewrite */}
        <Reveal delay={0.2}>
          <div className="mt-24 grid md:grid-cols-2 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
            <div className="bg-bg p-10 md:p-12">
              <div className="flex items-center justify-between mb-6">
                <span className="eyebrow text-ink/40">Before</span>
                <span className="font-mono text-[10px] text-red-400">FAILS THE ARRIVAL TEST</span>
              </div>
              <pre className="font-mono text-sm text-ink/60 whitespace-pre-wrap leading-relaxed">
{`✖️(DMV) Area
✖️Teaching Sales
✖️Business Owner
✖️Real Estate Investor
✖️Helping People Reach Goals
⬇️ THE CULTURE ⬇️
@prestigerestorationsllc`}
              </pre>
              <p className="mt-6 text-ink/40 text-sm">
                Five bullets. Zero proof. Zero promise. Zero CTA.
              </p>
            </div>
            <div className="bg-[#0d0d0d] p-10 md:p-12 border-l-2 border-gold">
              <div className="flex items-center justify-between mb-6">
                <span className="eyebrow">After</span>
                <span className="font-mono text-[10px] text-yellow">PROOF → PROMISE → CTA</span>
              </div>
              <pre className="font-mono text-sm whitespace-pre-wrap leading-relaxed text-ink">
{`Kyle Teach · Roofing Sales Coach
+ Owner @prestigerestorationsllc
I train closers in the trades — no
degree, no excuses.
$1.4M+ closed by my reps this year ↓
🔗 Free: "The Roofing Sales Playbook"`}
              </pre>
              <p className="mt-6 text-ink/60 text-sm">
                Identity → company → promise → proof number → DM keyword.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Color palette */}
        <Reveal delay={0.2}>
          <div className="mt-32">
            <span className="eyebrow">Your visual identity</span>
            <h3 className="display text-3xl md:text-5xl mt-4 mb-12">
              The palette. <span className="italic serif text-gold font-light">Editorial menswear meets MD operator.</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
              {palette.map((c, i) => (
                <motion.div
                  key={c.hex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="aspect-square flex flex-col justify-end p-5"
                  style={{ background: c.hex, color: c.text === "white" ? "#fff" : "#000" }}
                >
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-70">
                    {c.hex}
                  </div>
                  <div className="text-xs md:text-sm mt-1 font-medium">{c.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Mockup gallery */}
        <Reveal delay={0.1}>
          <div className="mt-32">
            <span className="eyebrow">Sample creative · AI mockups</span>
            <h3 className="display text-3xl md:text-5xl mt-4 mb-12">
              What your content will <span className="italic serif text-gold font-light">actually look like.</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[
                { src: "/01_reel_cover_dmv_hero.jpg", label: "Reel cover — rooftop hero" },
                { src: "/02_carousel_slide_dark_editorial.jpg", label: "Carousel — editorial dark" },
                { src: "/09_reel_hook_captioned.jpg", label: "Reel hook — caption styling" },
                { src: "/08_carousel_hook_identity.jpg", label: "Carousel — identity callout" },
                { src: "/07_lifestyle_broll_office.jpg", label: "B-roll — operator at work" },
                { src: "/11_quote_tile_ivory.jpg", label: "Quote tile — premium ivory" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[4/5] overflow-hidden bg-charcoal group cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.src}
                    alt={m.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] tracking-[0.18em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
