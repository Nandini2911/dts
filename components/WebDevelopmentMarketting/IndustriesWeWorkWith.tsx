"use client";

import { motion } from "framer-motion";

const industries = [
  {
    title: "Hospitality & Restaurants",
    text: "Website development, social media marketing, SEO, influencer campaigns and local visibility for restaurants, cafes, hotels, lounges and food brands.",
    tags: ["Restaurants", "Hotels", "Cafes"],
  },
  {
    title: "Events & Entertainment",
    text: "Websites, campaign landing pages, event promotions, artist pages, ticketing support, digital campaigns and social media content.",
    tags: ["Events", "Artists", "Campaigns"],
  },
  {
    title: "Luxury & Lifestyle",
    text: "Premium website design, brand storytelling, SEO content, social media marketing and digital campaigns for luxury and lifestyle businesses.",
    tags: ["Luxury", "Branding", "Lifestyle"],
  },
  {
    title: "Corporate & Professional Services",
    text: "Corporate websites, SEO pages, LinkedIn content, Google Ads, lead-generation campaigns and digital credibility building.",
    tags: ["Corporate", "LinkedIn", "Leads"],
  },
  {
    title: "Real Estate & Automotive",
    text: "Website development, landing pages, digital ads, local SEO, project pages, lead generation and campaign communication.",
    tags: ["Real Estate", "Auto", "Landing Pages"],
  },
  {
    title: "Beauty & Wellness",
    text: "Websites, Instagram marketing, SEO, local visibility, influencer campaigns and reputation-building for salons, clinics and wellness brands.",
    tags: ["Beauty", "Wellness", "ORM"],
  },
  {
    title: "Ecommerce & Retail",
    text: "Ecommerce websites, product pages, digital ads, social media content, SEO structure and conversion-focused marketing.",
    tags: ["Ecommerce", "Retail", "Sales"],
  },
];

export default function IndustriesWeWorkWith() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 py-24 md:px-10 lg:px-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,136,185,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(13,36,68,0.10),transparent_34%)]" />
      <div className="absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-[#DCEBFF] blur-[90px]" />
      <div className="absolute bottom-20 right-[-120px] h-80 w-80 rounded-full bg-[#EAF4FF] blur-[90px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#D5E4F5] bg-white/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#244D7A] shadow-sm backdrop-blur-xl">
            Industries We Work With
          </span>

          <h2 className="mt-7 bg-gradient-to-r from-[#071A31] via-[#244D7A] to-[#8FB4E3] bg-clip-text font-serif text-4xl font-bold leading-tight tracking-tight text-transparent md:text-6xl lg:text-5xl">
            Digital growth solutions for every business vertical
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            We create website, SEO, social media and digital marketing systems
            for brands that want better visibility, stronger credibility and
            real business inquiries.
          </p>
        </motion.div>

        {/* Left Right Cards */}
        <div className="mt-20 space-y-8 md:space-y-10">
          {industries.map((industry, index) => {
            const isRight = index % 2 !== 0;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`flex ${isRight ? "justify-end" : "justify-start"}`}
              >
                <div className="group relative w-full max-w-4xl">
                  <div className="relative overflow-hidden rounded-[34px] border border-[#DDE8F5] bg-white shadow-[0_24px_70px_rgba(13,36,68,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_90px_rgba(13,36,68,0.14)]">
                    <div
                      className={`grid min-h-[260px] md:grid-cols-[0.42fr_1fr] ${
                        isRight ? "md:grid-cols-[1fr_0.42fr]" : ""
                      }`}
                    >
                      {/* Visual Panel */}
                      <div
                        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#071A31] via-[#244D7A] to-[#8FB4E3] p-8 ${
                          isRight ? "md:order-2" : ""
                        }`}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.26),transparent_36%)]" />
                        <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full border border-white/20" />
                        <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full border border-white/20" />

                        <div className="relative text-center">
                          <div className="mx-auto h-20 w-20 rounded-[28px] border border-white/25 bg-white/15 backdrop-blur-xl shadow-2xl" />

                          <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-white/75">
                            Digital Growth
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative p-7 md:p-10">
                        <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#F0F7FF] transition duration-500 group-hover:bg-[#E0EEFF]" />

                        <div className="relative">
                          <h3 className="bg-gradient-to-r from-[#071A31] via-[#244D7A] to-[#6288B9] bg-clip-text font-serif text-2xl font-bold leading-tight text-transparent md:text-4xl">
                            {industry.title}
                          </h3>

                          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                            {industry.text}
                          </p>

                          <div className="mt-8 flex flex-wrap items-center gap-3">
                            {industry.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-[#F3F8FF] px-4 py-2 text-sm font-semibold text-[#244D7A]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`mt-4 h-px w-40 bg-gradient-to-r from-[#244D7A] to-transparent ${
                      isRight ? "ml-auto" : ""
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[40px] bg-gradient-to-r from-[#071A31] via-[#244D7A] to-[#8FB4E3] p-[1px] shadow-[0_30px_90px_rgba(13,36,68,0.16)]"
        >
          <div className="rounded-[39px] bg-white p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6288B9]">
                  Website • SEO • Social Media • Ads
                </p>

                <h3 className="mt-5 bg-gradient-to-r from-[#071A31] via-[#244D7A] to-[#8FB4E3] bg-clip-text font-serif text-3xl font-bold leading-tight text-transparent md:text-3xl">
                  One digital partner for visibility, credibility and business
                  growth.
                </h3>
              </div>

              <p className="rounded-[28px] bg-[#F3F8FF] p-6 text-base leading-8 text-slate-600">
                Whether your brand belongs to hospitality, events, luxury,
                corporate, real estate, wellness or ecommerce, DTS builds
                digital strategies that support long-term brand growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}