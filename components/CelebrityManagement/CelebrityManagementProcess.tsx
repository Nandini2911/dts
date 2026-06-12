"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  FileText,
  Handshake,
  Plane,
  Search,
  Sparkles,
  UsersRound,
} from "lucide-react";

export default function CelebrityManagementProcess() {
  const steps = [
    {
      step: "01",
      title: "Requirement Discovery",
      desc: "We understand your event goals, campaign objective, audience profile, preferred talent category, city, date, budget range and expected deliverables.",
      icon: UsersRound,
    },
    {
      step: "02",
      title: "Talent Research & Shortlisting",
      desc: "We identify suitable celebrities, influencers, speakers or performers based on relevance, availability, popularity, audience fit and brand positioning.",
      icon: Search,
    },
    {
      step: "03",
      title: "Outreach & Negotiation",
      desc: "We manage talent outreach, availability checks, commercial discussions, appearance terms, deliverables and negotiation.",
      icon: Handshake,
    },
    {
      step: "04",
      title: "Contract & Compliance",
      desc: "We coordinate agreements, usage rights, appearance clauses, deliverables, brand category terms, payment schedules and documentation.",
      icon: FileText,
    },
    {
      step: "05",
      title: "Logistics Planning",
      desc: "We manage travel, accommodation, hospitality, security, green room requirements, schedules, technical needs and event-day movement planning.",
      icon: Plane,
    },
    {
      step: "06",
      title: "Event-Day Coordination",
      desc: "Our team oversees arrival coordination, backstage communication, media moments, stage flow, guest interaction, stakeholder alignment and departure planning.",
      icon: CalendarCheck,
    },
    {
      step: "07",
      title: "Post-Event Support",
      desc: "We assist with campaign deliverables, content coordination, reporting, usage confirmations and post-event closure.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F4FAFF] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#F8FCFF_0%,#EAF6FF_45%,#0D2444_45%,#071A31_100%)]" />
      <div className="absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#8ABDF0]/35 blur-3xl" />
      <div className="absolute bottom-[-260px] right-[-220px] h-[620px] w-[620px] rounded-full bg-[#8ABDF0]/12 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[940px] text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0D2444]/10 bg-white/80 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#0D2444] shadow-[0_14px_40px_rgba(13,36,68,0.07)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#6288B9]" />
            Our Process
          </span>

          <h2
            className="mx-auto mt-6 max-w-[920px] text-[34px] font-semibold leading-[0.96] tracking-[-0.055em] text-[#0D2444] sm:text-[44px] md:text-[54px] lg:text-[64px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            How Our Celebrity Management{" "}
            <span className="bg-gradient-to-r from-[#8ABDF0] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
              Process Works
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[780px] text-[15px] font-medium leading-[1.85] text-slate-600 md:text-[17px]">
            Our celebrity management process is designed to reduce uncertainty
            for brands by managing both the creative and operational sides of
            talent engagement.
          </p>
        </motion.div>

        {/* PROCESS DASHBOARD */}
        <div className="mt-14 overflow-hidden rounded-[38px] border border-white/15 bg-[#071A31]/92 shadow-[0_34px_110px_rgba(7,26,49,0.32)] backdrop-blur-2xl">
          {/* DASHBOARD TOP BAR */}
          <div className="flex flex-col gap-4 border-b border-white/10 bg-white/[0.04] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-9">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#8ABDF0]" />
              <span className="h-3 w-3 rounded-full bg-white/35" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/55">
              Creative + Operational Talent Management Flow
            </p>
          </div>

          {/* DESKTOP ROADMAP */}
          <div className="hidden lg:block">
            <div className="relative px-9 py-12">
              {/* CENTER FLOW LINE */}
              <div className="absolute left-1/2 top-12 h-[calc(100%-96px)] w-px -translate-x-1/2 bg-gradient-to-b from-[#8ABDF0] via-white/20 to-[#8ABDF0]" />

              <div className="space-y-10">
                {steps.map((item, index) => {
                  const Icon = item.icon;
                  const isLeft = index % 2 === 0;

                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.65,
                        delay: index * 0.06,
                        ease: "easeOut",
                      }}
                      className={`relative grid grid-cols-2 gap-16 ${
                        isLeft ? "" : "direction-rtl"
                      }`}
                    >
                      {/* CENTER NODE */}
                      <div className="absolute left-1/2 top-8 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-[#8ABDF0] text-[#0D2444] shadow-[0_0_0_10px_rgba(138,189,240,0.10)]">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* CONTENT PANEL */}
                      <div
                        className={`group relative ${
                          isLeft ? "text-right" : "col-start-2 text-left"
                        }`}
                      >
                        <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.07] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.11]">
                          <div className="absolute right-[-80px] top-[-80px] h-[170px] w-[170px] rounded-full bg-[#8ABDF0]/15 blur-2xl" />

                          <div className="relative z-10">
                            <div
                              className={`mb-5 flex items-center gap-3 ${
                                isLeft ? "justify-end" : "justify-start"
                              }`}
                            >
                              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#8ABDF0]">
                                Step {item.step}
                              </span>
                            </div>

                            <h3
                              className="text-[30px] font-semibold leading-[1.02] tracking-[-0.045em] text-white"
                              style={{
                                fontFamily:
                                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                              }}
                            >
                              {item.title}
                            </h3>

                            <p className="mt-5 text-[14px] font-medium leading-[1.85] text-white/68">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* EMPTY SPACE */}
                      <div className={isLeft ? "col-start-2" : "col-start-1"} />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MOBILE ROADMAP */}
          <div className="relative px-5 py-8 sm:px-7 lg:hidden">
            <div className="absolute left-[34px] top-8 h-[calc(100%-64px)] w-px bg-gradient-to-b from-[#8ABDF0] via-white/20 to-[#8ABDF0]" />

            <div className="space-y-6">
              {steps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.06,
                      ease: "easeOut",
                    }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#8ABDF0] text-[#0D2444] shadow-[0_0_0_8px_rgba(138,189,240,0.10)]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="rounded-[26px] border border-white/12 bg-white/[0.07] p-5 backdrop-blur-xl">
                      <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-[#8ABDF0]">
                        Step {item.step}
                      </span>

                      <h3
                        className="mt-5 text-[25px] font-semibold leading-[1.02] tracking-[-0.045em] text-white"
                        style={{
                          fontFamily:
                            'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                        }}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-4 text-[13px] font-medium leading-[1.8] text-white/68">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* BOTTOM CTA STRIP */}
          <div className="border-t border-white/10 bg-white/[0.04] px-5 py-6 sm:px-7 lg:px-9">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[640px] text-[13px] font-medium leading-[1.8] text-white/65">
                Every step is handled with structured communication, clear
                documentation and on-ground coordination to keep your celebrity
                engagement smooth from start to finish.
              </p>

              <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#8ABDF0]">
                Planning to Execution
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}