"use client";

import { motion } from "framer-motion";

type DigitalService = {
  title: string;
  description: string;
  category: string;
};

const digitalServices: DigitalService[] = [
  {
    title: "Social Media Marketing",
    category: "Social",
    description:
      "We manage brand presence across Instagram, Facebook, LinkedIn, YouTube and other digital platforms through content planning, creative direction, posting strategy, engagement and performance tracking.",
  },
  {
    title: "Search Engine Optimization",
    category: "SEO",
    description:
      "We help improve website visibility through keyword research, SEO content, on-page optimization, local SEO, technical recommendations and service-page strategy.",
  },
  {
    title: "Performance Marketing",
    category: "Paid Ads",
    description:
      "We plan and manage paid campaigns across platforms such as Meta, Google, YouTube and other digital channels to support awareness, traffic, inquiries and lead generation.",
  },
  {
    title: "Content Marketing",
    category: "Content",
    description:
      "We create digital content strategies for blogs, service pages, landing pages, social media posts, campaign copy, video scripts, newsletters and brand communication.",
  },
  {
    title: "Influencer Marketing",
    category: "Creators",
    description:
      "We help brands collaborate with influencers, creators and digital personalities for product promotions, event campaigns, hospitality launches, lifestyle content and targeted audience engagement.",
  },
  {
    title: "Online Reputation Management",
    category: "ORM",
    description:
      "We support brands with reputation monitoring, review strategy, public communication, digital visibility and brand perception management.",
  },
  {
    title: "Website & Landing Page Strategy",
    category: "Website",
    description:
      "We help businesses create campaign landing pages, service pages and website content that support SEO, conversion and brand credibility.",
  },
  {
    title: "Email & WhatsApp Campaigns",
    category: "CRM",
    description:
      "We create campaign messaging for announcements, offers, invites, launch communication, customer engagement and brand updates.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function DigitalMarketingServices() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EAF1F8]" />

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-120px] top-24 h-96 w-96 rounded-full bg-[#6288B9]/15 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.58, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-120px] bottom-24 h-96 w-96 rounded-full bg-[#0D2444]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.14 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#6288B9]"
          >
            Digital Marketing
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-4xl font-black leading-tight tracking-tight text-[#0D2444] md:text-6xl"
          >
            Our Digital Marketing Services
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg"
          >
            We manage social media, SEO, paid campaigns, content marketing,
            influencer collaborations, online reputation and digital campaign
            communication for brands across India.
          </motion.p>
        </motion.div>

        {/* Main Unique Layout */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-2xl"
        >
          {/* Top Digital Dashboard */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0D2444] via-[#244A78] to-[#6288B9] p-8 text-white md:p-10">
            <motion.div
              animate={{ x: [0, 22, 0], y: [0, -16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl"
            />

            <motion.div
              animate={{ x: [0, -22, 0], y: [0, 16, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                  Growth System
                </p>

                <h3 className="text-3xl font-black leading-tight md:text-5xl">
                  Search, social, content and ads working as one system.
                </h3>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="max-w-3xl text-base leading-8 text-white/78 md:text-lg"
              >
                Digital marketing helps your brand become discoverable,
                engaging and conversion-ready. We combine platform strategy,
                creative content, SEO, paid campaigns and reputation management
                to support visibility and business growth.
              </motion.p>
            </div>
          </div>

          {/* Service Matrix */}
          <div className="grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {digitalServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.58,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                whileHover={{ y: -8 }}
                className="group relative min-h-[310px] overflow-hidden bg-white p-7 transition duration-500 hover:bg-gradient-to-br hover:from-[#0D2444] hover:via-[#244A78] hover:to-[#6288B9]"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#0D2444] to-[#6288B9] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#6288B9]/0 blur-3xl transition duration-500 group-hover:bg-white/16" />

                <span className="pointer-events-none absolute right-5 top-4 text-7xl font-black leading-none text-[#0D2444]/5 transition duration-500 group-hover:text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex h-full flex-col">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-[#EAF1F8] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#6288B9] transition duration-500 group-hover:bg-white/15 group-hover:text-white/70">
                      {service.category}
                    </span>

                    <span className="text-sm font-black text-slate-300 transition duration-500 group-hover:text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-black leading-snug text-[#0D2444] transition duration-500 group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 transition duration-500 group-hover:text-white/72">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <div className="h-px w-full bg-slate-200 transition duration-500 group-hover:bg-white/25" />
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 transition duration-500 group-hover:text-white/50">
                      Digital Growth
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}