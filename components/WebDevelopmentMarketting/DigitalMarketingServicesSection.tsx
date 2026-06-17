"use client";

import { motion } from "framer-motion";

const marketingServices = [
  {
    title: "Social Media Marketing",
    text: "We manage brand presence across Instagram, Facebook, LinkedIn, YouTube and other digital channels with content planning, captions, creatives, reels ideas and campaign strategy.",
  },
  {
    title: "Performance Marketing",
    text: "We plan and manage paid advertising campaigns across Meta, Google, YouTube and other platforms to support awareness, traffic, inquiries and lead generation.",
  },
  {
    title: "Google Ads Management",
    text: "We create search ads, display ads, video ads and campaign structures designed to reach users actively searching for your services or products.",
  },
  {
    title: "Meta Ads Management",
    text: "We manage Instagram and Facebook ad campaigns for brand awareness, traffic, lead generation, event promotion, product sales and retargeting.",
  },
  {
    title: "Lead Generation Campaigns",
    text: "We create campaigns focused on inquiries, calls, form submissions, bookings, consultations and business leads.",
  },
  {
    title: "Content Marketing",
    text: "We create content strategies for blogs, service pages, social media, newsletters, campaign copy, video scripts and digital brand communication.",
  },
  {
    title: "Email & WhatsApp Marketing",
    text: "We create communication for customer updates, offers, launch announcements, event invites, reminders and follow-up campaigns.",
  },
  {
    title: "Online Reputation Management",
    text: "We help brands manage reviews, digital perception, public communication, response strategy and online trust signals.",
  },
  {
    title: "Influencer Marketing",
    text: "We coordinate influencer and creator campaigns for product promotions, hospitality launches, lifestyle content, event visibility and social media reach.",
  },
];

export default function DigitalMarketingServicesSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:px-12 lg:px-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/guest2sec.jpg')",
        }}
      />

     
      <div className="relative mx-auto max-w-7xl">
        {/* Heading Center */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full bg-gradient-to-r from-[#0D2444] via-[#244D7A] to-[#6288B9] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#0D2444]/20"
          >
            Digital Marketing Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#06172C] via-[#244D7A] to-[#7FA6D4] bg-clip-text text-transparent">
              Our Digital Marketing Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600"
          >
            We help brands grow online through social media, paid ads, lead
            generation, content marketing, email campaigns, reputation
            management and influencer collaborations.
          </motion.p>
        </div>

        {/* Simple Clean Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="group rounded-[28px] border border-white/70 bg-white/80 p-7 shadow-xl shadow-[#0D2444]/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#071A33] hover:shadow-2xl hover:shadow-[#0D2444]/20"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF7FF] transition duration-500 group-hover:bg-white/10">
                <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[#0D2444] to-[#6288B9] transition duration-500 group-hover:bg-white" />
              </div>

              <h3 className="text-2xl font-bold leading-tight text-[#0D2444] transition duration-500 group-hover:text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600 transition duration-500 group-hover:text-white/75">
                {service.text}
              </p>

              <div className="mt-7 h-px w-full bg-gradient-to-r from-[#6288B9]/50 via-[#D7E6F8] to-transparent transition duration-500 group-hover:from-white/50 group-hover:via-white/20" />

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[#6288B9] transition duration-500 group-hover:text-[#CFE6FF]">
                Marketing Service
              </p>
            </motion.div>
          ))}
        </div>

        {/* Simple Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-5xl text-center"
        >
          <p className="font-serif text-3xl font-bold leading-tight md:text-3xl">
            <span className="text-white bg-clip-text text-transparent">
              Digital marketing helps your brand stay visible, attract the
              right audience and convert attention into business growth.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}