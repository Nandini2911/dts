"use client";

import { motion } from "framer-motion";

type CityGroup = {
  title: string;
  cities: string[];
};

const cityGroups: CityGroup[] = [
  {
    title: "North India",
    cities: [
      "Delhi",
      "Gurgaon",
      "Noida",
      "Chandigarh",
      "Ludhiana",
      "Amritsar",
      "Jalandhar",
      "Mohali",
    ],
  },
  {
    title: "West India",
    cities: [
      "Mumbai",
      "Pune",
      "Ahmedabad",
      "Surat",
      "Jaipur",
      "Udaipur",
      "Goa",
      "Nashik",
    ],
  },
  {
    title: "South India",
    cities: [
      "Bengaluru",
      "Hyderabad",
      "Chennai",
      "Kochi",
      "Coimbatore",
      "Mysuru",
      "Mangalore",
      "Visakhapatnam",
    ],
  },
  {
    title: "East & Central India",
    cities: [
      "Kolkata",
      "Bhubaneswar",
      "Indore",
      "Bhopal",
      "Raipur",
      "Ranchi",
      "Patna",
      "Guwahati",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function Locations() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EAF1F8]" />

      <div className="absolute inset-0 opacity-[0.35]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(13,36,68,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,36,68,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.28, 0.52, 0.28] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#6288B9]/15 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.24, 0.45, 0.24] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0D2444]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.14 }}
          className="mx-auto mb-16 max-w-5xl text-center"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#6288B9]"
          >
            Cities We Serve
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-4xl font-black leading-tight tracking-tight text-[#0D2444] md:text-6xl"
          >
            PR, Media & Digital Marketing Services Across India
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg"
          >
            Double Trouble Studio works with brands, businesses, public
            personalities, hospitality companies, event brands, luxury labels
            and growing organizations across major Indian cities.
          </motion.p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[42px] bg-gradient-to-br from-[#0D2444] via-[#244A78] to-[#6288B9] p-8 text-white shadow-2xl md:p-10"
          >
            <motion.div
              animate={{ x: [0, 22, 0], y: [0, -16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl"
            />

            <motion.div
              animate={{ x: [0, -18, 0], y: [0, 16, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative flex h-full min-h-[520px] flex-col justify-between">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/70"
                >
                  Pan India Presence
                </motion.p>

                <motion.h3
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
                  className="text-3xl font-black leading-tight md:text-5xl"
                >
                  Local communication with national brand visibility.
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.14 }}
                  className="mt-7 text-base leading-8 text-white/80"
                >
                  We build city-wise and nationwide communication strategies for
                  launches, events, campaigns, media visibility, social media
                  growth, SEO presence and digital performance.
                </motion.p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Local SEO",
                  "City Campaigns",
                  "Media Outreach",
                  "Influencer Visits",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur transition duration-300 hover:bg-white/15"
                  >
                    <p className="text-sm font-semibold text-white">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* City Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {cityGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 34, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.62,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="premium-card group relative overflow-hidden"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    ease: "easeOut",
                    delay: 0.15 + index * 0.06,
                  }}
                  className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-[#0D2444] to-[#6288B9]"
                />

                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#6288B9]/0 blur-3xl transition duration-500 group-hover:bg-[#6288B9]/18" />

                <span className="pointer-events-none absolute -right-2 -top-4 text-8xl font-black leading-none text-[#0D2444]/5 transition duration-500 group-hover:text-[#6288B9]/12">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <motion.div
                      whileHover={{ rotate: 4, scale: 1.04 }}
                      transition={{ duration: 0.25 }}
                      className="primary-btn flex h-14 w-14 items-center justify-center p-0 text-base"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.div>

                    <span className="secondary-btn px-4 py-2 text-xs uppercase tracking-[0.16em]">
                      India
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold leading-tight text-[#0D2444]">
                    {group.title}
                  </h3>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.cities.map((city, cityIndex) => (
                      <motion.span
                        key={city}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.38,
                          ease: "easeOut",
                          delay: cityIndex * 0.025,
                        }}
                        whileHover={{ y: -3 }}
                        className="rounded-full border border-slate-200 bg-[#F8FAFC] px-4 py-2 text-sm font-semibold text-slate-600 transition duration-300 group-hover:bg-white hover:border-[#6288B9]/35 hover:text-[#0D2444]"
                      >
                        {city}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}