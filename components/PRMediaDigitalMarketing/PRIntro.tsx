"use client";

import { motion } from "framer-motion";

const highlights: string[] = [
  "Public Relations",
  "Media Coverage",
  "Social Media Marketing",
  "Influencer Campaigns",
  "SEO Strategy",
  "Paid Ads",
  "Online Reputation",
  "Brand Communication",
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 },
};

export default function PRIntro() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-white px-6 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EAF1F8]" />

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-[#6288B9]/20 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-120px] bottom-10 h-80 w-80 rounded-full bg-[#0D2444]/10 blur-3xl"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.16 }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Gradient Box */}
          <motion.div
            variants={fadeLeft}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-[#0D2444] via-[#244A78] to-[#6288B9] p-8 text-white shadow-2xl md:p-10"
          >
            <motion.div
              animate={{ x: [0, 18, 0], y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/15 blur-2xl"
            />

            <motion.div
              animate={{ x: [0, -18, 0], y: [0, 14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative">
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/75"
              >
                Integrated Services
              </motion.p>

              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="text-3xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                Integrated PR, Media & Digital Marketing Services
              </motion.h2>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="mt-6 text-base leading-8 text-white/82"
              >
                One connected communication strategy across media, search,
                social platforms, influencers, online reputation, content and
                digital advertising.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="mt-8 h-px w-full bg-white/20"
              />

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                {[
                  {
                    number: "360°",
                    label: "Brand Communication",
                  },
                  {
                    number: "PR +",
                    label: "Digital Growth",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur"
                  >
                    <p className="text-3xl font-bold">{item.number}</p>
                    <p className="mt-1 text-sm text-white/70">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={fadeRight}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#6288B9]"
            >
              Why This Matters
            </motion.p>

            <motion.h3
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#0D2444] md:text-5xl"
            >
              Visibility today needs media credibility and digital performance
              working together.
            </motion.h3>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="mt-7 space-y-5 text-base leading-8 text-slate-600 md:text-lg"
            >
              <p>
                Strong brand visibility is no longer built through one channel
                alone. Businesses today need a connected communication strategy
                across media, search, social platforms, influencers, online
                reputation, content and digital advertising.
              </p>

              <p>
                Double Trouble Studio helps brands create this connection
                through integrated PR, media and digital marketing services. We
                work with businesses to improve brand awareness, strengthen
                trust, generate media conversations, increase digital reach and
                support campaign performance.
              </p>

              <p>
                Whether you are launching a new brand, promoting an event,
                building a public profile, managing a hospitality business,
                growing a luxury brand or scaling a corporate presence, our team
                helps create the right communication strategy for your audience.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlight Strip */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          className="mt-16 rounded-[30px] border border-slate-200 bg-white/80 p-5 shadow-xl backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-5 shadow-sm transition duration-300 hover:border-[#6288B9]/35 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: 0.2 + index * 0.06,
                  }}
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0D2444] to-[#6288B9]"
                />

                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#6288B9]/0 blur-2xl transition duration-500 group-hover:bg-[#6288B9]/16" />

                <p className="relative text-sm font-semibold text-[#0D2444] transition duration-300 group-hover:translate-x-1">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}