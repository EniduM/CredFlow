"use client";

import { motion } from "framer-motion";
import { FileText, ShieldCheck, BadgeCheck, TrendingUp, FileBarChart, ArrowDown, UserCheck } from "lucide-react";

const steps = [
  { icon: UserCheck, label: "Client" },
  { icon: FileText, label: "Invoice" },
  { icon: ShieldCheck, label: "Verification" },
  { icon: BadgeCheck, label: "Compliance" },
  { icon: TrendingUp, label: "Trust Score" },
  { icon: FileBarChart, label: "Bank Ready" },
];

export default function Solution() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-border/30 dark:bg-border/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-18"
        >
          <span className="inline-block text-xs font-medium text-green bg-green/5 px-3 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-[-0.03em] leading-[1.12] text-foreground">
            From invoice to financial identity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray max-w-2xl mx-auto">
            Every payment you receive builds your financial identity. No paperwork. No waiting.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col sm:flex-row items-center gap-4"
                >
                  <div className="flex flex-col items-center group">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-blue/30 group-hover:shadow-lg group-hover:shadow-blue/5 transition-all duration-300">
                      <Icon size={24} className="text-blue" />
                    </div>
                    <span className="text-xs font-medium text-gray mt-2">{step.label}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden sm:flex items-center justify-center w-8 text-border">
                      <ArrowDown size={16} className="sm:hidden" />
                      <ArrowDown size={16} className="sm:hidden" />
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="hidden sm:block text-border">
                        <path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 sm:mt-14 p-5 sm:p-6 bg-card border border-border rounded-2xl max-w-lg text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <BadgeCheck size={18} className="text-green" />
              <span className="text-sm font-semibold text-foreground">Financial Opportunities Unlocked</span>
            </div>
            <p className="text-sm text-gray">
              Loans, credit cards, mortgages, insurance, and business financing — all based on your real income.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
