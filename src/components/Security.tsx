"use client";

import { motion } from "framer-motion";
import { Lock, Eye, Cloud, Shield, CheckCircle } from "lucide-react";

const securityItems = [
  {
    icon: Lock,
    title: "Enterprise Encryption",
    description: "AES-256 encryption for all data in transit and at rest. End-to-end encryption for sensitive financial documents.",
  },
  {
    icon: Eye,
    title: "Privacy First",
    description: "Your data never leaves your control without explicit permission. Granular sharing controls for every report.",
  },
  {
    icon: Cloud,
    title: "Secure Cloud Infrastructure",
    description: "SOC 2 compliant infrastructure on AWS. 99.99% uptime with real-time disaster recovery.",
  },
  {
    icon: Shield,
    title: "Data Protection",
    description: "GDPR compliant. All data encrypted, backed up across multiple regions, and protected against unauthorized access.",
  },
  {
    icon: CheckCircle,
    title: "Regulatory Compliance",
    description: "Built to meet banking-grade compliance standards across South Asia. Regular third-party audits.",
  },
];

export default function Security() {
  return (
    <section id="security" className="py-20 sm:py-28 bg-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-18"
        >
          <span className="inline-block text-xs font-medium text-green bg-green/5 px-3 py-1.5 rounded-full mb-4">
            Security
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-[-0.03em] leading-[1.12] text-foreground">
            Enterprise-grade security.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray max-w-2xl mx-auto">
            Your financial data deserves the same protection as the world&apos;s largest banks.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {securityItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green/5 hover:border-green/20"
              >
                <div className="w-10 h-10 rounded-xl bg-green/5 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-green" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
