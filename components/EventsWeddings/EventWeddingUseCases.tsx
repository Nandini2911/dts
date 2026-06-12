"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Hotel,
  Shirt,
  Heart,
  PackageOpen,
  Sparkles,
  ArrowUpRight,
  ClipboardCheck,
} from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const useCases = [
  {
    icon: MapPin,
    label: "Wedding",
    title: "Luxury Destination Wedding",
    desc: "Complete planning for a multi-function destination wedding, including guest hospitality, décor, entertainment, vendor coordination, logistics and on-ground execution.",
  },
  {
    icon: Briefcase,
    label: "Corporate",
    title: "Corporate Annual Day",
    desc: "End-to-end event planning for a corporate celebration with stage production, awards, entertainment, employee engagement and event-day management.",
  },
  {
    icon: Hotel,
    label: "Hospitality",
    title: "Hotel Launch Event",
    desc: "Planning and execution for a premium hospitality launch with guest experience, media moments, influencer coordination, celebrity appearance and event production.",
  },
  {
    icon: Shirt,
    label: "Fashion",
    title: "Fashion Showcase",
    desc: "Show planning with model coordination, backstage management, lighting, music, stage design, guest seating and show flow.",
  },
  {
    icon: Heart,
    label: "Private",
    title: "Private Family Celebration",
    desc: "Customized event planning for birthdays, anniversaries, intimate dinners and family gatherings with décor, hospitality and entertainment.",
  },
  {
    icon: PackageOpen,
    label: "Brand",
    title: "Product Launch Event",
    desc: "Brand event planning with concept development, production, guest engagement, media coordination, influencer attendance and launch moment execution.",
  },
];

export default function EventWeddingUseCases() {
  return (
    <section className="relative overflow-hidden bg-[#FBFDFF] px-5 py-20 text-[#0D2444] md:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,#E5F3FF_0%,transparent_34%),radial-gradient(circle_at_86%_18%,#D8EAFB_0%,transparent_30%),linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_48%,#EAF5FF_100%)]" />

      <div className="absolute left-[-280px] top-[-280px] h-[680px] w-[680px] rounded-full bg-white/80 blur-3xl" />
      <div className="absolute right-[-320px] bottom-[-320px] h-[760px] w-[760px] rounded-full bg-[#7FA4CA]/16 blur-3xl" />

      <div
        style={serifFont}
        className="pointer-events-none absolute left-1/2 top-[8%] hidden -translate-x-1/2 select-none text-[150px] font-bold leading-none tracking-[-0.08em] text-[#0D2444]/[0.025] lg:block"
      >
        USE CASES
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex max-w-6xl flex-col items-center text-center"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#0D2444]/10 bg-white/75 px-5 py-3 shadow-[0_16px_45px_rgba(13,36,68,0.08)] backdrop-blur-xl">
            <Sparkles size={16} className="text-[#0D2444]" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#5579A6]">
              Event & Wedding Use Cases
            </span>
          </div>

          <h2
            style={serifFont}
            className="mx-auto max-w-5xl text-[34px] font-bold leading-[1.08] tracking-[-0.045em] md:text-[50px] lg:text-[58px]"
          >
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#5579A6] bg-clip-text text-transparent">
              Real Event Needs,
            </span>
            <span className="block bg-gradient-to-r from-[#244B7C] via-[#6F8FB8] to-[#B7CAE2] bg-clip-text text-transparent">
              Planned With Structure,
            </span>
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#6F8FB8] bg-clip-text text-transparent">
              Delivered With Style
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-[16px] font-medium leading-[1.9] text-[#4F627B] md:text-[18px]">
            From destination weddings and corporate annual days to hospitality
            launches, fashion showcases and private celebrations, our team
            manages every event with planning clarity and premium execution.
          </p>
        </motion.div>

        {/* CASE FILE RUNWAY */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mb-8 flex items-center justify-center gap-4"
          >
            <div className="h-px w-full max-w-[260px] bg-[#0D2444]/12" />
            <div className="flex items-center gap-3 rounded-full border border-[#0D2444]/10 bg-white/75 px-5 py-3 shadow-[0_12px_35px_rgba(13,36,68,0.06)] backdrop-blur-xl">
              <ClipboardCheck size={16} />
              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.24em] text-[#5579A6]">
                Use Case Gallery
              </span>
            </div>
            <div className="h-px w-full max-w-[260px] bg-[#0D2444]/12" />
          </motion.div>

          <div className="space-y-5">
            {useCases.map((item, index) => {
              const Icon = item.icon;
              const isOffset = index % 2 !== 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    ease: "easeOut",
                    delay: index * 0.04,
                  }}
                  className={`
                    group relative overflow-hidden rounded-[34px] border border-[#0D2444]/10
                    bg-white/62 px-6 py-6 shadow-[0_20px_70px_rgba(13,36,68,0.08)]
                    backdrop-blur-xl transition-all duration-500 hover:bg-white hover:shadow-[0_28px_90px_rgba(13,36,68,0.13)]
                    md:px-8 md:py-7
                    ${isOffset ? "lg:ml-auto lg:max-w-[1080px]" : "lg:mr-auto lg:max-w-[1080px]"}
                  `}
                >
                  <div className="absolute inset-y-0 left-0 w-[7px] bg-gradient-to-b from-[#0D2444] via-[#5579A6] to-[#B7CAE2]" />
                  <div className="absolute right-[-140px] top-[-140px] h-[300px] w-[300px] rounded-full bg-[#D7E8FA]/80 blur-3xl transition-all duration-500 group-hover:bg-[#B7CAE2]/80" />

                  <div className="relative z-10 grid gap-6 md:grid-cols-[88px_0.75fr_1.15fr_44px] md:items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0D2444] text-white shadow-[0_18px_45px_rgba(13,36,68,0.20)] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={25} />
                    </div>

                    <div>
                      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.26em] text-[#6F8FB8]">
                        {item.label}
                      </p>

                      <h3
                        style={serifFont}
                        className="text-[30px] font-bold leading-[1.05] tracking-[-0.045em] text-[#0D2444] md:text-[38px]"
                      >
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[14.5px] font-medium leading-[1.85] text-[#52647C] md:text-[15.5px]">
                      {item.desc}
                    </p>

                    <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#0D2444]/10 bg-white/70 text-[#0D2444]/60 transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white md:flex">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
}