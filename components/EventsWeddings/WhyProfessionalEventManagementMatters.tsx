"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  Users,
  ShieldCheck,
  HeartHandshake,
  Clock3,
  Sparkles,
  Wrench,
  Gem,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const managementPoints = [
  {
    icon: CalendarCheck,
    title: "Better Planning & Coordination",
    desc: "A professional event team brings structure, timelines and clear communication to every stage of planning.",
  },
  {
    icon: Users,
    title: "Stronger Guest Experience",
    desc: "From arrival to hospitality, seating, entertainment and event flow, every guest touchpoint is planned with care.",
  },
  {
    icon: ShieldCheck,
    title: "Vendor Quality Control",
    desc: "Professional vendor coordination helps maintain quality, timelines, service standards and execution consistency.",
  },
  {
    icon: HeartHandshake,
    title: "Stress-Free Execution",
    desc: "With a dedicated team managing the backend, clients and families can focus on the occasion instead of operational pressure.",
  },
  {
    icon: Clock3,
    title: "Budget & Timeline Management",
    desc: "Event planning requires cost control, scheduling and coordination across multiple vendors and moving parts.",
  },
  {
    icon: Sparkles,
    title: "Creative Experience Design",
    desc: "A strong event concept helps create memorable moments, beautiful visuals and meaningful experiences.",
  },
  {
    icon: Wrench,
    title: "On-Ground Problem Solving",
    desc: "Events require real-time decision-making. A professional team handles last-minute changes, vendor issues and guest requirements.",
  },
];

