"use client";

import Link from "next/link";

import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden  bg-gradient-to-br from-[#ecf3ff] via-[#355b98] to-[#172e57] pt-24">
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.06),transparent_28%)]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-6">
        {/* TOP CTA */}
        <div
          className="
            relative
            overflow-hidden

            rounded-[30px]

            border border-white/10

            bg-gradient-to-br
            from-[#08162D]
            via-[#0B2144]
            to-[#102D5E]

            px-10
            md:px-14

            py-10

            flex
            flex-col
            lg:flex-row

            items-start
            lg:items-center

            justify-between

            gap-10
          "
        >
          {/* GLOW */}
          <div className="absolute top-[-100px] right-[-120px] w-[280px] h-[280px] rounded-full bg-[#8EB6EA]/10 blur-[90px]" />

          {/* LEFT */}
          <div className="relative z-10 max-w-[720px]">
            <span
              className="
                text-[#AFCBF0]

                uppercase

                tracking-[5px]

                text-[11px]

                font-medium
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              LET’S BUILD SOMETHING ICONIC
            </span>

            <h2
              className="
                mt-5

                text-[32px]
                md:text-[38px]

                leading-[1]

                tracking-[-3px]

                font-semibold

                text-white

              
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              Create a brand

              <span className="text-[#8EB6EA]">
                {" "}people trust.
              </span>
            </h2>
          </div>

          {/* BUTTON */}
          <Link
            href="/contact"
            className="
              group

              flex
              items-center
              gap-4

              px-8
              py-5

              rounded-[22px]

              bg-white/[0.06]

              border border-white/10

              backdrop-blur-xl

              text-white

              text-[16px]
              font-medium

              transition-all
              duration-300

              hover:bg-white/[0.10]
              hover:-translate-y-1
            "
          >
            <span>Start Project</span>

            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </div>

        {/* MAIN FOOTER */}
        <div
          className="
            grid
            lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]

            gap-16

            pt-20
            pb-14
          "
        >
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4">
              {/* LOGO */}
              
                

              <div>
                <h3
                  className="
                    text-[24px]

                    text-white

                    font-semibold

                    leading-none

                  "
                  style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
                >
                  Double Trouble Studio
                </h3>

               
              </div>
            </div>

            <p
              className="
                mt-8

                text-[16px]

                leading-8

                text-white

                max-w-[360px]
              "
            >
              Premium branding, websites and digital
              experiences crafted with strategy,
              aesthetics and performance.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-3 mt-9 flex-wrap">
              {[
                {
                  icon: FaInstagram,
                  link: "https://instagram.com",
                },
                {
                  icon: FaFacebookF,
                  link: "https://facebook.com",
                },
                {
                  icon: FaPinterestP,
                  link: "https://pinterest.com",
                },
                {
                  icon: FaLinkedinIn,
                  link: "https://linkedin.com",
                },
                {
                  icon: FaXTwitter,
                  link: "https://twitter.com",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="
                      w-12
                      h-12

                      rounded-2xl

                      border border-white/10

                      bg-white/[0.04]

                      flex
                      items-center
                      justify-center

                      text-slate-300

                      transition-all
                      duration-300

                      hover:bg-[#12315C]
                      hover:text-white
                      hover:-translate-y-1
                    "
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3
                  className="
                    text-[24px]

                    text-white

                    font-semibold

                    leading-none

                  "
                  style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
                           >
              Navigation
            </h3>

            <div className="mt-8 space-y-5">
              {[
                "Home",
                "Services",
                "Projects",
                "About",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="
                    block

                    text-[16px]

                    text-slate-300

                    transition-all
                    duration-300

                    hover:text-white
                    hover:translate-x-1
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
 <h3
                  className="
                    text-[24px]

                    text-white

                    font-semibold

                    leading-none

                  "
                  style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
               >
              Services
            </h3>

            <div className="mt-8 space-y-5">
              {[
                "Brand Strategy",
                "Website Design",
                "Social Media",
                "PR & Marketing",
                "Creative Direction",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    text-[16px]

                    text-slate-300

                    transition-all
                    duration-300

                    hover:text-white

                    cursor-pointer
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
             <h3
                  className="
                    text-[24px]

                    text-white

                    font-semibold

                    leading-none

                  "
                  style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
                           >
              Contact
            </h3>

            <div className="mt-8 space-y-7">
              {/* EMAIL */}
              <a
                href="mailto:hello@dtsworld.in"
                className="
                  flex
                  items-start
                  gap-4

                  transition-all
                  duration-300

                  hover:translate-x-1
                "
              >
                <div
                  className="
                    w-12
                    h-12

                    rounded-2xl

                    bg-[#0F2D57]

                    flex
                    items-center
                    justify-center
                  "
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>

                <div>
                  <p className="text-[#8EB6EA] text-[11px] tracking-[3px] uppercase">
                    Email
                  </p>

                  <p className="text-white text-[16px] mt-2">
                    hello@dtsworld.in
                  </p>
                </div>
              </a>

              {/* PHONE */}
              <a
                href="tel:+918000006021"
                className="
                  flex
                  items-start
                  gap-4

                  transition-all
                  duration-300

                  hover:translate-x-1
                "
              >
                <div
                  className="
                    w-12
                    h-12

                    rounded-2xl

                    bg-[#0F2D57]

                    flex
                    items-center
                    justify-center
                  "
                >
                  <Phone className="w-5 h-5 text-white" />
                </div>

                <div>
                  <p className="text-[#8EB6EA] text-[11px] tracking-[3px] uppercase">
                    Phone
                  </p>

                  <p className="text-white text-[16px] mt-2">
                    +91 80000 06021
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12
                    h-12

                    rounded-2xl

                    bg-[#0F2D57]

                    flex
                    items-center
                    justify-center
                  "
                >
                  <MapPin className="w-5 h-5 text-white" />
                </div>

                <div>
                  <p className="text-[#8EB6EA] text-[11px] tracking-[3px] uppercase">
                    Location
                  </p>

                  <p className="text-white text-[16px] mt-2 leading-7">
                    Mumbai, Maharashtra
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            border-t border-white/10

            py-7

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4
          "
        >
          <p className="text-slate-500 text-[14px]">
            © 2026 Double Trouble Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="
                text-[14px]

                text-slate-400

                transition-colors

                hover:text-white
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="
                text-[14px]

                text-slate-400

                transition-colors

                hover:text-white
              "
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}