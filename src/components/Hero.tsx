"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

function HeroDashboard() {
  const incomeData = [30, 45, 38, 52, 48, 62, 58, 72, 65, 80, 75, 88];
  const maxVal = 100;
  const width = 280;
  const height = 80;

  const pathD = incomeData
    .map((val, i) => {
      const x = (i / (incomeData.length - 1)) * (width - 20) + 10;
      const y = height - (val / maxVal) * (height - 8) - 4;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative bg-card border border-border rounded-2xl shadow-xl shadow-blue/5 p-5 sm:p-6 w-full max-w-sm mx-auto"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green animate-pulse-glow" />
            <span className="text-xs font-medium text-gray">Live</span>
          </div>
          <div className="flex -space-x-1">
            <div className="w-6 h-6 rounded-full bg-blue/10 border-2 border-card" />
            <div className="w-6 h-6 rounded-full bg-green/10 border-2 border-card" />
            <div className="w-6 h-6 rounded-full bg-foreground/10 border-2 border-card" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray font-medium">Monthly Income</p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl font-semibold text-foreground mt-1"
            >
              <span className="blur-[4px]">$12,430</span>
            </motion.p>
            <span className="inline-flex items-center gap-1 text-xs text-green font-medium mt-1">
              <span className="text-xs">↑</span> <span className="blur-[4px]">23%</span> vs last month
            </span>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray font-medium">Trust Score</p>
            <div className="relative inline-flex items-center justify-center mt-1">
              <svg width="56" height="56" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="24" fill="none" stroke="#E5E7EB" strokeWidth="4" />
                <motion.circle
                  cx="28" cy="28" r="24" fill="none" stroke="#2563EB" strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 24}
                  initial={{ strokeDashoffset: 2 * Math.PI * 24 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 24 * 0.22 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  transform="rotate(-90 28 28)"
                />
              </svg>
              <span className="absolute text-sm font-bold text-foreground blur-[4px]">78</span>
            </div>
            <p className="text-xs text-green font-medium mt-0.5">Excellent</p>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray mb-1.5">
            <span>Income Trend</span>
            <span className="blur-[4px]">+$2,840</span>
          </div>
          <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
            <motion.path
              d={pathD}
              fill="none"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
        </div>

        <div className="space-y-2">
          {[
            { label: "Upwork payment verified", value: "$2,400", time: "2h ago" },
            { label: "Invoice #24-015 approved", value: "$850", time: "5h ago" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.15 }}
              className="flex items-center justify-between py-1.5 border-b border-border last:border-0"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green" />
                <span className="text-xs text-gray">{item.label}</span>
              </div>
              <div className="text-right">
                <span className="text-xs font-medium text-foreground blur-[4px]">{item.value}</span>
                <span className="text-xs text-gray ml-2">{item.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-3 -right-3 w-20 h-20 bg-blue/5 rounded-2xl border border-blue/10 -z-10"
      />
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -top-3 -left-3 w-16 h-16 bg-green/5 rounded-2xl border border-green/10 -z-10"
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue/[0.015] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-green/[0.015] rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue/5 border border-blue/10 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
              <span className="text-xs font-medium text-blue">Now in development</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground">
              Turn Global Income Into{" "}
              <span className="text-blue">Financial Opportunity.</span>
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray leading-relaxed max-w-lg">
              Freelancers earn globally but banks still think locally. CredFlow transforms international earnings into verified financial identities that unlock banking, credit and financial opportunities.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Join Waitlist
                <ArrowRight size={16} />
              </a>
              <a
                href="#dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-xl hover:bg-border/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play size={14} />
                Book Demo
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-semibold text-foreground"><span className="blur-[4px]">$47B+</span></p>
                <p className="text-xs text-gray">Freelance market in South Asia</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-semibold text-foreground"><span className="blur-[4px]">15M+</span></p>
                <p className="text-xs text-gray">Freelancers underserved</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-semibold text-foreground"><span className="blur-[4px]">87%</span></p>
                <p className="text-xs text-gray">Face loan rejection</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
