"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const weddingServices = [
  {
    title: "Complete Wedding Planning",
    desc: "We manage the complete wedding planning process from concept to execution, including venue coordination, décor planning, vendor management, entertainment, hospitality, guest logistics and event-day supervision.",
  },
  {
    title: "Destination Wedding Planning",
    desc: "We help plan destination weddings across India, including venue shortlisting, guest movement, accommodation coordination, transport, décor, entertainment, hospitality and function-wise execution.",
  },
  {
    title: "Luxury Wedding Management",
    desc: "We curate premium wedding experiences with a focus on aesthetics, guest comfort, personalized details, family coordination, entertainment and seamless event flow.",
  },
  {
    title: "Wedding Décor & Theme Planning",
    desc: "We help develop wedding themes, mood boards, décor concepts, floral styling, mandap design, stage setup, entrance design, table styling and overall visual direction.",
  },
  {
    title: "Guest Management",
    desc: "We manage guest lists, RSVP coordination, welcome desks, rooming lists, airport pickups, check-ins, hampers, itinerary sharing and guest assistance during wedding functions.",
  },
  {
    title: "Wedding Logistics",
    desc: "We coordinate travel, accommodation, transport, vendor movement, function timelines, technical requirements, permissions and on-ground execution.",
  },
  {
    title: "Entertainment & Artist Management",
    desc: "We arrange singers, DJs, anchors, celebrity performers, folk artists, dancers, live bands, comedians and special acts for wedding functions and private celebrations.",
  },
  {
    title: "Vendor Coordination",
    desc: "We coordinate photographers, videographers, decorators, caterers, makeup artists, stylists, production teams, sound vendors, lighting teams and other event partners.",
  },
  {
    title: "Ritual & Function Planning",
    desc: "We manage engagement, mehendi, haldi, sangeet, cocktail, wedding ceremony, reception, after-party and family events with detailed planning and execution.",
  },
];

export default function OurWeddingPlanningServices() {
  return (
    <section className="relative overflow-hidden bg-[#071426] px-5 py-20 text-white md:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(111,143,184,0.35),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(183,202,226,0.16),transparent_36%),linear-gradient(135deg,#071426_0%,#0D2444_45%,#102B4F_100%)]" />

      <div className="absolute left-[-260px] top-[-260px] h-[620px] w-[620px] rounded-full border border-white/10" />
      <div className="absolute right-[-320px] bottom-[-320px] h-[760px] w-[760px] rounded-full border border-white/10" />

      <div
        className="
          absolute inset-0 opacity-[0.045]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px)]
          [background-size:120px_120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* CENTER HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex max-w-5xl flex-col items-center border-b border-white/14 pb-14 text-center"
        >
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/8 backdrop-blur-xl">
              <Sparkles size={17} />
            </span>

            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#B7CAE2]">
              Our Wedding Planning Services
            </span>
          </div>

         <h2
  style={serifFont}
  className="text-[42px] font-bold leading-[0.98] tracking-[-0.06em] md:text-[46px]"
>
  <span className="inline bg-gradient-to-r from-white via-[#DCEBFA] to-[#7FA4CA] bg-clip-text text-transparent">
    Wedding Planning With Detail & Control
  </span>
</h2>

          <p className="mt-8 max-w-3xl text-[16px] font-medium leading-[1.9] text-white/68 md:text-[18px]">
            From intimate family celebrations to destination weddings and
            luxury multi-day functions, we manage every detail with visual
            elegance, hospitality discipline and smooth on-ground execution.
          </p>

          <div className="mt-8 flex w-full max-w-xl items-center gap-4">
            <div className="h-px flex-1 bg-white/18" />
            <span className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.24em] text-[#B7CAE2]">
              360° Wedding Execution
            </span>
            <div className="h-px flex-1 bg-white/18" />
          </div>
        </motion.div>

        {/* SERVICE GRID WITHOUT NUMBERS */}
        <div className="mt-16 grid gap-0 border-y border-white/14 lg:grid-cols-3">
          {weddingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
                delay: index * 0.04,
              }}
              className="
                group relative min-h-[260px] border-b border-white/14 py-9
                lg:border-b-0 lg:border-r lg:border-white/14 lg:px-8
                [&:nth-child(3n)]:lg:border-r-0
              "
            >
              <div className="absolute inset-0 bg-white/0 transition-all duration-500 group-hover:bg-white/[0.035]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 flex justify-end">
                  
                </div>

                <h3
                  style={serifFont}
                  className="max-w-[310px] text-[29px] font-bold leading-[1.05] tracking-[-0.045em] text-white md:text-[34px]"
                >
                  {service.title}
                </h3>

                <p className="mt-5 max-w-[360px] text-[14.5px] font-medium leading-[1.85] text-white/62 md:text-[15.5px]">
                  {service.desc}
                </p>

                <div className="mt-auto pt-8">
                  <div className="h-px w-12 bg-[#B7CAE2]/70 transition-all duration-500 group-hover:w-28" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="border-b border-white/14 py-9 text-center"
        >
          <p className="text-[12px] font-black uppercase tracking-[0.26em] text-[#B7CAE2]">
            Venue Planning · Décor Direction · Guest Hospitality · Artist Management · Wedding Logistics
          </p>
        </motion.div>
      </div>
    </section>
  );
}