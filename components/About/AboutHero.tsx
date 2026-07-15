"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden pt-[180px] pb-[160px]"
      aria-label="About Double Trouble Studio creative agency, branding agency and digital marketing agency in Mumbai India"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/abouthero.jpg')",
        }}
        role="img"
        aria-label="Double Trouble Studio creative agency background for branding, digital marketing, PR, web development and AI video production"
      />

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
        <div className="mt-6 text-center">
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
            <span className="text-[#0F172A]">We Build</span>

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

            <span className="text-[#0F172A]">That Feel Alive</span>
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
            Double Trouble Studio is a{" "}
            <Link
              href="https://www.dtsworld.in/about"
              className="font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]"
            >
              Mumbai-based creative agency
            </Link>
            ,{" "}
            <Link
              href="https://www.dtsworld.in/about"
              className="font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]"
            >
              branding agency
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.dtsworld.in/services/pr-media-marketing"
              className="font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]"
            >
              digital marketing agency
            </Link>{" "}
            building{" "}
            <Link
              href="https://www.dtsworld.in/blog/luxury-website-ux-principles-minimalism-speed-emotional-impact"
              className="font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]"
            >
              luxury digital experiences
            </Link>
            , modern storytelling,{" "}
            <Link
              href="https://www.dtsworld.in/services/pr-media-marketing"
              className="font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]"
            >
              PR campaigns
            </Link>
            ,{" "}
            <Link
              href="https://www.dtsworld.in/services/web-development-marketing"
              className="font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]"
            >
              website development
            </Link>
            ,{" "}
            <Link
              href="https://www.dtsworld.in/services/ai-video-vfx"
              className="font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]"
            >
              AI video production
            </Link>{" "}
            and high-performance brand systems for hospitality, lifestyle,
            luxury, restaurant and culture-driven brands across India.
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
            <Link
              href="https://www.dtsworld.in/contact"
              aria-label="Start a branding, website, PR or digital marketing project with Double Trouble Studio"
              className="primary-btn flex items-center gap-2"
            >
              Start Project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link
              href="https://www.dtsworld.in/work"
              aria-label="View Double Trouble Studio branding, web development, events, PR and AI video work"
              className="secondary-btn"
            >
              View Work
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
            aria-label="Double Trouble Studio strategy, storytelling and brand architecture visual panel"
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
                Creating timeless digital experiences with{" "}
                <Link
                  href="https://www.dtsworld.in/blog/designing-high-end-luxury-websites"
                  className="font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]"
                >
                  premium aesthetics
                </Link>
                ,{" "}
                <Link
                  href="https://www.dtsworld.in/about"
                  className="font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]"
                >
                  emotional storytelling
                </Link>
                ,{" "}
                <Link
                  href="https://www.dtsworld.in/services/web-development-marketing"
                  className="font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]"
                >
                  SEO-ready website systems
                </Link>
                ,{" "}
                <Link
                  href="https://www.dtsworld.in/services/pr-media-marketing"
                  className="font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]"
                >
                  PR-led brand communication
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.dtsworld.in/blog/luxury-brand-strategy-roadmap-india"
                  className="font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]"
                >
                  modern brand architecture
                </Link>{" "}
                designed for ambitious businesses.
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

        {/* AI + GEO SEO CONTEXT */}
        <div className="sr-only">
          <h2>
            About Double Trouble Studio, a Mumbai based creative agency,
            branding agency, digital marketing agency, PR agency, website
            development company, guest management agency, event marketing agency
            and AI video production studio in India.
          </h2>

          <p>
            Double Trouble Studio builds cultural brands through brand strategy,
            visual identity, luxury brand positioning, website design, website
            development, SEO, digital marketing, social media marketing, public
            relations, media campaigns, event branding, guest management,
            celebrity management, AI video production, VFX and creative
            storytelling.
          </p>

          <p>
            The agency works with hospitality brands, luxury brands, restaurants,
            cafés, fashion labels, lifestyle companies, wedding planners, event
            companies, creators, influencers, corporate brands, founders and
            modern startups across Mumbai, Delhi, Chandigarh, Bangalore,
            Hyderabad, Pune, Ahmedabad, Goa and across India.
          </p>

          <p>
            Double Trouble Studio helps brands build premium positioning,
            stronger online presence, cultural relevance, SEO visibility, PR
            authority, digital growth and long-term brand architecture through
            strategic creativity and premium execution.
          </p>
        </div>
      </div>
    </section>
  );
}