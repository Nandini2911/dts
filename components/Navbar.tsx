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
    name: "Web Development & SEO",
    href: "/services/web-development-marketing",
  },
  {
    name: "AI Video & Video Editing",
    href: "/services/ai-video-vfx",
  },
];

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const desktopLinkClass = `
  text-[15px]
  xl:text-[16px]
  2xl:text-[17px]
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
`;

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setMobileServiceOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-3 pt-3 sm:px-4 md:px-5 lg:px-6 2xl:px-8 md:pt-5">
      <div className="mx-auto w-full max-w-[1500px] 2xl:max-w-[1700px]">
        <nav
          className="
            relative
            flex
            items-center
            justify-between
            h-[70px]
            sm:h-[78px]
            md:h-[86px]
            lg:h-[88px]
            xl:h-[92px]
            2xl:h-[98px]
            px-4
            sm:px-5
            md:px-7
            lg:px-8
            xl:px-10
            2xl:px-12
            rounded-[22px]
            sm:rounded-[24px]
            md:rounded-[30px]
            border
            border-white/25
            bg-white/80
            backdrop-blur-2xl
            shadow-[0_10px_50px_rgba(15,23,42,0.10)]
            overflow-visible
          "
        >
          {/* Background Layer */}
          <div className="absolute inset-0 rounded-[22px] sm:rounded-[24px] md:rounded-[30px] bg-white/75" />

          {/* Soft Glow */}
          <div className="absolute top-[-80px] left-[16%] h-[230px] w-[230px] rounded-full bg-[#6288B9]/10 blur-3xl sm:h-[260px] sm:w-[260px] 2xl:h-[320px] 2xl:w-[320px]" />

          {/* Logo */}
          <Link
            href="/"
            aria-label="Double Trouble Studio Home"
            className="relative z-20 flex shrink-0 items-center"
            onClick={closeMobileMenu}
          >
            <Image
              src="/dts logo.png"
              alt="Double Trouble Studio Logo"
              width={100}
              height={100}
              priority
              className="
                h-auto
                w-[54px]
                sm:w-[64px]
                md:w-[72px]
                lg:w-[78px]
                xl:w-[84px]
                2xl:w-[92px]
                object-contain
              "
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="relative z-20 hidden items-center gap-7 lg:flex xl:gap-10 2xl:gap-12">
            <li>
              <Link href="/" className={desktopLinkClass} style={serifFont}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className={desktopLinkClass} style={serifFont}>
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServiceOpen((prev) => !prev)}
                className={`
                  ${desktopLinkClass}
                  flex
                  items-center
                  gap-1
                `}
                style={serifFont}
                aria-expanded={serviceOpen}
                aria-label="Open services menu"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`
                  absolute
                  top-[54px]
                  left-1/2
                  w-[320px]
                  xl:w-[350px]
                  2xl:w-[380px]
                  -translate-x-1/2
                  rounded-[24px]
                  border
                  border-white/10
                  bg-[#0B1220]/95
                  p-4
                  backdrop-blur-2xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  transition-all
                  duration-300
                  ${
                    serviceOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-3 opacity-0"
                  }
                `}
              >
                <div className="mb-4 px-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[4px] text-[#8FA9C7] xl:text-[11px]">
                    Premium Services
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setServiceOpen(false)}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-[18px]
                        border
                        border-transparent
                        px-3
                        py-3
                        transition-all
                        duration-300
                        hover:border-white/10
                        hover:bg-gradient-to-r
                        hover:from-[#111827]
                        hover:to-[#1E293B]
                      "
                    >
                      <p className="text-[14px] font-semibold text-white transition-all duration-300 group-hover:translate-x-1 xl:text-[15px] 2xl:text-[16px]">
                        {service.name}
                      </p>

                      <div
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          text-[14px]
                          text-white/70
                          transition-all
                          duration-300
                          group-hover:bg-white
                          group-hover:text-[#0B1220]
                          xl:h-9
                          xl:w-9
                        "
                      >
                        →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <Link href="/work" className={desktopLinkClass} style={serifFont}>
                Work
              </Link>
            </li>

            <li>
              <Link href="/blog" className={desktopLinkClass} style={serifFont}>
                Blog
              </Link>
            </li>

            <li>
              <Link href="/contact" className={desktopLinkClass} style={serifFont}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="relative z-20 flex items-center gap-3">
            {/* CTA */}
            <Link href="/contact" className="hidden md:block">
              <button
                type="button"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[16px]
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#1D3A66]
                  to-[#6288B9]
                  px-5
                  py-3
                  text-[13px]
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(13,36,68,0.30)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  lg:px-6
                  lg:py-3.5
                  lg:text-[14px]
                  xl:px-8
                  xl:py-4
                  xl:text-[15px]
                  2xl:px-9
                  2xl:text-[16px]
                "
              >
                Start Project
              </button>
            </Link>

            {/* Mobile Button */}
            <button
              type="button"
              onClick={() => setMobileMenu((prev) => !prev)}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-[14px]
                border
                border-slate-200
                bg-white
                text-[#0D2444]
                shadow-sm
                transition-all
                duration-300
                hover:bg-slate-50
                lg:hidden
              "
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenu}
            >
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile / Tablet Menu */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-500
            ${
              mobileMenu
                ? "max-h-[720px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              mt-3
              rounded-[24px]
              border
              border-white/25
              bg-white/95
              p-4
              shadow-[0_18px_60px_rgba(15,23,42,0.16)]
              backdrop-blur-2xl
              sm:p-5
              md:p-6
            "
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="
                  rounded-[16px]
                  px-4
                  py-3
                  text-[16px]
                  font-bold
                  text-[#0D2444]
                  transition-all
                  duration-300
                  hover:bg-[#F1F5F9]
                "
                style={serifFont}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="
                  rounded-[16px]
                  px-4
                  py-3
                  text-[16px]
                  font-bold
                  text-[#0D2444]
                  transition-all
                  duration-300
                  hover:bg-[#F1F5F9]
                "
                style={serifFont}
              >
                About
              </Link>

              {/* Mobile Services */}
              <button
                type="button"
                onClick={() => setMobileServiceOpen((prev) => !prev)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-[16px]
                  px-4
                  py-3
                  text-left
                  text-[16px]
                  font-bold
                  text-[#0D2444]
                  transition-all
                  duration-300
                  hover:bg-[#F1F5F9]
                "
                style={serifFont}
                aria-expanded={mobileServiceOpen}
              >
                Services
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    mobileServiceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    mobileServiceOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="my-2 rounded-[20px] bg-[#0B1220] p-3">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={closeMobileMenu}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-[14px]
                        px-3
                        py-3
                        text-[14px]
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-white/10
                        sm:text-[15px]
                      "
                    >
                      {service.name}
                      <span className="text-white/60">→</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/work"
                onClick={closeMobileMenu}
                className="
                  rounded-[16px]
                  px-4
                  py-3
                  text-[16px]
                  font-bold
                  text-[#0D2444]
                  transition-all
                  duration-300
                  hover:bg-[#F1F5F9]
                "
                style={serifFont}
              >
                Work
              </Link>

              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="
                  rounded-[16px]
                  px-4
                  py-3
                  text-[16px]
                  font-bold
                  text-[#0D2444]
                  transition-all
                  duration-300
                  hover:bg-[#F1F5F9]
                "
                style={serifFont}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="
                  rounded-[16px]
                  px-4
                  py-3
                  text-[16px]
                  font-bold
                  text-[#0D2444]
                  transition-all
                  duration-300
                  hover:bg-[#F1F5F9]
                "
                style={serifFont}
              >
                Contact
              </Link>
            </div>

            {/* Mobile CTA */}
            <Link href="/contact" onClick={closeMobileMenu} className="mt-4 block">
              <button
                type="button"
                className="
                  w-full
                  rounded-[18px]
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#1D3A66]
                  to-[#6288B9]
                  px-6
                  py-4
                  text-[15px]
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(13,36,68,0.28)]
                "
              >
                Start Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}