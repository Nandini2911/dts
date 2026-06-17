"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const points = [
  "PR Strategy",
  "Media Coverage",
  "Digital Marketing",
  "Brand Growth",
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function FinalCTA() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24"
    >
      {/* Global Theme Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EAF1F8]" />

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
        <motion.div
          initial={{ opacity: 0, y: 42, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[56px] bg-gradient-to-br from-[#0D2444] via-[#183A66] to-[#6288B9] px-6 py-16 text-white shadow-[0_30px_100px_rgba(13,36,68,0.28)] md:px-12 md:py-20"
        >
          {/* Decorative Glow */}
          <motion.div
            animate={{ x: [0, 22, 0], y: [0, -18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-white/15 blur-3xl"
          />

          <motion.div
            animate={{ x: [0, -22, 0], y: [0, 18, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"
          />

          <motion.div
            animate={{ scale: [1, 1.14, 1], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"
          />

          {/* Soft Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.12]">
            <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:58px_58px]" />
          </div>

          {/* Top Animated Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            className="absolute left-12 right-12 top-0 h-px origin-center bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.14 }}
            className="relative mx-auto max-w-5xl text-center"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-white/65"
            >
              Start Your Campaign
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl"
            >
              Ready To Build Stronger Brand Visibility?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/76 md:text-lg"
            >
              Whether you need PR, media coverage, influencer marketing, social
              media growth, SEO, paid ads, online reputation management or a
              complete digital communication strategy, Double Trouble Studio can
              help you plan the right campaign.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex rounded-2xl bg-white px-8 py-4 text-sm font-bold text-[#0D2444] shadow-[0_18px_50px_rgba(255,255,255,0.18)] transition duration-300 hover:shadow-[0_24px_70px_rgba(255,255,255,0.26)]"
                >
                  Discuss Your Requirement
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition duration-300 hover:bg-white/15 hover:shadow-[0_18px_50px_rgba(255,255,255,0.12)]"
                >
                  Book A Consultation
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Mini Points */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: 0.08 }}
            className="relative mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {points.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.04,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-center backdrop-blur transition duration-300 hover:border-white/35 hover:bg-white/15"
              >
                <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/70 to-transparent transition duration-500 group-hover:scale-x-100" />

                <motion.span
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.45, 1, 0.45],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="mx-auto mb-3 block h-2 w-2 rounded-full bg-white/65"
                />

                <p className="text-sm font-semibold text-white">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}