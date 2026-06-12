"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  Gem,
  Users,
  Building2,
  Palette,
  Music,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const services = [
  {
    icon: CalendarCheck,
    title: "Concept Planning",
    desc: "Clear event direction, experience flow and planning structure.",
  },
  {
    icon: Building2,
    title: "Venue Coordination",
    desc: "Venue planning, layout support, access control and coordination.",
  },
  {
    icon: Palette,
    title: "Production & Décor",
    desc: "Visual design, stage, styling, décor and production management.",
  },
  {
    icon: Users,
    title: "Guest Experience",
    desc: "Hospitality, guest movement, RSVP support and on-ground handling.",
  },
  {
    icon: Music,
    title: "Artist Coordination",
    desc: "Entertainment, celebrity, performer and backstage management.",
  },
  {
    icon: MapPin,
    title: "Logistics & Execution",
    desc: "Permissions, vendor movement, transport and event-day control.",
  },
];

export default function EndToEndEventWeddingServices() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFF] px-5 py-20 text-[#0D2444] md:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFF] via-[#EAF5FF] to-[#D7EBFA]" />

      <div className="absolute left-[-18%] top-[-22%] h-[640px] w-[640px] rounded-full bg-white/75 blur-3xl" />
      <div className="absolute right-[-18%] top-[12%] h-[720px] w-[720px] rounded-full bg-[#6288B9]/20 blur-3xl" />
      <div className="absolute bottom-[-30%] left-[20%] h-[620px] w-[620px] rounded-full bg-[#0D2444]/8 blur-3xl" />

      {/* SOFT ABSTRACT WAVES */}
      <div className="absolute inset-0 overflow-hidden opacity-45">
        <div className="absolute left-[-160px] top-[10%] h-[620px] w-[360px] rotate-[-24deg] rounded-[50%] bg-gradient-to-b from-white/80 to-transparent blur-[2px]" />
        <div className="absolute left-[38%] top-[-180px] h-[760px] w-[330px] rotate-[18deg] rounded-[50%] bg-gradient-to-b from-[#7FA4CA]/22 to-transparent blur-[1px]" />
        <div className="absolute right-[-40px] bottom-[-120px] h-[620px] w-[480px] rotate-[30deg] rounded-[50%] bg-gradient-to-br from-[#0D2444]/10 to-transparent blur-[2px]" />
      </div>

      {/* GRID TEXTURE */}
      <div
        className="
          absolute inset-0 opacity-[0.025]
          [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
          [background-size:52px_52px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#0D2444]/12 bg-white/50 px-6 py-3 shadow-[0_18px_55px_rgba(13,36,68,0.10)] backdrop-blur-xl">
              <Gem size={16} className="text-[#0D2444]" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#0D2444]">
                End-to-End Event Services
              </span>
            </div>

            <h2
              style={serifFont}
              className="max-w-4xl text-[36px] font-bold leading-[1.08] tracking-[-0.045em] md:text-[54px] lg:text-[62px]"
            >
              <span className="block bg-gradient-to-r from-[#071426] via-[#102B4F] to-[#5E7FAE] bg-clip-text text-transparent">
                End-to-End Event
              </span>
              <span className="block bg-gradient-to-r from-[#244B7C] via-[#6F8FB8] to-[#B7CAE2] bg-clip-text text-transparent">
                Management & Wedding
              </span>
              <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#6F8FB8] bg-clip-text text-transparent">
                Planning Services
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-[16px] font-semibold leading-[1.9] text-[#243B57] md:text-[18px]">
              A successful event is not only about décor or production. It is
              about planning the right experience, managing every operational
              detail and ensuring that everything runs smoothly from start to
              finish.
            </p>

            <p className="mt-5 max-w-3xl text-[15.5px] leading-[1.9] text-[#40516A] md:text-[17px]">
              Double Trouble Studio helps clients plan and execute corporate
              events, luxury weddings, hospitality launches, brand activations,
              private celebrations, fashion shows, entertainment nights,
              conferences, exhibitions and destination experiences.
            </p>

            <div className="mt-8 rounded-[28px] border border-[#0D2444]/10 bg-white/55 p-6 shadow-[0_24px_70px_rgba(13,36,68,0.10)] backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D2444] to-[#5579A6] text-white shadow-[0_16px_35px_rgba(13,36,68,0.22)]">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <h3 className="text-[15px] font-black uppercase tracking-[0.18em] text-[#0D2444]">
                    Structured Process
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.8] text-[#40516A]">
                    Whether you are planning an intimate celebration or a
                    large-format event, we work with a structured process to
                    ensure clarity, coordination and seamless delivery.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SERVICE CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[44px] bg-gradient-to-br from-[#0D2444]/10 via-[#6288B9]/16 to-white/20 blur-2xl" />

            <div className="relative rounded-[36px] border border-white/70 bg-white/55 p-5 shadow-[0_30px_90px_rgba(13,36,68,0.14)] backdrop-blur-2xl md:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: index * 0.06,
                      }}
                      className="group rounded-[26px] border border-[#0D2444]/8 bg-white/62 p-6 shadow-[0_18px_45px_rgba(13,36,68,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_24px_65px_rgba(13,36,68,0.14)]"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D2444] to-[#5579A6] text-white shadow-[0_14px_35px_rgba(13,36,68,0.24)] transition-transform duration-300 group-hover:scale-105">
                        <Icon size={21} />
                      </div>

                      <h3 className="text-[14px] font-black uppercase tracking-[0.16em] text-[#0D2444]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-[14.5px] leading-[1.75] text-[#52647C]">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* BOTTOM LINE */}
              <div className="mt-5 rounded-[24px] bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#5579A6] px-6 py-5 text-center shadow-[0_20px_55px_rgba(13,36,68,0.22)]">
                <p className="text-[12px] font-black uppercase tracking-[0.24em] text-white/90">
                  Planning • Production • Hospitality • Logistics • Execution
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}