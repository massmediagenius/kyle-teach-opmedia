"use client";
import { motion } from "motion/react";
import Reveal from "@/components/Reveal";
import { Camera, Scissors, Megaphone, FileText, Layout, Calendar, Globe, Magnet, MessageCircle, BookOpen, Users, Trophy } from "lucide-react";

const tracks = [
  {
    track: "01",
    label: "The content engine",
    sub: "Your weekly machine — a 3-person team dedicated to your feed.",
    color: "#F7C204",
    items: [
      { icon: Camera, t: "Personal Filmer", s: "Assigned to you. On-site weekly. Brings gear, lights, audio, scripts." },
      { icon: Scissors, t: "Personal Editor", s: "Cuts your raw footage into reels + carousels in your brand aesthetic." },
      { icon: Megaphone, t: "Social Media Manager", s: "Schedules posts, replies to DMs, manages stories, tracks performance." },
      { icon: FileText, t: "Weekly script pack", s: "5–7 reel scripts written in your voice — delivered before each shoot." },
    ],
  },
  {
    track: "02",
    label: "The brand rebuild",
    sub: "Full identity overhaul — what you saw in the deck, executed.",
    color: "#C9A961",
    items: [
      { icon: Layout, t: "Instagram rebrand", s: "Bio, highlights (6 themed), pinned posts, profile pic, account type swap." },
      { icon: Calendar, t: "Content calendar", s: "30 days mapped — 5 reels/week + 2 carousels + daily stories." },
      { icon: Layout, t: "Grid template system", s: "Every post designed to fit a recurring 9-tile rhythm. Your grid becomes a magazine." },
    ],
  },
  {
    track: "03",
    label: "The funnel build",
    sub: "Audience → DMs → email → buyers. Built end-to-end.",
    color: "#0E3D40",
    items: [
      { icon: Globe, t: "Course website", s: "Custom site at your domain — sales page, checkout, member portal." },
      { icon: Magnet, t: "Free lead magnets", s: "Branded PDFs (The Roofing Sales Playbook, supplement scripts) capturing emails." },
      { icon: MessageCircle, t: "DM auto-funnel", s: "Keywords like ROOF / HIRE trigger instant PDF delivery + email capture in DMs." },
      { icon: FileText, t: "Email nurture sequence", s: "7-day automated sequence converting free subs to $97 buyers." },
    ],
  },
  {
    track: "04",
    label: "The product build",
    sub: "After our 1-hour sauce call — we package your knowledge.",
    color: "#F5F1EA",
    items: [
      { icon: BookOpen, t: "Course curriculum + scripts", s: "Module structure designed, scripts written, you record — we edit + publish." },
      { icon: Users, t: "Student community", s: "Private community platform launched (Skool / Circle / Discord — your pick)." },
      { icon: Trophy, t: "Win-capture system", s: "Students post wins → we screenshot + repurpose into Kyle's feed as proof content." },
    ],
  },
];

export default function FromUs() {
  return (
    <section className="relative py-24 md:py-32 bg-charcoal grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Track 02 · From us</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-4xl md:text-6xl lg:text-7xl max-w-5xl">
            Four systems. <span className="italic text-gold serif font-light">Fourteen deliverables.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink/60 leading-relaxed">
            Your team is assembled. Each track has named roles, named outputs, named owners. Here&apos;s what gets shipped.
          </p>
        </Reveal>

        <div className="mt-20 space-y-12 md:space-y-16">
          {tracks.map((track, ti) => (
            <motion.div
              key={track.track}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: ti * 0.05 }}
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                {/* Track header */}
                <div className="md:col-span-4 md:sticky md:top-32">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-gold">SYSTEM {track.track}</span>
                  </div>
                  <h3 className="display text-3xl md:text-5xl leading-[0.95]" style={{ color: track.color }}>
                    {track.label}.
                  </h3>
                  <p className="mt-4 text-ink/60 text-base md:text-lg leading-relaxed">
                    {track.sub}
                  </p>
                </div>

                {/* Track items */}
                <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-[#252220] border border-[#252220]">
                  {track.items.map((it, j) => {
                    const Icon = it.icon;
                    return (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.1 + j * 0.06 }}
                        className="bg-charcoal p-6 md:p-7 group hover:bg-bg transition-colors"
                      >
                        <Icon className="mb-4 text-gold/70 group-hover:text-yellow transition-colors" size={24} strokeWidth={1.2} />
                        <h4 className="serif text-lg md:text-xl text-ink mb-2 leading-tight">{it.t}</h4>
                        <p className="text-sm text-ink/60 leading-relaxed">{it.s}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
