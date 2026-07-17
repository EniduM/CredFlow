"use client";

import { motion } from "framer-motion";
import { FileText, BadgeCheck, Zap, IdCard, TrendingUp, FileBarChart, type LucideIcon } from "lucide-react";

type ColorKey = "blue" | "green";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: ColorKey;
}

const features: Feature[] = [
  {
    icon: FileText,
    title: "Secure International Invoicing",
    description: "Generate professional invoices in multiple currencies. Built-in compliance for cross-border transactions.",
    color: "blue",
  },
  {
    icon: BadgeCheck,
    title: "Income Verification",
    description: "Real-time verification of earnings from 50+ platforms. Tamper-proof records accepted by financial institutions.",
    color: "green",
  },
  {
    icon: Zap,
    title: "Compliance Automation",
    description: "Automated KYC, AML, and tax compliance. Stay compliant across jurisdictions without manual effort.",
    color: "blue",
  },
  {
    icon: IdCard,
    title: "Financial Identity",
    description: "A portable financial identity that travels with you. Created from your verified income history.",
    color: "green",
  },
  {
    icon: TrendingUp,
    title: "Trust Score",
    description: "A dynamic score that reflects your financial reliability. Improves with every verified transaction.",
    color: "blue",
  },
  {
    icon: FileBarChart,
    title: "Bank-Ready Reports",
    description: "Comprehensive reports formatted for bank underwriting. PDF, API, or direct integration.",
    color: "green",
  },
];

const colorMap: Record<ColorKey, { bg: string; bgHover: string; border: string; shadow: string; text: string }> = {
  blue: {
    bg: "bg-blue/5",
    bgHover: "group-hover:bg-blue/10",
    border: "group-hover:border-blue/30",
    shadow: "group-hover:shadow-blue/5",
    text: "text-blue",
  },
  green: {
    bg: "bg-green/5",
    bgHover: "group-hover:bg-green/10",
    border: "group-hover:border-green/30",
    shadow: "group-hover:shadow-green/5",
    text: "text-green",
  },
};

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-18"
        >
          <span className="inline-block text-xs font-medium text-blue bg-blue/5 px-3 py-1.5 rounded-full mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-[-0.03em] leading-[1.12] text-foreground">
            Everything you need to build financial trust.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray max-w-2xl mx-auto">
            A complete operating system for your freelance finances, from invoicing to bank-ready reporting.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group relative bg-card border border-border rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl ${colors.border} ${colors.shadow}`}
              >
                <div className={`w-11 h-11 rounded-xl ${colors.bg} ${colors.bgHover} flex items-center justify-center mb-4 transition-colors duration-300`}>
                  <Icon size={22} className={colors.text} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
