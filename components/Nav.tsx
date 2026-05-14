"use client";
import { motion } from "motion/react";

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-md bg-[#0a0a0a]/60 border-b border-[#1a1a1a]"
    >
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="OPMEDIA" className="w-10 h-10 object-contain" />
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/70">
          OPMEDIA
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-[0.18em] uppercase text-ink/60">
        <a href="/#diagnosis" className="hover:text-yellow transition-colors">Diagnosis</a>
        <a href="/#vision" className="hover:text-yellow transition-colors">Vision</a>
        <a href="/#preview" className="hover:text-yellow transition-colors">Preview</a>
        <a href="/#funnel" className="hover:text-yellow transition-colors">Funnel</a>
        <a href="/whats-next" className="text-gold hover:text-yellow transition-colors">What&apos;s Next →</a>
      </div>
      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/40">
        Brand Strategy · May 2026
      </div>
    </motion.nav>
  );
}
