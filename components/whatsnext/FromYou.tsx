"use client";
import { motion } from "motion/react";
import Reveal from "@/components/Reveal";
import { Phone, Calendar, Mic, Key } from "lucide-react";

const items = [
  {
    n: "01",
    icon: Phone,
    title: "Drop us your content library",
    sub: "Everything currently on your phone — we'll sort and edit.",
    bullets: [
      "Lifestyle clips (truck, home, family, weekends)",
      "B-roll from any jobsite or office moment",
      "Sales call energy / behind-the-scenes",
      "Photos of you, the team, the Prestige fleet",
      "Old reels, voice memos, anything raw",
    ],
    cta: "Send via AirDrop or shared Google Drive — link incoming.",
  },
  {
    n: "02",
    icon: Calendar,
    title: "Pick your weekly filming day",
    sub: "We assign you a personal filmer who comes to you, every week.",
    bullets: [
      "Tell us 1 day/week that works (best: same day every week)",
      "4–6 hour shoot window per session",
      "We bring lights, audio, gimbal, scripts",
      "Locations rotate: office, truck, jobsite, DMV city, rooftop",
      "Goal: 8–12 reels + carousel content per shoot day",
    ],
    cta: "Reply with your preferred day + start time.",
  },
  {
    n: "03",
    icon: Mic,
    title: "Book the 1-hour course strategy call",
    sub: "We map your sauce — what you give away free, what people pay for.",
    bullets: [
      "Free tier: lead magnet PDFs, intro DM funnels",
      "Mid tier: $97 course — your 7-day closer reset",
      "Premium tier: $497 storm-damage closer system",
      "High tier: $2.5K sprint + $10K 1:1",
      "Your community platform — where wins get posted",
    ],
    cta: "Pick a time this week — we'll record so nothing gets lost.",
  },
  {
    n: "04",
    icon: Key,
    title: "Grant team access",
    sub: "So we can operate at 100% without bottlenecking on you.",
    bullets: [
      "@kyle.teacher Instagram — Meta Business Suite invite",
      "Email forwarding for inbound DMs converted to leads",
      "Domain access (kyleteacher.com) for the new course site",
      "Stripe / payment processor for course checkout",
      "Calendly or scheduler for booked discovery calls",
    ],
    cta: "We'll send the exact invite links the day you confirm.",
  },
];

export default function FromYou() {
  return (
    <section className="relative py-24 md:py-32 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Track 01 · From you</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-4xl md:text-6xl lg:text-7xl max-w-4xl">
            Four things <span className="italic text-gold serif font-light">we need.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink/60 leading-relaxed">
            None of this should take more than a few hours of your week. The faster these four land, the faster the engine spins up.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-bg p-8 md:p-10 group hover:bg-[#0d0d0d] transition-colors"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs tracking-[0.18em] text-gold">{it.n}</span>
                  <Icon className="text-gold/60 group-hover:text-yellow transition-colors" size={28} strokeWidth={1.2} />
                </div>

                <h3 className="serif text-2xl md:text-3xl text-ink mb-3 leading-tight">
                  {it.title}
                </h3>
                <p className="text-ink/60 text-sm mb-6 leading-relaxed">{it.sub}</p>

                <ul className="space-y-2.5 mb-8">
                  {it.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-ink/70 leading-relaxed flex gap-3">
                      <span className="text-gold mt-1.5 shrink-0">▪</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-[#1a1a1a]">
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-yellow mb-2">
                    Action
                  </div>
                  <p className="text-sm text-ink/80">{it.cta}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
