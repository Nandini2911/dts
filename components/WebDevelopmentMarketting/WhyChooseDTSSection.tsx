"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Website + Marketing Under One Strategy",
    text: "We build websites with marketing, SEO and conversion goals in mind instead of treating design and digital growth as separate tasks.",
    label: "Strategy",
  },
  {
    title: "SEO-Ready Website Planning",
    text: "Our website structure includes service pages, keyword-focused headings, FAQs, metadata, internal links and crawlable content planning.",
    label: "SEO",
  },
  {
    title: "Creative + Technical Execution",
    text: "We combine design sense, content strategy, web development, SEO and campaign execution to build a stronger digital presence.",
    label: "Execution",
  },
  {
    title: "Experience Across Multiple Industries",
    text: "We work with hospitality brands, restaurants, luxury businesses, events, corporate clients, ecommerce brands, creators and service businesses.",
    label: "Industries",
  },
  {
    title: "Conversion-Focused Approach",
    text: "We focus on clear messaging, strong CTAs, mobile-friendly layouts, readable content and inquiry-focused website flow.",
    label: "Conversion",
  },
  {
    title: "Ongoing Digital Growth Support",
    text: "After website launch, we can support SEO, social media, paid ads, content marketing and performance optimization.",
    label: "Growth",
  },
  {
    title: "Transparent Communication",
    text: "We maintain clear communication during planning, design, development, launch and campaign execution.",
    label: "Process",
  },
  {
    title: "Scalable Digital System",
    text: "We build websites and marketing strategies that can grow with new pages, campaigns, locations, services and content over time.",
    label: "Scale",
  },
];

export default function WhyChooseDTSSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 md:px-10 lg:px-20">
      {/* Soft Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(143,180,227,0.16),transparent_38%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#6288B9]">
            Why Choose Double Trouble Studio
          </span>

          <h2 className="mt-5 bg-gradient-to-r from-[#071A31] via-[#244D7A] to-[#8FB4E3] bg-clip-text font-serif text-3xl font-bold leading-tight text-transparent md:text-5xl">
            A cleaner way to build your digital presence
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
            We bring website development, SEO, content and marketing together so
            your digital presence looks professional, ranks better and supports
            real inquiries.
          </p>
        </motion.div>

        {/* Simple Clean Layout */}
        <div className="mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group border-b border-[#E3ECF7] pb-7"
            >
              <div className="flex items-start gap-5">
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#6288B9] transition duration-300 group-hover:scale-125 group-hover:bg-[#071A31]" />

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8AA8CB]">
                    {reason.label}
                  </span>

                  <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-[#071A31] md:text-2xl">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {reason.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clean Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <p className="text-base leading-8 text-slate-600">
            From planning and design to SEO and ongoing campaigns, DTS builds
            simple, scalable and conversion-focused digital systems for growing
            brands.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#071A31] px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-[#244D7A]"
            >
              Discuss Your Requirement
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#D6E5F5] bg-white px-7 py-3.5 text-sm font-bold text-[#071A31] transition duration-300 hover:bg-[#F7FBFF]"
            >
              Book A Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}