export default function WhyProfessionalEventManagementMatters() {
  const leftPoints = [
    managementPoints[0],
    managementPoints[2],
    managementPoints[4],
  ];

  const rightPoints = [
    managementPoints[1],
    managementPoints[3],
    managementPoints[5],
  ];

  const finalPoint = managementPoints[6];

  return (
    <section className="relative overflow-hidden bg-[#F9FCFF] px-5 pt-36 pb-20 text-[#0D2444] md:pt-44 md:pb-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,#E2F2FF_0%,transparent_34%),radial-gradient(circle_at_12%_18%,#EDF7FF_0%,transparent_30%),radial-gradient(circle_at_88%_74%,#D7E8FA_0%,transparent_34%),linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_48%,#EAF5FF_100%)]" />

      <div className="absolute left-[-320px] top-[-320px] h-[760px] w-[760px] rounded-full bg-white/80 blur-3xl" />
      <div className="absolute right-[-340px] bottom-[-340px] h-[820px] w-[820px] rounded-full bg-[#7FA4CA]/16 blur-3xl" />

      {/* SOFT SPOTLIGHT */}
      <div className="absolute left-1/2 top-[55%] h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B7CAE2]/20 blur-3xl" />

      {/* DOT TEXTURE */}
      <div
        className="
          absolute inset-0 opacity-[0.10]
          [background-image:radial-gradient(#0D2444_1px,transparent_1px)]
          [background-size:28px_28px]
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
            <Gem size={16} className="text-[#0D2444]" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#5579A6]">
              Why Professional Event & Wedding Management Matters
            </span>
          </div>

          <h2
            style={serifFont}
            className="mx-auto max-w-5xl text-[34px] font-bold leading-[1.06] tracking-[-0.05em] md:text-[50px] lg:text-[62px]"
          >
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#5579A6] bg-clip-text text-transparent">
              The Difference Between
            </span>
            <span className="block bg-gradient-to-r from-[#244B7C] via-[#6F8FB8] to-[#B7CAE2] bg-clip-text text-transparent">
              A Beautiful Event
            </span>
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#6F8FB8] bg-clip-text text-transparent">
              And A Seamless One
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-[16px] font-medium leading-[1.9] text-[#4F627B] md:text-[18px]">
            Professional management brings structure, vendor control, guest
            comfort, budget discipline and real-time problem solving into one
            calm execution system.
          </p>
        </motion.div>

        {/* DESKTOP CONTROL HUB - NO OVERLAP */}
        <div className="mt-20 hidden lg:grid lg:grid-cols-[1fr_330px_1fr] lg:items-center lg:gap-8">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {leftPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-[#0D2444]/10 bg-white/78 p-6 text-right shadow-[0_22px_70px_rgba(13,36,68,0.09)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_34px_95px_rgba(13,36,68,0.16)]"
                >
                  <div className="absolute left-[-90px] top-[-90px] h-[210px] w-[210px] rounded-full bg-[#D7E8FA] blur-3xl transition-all duration-500 group-hover:bg-[#B7CAE2]" />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-center justify-end gap-5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0D2444]/10 text-[#0D2444]/55 transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white">
                        <ArrowUpRight size={16} />
                      </div>

                      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#0D2444] text-white shadow-[0_14px_36px_rgba(13,36,68,0.18)]">
                        <Icon size={21} />
                      </div>
                    </div>

                    <h3
                      style={serifFont}
                      className="text-[25px] font-bold leading-[1.08] tracking-[-0.04em] text-[#0D2444]"
                    >
                      {item.title}
                    </h3>

                    <p className="ml-auto mt-4 max-w-[430px] text-[14px] font-medium leading-[1.75] text-[#52647C]">
                      {item.desc}
                    </p>

                    <div className="mt-6 ml-auto h-px w-12 bg-[#6F8FB8]/70 transition-all duration-500 group-hover:w-28 group-hover:bg-[#0D2444]" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER HUB */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative mx-auto flex h-[620px] w-full items-center justify-center"
          >
            {/* CONNECTION LINES */}
            <div className="absolute left-1/2 top-[18%] h-px w-[620px] -translate-x-1/2 rotate-[18deg] bg-gradient-to-r from-transparent via-[#6F8FB8]/35 to-transparent" />
            <div className="absolute left-1/2 top-[18%] h-px w-[620px] -translate-x-1/2 rotate-[-18deg] bg-gradient-to-r from-transparent via-[#6F8FB8]/35 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-px w-[620px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#6F8FB8]/35 to-transparent" />
            <div className="absolute left-1/2 bottom-[18%] h-px w-[620px] -translate-x-1/2 rotate-[-18deg] bg-gradient-to-r from-transparent via-[#6F8FB8]/35 to-transparent" />
            <div className="absolute left-1/2 bottom-[18%] h-px w-[620px] -translate-x-1/2 rotate-[18deg] bg-gradient-to-r from-transparent via-[#6F8FB8]/35 to-transparent" />

            {/* RINGS */}
            <div className="absolute h-[330px] w-[330px] rounded-full border border-[#0D2444]/10" />
            <div className="absolute h-[255px] w-[255px] rounded-full border border-[#0D2444]/12" />
            <div className="absolute h-[180px] w-[180px] rounded-full border border-[#0D2444]/14" />
            <div className="absolute h-[430px] w-[430px] rounded-full bg-white/30 blur-2xl" />

            <div className="relative z-10 flex h-[195px] w-[195px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#0D2444] via-[#183A66] to-[#6F8FB8] text-center text-white shadow-[0_34px_90px_rgba(13,36,68,0.28)]">
              <CheckCircle2 size={34} />

              <p className="mt-5 text-[11px] font-black uppercase tracking-[0.28em]">
                DTS Control
              </p>

              <p className="mt-3 max-w-[125px] text-[10px] font-bold uppercase leading-[1.6] tracking-[0.18em] text-white/68">
                Plan Align Execute
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {rightPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-[#0D2444]/10 bg-white/78 p-6 shadow-[0_22px_70px_rgba(13,36,68,0.09)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_34px_95px_rgba(13,36,68,0.16)]"
                >
                  <div className="absolute right-[-90px] top-[-90px] h-[210px] w-[210px] rounded-full bg-[#D7E8FA] blur-3xl transition-all duration-500 group-hover:bg-[#B7CAE2]" />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-center justify-between gap-5">
                      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#0D2444] text-white shadow-[0_14px_36px_rgba(13,36,68,0.18)]">
                        <Icon size={21} />
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0D2444]/10 text-[#0D2444]/55 transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    <h3
                      style={serifFont}
                      className="text-[25px] font-bold leading-[1.08] tracking-[-0.04em] text-[#0D2444]"
                    >
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[430px] text-[14px] font-medium leading-[1.75] text-[#52647C]">
                      {item.desc}
                    </p>

                    <div className="mt-6 h-px w-12 bg-[#6F8FB8]/70 transition-all duration-500 group-hover:w-28 group-hover:bg-[#0D2444]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* FINAL CENTER POINT */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-10 hidden max-w-3xl lg:block"
        >
          <div className="group relative overflow-hidden rounded-[34px] border border-[#0D2444]/10 bg-white/82 p-7 text-center shadow-[0_24px_75px_rgba(13,36,68,0.10)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_34px_95px_rgba(13,36,68,0.16)]">
            <div className="absolute left-1/2 top-[-130px] h-[260px] w-[420px] -translate-x-1/2 rounded-full bg-[#D7E8FA] blur-3xl" />

            <div className="relative z-10">
              <div className="mx-auto mb-5 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#0D2444] text-white shadow-[0_14px_36px_rgba(13,36,68,0.18)]">
                <Wrench size={23} />
              </div>

              <h3
                style={serifFont}
                className="text-[30px] font-bold leading-[1.06] tracking-[-0.045em] text-[#0D2444]"
              >
                {finalPoint.title}
              </h3>

              <p className="mx-auto mt-4 max-w-xl text-[14.5px] font-medium leading-[1.8] text-[#52647C]">
                {finalPoint.desc}
              </p>

              <div className="mx-auto mt-6 h-px w-16 bg-[#6F8FB8]/70 transition-all duration-500 group-hover:w-32 group-hover:bg-[#0D2444]" />
            </div>
          </div>
        </motion.div>

        {/* MOBILE / TABLET */}
        <div className="mt-14 grid gap-4 lg:hidden">
          {managementPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.035,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-[#0D2444]/10 bg-white/72 p-6 shadow-[0_20px_65px_rgba(13,36,68,0.08)] backdrop-blur-xl"
              >
                <div className="absolute right-[-90px] top-[-90px] h-[210px] w-[210px] rounded-full bg-[#D7E8FA] blur-3xl" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0D2444] text-white">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3
                      style={serifFont}
                      className="text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-[#0D2444]"
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14.5px] font-medium leading-[1.8] text-[#52647C]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-[32px] border border-[#0D2444]/10 bg-white/72 p-3 shadow-[0_22px_75px_rgba(13,36,68,0.09)] backdrop-blur-xl"
        >
          <div className="rounded-[24px] bg-gradient-to-r from-[#0D2444] via-[#244B7C] to-[#7FA4CA] px-6 py-5 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/92 md:text-[13px]">
              Planning Clarity • Guest Comfort • Vendor Control • Budget Discipline • Creative Experience • On-Ground Solutions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}