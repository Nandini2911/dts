"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "Arryan Arora",
    role: "Director, Strategy & Growth",
    desc: "A key pillar in shaping the strategy, clarity and long-term direction of Double Trouble Studio.",
    image: "/aryan.jpg",
  },
  {
    name: "Sanjeev Seth",
    role: "Chair Person & Finance",
    desc: "Bringing financial structure, operational discipline and long-term business stability to the studio.",
    image: "/sanjeev.webp",
  },
  {
    name: "Hitesh Kukreja",
    role: "CEO, Finance",
    desc: "Leading execution, financial systems and decision-making and modern business thinking.",
    image: "/hitesh.jpg",
  },
];

export default function LeadershipSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-[110px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#F8FAFC]" />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

      {/* LIGHTS */}
      <div className="absolute top-[-180px] left-[-120px] w-[500px] h-[500px] rounded-full bg-[#6288B9]/15 blur-3xl" />

      <div className="absolute bottom-[-220px] right-[-120px] w-[500px] h-[500px] rounded-full bg-[#A4B8D2]/20 blur-3xl" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5">
        {/* TOP */}
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-end">
          {/* LEFT */}
          <div>
            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex"
            >
              <div
                className="
                  px-5
                  py-2.5
                  rounded-full
                  border
                  border-[#0D2444]/10
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#16365F]
                  to-[#1F4B7A]
                  shadow-[0_10px_30px_rgba(13,36,68,0.15)]
                "
              >
                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.22em]
                    font-semibold
                    text-white
                  "
                >
                  Leadership
                </span>
              </div>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true }}
              className="
                mt-8
                text-[40px]
                sm:text-[48px]
                md:text-[58px]
                leading-[0.98]
                tracking-[-4px]
                font-black
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              <span className="text-[#0F172A]">
                The People
              </span>

              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#6288B9]
                  to-[#A4B8D2]
                "
              >
                Steering
              </span>

              <span className="text-[#0F172A]">
                {" "}
                the Studio
              </span>
            </motion.h2>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="
                mt-8
                text-[15px]
                leading-[2]
                text-slate-500
                max-w-[620px]
              "
            >
              Every project, campaign and client journey is backed by
              these three minds — a balance of vision, discipline and
              precision. From high-level moves to last-mile execution,
              this leadership team keeps DTS sharp, relevant and
              unmistakably itself.
            </motion.p>
          </div>

          {/* RIGHT QUOTE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              lg:pl-10
              border-l
              border-[#6288B9]/15
            "
          >
            <p
              className="
                text-[22px]
                md:text-[28px]
                leading-[1.6]
                tracking-[-1px]
                text-slate-600
                font-medium
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              “The studio moves fast,
              <span className="text-[#0F172A] font-black">
                {" "}
                but the principles come from here.”
              </span>
            </p>
          </motion.div>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-7 mt-20">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="group relative"
            >
              {/* GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[34px]
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                  bg-gradient-to-br
                  from-[#6288B9]/15
                  via-transparent
                  to-[#A4B8D2]/15
                  blur-2xl
                "
              />

              {/* CARD */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-white/60
                  bg-white/50
                  backdrop-blur-[18px]
                  p-6
                  shadow-[0_10px_40px_rgba(15,23,42,0.05)]
                "
              >
                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-700
                    bg-gradient-to-br
                    from-[#6288B9]/5
                    via-transparent
                    to-[#A4B8D2]/10
                  "
                />

                <div className="relative z-10">
                  {/* TOP */}
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-[#6288B9]/10
                        bg-[#F8FAFC]
                        text-[11px]
                        uppercase
                        tracking-[0.18em]
                        font-semibold
                        text-[#6288B9]
                      "
                    >
                      DTS • Leadership
                    </div>

                    <div className="w-2.5 h-2.5 rounded-full bg-[#6288B9]" />
                  </div>

                  {/* IMAGE */}
                  <div
                    className="
                      mt-7
                      w-full
                      aspect-[4/5]
                      rounded-[24px]
                      overflow-hidden
                      bg-[#EEF4FF]
                    "
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        object-top
                        transition-all
                        duration-700
                        group-hover:scale-[1.03]
                      "
                    />
                  </div>

                  {/* ROLE */}
                  <p className="mt-6 text-[12px] uppercase tracking-[0.18em] text-[#6288B9] font-semibold">
                    {leader.role}
                  </p>

                  {/* NAME */}
                  <h3
                    className="
                      mt-3
                      text-[30px]
                      leading-[1]
                      tracking-[-2px]
                      font-black
                      text-[#0F172A]
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    {leader.name}
                  </h3>

                  {/* DESC */}
                  <p className="mt-5 text-[15px] leading-[2] text-slate-500">
                    {leader.desc}
                  </p>

                  {/* LINE */}
                  <div
                    className="
                      mt-8
                      h-[1px]
                      w-full
                      bg-gradient-to-r
                      from-[#6288B9]/20
                      via-transparent
                      to-transparent
                    "
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}