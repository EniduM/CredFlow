"use client";

import { motion } from "framer-motion";
import { Bell, Wallet, Users, ShieldCheck, FileText, TrendingUp, ArrowUp } from "lucide-react";

const chartData = [
  { month: "Jul", value: 4200 },
  { month: "Aug", value: 5800 },
  { month: "Sep", value: 5100 },
  { month: "Oct", value: 7200 },
  { month: "Nov", value: 8900 },
  { month: "Dec", value: 12430 },
];

const maxVal = 14000;

const activities = [
  { icon: "upwork", label: "Upwork payment verified", value: "$2,400", time: "2 hours ago", positive: true },
  { icon: "invoice", label: "Invoice #24-015 approved", value: "$850", time: "5 hours ago", positive: true },
  { icon: "fiverr", label: "Fiverr payment received", value: "$320", time: "1 day ago", positive: true },
  { icon: "score", label: "Trust Score updated to 78", value: "", time: "2 days ago", positive: true },
  { icon: "report", label: "Bank report generated for HDFC", value: "", time: "3 days ago", positive: true },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-18"
        >
          <span className="inline-block text-xs font-medium text-blue bg-blue/5 px-3 py-1.5 rounded-full mb-4">
            Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-[-0.03em] leading-[1.12] text-foreground">
            Your financial command center.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray max-w-2xl mx-auto">
            Everything you need to manage your freelance finances, track your trust score, and prepare for banking opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl shadow-blue/5"
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-xs">C</span>
              </div>
              <span className="text-sm font-semibold text-foreground">CredFlow</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-border/50 transition-colors duration-200">
                <Bell size={16} className="text-gray" />
              </button>
              <div className="w-7 h-7 rounded-full bg-blue/10 border-2 border-blue/20 flex items-center justify-center">
                <span className="text-[10px] font-semibold text-blue">AK</span>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-blue/[0.03] border border-blue/10 rounded-xl p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Wallet size={14} className="text-blue" />
                  <span className="text-xs text-gray font-medium">Monthly Income</span>
                </div>
                <p className="text-2xl sm:text-3xl font-semibold text-foreground">$12,430</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <ArrowUp size={12} className="text-green" />
                  <span className="text-xs text-green font-medium">23% vs last month</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-green/[0.03] border border-green/10 rounded-xl p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={14} className="text-green" />
                  <span className="text-xs text-gray font-medium">Trust Score</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl sm:text-3xl font-semibold text-foreground">78</p>
                  <span className="text-xs font-medium text-green">/100</span>
                </div>
                <div className="mt-2 h-1.5 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-green rounded-full"
                  />
                </div>
                <span className="text-xs text-green font-medium mt-1 block">Excellent</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="border border-border rounded-xl p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Users size={14} className="text-gray" />
                  <span className="text-xs text-gray font-medium">Verified Clients</span>
                </div>
                <p className="text-2xl sm:text-3xl font-semibold text-foreground">47</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <ArrowUp size={12} className="text-green" />
                  <span className="text-xs text-green font-medium">+12 this month</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="border border-border rounded-xl p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck size={14} className="text-gray" />
                  <span className="text-xs text-gray font-medium">Bank Readiness</span>
                </div>
                <p className="text-2xl sm:text-3xl font-semibold text-foreground">82%</p>
                <div className="mt-2 h-1.5 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "82%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-blue rounded-full"
                  />
                </div>
                <span className="text-xs text-blue font-medium mt-1 block">Almost ready</span>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3">
                <h4 className="text-sm font-semibold text-foreground mb-4">Income Trend</h4>
                <div className="relative h-48 sm:h-56">
                  <div className="flex items-end gap-3 sm:gap-4 h-full">
                    {chartData.map((item, i) => {
                      const height = (item.value / maxVal) * 100;
                      return (
                        <motion.div
                          key={item.month}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          className="flex-1 bg-blue/10 rounded-t-lg relative group cursor-pointer hover:bg-blue/20 transition-colors duration-200"
                          style={{ height: `${height}%` }}
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-foreground text-background text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap">
                            ${item.value.toLocaleString()}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-3">
                    {chartData.map((item) => (
                      <span key={item.month} className="text-xs text-gray flex-1 text-center">{item.month}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-sm font-semibold text-foreground mb-4">Recent Activity</h4>
                <div className="space-y-1">
                  {activities.map((item, i) => (
                    <motion.div
                      key={`${item.label}-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-border/30 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.positive ? "bg-green" : "bg-gray"}`} />
                        <span className="text-xs sm:text-sm text-gray truncate">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                        {item.value && (
                          <span className="text-xs font-medium text-foreground">{item.value}</span>
                        )}
                        <span className="text-[10px] text-gray hidden sm:inline">{item.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray font-medium">Compliance Status</span>
                    <span className="text-xs text-green font-medium">All Clear</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray">
                    <FileText size={12} />
                    <span>Tax documentation ready for FY 2025-26</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
