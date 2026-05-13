"use client";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import Counter from "./Counter";

const problems = [
  {
    n: "01",
    title: "You once hit 259,160 plays. Then you stopped.",
    body:
      "In May 2024 you posted a 6-second wealth-education listicle (assets, income, tax, retirement, diversification) on a trending audio. It pulled <span class='text-yellow font-semibold'>259,160 plays</span>. A year later, your sales-recruitment reel — the one with &ldquo;$300k in a single year at my company&rdquo; — did <span class='text-yellow font-semibold'>151,523</span>. Then you went back to GROWTH ⬇️ and MOTION ⬇️. Your last 21 reels average <span class='text-red-400 font-semibold'>1,140 plays</span>. That&apos;s a 227× collapse — caused by you.",
    stat: { value: 259160, label: "your actual peak reel · May 2024" },
  },
  {
    n: "02",
    title: "Your own data screams what to do",
    body:
      "Every reel of yours that broke 2,500 plays shares three traits: concrete teaching or hard proof, a trending audio, and a listicle or contrast structure. Every reel under 2,000 plays uses the same TOPIC ⬇️ motivational template. 11 of your last 21 reels use that failed template. The signal isn&apos;t subtle.",
    stat: { value: 11, label: "of last 21 reels using the failed template" },
  },
  {
    n: "03",
    title: "Your $300K hook is sitting on a shelf",
    body:
      "In May 2025 you posted: <span class='text-yellow font-semibold'>&ldquo;People have made over $300k at my company in a single year all off of sales.&rdquo;</span> It pulled 151,523 plays. Every reel of yours that breaks 100K plays uses real numbers from inside Prestige. You have receipts. You stopped showing them.",
    stat: { value: 151523, label: "plays on the &ldquo;$300k&rdquo; reel · then dropped" },
  },
  {
    n: "04",
    title: "Your bio doesn't sell anything",
    body:
      "Five ✖️ bullets, zero proof, zero promise, zero call-to-action. The link goes to a cold website. There's no email capture, no DM keyword, no lead magnet. The 7,110 followers you have produce $0 of trackable revenue.",
    stat: { value: 19, label: "highlights — all titled &ldquo;Highlights&rdquo;" },
  },
  {
    n: "05",
    title: "Your handle says teacher. You never teach.",
    body:
      "You're @kyle.teacher. In your last 36 posts you taught literally zero things. No frameworks, no scripts, no breakdowns. The handle writes a check the content can't cash.",
    stat: { value: 0, label: "things taught in last 36 posts" },
  },
  {
    n: "06",
    title: "Your real proof is hidden",
    body:
      "You own @prestigerestorationsllc — a multi-state roofing contractor that's actively hiring closers. You don't appear in any of their last 12 posts. Your biggest unfair advantage isn't even on your camera roll.",
    stat: { value: 0, label: "appearances on your own company's feed" },
  },
];

export default function BrutalMirror() {
  return (
    <section id="diagnosis" className="relative py-32 md:py-48 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Chapter 01</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            Before we build the new you, <span className="italic text-gold serif font-light">we name what&apos;s broken.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink/60 leading-relaxed">
            This isn&apos;t opinion. It&apos;s a forensic read of your last 60 posts, 19 highlights, your bio, your stories, and your company account.
          </p>
        </Reveal>

        {/* The damning stat */}
        <Reveal delay={0.3}>
          <div className="mt-24 mb-24 py-16 border-y border-[#1a1a1a]">
            <div className="text-center">
              <span className="eyebrow">The single most damning data point</span>
              <div className="mt-6 display text-7xl md:text-9xl">
                <Counter to={227} suffix="×" />
              </div>
              <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-ink/70">
                Your peak reel hit <span className="text-yellow font-semibold">259,160 plays</span>. Your last 21 reels average <span className="text-yellow font-semibold">1,140</span>.<br />
                That&apos;s a <span className="hot">227× collapse</span> in your own performance — and you wrote the proof of what works <span className="gold-underline">in your own captions.</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Problem cards */}
        <div className="mt-16 space-y-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {problems.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg p-8 md:p-12 grid md:grid-cols-12 gap-6 md:gap-12 group hover:bg-[#0d0d0d] transition-colors"
            >
              <div className="md:col-span-2">
                <span className="font-mono text-xs tracking-[0.2em] text-gold">{p.n}</span>
              </div>
              <div className="md:col-span-6">
                <h3 className="serif text-2xl md:text-3xl text-ink mb-3">
                  {p.title}
                </h3>
                <p
                  className="text-ink/60 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </div>
              <div className="md:col-span-4 md:border-l md:border-[#1a1a1a] md:pl-8">
                <div className="display text-4xl md:text-5xl text-yellow">
                  <Counter to={p.stat.value} />
                </div>
                <div
                  className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-ink/50"
                  dangerouslySetInnerHTML={{ __html: p.stat.label }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verdict */}
        <Reveal delay={0.2}>
          <div className="mt-24 max-w-4xl">
            <span className="eyebrow">The verdict</span>
            <p className="mt-6 serif text-3xl md:text-4xl lg:text-5xl leading-snug text-ink/90">
              You don&apos;t need to post more. <span className="gold-underline">You need a complete identity reset</span>, a 4-pillar content system, an aesthetic that signals authority, and a funnel that converts the audience you already have.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
