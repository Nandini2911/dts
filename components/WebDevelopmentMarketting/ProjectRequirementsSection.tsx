"use client";

import { motion } from "framer-motion";

const requirements = [
  "Business name",
  "Industry and services",
  "Current website, if any",
  "Target cities or service areas",
  "Target audience",
  "Competitor references",
  "Design references",
  "Required website pages",
  "Brand logo and guidelines",
  "Content availability",
  "Social media handles",
  "Marketing goals",
  "SEO goals",
  "Advertising budget, if applicable",
  "Timeline",
  "Contact form or lead requirements",
];

export default function ProjectRequirementsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 py-24 md:px-10 lg:px-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(98,136,185,0.14),transparent_34%),radial-gradient(circle_at_88%_80%,rgba(13,36,68,0.08),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-flex rounded-full border border-[#D8E6F7] bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#244D7A] shadow-sm">
              Project Onboarding
            </span>

            <h2 className="mt-7 bg-gradient-to-r from-[#071A31] via-[#244D7A] to-[#8FB4E3] bg-clip-text font-serif text-4xl font-bold leading-tight tracking-tight text-transparent md:text-5xl lg:text-6xl">
              Information required to start your website or marketing project
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              To begin planning your website, SEO or digital marketing project,
              we usually require a few important details about your business,
              goals, audience and current digital presence.
            </p>

            <div className="mt-9 overflow-hidden rounded-[34px] border border-[#DDE8F5] bg-white shadow-[0_24px_70px_rgba(13,36,68,0.08)]">
              <div className="bg-gradient-to-r from-[#071A31] via-[#244D7A] to-[#8FB4E3] p-[1px]">
                <div className="rounded-[33px] bg-white p-7 md:p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6288B9]">
                    Why we need this
                  </p>

                  <p className="mt-5 text-base leading-8 text-slate-600">
                    These details help us plan the right website structure, SEO
                    strategy and digital marketing approach for your business.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Requirement Board */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[42px] border border-[#DDE8F5] bg-white p-6 shadow-[0_35px_100px_rgba(13,36,68,0.10)] md:p-8">
              {/* Inner Glow */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E4F1FF] blur-[80px]" />
              <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#F3F8FF] blur-[80px]" />

              <div className="relative">
                <div className="mb-8 flex flex-col gap-4 border-b border-[#E4ECF7] pb-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6288B9]">
                      Checklist
                    </p>

                    <h3 className="mt-3 font-serif text-3xl font-bold text-[#071A31] md:text-4xl">
                      What we collect before planning
                    </h3>
                  </div>

                  <span className="w-fit rounded-full bg-[#F3F8FF] px-5 py-3 text-sm font-bold text-[#244D7A]">
                    Website + Marketing
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {requirements.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.025 }}
                      viewport={{ once: true }}
                      className="group flex items-start gap-4 rounded-2xl border border-[#E3ECF7] bg-[#FBFDFF] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#9DB9D8] hover:bg-white hover:shadow-[0_14px_40px_rgba(13,36,68,0.08)]"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#071A31] to-[#8FB4E3] text-xs font-bold text-white">
                        ✓
                      </span>

                      <p className="text-sm font-semibold leading-6 text-slate-700">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mx-auto mt-6 h-px w-[85%] bg-gradient-to-r from-transparent via-[#9DB9D8] to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}