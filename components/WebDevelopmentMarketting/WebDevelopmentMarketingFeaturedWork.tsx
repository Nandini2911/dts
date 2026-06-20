"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function WebDevelopmentMarketingFeaturedWork() {
  const projects = [
    {
      image: "/shruti.png",
      title: "Business Website Development",
      desc: "Designed and developed a modern, responsive business website with strong brand presentation, fast loading pages and clear conversion flow.",
      link: "https://www.shrutichadha.com/",
    },
    {
      image: "/ap.png",
      title: "E-Commerce Website Experience",
      desc: "Built a product-focused online store with smooth navigation, mobile-first design, product discovery and conversion-ready user journeys.",
      link: "https://apworld.in/",
    },
    {
      image: "/rnk.png",
      title: "SEO Growth System",
      desc: "Created an SEO strategy with keyword planning, technical optimization, on-page content structure and search-friendly website architecture.",
      link: "https://www.rnk.com/",
    },
    {
      image: "/xiimba.png",
      title: "Performance Marketing Campaign",
      desc: "Planned and executed digital ad campaigns with audience targeting, landing page direction, creative testing and lead generation strategy.",
      link: "https://www.xiimba.com/",
    },
    {
      image: "/poetry.png",
      title: "Brand Website Revamp",
      desc: "Transformed an outdated website into a premium digital experience with improved visuals, better content hierarchy and stronger brand trust.",
      link: "https://www.poetrydubai.com/",
    },
    {
      image: "/afterr.png",
      title: "Digital Launch Campaign",
      desc: "Executed a complete online launch with website readiness, social media rollout, paid ads, SEO basics and digital communication planning.",
      link: "https://www.afterrmatch.com/",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-16 md:py-24">
      {/* Background glow */}
      <div className="absolute left-[-180px] top-[-160px] h-[440px] w-[440px] rounded-full bg-[#6288B9]/18 blur-3xl" />
      <div className="absolute right-[-220px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: [0.92, 1.04, 1] }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-[950px] text-center"
        >
          <span className="inline-flex rounded-full border border-white/15 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl">
            Featured Work
          </span>

          <h2
            className="mx-auto mt-6 max-w-[1050px] text-[38px] font-semibold leading-[1] tracking-[-0.055em] sm:text-[54px] md:text-[70px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            <span className="bg-gradient-to-r from-[#06172D] via-[#0D2444] to-[#315E91] bg-clip-text text-transparent">
              Web Development
            </span>{" "}
            <span className="bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              In Action
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[790px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[18px]">
            Real digital growth scenarios where website development, SEO,
            performance marketing, content strategy and user experience come
            together to build stronger online presence and business results.
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
              className={`group relative overflow-hidden rounded-[30px] border p-5 shadow-[0_24px_70px_rgba(13,36,68,0.10)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_95px_rgba(13,36,68,0.22)] ${
                index === 1
                  ? "border-[#6288B9]/45 bg-gradient-to-br from-white via-[#EAF3FC] to-[#BFD4EC]"
                  : "border-[#0D2444]/10 bg-gradient-to-br from-white via-[#F4F9FF] to-[#D9E8F7] hover:border-[#6288B9]/55"
              }`}
            >
              {/* Dark hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D2444] via-[#16365F] to-[#6288B9] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Soft shine */}
              <div className="absolute left-0 top-0 h-[160px] w-[160px] rounded-full bg-white/70 blur-3xl transition-opacity duration-500 group-hover:opacity-0" />

              {/* Image */}
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 block h-[300px] overflow-hidden rounded-[22px] bg-[#0D2444] shadow-[0_18px_45px_rgba(13,36,68,0.18)]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2444]/60 via-transparent to-transparent" />
              </Link>

              {/* Text */}
              <div className="relative z-10 px-1 pb-3 pt-7">
                <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#315E91] transition-colors duration-500 group-hover:text-[#BFD7F2]">
                  Web Development & Digital Marketing
                </p>

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <h3 className="mt-5 text-[25px] font-bold leading-[1.15] tracking-[-0.04em] text-[#0D2444] transition-colors duration-500 group-hover:text-white md:text-[28px]">
                    {project.title}
                  </h3>
                </Link>

                <p className="mt-5 text-[15px] font-medium leading-[1.65] text-[#203B5C]/75 transition-colors duration-500 group-hover:text-white/72 md:text-[16px]">
                  {project.desc}
                </p>

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#0D2444]/15 bg-white/85 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0D2444] shadow-sm transition-all duration-500 hover:bg-[#0D2444] hover:text-white group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white"
                >
                  Visit Website
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              {/* Bottom shine */}
              <div className="absolute inset-x-8 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-[#6288B9]/70 to-transparent opacity-80 transition-opacity duration-500 group-hover:via-white/60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}