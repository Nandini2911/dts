"use client";

import { motion } from "framer-motion";

const clients = [
  "/logos/1.webp",
  "/logos/2.webp",
  "/logos/3.webp",
  "/logos/4.webp",
  "/logos/5.webp",
  "/logos/6.webp",
  "/logos/7.webp",
  "/logos/8.webp",
  "/logos/9.webp",
  "/logos/10.webp",
  "/logos/11.webp",
  "/logos/12.webp",
  "/logos/13.webp",
  "/logos/14.webp",
  "/logos/15.webp",
  "/logos/16.webp",
  "/logos/17.webp",
  "/logos/18.webp",
  "/logos/19.webp",
  "/logos/20.webp",
  "/logos/21.webp",
  "/logos/22.webp",
  "/logos/23.webp",
  "/logos/24.webp",
  "/logos/25.webp",
  "/logos/26.webp",
  "/logos/27.webp",
  "/logos/28.webp",
  "/logos/29.webp",
  "/logos/30.webp",
  "/logos/31.webp",
  "/logos/32.webp",
  "/logos/33.webp",
  "/logos/34.webp",
  "/logos/35.webp",
  "/logos/36.webp",
  "/logos/37.webp",
  "/logos/38.webp",
  "/logos/39.webp",
  "/logos/40.webp",
];

export default function ClientLogoSection() {
  return (
    <section className="relative overflow-hidden py-[20px] bg-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7fafc] to-white" />

        {/* Glow */}
        <div className="absolute top-[5%] left-[5%] w-[320px] h-[320px] rounded-full bg-[#6288B9]/10 blur-3xl" />

        <div className="absolute bottom-[0%] right-[0%] w-[280px] h-[280px] rounded-full bg-[#0D2444]/5 blur-3xl" />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        {/* TOP CONTENT */}
        <div className="max-w-[850px] mx-auto text-center">
          {/* BADGE */}
          <motion.div
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    rounded-full
    border
    border-white/10
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
      text-[11px]
      sm:text-[12px]
      font-semibold
      tracking-[2px]
      uppercase
      text-white
    "
  >
    Selected Clients
  </span>
</motion.div>
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              mt-7
              text-[40px]
              leading-[1.1]
              
              md:text-[58px]
              font-bold
              tracking-[-3px]
              text-[#0D2444]
            "
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            Trusted By
            <span
              className="
                ml-4
                bg-gradient-to-r
                from-[#0D2444]
                via-[#456A9E]
                to-[#6288B9]
                bg-clip-text
                text-transparent
              "
            >
              Modern Brands
            </span>
          </motion.h2>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              mt-6
              max-w-[760px]
              mx-auto
              text-[16px]
              leading-[1.9]
              sm:text-[18px]
              text-[#5B6472]
            "
          >
            Trusted by hospitality, lifestyle, media,
            restaurant and modern luxury brands across
            India.
          </motion.p>
        </div>

        {/* LOGO GRID */}
        <div className="mt-20">
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              xl:grid-cols-6
              gap-6
            "
          >
            {clients.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.02,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-white/40
                  bg-white/80
                  backdrop-blur-2xl
                  h-[100px]
                  md:h-[120px]
                  flex
                  items-center
                  justify-center
                  p-4
                  md:p-6
                  shadow-[0_15px_50px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
                "
              >
                {/* HOVER GRADIENT */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-[#6288B9]/10
                    via-transparent
                    to-[#0D2444]/5
                  "
                />

                {/* INNER BORDER */}
                <div
                  className="
                    absolute
                    inset-[1px]
                    rounded-[33px]
                    border
                    border-white/50
                    pointer-events-none
                  "
                />

                {/* LOGO */}
                <img
                  src={logo}
                  alt="Client Logo"
                  className="
                    relative
                    z-10
                    max-h-[150px]
                    w-auto
                    object-contain
                    opacity-90
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-16
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
          "
        >
          {[
            "Hospitality",
            "Luxury",
            "Media",
            "Restaurants",
            "Events",
            "Lifestyle",
            "Beauty",
            "Digital Brands",
          ].map((item) => (
            <div
              key={item}
              className="
                rounded-full
                border
                border-[#0D2444]/10
                bg-white/80
                backdrop-blur-xl
                px-5
                py-3
                text-[13px]
                font-medium
                text-[#0D2444]
                shadow-[0_6px_20px_rgba(15,23,42,0.04)]
              "
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}