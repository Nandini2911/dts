"use client";

import { motion } from "framer-motion";

type PRService = {
  title: string;
  description: string;
  label: string;
};

const prServices: PRService[] = [
  {
    title: "Public Relations Strategy",
    label: "Strategy",
    description:
      "We create PR strategies that align with your brand goals, audience, industry, campaign stage and communication requirement, including messaging, media positioning, story angles and campaign planning.",
  },
  {
    title: "Media Relations",
    label: "Media",
    description:
      "We coordinate with journalists, editors, publications, media houses, digital portals and news platforms to help brands build relevant media visibility.",
  },
  {
    title: "Press Release Writing & Distribution",
    label: "Press",
    description:
      "We write and distribute press releases for launches, events, announcements, collaborations, milestones, achievements, campaigns and brand updates.",
  },
  {
    title: "Brand Storytelling",
    label: "Story",
    description:
      "We help brands develop strong narratives that communicate their journey, purpose, values, achievements and positioning in a media-friendly way.",
  },
  {
    title: "Corporate PR",
    label: "Corporate",
    description:
      "We support companies with corporate communication, leadership visibility, milestone announcements, reputation building, media outreach and stakeholder communication.",
  },
  {
    title: "Startup PR",
    label: "Startup",
    description:
      "We help startups build early visibility through founder stories, launch announcements, funding updates, product communication and category positioning.",
  },
  {
    title: "Celebrity & Public Figure PR",
    label: "Image",
    description:
      "We manage public communication, media visibility, announcements, interviews, event coverage and digital positioning for public personalities and talent-led campaigns.",
  },
  {
    title: "Event PR",
    label: "Event",
    description:
      "We manage pre-event buzz, media invites, press coverage, influencer attendance, post-event stories, launch communication and event visibility.",
  },
  {
    title: "Crisis Communication Support",
    label: "Crisis",
    description:
      "We assist brands with careful messaging, communication planning and reputation-sensitive situations where clarity and timing are important.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function PRServices() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-[#050B14] px-6 py-24 text-white"
    >
      {/* Background — same */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(98,136,185,0.22),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,36,68,0.9),rgba(5,11,20,1)_48%,rgba(98,136,185,0.14))]" />

      {/* Grid Texture — same */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.14 }}
          className="mx-auto mb-20 max-w-5xl text-center"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#9DB8DA]"
          >
            Public Relations Services
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-4xl font-black leading-tight tracking-tight md:text-6xl"
          >
            PR Built Like A Brand Communication Control Room
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65 md:text-lg"
          >
            Every PR campaign needs strategy, media timing, message clarity,
            story angles, reputation control and visibility planning working
            together.
          </motion.p>
        </motion.div>

        {/* Proper Aligned Zig-Zag Timeline */}
        <div className="relative mx-auto max-w-6xl">
          {/* Mobile Line */}
          <div className="absolute left-7 top-0 h-full w-px bg-white/10 md:hidden" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-7 top-0 h-full w-px origin-top bg-gradient-to-b from-[#9DB8DA] via-[#6288B9] to-transparent md:hidden"
          />

          {/* Desktop Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute left-1/2 top-0 hidden h-full w-px origin-top -translate-x-1/2 bg-gradient-to-b from-[#9DB8DA] via-[#6288B9] to-transparent md:block"
          />

          <div className="space-y-12">
            {prServices.map((service, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={service.title}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -36 : 36,
                    y: 20,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    duration: 0.68,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  className="relative md:grid md:grid-cols-[1fr_96px_1fr] md:items-center"
                >
                  {/* Mobile Node */}
                  <div className="absolute left-0 top-5 z-20 md:hidden">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#06111F] text-sm font-black text-[#9DB8DA] shadow-[0_0_45px_rgba(98,136,185,0.25)] backdrop-blur-xl">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Left Column */}
                  <div
                    className={`${
                      isLeft ? "md:col-start-1" : "md:col-start-3"
                    } pl-20 md:pl-0`}
                  >
                    <motion.article
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25 }}
                      className={`group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.065] p-6 backdrop-blur-xl transition duration-500 hover:border-[#9DB8DA]/45 hover:bg-white/[0.105] ${
                        isLeft ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9DB8DA]/70 to-transparent" />
                      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#6288B9]/0 blur-3xl transition duration-500 group-hover:bg-[#6288B9]/24" />

                      <div
                        className={`relative mb-5 flex flex-wrap items-center gap-3 ${
                          isLeft ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9DB8DA]">
                          {service.label}
                        </span>

                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/30">
                          PR Layer {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="relative text-2xl font-black leading-tight text-white md:text-3xl">
                        {service.title}
                      </h3>

                      <p className="relative mt-4 text-sm leading-7 text-white/62 md:text-base">
                        {service.description}
                      </p>

                      <div
                        className={`relative mt-7 flex items-center gap-4 ${
                          isLeft ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="h-px flex-1 bg-gradient-to-r from-[#9DB8DA]/60 to-transparent" />
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/32 transition duration-500 group-hover:text-[#9DB8DA]">
                          Communication
                        </p>
                      </div>
                    </motion.article>
                  </div>

                  {/* Desktop Center Node */}
                  <div className="relative z-20 hidden justify-center md:col-start-2 md:flex">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-[#06111F] text-sm font-black text-[#9DB8DA] shadow-[0_0_45px_rgba(98,136,185,0.25)] backdrop-blur-xl transition duration-500 hover:bg-white hover:text-[#0D2444]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.div>
                  </div>

                  {/* Desktop Empty Connector Side */}
                  <div
                    className={`hidden md:row-start-1 md:block ${
                      isLeft ? "md:col-start-3" : "md:col-start-1"
                    }`}
                  >
                    <div
                      className={`h-px w-full ${
                        isLeft
                          ? "bg-gradient-to-r from-[#9DB8DA]/35 to-transparent"
                          : "bg-gradient-to-l from-[#9DB8DA]/35 to-transparent"
                      }`}
                    />
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