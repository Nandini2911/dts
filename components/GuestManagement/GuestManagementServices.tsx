"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const titleLinkClass =
  "underline underline-offset-4 transition-colors duration-300 group-hover:text-white";

const descLinkClass =
  "font-medium text-[#0D2444] underline underline-offset-4 transition-colors duration-300 hover:text-[#315E91] group-hover:text-white";

export default function GuestManagementServices() {
  const services = [
    {
      number: "01",
      title: (
        <Link
          href="https://www.dtsworld.in/blog/event-rsvp-management"
          className={titleLinkClass}
        >
          RSVP Management
        </Link>
      ),
      titleText: "RSVP Management",
      desc: (
        <>
          <Link
            href="https://www.dtsworld.in/blog/event-rsvp-management"
            className={descLinkClass}
          >
            Track confirmations
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/post-event-guest-follow-up"
            className={descLinkClass}
          >
            reminders
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.dtsworld.in/blog/event-guest-analytics-behavior-engagement-satisfaction"
            className={descLinkClass}
          >
            attendance
          </Link>{" "}
          for every invited guest.
        </>
      ),
    },
    {
      number: "02",
      title: (
        <Link
          href="https://www.dtsworld.in/blog/How-to-build-segment-high-profile-guest-list"
          className={titleLinkClass}
        >
          Guest List Management
        </Link>
      ),
      titleText: "Guest List Management",
      desc: (
        <>
          Organized{" "}
          <Link
            href="https://www.dtsworld.in/blog/How-to-build-segment-high-profile-guest-list"
            className={descLinkClass}
          >
            guest segmentation
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/guest-data-privacy-luxury-events"
            className={descLinkClass}
          >
            database management
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.dtsworld.in/blog/managing-complex-guest-lists-luxury-events"
            className={descLinkClass}
          >
            event guest planning
          </Link>
          .
        </>
      ),
    },
    {
      number: "03",
      title: (
        <Link
          href="https://www.dtsworld.in/services/celebrity-management"
          className={titleLinkClass}
        >
          VIP Guest Management
        </Link>
      ),
      titleText: "VIP Guest Management",
      desc: (
        <>
          Special handling for{" "}
          <Link
            href="https://www.dtsworld.in/services/celebrity-management"
            className={descLinkClass}
          >
            celebrities
          </Link>
          ,{" "}
          <Link href="https://www.dtsworld.in/about" className={descLinkClass}>
            founders
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/guest-management"
            className={descLinkClass}
          >
            dignitaries
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.dtsworld.in/blog/guest-personalization-strategies-luxury-events"
            className={descLinkClass}
          >
            premium guests
          </Link>
          .
        </>
      ),
    },
    {
      number: "04",
      title: (
        <Link
          href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
          className={titleLinkClass}
        >
          Event Registration
        </Link>
      ),
      titleText: "Event Registration",
      desc: (
        <>
          Pre-event{" "}
          <Link
            href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
            className={descLinkClass}
          >
            attendee registration
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/on-site-guest-flow-registration-entry-seating-experience-mapping"
            className={descLinkClass}
          >
            verification
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.dtsworld.in/blog/guest-data-privacy-luxury-events"
            className={descLinkClass}
          >
            guest data collection
          </Link>
          .
        </>
      ),
    },
    {
      number: "05",
      title: (
        <Link
          href="https://www.dtsworld.in/blog/on-site-guest-flow-registration-entry-seating-experience-mapping"
          className={titleLinkClass}
        >
          Check-In Management
        </Link>
      ),
      titleText: "Check-In Management",
      desc: (
        <>
          <Link
            href="https://www.dtsworld.in/blog/on-site-guest-flow-registration-entry-seating-experience-mapping"
            className={descLinkClass}
          >
            Fast entry flow
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
            className={descLinkClass}
          >
            guest verification
          </Link>{" "}
          and smooth on-ground{" "}
          <Link
            href="https://www.dtsworld.in/blog/how-to-design-seamless-guest-journey-luxury-events"
            className={descLinkClass}
          >
            check-in experience
          </Link>
          .
        </>
      ),
    },
    {
      number: "06",
      title: (
        <Link
          href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
          className={titleLinkClass}
        >
          Access Control
        </Link>
      ),
      titleText: "Access Control",
      desc: (
        <>
          <Link
            href="https://www.dtsworld.in/blog/guest-data-privacy-luxury-events"
            className={descLinkClass}
          >
            Secure guest access
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/on-site-guest-flow-registration-entry-seating-experience-mapping"
            className={descLinkClass}
          >
            zone control
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.dtsworld.in/services/guest-management"
            className={descLinkClass}
          >
            movement management
          </Link>{" "}
          across the event.
        </>
      ),
    },
    {
      number: "07",
      title: (
        <Link
          href="https://www.dtsworld.in/blog/event-guest-analytics-behavior-engagement-satisfaction"
          className={titleLinkClass}
        >
          Attendee Tracking
        </Link>
      ),
      titleText: "Attendee Tracking",
      desc: (
        <>
          Monitor{" "}
          <Link
            href="https://www.dtsworld.in/blog/event-guest-analytics-behavior-engagement-satisfaction"
            className={descLinkClass}
          >
            real-time attendee tracking
          </Link>
          , entry monitoring and{" "}
          <Link
            href="https://www.dtsworld.in/blog/event-guest-analytics-behavior-engagement-satisfaction"
            className={descLinkClass}
          >
            attendance reporting
          </Link>
          .
        </>
      ),
    },
    {
      number: "08",
      title: (
        <Link
          href="https://www.dtsworld.in/blog/event-rsvp-management"
          className={titleLinkClass}
        >
          Invitation Management
        </Link>
      ),
      titleText: "Invitation Management",
      desc: (
        <>
          <Link
            href="https://www.dtsworld.in/blog/event-rsvp-management"
            className={descLinkClass}
          >
            Digital invitation planning
          </Link>
          , invite dispatch,{" "}
          <Link
            href="https://www.dtsworld.in/blog/event-rsvp-management"
            className={descLinkClass}
          >
            guest confirmations
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.dtsworld.in/blog/post-event-guest-follow-up"
            className={descLinkClass}
          >
            follow-ups
          </Link>
          .
        </>
      ),
    },
    {
      number: "09",
      title: (
        <Link
          href="https://www.dtsworld.in/services/events-weddings"
          className={titleLinkClass}
        >
          Hospitality Coordination
        </Link>
      ),
      titleText: "Hospitality Coordination",
      desc: (
        <>
          <Link
            href="https://www.dtsworld.in/services/guest-management"
            className={descLinkClass}
          >
            Welcome desk support
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/how-to-design-seamless-guest-journey-luxury-events"
            className={descLinkClass}
          >
            seating assistance
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={descLinkClass}
          >
            premium hospitality coordination
          </Link>
          .
        </>
      ),
    },
    {
      number: "10",
      title: (
        <Link
          href="https://www.dtsworld.in/blog/event-rsvp-management"
          className={titleLinkClass}
        >
          Guest Communication Management
        </Link>
      ),
      titleText: "Guest Communication Management",
      desc: (
        <>
          <Link
            href="https://www.dtsworld.in/blog/post-event-guest-follow-up"
            className={descLinkClass}
          >
            WhatsApp, email and call coordination
          </Link>{" "}
          for updates,{" "}
          <Link
            href="https://www.dtsworld.in/blog/post-event-guest-follow-up"
            className={descLinkClass}
          >
            reminders
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.dtsworld.in/blog/how-to-design-seamless-guest-journey-luxury-events"
            className={descLinkClass}
          >
            event directions
          </Link>
          .
        </>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F8FBFF] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      {/* SOFT BACKGROUND */}
      <div className="absolute left-[-180px] top-[-120px] h-[380px] w-[380px] rounded-full bg-[#6288B9]/15 blur-3xl" />
      <div className="absolute right-[-220px] bottom-[-160px] h-[460px] w-[460px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D24440a_1px,transparent_1px),linear-gradient(to_bottom,#0D24440a_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[850px] text-center"
        >
          <span className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.24em]">
            Our Services
          </span>

          <h2
            className="mx-auto mt-6 max-w-[850px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#0D2444] sm:text-[42px] md:text-[52px] lg:text-[60px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            Guest Management Services{" "}
            <span className="bg-gradient-to-r from-[#6288B9] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
              We Provide
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
            From RSVP tracking and invitation management to attendee tracking,
            hospitality coordination and guest communication, our guest
            management system keeps every event entry smooth, organized and
            premium.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.titleText}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-[28px] border border-[#DCE6F2] bg-white p-6 shadow-[0_18px_55px_rgba(13,36,68,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-[#6288B9] hover:shadow-[0_26px_70px_rgba(13,36,68,0.14)]"
            >
              <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-[#0D2444] via-[#173B66] to-[#6288B9] transition-transform duration-500 group-hover:translate-y-0" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F6FF] text-[15px] font-black text-[#0D2444] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0D2444]">
                    {service.number}
                  </div>

                  <div className="h-[1px] w-16 bg-gradient-to-r from-[#6288B9] to-transparent transition-colors duration-300 group-hover:from-white/70" />
                </div>

                <h3
                  className="mt-8 text-[24px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0D2444] transition-colors duration-300 group-hover:text-white"
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  {service.title}
                </h3>

                <p className="mt-4 text-[14px] font-medium leading-[1.8] text-slate-600 transition-colors duration-300 group-hover:text-white/80 md:text-[15px]">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}