"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Handshake,
  WalletCards,
  Palette,
  Music2,
  Users,
  ClipboardCheck,
  FileCheck2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const processSteps = [
  {
    icon: Search,
    title: "Requirement Discovery",
    desc: "We understand your event type, date, city, guest count, budget range, venue preference, experience goals and required services.",
  },
  {
    icon: Lightbulb,
    title: "Concept & Planning",
    desc: "We develop the event direction, theme, flow, function structure, guest experience plan and overall execution approach.",
  },
  {
    icon: Handshake,
    title: "Venue & Vendor Coordination",
    desc: "We coordinate with venues, decorators, caterers, production vendors, entertainment teams, photographers, logistics partners and hospitality teams.",
  },
  {
    icon: WalletCards,
    title: "Budget Planning",
    desc: "We help align event requirements with available budget, vendor costs, production needs and service priorities.",
  },
  {
    icon: Palette,
    title: "Design & Production Planning",
    desc: "We plan décor, stage setup, lighting, sound, branding, seating layouts, entry design, technical requirements and visual experience.",
  },
  {
    icon: Music2,
    title: "Entertainment & Artist Coordination",
    desc: "We manage anchors, DJs, singers, celebrity guests, performers, speakers, hosts and entertainment flow based on the event type.",
  },
  {
    icon: Users,
    title: "Logistics & Hospitality",
    desc: "We coordinate guest movement, travel, accommodation, transport, welcome desks, itineraries, hospitality requirements and backstage operations.",
  },
  {
    icon: ClipboardCheck,
    title: "Event-Day Execution",
    desc: "Our team supervises vendors, timelines, guest flow, stage cues, hospitality, production, entertainment and last-minute requirements.",
  },
  {
    icon: FileCheck2,
    title: "Post-Event Support",
    desc: "We assist with vendor closure, deliverables, event reports, media coordination, content handover and final documentation where required.",
  },
];

export default function EventWeddingManagementProcess() {
  return (
    <section className="relative overflow-hidden bg-[#FBFDFF] px-5 py-20 text-[#0D2444] md:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,#E3F1FF_0%,transparent_34%),radial-gradient(circle_at_90%_16%,#DCEBFA_0%,transparent_28%),linear-gradient(180deg,#FFFFFF_0%,#F6FAFF_48%,#EAF4FF_100%)]" />

      <div className="absolute left-[-260px] top-[-260px] h-[620px] w-[620px] rounded-full bg-white/80 blur-3xl" />
      <div className="absolute right-[-300px] bottom-[-300px] h-[720px] w-[720px] rounded-full bg-[#7FA4CA]/16 blur-3xl" />

      {/* SOFT LARGE TYPOGRAPHY */}
      <div
        style={serifFont}
        className="pointer-events-none absolute left-1/2 top-[22%] hidden -translate-x-1/2 select-none text-[180px] font-bold leading-none tracking-[-0.08em] text-[#0D2444]/[0.025] lg:block"
      >
        PROCESS
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
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#0D2444]/10 bg-white/70 px-5 py-3 shadow-[0_16px_45px_rgba(13,36,68,0.08)] backdrop-blur-xl">
            <Sparkles size={16} className="text-[#0D2444]" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#5579A6]">
              Our Event & Wedding Management Process
            </span>
          </div>

          <h2
            style={serifFont}
            className="mx-auto max-w-5xl text-[34px] font-bold leading-[1.08] tracking-[-0.045em] md:text-[50px] lg:text-[58px]"
          >
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#5579A6] bg-clip-text text-transparent">
              A Clear Planning System
            </span>
            <span className="block bg-gradient-to-r from-[#244B7C] via-[#6F8FB8] to-[#B7CAE2] bg-clip-text text-transparent">
              From First Discussion
            </span>
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#6F8FB8] bg-clip-text text-transparent">
              To Final Execution
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-[16px] font-medium leading-[1.9] text-[#4F627B] md:text-[18px]">
            Every event needs a clear system. Our process helps clients move
            from idea to execution with clarity, vendor control, creative
            direction and smooth on-ground delivery.
          </p>
        </motion.div>

        {/* PROCESS MAP */}
        <div className="relative mt-18 md:mt-20">
          {/* TOP LABEL BAR */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mb-10 flex max-w-4xl items-center justify-center gap-4"
          >
            <div className="h-px flex-1 bg-[#0D2444]/12" />
            <span className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.26em] text-[#5579A6]">
              09 Step Execution Flow
            </span>
            <div className="h-px flex-1 bg-[#0D2444]/12" />
          </motion.div>

          {/* DESKTOP PROCESS GRID */}
          <div className="hidden lg:block">
            <div className="relative rounded-[46px] border border-[#0D2444]/10 bg-white/52 p-8 shadow-[0_28px_90px_rgba(13,36,68,0.08)] backdrop-blur-xl">
              <div className="absolute inset-x-16 top-1/2 h-px bg-gradient-to-r from-transparent via-[#0D2444]/20 to-transparent" />
              <div className="absolute inset-y-16 left-1/3 w-px bg-gradient-to-b from-transparent via-[#0D2444]/14 to-transparent" />
              <div className="absolute inset-y-16 left-2/3 w-px bg-gradient-to-b from-transparent via-[#0D2444]/14 to-transparent" />

              <div className="relative z-10 grid grid-cols-3 gap-0">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 26 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.65,
                        ease: "easeOut",
                        delay: index * 0.04,
                      }}
                      className="group relative min-h-[275px] p-7"
                    >
                      <div className="mb-7 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-13 w-13 items-center justify-center rounded-full border border-[#0D2444]/12 bg-white text-[#0D2444] shadow-[0_14px_36px_rgba(13,36,68,0.08)] transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white">
                            <Icon size={22} />
                          </div>

                          <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#6F8FB8]">
                            Step {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                      </div>

                      <h3
                        style={serifFont}
                        className="max-w-[310px] text-[28px] font-bold leading-[1.08] tracking-[-0.045em] text-[#0D2444]"
                      >
                        {step.title}
                      </h3>

                      <p className="mt-5 max-w-[330px] text-[14.5px] font-medium leading-[1.85] text-[#52647C]">
                        {step.desc}
                      </p>

                      <div className="mt-7 h-px w-12 bg-[#6F8FB8]/60 transition-all duration-500 group-hover:w-28 group-hover:bg-[#0D2444]" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MOBILE / TABLET PROCESS STACK */}
          <div className="grid gap-5 lg:hidden">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    ease: "easeOut",
                    delay: index * 0.035,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-[#0D2444]/10 bg-white/68 p-6 shadow-[0_20px_65px_rgba(13,36,68,0.08)] backdrop-blur-xl"
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D2444] text-white">
                        <Icon size={21} />
                      </div>

                      <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#6F8FB8]">
                        Step {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <ArrowRight size={18} className="text-[#0D2444]/35" />
                  </div>

                  <h3
                    style={serifFont}
                    className="text-[28px] font-bold leading-[1.08] tracking-[-0.045em] text-[#0D2444]"
                  >
                    {step.title}
                  </h3>

                  <p className="mt-5 text-[14.5px] font-medium leading-[1.85] text-[#52647C]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
}