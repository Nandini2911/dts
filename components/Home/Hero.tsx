"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[170px] pb-[120px]">
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#6288B9]/10 blur-3xl rounded-full" />

      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* SMALL LABEL */}
            <div
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                border
                border-slate-200
                bg-white
                text-[13px]
                tracking-[1px]
                uppercase
                text-slate-500
                font-medium
                mb-8
              "
            >
              Premium Digital Agency
            </div>

            {/* HEADING */}
            <h1
              className="
                text-[52px]
                md:text-[72px]
                leading-[0.95]
                tracking-[-3px]
                text-[#0F172A]
                font-black
                max-w-[700px]
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, serif',
              }}
            >
              Building Digital
              <span className="block text-[#6288B9]">
                Experiences
              </span>
              For Modern Brands
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-[18px]
                leading-[34px]
                text-slate-600
                max-w-[620px]
              "
            >
              We create premium websites, branding systems
              and digital experiences that help modern
              businesses grow with clarity, trust and strong
              visual positioning.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-5 mt-10">
              {/* PRIMARY */}
              <button
                className="
                  h-[58px]
                  px-8
                  rounded-[16px]
                  bg-[#0D2444]
                  text-white
                  text-[15px]
                  font-semibold
                  flex
                  items-center
                  gap-3
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#16345C]
                  shadow-[0_10px_30px_rgba(13,36,68,0.18)]
                "
              >
                Start Project

                <ArrowRight className="w-4 h-4" />
              </button>

              {/* SECONDARY */}
              <button
                className="
                  h-[58px]
                  px-8
                  rounded-[16px]
                  border
                  border-slate-200
                  bg-white
                  text-slate-700
                  text-[15px]
                  font-medium
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                View Work
              </button>
            </div>

            {/* STATS */}
            <div className="flex gap-14 mt-16">
              <div>
                <h3 className="text-[34px] font-black text-[#0D2444]">
                  120+
                </h3>

                <p className="text-slate-500 mt-1 text-sm">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-[34px] font-black text-[#0D2444]">
                  98%
                </h3>

                <p className="text-slate-500 mt-1 text-sm">
                  Client Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-[34px] font-black text-[#0D2444]">
                  7+
                </h3>

                <p className="text-slate-500 mt-1 text-sm">
                  Years Experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="
                bg-white
                border
                border-slate-200
                rounded-[32px]
                p-8
                shadow-[0_20px_60px_rgba(15,23,42,0.06)]
              "
            >
              {/* FORM TITLE */}
              <div className="mb-8">
                <h2
                  className="
                    text-[38px]
                    leading-[1]
                    tracking-[-2px]
                    font-black
                    text-[#0F172A]
                  "
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, serif',
                  }}
                >
                  Let’s Build
                  <span className="block text-[#6288B9]">
                    Something Great
                  </span>
                </h2>

                <p className="mt-4 text-slate-500 leading-[30px]">
                  Tell us about your brand, project or
                  business goals.
                </p>
              </div>

              {/* FORM */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                    w-full
                    h-[58px]
                    px-5
                    rounded-[16px]
                    border
                    border-slate-200
                    bg-[#F8FAFC]
                    outline-none
                    text-slate-700
                    focus:border-[#6288B9]
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full
                    h-[58px]
                    px-5
                    rounded-[16px]
                    border
                    border-slate-200
                    bg-[#F8FAFC]
                    outline-none
                    text-slate-700
                    focus:border-[#6288B9]
                  "
                />

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="
                    w-full
                    p-5
                    rounded-[20px]
                    border
                    border-slate-200
                    bg-[#F8FAFC]
                    outline-none
                    resize-none
                    text-slate-700
                    focus:border-[#6288B9]
                  "
                />

                <button
                  className="
                    w-full
                    h-[58px]
                    rounded-[16px]
                    bg-[#0D2444]
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-[#16345C]
                    hover:-translate-y-1
                  "
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}