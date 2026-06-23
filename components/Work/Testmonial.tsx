"use client";

import { motion } from "framer-motion";
import {
  Quote,
  ArrowLeft,
  ArrowRight,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "RNK Rentals",
    role: "Luxury Automotive Brand",
    feedback:
      "Double Trouble Studio completely transformed our digital presence with a premium website experience, strategic SEO and modern branding direction. The execution felt luxury, clean and highly professional.",
    impact:
      "Improved premium perception and stronger online visibility.",
    image: "/logos/26.webp",
  },
  {
    name: "India Today",
    role: "Media & Broadcasting",
    feedback:
      "The creative quality, editing precision and modern storytelling approach helped elevate our digital content experience. Every asset felt cinematic and professionally executed.",
    impact:
      "High-impact creative production designed for digital audiences.",
    image: "/india2.png",
  },
  {
    name: "Vow Story",
    role: "Luxury Wedding Brand",
    feedback:
      "From creative direction to social media visuals, the entire experience felt refined, modern and emotionally aligned with our luxury wedding positioning.",
    impact:
      "Built a stronger and more premium wedding brand identity.",
    image: "/vow.png",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  // Automatically change testimonial every 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setActive((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 100);

    return () => clearInterval(autoSlide);
  }, []);

  const nextSlide = () => {
    setActive((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f7fafc] py-[120px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7fafc] to-[#eef3f9]" />

        {/* Glow */}
        <div className="absolute left-[5%] top-[5%] h-[320px] w-[320px] rounded-full bg-[#6288B9]/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[#0D2444]/5 blur-3xl" />

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

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* TOP */}
        <div className="max-w-[850px]">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#6288B9]/20
              bg-white/70
              px-5
              py-2.5
              shadow-[0_8px_30px_rgba(15,23,42,0.05)]
              backdrop-blur-xl
            "
          >
            <Quote className="h-4 w-4 text-[#456A9E]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[2px]
                text-[#456A9E]
                sm:text-[12px]
              "
            >
              Client Testimonials
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
              text-[38px]
              font-bold
              leading-[1.05]
              tracking-[-2px]
              text-[#0D2444]
              sm:text-[52px]
              md:text-[66px]
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
              Ambitious Brands
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
              text-[16px]
              leading-[1.9]
              text-[#5B6472]
              sm:text-[18px]
            "
          >
            Premium creative experiences crafted for hospitality, luxury,
            media and modern brands looking to build stronger digital presence
            and refined brand perception.
          </motion.p>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="mt-20">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/20
              bg-white/70
              shadow-[0_20px_70px_rgba(15,23,42,0.08)]
              backdrop-blur-2xl
            "
          >
            {/* BG */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-white
                via-white
                to-[#f3f7fb]
              "
            />

            {/* INNER GLOW */}
            <div className="absolute right-[-20px] top-[-40px] h-[220px] w-[220px] rounded-full bg-[#6288B9]/10 blur-3xl" />

            <div className="relative z-10 grid gap-10 p-7 md:p-10 lg:grid-cols-[320px_1fr] lg:p-14">
              {/* LEFT */}
              <div
                className="
                  relative
                  h-[340px]
                  overflow-hidden
                  rounded-[30px]
                "
              >
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                  "
                />

                {/* Stars */}
                <div className="absolute left-5 top-5 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      size={15}
                      className="fill-white text-white"
                    />
                  ))}
                </div>

                {/* Client Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3
                    className="
                      text-[30px]
                      font-bold
                      leading-none
                      text-white
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    {testimonials[active].name}
                  </h3>

                  <p className="mt-2 text-[14px] text-white/70">
                    {testimonials[active].role}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col justify-between">
                {/* QUOTE */}
                <div>
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-r
                      from-[#0D2444]
                      to-[#6288B9]
                      text-white
                      shadow-[0_10px_30px_rgba(13,36,68,0.18)]
                    "
                  >
                    <Quote size={26} />
                  </div>

                  <p
                    className="
                      mt-8
                      text-[22px]
                      font-medium
                      leading-[1.8]
                      text-[#0D2444]
                      md:text-[28px]
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    “{testimonials[active].feedback}”
                  </p>

                  {/* IMPACT */}
                  <div
                    className="
                      mt-10
                      rounded-[26px]
                      border
                      border-[#6288B9]/10
                      bg-gradient-to-r
                      from-[#0D2444]
                      to-[#1D3A66]
                      p-6
                    "
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] text-white/50">
                      Impact
                    </p>

                    <p className="mt-3 text-[15px] leading-[1.8] text-white/90">
                      {testimonials[active].impact}
                    </p>
                  </div>
                </div>

                {/* NAVIGATION */}
                <div className="mt-10 flex items-center justify-between">
                  {/* DOTS */}
                  <div className="flex items-center gap-3">
                    {testimonials.map((testimonial, index) => (
                      <button
                        key={testimonial.name}
                        type="button"
                        onClick={() => setActive(index)}
                        aria-label={`Show testimonial ${index + 1}`}
                        className={`
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            active === index
                              ? "h-3 w-10 bg-[#0D2444]"
                              : "h-3 w-3 bg-[#0D2444]/20"
                          }
                        `}
                      />
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={prevSlide}
                      aria-label="Previous testimonial"
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#0D2444]/10
                        bg-white
                        text-[#0D2444]
                        transition-all
                        duration-300
                        hover:bg-[#0D2444]
                        hover:text-white
                      "
                    >
                      <ArrowLeft size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next testimonial"
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-r
                        from-[#0D2444]
                        to-[#6288B9]
                        text-white
                        shadow-[0_10px_30px_rgba(13,36,68,0.18)]
                        transition-all
                        duration-300
                        hover:scale-105
                      "
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}