"use client";

import { motion } from "framer-motion";

const businessTypes = [
  {
    title: "Startups",
    text: "We build startup websites that explain the brand, product, solution, team, pitch, contact details and early credibility clearly.",
    label: "Launch",
  },
  {
    title: "Service Businesses",
    text: "We create service websites for agencies, consultants, professionals, clinics, studios, real estate companies, hospitality brands and local businesses.",
    label: "Service",
  },
  {
    title: "Restaurants & Hospitality Brands",
    text: "We build websites for restaurants, cafes, hotels, lounges and food businesses with menu sections, booking options, gallery, location details and social proof.",
    label: "Hospitality",
  },
  {
    title: "Luxury & Lifestyle Brands",
    text: "We design premium websites for fashion, beauty, wellness, lifestyle, silverware, luxury retail and experience-led businesses.",
    label: "Luxury",
  },
  {
    title: "Event & Entertainment Businesses",
    text: "We create websites for event companies, artists, entertainment brands, venues, festivals, launches and experiential businesses.",
    label: "Events",
  },
  {
    title: "Ecommerce Brands",
    text: "We develop ecommerce websites for product-based businesses that need product visibility, smooth browsing, secure checkout and sales-focused design.",
    label: "Ecommerce",
  },
  {
    title: "Corporate Organizations",
    text: "We build professional corporate websites with services, leadership, industries, achievements, case studies, careers and contact pages.",
    label: "Corporate",
  },
];

export default function BusinessTypesWebsiteSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:px-12 lg:px-20">
      {/* Background Image */}
      

      {/* Clean Overlay */}
      <div className="absolute inset-0 bg-white/92" />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#EEF7FF]/85 to-white" />

      {/* Soft Glow */}
      <div className="absolute -left-44 top-20 h-[430px] w-[430px] rounded-full bg-[#BFD5EF]/45 blur-[130px]" />
      <div className="absolute -right-44 bottom-20 h-[500px] w-[500px] rounded-full bg-[#6288B9]/15 blur-[150px]" />

      {/* Big Background Text */}
      <div className="pointer-events-none absolute left-1/2 top-32 -translate-x-1/2 whitespace-nowrap font-serif text-[80px] font-bold leading-none text-[#0D2444]/[0.035] md:text-[150px] lg:text-[210px]">
        BUSINESS
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
            Website Solutions by Business Type
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
              Website Development Services for Different Business Types
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600"
          >
            We create websites based on your industry, audience, business model
            and conversion goals — so every section has a clear purpose.
          </motion.p>
        </div>

        {/* No Card Editorial List */}
        <div className="mt-24">
          <div className="mb-8 flex items-center gap-5">
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#6288B9]">
              Business Categories
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#BFD5EF] to-transparent" />
          </div>

          <div className="divide-y divide-[#CFE0F4] border-y border-[#CFE0F4]">
            {businessTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative grid gap-6 py-9 transition duration-500 md:grid-cols-[0.18fr_0.34fr_1fr] md:items-start md:py-11"
              >
                {/* Hover Line */}
                <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-[#0D2444] via-[#6288B9] to-transparent transition-all duration-700 group-hover:w-full" />

                <div>
                  
                </div>

                <div>
                  <span className="mb-4 inline-flex text-xs font-bold uppercase tracking-[0.28em] text-[#6288B9]">
                    {item.label}
                  </span>

                  <h3 className="font-serif text-3xl font-bold leading-tight text-[#0D2444] transition duration-500 group-hover:text-[#244D7A] md:text-4xl">
                    {item.title}
                  </h3>
                </div>

                <div className="md:pl-8">
                  <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                    {item.text}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-px w-16 bg-gradient-to-r from-[#6288B9] to-transparent" />
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#6288B9]">
                      Built for growth
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Text - No Card */}
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
              Your website should feel built for your business, not adjusted
              from a common template.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}