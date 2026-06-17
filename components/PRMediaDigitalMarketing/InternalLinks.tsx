"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type LinkItem = {
  title: string;
  description: string;
  href: string;
  label: string;
};

const internalLinks: LinkItem[] = [
  {
    title: "Celebrity Management",
    label: "Talent & PR",
    href: "/services/celebrity-management",
    description:
      "Celebrity bookings, public personality campaigns, brand endorsements and event appearances.",
  },
  {
    title: "Events & Weddings",
    label: "Experiences",
    href: "/services/events-weddings",
    description:
      "Premium events, launches, weddings, corporate experiences and hospitality activations.",
  },
  {
    title: "Web Development",
    label: "Website",
    href: "/services/web-development",
    description:
      "SEO-ready websites, landing pages and digital experiences for stronger brand credibility.",
  },
  {
    title: "Video Production",
    label: "Content",
    href: "/services/video-production",
    description:
      "Campaign videos, reels, launch films, brand stories and social-first video content.",
  },
  {
    title: "Social Media Marketing",
    label: "Growth",
    href: "/services/social-media-marketing",
    description:
      "Content planning, campaign ideas, reels, platform strategy and brand visibility.",
  },
  {
    title: "Contact Double Trouble Studio",
    label: "Start",
    href: "/contact",
    description:
      "Share your requirement and let our team plan your PR, media and digital marketing strategy.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function InternalLinks() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24"
    >
      {/* Global Theme Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EAF1F8]" />

      <div className="absolute inset-0 opacity-[0.35]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(13,36,68,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,36,68,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.26, 0.5, 0.26] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#6288B9]/15 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.22, 0.42, 0.22] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0D2444]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.14 }}
          className="mx-auto mb-16 max-w-5xl text-center"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#6288B9]"
          >
            Explore More Services
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-4xl font-black leading-tight tracking-tight text-[#0D2444] md:text-6xl"
          >
            Build A Complete Brand Growth System With DTS
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg"
          >
            PR, media and digital marketing work better when supported by
            websites, events, video content, celebrity campaigns and social
            media strategy.
          </motion.p>
        </motion.div>

        {/* Service Navigation Map */}
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass relative overflow-hidden rounded-[56px] p-5 shadow-2xl md:p-8"
        >
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/70 blur-3xl"
          />

          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#6288B9]/10 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_360px_1fr]">
            {/* Left Service Links */}
            <div className="space-y-5">
              {internalLinks.slice(0, 3).map((item, index) => (
                <ServiceLink
                  key={item.title}
                  item={item}
                  number={index + 1}
                  side="left"
                  delay={index * 0.08}
                />
              ))}
            </div>

            {/* Center DTS Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="relative mx-auto flex h-[390px] w-full max-w-[390px] items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-[#6288B9]/35"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-dashed border-[#0D2444]/16"
              />

              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-16 rounded-full border border-[#6288B9]/24"
              />

              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.28, 0.55, 0.28] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute h-[300px] w-[300px] rounded-full bg-[#6288B9]/18 blur-2xl"
              />

              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.28 }}
                className="relative flex h-[290px] w-[290px] flex-col items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#0D2444] via-[#244A78] to-[#6288B9] px-8 py-9 text-center text-white shadow-[0_30px_90px_rgba(13,36,68,0.28)]"
              >
                <motion.div
                  animate={{ x: [0, 14, 0], y: [0, -12, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/15 blur-3xl"
                />

                <motion.div
                  animate={{ x: [0, -14, 0], y: [0, 12, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-white/10 blur-3xl"
                />

                <div className="relative flex flex-col items-center">
                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70"
                  >
                    DTS Growth Hub
                  </motion.p>

                  <motion.h3
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
                    className="max-w-[210px] text-[28px] font-black leading-[1.15] text-white"
                  >
                    Connected Brand Services
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.26 }}
                    className="mt-4 max-w-[215px] text-[13px] leading-5 text-white/75"
                  >
                    PR, events, content, web and digital working together.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.34 }}
                  >
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex rounded-full border border-white/20 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0D2444] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]"
                    >
                      Start Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Service Links */}
            <div className="space-y-5">
              {internalLinks.slice(3, 6).map((item, index) => (
                <ServiceLink
                  key={item.title}
                  item={item}
                  number={index + 4}
                  side="right"
                  delay={index * 0.08}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceLink({
  item,
  number,
  side,
  delay,
}: {
  item: LinkItem;
  number: number;
  side: "left" | "right";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -36 : 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      <Link
        href={item.href}
        className="group relative block overflow-hidden rounded-full border border-slate-200 bg-white/85 p-3 shadow-[0_16px_50px_rgba(15,23,42,0.07)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-[#6288B9]/35 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)]"
      >
        <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#6288B9]/0 blur-3xl transition duration-500 group-hover:bg-[#6288B9]/16" />

        <div className="relative flex items-center gap-5">
          <motion.div
            whileHover={{ scale: 1.05, rotate: side === "left" ? -4 : 4 }}
            transition={{ duration: 0.25 }}
            className="primary-btn flex h-16 w-16 shrink-0 items-center justify-center rounded-full p-0 text-base"
          >
            {String(number).padStart(2, "0")}
          </motion.div>

          <div className="min-w-0 pr-4">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#6288B9]">
                {item.label}
              </span>

              <motion.span
                animate={{ scale: [1, 1.45, 1], opacity: [0.55, 1, 0.55] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#6288B9]"
              />
            </div>

            <h3 className="text-xl font-bold leading-tight text-[#0D2444]">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </div>
        </div>

        <div
          className={`absolute top-1/2 hidden h-px w-16 -translate-y-1/2 transition-all duration-500 group-hover:w-24 lg:block ${
            side === "left"
              ? "right-6 bg-gradient-to-r from-[#6288B9]/60 to-transparent"
              : "left-6 bg-gradient-to-l from-[#6288B9]/60 to-transparent"
          }`}
        />
      </Link>
    </motion.div>
  );
}