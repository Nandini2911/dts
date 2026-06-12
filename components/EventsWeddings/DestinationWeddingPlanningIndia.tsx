"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Plane,
  Hotel,
  Users,
  Car,
  Sparkles,
  Landmark,
  Waves,
  Mountain,
  ArrowUpRight,
} from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const destinationServices = [
  {
    icon: Hotel,
    title: "Venue Planning",
    desc: "Venue shortlisting, property coordination, layout planning and function-wise venue flow.",
  },
  {
    icon: Users,
    title: "Guest Hospitality",
    desc: "Guest lists, welcome desks, rooming lists, check-ins, itineraries and family coordination.",
  },
  {
    icon: Sparkles,
    title: "Décor & Entertainment",
    desc: "Theme planning, décor direction, artists, DJs, anchors, performers and function experiences.",
  },
  {
    icon: Car,
    title: "Travel & Logistics",
    desc: "Transport, airport pickups, vendor movement, accommodation support and on-ground execution.",
  },
];

const locations = [
  "Jaipur",
  "Udaipur",
  "Goa",
  "Delhi NCR",
  "Chandigarh",
  "Mumbai",
  "Pune",
  "Hyderabad",
  "Jodhpur",
  "Mussoorie",
  "Kasauli",
  "Shimla",
  "Amritsar",
  "Ludhiana",
  "Rishikesh",
];

const weddingTypes = [
  {
    icon: Landmark,
    title: "Royal Palace Weddings",
  },
  {
    icon: Hotel,
    title: "Luxury Resort Weddings",
  },
  {
    icon: Mountain,
    title: "Hill Destination Weddings",
  },
  {
    icon: Waves,
    title: "Beach Weddings",
  },
];

