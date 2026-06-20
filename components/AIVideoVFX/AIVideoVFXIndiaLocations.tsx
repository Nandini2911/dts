"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const locations = [
  {
    city: "Mumbai",
    region: "West India",
    text: "AI video production, CGI ads, VFX and premium brand films for fashion, hospitality, luxury, entertainment and startup campaigns.",
  },
  {
    city: "Delhi NCR",
    region: "North India",
    text: "Campaign videos, event teasers, corporate films, product launch videos, reels and CGI-style digital ads for brands and businesses.",
  },
  {
    city: "Chandigarh",
    region: "North India",
    text: "AI videos, social media edits, launch films, event promos, hospitality videos and VFX-led campaign content for regional and national brands.",
  },
  {
    city: "Punjab",
    region: "North India",
    text: "Creative video production for events, music promotions, hospitality brands, real estate, lifestyle businesses and digital campaigns.",
  },
  {
    city: "Bengaluru",
    region: "South India",
    text: "AI product videos, startup explainers, service videos, brand films, tech visuals and social media campaign edits.",
  },
  {
    city: "Hyderabad",
    region: "South India",
    text: "CGI ads, VFX videos, product visuals, corporate films, digital marketing videos and event campaign content.",
  },
  {
    city: "Pune",
    region: "West India",
    text: "AI-assisted reels, brand launch videos, website hero visuals, product demos and platform-ready campaign exports.",
  },
  {
    city: "Pan India",
    region: "Remote Delivery",
    text: "Remote AI video production and VFX services for brands, agencies, creators, events and businesses across India.",
  },
];

const markers = [
  { city: "Delhi NCR", position: "left-[50%] top-[22%]" },
  { city: "Chandigarh", position: "left-[42%] top-[16%]" },
  { city: "Punjab", position: "left-[35%] top-[20%]" },
  { city: "Mumbai", position: "left-[34%] top-[58%]" },
  { city: "Pune", position: "left-[42%] top-[63%]" },
  { city: "Hyderabad", position: "left-[55%] top-[66%]" },
  { city: "Bengaluru", position: "left-[48%] top-[78%]" },
];

const serviceMap = [
  "AI Video Production",
  "CGI Advertising",
  "VFX Editing",
  "Product Videos",
  "Brand Films",
  "Event Teasers",
  "Reels & Shorts",
  "Website Videos",
];

export default function AIVideoVFXIndiaLocations() {
  return (
    <section
      className="relative isolate overflow-hidden bg-white px-4 py-24 text-[#0D2444] sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Pure white background */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-white" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto mb-6 inline-flex rounded-full border border-[#6288B9]/20 bg-[#F7FAFF] px-4 py-2 shadow-sm"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#315E91] sm:text-xs">
              Locations We Serve
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-[38px] font-black leading-[0.98] tracking-[-0.06em] text-[#0D2444] sm:text-[56px] md:text-[78px]"
          >
            AI Video & VFX services
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              across India.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-[#49617F] sm:text-base"
          >
            Double Trouble Studio creates AI videos, CGI ads, VFX edits and
            campaign-ready video content for brands across major Indian cities.
          </motion.p>
        </motion.div>

        {/* New directory map layout */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[0.46fr_0.54fr] lg:items-start lg:gap-16">
          {/* Left map visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative min-h-[620px] overflow-hidden rounded-[3rem] border border-[#6288B9]/18 bg-[#F7FAFF] p-8 shadow-2xl shadow-[#0D2444]/8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(98,136,185,0.16),transparent_32%),radial-gradient(circle_at_78%_82%,rgba(49,94,145,0.10),transparent_34%)]" />

              <div className="relative z-10 flex h-full min-h-[560px] flex-col justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#6288B9]">
                    Pan India Creative Delivery
                  </p>

                  <h3 className="mt-5 text-[44px] font-black leading-[0.94] tracking-[-0.06em] text-[#0D2444] sm:text-[62px]">
                    City-wise
                    <span className="block text-[#315E91]">campaign</span>
                    <span className="block text-[#0D2444]/35">support.</span>
                  </h3>
                </div>

                {/* Abstract India map board */}
                <div className="relative mx-auto mt-8 h-[330px] w-full max-w-[390px]">
                  <div className="absolute left-1/2 top-1/2 h-[290px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-[45%_55%_50%_50%/42%_45%_55%_58%] border border-[#6288B9]/24 bg-white shadow-xl shadow-[#0D2444]/8" />

                  <div className="absolute left-[40%] top-[5%] h-[135px] w-[120px] rotate-[-18deg] rounded-[52%_48%_42%_58%/48%_50%_50%_52%] border border-[#6288B9]/18 bg-white" />
                  <div className="absolute left-[43%] top-[42%] h-[185px] w-[135px] rotate-[10deg] rounded-[50%_50%_44%_56%/48%_44%_56%_52%] border border-[#6288B9]/18 bg-white" />
                  <div className="absolute left-[52%] top-[72%] h-[100px] w-[72px] rotate-[12deg] rounded-[45%_55%_70%_30%/46%_48%_52%_54%] border border-[#6288B9]/18 bg-white" />

                  <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[82px] font-black leading-none tracking-[-0.08em] text-[#0D2444]/[0.06] sm:text-[96px]">
                    INDIA
                  </p>

                  {markers.map((marker, index) => (
                    <motion.div
                      key={marker.city}
                      animate={{
                        scale: [1, 1.18, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.18,
                        ease: "easeInOut",
                      }}
                      className={`absolute ${marker.position}`}
                    >
                      <span className="relative flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#315E91]/35" />
                        <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-[#315E91] shadow-lg shadow-[#315E91]/30" />
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 border-t border-[#6288B9]/18 pt-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
                    Available For
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {serviceMap.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#6288B9]/18 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#315E91]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right city directory */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.08 }}
            className="border-y border-[#6288B9]/20"
          >
            {locations.map((item, index) => (
              <motion.div
                key={item.city}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="group relative grid gap-5 border-b border-[#6288B9]/16 py-7 last:border-b-0 md:grid-cols-[0.14fr_0.32fr_0.54fr] md:items-start md:gap-8"
              >
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <div>
                  <h3 className="text-[34px] font-black leading-none tracking-[-0.055em] text-[#0D2444] transition-colors duration-500 group-hover:text-[#315E91] sm:text-[46px]">
                    {item.city}
                  </h3>

                  <p className="mt-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#6288B9]">
                    {item.region}
                  </p>
                </div>

                <div>
                  <p className="max-w-2xl text-sm leading-7 text-[#49617F] sm:text-base">
                    {item.text}
                  </p>

                  <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] transition-all duration-500 group-hover:w-32" />
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}