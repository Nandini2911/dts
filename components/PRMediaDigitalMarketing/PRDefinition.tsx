"use client";

import { motion } from "framer-motion";

type DefinitionCard = {
  title: string;
  subtitle: string;
  description: string;
};

const definitionCards: DefinitionCard[] = [
  {
    title: "Public Relations",
    subtitle: "Reputation, credibility and public image",
    description:
      "Public relations focuses on reputation, media coverage, press communication, brand credibility and public image. It helps brands communicate the right message to the right audience through trusted media and public platforms.",
  },
  {
    title: "Media Management",
    subtitle: "Press, journalists and publication planning",
    description:
      "Media management focuses on building relationships with journalists, publications, news platforms, digital portals, editors, content teams and media houses to support brand visibility and campaign communication.",
  },
  {
    title: "Digital Marketing",
    subtitle: "Search, social, ads and online growth",
    description:
      "Digital marketing focuses on online visibility through social media, search engines, paid ads, content marketing, influencer collaborations, email campaigns, website traffic and lead generation.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function PRDefinition() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#EAF1F8]" />

      <motion.div
        animate={{ scale: [1, 1.14, 1], opacity: [0.42, 0.72, 0.42] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#6288B9]/15 blur-3xl"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.14 }}
        className="relative mx-auto max-w-7xl"
      >
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#6288B9]"
          >
            Clear Definition
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-3xl font-bold leading-tight tracking-tight text-[#0D2444] md:text-5xl"
          >
            What Is PR, Media & Digital Marketing?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg"
          >
            PR, media and digital marketing is the combined process of building
            brand visibility, public perception and audience engagement through
            earned media, owned content, paid campaigns and digital platforms.
          </motion.p>
        </div>

        {/* Main Definition Box */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-10 overflow-hidden rounded-[34px] bg-gradient-to-br from-[#0D2444] via-[#244A78] to-[#6288B9] p-8 text-white shadow-2xl md:p-12"
        >
          <motion.div
            animate={{ x: [0, 22, 0], y: [0, -16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl"
          />

          <motion.div
            animate={{ x: [0, -22, 0], y: [0, 16, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                Integrated Communication
              </p>

              <h3 className="text-2xl font-bold leading-tight md:text-4xl">
                Earned media, owned content and paid campaigns working together.
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-base leading-8 text-white/82 md:text-lg"
            >
              Together, these services help brands become more visible, trusted
              and discoverable across both traditional and digital channels. PR
              builds credibility, media management creates visibility, and
              digital marketing improves reach, engagement and performance.
            </motion.p>
          </div>
        </motion.div>

        {/* Three Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {definitionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              whileHover={{ y: -10, scale: 1.015 }}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-xl transition duration-500 hover:border-[#6288B9]/40 hover:bg-gradient-to-br hover:from-[#0D2444] hover:via-[#244A78] hover:to-[#6288B9]"
            >
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: 0.25 + index * 0.12,
                }}
                className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0D2444] to-[#6288B9] group-hover:from-white/60 group-hover:to-white/20"
              />

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#6288B9]/0 blur-3xl transition duration-500 group-hover:bg-white/18" />

              <motion.div
                whileHover={{ rotate: 3 }}
                transition={{ duration: 0.25 }}
                className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D2444] to-[#6288B9] text-sm font-bold text-white shadow-lg transition duration-500 group-hover:bg-white group-hover:from-white group-hover:to-white group-hover:text-[#0D2444]"
              >
                0{index + 1}
              </motion.div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-[#0D2444] transition duration-500 group-hover:text-white">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#6288B9] transition duration-500 group-hover:text-white/75">
                  {card.subtitle}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-600 transition duration-500 group-hover:text-white/72 md:text-base">
                  {card.description}
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#6288B9]/60 to-transparent transition duration-500 group-hover:from-white/50 group-hover:to-transparent" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 transition duration-500 group-hover:text-white/50">
                    Definition
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}