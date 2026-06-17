"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Website Strategy",
    text: "We plan your website structure, service flow, user journey and content hierarchy before design begins.",
  },
  {
    title: "UI/UX & Development",
    text: "We build premium, mobile-friendly websites that load smoothly and represent your brand clearly.",
  },
  {
    title: "SEO Foundation",
    text: "We structure pages with SEO content, keyword planning, technical optimization and search-friendly architecture.",
  },
  {
    title: "Digital Marketing",
    text: "We support the website with social media marketing, paid advertising and conversion-focused communication.",
  },
];

const orbitItems = ["Website", "SEO", "UX", "Ads", "Leads", "Growth"];

export default function CompleteDigitalSolutions() {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] px-6 py-28 md:px-12 lg:px-20">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(98,136,185,0.24),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(13,36,68,0.12),transparent_32%),linear-gradient(135deg,#FFFFFF_0%,#EEF7FF_48%,#FFFFFF_100%)]" />

      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#BFD5EF]/45 blur-[110px]"
      />

      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 bottom-10 h-[480px] w-[480px] rounded-full bg-[#6288B9]/20 blur-[120px]"
      />

      {/* Thin Premium Lines */}
      <div className="absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#CFE0F4] to-transparent" />
      <div className="absolute right-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#DCEBFF] to-transparent" />

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
            Complete Digital Solutions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
              Complete Web Development, SEO & Digital Marketing Solutions
            </span>
          </motion.h2>
        </div>

        {/* Layout */}
        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
          {/* Left Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
          >
            <div className="mb-10 h-px w-full bg-gradient-to-r from-[#0D2444] via-[#BFD5EF] to-transparent" />

            <div className="space-y-7 text-base leading-8 text-slate-600 md:text-lg">
              <p>
                <span className="text-3xl font-serif font-bold text-[#0D2444]">
                  A website
                </span>{" "}
                is often the first place where customers judge a brand. It
                should not only look good, but also load smoothly, explain your
                services clearly, rank on search engines and convert visitors
                into inquiries.
              </p>

              <p>
                Double Trouble Studio helps businesses create websites and
                digital marketing systems that work together. We combine website
                strategy, UI/UX planning, SEO content, technical optimization,
                social media marketing, paid advertising and conversion-focused
                communication.
              </p>

              <p>
                Our approach is simple: build a website that represents your
                brand properly, optimize it for search visibility and support it
                with digital marketing campaigns that bring the right audience.
              </p>
            </div>

            <div className="mt-12">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6288B9]">
                Growth Method
              </p>

              <h3 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-[#0D2444] md:text-4xl">
                Strategy first. Design with purpose. SEO from the foundation.
                Marketing for results.
              </h3>
            </div>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#BFD5EF] to-[#0D2444]" />
          </motion.div>

          {/* Right Animated AI Orbit */}
          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="relative flex min-h-[520px] items-center justify-center"
          >
            {/* SVG Animated Flow Lines */}
            <motion.svg
              viewBox="0 0 500 500"
              className="absolute h-full w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.circle
                cx="250"
                cy="250"
                r="190"
                fill="none"
                stroke="#BFD5EF"
                strokeWidth="1"
                strokeDasharray="8 12"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "center" }}
              />

              <motion.circle
                cx="250"
                cy="250"
                r="130"
                fill="none"
                stroke="#6288B9"
                strokeWidth="1"
                strokeDasharray="5 10"
                animate={{ rotate: -360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "center" }}
              />

              
            </motion.svg>

            {/* Center */}
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-[#0D2444] via-[#244D7A] to-[#7FA6D4] text-2xl font-bold text-white shadow-2xl shadow-[#0D2444]/25"
            >
              DTS
            </motion.div>

            {/* Orbit Text */}
            {orbitItems.map((item, index) => {
              const positions = [
                "left-[50%] top-[3%] -translate-x-1/2",
                "right-[3%] top-[25%]",
                "right-[8%] bottom-[20%]",
                "left-[50%] bottom-[3%] -translate-x-1/2",
                "left-[5%] bottom-[22%]",
                "left-[2%] top-[25%]",
              ];

              return (
                <motion.div
                  key={item}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className={`absolute ${positions[index]} z-20`}
                >
                  <span className="inline-flex rounded-full border border-[#D7E6F8] bg-white/80 px-5 py-2 text-sm font-bold text-[#0D2444] shadow-lg shadow-[#0D2444]/8 backdrop-blur-xl">
                    {item}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Line Process - No Cards */}
        <div className="mt-24">
          <div className="mb-10 flex items-center gap-5">
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#6288B9]">
              What We Combine
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#BFD5EF] to-transparent" />
          </div>

          <div className="grid gap-10 md:grid-cols-4">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative border-t border-[#CFE0F4] pt-7"
              >
                <span className="absolute -top-4 left-0 bg-[#F8FBFF] pr-4 text-3xl font-serif font-bold text-[#6288B9]">
                  0{index + 1}
                </span>

                <h4 className="mt-5 text-xl font-bold text-[#0D2444]">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}