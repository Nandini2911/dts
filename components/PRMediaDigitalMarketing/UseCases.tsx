"use client";

import { motion } from "framer-motion";

type UseCase = {
  title: string;
  description: string;
  tags: string[];
};

const useCases: UseCase[] = [
  {
    title: "Brand Launch Campaigns",
    description:
      "For new brands entering the market, we create launch communication through PR, social media, influencer outreach, content planning and digital promotion.",
    tags: ["Brand Launch", "PR", "Social Media"],
  },
  {
    title: "Product Launch Campaigns",
    description:
      "For product announcements, we plan messaging, media angles, creator collaborations, launch content, paid ads and audience engagement.",
    tags: ["Product Launch", "Creators", "Paid Ads"],
  },
  {
    title: "Event Promotion Campaigns",
    description:
      "For events, festivals, shows, luxury experiences and brand activations, we manage media outreach, influencer attendance, social buzz and post-event coverage.",
    tags: ["Event PR", "Influencers", "Coverage"],
  },
  {
    title: "Hospitality Launch Campaigns",
    description:
      "For restaurants, cafes, lounges, hotels and clubs, we create launch visibility through food creators, local media, social media content and digital campaigns.",
    tags: ["Hospitality", "Food Creators", "Local Buzz"],
  },
  {
    title: "Founder & Public Figure Visibility",
    description:
      "For founders, artists, creators and public personalities, we support personal branding, media visibility, social media positioning and reputation building.",
    tags: ["Personal Branding", "Media", "Reputation"],
  },
  {
    title: "Lead Generation Campaigns",
    description:
      "For businesses looking for inquiries, bookings or sales, we use SEO, paid ads, landing pages, content marketing and conversion-focused digital strategy.",
    tags: ["SEO", "Landing Pages", "Leads"],
  },
];

const campaignMetrics = [
  "Launch Visibility",
  "Media Buzz",
  "Creator Push",
  "Digital Growth",
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function UseCases() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-[#0D2444] px-6 py-24 text-white"
    >
      {/* Dark Theme Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D2444] via-[#12345F] to-[#6288B9]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_85%_82%,rgba(255,255,255,0.12),transparent_34%)]" />

      <div className="absolute inset-0 opacity-[0.07]">
        <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.22, 0.45, 0.22] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.38, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.14 }}
          className="mx-auto mb-16 max-w-5xl text-center"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-white/65"
          >
            Campaigns & Use Cases
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl"
          >
            Campaigns Built Around Real Brand Goals
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/72 md:text-lg"
          >
            Every brand needs a different communication approach. We create PR,
            media and digital marketing campaigns based on your launch,
            visibility, reputation, lead-generation or growth objective.
          </motion.p>
        </motion.div>

        {/* New Different Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          {/* Left Sticky Strategy Panel */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[46px] border border-white/15 bg-white/[0.10] p-8 shadow-2xl backdrop-blur-xl lg:sticky lg:top-24 lg:self-start md:p-10"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/12 blur-3xl" />
            <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-white/8 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55">
                Campaign Strategy
              </p>

              <h3 className="mt-6 text-4xl font-black leading-[1.05] md:text-5xl">
                From launch buzz to long-term brand visibility.
              </h3>

              <p className="mt-7 text-base leading-8 text-white/72">
                We combine PR outreach, media communication, social media
                content, influencer collaborations, SEO and paid campaigns to
                build stronger visibility across the right platforms.
              </p>

              <div className="mt-10 space-y-4">
                {campaignMetrics.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: index * 0.07,
                    }}
                    whileHover={{ x: 8 }}
                    className="flex items-center justify-between border-t border-white/15 pt-4"
                  >
                    <p className="text-sm font-bold text-white/85">{item}</p>
                    <span className="h-2 w-2 rounded-full bg-white/55" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-black text-white">06</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                  Campaign Use Cases
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Campaign Stack */}
          <div className="relative">
            <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-white/45 via-white/20 to-transparent md:block" />

            <div className="space-y-6">
              {useCases.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 42 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    duration: 0.68,
                    ease: "easeOut",
                    delay: index * 0.06,
                  }}
                  className="group relative grid gap-5 md:grid-cols-[88px_1fr]"
                >
                  {/* Number Marker */}
                  <div className="relative z-10 flex justify-start">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/12 text-base font-black text-white shadow-[0_20px_60px_rgba(255,255,255,0.08)] backdrop-blur-xl"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.div>
                  </div>

                  {/* Strip Content */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.25 }}
                    className="relative overflow-hidden border-b border-white/16 pb-8"
                  >
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-white via-white/60 to-transparent transition-all duration-700 group-hover:w-full" />

                    <div className="relative grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                      <div>
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                          Use Case {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="text-3xl font-black leading-tight text-white md:text-4xl">
                          {item.title}
                        </h3>
                      </div>

                      <div>
                        <p className="text-sm leading-7 text-white/68 md:text-base">
                          {item.description}
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                          {item.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, y: 12 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.38,
                                ease: "easeOut",
                                delay: tagIndex * 0.05,
                              }}
                              whileHover={{ y: -3 }}
                              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/62 backdrop-blur transition duration-300 hover:border-white/35 hover:text-white"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}