"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute
          inset-0
        
          bg-center
          scale-[1.02]
          brightness-[0.80]
        "
        style={{
          backgroundImage: "url('/hero_img.png')", // YOUR IMAGE
        }}
      />

     

      {/* SOFT GRADIENT */}

      {/* GLOW */}


      <div className="relative z-10 max-w-[1240px] mx-auto px-6 pt-[145px] pb-[90px]">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* LABEL */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-white/10
            backdrop-blur-xl
                mb-6
              "
            >
              <div className="w-2 h-2 rounded-full " />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[2px]
                  text-white/70
                  font-medium
                "
              >
                Creative Digital Studio
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="
                text-[40px]
                md:text-[58px]
                leading-[1]
                tracking-[-3px]
                font-bold
                text-white
                max-w-[580px]
              "
              style={{
                fontFamily:
                  "New York, ui-serif, Georgia, serif",
              }}
            >
              Building

              <span
                className="
                  block
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#A8BEDB]
                  via-white
                  to-[#6288B9]
                "
              >
                Cultural Brands
              </span>

              With Presence
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                text-[15px]
                leading-[29px]
                text-white/65
                max-w-[520px]
              "
            >
              Premium websites, branding and digital
              experiences crafted for hospitality,
              lifestyle and luxury businesses with
              modern visual direction.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-9">
              <button
                className="
                  group
                  h-[52px]
                  px-7
                  rounded-full
                  bg-white
                  text-[#0D2444]
                  text-[14px]
                  font-semibold
                  flex
                  items-center
                  gap-3
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Start Project

                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                className="
                  h-[52px]
                  px-7
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  backdrop-blur-xl
                  text-white
                  text-[14px]
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-white/15
                "
              >
                View Work
              </button>
            </div>

            {/* STATS */}
            <div className="flex gap-8 flex-wrap mt-12">
              <div>
                <h3 className="text-[26px] font-bold text-white">
                  120+
                </h3>

                <p className="text-white/45 text-xs mt-1">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-[26px] font-bold text-white">
                  98%
                </h3>

                <p className="text-white/45 text-xs mt-1">
                  Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-[26px] font-bold text-white">
                  8+
                </h3>

                <p className="text-white/45 text-xs mt-1">
                  Experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-end"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-white/10
                backdrop-blur-2xl
                p-7
                md:p-8
                w-full
                max-w-[460px]
                
              "
            >
              {/* INNER GLOW */}

              <div className="relative z-10">
                {/* SMALL TEXT */}
                <p
                  className="
                    uppercase
                    tracking-[2px]
                    text-[10px]
                    text-white/45
                    font-medium
                  "
                >
                  Contact Us
                </p>

                {/* TITLE */}
                <h2
                  className="
                    mt-3
                    text-[30px]
                    leading-[1.05]
                    tracking-[-2px]
                    font-bold
                    text-white
                    max-w-[320px]
                  "
                  style={{
                    fontFamily:
                      "New York, ui-serif, Georgia, serif",
                  }}
                >
                  Let’s Create Something Beautiful
                </h2>

                {/* TEXT */}
                <p className="mt-4 text-[14px] leading-7 text-white/55">
                  Share your project vision and business
                  goals with our creative team.
                </p>

                {/* FORM */}
                <form className="space-y-4 mt-7">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="
                      w-full
                      h-[52px]
                      px-5
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/10
                      backdrop-blur-xl
                      text-white
                      text-[14px]
                      outline-none
                      placeholder:text-white/30
                      focus:border-[#A8BEDB]
                    "
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      w-full
                      h-[52px]
                      px-5
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/10
                      backdrop-blur-xl
                      text-white
                      text-[14px]
                      outline-none
                      placeholder:text-white/30
                      focus:border-[#A8BEDB]
                    "
                  />

                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="
                      w-full
                      p-5
                      rounded-[22px]
                      border
                      border-white/10
                      bg-white/10
                      backdrop-blur-xl
                      text-white
                      text-[14px]
                      outline-none
                      resize-none
                      placeholder:text-white/30
                      focus:border-[#A8BEDB]
                    "
                  />

                  <button
                    className="
                      group
                      w-full
                      h-[54px]
                      rounded-2xl
                      bg-white
                      text-[#0D2444]
                      text-[14px]
                      font-semibold
                      flex
                      items-center
                      justify-center
                      gap-3
                      transition-all
                      duration-300
                      hover:-translate-y-1
                    "
                  >
                    Send Inquiry

                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}