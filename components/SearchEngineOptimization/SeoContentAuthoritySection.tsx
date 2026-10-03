"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  FileText,
  Link2,
  RefreshCcw,
  Search,
} from "lucide-react";

const serifFont =
  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif';

const disciplines = [
  {
    number: "01",
    icon: BookOpen,
    label: "Foundation",
    title: "Pillar Pages",
    text: "Build authoritative pages around the main services, categories and subjects your business needs to become relevant for.",
  },
  {
    number: "02",
    icon: FileText,
    label: "Depth",
    title: "Supporting Content",
    text: "Create guides, comparisons, explanations and search-led articles that answer the questions surrounding each core topic.",
  },
  {
    number: "03",
    icon: Search,
    label: "Context",
    title: "Semantic Coverage",
    text: "Strengthen relevance by covering the terminology, subtopics and related search intent customers naturally use.",
  },
  {
    number: "04",
    icon: Link2,
    label: "Connection",
    title: "Internal Linking",
    text: "Connect important service and supporting pages so users and search engines can understand the relationship between topics.",
  },
];

const contentScope = [
  "SEO Blog Strategy",
  "Topic Clusters",
  "Service Page Optimization",
  "Landing Page Optimization",
  "Content Gap Analysis",
  "Existing Content Refresh",
  "FAQ Development",
  "Internal Linking",
  "Semantic Coverage",
  "Search Intent Mapping",
];

