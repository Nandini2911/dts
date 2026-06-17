"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Website Builds Credibility",
    text: "A professional website helps customers understand your brand, services, portfolio, contact details and trust signals.",
  },
  {
    title: "SEO Brings Search Visibility",
    text: "SEO helps your website appear for relevant searches when people are looking for your services.",
  },
  {
    title: "Digital Marketing Builds Reach",
    text: "Social media, paid ads and content marketing help your brand reach people across platforms where they spend time.",
  },
  {
    title: "Content Builds Trust",
    text: "Helpful service pages, blogs, FAQs, case studies and social content help customers make informed decisions.",
  },
  {
    title: "Paid Ads Bring Faster Traffic",
    text: "Performance marketing can support faster reach, inquiries and campaign visibility while SEO builds long-term organic growth.",
  },
  {
    title: "Analytics Improve Decisions",
    text: "Tracking website and campaign performance helps improve marketing decisions and conversion strategy.",
  },
];

const pillars = ["Website", "SEO", "Marketing"];

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
            Complete Digital Growth System
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
              Why Businesses Need Website + SEO + Marketing Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600"
          >
            A website builds trust, SEO brings visibility and marketing creates
            consistent reach. Together, they create a stronger digital growth
            system.
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
                  {index === 0 && "Credibility"}
                  {index === 1 && "Visibility"}
                  {index === 2 && "Growth"}
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
              When your website, SEO and marketing work together, your online
              presence becomes clearer, stronger and more conversion-focused.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}