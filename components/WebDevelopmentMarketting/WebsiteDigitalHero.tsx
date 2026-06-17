"use client";

import { motion } from "framer-motion";

const heroHighlights = [
  "Custom Website Development",
  "SEO-Ready Structure",
  "Social Media Marketing",
  "Paid Ads",
  "Lead Generation",
];

const growthCards = [
  {
    title: "Website",
    text: "Modern, responsive and conversion-focused websites.",
  },
  {
    title: "SEO",
    text: "Search-ready structure for stronger Google visibility.",
  },
  {
    title: "Marketing",
    text: "Performance campaigns planned for measurable growth.",
  },
];

const aiNodes = [
  "Brand",
  "Website",
  "SEO",
  "Content",
  "Ads",
  "Leads",
  "Growth",
];

const WebsiteDigitalHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#EEF7FF] px-6 py-24 md:px-12 lg:px-20">
      {/* Main Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(98,136,185,0.45),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(13,36,68,0.25),transparent_32%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.95),transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.85),rgba(234,244,255,0.72),rgba(255,255,255,0.62))]" />

      {/* Animated Grid */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "72px 72px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)] bg-[size:72px_72px]"
      />

      {/* Blur Glow Elements */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-160px] top-[-140px] h-[460px] w-[460px] rounded-full bg-[#6288B9]/35 blur-[100px]"
      />

      <motion.div
        animate={{ scale: [1, 1.18, 1], x: [0, -35, 0], y: [0, 30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-180px] bottom-[-160px] h-[540px] w-[540px] rounded-full bg-[#0D2444]/25 blur-[120px]"
      />

      {/* AI Animated Orbit Design */}
      <div className="pointer-events-none absolute left-1/2 top-[52%] hidden h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-[#0D2444]/10"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          className="absolute inset-16 rounded-full border border-[#6288B9]/20"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
          className="absolute inset-32 rounded-full border border-white/70"
        />

        {/* Center AI Core */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] border border-white/70 bg-white/55 shadow-2xl shadow-[#0D2444]/15 backdrop-blur-xl"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D2444] via-[#244D7A] to-[#6F91BD] text-xl font-bold text-white">
            AI
          </div>
        </motion.div>

        {/* Orbit Nodes */}
        {aiNodes.map((node, index) => {
          const angle = (index / aiNodes.length) * 360;
          const radius = 260;

          return (
            <motion.div
              key={node}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3 + index * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
              }}
              className="absolute left-1/2 top-1/2"
            >
              <div className="glass -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-2 text-xs font-bold text-[#0D2444] shadow-lg shadow-[#0D2444]/10">
                {node}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col items-center justify-center text-center">
        {/* Badge */}
       <motion.div
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="mt-10 mb-8 inline-flex rounded-full bg-gradient-to-r from-[#0D2444] via-[#244D7A] to-[#6288B9] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#0D2444]/20"
>
  Website Development • SEO • Digital Marketing
</motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="max-w-6xl font-serif text-4xl font-bold leading-[1.02] tracking-tight md:text-5xl"
        >
          <span className="bg-gradient-to-r from-[#071A33] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
            Website Development, SEO & Digital Marketing Services in India
          </span>
        </motion.h1>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22 }}
          className="mt-8 max-w-5xl rounded-[32px] border border-white/60 bg-white/45 p-6 shadow-2xl shadow-[#0D2444]/10 backdrop-blur-xl md:p-8"
        >
          <div className="space-y-5">
            <p className="text-lg font-medium leading-8 text-[#24364B] md:text-xl">
              Double Trouble Studio provides website development, SEO and
              digital marketing services for businesses, brands, startups,
              hospitality companies, event businesses, luxury brands and growing
              organizations across India.
            </p>

            <p className="text-base leading-8 text-slate-600 md:text-lg">
              We build websites that are visually strong, mobile-friendly,
              SEO-ready and designed to support business growth. From custom
              website development and landing pages to search engine
              optimization, social media marketing, paid ads and lead-generation
              campaigns, our team helps brands create a stronger digital
              presence.
            </p>

            <p className="text-base leading-8 text-slate-600 md:text-lg">
              Whether you need a new website, a better online identity, more
              search visibility, stronger social media presence or
              performance-focused marketing, we help plan and execute the
              complete digital growth journey.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#contact" className="primary-btn text-center">
              Build Your Website
            </a>

            <a href="#services" className="secondary-btn text-center">
              Start Digital Growth
            </a>
          </div>
        </motion.div>

        {/* Highlight Pills */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.34 }}
          className="mt-10 flex max-w-5xl flex-wrap justify-center gap-3"
        >
          {heroHighlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/70 bg-white/60 px-5 py-3 text-sm font-semibold text-[#0D2444] shadow-md shadow-[#0D2444]/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Bottom Cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.46 }}
          className="mt-12 grid w-full max-w-5xl gap-5 md:grid-cols-3"
        >
          {growthCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-[28px] border border-white/70 bg-white/65 p-6 text-left shadow-xl shadow-[#0D2444]/10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D2444] via-[#244D7A] to-[#6288B9] text-lg font-bold text-white shadow-lg shadow-[#0D2444]/20">
                {card.title.charAt(0)}
              </div>

              <h3 className="text-xl font-bold text-[#0D2444]">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {card.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteDigitalHero;