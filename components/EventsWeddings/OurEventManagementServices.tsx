"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Rocket,
  Hotel,
  Gem,
  Shirt,
  Music2,
  Trophy,
  Mic2,
  PanelsTopLeft,
  PartyPopper,
  ArrowUpRight,
} from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const eventServices = [
  {
    icon: Building2,
    title: "Corporate Event Management",
    desc: "We plan and execute corporate events, conferences, annual days, leadership summits, dealer meets, employee engagement events, award nights and business gatherings with structured planning and professional execution.",
  },
  {
    icon: Rocket,
    title: "Brand Launches & Product Launches",
    desc: "We create launch experiences for brands, products, services, showrooms, restaurants, hotels and lifestyle businesses with concept planning, stage setup, branding, media coordination and event flow.",
  },
  {
    icon: Hotel,
    title: "Hospitality Events",
    desc: "We work with hotels, restaurants, lounges, clubs and luxury venues for launch events, guest experiences, influencer evenings, celebrity appearances, food festivals and curated hospitality moments.",
  },
  {
    icon: Gem,
    title: "Luxury Event Management",
    desc: "We manage premium events with strong attention to experience, aesthetics, guest comfort, vendor quality and smooth on-ground execution.",
  },
  {
    icon: Shirt,
    title: "Fashion Shows",
    desc: "We plan and execute fashion showcases, designer events, model coordination, backstage management, show flow, celebrity showstoppers, guest seating, lighting, music and production.",
  },
  {
    icon: Music2,
    title: "Entertainment Events",
    desc: "We coordinate live performances, music nights, comedy acts, celebrity appearances, DJs, anchors, hosts, singers and performers for corporate, social and private events.",
  },
  {
    icon: Trophy,
    title: "Award Ceremonies",
    desc: "We manage award nights, recognition events, trophy ceremonies, stage flow, scripting, anchoring, production, guest movement and hospitality.",
  },
  
  {
    icon: PanelsTopLeft,
    title: "Exhibitions & Trade Shows",
    desc: "We support brands with exhibition planning, stall coordination, booth launches, production, visitor engagement, staffing and on-ground operations.",
  },
  {
    icon: PartyPopper,
    title: "Private Celebrations",
    desc: "We plan birthdays, anniversaries, family celebrations, private parties, festive events and intimate luxury gatherings with customized planning and execution.",
  },
];

export default function OurEventManagementServices() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFF] px-5 py-20 text-[#0D2444] md:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFF] via-[#EAF5FF] to-[#D7EBFA]" />

      <div className="absolute left-[-18%] top-[-22%] h-[680px] w-[680px] rounded-full bg-white/75 blur-3xl" />
      <div className="absolute right-[-20%] top-[10%] h-[760px] w-[760px] rounded-full bg-[#6288B9]/22 blur-3xl" />
      <div className="absolute bottom-[-28%] left-[16%] h-[620px] w-[620px] rounded-full bg-[#0D2444]/8 blur-3xl" />

      {/* ABSTRACT SOFT SHAPES */}
      <div className="absolute inset-0 overflow-hidden opacity-45">
        <div className="absolute left-[-150px] top-[4%] h-[640px] w-[360px] rotate-[-24deg] rounded-[50%] bg-gradient-to-b from-white/80 to-transparent blur-[2px]" />
        <div className="absolute left-[34%] top-[-170px] h-[760px] w-[320px] rotate-[18deg] rounded-[50%] bg-gradient-to-b from-[#7FA4CA]/24 to-transparent blur-[1px]" />
        <div className="absolute right-[-90px] bottom-[-120px] h-[640px] w-[500px] rotate-[31deg] rounded-[50%] bg-gradient-to-br from-[#0D2444]/12 to-transparent blur-[2px]" />
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
        {/* TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#0D2444]/12 bg-white/50 px-6 py-3 shadow-[0_18px_55px_rgba(13,36,68,0.10)] backdrop-blur-xl">
            <Gem size={16} className="text-[#0D2444]" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#0D2444]">
              Our Event Management Services
            </span>
          </div>

          <h3
  style={serifFont}
  className="text-[36px] font-bold leading-[1.08] tracking-[-0.045em] md:text-[46px] "
>
  <span className="block whitespace-nowrap bg-gradient-to-r from-[#071426] via-[#244B7C] to-[#B7CAE2] bg-clip-text text-transparent">
    Complete Event Services Planned With Detail,
  </span>

  <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#6F8FB8] bg-clip-text text-transparent">
    Delivered With Control
  </span>
</h3>

          <p className="mx-auto mt-7 max-w-3xl text-[16px] font-medium leading-[1.9] text-[#40516A] md:text-[18px]">
            From corporate gatherings and brand launches to luxury celebrations,
            fashion showcases and entertainment-led experiences, our team
            manages every event with structure, style and professional execution.
          </p>
        </motion.div>

        {/* SERVICE CARDS */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {eventServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                  delay: index * 0.04,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-[#0D2444]/8 bg-white/58 p-6 shadow-[0_22px_65px_rgba(13,36,68,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/78 hover:shadow-[0_30px_85px_rgba(13,36,68,0.16)]"
              >
                {/* CARD GLOW */}
                <div className="absolute right-[-80px] top-[-80px] h-[190px] w-[190px] rounded-full bg-[#6288B9]/18 blur-3xl transition-all duration-300 group-hover:bg-[#6288B9]/28" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D2444] to-[#5579A6] text-white shadow-[0_16px_38px_rgba(13,36,68,0.25)] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={23} />
                    </div>

                  </div>

                  <h3 className="text-[18px] font-black leading-snug tracking-[-0.02em] text-[#0D2444]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[14.5px] leading-[1.85] text-[#52647C]">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM PREMIUM STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mt-10 rounded-[30px] bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#5579A6] px-6 py-6 text-center shadow-[0_24px_70px_rgba(13,36,68,0.25)]"
        >
          <p className="text-[12px] font-black uppercase tracking-[0.24em] text-white/90 md:text-[13px]">
            Corporate Events • Brand Launches • Luxury Weddings • Fashion Shows
            • Conferences • Private Celebrations
          </p>
        </motion.div>
      </div>
    </section>
  );
}