"use client";

import { motion } from "framer-motion";
import {
  FiMapPin,
  FiGlobe,
  FiBriefcase,
  FiTrendingUp,
} from "react-icons/fi";

const locations = [
  "Mumbai",
  "Navi Mumbai",
  "Thane",
  "Pune",
  "Across India",
];

const services = [
  {
    icon: FiBriefcase,
    title: "Branding",
  },
  {
    icon: FiGlobe,
    title: "Website Design",
  },
  {
    icon: FiTrendingUp,
    title: "Digital Marketing",
  },
  {
    icon: FiMapPin,
    title: "Creative Strategy",
  },
];

export default function LocationSEO() {
  return (
    <section className="relative overflow-hidden py-28 bg-white">
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
              items-center
              rounded-full
              px-5
              py-2
              text-xs
              uppercase
              tracking-[4px]
              font-semibold
              text-[#6288B9]
            "
          >
            Serving Businesses Across India
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
              Branding & Website Design Agency in
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
              Mumbai & Across India
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
            Double Trouble Studio helps startups, founders,
            hospitality brands, restaurants, cafés, luxury
            businesses and growing companies across Mumbai,
            Navi Mumbai, Thane, Pune and throughout India
            build stronger brands through strategic branding,
            website design, content creation, social media
            marketing and creative direction.
          </p>

          <p
            className="
              mt-6
              max-w-4xl
              mx-auto
              text-lg
              leading-relaxed
              text-slate-600
            "
          >
            Whether you're launching a new business,
            refreshing your brand identity, improving your
            website or looking to strengthen your digital
            presence, our team creates premium brand
            experiences designed to attract customers,
            build trust and support long-term growth.
          </p>
        </motion.div>

        {/* Services */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  premium-card
                  group
                  text-center
                  relative
                  overflow-hidden
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    bg-gradient-to-br
                    from-[#6288B9]/5
                    to-[#0D2444]/5
                  "
                />

                <div
                  className="
                    relative
                    mx-auto
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
                    relative
                    mt-6
                    text-xl
                    font-semibold
                    text-[#0D2444]
                  "
                >
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Locations */}

        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={location}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  glass
                  rounded-full
                  px-6
                  py-3
                  font-medium
                  text-[#0D2444]
                "
              >
                {location}
              </motion.div>
            ))}
          </div>
        </div>

        {/* GEO + SEO Content */}

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
          className="
            mt-20
            max-w-5xl
            mx-auto
            text-center
          "
        >
          <div
            className="
              glass
              rounded-[32px]
              p-8
              md:p-10
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                text-[#0D2444]
              "
            >
              Looking for a Branding Agency in Mumbai?
            </h3>

            <p
              className="
                mt-6
                text-slate-600
                leading-relaxed
              "
            >
              If you're searching for a branding agency in
              Mumbai, website design company in Mumbai,
              digital marketing agency in Mumbai or a creative
              studio serving businesses across Maharashtra and
              India, Double Trouble Studio provides strategic
              branding, premium website experiences, content
              creation and growth-focused marketing solutions.
            </p>

            <p
              className="
                mt-4
                text-slate-600
                leading-relaxed
              "
            >
              We partner with ambitious founders, hospitality
              brands, restaurants, cafés, luxury businesses
              and modern companies looking to improve brand
              perception, customer engagement and long-term
              business growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}