export default function SeoContentAuthoritySection() {
  return (
    <section className="relative overflow-hidden bg-white py-[120px] sm:py-[140px] lg:py-[160px]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#FAFCFE_50%,#F1F6FA_100%)]" />

        <div className="absolute left-[-220px] top-[30%] h-[520px] w-[520px] rounded-full bg-[#6288B9]/8 blur-[160px]" />

        <div className="absolute right-[-190px] bottom-[5%] h-[520px] w-[520px] rounded-full bg-[#456A9E]/7 blur-[150px]" />

        <div
          className="
            absolute
            right-[-30px]
            top-[55px]
            whitespace-nowrap
            text-[110px]
            font-bold
            leading-none
            tracking-[-9px]
            text-[#0D2444]/[0.015]
            sm:text-[180px]
            lg:text-[270px]
          "
          style={{ fontFamily: serifFont }}
        >
          CONTENT
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1460px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#6288B9]" />

              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#456A9E]">
                Content That Earns Visibility
              </span>
            </div>

            <h2
              className="
                mt-7
                text-[40px]
                font-bold
                leading-[1.05]
                tracking-[-2px]
                text-[#0D2444]
                md:text-[58px]
              "
              style={{ fontFamily: serifFont }}
            >
              Build Search Authority Around
              <br />

              <span className="bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent">
                Topics Your Customers Care About.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <p className="max-w-[680px] text-[16px] leading-[1.9] text-[#5B6472] sm:text-[18px]">
              Content SEO should create depth around the subjects that matter
              to your customers and your business — not simply increase the
              number of pages on the website.
            </p>

            <p className="mt-4 max-w-[680px] text-[15px] leading-[1.85] text-[#718094] sm:text-[16px]">
              We connect core service pages, supporting content, search intent
              and internal links into a structured authority system.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            EDITORIAL OPENING
        ========================================================= */}

        <div className="mt-20 border-y border-[#D7E1EB]">
          <div className="grid lg:grid-cols-[0.4fr_0.6fr]">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                relative
                border-b
                border-[#D7E1EB]
                py-12
                lg:border-b-0
                lg:border-r
                lg:py-16
                lg:pr-14
              "
            >
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8B9AAA]">
                The Content Principle
              </span>

              <p
                className="
                  mt-8
                  max-w-[500px]
                  text-[42px]
                  font-bold
                  leading-[1]
                  tracking-[-2px]
                  text-[#0D2444]
                  sm:text-[52px]
                  lg:text-[62px]
                "
                style={{ fontFamily: serifFont }}
              >
                OWN
                <br />
                THE
                <br />
                SUBJECT.
              </p>

              <div className="mt-10 h-px w-[90px] bg-[#6288B9]" />

              <p className="mt-7 max-w-[420px] text-[13px] leading-[1.9] text-[#687386]">
                Search authority grows when your website consistently answers
                the important questions surrounding a subject — from early
                research through commercial decision-making.
              </p>

              <ArrowDownRight className="mt-10 h-[22px] w-[22px] text-[#456A9E]" />
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative py-12 lg:py-16 lg:pl-14"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#6288B9]">
                Topical Authority
              </span>

              <p
                className="
                  mt-7
                  max-w-[780px]
                  text-[30px]
                  font-bold
                  leading-[1.32]
                  tracking-[-1px]
                  text-[#0D2444]
                  sm:text-[38px]
                  lg:text-[44px]
                "
                style={{ fontFamily: serifFont }}
              >
                One page can answer one query.
                <span className="text-[#6288B9]">
                  {" "}
                  A connected content system can establish relevance across an
                  entire subject.
                </span>
              </p>

              <p className="mt-7 max-w-[760px] text-[14px] leading-[1.9] text-[#687386] sm:text-[15px]">
                Instead of treating every blog post as an isolated asset, we
                build relationships between service pages, educational content,
                supporting topics and internal links.
              </p>
            </motion.div>
          </div>
        </div>

        {/* =========================================================
            DISCIPLINES — EDITORIAL INDEX
        ========================================================= */}

        <div className="mt-20">
          <div className="flex items-end justify-between border-b border-[#D7E1EB] pb-6">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8B9AAA]">
                Authority Structure
              </span>

              <h3
                className="mt-3 text-[28px] font-bold leading-[1.2] text-[#0D2444] sm:text-[34px]"
                style={{ fontFamily: serifFont }}
              >
                Four disciplines that strengthen a topic.
              </h3>
            </div>

            <span className="hidden text-[9px] font-semibold uppercase tracking-[2px] text-[#9AA7B5] sm:block">
              01 — 04
            </span>
          </div>

          <div>
            {disciplines.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className="
                    group
                    relative
                    border-b
                    border-[#D7E1EB]
                    py-9
                    sm:py-10
                  "
                >
                  <div
                    className="
                      grid
                      gap-6
                      md:grid-cols-[90px_0.7fr_1.2fr_60px]
                      md:items-center
                    "
                  >
                    {/* NUMBER */}
                    <span
                      className="
                        text-[50px]
                        font-bold
                        leading-none
                        tracking-[-3px]
                        text-[#0D2444]/[0.08]
                        transition-colors
                        duration-300
                        group-hover:text-[#6288B9]/20
                      "
                      style={{ fontFamily: serifFont }}
                    >
                      {item.number}
                    </span>

                    {/* TITLE */}
                    <div>
                      <span className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#6288B9]">
                        {item.label}
                      </span>

                      <h4
                        className="mt-2 text-[25px] font-bold leading-[1.15] text-[#0D2444]"
                        style={{ fontFamily: serifFont }}
                      >
                        {item.title}
                      </h4>
                    </div>

                    {/* COPY */}
                    <p className="max-w-[650px] text-[12px] leading-[1.85] text-[#687386] sm:text-[13px]">
                      {item.text}
                    </p>

                    {/* ICON */}
                    <div className="flex justify-start md:justify-end">
                      <div
                        className="
                          flex
                          h-[44px]
                          w-[44px]
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#D7E1EB]
                          text-[#456A9E]
                          transition-all
                          duration-300
                          group-hover:border-[#0D2444]
                          group-hover:bg-[#0D2444]
                          group-hover:text-white
                        "
                      >
                        <Icon className="h-[17px] w-[17px]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            CONTENT SYSTEM STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="grid border-y border-[#D7E1EB] lg:grid-cols-[0.3fr_0.7fr]">
            {/* INDEX */}
            <div
              className="
                flex
                items-center
                border-b
                border-[#D7E1EB]
                py-9
                lg:border-b-0
                lg:border-r
                lg:pr-10
              "
            >
              <div>
                <RefreshCcw className="h-[20px] w-[20px] text-[#456A9E]" />

                <span className="mt-5 block text-[9px] font-semibold uppercase tracking-[3px] text-[#8B9AAA]">
                  Content System
                </span>

                <p
                  className="mt-3 text-[24px] font-bold leading-[1.25] text-[#0D2444]"
                  style={{ fontFamily: serifFont }}
                >
                  Build.
                  <br />
                  Connect.
                  <br />
                  Strengthen.
                </p>
              </div>
            </div>

            {/* STATEMENT */}
            <div className="py-9 lg:pl-12">
              <span className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#6288B9]">
                How Authority Compounds
              </span>

              <p
                className="
                  mt-4
                  max-w-[900px]
                  text-[26px]
                  font-bold
                  leading-[1.45]
                  text-[#0D2444]
                  sm:text-[32px]
                "
                style={{ fontFamily: serifFont }}
              >
                Pillar pages
                <span className="text-[#A6B6C6]"> → </span>
                supporting topics
                <span className="text-[#A6B6C6]"> → </span>
                related service pages
                <span className="text-[#A6B6C6]"> → </span>
                internal links
                <span className="text-[#A6B6C6]"> → </span>
                <span className="text-[#6288B9]">
                  stronger topical coverage.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            CONTENT SCOPE — TEXT INDEX
        ========================================================= */}

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-[70px]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8B9AAA]">
              Content SEO Scope
            </span>

            <h3
              className="mt-4 text-[32px] font-bold leading-[1.15] text-[#0D2444]"
              style={{ fontFamily: serifFont }}
            >
              What We Build,
              <br />
              Improve & Connect.
            </h3>

            <p className="mt-6 max-w-[330px] text-[12px] leading-[1.85] text-[#718094]">
              Every content decision should support either search demand,
              business relevance or stronger topical depth.
            </p>
          </motion.div>

          <div className="border-t border-[#D7E1EB]">
            {contentScope.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.025,
                }}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  gap-5
                  border-b
                  border-[#D7E1EB]
                  py-5
                "
              >
                <div className="flex items-center gap-5">
                  <span className="w-[30px] text-[8px] font-semibold tracking-[2px] text-[#A1ADBA]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      text-[16px]
                      font-bold
                      text-[#0D2444]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      sm:text-[18px]
                    "
                    style={{ fontFamily: serifFont }}
                  >
                    {item}
                  </span>
                </div>

                <ArrowRight className="h-[14px] w-[14px] text-[#A1ADBA] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#456A9E]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================
            FINAL STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-20
            grid
            gap-8
            border-t
            border-[#D7E1EB]
            pt-10
            lg:grid-cols-[1.4fr_0.6fr]
            lg:items-end
          "
        >
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8B9AAA]">
              Content SEO Principle
            </span>

            <p
              className="
                mt-4
                max-w-[1000px]
                text-[30px]
                font-bold
                leading-[1.27]
                tracking-[-1px]
                text-[#0D2444]
                sm:text-[38px]
                lg:text-[44px]
              "
              style={{ fontFamily: serifFont }}
            >
              Don't publish because the calendar needs another article.
              <span className="text-[#6288B9]">
                {" "}
                Publish because the subject needs more depth.
              </span>
            </p>
          </div>

          <div className="border-l border-[#D7E1EB] pl-6">
            <p className="text-[12px] leading-[1.9] text-[#687386] sm:text-[13px]">
              Every page should serve a clear search intent, strengthen a
              relevant business topic and connect naturally with the wider
              website.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}