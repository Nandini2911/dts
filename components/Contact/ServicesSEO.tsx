"use client";

import { motion } from "framer-motion";
import {
  FiUsers,
  FiStar,
  FiHeart,
  FiGlobe,
  FiTrendingUp,
  FiFilm,
} from "react-icons/fi";

const services = [
  {
    icon: FiUsers,
    title: "Guest Management",
  },
  {
    icon: FiStar,
    title: "Celebrity Management",
  },
  {
    icon: FiHeart,
    title: "Events & Weddings",
  },
  {
    icon: FiTrendingUp,
    title: "PR, Media & Digital Marketing",
  },
  {
    icon: FiGlobe,
    title: "Web Development & Marketing",
  },
  {
    icon: FiFilm,
    title: "AI Video & Video Editing",
  },
];

export default function ServicesSEO() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#FAFCFE]">
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#6288B9]/10
            blur-[140px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
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
              glass
              inline-flex
              px-5
              py-2
              rounded-full
              text-xs
              uppercase
              tracking-[4px]
              font-semibold
              text-[#6288B9]
            "
          >
            Premium Services
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
            "
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            <span className="text-[#0F172A]">
              Looking For
            </span>

            <span
              className="
                block
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#0D2444]
                via-[#6288B9]
                to-[#A4B8D2]
              "
            >
              Premium Business Solutions?
            </span>
          </h2>

          <p
            className="
              mt-8
              max-w-4xl
              mx-auto
              text-lg
              leading-relaxed
              text-slate-600
            "
          >
            Looking for guest management, celebrity management,
            event planning, wedding management, public relations,
            media marketing, digital marketing, website
            development, performance marketing, AI video
            production or VFX services?
          </p>

          <p
            className="
              mt-5
              max-w-4xl
              mx-auto
              text-lg
              leading-relaxed
              text-slate-600
            "
          >
            Our team works with brands, hospitality businesses,
            luxury companies, event organizers, creators,
            startups and growing businesses across Mumbai,
            Navi Mumbai, Thane, Pune and throughout India.
          </p>
        </motion.div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
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
                    p-8
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
                      -right-10
                      -top-10
                      h-32
                      w-32
                      rounded-full
                      bg-[#6288B9]/10
                      blur-[60px]
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#0D2444]
                      to-[#6288B9]
                      text-white
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-semibold
                      text-[#0D2444]
                    "
                  >
                    {service.title}
                  </h3>

                  <div
                    className="
                      mt-4
                      h-[2px]
                      w-16
                      bg-gradient-to-r
                      from-[#0D2444]
                      to-[#6288B9]
                    "
                  />

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-[#6288B9]
                      font-medium
                    "
                  >
                    Discuss Your Project

                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SEO Content Block */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div
            className="
              glass
              rounded-[32px]
              p-8
              md:p-12
              text-center
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                text-[#0D2444]
              "
            >
              Let's Talk About Your Next Project
            </h3>

            <p
              className="
                mt-6
                max-w-4xl
                mx-auto
                text-slate-600
                leading-relaxed
              "
            >
              Whether you need guest management services,
              celebrity management, event planning, wedding
              management, PR services, media relations,
              digital marketing, website development,
              performance marketing, AI-generated video
              production or cinematic VFX solutions,
              our team is ready to discuss your goals
              and create a tailored strategy for your business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}