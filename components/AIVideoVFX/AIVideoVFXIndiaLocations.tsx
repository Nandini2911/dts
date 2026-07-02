"use client";

import { motion } from "framer-motion";

const fadeUp = {

  hidden: { opacity: 0, y: 24 },

  visible: { opacity: 1, y: 0 },

};

const locations = [

  { city: "Mumbai", desc: "Luxury, fashion, hospitality and high-end brand video production." },

  { city: "Delhi NCR", desc: "Corporate films, product launches and premium brand campaigns." },

  { city: "Chandigarh", desc: "Event films, hospitality branding and lifestyle content." },

  { city: "Punjab", desc: "Music videos, real estate films and cultural storytelling content." },

  { city: "Bengaluru", desc: "Startup videos, SaaS explainers and tech brand storytelling." },

  { city: "Hyderabad", desc: "Advertising campaigns, corporate films and product videos." },

  { city: "Pune", desc: "Reels, brand launches and social media content production." },

  { city: "Pan India", desc: "Remote AI video production and professional editing across India." },

];

export default function LocationsSection() {

  return (

    <section

      className="relative overflow-hidden bg-white px-6 py-28 text-[#0D2444] sm:px-10 lg:px-20"

      style={{

        fontFamily: "New York, ui-serif, Georgia, serif",

      }}

    >

      {/* soft glow background */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#6288B9]/15 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-[#315E91]/10 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}

        <motion.div

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}

          transition={{ staggerChildren: 0.12 }}

          className="text-center"

        >

          <motion.p

            variants={fadeUp}

            className="inline-flex rounded-full border border-[#6288B9]/20 bg-[#F7FAFF] px-5 py-2 text-xs tracking-[0.25em] text-[#315E91]"

          >

            LOCATIONS WE SERVE

          </motion.p>

          <motion.h2

            variants={fadeUp}

            className="mt-6 text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl"

          >

            AI Video & Editing

            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">

              Across India

            </span>

          </motion.h2>

          <motion.p

            variants={fadeUp}

            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#49617F] sm:text-base"

          >

            We provide premium AI video production and professional editing services

            for brands, agencies, startups and creators across India.

          </motion.p>

        </motion.div>

        {/* GRID */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2">

          {locations.map((item, i) => (

            <motion.div

              key={item.city}

              initial="hidden"

              whileInView="visible"

              viewport={{ once: true }}

              variants={fadeUp}

              transition={{ duration: 0.5, delay: i * 0.05 }}

              className="group relative overflow-hidden rounded-2xl border border-[#6288B9]/15 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"

            >

              {/* left accent */}

              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#315E91] via-[#6288B9] to-transparent" />

              {/* city header */}

              <div className="flex items-start justify-between">

                <h3 className="text-2xl font-black tracking-tight text-[#0D2444] transition group-hover:text-[#315E91]">

                  {item.city}

                </h3>

                <span className="text-xs tracking-[0.3em] text-[#315E91]/30">

                  {String(i + 1).padStart(2, "0")}

                </span>

              </div>

              {/* description */}

              <p className="mt-3 text-sm leading-6 text-[#49617F]">

                {item.desc}

              </p>

              {/* underline animation */}

              <div className="mt-5 h-[1px] w-0 bg-gradient-to-r from-[#315E91] to-transparent transition-all duration-500 group-hover:w-full" />

            </motion.div>

          ))}

        </div>

        {/* FOOTER */}

        <div className="mt-20 border-t border-[#6288B9]/20 pt-8 text-center">

          <p className="text-sm text-[#49617F]">

            Delivering cinematic AI video production, brand films and professional editing across India with consistent premium quality.

          </p>

        </div>

      </div>

    </section>

  );

}