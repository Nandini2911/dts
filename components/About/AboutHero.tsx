"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden  pt-[110px] pb-[160px]">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0  bg-center "
        style={{
          backgroundImage:
            "url('/abouthero.jpg')", // CHANGE IMAGE PATH HERE
        }}
      />

      {/* BACKGROUND COLOR */}
   

      {/* PREMIUM GRADIENT GLOWS */}


      

      <div className="relative z-10 max-w-[1400px] mx-auto px-7">
        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div
  className="
    px-6
    py-3
    rounded-full
    border
    border-[#0D2444]/10
    bg-gradient-to-r
    from-[#0D2444]
    via-[#16365F]
    to-[#1F4B7A]
    backdrop-blur-xl
    shadow-[0_10px_40px_rgba(13,36,68,0.25)]
  "
>
            <span
              className="
                text-[12px]
                uppercase
                tracking-[0.25em]
                font-semibold
                text-white
              "
            >
              About Double Trouble Studio
            </span>
          </div>
        </motion.div>

        {/* HERO CONTENT */}
        <div className="mt-2 text-center">
          {/* MAIN TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
            }}
            className="
              text-[40px]
              sm:text-[48px]
              md:text-[58px]
              leading-[1.1]
              tracking-[-3px]
              font-black
            "
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            <span className="text-[#0F172A]">
              We Build
            </span>

            <br />

            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#0D2444]
                via-[#6288B9]
                to-[#A4B8D2]
              "
            >
              Cultural Brands
            </span>

            <br />

            <span className="text-[#0F172A]">
              That Feel Alive
            </span>
          </motion.h1>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
            className="
              mx-auto
              mt-10
              max-w-[820px]
              text-[17px]
              md:text-[20px]
              leading-[2]
              text-black
              font-medium
            "
          >
            Double Trouble Studio is a Mumbai-based creative agency
            building luxury digital experiences, modern storytelling
            and high-performance brand systems for hospitality,
            lifestyle, luxury and culture-driven brands.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.35,
            }}
            className="
              flex
              flex-wrap
              justify-center
              items-center
              gap-5
              mt-12
            "
          >
            <Link href="/contact">
              <button className="primary-btn flex items-center gap-2">
                Start Project
                <ArrowRight size={18} />
              </button>
            </Link>

            <Link href="/projects">
              <button className="secondary-btn">
                View Work
              </button>
            </Link>
          </motion.div>
        </div>

        {/* FLOATING VISUAL */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.1,
            delay: 0.4,
          }}
          className="
            relative
            mt-24
            max-w-[1100px]
            mx-auto
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/40
              bg-white/50
              backdrop-blur-2xl
              shadow-[0_20px_80px_rgba(15,23,42,0.08)]
              h-[420px]
            "
          >
            {/* INNER GLOW */}
            <div className="absolute top-[-100px] left-[10%] w-[220px] h-[120px] rounded-full bg-[#6288B9]/20 blur-3xl animate-pulse" />

            <div className="absolute bottom-[-120px] right-[10%] w-[220px] h-[120px] rounded-full bg-[#A4B8D2]/25 blur-3xl animate-pulse" />

            {/* CENTER CONTENT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
              <motion.h2
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  text-[40px]
                  md:text-[58px]
                  leading-[1]
                  tracking-[-3px]
                  font-black
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#6288B9]
                  to-[#A4B8D2]
                "
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Strategy
                <br />
                Meets Emotion
              </motion.h2>

              <p className="mt-8 max-w-[620px] text-black leading-9 text-[17px]">
                Creating timeless digital experiences with premium
                aesthetics, emotional storytelling and modern brand
                systems designed for ambitious businesses.
              </p>
            </div>

            {/* FLOATING BLUR ELEMENTS */}
            <motion.div
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-10
                left-10
                w-28
                h-28
                rounded-full
                bg-gradient-to-r
                from-[#6288B9]/30
                to-[#A4B8D2]/20
                blur-2xl
              "
            />

            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-10
                right-10
                w-36
                h-36
                rounded-full
                bg-gradient-to-r
                from-[#0D2444]/20
                to-[#6288B9]/20
                blur-2xl
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}