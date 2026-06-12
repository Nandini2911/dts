"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Sparkles } from "lucide-react";

export default function CelebrityManagementIndiaCoverage() {
  const cities = [
    "Mumbai",
    "Delhi NCR",
    "Bangalore",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Goa",
    "Chennai",
    "Kolkata",
    "Chandigarh",
    "Ludhiana",
    "Amritsar",
    "Udaipur",
    "Lucknow",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F3FAFF] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(138,189,240,0.32),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(13,36,68,0.11),transparent_34%),linear-gradient(180deg,#F8FCFF_0%,#EAF6FF_100%)]" />

      {/* SUBTLE MAP DOT PATTERN */}
      <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(13,36,68,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0D2444]/10 bg-white/80 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#0D2444] shadow-[0_14px_40px_rgba(13,36,68,0.07)] backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-[#6288B9]" />
              Pan-India Services
            </span>

            <h2
              className="mt-7 max-w-[680px] text-[34px] font-semibold leading-[0.94] tracking-[-0.06em] text-[#0D2444] sm:text-[44px] md:text-[54px] lg:text-[66px]"
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              Celebrity Management & Celebrity Booking Services{" "}
              <span className="bg-gradient-to-r from-[#8ABDF0] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
                Across India
              </span>
            </h2>

            <div className="mt-7 max-w-[720px] space-y-5 text-[15px] font-medium leading-[1.9] text-slate-600 md:text-[17px]">
              <p>
                Double Trouble Studio provides celebrity management, celebrity
                booking and talent coordination services across major cities and
                event destinations in India.
              </p>

              <p>
                We support brand campaigns, hospitality activations, luxury
                events, corporate functions, product launches, private
                celebrations and promotional appearances nationwide.
              </p>

              <p>
                Our team helps businesses identify and secure suitable
                celebrities, influencers, hosts, speakers and performers based on
                location, audience, budget and campaign goals.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Brand Campaigns",
                "Luxury Events",
                "Corporate Functions",
                "Hospitality Activations",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#DCE6F2] bg-white/75 px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#173B66] shadow-[0_10px_28px_rgba(13,36,68,0.05)] backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CITY PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[44px] border border-white/70 bg-[#0D2444] p-6 shadow-[0_34px_110px_rgba(13,36,68,0.24)] sm:p-8">
              {/* GLOWS */}
              <div className="absolute right-[-150px] top-[-150px] h-[360px] w-[360px] rounded-full bg-[#8ABDF0]/25 blur-3xl" />
              <div className="absolute bottom-[-160px] left-[-140px] h-[340px] w-[340px] rounded-full bg-white/10 blur-3xl" />

              {/* TOP BAR */}
              <div className="relative z-10 flex flex-col gap-4 border-b border-white/12 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#8ABDF0]">
                    Cities We Serve
                  </p>

                  <h3
                    className="mt-2 text-[32px] font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-[40px]"
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    Nationwide Talent Coordination
                  </h3>
                </div>

                <div className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-[#0D2444] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <Navigation className="h-5 w-5" />
                </div>
              </div>

              {/* CITY GRID */}
              <div className="relative z-10 mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {cities.map((city, index) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.035,
                      ease: "easeOut",
                    }}
                    className="group flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-4 py-3 text-white/82 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0D2444]"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-[#8ABDF0] transition-colors duration-300 group-hover:text-[#0D2444]" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.12em]">
                      {city}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* BOTTOM NOTE */}
              <div className="relative z-10 mt-7 rounded-[28px] border border-white/12 bg-white/[0.08] p-5 backdrop-blur-xl">
                <p className="text-[13px] font-medium leading-[1.8] text-white/70">
                  Coverage includes major metros, luxury destinations,
                  hospitality hubs, brand launch cities and private event
                  locations across India.
                </p>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-6 left-6 hidden rounded-full border border-[#DCE6F2] bg-white px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#0D2444] shadow-[0_18px_55px_rgba(13,36,68,0.16)] sm:block">
              India-wide celebrity booking support
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}