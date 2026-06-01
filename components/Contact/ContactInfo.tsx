"use client";

import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const contactData = [
  {
    icon: FiMapPin,
    title: "Visit Us",
    description:
      "Suite 19, Kaliandas Udyog Bhavan, Century Bazar, Prabhadevi, Mumbai 400025",
  },
  {
    icon: FiPhone,
    title: "Call Us",
    description: "+91 22 4322 7777",
  },
  {
    icon: FiMail,
    title: "Email Us",
    description: "info@yourbrand.com",
  },
];

export default function ContactInfo() {
  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#6288B9]/10
            blur-[140px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span
            className="
             text-white
              px-5
              py-2
        
        
             
              tracking-[4px]
              text-xs
            
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
            Reach Us
          </span>

          <h2
            className="
              mt-6
              text-5xl
              md:text-6xl
              font-bold
              text-[#0D2444]
            "
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            <span className="text-[#0F172A] mr-3">
              Contact 
            </span>
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
            Information
            </span>
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out through
            any of the following channels.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {contactData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  p-[1px]
                  bg-gradient-to-br
                  from-[#6288B9]
                  via-white
                  to-[#0D2444]
                "
              >
                <div
                  className="
                    glass
                    relative
                    rounded-[29px]
                    p-10
                    h-full
                    transition-all
                    duration-500
                    group-hover:-translate-y-2
                  "
                >
                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -right-12
                      -top-12
                      h-40
                      w-40
                      rounded-full
                      bg-[#6288B9]/10
                      blur-[70px]
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-3xl
                      bg-gradient-to-br
                      from-[#0D2444]
                      to-[#6288B9]
                      text-white
                      shadow-xl
                    "
                  >
                    <Icon size={32} />
                  </div>

                  <h3
                    className="
                      mt-8
                      text-3xl
                      font-semibold
                      text-[#0D2444]
                    "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
                      mt-5
                      h-[2px]
                      w-20
                      bg-gradient-to-r
                      from-[#0D2444]
                      to-[#6288B9]
                    "
                  />

                  <p
                    className="
                      mt-6
                      text-slate-600
                      leading-relaxed
                    "
                  >
                    {item.description}
                  </p>

                  {/* Hover Shine */}

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-700
                      bg-gradient-to-tr
                      from-transparent
                      via-white/20
                      to-transparent
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}