"use client";

import { motion } from "framer-motion";

const cities = [
  "Mumbai",
  "Delhi NCR",
  "Chandigarh",
  "Ludhiana",
  "Amritsar",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Jaipur",
  "Goa",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Noida",
  "Gurugram",
  "Lucknow",
];

const services = [
  "Website Design",
  "Web Development",
  "SEO",
  "Social Media Marketing",
  "Paid Ads",
  "Lead Generation",
  "Online Brand Communication",
];

export default function IndiaPresenceSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FD] px-5 py-24 md:px-10 lg:px-20">
      {/* Soft Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(98,136,185,0.14),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(13,36,68,0.08),transparent_34%)]" />
      <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#B8CCE6] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main Premium Board */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[46px] border border-[#DDE7F5] bg-white shadow-[0_35px_110px_rgba(13,36,68,0.10)]"
        >
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            {/* Left Editorial Panel */}
            <div className="relative overflow-hidden bg-[#071A31] p-8 text-white md:p-12 lg:p-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,180,227,0.40),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_34%)]" />
              <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full border border-white/10" />
              <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-white/10" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/75 backdrop-blur-xl">
                  Across India
                </span>

                <h2 className="mt-8 bg-gradient-to-r from-white via-[#CFE4FF] to-[#8FB4E3] bg-clip-text font-serif text-4xl font-bold leading-tight tracking-tight text-transparent md:text-5xl">
                  Website Development & Digital Marketing Across India
                </h2>

                <p className="mt-7 max-w-xl text-base leading-8 text-white/70 md:text-lg">
                  Double Trouble Studio provides website development, SEO and
                  digital marketing services for businesses across India.
                </p>

                <div className="mt-10 h-px w-full bg-gradient-to-r from-white/30 to-transparent" />

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#BFD9FF]">
                  Pan-India Digital Support
                </p>
              </div>
            </div>

            {/* Right Cities Panel */}
            <div className="relative p-7 md:p-10 lg:p-12">
              <div className="absolute right-0 top-0 h-52 w-52 rounded-bl-full bg-[#F0F6FF]" />

              <div className="relative">
                <div className="flex flex-col gap-4 border-b border-[#E4ECF7] pb-7 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6288B9]">
                      Cities We Serve
                    </p>

                    <h3 className="mt-3 bg-gradient-to-r from-[#071A31] via-[#244D7A] to-[#8FB4E3] bg-clip-text font-serif text-3xl font-bold text-transparent md:text-4xl">
                      Major Indian Markets
                    </h3>
                  </div>

                  <span className="w-fit rounded-full bg-[#071A31] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_35px_rgba(13,36,68,0.20)]">
                    India Network
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                  {cities.map((city) => (
                    <motion.div
                      key={city}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-2xl border border-[#E0E9F5] bg-[#F8FBFF] px-4 py-4 text-center text-sm font-semibold text-[#244D7A] shadow-[0_10px_30px_rgba(13,36,68,0.04)] transition-colors duration-300 hover:border-[#9DB9D8] hover:bg-white"
                    >
                      {city}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          viewport={{ once: true }}
          className="relative mx-auto mt-10 max-w-6xl rounded-[30px] border border-[#DDE7F5] bg-white/90 p-5 shadow-[0_24px_80px_rgba(13,36,68,0.09)] backdrop-blur-xl md:p-6"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full bg-[#F3F8FF] px-5 py-3 text-sm font-semibold text-[#244D7A] transition duration-300 hover:bg-[#0D2444] hover:text-white"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-5xl text-center text-base leading-8 text-slate-600 md:text-lg"
        >
          We support businesses with website design, web development, SEO,
          social media marketing, paid ads, lead generation and online brand
          communication across major Indian markets.
        </motion.p>
      </div>
    </section>
  );
}