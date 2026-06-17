"use client";

import { motion } from "framer-motion";
const services = [
  {
    title: "Business Website Development",
    text: "We create professional websites for businesses, service providers, consultants, agencies, hospitality brands, startups and organizations that need a strong digital presence.",
  },
  {
    title: "Custom Website Development",
    text: "We build custom websites based on your brand identity, services, audience, content structure and business goals instead of using a one-size-fits-all approach.",
  },
  {
    title: "Corporate Website Development",
    text: "We design corporate websites that communicate company profile, services, leadership, industries, case studies, contact details and credibility in a structured way.",
  },
  {
    title: "Ecommerce Website Development",
    text: "We help brands create ecommerce websites with product pages, category structure, cart flow, payment integration, shipping setup and conversion-focused design.",
  },
  {
    title: "Shopify Website Development",
    text: "We create Shopify websites for brands that want to sell products online with product pages, collection structure, cart flow, payment setup, shipping settings, theme customization and conversion-focused ecommerce design.",
  },
  {
    title: "WordPress Website Development",
    text: "We create WordPress websites for businesses that need an easy-to-manage website with service pages, blogs, forms, basic SEO setup, plugin integration and flexible content updates.",
  },
  {
    title: "Landing Page Design",
    text: "We create landing pages for campaigns, paid ads, lead generation, product launches, event promotions and service-specific inquiries.",
  },
  {
    title: "SEO-Friendly Website Development",
    text: "We build websites with SEO basics in mind, including clean page structure, proper headings, crawlable content, optimized URLs, metadata, internal links and mobile-friendly layouts.",
  },
  {
    title: "UI/UX Website Design",
    text: "We plan user-friendly layouts, smooth navigation, readable content sections, strong call-to-action placements and visually balanced page designs.",
  },
  {
    title: "Website Redesign Services",
    text: "We improve outdated websites by upgrading design, content structure, mobile experience, loading flow, SEO readiness and conversion elements.",
  },
  {
    title: "Website Maintenance",
    text: "We support website updates, content changes, page additions, performance checks, bug fixes and ongoing improvements.",
  },
  {
    title: "Website Content Structure",
    text: "We help plan website pages, service sections, FAQs, location sections, internal links and conversion-focused content for better search and user experience.",
  },
];

export default function WebsiteDevelopmentServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8FBFF] px-6 py-28 md:px-12 lg:px-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFFFFF_0%,#EEF7FF_48%,#FFFFFF_100%)]" />
      <div className="absolute -left-44 top-20 h-[520px] w-[520px] rounded-full bg-[#BFD5EF]/45 blur-[130px]" />
      <div className="absolute -right-44 bottom-20 h-[560px] w-[560px] rounded-full bg-[#6288B9]/18 blur-[140px]" />

      {/* Soft Grid */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)] bg-[size:92px_92px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full bg-gradient-to-r from-[#0D2444] via-[#244D7A] to-[#6288B9] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#0D2444]/20"
          >
            Website Development Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
              Our Website Development Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600"
          >
            We create professional, mobile-friendly and SEO-ready websites that
            help brands build credibility, improve visibility and generate
            inquiries.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-[#DDEBFA] bg-white/85 p-7 shadow-xl shadow-[#0D2444]/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#0D2444] hover:bg-[#071A33] hover:shadow-2xl hover:shadow-[#0D2444]/25"
            >
              {/* Hover Glow */}
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#DCEBFF] blur-3xl transition duration-500 group-hover:bg-[#6288B9]/40" />
              <div className="absolute bottom-[-120px] left-[-120px] h-56 w-56 rounded-full bg-transparent blur-3xl transition duration-500 group-hover:bg-[#244D7A]/50" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF7FF] transition duration-500 group-hover:bg-white/10">
                    <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[#0D2444] to-[#6288B9] transition duration-500 group-hover:bg-white" />
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7E6F8] bg-white text-[#0D2444] transition duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                    →
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-tight text-[#0D2444] transition duration-500 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600 transition duration-500 group-hover:text-white/70">
                  {service.text}
                </p>

                <div className="mt-7 h-px w-full bg-gradient-to-r from-[#6288B9]/50 via-[#D7E6F8] to-transparent transition duration-500 group-hover:from-white/50 group-hover:via-white/20" />

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[#6288B9] transition duration-500 group-hover:text-[#CFE6FF]">
                  Website Service
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="relative mx-auto mt-20 max-w-6xl overflow-hidden rounded-[40px] border border-[#D7E6F8] bg-white/80 px-6 py-10 shadow-2xl shadow-[#0D2444]/10 backdrop-blur-xl md:px-12 md:py-12"
        >
          <div className="absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#BFD5EF]/50 blur-3xl" />
          <div className="absolute -right-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#6288B9]/20 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-[0.28fr_1fr]">
            <div className="border-b border-[#D7E6F8] pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6288B9]">
                Built With
              </p>

              <h3 className="mt-3 font-serif text-3xl font-bold text-[#0D2444] md:text-5xl">
                Purpose
              </h3>
            </div>

            <p className="font-serif text-2xl font-bold leading-tight md:text-3xl">
              <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
                Every website is planned with structure, speed, mobile
                experience, SEO readiness and conversion in mind.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}