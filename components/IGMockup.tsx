"use client";
import { motion } from "motion/react";
import { useState } from "react";
import Reveal from "./Reveal";
import { Grid3x3, Bookmark, UserSquare2, Play, ChevronLeft, MoreHorizontal } from "lucide-react";

type Variant = "before" | "after";

type Highlight = { label: string; cover: string; muted?: boolean };
type Tile = { src: string | null; text?: string; isReel?: boolean; plays?: string };
type ProfileData = {
  username: string;
  name: string;
  bio: string;
  link: string;
  posts: number;
  followers: string;
  following: number;
  highlights: Highlight[];
  grid: Tile[];
};

const beforeData: ProfileData = {
  username: "kyle.teacher",
  name: "Kyle Teach",
  bio: "✖️(DMV) Area\n✖️Teaching Sales\n✖️Business Owner\n✖️Real Estate Investor\n✖️Helping People Reach Goals\n⬇️ THE CULTURE ⬇️\n@prestigerestorationsllc",
  link: "kyleteacher.com",
  posts: 481,
  followers: "7,110",
  following: 429,
  highlights: [
    { label: "Highlights", cover: "/kyle_real/hl_1.jpg" },
    { label: "Highlights", cover: "/kyle_real/hl_2.jpg" },
    { label: "Highlights", cover: "/kyle_real/hl_3.jpg" },
    { label: "Highlights", cover: "/kyle_real/hl_4.jpg" },
    { label: "Highlights", cover: "/kyle_real/hl_5.jpg" },
  ],
  grid: [
    { src: "/kyle_real/post_1.jpg" },
    { src: "/kyle_real/post_2.jpg" },
    { src: "/kyle_real/post_3.jpg" },
    { src: "/kyle_real/post_4.jpg" },
    { src: "/kyle_real/post_5.jpg" },
    { src: "/kyle_real/post_6.jpg" },
    { src: "/kyle_real/post_7.jpg" },
    { src: "/kyle_real/post_8.jpg" },
    { src: "/kyle_real/post_9.jpg" },
  ],
};

const afterData: ProfileData = {
  username: "kyle.teacher",
  name: "Kyle Teach",
  bio: "Roofing Sales Coach + Owner @prestigerestorationsllc\nI train closers in the trades — no degree, no excuses.\n$1.4M+ closed by my reps this year ↓",
  link: "kyleteach.co/playbook",
  posts: 327,
  followers: "67.4K",
  following: 312,
  highlights: [
    { label: "START HERE", cover: "/01_reel_cover_dmv_hero.jpg" },
    { label: "WINS", cover: "/10_before_after_student_win.jpg" },
    { label: "HIRING", cover: "/12_lifestyle_operator_real_estate.jpg" },
    { label: "PLAYBOOK", cover: "/02_carousel_slide_dark_editorial.jpg" },
    { label: "JOBSITES", cover: "/07_lifestyle_broll_office.jpg" },
    { label: "WORK W/ ME", cover: "/11_quote_tile_ivory.jpg" },
  ],
  grid: [
    { src: "/01_reel_cover_dmv_hero.jpg", isReel: true, plays: "84.3K" },
    { src: "/02_carousel_slide_dark_editorial.jpg" },
    { src: "/08_carousel_hook_identity.jpg" },
    { src: "/07_lifestyle_broll_office.jpg" },
    { src: "/10_before_after_student_win.jpg" },
    { src: "/09_reel_hook_captioned.jpg", isReel: true, plays: "52.1K" },
    { src: "/11_quote_tile_ivory.jpg" },
    { src: "/12_lifestyle_operator_real_estate.jpg" },
    { src: "/04_story_proof_template.jpg" },
  ],
};

