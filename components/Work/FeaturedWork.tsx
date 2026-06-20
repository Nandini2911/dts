"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Sparkles } from "lucide-react";

const projects = [
  {
    industry: "Luxury Automotive Brand",
    title: "RNK Rentals",
    services: "Website Design • SEO • Social Media Marketing",
    description:
      "A premium digital transformation for RNK Rentals focused on luxury website design, SEO optimization and strategic social media management designed to strengthen digital visibility and customer perception.",
    impact: "Built for stronger online authority and premium positioning.",
    image: "/rnk.png",
    link: "https://www.rnk.com/",
  },

  {
    industry: "Luxury Event & Sports Experience",
    title: "All India Police Golf Tournament",
    services: "Event Branding • Creative Support • Digital Assets",
    description:
      "Creative support and premium event branding designed for the prestigious All India Police Golf Tournament, focused on elevated visuals and modern event presentation.",
    impact: "Designed to create a refined and memorable event experience.",
    image: "/abouthero.jpg",
    link: "/work",
  },

  {
    industry: "Media & Broadcasting",
    title: "India Today",
    services: "Video Editing • Creative Production",
    description:
      "High-impact video editing and premium creative assets developed for India Today to enhance digital storytelling and audience engagement across media platforms.",
    impact: "Cinematic editing crafted for modern digital audiences.",
    image: "/india today.png",
    link: "https://www.instagram.com/indiatoday/",
  },

  {
    industry: "Personal Brand & Business",
    title: "Shruti Chadha",
    services: "Website Design • SEO Optimization",
    description:
      "Custom website design and SEO strategy created to improve online visibility, strengthen digital presence and elevate brand positioning.",
    impact: "Built for long-term visibility and organic growth.",
    image: "/shruti.png",
    link: "https://www.shrutichadha.com/",
  },

  {
    industry: "Food & Hospitality Brand",
    title: "Brownie Point",
    services: "Social Media Management • Content Strategy",
    description:
      "Social media management and content direction focused on creating stronger engagement, aesthetic consistency and modern digital brand presence.",
    impact: "Crafted to improve audience interaction and brand recall.",
    image: "/brownie.jpeg",
    link: "https://www.instagram.com/browniepointindia/?hl=en",
  },

  {
    industry: "AI Creative Campaign",
    title: "Bharat Reshma",
    services: "AI Video • Visual Storytelling • VFX",
    description:
      "AI-generated cinematic visuals and modern storytelling campaigns developed to create high-impact digital content and premium audience engagement.",
    impact: "Built for visually immersive digital campaigns.",
    image: "/bharat reshma.jpg",
    link: "https://www.instagram.com/bharat_reshma/?hl=en",
  },

  {
    industry: "Digital Platform",
    title: "Xiimba.com",
    services: "Website Design • Development",
    description:
      "Modern website experience designed with clean UI, responsive systems and performance-focused digital architecture for stronger user engagement.",
    impact: "Designed for clarity, usability and modern brand perception.",
    image: "/xiimba.png",
    link: "https://www.xiimba.com/",
  },

  {
    industry: "Beauty & E-commerce Platform",
    title: "AllPeople",
    services: "Website Design • Product Experience",
    description:
      "E-commerce-focused website experience developed for skincare and beauty products including shampoos, face mists and self-care essentials.",
    impact: "Built to improve product discovery and customer experience.",
    image: "/ap.png",
    link: "https://apworld.in/",
  },

  {
    industry: "Restaurant & Food Brand",
    title: "Butter Chicken",
    services: "Social Media Marketing • Content Creation",
    description:
      "Social media campaigns and content strategy designed to increase restaurant visibility, customer engagement and modern food brand perception.",
    impact: "Crafted for stronger local digital presence.",
    image: "/bcf.jpeg",
    link: "https://www.instagram.com/butterchickenfactory/?hl=en",
  },

  {
    industry: "Luxury Wedding Planning Brand",
    title: "Vow Story",
    services: "Branding • Social Media • Creative Direction",
    description:
      "Creative storytelling and social media direction developed for a modern wedding planning brand focused on luxury experiences and emotional visual identity.",
    impact: "Designed to create timeless wedding brand perception.",
    image: "/vowstory.jpeg",
    link: "https://www.instagram.com/vowstory.co/",
  },
];

