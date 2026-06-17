"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Business Discovery",
    text: "We understand your business, services, target audience, competitors, locations, goals, current website and digital marketing requirements.",
  },
  {
    title: "Website Structure Planning",
    text: "We plan the page structure, service hierarchy, navigation, user journey, content sections, CTAs and internal linking strategy.",
  },
  {
    title: "UI/UX & Design Direction",
    text: "We create a design direction based on your brand identity, audience expectations, industry style and conversion goals.",
  },
  {
    title: "Content & SEO Planning",
    text: "We plan keywords, headings, service content, FAQs, metadata, location sections and SEO-friendly page structure.",
  },
  {
    title: "Website Development",
    text: "We build the website with responsive layouts, clean sections, forms, integrations, speed considerations and mobile-friendly design.",
  },
  {
    title: "On-Page SEO Setup",
    text: "We optimize titles, meta descriptions, headings, URLs, internal links, image alt text, sitemap recommendations and schema requirements.",
  },
  {
    title: "Testing & Launch",
    text: "We test the website for responsiveness, forms, page flow, links, speed, content errors and basic technical readiness before launch.",
  },
  {
    title: "Digital Marketing Execution",
    text: "After launch, we support the website with SEO, social media marketing, paid ads, content marketing and lead-generation campaigns.",
  },
  {
    title: "Reporting & Optimization",
    text: "We review performance, traffic, inquiries, rankings, ad results and user behavior to improve future campaigns and website performance.",
  },
];

const offsets = [
  "lg:mt-0",
  "lg:mt-20",
  "lg:mt-0",
  "lg:mt-10",
  "lg:mt-28",
  "lg:mt-10",
  "lg:mt-0",
  "lg:mt-20",
  "lg:mt-0",
];

export default function WebDevelopmentMarketingProcess() {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] px-6 py-28 md:px-12 lg:px-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFFFFF_0%,#EEF7FF_48%,#FFFFFF_100%)]" />
      <div className="absolute -left-44 top-24 h-[460px] w-[460px] rounded-full bg-[#BFD5EF]/45 blur-[130px]" />
      <div className="absolute -right-44 bottom-20 h-[520px] w-[520px] rounded-full bg-[#6288B9]/15 blur-[150px]" />

      {/* Big Background Word */}
      <div className="pointer-events-none absolute left-1/2 top-28 -translate-x-1/2 whitespace-nowrap font-serif text-[80px] font-bold leading-none text-[#0D2444]/[0.035] md:text-[150px] lg:text-[210px]">
        PROCESS
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Center Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full bg-gradient-to-r from-[#0D2444] via-[#244D7A] to-[#6288B9] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#0D2444]/20"
          >
            Our Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
              Our Web Development & Marketing Process
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600"
          >
            From business discovery to website launch and digital marketing
            execution, every step is planned to create a stronger online
            presence and better conversion flow.
          </motion.p>
        </div>

        {/* Roadmap Area */}
        <div className="relative mt-24">
          {/* Desktop Curved Road Line */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 1200 980"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M95 85 C310 30 390 190 565 120 C745 48 835 110 1070 70 
                 M1080 290 C820 350 720 230 580 325 C430 430 285 260 110 360
                 M105 595 C300 520 430 670 585 590 C760 500 855 640 1085 555
                 M1100 820 C850 900 735 760 590 845 C420 945 290 765 110 875"
              stroke="url(#processGradient)"
              strokeWidth="2"
              strokeDasharray="12 14"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
              viewport={{ once: true }}
            />

            <defs>
              <linearGradient
                id="processGradient"
                x1="0"
                y1="0"
                x2="1200"
                y2="980"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0D2444" stopOpacity="0.25" />
                <stop offset="0.5" stopColor="#6288B9" stopOpacity="0.55" />
                <stop offset="1" stopColor="#0D2444" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Process Nodes */}
          <div className="relative grid gap-x-10 gap-y-12 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
                viewport={{ once: true }}
                className={`${offsets[index]} group relative`}
              >
                <div className="relative overflow-hidden rounded-[34px] border border-[#D7E6F8] bg-white/75 p-6 shadow-xl shadow-[#0D2444]/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#6288B9]/45 hover:bg-white hover:shadow-2xl hover:shadow-[#0D2444]/12 md:p-7">
                  {/* Top Glow */}
                  <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#DCEBFF] blur-3xl transition duration-500 group-hover:bg-[#BFD5EF]" />

                  <div className="relative">
                    <div className="mb-7 flex items-center justify-between">
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: 4 }}
                        transition={{ duration: 0.3 }}
                        className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#0D2444] via-[#244D7A] to-[#6288B9] text-lg font-bold text-white shadow-xl shadow-[#0D2444]/20"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.div>

                      <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#6288B9]">
                        Step
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl font-bold leading-tight text-[#0D2444] md:text-4xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {step.text}
                    </p>

                    <div className="mt-7 flex items-center gap-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-[#6288B9]/60 via-[#D7E6F8] to-transparent" />

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF7FF] text-[#0D2444] transition duration-500 group-hover:bg-[#0D2444] group-hover:text-white">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Clean Process Strip */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-full border border-[#D7E6F8] bg-white/75 px-5 py-4 shadow-xl shadow-[#0D2444]/5 backdrop-blur-xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            {["Discover", "Plan", "Design", "Develop", "Optimize", "Launch", "Grow"].map(
              (item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="rounded-full bg-[#EEF7FF] px-5 py-2 text-sm font-bold text-[#0D2444]">
                    {item}
                  </span>

                  {index !== 6 && (
                    <span className="hidden h-px w-8 bg-gradient-to-r from-[#6288B9] to-transparent sm:block" />
                  )}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}