export default function IGMockup() {
  const [variant, setVariant] = useState<Variant>("after");
  const d = variant === "after" ? afterData : beforeData;

  return (
    <section id="preview" className="relative py-32 md:py-48 bg-charcoal grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Chapter 04 · The visual proof</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            This is your <span className="italic text-gold serif font-light">profile in 90 days.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink/60 leading-relaxed">
            Toggle between your account today and the version we&apos;ll build. Every tile, every highlight, every line of the bio — engineered.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex items-center gap-3">
            {(["before", "after"] as Variant[]).map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={`font-mono text-[11px] tracking-[0.18em] uppercase px-5 py-3 border transition-all ${
                  variant === v
                    ? "bg-gold text-black border-gold"
                    : "text-ink/50 border-[#2a2724] hover:text-ink"
                }`}
              >
                {v === "before" ? "→ Your account today" : "→ Your account after"}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-12 items-start">
          {/* Phone mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div
              key={variant}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="ig-frame w-full max-w-[400px]"
            >
              <div className="ig-screen aspect-[9/19.5]">
                {/* iOS status bar */}
                <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold text-black">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span>●●●●</span>
                    <span className="opacity-70">5G</span>
                    <span>▮▮</span>
                  </div>
                </div>

                {/* IG header */}
                <div className="px-3 py-2 flex items-center justify-between border-b border-gray-100">
                  <button className="text-black"><ChevronLeft size={20} /></button>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[15px] font-semibold text-black">{d.username}</span>
                  </div>
                  <button className="text-black"><MoreHorizontal size={20} /></button>
                </div>

                {/* Profile section */}
                <div className="px-4 pt-4 pb-3">
                  <div className="flex items-center gap-6">
                    {/* Profile pic ring */}
                    <div className={`w-[72px] h-[72px] p-[2px] rounded-full ${variant === "after" ? "bg-gradient-to-tr from-[#F7C204] via-[#C9A961] to-[#F7C204]" : "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500"}`}>
                      <div className="w-full h-full rounded-full bg-white p-[2px]">
                        {variant === "after" ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src="/kyle_pfp.png" alt="" className="w-full h-full rounded-full object-cover object-top" />
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src="/kyle_real/pfp.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                        )}
                      </div>
                    </div>
                    {/* Stats */}
                    <div className="flex-1 grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-[15px] font-semibold text-black">{d.posts}</div>
                        <div className="text-[12px] text-gray-700">posts</div>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-black">{d.followers}</div>
                        <div className="text-[12px] text-gray-700">followers</div>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-black">{d.following}</div>
                        <div className="text-[12px] text-gray-700">following</div>
                      </div>
                    </div>
                  </div>

                  {/* Name + bio */}
                  <div className="mt-3">
                    <div className="text-[13px] font-semibold text-black">{d.name}</div>
                    {variant === "after" && (
                      <div className="text-[12px] text-gray-600 mb-0.5">Sales Coach</div>
                    )}
                    <pre className="text-[12.5px] text-black whitespace-pre-wrap leading-snug font-sans">
                      {d.bio}
                    </pre>
                    <div className="mt-1 text-[12.5px] text-[#00376B] font-medium">
                      🔗 {d.link}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    <button className={`text-[12px] font-semibold py-1.5 rounded ${variant === "after" ? "bg-[#0095F6] text-white" : "bg-[#0095F6] text-white"}`}>
                      {variant === "after" ? "Follow" : "Follow"}
                    </button>
                    <button className="text-[12px] font-semibold py-1.5 rounded bg-gray-100 text-black">Message</button>
                    <button className="text-[12px] font-semibold py-1.5 rounded bg-gray-100 text-black">▾</button>
                  </div>
                </div>

                {/* Highlights */}
                <div className="px-2 py-2 flex gap-3 overflow-x-auto border-b border-gray-100">
                  {d.highlights.map((h, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 shrink-0 w-[68px]">
                      <div className={`w-[62px] h-[62px] rounded-full p-[2px] ${h.muted ? "bg-gray-300" : "bg-gradient-to-tr from-[#C9A961] to-[#F7C204]"}`}>
                        <div className="w-full h-full rounded-full bg-white p-[2px]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={h.cover} alt={h.label} className={`w-full h-full rounded-full object-cover ${h.muted ? "grayscale opacity-60" : ""}`} />
                        </div>
                      </div>
                      <span className="text-[10px] text-black truncate w-full text-center">{h.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-100">
                  <button className="flex-1 py-2.5 border-t-2 border-black flex items-center justify-center"><Grid3x3 size={18} className="text-black" /></button>
                  <button className="flex-1 py-2.5 border-t-2 border-transparent flex items-center justify-center"><Play size={18} className="text-gray-400" /></button>
                  <button className="flex-1 py-2.5 border-t-2 border-transparent flex items-center justify-center"><Bookmark size={18} className="text-gray-400" /></button>
                  <button className="flex-1 py-2.5 border-t-2 border-transparent flex items-center justify-center"><UserSquare2 size={18} className="text-gray-400" /></button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-3 gap-0.5 bg-gray-100">
                  {d.grid.map((t, i) => (
                    <motion.div
                      key={`${variant}-${i}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.05 * i }}
                      className="aspect-square relative bg-white"
                    >
                      {t.src ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={t.src} alt="" className="w-full h-full object-cover" />
                          {t.isReel && (
                            <div className="absolute top-1 right-1 text-white">
                              <Play size={14} fill="white" />
                            </div>
                          )}
                          {t.plays && (
                            <div className="absolute bottom-1 left-1 text-white text-[10px] font-semibold drop-shadow">
                              ▶ {t.plays}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-center px-2">
                          <span className="text-[10px] font-bold text-gray-500 whitespace-pre-line tracking-wider">
                            {t.text}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Annotation side panel */}
          <div className="lg:col-span-5">
            <motion.div
              key={`panel-${variant}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {variant === "after" ? (
                <>
                  <span className="eyebrow">What changed</span>
                  <ul className="mt-6 space-y-6">
                    {[
                      ["Bio rewritten", "Identity → company tag → promise → proof # → DM keyword."],
                      ["Highlights renamed", "From 19 unnamed to 6 themed: Start Here · Wins · Hiring · Playbook · Jobsites · Work With Me."],
                      ["Profile pic refreshed", "Tight, warm-graded, recognizable from a 60px circle."],
                      ["Grid logic installed", "Rhythm: Reel · Carousel · Carousel · Lifestyle · Proof · Reel · Quote · Lifestyle · Story."],
                      ["Reels lead the grid", "Two reels in the top row pulling 47K and 28K — your real best work."],
                      ["Hidden likes turned ON", "Social proof returns to the profile arrival moment."],
                    ].map(([t, s], i) => (
                      <li key={i} className="border-l-2 border-gold pl-5">
                        <div className="text-ink text-base font-medium">{t}</div>
                        <div className="text-ink/60 text-sm mt-1">{s}</div>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <span className="eyebrow text-red-400/80">What&apos;s broken</span>
                  <ul className="mt-6 space-y-6">
                    {[
                      ["Bio = 5 ✖️ bullets", "No proof, no promise, no CTA."],
                      ["19 highlights, all named 'Highlights'", "New visitors can't tell what you do or who you've helped."],
                      ["Grid = quote tile after quote tile", "Median engagement: 0 likes, 0 comments."],
                      ["No reels in the top row", "Your best-performing format is buried."],
                      ["Hidden likes", "Social proof killed at the arrival moment."],
                      ["7,110 followers → $0 tracked revenue", "Audience without a funnel."],
                    ].map(([t, s], i) => (
                      <li key={i} className="border-l-2 border-red-500/40 pl-5">
                        <div className="text-ink text-base font-medium">{t}</div>
                        <div className="text-ink/60 text-sm mt-1">{s}</div>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