export default function FeaturedWork() {
  return (
    <section className="relative overflow-hidden bg-[#f7fafc] py-[60px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#eef3f9] via-[#f7fafc] to-white" />

        <div className="absolute top-[10%] left-[5%] h-[320px] w-[320px] rounded-full bg-[#6288B9]/10 blur-3xl" />

        <div className="absolute right-[0%] bottom-[0%] h-[280px] w-[280px] rounded-full bg-[#0D2444]/5 blur-3xl" />

        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* TOP */}
        <div className="max-w-[900px]">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#6288B9]/20
              bg-white/70
              px-5
              py-2.5
              shadow-[0_8px_30px_rgba(15,23,42,0.05)]
              backdrop-blur-xl
            "
          >
            <Sparkles className="h-4 w-4 text-[#456A9E]" />

            <span
              className="
                text-[11px]
                font-semibold
                tracking-[2px]
                text-[#456A9E]
                uppercase
                sm:text-[12px]
              "
            >
              Selected Work
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              mt-7
              text-[38px]
              leading-[1.05]
              font-bold
              tracking-[-2px]
              text-[#0D2444]
              sm:text-[52px]
              md:text-[68px]
            "
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            Featured
            <span
              className="
                ml-4
                bg-gradient-to-r
                from-[#0D2444]
                via-[#456A9E]
                to-[#6288B9]
                bg-clip-text
                text-transparent
              "
            >
              Work
            </span>
          </motion.h2>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              mt-6
              max-w-[760px]
              text-[16px]
              leading-[1.9]
              text-[#5B6472]
              sm:text-[18px]
            "
          >
            A curated collection of premium digital experiences, branding
            systems and modern marketing campaigns designed for ambitious
            brands.
          </motion.p>
        </div>

        {/* WORK GRID */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isExternal = project.link.startsWith("http");

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-white/20
                    bg-white/70
                    shadow-[0_20px_70px_rgba(15,23,42,0.06)]
                    backdrop-blur-2xl
                    transition-all
                    duration-700
                    hover:-translate-y-2
                    hover:shadow-[0_30px_90px_rgba(15,23,42,0.12)]
                  "
                >
                  {/* IMAGE */}
                  <Link
                    href={project.link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="relative block h-[340px] overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/20
                        to-transparent
                      "
                    />

                    {/* INDUSTRY */}
                    <div
                      className="
                        absolute
                        top-5
                        left-5
                        rounded-full
                        border
                        border-white/20
                        bg-black/30
                        px-4
                        py-2
                        text-[11px]
                        font-semibold
                        tracking-[2px]
                        text-white
                        uppercase
                        backdrop-blur-md
                      "
                    >
                      {project.industry}
                    </div>

                    {/* ICON */}
                    <div
                      className="
                        absolute
                        top-5
                        right-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-white/10
                        text-white
                        backdrop-blur-md
                        transition-all
                        duration-500
                        group-hover:rotate-12
                        group-hover:bg-white
                        group-hover:text-[#0D2444]
                      "
                    >
                      <ArrowUpRight size={20} />
                    </div>

                    {/* TITLE */}
                    <div className="absolute right-6 bottom-6 left-6">
                      <h3
                        className="
                          text-[34px]
                          leading-[1.05]
                          font-bold
                          text-white
                        "
                        style={{
                          fontFamily:
                            'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                        }}
                      >
                        {project.title}
                      </h3>

                      <p className="mt-3 text-[13px] tracking-[1px] text-white/75 uppercase">
                        {project.services}
                      </p>
                    </div>
                  </Link>

                  {/* CONTENT */}
                  <div className="p-8">
                    {/* DESCRIPTION */}
                    <p
                      className="
                        text-[15px]
                        leading-[1.9]
                        text-[#5B6472]
                      "
                    >
                      {project.description}
                    </p>

                    {/* IMPACT */}
                    <div
                      className="
                        mt-7
                        rounded-[24px]
                        border
                        border-[#6288B9]/10
                        bg-gradient-to-r
                        from-[#0D2444]
                        to-[#1D3A66]
                        p-5
                      "
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-white/10
                            text-white
                          "
                        >
                          <Globe size={18} />
                        </div>

                        <div>
                          <p className="text-[11px] font-semibold tracking-[2px] text-white/50 uppercase">
                            Impact
                          </p>

                          <p className="mt-2 text-[14px] leading-[1.8] text-white/90">
                            {project.impact}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FOOTER */}
                    <div className="mt-7 flex items-center justify-between gap-5">
                      <div className="flex flex-wrap gap-2">
                        <div
                          className="
                            rounded-full
                            bg-[#0D2444]/5
                            px-4
                            py-2
                            text-[12px]
                            font-medium
                            text-[#0D2444]
                          "
                        >
                          Premium Strategy
                        </div>

                        <div
                          className="
                            rounded-full
                            bg-[#0D2444]/5
                            px-4
                            py-2
                            text-[12px]
                            font-medium
                            text-[#0D2444]
                          "
                        >
                          Creative Direction
                        </div>
                      </div>

                      <Link
                        href={project.link}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="
                          flex
                          shrink-0
                          items-center
                          gap-2
                          text-[14px]
                          font-semibold
                          text-[#0D2444]
                          transition-all
                          duration-300
                          group-hover:gap-3
                        "
                      >
                        View Project
                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}