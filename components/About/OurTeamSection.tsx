"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
   {
    name: "Ravish Verma",
    role: "SME — SEO",
    image: "/Ravish.jpg.jpeg",
    linkedin: "https://www.linkedin.com/in/ravish-kumar02/",
  },
  {
    name: "Nandini Yadav",
    role: "Web Developer",
    image: "/Nandini.jpeg",
    linkedin: "https://www.linkedin.com/in/nandini-yadav-xx/",
  },
  {
    name: "Ritika Tiwari",
    role: "Web Developer",
    image: "/Ritika.jpeg",
    linkedin: "https://www.linkedin.com/in/ritika-tiwari-224030366/",
  },
  {
    name: "Simran Salagre",
    role: "Head — PR & Communication",
    image: "/Simran.webp",
    linkedin: "https://www.linkedin.com/in/simran-salagre-863b58266/",
  },

  {
    name: "Naman Gupta",
    role: "Video Editor",
    image: "/Naman.webp",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Amitesh Singh",
    role: "AI Visual Content Creator",
    image: "/Amitesh.jpeg",
    linkedin: "https://www.linkedin.com/",
  },
];

export default function OurTeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-[90px]">
      <div className="absolute top-[-180px] left-[10%] h-[480px] w-[480px] rounded-full bg-[#6288B9]/15 blur-3xl" />
      <div className="absolute bottom-[-200px] right-[8%] h-[520px] w-[520px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      <div
        className="
          absolute inset-0 opacity-[0.035]
          [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-5 inline-flex rounded-full border border-[#0D2444]/10 bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#0D2444] shadow-sm">
            Our Team
          </span>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0D2444] md:text-6xl">
            The People Behind The Experience
          </h2>

          <p className="mt-6 text-base leading-8 text-[#4B5F7A] md:text-lg">
            A focused team of creative, strategic and execution-driven
            professionals powering every brand experience, event and campaign
            delivered by Double Trouble Studio.
          </p>
        </motion.div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="
                group relative overflow-hidden rounded-[32px]
                border border-[#0D2444]/10 bg-white
                shadow-[0_20px_60px_rgba(13,36,68,0.08)]
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(13,36,68,0.14)]
              "
            >
              {/* Image Frame */}
              <div className="relative h-[460px] w-full overflow-hidden bg-gradient-to-br from-[#EAF0F7] via-white to-[#DDE8F5]">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role} at Double Trouble Studio`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="
                    object-contain object-center p-4
                    transition-transform duration-700
                    group-hover:scale-[1.03]
                  "
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2444]/55 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/15 text-sm font-semibold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="relative p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#0D2444]">
                  {member.name}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-[#6288B9]">
                  {member.role}
                </p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${member.name}'s LinkedIn profile`}
                  className="
                    mt-6 inline-flex items-center justify-center rounded-full
                    border border-[#0D2444]/10 bg-[#0D2444]
                    px-5 py-3 text-xs font-bold uppercase tracking-[0.18em]
                    text-white transition-all duration-300
                    hover:bg-[#16365F] hover:shadow-[0_14px_35px_rgba(13,36,68,0.22)]
                  "
                >
                  View LinkedIn
                </a>
              </div>

              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#0D2444] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}