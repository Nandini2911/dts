"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  {
    name: "Guest Management",
    href: "/services/guest-management",
  },
  {
    name: "Celebrity Management",
    href: "/services/celebrity-management",
  },
  {
    name: "Events & Weddings",
    href: "/services/events-weddings",
  },
  {
    name: "PR, Media & Digital Marketing",
    href: "/services/pr-media-marketing",
  },
  {
    name: "Web Development & Marketing",
    href: "/services/web-development-marketing",
  },
  {
    name: "AI Video & VFX",
    href: "/services/ai-video-vfx",
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] =
    useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 pt-3 sm:px-4 md:px-5 md:pt-5">
      <div className="max-w-[1400px] mx-auto">
        <nav
          className="
            relative
            flex
            items-center
            justify-between
            h-[74px]
            sm:h-[82px]
            md:h-[92px]
            px-4
            sm:px-5
            md:px-8
            lg:px-10
            rounded-[24px]
            md:rounded-[30px]
            border
            border-white/20
            bg-white/80
            backdrop-blur-2xl
            shadow-[0_10px_50px_rgba(15,23,42,0.10)]
            overflow-visible
          "
        >
          {/* BG */}
          <div className="absolute inset-0 rounded-[30px] bg-white/75" />

          {/* GLOW */}
          <div className="absolute top-[-70px] left-[20%] w-[240px] h-[240px] bg-[#6288B9]/10 rounded-full blur-3xl" />

          {/* LOGO */}
          <Link
            href="/"
            className="relative z-20 flex items-center shrink-0"
          >
            <Image
              src="/dts logo.png"
              alt="Logo"
              width={90}
              height={90}
              priority
              className="
                w-[56px]
                sm:w-[68px]
                md:w-[78px]
                lg:w-[84px]
                h-auto
                object-contain
              "
            />
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-12 relative z-20">
            {/* HOME */}
            <li>
              <Link
                href="/"
                className="
                  text-[15px]
                  xl:text-[17px]
                  font-bold
                  tracking-[0.3px]
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#456A9E]
                  to-[#6288B9]
                  transition-all
                  duration-300
                  hover:scale-105
                "
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Home
              </Link>
            </li>

            {/* ABOUT */}
            <li>
              <Link
                href="/about"
                className="
                  text-[15px]
                  xl:text-[17px]
                  font-bold
                  tracking-[0.3px]
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#456A9E]
                  to-[#6288B9]
                  transition-all
                  duration-300
                  hover:scale-105
                "
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                About
              </Link>
            </li>

            {/* SERVICES */}
            <li
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="
                  flex
                  items-center
                  gap-1
                  text-[15px]
                  xl:text-[17px]
                  font-bold
                  tracking-[0.3px]
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#456A9E]
                  to-[#6288B9]
                  transition-all
                  duration-300
                  hover:scale-105
                "
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Services

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN */}
              <div
                className={`
                  absolute
                  top-[58px]
                  left-1/2
                  -translate-x-1/2
                  w-[340px]
                  rounded-[26px]
                  border
                  border-white/10
                  bg-[#0B1220]/95
                  backdrop-blur-2xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  p-4
                  transition-all
                  duration-300
                  ${
                    serviceOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-3"
                  }
                `}
              >
                <div className="mb-4 px-2">
                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[4px]
                      text-[#8FA9C7]
                      font-semibold
                    "
                  >
                    Premium Services
                  </p>
                </div>

                <div className="flex flex-col ">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-[18px]
                        border
                        border-transparent
                        px-1
                        py-1
                        transition-all
                        duration-300
                        hover:bg-gradient-to-r
                        hover:from-[#111827]
                        hover:to-[#1E293B]
                        hover:border-white/10
                      "
                    >
                      <p
                        className="
                          text-[15px]
                          font-semibold
                          text-white
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        {service.name}
                      </p>

                      <div
                        className="
                          w-9
                          h-9
                          rounded-full
                          border
                          border-white/10
                          flex
                          items-center
                          justify-center
                          text-white/70
                          text-[14px]
                          transition-all
                          duration-300
                          group-hover:bg-white
                          group-hover:text-[#0B1220]
                        "
                      >
                        →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* WORK */}
            <li>
              <Link
                href="/work"
                className="
                  text-[15px]
                  xl:text-[17px]
                  font-bold
                  tracking-[0.3px]
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#456A9E]
                  to-[#6288B9]
                  transition-all
                  duration-300
                  hover:scale-105
                "
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Work
              </Link>
            </li>

            {/* BLOG */}
            <li>
              <Link
                href="/blog"
                className="
                  text-[15px]
                  xl:text-[17px]
                  font-bold
                  tracking-[0.3px]
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#456A9E]
                  to-[#6288B9]
                  transition-all
                  duration-300
                  hover:scale-105
                "
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Blog
              </Link>
            </li>

            {/* CONTACT */}
            <li>
              <Link
                href="/contact"
                className="
                  text-[15px]
                  xl:text-[17px]
                  font-bold
                  tracking-[0.3px]
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#456A9E]
                  to-[#6288B9]
                  transition-all
                  duration-300
                  hover:scale-105
                "
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="relative z-20 flex items-center gap-3">
            {/* CTA */}
            <div className="hidden md:block">
              <Link href="/contact">
                <button
                  className="
                    group
                    relative
                    overflow-hidden
                    px-5
                    lg:px-8
                    py-3
                    lg:py-4
                    rounded-[18px]
                    text-white
                    font-semibold
                    text-[14px]
                    lg:text-[15px]
                    bg-gradient-to-r
                    from-[#0D2444]
                    via-[#1D3A66]
                    to-[#6288B9]
                    shadow-[0_10px_30px_rgba(13,36,68,0.30)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                  "
                >
                  Start Project
                </button>
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
                lg:hidden
                flex
                items-center
                justify-center
                w-11
                h-11
                rounded-[14px]
                border
                border-slate-200
                bg-white
                text-[#0D2444]
              "
            >
              {mobileMenu ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}