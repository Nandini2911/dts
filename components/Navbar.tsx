"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4 md:px-5 md:pt-6">
      <div className="max-w-[1400px] mx-auto">
        <nav
          className="
            relative
            flex
            items-center
            justify-between
            h-[82px]
            md:h-[96px]
            px-5
            md:px-8
            lg:px-10
            rounded-[24px]
            md:rounded-[28px]
            border
            border-slate-200
            bg-white
            shadow-[0_10px_60px_rgba(15,23,42,0.12)]
            overflow-hidden
          "
        >
          {/* Background */}
          <div className="absolute inset-0 bg-white" />

          {/* Glow */}
          <div className="absolute top-[-60px] left-[20%] w-[260px] h-[260px] bg-[#6288B9]/10 rounded-full blur-3xl" />

          {/* LEFT LOGO */}
          <Link
            href="/"
            className="relative z-10 flex items-center"
          >
            <Image
              src="/dts logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="
                object-contain
                w-[62px]
                md:w-[74px]
                lg:w-[80px]
                h-auto
              "
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-12 relative z-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="
                    relative
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
                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-gradient-to-r
                    after:from-[#0D2444]
                    after:to-[#6288B9]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="relative z-10 flex items-center gap-3">
            {/* CTA BUTTON */}
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
                    rounded-[16px]
                    lg:rounded-[18px]
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
                    hover:shadow-[0_14px_40px_rgba(13,36,68,0.40)]
                  "
                >
                  <span className="relative z-10">
                    Start Project
                  </span>

                  <div
                    className="
                      absolute
                      inset-0
                      translate-y-full
                      bg-gradient-to-r
                      from-[#6288B9]
                      to-[#A4B8D2]
                      transition-transform
                      duration-500
                      group-hover:translate-y-0
                    "
                  />
                </button>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
                lg:hidden
                relative
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
                shadow-[0_4px_20px_rgba(15,23,42,0.08)]
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

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-500

            ${
              mobileMenu
                ? "max-h-[500px] opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-[28px]
              border
              border-slate-200
              bg-white
              shadow-[0_10px_60px_rgba(15,23,42,0.12)]
              p-5
            "
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="
                      block
                      rounded-[16px]
                      px-5
                      py-4
                      text-[16px]
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
                      hover:bg-slate-50
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* MOBILE CTA */}
            <Link href="/contact">
              <button
                className="
                  mt-4
                  w-full
                  group
                  relative
                  overflow-hidden
                  px-8
                  py-4
                  rounded-[18px]
                  text-white
                  font-semibold
                  text-[15px]
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#1D3A66]
                  to-[#6288B9]
                  shadow-[0_10px_30px_rgba(13,36,68,0.30)]
                "
              >
                <span className="relative z-10">
                  Start Project
                </span>

                <div
                  className="
                    absolute
                    inset-0
                    translate-y-full
                    bg-gradient-to-r
                    from-[#6288B9]
                    to-[#A4B8D2]
                    transition-transform
                    duration-500
                    group-hover:translate-y-0
                  "
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}