export default function DestinationWeddingPlanningIndia() {
  return (
    <section className="relative overflow-hidden bg-[#FBFDFF] px-5 py-20 text-[#0D2444] md:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,#E1F1FF_0%,transparent_32%),radial-gradient(circle_at_88%_18%,#D7E8FA_0%,transparent_28%),linear-gradient(180deg,#FFFFFF_0%,#F6FBFF_48%,#EAF5FF_100%)]" />

      <div className="absolute left-[-260px] top-[-260px] h-[620px] w-[620px] rounded-full bg-white/80 blur-3xl" />
      <div className="absolute right-[-320px] bottom-[-320px] h-[760px] w-[760px] rounded-full bg-[#7FA4CA]/16 blur-3xl" />

      {/* MAP DOT TEXTURE */}
      <div
        className="
          absolute inset-0 opacity-[0.18]
          [background-image:radial-gradient(#0D2444_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* CENTER HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex max-w-6xl flex-col items-center text-center"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#0D2444]/10 bg-white/75 px-5 py-3 shadow-[0_16px_45px_rgba(13,36,68,0.08)] backdrop-blur-xl">
            <Plane size={16} className="text-[#0D2444]" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#5579A6]">
              Destination Wedding Planning Across India
            </span>
          </div>

          <h2
            style={serifFont}
            className="mx-auto max-w-5xl text-[34px] font-bold leading-[1.08] tracking-[-0.045em] md:text-[50px] "
          >
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#5579A6] bg-clip-text text-transparent">
              Destination Weddings Planned Beautifully,
            </span>
           
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#6F8FB8] bg-clip-text text-transparent">
              Managed Seamlessly
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-[16px] font-medium leading-[1.9] text-[#4F627B] md:text-[18px]">
            Double Trouble Studio helps families and couples plan destination
            weddings across India with complete coordination, guest hospitality,
            vendor management and on-ground execution.
          </p>
        </motion.div>

        {/* BOARDING PASS DESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-16 overflow-hidden rounded-[42px] border border-[#0D2444]/10 bg-white/72 shadow-[0_32px_100px_rgba(13,36,68,0.11)] backdrop-blur-xl"
        >
          {/* TOP ROUTE BAR */}
          <div className="relative border-b border-[#0D2444]/10 px-6 py-5 md:px-9">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#6F8FB8]">
                  Wedding Route
                </p>
                <p
                  style={serifFont}
                  className="mt-1 text-[30px] font-bold tracking-[-0.045em] text-[#0D2444] md:text-[40px]"
                >
                  Your City <span className="text-[#7FA4CA]">to</span> Dream Destination
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#0D2444]">
                  DTS
                </span>
                <div className="relative h-px w-24 bg-[#0D2444]/20">
                  <Plane
                    size={17}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 text-[#0D2444]"
                  />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#0D2444]">
                  India
                </span>
              </div>
            </div>
          </div>

          <div className="relative grid lg:grid-cols-[0.92fr_1.08fr]">
            {/* DASHED SEPARATOR */}
            <div className="absolute bottom-0 left-1/2 top-0 hidden border-l border-dashed border-[#0D2444]/16 lg:block" />

            {/* LEFT SIDE */}
            <div className="relative overflow-hidden p-7 md:p-10">
              <div
                style={serifFont}
                className="pointer-events-none absolute -left-4 top-8 select-none text-[92px] font-bold leading-none tracking-[-0.08em] text-[#0D2444]/[0.035] md:text-[132px]"
              >
                INDIA
              </div>

              <div className="relative z-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#0D2444] text-white shadow-[0_18px_45px_rgba(13,36,68,0.22)]">
                  <MapPin size={30} />
                </div>

                <h3
                  style={serifFont}
                  className="max-w-xl text-[32px] font-bold leading-[1.08] tracking-[-0.045em] text-[#0D2444] md:text-[46px]"
                >
                  From royal palaces to hill retreats, we manage the complete
                  wedding experience.
                </h3>

                <p className="mt-6 max-w-xl text-[15.5px] font-medium leading-[1.9] text-[#52647C] md:text-[17px]">
                  We support venue planning, guest hospitality, vendor
                  coordination, décor planning, entertainment, logistics,
                  transport, accommodation and function-wise execution.
                </p>

                <div className="mt-9 divide-y divide-[#0D2444]/10 border-y border-[#0D2444]/10">
                  {weddingTypes.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="group flex items-center justify-between gap-5 py-5"
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0D2444]/10 bg-[#F6FAFF] text-[#244B7C] transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white">
                            <Icon size={19} />
                          </span>

                          <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#0D2444]">
                            {item.title}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={17}
                          className="text-[#0D2444]/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0D2444]"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative bg-[#F6FAFF]/60 p-7 md:p-10">
              <div className="mb-8 flex items-end justify-between gap-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#6F8FB8]">
                    Planning Passport
                  </p>

                  <h3
                    style={serifFont}
                    className="mt-2 text-[34px] font-bold leading-none tracking-[-0.045em] text-[#0D2444] md:text-[46px]"
                  >
                    What We Handle
                  </h3>
                </div>

                <div className="hidden rounded-full border border-[#0D2444]/10 bg-white/80 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-[#5579A6] md:block">
                  04 Essentials
                </div>
              </div>

              <div className="divide-y divide-[#0D2444]/10 border-y border-[#0D2444]/10">
                {destinationServices.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.65,
                        ease: "easeOut",
                        delay: index * 0.06,
                      }}
                      className="group grid gap-5 py-6 md:grid-cols-[58px_1fr_42px] md:items-start"
                    >
                      <div className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-[#0D2444] shadow-[0_14px_35px_rgba(13,36,68,0.08)] transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h4 className="text-[18px] font-black tracking-[-0.025em] text-[#0D2444]">
                          {service.title}
                        </h4>

                        <p className="mt-3 max-w-xl text-[14.5px] font-medium leading-[1.8] text-[#52647C]">
                          {service.desc}
                        </p>
                      </div>

                      <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#0D2444]/10 text-[#0D2444]/55 transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white md:flex">
                        <ArrowUpRight size={17} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* LOCATION ATLAS */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mt-12"
        >
          <div className="mb-7 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#5579A6]">
                Popular Locations
              </p>

              <h3
                style={serifFont}
                className="mt-2 text-[32px] font-bold leading-[1.08] tracking-[-0.045em] text-[#0D2444] md:text-[46px]"
              >
                Destination Wedding Cities We Serve
              </h3>
            </div>

            <p className="mx-auto max-w-xl text-[15px] font-medium leading-[1.8] text-[#52647C] md:mx-0 md:text-right">
              From royal cities and beaches to hills, resorts and private
              venues, we coordinate destination weddings across India.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            {locations.map((location, index) => (
              <span
                key={location}
                className={`
                  rounded-full border border-[#0D2444]/10 bg-white/72 px-5 py-3
                  text-[12px] font-black uppercase tracking-[0.16em] text-[#0D2444]
                  shadow-[0_12px_35px_rgba(13,36,68,0.06)] backdrop-blur-xl
                  transition-all duration-300 hover:-translate-y-1 hover:bg-[#0D2444] hover:text-white
                  ${index % 4 === 0 ? "md:px-7" : ""}
                  ${index % 5 === 0 ? "md:translate-y-2" : ""}
                `}
              >
                {location}
              </span>
            ))}
          </div>
        </motion.div>

             </div>
    </section>
  );
}