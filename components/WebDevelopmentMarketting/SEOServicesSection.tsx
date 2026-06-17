"use client";

import { motion } from "framer-motion";

const seoServices = [
  {
    title: "SEO Strategy",
    text: "We create SEO strategies based on your business goals, target audience, service categories, locations, competitors and search intent.",
  },
  {
    title: "Keyword Research",
    text: "We identify high-value keywords your customers are searching for, including service keywords, location keywords, question-based keywords and conversion-focused keywords.",
  },
  {
    title: "On-Page SEO",
    text: "We optimize page titles, meta descriptions, headings, content structure, internal links, image alt text, URL structure and service-page copy.",
  },
  {
    title: "Technical SEO",
    text: "We review crawlability, indexing, site speed, mobile usability, page structure, redirects, broken links, sitemap and schema recommendations.",
  },
  {
    title: "Local SEO",
    text: "We help businesses improve local visibility through location-based pages, Google Business Profile content, local keywords, reviews and city-specific optimization.",
  },
  {
    title: "SEO Content Writing",
    text: "We create SEO-friendly content for service pages, blogs, landing pages, FAQs, city pages, industry pages and website sections.",
  },
  {
    title: "Ecommerce SEO",
    text: "We optimize ecommerce websites through category structure, product-page content, metadata, internal linking and search-friendly navigation.",
  },
  {
    title: "Website SEO Audit",
    text: "We review your website to identify content gaps, technical issues, missing keywords, weak pages, poor structure and better ranking opportunities.",
  },
  {
    title: "AI Overview / GEO Optimization",
    text: "We structure website content to answer important customer questions clearly through definitions, FAQs, process sections, comparison content and proof-based information.",
  },
];

export default function SEOServicesSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:px-12 lg:px-20">
      {/* Background Image */}
      
      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-[#EEF7FF]/92 to-white/96" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(98,136,185,0.24),transparent_32%),radial-gradient(circle_at_80%_85%,rgba(13,36,68,0.12),transparent_34%)]" />

      {/* Soft Glow */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-[#BFD5EF]/45 blur-[120px]"
      />

      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#6288B9]/18 blur-[140px]"
      />

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
            SEO Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
              Our SEO Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600"
          >
            We improve your website visibility with SEO strategy, keyword
            research, technical optimization, content structure, local SEO,
            ecommerce SEO and AI Overview / GEO-ready content planning.
          </motion.p>
        </div>

        {/* Simple Stylish Services */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {seoServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/72 p-6 shadow-xl shadow-[#0D2444]/5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#0D2444] hover:shadow-2xl hover:shadow-[#0D2444]/20"
            >
              {/* Hover Image Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 transition duration-500 group-hover:opacity-20"
                style={{
                  backgroundImage: "url('/images/seo-bg.jpg')",
                }}
              />

              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:bg-gradient-to-br group-hover:from-[#0D2444]/95 group-hover:via-[#244D7A]/90 group-hover:to-[#6288B9]/85" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF7FF] transition duration-500 group-hover:bg-white/15">
                    <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[#0D2444] to-[#6288B9] transition duration-500 group-hover:bg-white" />
                  </span>

                  <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#6288B9] transition duration-500 group-hover:text-white/70">
                    SEO
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-tight text-[#0D2444] transition duration-500 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600 transition duration-500 group-hover:text-white/75">
                  {service.text}
                </p>

                <div className="mt-7 h-px w-full bg-gradient-to-r from-[#6288B9]/50 via-[#D7E6F8] to-transparent transition duration-500 group-hover:from-white/50 group-hover:via-white/20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-5xl text-center"
        >
          <p className="font-serif text-3xl font-bold leading-tight md:text-4xl">
            <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
              SEO helps the right customers find, understand and trust your
              business online.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}