"use client";

import { motion } from "framer-motion";

type UseCase = {
  title: string;
  category: string;
  text: string;
};

const useCases: UseCase[] = [
  {
    title: "New Business Website",
    category: "Launch",
    text: "Complete website planning, UI/UX design, responsive development, content setup and launch support for businesses building their digital presence.",
  },
  {
    title: "Website Redesign",
    category: "Upgrade",
    text: "Transform an outdated website with improved layouts, clearer navigation, stronger content structure, responsive design and modern functionality.",
  },
  {
    title: "Service Business Website",
    category: "Business",
    text: "Structured websites for service businesses with clear service pages, inquiry forms, calls to action, trust sections and easy customer journeys.",
  },
  {
    title: "Hospitality & Restaurant Website",
    category: "Hospitality",
    text: "Responsive websites for restaurants, cafés, hotels and hospitality brands with menus, galleries, booking flows, location details and contact journeys.",
  },
  {
    title: "Corporate Website",
    category: "Credibility",
    text: "Professional websites for companies that require service pages, leadership profiles, industry sections, case studies and a stronger corporate presence.",
  },
  {
    title: "Ecommerce Website",
    category: "Commerce",
    text: "Online stores with product categories, product pages, shopping journeys, checkout integration and responsive experiences across every device.",
  },
  {
    title: "Website Management",
    category: "Ongoing Support",
    text: "Ongoing management for content updates, page changes, new sections, CMS support, form updates and regular website improvements.",
  },
  {
    title: "Website Maintenance",
    category: "Reliability",
    text: "Technical maintenance, functionality checks, troubleshooting and ongoing support to help keep your website stable, current and dependable.",
  },
];

const desktopPositions = [
  "xl:left-0 xl:top-[70px] xl:text-right",
  "xl:right-0 xl:top-[70px]",
  "xl:left-[70px] xl:top-[300px] xl:text-right",
  "xl:right-[70px] xl:top-[300px]",
  "xl:left-0 xl:top-[535px] xl:text-right",
  "xl:right-0 xl:top-[535px]",
  "xl:left-[150px] xl:top-[735px] xl:text-right",
  "xl:right-[150px] xl:top-[735px]",
];

export default function UseCasesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FBFF] px-5 py-24 md:px-10 lg:px-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[#E2EFFF] blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-[520px] w-[520px] rounded-full bg-[#EFF7FF] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-[#DCEBFF] blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),transparent_55%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Center Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#D6E5F5] bg-white/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#244D7A] backdrop-blur">
            Website Use Cases
          </span>

          <h2 className="mx-auto mt-7 bg-gradient-to-r from-[#071A31] via-[#244D7A] to-[#8FB4E3] bg-clip-text font-serif text-4xl font-bold leading-tight tracking-tight text-transparent md:text-5xl">
            Website solutions shaped around your business needs
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            DTS designs, develops and manages websites for businesses at
            different stages — from new launches and redesigns to ecommerce,
            corporate platforms and ongoing website management.
          </p>
        </motion.div>

        {/* Desktop Orbit Design */}
        <div className="relative mx-auto mt-20 hidden min-h-[940px] max-w-7xl xl:block">
          {/* Orbit Lines */}
          <div className="absolute left-1/2 top-[455px] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D6E5F5]" />

          <div className="absolute left-1/2 top-[455px] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E3EEF9]" />

          <div className="absolute left-1/2 top-[455px] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#EEF5FC]" />

          {/* Center Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-[455px] flex h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-white via-[#F7FBFF] to-[#E6F2FF] shadow-[0_35px_120px_rgba(7,26,49,0.13)]"
          >
            <div className="absolute inset-5 rounded-full border border-[#D7E6F7]" />
            <div className="absolute inset-10 rounded-full border border-white" />

            <div className="relative px-8 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#6288B9]">
                DTS Website System
              </p>

              <h3 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#071A31]">
                Plan.
                <br />
                Build.
                <br />
                Manage.
              </h3>

              <p className="mx-auto mt-5 max-w-[220px] text-sm leading-6 text-slate-600">
                A complete website lifecycle built around usability,
                performance and long-term reliability.
              </p>
            </div>
          </motion.div>

          {/* Use Case Orbit Items */}
          {useCases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`group absolute w-[360px] ${desktopPositions[index]}`}
            >
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#6288B9]">
                  {item.category}
                </span>

                <h3 className="mt-3 bg-gradient-to-r from-[#071A31] via-[#244D7A] to-[#6288B9] bg-clip-text font-serif text-3xl font-bold leading-tight text-transparent">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                <div
                  className={`mt-6 flex items-center gap-4 ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#AFC9E8] to-[#244D7A]" />

                  <div className="h-3 w-3 rounded-full bg-[#244D7A] shadow-[0_0_0_8px_rgba(143,180,227,0.18)] transition duration-500 group-hover:scale-125" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet / Mobile Flow */}
        <div className="mt-16 xl:hidden">
          <div className="mx-auto max-w-3xl">
            <div className="relative border-l border-[#D6E5F5] pl-7">
              {useCases.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.04 }}
                  viewport={{ once: true, margin: "-70px" }}
                  className="relative pb-12 last:pb-0"
                >
                  <div className="absolute -left-[35px] top-1 h-4 w-4 rounded-full border-4 border-[#F8FBFF] bg-[#244D7A] shadow-[0_0_0_7px_rgba(143,180,227,0.16)]" />

                  <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#6288B9]">
                    {item.category}
                  </span>

                  <h3 className="mt-3 bg-gradient-to-r from-[#071A31] via-[#244D7A] to-[#6288B9] bg-clip-text font-serif text-3xl font-bold leading-tight text-transparent md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Text CTA */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#6288B9]">
            Build Better. Manage Better. Grow Confidently.
          </p>

          <h3 className="mt-5 bg-gradient-to-r from-[#071A31] via-[#244D7A] to-[#8FB4E3] bg-clip-text font-serif text-3xl font-bold leading-tight text-transparent md:text-5xl">
            Need a website built, redesigned or professionally managed?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            DTS helps businesses create and manage modern websites that combine
            strong design, responsive development, reliable functionality and
            ongoing support.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#071A31] px-8 py-4 text-sm font-bold text-white shadow-[0_18px_45px_rgba(7,26,49,0.18)] transition duration-300 hover:bg-[#244D7A]"
            >
              Discuss Your Requirement
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#CFE0F4] bg-white/80 px-8 py-4 text-sm font-bold text-[#071A31] transition duration-300 hover:bg-white"
            >
              Book A Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}