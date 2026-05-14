"use client";
import { motion } from "motion/react";
import Reveal from "@/components/Reveal";

const days = [
  {
    d: "Day 1",
    label: "Lock-in",
    items: ["Sign the agreement", "You send content library + filming day", "We send Instagram + tool access invites"],
  },
  {
    d: "Day 2–3",
    label: "Strategy + intake",
    items: ["1-hour course sauce call", "Brand kit finalized", "Filmer + editor + SMM assigned and intro'd"],
  },
  {
    d: "Day 4–5",
    label: "Build",
    items: ["Instagram fully rebranded (bio, highlights, pinned)", "First reel scripts delivered", "Lead magnet PDF designed"],
  },
  {
    d: "Day 6–7",
    label: "First shoot",
    items: ["Filmer on-site at your DMV location", "8–12 reels filmed in one session", "First batch ready for edit"],
  },
  {
    d: "Day 8–10",
    label: "Funnel + course foundation",
    items: ["Course website live (skeleton)", "DM auto-funnel armed (ROOF / HIRE keywords)", "Email nurture sequence written"],
  },
  {
    d: "Day 11–14",
    label: "Launch week",
    items: ["First new reel ships to your feed", "Community platform opens", "First lead magnet downloads tracked"],
  },
];

export default function Timeline() {
  return (
    <section className="relative py-24 md:py-32 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">The 14-day map</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-4xl md:text-6xl lg:text-7xl max-w-4xl">
            From signed to <span className="italic text-gold serif font-light">shipping.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink/60 leading-relaxed">
            Two weeks from lock-in to your first new reel going live on the rebuilt account.
          </p>
        </Reveal>

        <div className="mt-20 relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {days.map((day, i) => (
              <motion.div
                key={day.d}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-3 w-3 h-3 -translate-x-1/2 rounded-full bg-yellow ring-4 ring-bg z-10" />

                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold mb-2">{day.d}</div>
                  <h3 className="display text-2xl md:text-4xl text-ink mb-4">{day.label}.</h3>
                </div>

                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:row-start-1 md:pr-12 md:text-right"}`}>
                  <ul className="space-y-2.5">
                    {day.items.map((item, j) => (
                      <li key={j} className={`text-sm text-ink/70 leading-relaxed flex gap-2.5 ${i % 2 === 0 ? "" : "md:flex-row-reverse md:text-right"}`}>
                        <span className="text-gold shrink-0">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
