"use client";

import { motion } from "framer-motion";

const websiteReasons = [
  {
    title: "Clear Website Structure",
    text: "A well-planned website starts with clear page architecture, service hierarchy and navigation so visitors can quickly understand your business and move through the website naturally.",
  },
  {
    title: "Better User Experience",
    text: "Thoughtful UI/UX planning improves how visitors interact with your website across pages, devices and different stages of their journey.",
  },
  {
    title: "Responsive Across Devices",
    text: "The website is planned to work smoothly across desktop, tablet and mobile so the experience stays consistent regardless of screen size.",
  },
  {
    title: "Stronger Performance",
    text: "Development decisions around structure, assets, interactions and functionality help create a faster, smoother and more reliable website experience.",
  },
  {
    title: "Easier Website Management",
    text: "A properly structured website is easier to update, manage and expand when you need new pages, content changes, service updates or additional functionality.",
  },
  {
    title: "Long-Term Reliability",
    text: "Planning development and management together makes it easier to maintain the website, resolve technical issues and keep it current as the business evolves.",
  },
];

export default function WhySEOStartsDuringDevelopment() {
  return (
    <section className="relative overflow-hidden bg-[#F7FBFF] px-6 py-28 md:px-12 lg:px-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFFFFF_0%,#EEF7FF_45%,#FFFFFF_100%)]" />

      <div className="absolute left-[-180px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[#BFD5EF]/45 blur-[130px]" />

      <div className="absolute bottom-[-160px] right-[-180px] h-[560px] w-[560px] rounded-full bg-[#6288B9]/18 blur-[150px]" />

      {/* Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Large Background Text */}
      <div className="pointer-events-none absolute left-1/2 top-28 -translate-x-1/2 whitespace-nowrap font-serif text-[80px] font-bold leading-none text-[#0D2444]/[0.035] md:text-[150px] lg:text-[210px]">
        BUILT RIGHT
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
            Website Development + Management
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
              Why Website Management Should Start With Development
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600"
          >
            A website works better when development and long-term management are
            considered together — from structure and responsive design to
            updates, performance and ongoing technical support.
          </motion.p>
        </div>

        {/* Blueprint Architecture Layout */}
        <div className="mt-24 rounded-[44px] border border-[#D7E6F8] bg-white/60 p-5 shadow-2xl shadow-[#0D2444]/8 backdrop-blur-2xl md:p-8">
          {/* Browser Top Bar */}
          <div className="mb-8 flex items-center justify-between rounded-[28px] border border-[#D7E6F8] bg-[#F8FBFF] px-5 py-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#0D2444]/25" />
              <span className="h-3 w-3 rounded-full bg-[#6288B9]/35" />
              <span className="h-3 w-3 rounded-full bg-[#BFD5EF]" />
            </div>

            <p className="hidden text-sm font-semibold text-slate-500 md:block">
              website-development / website-management / long-term-support
            </p>

            <span className="text-sm font-bold text-[#0D2444]">DTS</span>
          </div>

          {/* Main Blueprint */}
          <div className="grid gap-10 lg:grid-cols-[0.38fr_1fr]">
            {/* Left Blueprint Statement */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85 }}
              viewport={{ once: true }}
              className="relative flex flex-col justify-between overflow-hidden rounded-[34px] bg-gradient-to-br from-[#0D2444] via-[#244D7A] to-[#6288B9] p-8 text-white"
            >
              <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:42px_42px]" />

              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
                  Website Foundation
                </p>

                <h3 className="mt-6 font-serif text-5xl font-bold leading-tight md:text-6xl">
                  Build for launch. Plan for what comes after.
                </h3>
              </div>

              <div className="relative mt-12">
                <div className="mb-6 h-px w-full bg-white/25" />

                <p className="text-lg leading-8 text-white/75">
                  The strongest websites are not treated as one-time projects.
                  They are built with clear structure, scalable development and
                  future updates, maintenance and business changes in mind.
                </p>
              </div>
            </motion.div>

            {/* Right Architecture Lines */}
            <div className="relative">
              <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#0D2444] via-[#BFD5EF] to-transparent md:block" />

              <div className="space-y-5">
                {websiteReasons.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.65, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="grid gap-5 rounded-[28px] border border-transparent py-5 transition duration-500 hover:border-[#D7E6F8] hover:bg-white/75 hover:px-5 hover:shadow-xl hover:shadow-[#0D2444]/6 md:grid-cols-[72px_1fr] md:items-start">
                      {/* Node */}
                      <div className="relative z-10 flex items-center gap-4">
                        <span className="hidden h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-bold text-[#0D2444] shadow-lg shadow-[#0D2444]/8 ring-1 ring-[#D7E6F8] transition duration-500 group-hover:bg-[#0D2444] group-hover:text-white md:flex">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px w-10 bg-gradient-to-r from-[#6288B9] to-transparent md:hidden" />
                      </div>

                      {/* Content */}
                      <div className="border-b border-[#D7E6F8] pb-6">
                        <div className="mb-3 flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-[#6288B9]" />

                          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6288B9]">
                            Website Layer
                          </p>
                        </div>

                        <h4 className="font-serif text-3xl font-bold leading-tight text-[#0D2444] transition duration-500 group-hover:text-[#244D7A] md:text-4xl">
                          {item.title}
                        </h4>

                        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-5xl text-center"
        >
          <div className="mx-auto mb-8 h-px max-w-2xl bg-gradient-to-r from-transparent via-[#6288B9] to-transparent" />

          <p className="font-serif text-3xl font-bold leading-tight md:text-3xl">
            <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
              A website built for long-term management is easier to update,
              easier to maintain and better prepared to grow with your business.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}