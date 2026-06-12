"use client";

import { motion } from "framer-motion";

export default function GuestManagementServices() {
  const services = [
    {
      number: "01",
      title: "RSVP Management",
      desc: "Track confirmations, reminders and attendance for every invited guest.",
    },
    {
      number: "02",
      title: "Guest List Management",
      desc: "Organized guest segmentation, database management and event guest planning.",
    },
    {
      number: "03",
      title: "VIP Guest Management",
      desc: "Special handling for celebrities, founders, dignitaries and premium guests.",
    },
    {
      number: "04",
      title: "Event Registration",
      desc: "Pre-event attendee registration, verification and guest data collection.",
    },
    {
      number: "05",
      title: "Check-In Management",
      desc: "Fast entry flow, guest verification and smooth on-ground check-in experience.",
    },
    {
      number: "06",
      title: "Access Control",
      desc: "Secure guest access, zone control and movement management across the event.",
    },
    {
      number: "07",
      title: "Attendee Tracking",
      desc: "Real-time attendee tracking, entry monitoring and attendance reporting.",
    },
    {
      number: "08",
      title: "Invitation Management",
      desc: "Digital invitation planning, invite dispatch, guest confirmations and follow-ups.",
    },
    {
      number: "09",
      title: "Hospitality Coordination",
      desc: "Welcome desk support, seating assistance and premium hospitality coordination.",
    },
    {
      number: "10",
      title: "Guest Communication Management",
      desc: "WhatsApp, email and call coordination for updates, reminders and event directions.",
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
              key={service.title}
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