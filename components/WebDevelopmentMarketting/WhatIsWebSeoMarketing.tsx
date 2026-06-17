"use client";

import { motion } from "framer-motion";

const definitions = [
  {
    label: "01",
    title: "Website Development",
    text: "Website development is the process of planning, designing, building and maintaining a website for a business, brand or organization. It includes website structure, user experience, design, coding, mobile responsiveness, speed, content placement, forms, integrations and technical setup.",
  },
  {
    label: "02",
    title: "SEO",
    text: "SEO, or search engine optimization, helps improve how easily search engines and users can understand and discover your website. It includes keyword research, service-page content, technical SEO, on-page SEO, local SEO, internal linking, metadata, image optimization and content strategy.",
  },
  {
    label: "03",
    title: "Digital Marketing",
    text: "Digital marketing is the process of promoting a brand online through social media, search engines, paid ads, content marketing, email campaigns, influencer collaborations and performance campaigns.",
  },
];

const focusWords = [
  "Visibility",
  "Search Rankings",
  "Lead Generation",
  "Online Presence",
];

export default function WhatIsWebSeoMarketing() {
  return (
    <section className="relative overflow-hidden bg-[#FBFDFF] px-6 py-28 md:px-12 lg:px-20">
      {/* Premium Light Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(98,136,185,0.22),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(13,36,68,0.10),transparent_34%),linear-gradient(135deg,#FFFFFF_0%,#EEF7FF_52%,#FFFFFF_100%)]" />

      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#BFD5EF]/45 blur-[110px]"
      />

      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 bottom-20 h-[480px] w-[480px] rounded-full bg-[#6288B9]/18 blur-[120px]"
      />

      {/* Editorial Lines */}
      <div className="absolute left-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#D7E6F8] to-transparent" />
      <div className="absolute right-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#D7E6F8] to-transparent" />

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
            Understanding The Digital Foundation
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
              What Is Website Development, SEO & Digital Marketing?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600"
          >
            Together, these three services create the base of a strong digital
            presence — from how your brand looks online to how easily customers
            can discover and contact you.
          </motion.p>
        </div>

        {/* Main No-Card Layout */}
        <div className="mt-24 grid gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          {/* Left Visual Text */}
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="mb-8 h-px w-full bg-gradient-to-r from-[#0D2444] via-[#BFD5EF] to-transparent" />

            <p className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text font-serif text-5xl font-bold leading-tight text-transparent md:text-7xl">
  Build.
  <br />
  Rank.
  <br />
  Grow.
</p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              A website gives your brand a professional digital home. SEO helps
              that website get discovered. Digital marketing brings the right
              audience and turns attention into business opportunities.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {focusWords.map((word) => (
                <motion.span
                  key={word}
                  whileHover={{ y: -4 }}
                  className="rounded-full border border-[#D7E6F8] bg-white/70 px-5 py-3 text-sm font-bold text-[#0D2444] shadow-lg shadow-[#0D2444]/5 backdrop-blur-xl"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#BFD5EF] to-[#0D2444]" />
          </motion.div>

          {/* Right Definition Lines */}
          <div className="relative">
            <div className="absolute left-[18px] top-0 hidden h-full w-px bg-gradient-to-b from-[#6288B9] via-[#D7E6F8] to-transparent md:block" />

            <div className="space-y-12">
              {definitions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative grid gap-6 md:grid-cols-[70px_1fr]"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0D2444] to-[#6288B9] text-xs font-bold text-white shadow-xl shadow-[#0D2444]/20 md:mt-1">
                    {item.label}
                  </div>

                  <div className="border-b border-[#D7E6F8] pb-10">
                    <h3 className="font-serif text-3xl font-bold text-[#0D2444] md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mt-24 border-y border-[#D7E6F8] py-10 text-center"
        >
          <h3 className="mx-auto max-w-5xl font-serif text-3xl font-bold leading-tight text-[#0D2444] md:text-3xl">
            Together, website development, SEO and digital marketing help
            businesses build visibility, generate inquiries and create a
            stronger online presence.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}