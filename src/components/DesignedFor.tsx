"use client";

import { motion } from "framer-motion";

const platforms = [
  {
    name: "Upwork",
    svg: (
      <svg viewBox="0 0 120 30" className="h-6 w-auto" fill="currentColor" opacity="0.5">
        <text x="0" y="22" fontSize="20" fontWeight="600" fontFamily="system-ui">Upwork</text>
      </svg>
    ),
  },
  {
    name: "Fiverr",
    svg: (
      <svg viewBox="0 0 100 30" className="h-6 w-auto" fill="currentColor" opacity="0.5">
        <text x="0" y="22" fontSize="20" fontWeight="600" fontFamily="system-ui">Fiverr</text>
      </svg>
    ),
  },
  {
    name: "Wise",
    svg: (
      <svg viewBox="0 0 80 30" className="h-6 w-auto" fill="currentColor" opacity="0.5">
        <text x="0" y="22" fontSize="20" fontWeight="600" fontFamily="system-ui">Wise</text>
      </svg>
    ),
  },
  {
    name: "Payoneer",
    svg: (
      <svg viewBox="0 0 140 30" className="h-6 w-auto" fill="currentColor" opacity="0.5">
        <text x="0" y="22" fontSize="20" fontWeight="600" fontFamily="system-ui">Payoneer</text>
      </svg>
    ),
  },
  {
    name: "GitHub",
    svg: (
      <svg viewBox="0 0 110 30" className="h-6 w-auto" fill="currentColor" opacity="0.5">
        <text x="0" y="22" fontSize="20" fontWeight="600" fontFamily="system-ui">GitHub</text>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    svg: (
      <svg viewBox="0 0 120 30" className="h-6 w-auto" fill="currentColor" opacity="0.5">
        <text x="0" y="22" fontSize="20" fontWeight="600" fontFamily="system-ui">LinkedIn</text>
      </svg>
    ),
  },
];

export default function DesignedFor() {
  return (
    <section className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-sm text-gray font-medium mb-10 sm:mb-14">
            Designed for professionals using the world&apos;s leading digital platforms
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-gray hover:text-foreground transition-colors duration-300"
                title={platform.name}
              >
                {platform.svg}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
