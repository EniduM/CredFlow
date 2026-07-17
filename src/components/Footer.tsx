"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#cta" },
];

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:hello@credflow.io" },
];

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid sm:grid-cols-3 gap-8 sm:gap-12"
        >
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-[10px]">C</span>
              </div>
              <span className="font-semibold text-base text-foreground">CredFlow</span>
            </div>
            <p className="text-sm text-gray leading-relaxed max-w-xs">
              The financial operating system for freelancers. Turning global income into trusted financial identities.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-gray">
            &copy; {new Date().getFullYear()} CredFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray hover:text-foreground transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray hover:text-foreground transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
