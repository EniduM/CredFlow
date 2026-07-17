"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="cta" className="py-20 sm:py-28 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-green/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-[-0.03em] leading-[1.12] text-background">
            Ready to build financial trust?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-background/60 max-w-xl mx-auto">
            Join the waitlist. Be the first to transform your freelance income into financial opportunity.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 max-w-md mx-auto"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-green/10 border border-green/20 rounded-xl"
              >
                <Check size={16} className="text-green" />
                <span className="text-sm font-medium text-green">You&apos;re on the list. We&apos;ll be in touch.</span>
              </motion.div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-xl text-background placeholder:text-background/40 text-sm focus:outline-none focus:border-background/40 focus:bg-background/15 transition-all duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background text-foreground text-sm font-medium rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Join Waitlist
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </motion.form>

          <p className="mt-4 text-xs text-background/40">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
