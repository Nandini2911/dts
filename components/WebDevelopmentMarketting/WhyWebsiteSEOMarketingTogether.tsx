"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Website Builds Credibility",
    text: "A professional website helps customers understand your brand, services, portfolio, contact details and the value your business provides.",
  },
  {
    title: "Good Structure Improves Usability",
    text: "Clear page hierarchy, navigation and content flow make it easier for visitors to understand your services and move through the website.",
  },
  {
    title: "Responsive Development Improves Experience",
    text: "A responsive website adapts across desktop, tablet and mobile so users get a consistent and smooth experience on every device.",
  },
  {
    title: "Performance Supports Reliability",
    text: "Clean development, optimized assets and efficient functionality help the website load smoothly and perform reliably for users.",
  },
  {
    title: "Website Management Keeps Content Current",
    text: "Ongoing website management helps keep service pages, content, forms, contact details and business information updated over time.",
  },
  {
    title: "Maintenance Supports Long-Term Stability",
    text: "Regular checks, troubleshooting, updates and technical improvements help keep the website functional, stable and ready for future changes.",
  },
];

const pillars = ["Development", "Management", "Maintenance"];

export default function WhyWebsiteSEOMarketingTogether() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:px-12 lg:px-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/celebrity/celebrity3.jpg')",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full bg-gradient-to-r from-[#0D2444] via-[#244D7A] to-[#6288B9] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#0D2444]/20"
          >
            Complete Website Lifecycle
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
              Why Businesses Need Website Development & Management Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600"
          >
            Website development creates the foundation, website management keeps
            it updated and maintenance helps it remain reliable as your business
            evolves.
          </motion.p>
        </div>

        {/* Connected Pillar System */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true }}
          className="relative mx-auto mt-20 max-w-6xl"
        >
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#6288B9] to-transparent md:block" />

          <div className="relative grid gap-5 md:grid-cols-3">
            {pillars.map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-full border border-white/80 bg-white/80 px-8 py-6 text-center shadow-xl shadow-[#0D2444]/8 backdrop-blur-xl"
              >
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6288B9]" />

                <p className="font-serif text-3xl font-bold">
                  <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
                    {item}
                  </span>
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-[#6288B9]">
                  {index === 0 && "Build"}
                  {index === 1 && "Update"}
                  {index === 2 && "Maintain"}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reasons - Line Based Layout */}
        <div className="mt-24">
          <div className="mb-8 flex items-center gap-5">
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#6288B9]">
              Why It Works
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#BFD5EF] to-transparent" />
          </div>

          <div className="grid gap-x-14 border-y border-[#CFE0F4] lg:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group relative border-b border-[#CFE0F4] py-9 last:border-b-0 lg:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-[#0D2444] via-[#6288B9] to-transparent transition-all duration-700 group-hover:w-full" />

                <div className="flex gap-5">
                  <div className="mt-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF7FF] transition duration-500 group-hover:bg-[#0D2444]">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#0D2444] to-[#6288B9] transition duration-500 group-hover:bg-white" />
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl font-bold leading-tight text-[#0D2444] transition duration-500 group-hover:text-[#244D7A]">
                      {reason.title}
                    </h3>

                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {reason.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-5xl text-center"
        >
          <div className="mx-auto mb-8 h-px max-w-2xl bg-gradient-to-r from-transparent via-[#6288B9] to-transparent" />

          <p className="font-serif text-3xl font-bold leading-tight md:text-3xl">
            <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
              When development, management and maintenance work together, your
              website stays clear, reliable and ready to evolve with your
              business.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}