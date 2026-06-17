"use client";

import { motion } from "framer-motion";

const services = [
  "Website Development",
  "SEO Strategy",
  "Digital Marketing",
  "Social Media",
  "Paid Ads",
  "Lead Generation",
];

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      {/* Light Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,136,185,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(143,180,227,0.14),transparent_34%)]" />
      <div className="absolute left-[-160px] top-[-140px] h-[340px] w-[340px] rounded-full bg-[#DCEBFF]/70 blur-3xl" />
      <div className="absolute right-[-180px] bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[#EAF3FF] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[32px] border border-[#DCE6F3] bg-white/90 shadow-[0_18px_60px_rgba(13,36,68,0.07)] backdrop-blur-xl md:rounded-[38px]"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left Content */}
            <div className="p-7 sm:p-9 md:p-12">
              <span className="inline-flex rounded-full border border-[#DCE6F3] bg-[#F7FBFF] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#315E91]">
                Start Your Digital Growth
              </span>

              <h2 className="mt-6 max-w-[720px] bg-gradient-to-r from-[#071A31] via-[#315E91] to-[#8FB4E3] bg-clip-text font-serif text-[32px] font-semibold leading-[1.08] tracking-[-0.035em] text-transparent sm:text-[40px] md:text-[48px]">
  Looking for website development, SEO & digital marketing?
</h2>
              <p className="mt-5 max-w-[680px] text-[15px] font-medium leading-[1.85] text-slate-600 md:text-[16px]">
                Whether you need a new website, redesign, SEO strategy, digital
                marketing campaign, social media management, paid ads or
                lead-generation support, Double Trouble Studio can help build
                and grow your online presence.
              </p>

              <p className="mt-4 max-w-[680px] text-[15px] font-medium leading-[1.85] text-slate-600 md:text-[16px]">
                We support businesses, startups, hospitality companies, luxury
                labels, ecommerce brands and service providers with professional
                digital growth services across India.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#BFD4EC] bg-[#F7FBFF] px-6 py-3.5 text-sm font-bold text-[#0D2444] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8FB4E3] hover:bg-white"
                >
                  Start Your Website Project
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#DCE6F3] bg-white px-6 py-3.5 text-sm font-bold text-[#315E91] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F7FBFF]"
                >
                  Schedule A Consultation
                </a>
              </div>
            </div>

            {/* Right Light Service Panel */}
            <div className="border-t border-[#DCE6F3] bg-[#F8FBFF] p-7 sm:p-9 md:p-12 lg:border-l lg:border-t-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#6288B9]">
                Services Included
              </p>

              <div className="mt-7 space-y-4">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center justify-between gap-5 border-b border-[#DCE6F3] pb-4 last:border-b-0"
                  >
                    <span className="text-[15px] font-semibold text-[#071120]">
                      {service}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DCE6F3] bg-white text-sm text-[#315E91] shadow-[0_8px_24px_rgba(13,36,68,0.05)]">
                      →
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[22px] border border-[#DCE6F3] bg-white p-5 shadow-[0_10px_35px_rgba(13,36,68,0.04)]">
                <p className="text-sm font-medium leading-7 text-slate-600">
                  A clean, scalable and conversion-focused digital system built
                  for long-term brand growth.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}