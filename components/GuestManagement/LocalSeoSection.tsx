"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const badgeClass =
  "inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.24em]";

const textLinkClass =
  "underline underline-offset-4 decoration-[#6288B9]/35 transition-colors duration-300 hover:text-[#315E91] hover:decoration-[#315E91]";

const cityLinkClass =
  "rounded-full border border-[#DCE6F2] bg-[#F8FBFF] px-4 py-2 text-[12px] font-bold text-[#0D2444] underline underline-offset-4 shadow-[0_8px_24px_rgba(13,36,68,0.05)] transition-colors duration-300 hover:text-[#315E91] sm:text-[13px]";

const eventLinkClass =
  "text-[13px] font-bold text-white underline underline-offset-4 transition-colors duration-300 hover:text-[#D9E8F7] sm:text-[14px]";

export default function LocalSeoSection() {
  const cities = [
    {
      title: "Mumbai",
      href: "https://www.dtsworld.in/services/guest-management/mumbai",
    },
    {
      title: "Delhi",
      href: "https://www.dtsworld.in/services/guest-management/delhi",
    },
    {
      title: "Bangalore",
      href: "https://www.dtsworld.in/services/guest-management/bangalore",
    },
    {
      title: "Hyderabad",
      href: "https://www.dtsworld.in/services/guest-management/hyderabad",
    },
    {
      title: "Pune",
      href: "https://www.dtsworld.in/services/guest-management/pune",
    },
    {
      title: "Ahmedabad",
      href: "https://www.dtsworld.in/services/guest-management/ahmedabad",
    },
    {
      title: "Goa",
      href: "https://www.dtsworld.in/services/guest-management/goa",
    },
    {
      title: "Across India",
      href: "https://www.dtsworld.in/locations",
    },
  ];

  const events = [
    {
      title: "Weddings",
      href: "https://www.dtsworld.in/services/events-weddings",
    },
    {
      title: "Corporate Events",
      href: "https://www.dtsworld.in/services/events-weddings",
    },
    {
      title: "Brand Launches",
      href: "https://www.dtsworld.in/services/pr-media-marketing",
    },
    {
      title: "Celebrity Events",
      href: "https://www.dtsworld.in/services/celebrity-management",
    },
    {
      title: "Private Gatherings",
      href: "https://www.dtsworld.in/services/events-weddings",
    },
    {
      title: "Investor Events",
      href: "https://www.dtsworld.in/services/events-weddings",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      {/* BACKGROUND */}
      <div className="absolute left-[-180px] top-[-140px] h-[400px] w-[400px] rounded-full bg-[#6288B9]/12 blur-3xl" />
      <div className="absolute right-[-220px] bottom-[-180px] h-[480px] w-[480px] rounded-full bg-[#0D2444]/8 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D244408_1px,transparent_1px),linear-gradient(to_bottom,#0D244408_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className={badgeClass}>Local SEO Coverage</span>

            <h2
              className="underline underline-offset-4 decoration-[#6288B9]/35 transition-colors duration-300 hover:text-[#315E91] hover:decoration-[#315E91]"
              style={serifFont}
            >
             
                Guest Management Services In Mumbai
              {" "}
              <span className="bg-gradient-to-r from-[#6288B9] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
                &{" "}
                
                  Across India
            
              </span>
            </h2>

            <p className="mt-6 max-w-[760px] text-[15px] font-medium leading-[1.85] text-slate-600 md:text-[17px]">
              Double Trouble Studio provides professional{" "}
              <Link
                href="https://www.dtsworld.in/services/guest-management/mumbai"
                className={textLinkClass}
              >
                guest management services in Mumbai
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/services/guest-management/delhi"
                className={textLinkClass}
              >
                Delhi
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/services/guest-management/bangalore"
                className={textLinkClass}
              >
                Bangalore
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/services/guest-management/hyderabad"
                className={textLinkClass}
              >
                Hyderabad
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/services/guest-management/pune"
                className={textLinkClass}
              >
                Pune
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/services/guest-management/ahmedabad"
                className={textLinkClass}
              >
                Ahmedabad
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/services/guest-management/goa"
                className={textLinkClass}
              >
                Goa
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.dtsworld.in/locations"
                className={textLinkClass}
              >
                across India
              </Link>
              .
            </p>

            <p className="mt-5 max-w-[760px] text-[15px] font-medium leading-[1.85] text-slate-600 md:text-[17px]">
              Our team supports premium events with RSVP management, guest list
              coordination, event registration, check-in management, VIP guest
              handling, access control and on-ground guest assistance.
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[34px] bg-gradient-to-br from-[#6288B9]/20 to-[#0D2444]/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-[34px] border border-[#DCE6F2] bg-[#F8FBFF] p-5 shadow-[0_24px_80px_rgba(13,36,68,0.08)] sm:p-7">
              <div className="rounded-[28px] bg-white p-5 shadow-[0_14px_45px_rgba(13,36,68,0.05)] sm:p-6">
                <h3
                  className="text-[28px] font-semibold leading-[1] tracking-[-0.05em] text-[#0D2444] sm:text-[34px]"
                  style={serifFont}
                >
                  Locations We Serve
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {cities.map((city) => (
                    <Link
                      key={city.title}
                      href={city.href}
                      className={cityLinkClass}
                    >
                      {city.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-[28px] bg-gradient-to-br from-[#0D2444] via-[#173B66] to-[#6288B9] p-5 text-white sm:p-6">
                <h3
                  className="text-[28px] font-semibold leading-[1] tracking-[-0.05em] sm:text-[34px]"
                  style={serifFont}
                >
                  We Support
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {events.map((event) => (
                    <div
                      key={event.title}
                      className="rounded-[18px] border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-xl"
                    >
                      <Link href={event.href} className={eventLinkClass}>
                        {event.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}