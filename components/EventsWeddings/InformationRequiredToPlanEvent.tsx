"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Users,
  WalletCards,
  LayoutTemplate,
  Utensils,
  Music2,
  Handshake,
  Plane,
  Crown,
  Sparkles,
  ClipboardList,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const briefGroups = [
  {
    label: "Event Basics",
    items: [
      { icon: ClipboardList, title: "Event Type" },
      { icon: CalendarDays, title: "Event Date" },
      { icon: MapPin, title: "City & Venue Preference" },
      { icon: Users, title: "Expected Guest Count" },
    ],
  },
  {
    label: "Planning Scope",
    items: [
      { icon: WalletCards, title: "Budget Range" },
      { icon: LayoutTemplate, title: "Number of Functions" },
      { icon: Sparkles, title: "Décor & Theme Preference" },
      { icon: Utensils, title: "Hospitality Requirements" },
    ],
  },
  {
    label: "Experience Needs",
    items: [
      { icon: Music2, title: "Entertainment Requirements" },
      { icon: Handshake, title: "Vendor Requirements" },
      { icon: Plane, title: "Travel & Accommodation Needs" },
      { icon: Star, title: "Brand or Family Expectations" },
      { icon: Crown, title: "Celebrity or Special Guest Requirement" },
    ],
  },
];

export default function InformationRequiredToPlanEvent() {
  return (
    <section className="relative overflow-hidden bg-[#FBFDFF] px-5 py-20 text-[#0D2444] md:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,#E5F3FF_0%,transparent_34%),radial-gradient(circle_at_88%_16%,#D8EAFB_0%,transparent_30%),linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_48%,#EAF5FF_100%)]" />

      <div className="absolute left-[-280px] top-[-280px] h-[680px] w-[680px] rounded-full bg-white/80 blur-3xl" />
      <div className="absolute right-[-320px] bottom-[-320px] h-[780px] w-[780px] rounded-full bg-[#7FA4CA]/18 blur-3xl" />

      <div
        className="
          absolute inset-0 opacity-[0.12]
          [background-image:radial-gradient(#0D2444_1px,transparent_1px)]
          [background-size:26px_26px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex max-w-6xl flex-col items-center text-center"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#0D2444]/10 bg-white/80 px-5 py-3 shadow-[0_16px_45px_rgba(13,36,68,0.08)] backdrop-blur-xl">
            <ClipboardList size={16} className="text-[#0D2444]" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#5579A6]">
              Information Required To Plan Your Event
            </span>
          </div>

          <h2
            style={serifFont}
            className="mx-auto max-w-5xl text-[34px] font-bold leading-[1.08] tracking-[-0.045em] md:text-[50px] lg:text-[58px]"
          >
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#5579A6] bg-clip-text text-transparent">
              Share The Details,
            </span>
            <span className="block bg-gradient-to-r from-[#244B7C] via-[#6F8FB8] to-[#B7CAE2] bg-clip-text text-transparent">
              We Shape The Planning
            </span>
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#6F8FB8] bg-clip-text text-transparent">
              With Clarity
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-[16px] font-medium leading-[1.9] text-[#4F627B] md:text-[18px]">
            To begin planning your event or wedding, we collect a few important
            details that help us understand your vision, scale, priorities and
            execution requirements.
          </p>
        </motion.div>

        {/* PLANNING BRIEF DESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-16 overflow-hidden rounded-[44px] border border-[#0D2444]/10 bg-white/72 shadow-[0_32px_100px_rgba(13,36,68,0.10)] backdrop-blur-2xl"
        >
          {/* TOP BAR */}
          <div className="grid border-b border-[#0D2444]/10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0D2444] via-[#183A66] to-[#5579A6] p-7 text-white md:p-9">
              <div className="absolute right-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full border border-white/12" />
              <div className="absolute bottom-[-140px] left-[-120px] h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-white/14 backdrop-blur-xl">
                  <CheckCircle2 size={30} />
                </div>

                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white/65">
                  DTS Planning Brief
                </p>

                <h3
                  style={serifFont}
                  className="mt-5 max-w-xl text-[34px] font-bold leading-[1.06] tracking-[-0.05em] md:text-[48px]"
                >
                  Better information creates better planning.
                </h3>
              </div>
            </div>

            <div className="p-7 md:p-9">
              <p
                style={serifFont}
                className="max-w-3xl text-[28px] font-bold leading-[1.18] tracking-[-0.045em] text-[#0D2444] md:text-[30px]"
              >
                Once we know the event type, guest count, city, budget, theme
                and experience needs, we can build the right execution approach.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["Vision", "Scale", "Execution"].map((item) => (
                  <div key={item} className="border-t border-[#0D2444]/12 pt-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#5579A6]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BRIEF GROUPS */}
          <div className="grid lg:grid-cols-3">
            {briefGroups.map((group, groupIndex) => (
              <div
                key={group.label}
                className={`
                  relative p-6 md:p-8
                  ${groupIndex !== briefGroups.length - 1 ? "lg:border-r lg:border-[#0D2444]/10" : ""}
                `}
              >
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#6F8FB8]">
                      0{groupIndex + 1}
                    </p>

                    <h3
                      style={serifFont}
                      className="mt-2 text-[30px] font-bold leading-[1.05] tracking-[-0.045em] text-[#0D2444] md:text-[38px]"
                    >
                      {group.label}
                    </h3>
                  </div>

                  <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#0D2444]/10 bg-[#F7FBFF] text-[#0D2444] sm:flex">
                    <ArrowRight size={18} />
                  </div>
                </div>

                <div className="divide-y divide-[#0D2444]/10 border-y border-[#0D2444]/10">
                  {group.items.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          ease: "easeOut",
                          delay: (groupIndex * 4 + index) * 0.025,
                        }}
                        className="group flex items-center gap-4 py-5"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#0D2444]/10 bg-[#F7FBFF] text-[#244B7C] transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white">
                          <Icon size={20} />
                        </div>

                        <p className="text-[12px] font-black uppercase leading-[1.5] tracking-[0.17em] text-[#0D2444]">
                          {item.title}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* BOTTOM FLOW */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-4"
        >
          {[
            "Understand Your Vision",
            "Define The Event Scope",
            "Build The Planning Approach",
            "Prepare Execution Flow",
          ].map((item, index) => (
            <div
              key={item}
              className="group flex items-center justify-between gap-4 rounded-full border border-[#0D2444]/10 bg-white/72 px-5 py-4 shadow-[0_14px_40px_rgba(13,36,68,0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#0D2444] hover:text-white"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                {item}
              </span>

              <span className="text-[12px] font-black text-[#5579A6] transition-colors duration-300 group-hover:text-white">
                0{index + 1}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}