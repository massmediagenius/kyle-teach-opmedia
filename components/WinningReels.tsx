"use client";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import Counter from "./Counter";

type Winner = {
  plays: number;
  code: string;
  date: string;
  duration: string;
  type: string;
  caption: string;
  why: string[];
  videoSrc: string;
};

const winners: Winner[] = [
  {
    plays: 259160,
    code: "C7FbMhCrYxG",
    date: "May 17, 2024",
    duration: "6.6s",
    type: "Wealth education listicle",
    caption:
      "📈Value appreciation: Assets have the potential to increase in value over time… 💵Income Generation… ⚡️Tax benefits… 🔑Retirement Planning… 🏠Diversification… Tap in ✌️",
    why: ["Listicle of 5 concrete benefits", "Trending slowed-reverb audio", "Topic-led, not motivation-led"],
    videoSrc: "/reels/hit_259k.mp4",
  },
  {
    plays: 151523,
    code: "DJUjtWnJT0Z",
    date: "May 6, 2025",
    duration: "6.6s",
    type: "Sales recruitment + dollar proof",
    caption:
      "Sales ⬇️ … People have made over $300k at my company in a single year all off of sales… all you need is: 📈 positive mindset, ⚡️ good energy, 📱 cell phone, 🚙 vehicle, 💬 willing to learn. ❗️LOCK IN PEOPLE THE TIME IS NOW❗️",
    why: ["Hard dollar proof ($300K)", "Identity-call recruitment", "Sourced trending audio"],
    videoSrc: "/reels/hit_151k.mp4",
  },
  {
    plays: 9745,
    code: "C6jzAwiJe5-",
    date: "May 4, 2024",
    duration: "9.2s",
    type: "Mindset · longer cut",
    caption:
      "Your MENTALITY is your greatest asset. With a positive mindset you can conquer any challenge, over come any obstacle, and achieve any dream. (ACTION = EXECUTION) (FREE MIND)",
    why: ["Longer format = more retention", "First-person POV", "His own original audio"],
    videoSrc: "/reels/hit_9k.mp4",
  },
];

function ReelPlayer({ src }: { src: string }) {
  return (
    <div className="relative w-full overflow-hidden bg-black border border-[#2a2724] group" style={{ aspectRatio: "9 / 16" }}>
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default function WinningReels() {
  return (
    <section className="relative py-32 md:py-48 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Chapter 02.5 · The proof in your own catalog</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            You don&apos;t need a new playbook. <span className="italic text-gold serif font-light">You wrote one.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-ink/60 leading-relaxed">
            We pulled your last 24 reels. Three of them broke through. The other 21 average <span className="text-ink">1,140 plays</span>. The difference isn&apos;t mystery — it&apos;s pattern. And the pattern is sitting in your own analytics.
          </p>
        </Reveal>

        {/* The three winners */}
        <div className="mt-20 grid md:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {winners.map((w, i) => (
            <motion.div
              key={w.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] tracking-[0.18em] text-gold">
                  HIT 0{i + 1}
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/40">
                  {w.date}
                </span>
              </div>

              <div className="mt-6">
                <div className={`display ${i === 0 ? "text-6xl md:text-7xl text-yellow" : i === 1 ? "text-5xl md:text-6xl text-gold" : "text-4xl md:text-5xl text-ink"}`}>
                  <Counter to={w.plays} />
                </div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-ink/50">
                  plays · {w.duration}
                </div>
              </div>

              <div className="mt-6 pb-6 border-b border-[#1a1a1a]">
                <span className="serif italic text-xl text-ink">{w.type}</span>
              </div>

              <div className="mt-6">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/40 block mb-3">
                  Press play ↓
                </span>
                <ReelPlayer src={w.videoSrc} />
                <a
                  href={`https://www.instagram.com/reel/${w.code}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.18em] uppercase text-gold/70 hover:text-gold transition-colors"
                >
                  Open on Instagram ↗
                </a>
              </div>

              <div className="mt-6 flex-1">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/40">
                  Caption · quoted verbatim
                </span>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                  &ldquo;{w.caption}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold">
                  Why it worked
                </span>
                <ul className="mt-3 space-y-2">
                  {w.why.map((reason, j) => (
                    <li key={j} className="text-xs text-ink/70 flex gap-2">
                      <span className="text-yellow">▪</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The pattern */}
        <Reveal delay={0.2}>
          <div className="mt-24 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="eyebrow">The pattern across all three</span>
              <h3 className="display text-3xl md:text-5xl mt-6 leading-tight">
                Concrete teaching.<br />
                Trending audio.<br />
                <span className="italic serif text-gold font-light">Numbers in the caption.</span>
              </h3>
              <p className="mt-8 text-ink/70 text-lg leading-relaxed">
                That&apos;s the entire formula. Your audience rewarded it with <span className="text-ink font-semibold">420,000+ plays</span> across three posts. Then you switched back to <code className="text-ink/70 font-mono text-base">GROWTH ⬇️</code> and lost 99.7% of your reach.
              </p>
            </div>

            <div className="border border-[#2a2724] bg-charcoal p-8 md:p-10">
              <span className="eyebrow">OPMEDIA&apos;s play</span>
              <p className="mt-6 serif text-2xl md:text-3xl text-ink leading-snug">
                We don&apos;t reinvent your voice. <span className="gold-underline">We rebuild around your proven hits.</span>
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  ["Replicate the wealth listicle", "But with roofing-sales numbers — adjuster bumps, commission tiers, deal stack-ups."],
                  ["Replicate the $300K recruitment hook", "Make it weekly. Quote real Prestige rep paychecks. Convert viewers → applicants."],
                  ["Replicate the long mindset cut", "9-second versions of your &ldquo;30s hit different&rdquo; energy — paired with closing wisdom."],
                ].map(([t, s], i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-gold mt-1">0{i + 1}</span>
                    <div>
                      <div className="text-ink text-sm font-semibold">{t}</div>
                      <div className="text-ink/60 text-xs mt-1 leading-relaxed">{s}</div>
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
