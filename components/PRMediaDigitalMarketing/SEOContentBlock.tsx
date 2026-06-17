"use client";

import { motion } from "framer-motion";

type SEOContent = {
  title: string;
  content: string;
  keyword: string;
};

const seoContent: SEOContent[] = [
  {
    title: "PR Agency in India",
    keyword: "Public Relations",
    content:
      "Double Trouble Studio helps brands build public visibility through PR strategy, media relations, press release writing, event PR, corporate communication, startup PR, celebrity PR and reputation-focused brand messaging.",
  },
  {
    title: "Media Management Agency",
    keyword: "Media Coverage",
    content:
      "Our media management services support brands with journalist outreach, publication planning, press communication, media kit development, interview coordination, press conference support and post-campaign coverage tracking.",
  },
  {
    title: "Digital Marketing Agency in India",
    keyword: "Digital Growth",
    content:
      "We provide digital marketing services including social media marketing, SEO, paid advertising, content marketing, influencer marketing, online reputation management, campaign landing page strategy and digital brand communication.",
  },
  {
    title: "Integrated Brand Communication",
    keyword: "Brand Strategy",
    content:
      "PR, media and digital marketing work best when they are connected. We help brands create one strong communication system across press, social media, search engines, creators, ads, websites and audience touchpoints.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function SEOContentBlock() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-[#071120] px-6 py-24 text-white"
    >
      {/* Dark Theme Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071120] via-[#0D2444] to-[#1B4C7D]" />

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.34, 0.62, 0.34] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(98,136,185,0.32),transparent_34%)]"
      />

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.22, 0.42, 0.22] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_90%_85%,rgba(255,255,255,0.14),transparent_32%)]"
      />

      <div className="absolute inset-0 opacity-[0.07]">
        <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:76px_76px]" />
      </div>

      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[#6288B9]/20 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -24, 0], y: [0, 18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-180px] bottom-20 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.14 }}
          className="mb-16 grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-white/55"
            >
              SEO Optimized Overview
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl"
            >
              PR, Media & Digital Marketing Services For Modern Brands
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-3xl text-base leading-8 text-white/70 md:text-lg"
          >
            Double Trouble Studio supports brands with integrated communication
            services designed for visibility, credibility, online discovery,
            audience engagement and campaign performance.
          </motion.p>
        </motion.div>

        {/* SEO Content Cards */}
        <div className="relative">
          {/* Large Background Word */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pointer-events-none absolute -top-10 left-0 hidden text-[160px] font-black leading-none tracking-[-0.08em] text-white/[0.035] lg:block"
          >
            GROWTH
          </motion.div>

          <div className="relative grid gap-8 lg:grid-cols-2">
            {seoContent.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 38, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.68,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group relative h-full overflow-hidden rounded-[44px] border border-white/12 bg-white/[0.08] p-1 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-white/30 hover:bg-white/[0.12]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.16] via-transparent to-white/[0.04]" />

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0, 0.24, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.35,
                  }}
                  className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#6288B9] blur-3xl"
                />

                <div className="relative flex h-full flex-col overflow-hidden rounded-[40px] bg-white/[0.05] p-6 md:p-8">
                  {/* Top Strip */}
                  <div className="mb-8 flex items-center justify-between gap-5">
                    <motion.span
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                        delay: 0.1 + index * 0.05,
                      }}
                      className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/65"
                    >
                      {item.keyword}
                    </motion.span>

                    <motion.span
                      initial={{ opacity: 0, scale: 0.75 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.12 + index * 0.06,
                      }}
                      className="text-6xl font-black leading-none text-white/[0.08] transition duration-500 group-hover:text-white/[0.16]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>
                  </div>

                  {/* Capsule Body */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.62,
                      ease: "easeOut",
                      delay: 0.16 + index * 0.06,
                    }}
                    className="flex flex-1 flex-col rounded-[34px] bg-white px-7 py-8 text-[#0F172A] shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition duration-500 group-hover:shadow-[0_26px_90px_rgba(0,0,0,0.24)]"
                  >
                    <h3 className="text-2xl font-black leading-tight text-[#0D2444] md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                      {item.content}
                    </p>

                    <div className="mt-auto pt-8">
                      <div className="flex items-center gap-4">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.65,
                            ease: "easeOut",
                            delay: 0.22 + index * 0.05,
                          }}
                          className="h-px flex-1 origin-left bg-gradient-to-r from-[#0D2444] via-[#6288B9] to-transparent"
                        />

                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6288B9]">
                          SEO Ready
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom Mini Tags */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    {["PR", "Media", "Digital"].map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.38,
                          ease: "easeOut",
                          delay: 0.22 + tagIndex * 0.05,
                        }}
                        whileHover={{ y: -3 }}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/55 transition duration-300 hover:border-white/35 hover:text-white"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}