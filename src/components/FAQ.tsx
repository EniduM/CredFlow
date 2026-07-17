"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is CredFlow?",
    answer:
      "CredFlow is a financial operating system for freelancers. We transform international earnings into verified financial identities that banks and financial institutions trust. Think of it as a financial passport built from your real income data.",
  },
  {
    question: "How does CredFlow verify my income?",
    answer:
      "We connect securely to your payment platforms — Upwork, Fiverr, Wise, Payoneer, and others — to verify incoming payments in real time. Each transaction is cryptographically signed and added to your verifiable income history. No manual documentation required.",
  },
  {
    question: "Which platforms does CredFlow support?",
    answer:
      "We currently support Upwork, Fiverr, Wise, Payoneer, GitHub Sponsors, and direct bank transfers. We're adding new platforms every month. If you need a platform that isn't listed, let us know and we'll prioritize it.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Absolutely. We use AES-256 encryption for all data in transit and at rest. Our infrastructure is SOC 2 compliant and hosted on AWS. We never share your data without explicit permission, and you control exactly what information is shared in every report.",
  },
  {
    question: "How long does the verification process take?",
    answer:
      "Initial platform connection takes about 2 minutes. Payment verification happens in real time as transactions occur. Generating a bank-ready report takes less than 30 seconds. There's no waiting period for your financial identity to begin building.",
  },
  {
    question: "Can I use CredFlow if I'm based outside South Asia?",
    answer:
      "Yes. CredFlow is built for freelancers everywhere. While our initial banking partnerships focus on South Asian financial institutions, our verification and reporting standards are designed to meet international banking requirements.",
  },
  {
    question: "How do banks use my CredFlow report?",
    answer:
      "Our bank-ready reports follow standard underwriting formats. They include your verified income history, trust score, compliance status, and tax documentation. Banks can access reports via secure API or PDF, reducing their verification time from days to minutes.",
  },
  {
    question: "Is CredFlow free to use?",
    answer:
      "CredFlow is free to start. You can connect your platforms, track your income, and build your trust score at no cost. Bank-ready reports and advanced features are available on our professional plan, launching later this year.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-18"
        >
          <span className="inline-block text-xs font-medium text-blue bg-blue/5 px-3 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-[-0.03em] leading-[1.12] text-foreground">
            Frequently asked questions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray max-w-2xl mx-auto">
            Everything you need to know about CredFlow. Can&apos;t find what you&apos;re looking for? Reach out to us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="border-b border-border last:border-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-foreground group-hover:text-blue transition-colors duration-200 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-gray flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-gray leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
