"use client";

import { motion } from "framer-motion";
import { Globe, FileX2, XCircle, ClipboardList, ShieldX } from "lucide-react";

const problems = [
  {
    icon: Globe,
    title: "Fragmented Income",
    description: "Earnings arrive from multiple platforms and currencies with no unified record.",
  },
  {
    icon: FileX2,
    title: "No Proof of Income",
    description: "Banks require standardized documentation that freelance income doesn't provide.",
  },
  {
    icon: XCircle,
    title: "Loan Rejections",
    description: "Without verified income history, 87% of freelancers face automatic rejection.",
  },
  {
    icon: ClipboardList,
    title: "Manual Compliance",
    description: "Hours of paperwork for every application, with no standardized process.",
  },
  {
    icon: ShieldX,
    title: "Financial Distrust",
    description: "Banks view fragmented income as risk, blocking access to financial products.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-18"
        >
          <span className="inline-block text-xs font-medium text-blue bg-blue/5 px-3 py-1.5 rounded-full mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-[-0.03em] leading-[1.12] text-foreground">
            Freelancers earn globally.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray max-w-2xl mx-auto">
            Their financial identity shouldn&apos;t be limited by borders. But banks still operate locally, leaving millions without access.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue/5 hover:border-blue/20"
              >
                <div className="w-10 h-10 rounded-xl bg-blue/5 flex items-center justify-center mb-4 group-hover:bg-blue/10 transition-colors duration-300">
                  <Icon size={20} className="text-blue" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
