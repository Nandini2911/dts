"use client";

import { motion } from "framer-motion";

export default function FeaturedWork() {
  const projects = [
    {
      image: "/guest/wedding1.jpg",
      title: "Luxury Wedding Guest Flow",
      desc: "Structured guest segmentation, VIP routing and seamless arrival coordination for a high-profile wedding celebration.",
    },
    {
      image: "/guest/wedding2.jpg",
      title: "Celebrity Event Entry Control",
      desc: "Handled VIP arrivals, media coordination and access control under high-pressure conditions.",
    },
    {
      image: "/guest/wedding3.jpg",
      title: "Brand Launch Guest System",
      desc: "Built a complete RSVP and entry flow system with tiered access and smooth check-ins.",
    },
    {
      image: "/guest/celebrity.jpg",
      title: "Corporate Event Guest Desk",
      desc: "Managed delegate verification, guest registration and real-time support for a premium corporate gathering.",
    },
    {
      image: "/guest/brand.jpg",
      title: "VIP Movement Coordination",
      desc: "Created a controlled guest route for celebrities, founders and special invitees with discreet handling.",
    },
    {
      image: "/guest/brand2.jpg",
      title: "Destination Event Arrival Flow",
      desc: "Coordinated arrivals, hotel movement, venue entry and guest assistance across multiple event touchpoints.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden  px-5 py-16 md:py-24">
      {/* Background glow */}
      <div className="absolute left-[-180px] top-[-160px] h-[440px] w-[440px] rounded-full bg-[#6288B9]/20 blur-3xl" />
      <div className="absolute right-[-220px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-[#1F4B7A]/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: [0.92, 1.04, 1] }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-[950px] text-center"
        >
          <span className="inline-flex rounded-full border border-white/15 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(98,136,185,0.22)] backdrop-blur-xl">
            Featured Work
          </span>

          <h2
  className="mx-auto mt-6 max-w-[1000px] text-[38px] font-semibold leading-[1] tracking-[-0.055em] text-[#0D2444] sm:text-[54px] md:text-[70px]"
  style={{
    fontFamily:
      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
  }}
>
  <span className="bg-gradient-to-r from-[#06172D] via-[#0D2444] to-[#315E91] bg-clip-text text-transparent">
    Guest Management
  </span>{" "}
  <span className="bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
    In Action
  </span>
</h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-medium leading-[1.8] text-white/65 md:text-[18px]">
            Real event scenarios where planning, guest segmentation, VIP routing
            and on-ground control create seamless premium experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[28px] border bg-[#0B1324]/92 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
                index === 1
                  ? "border-[#6288B9]/55 shadow-[0_28px_90px_rgba(98,136,185,0.25)]"
                  : "border-[#6288B9]/18 hover:border-[#6288B9]/55"
              }`}
            >
              {/* Active card glow */}
              {index === 1 && (
                <div className="absolute inset-0 rounded-[28px] bg-[#6288B9]/10" />
              )}

              {/* Image */}
              <div className="relative h-[300px] overflow-hidden rounded-[20px] bg-[#0D2444]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07182E]/92 via-[#07182E]/20 to-transparent" />
              </div>

              {/* Text */}
              <div className="relative z-10 px-1 pb-3 pt-7">
                <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#8DB4E3]">
                  Guest Management
                </p>

                <h3 className="mt-5 text-[25px] font-bold leading-[1.15] tracking-[-0.04em] text-white md:text-[28px]">
                  {project.title}
                </h3>

                <p className="mt-5 text-[15px] font-medium leading-[1.65] text-white/60 md:text-[16px]">
                  {project.desc}
                </p>
              </div>

              {/* Bottom shine */}
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#6288B9]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}