"use client";

import { motion } from "framer-motion";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const badgeClass =
  "inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.24em]";

export default function LocalSeoSection() {
  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Goa",
    "Across India",
  ];

  const events = [
    "Weddings",
    "Corporate Events",
    "Brand Launches",
    "Celebrity Events",
    "Private Gatherings",
    "Investor Events",
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
              className="mt-6 max-w-[760px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#0D2444] sm:text-[42px] md:text-[52px] lg:text-[60px]"
              style={serifFont}
            >
              Guest Management Services In{" "}
              <span className="bg-gradient-to-r from-[#6288B9] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
                Mumbai & Across India
              </span>
            </h2>

            <p className="mt-6 max-w-[760px] text-[15px] font-medium leading-[1.85] text-slate-600 md:text-[17px]">
              Double Trouble Studio provides professional guest management
              services in Mumbai, Delhi, Bangalore, Hyderabad, Pune, Ahmedabad,
              Goa and across India.
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
                    <span
                      key={city}
                      className="rounded-full border border-[#DCE6F2] bg-[#F8FBFF] px-4 py-2 text-[12px] font-bold text-[#0D2444] shadow-[0_8px_24px_rgba(13,36,68,0.05)] sm:text-[13px]"
                    >
                      {city}
                    </span>
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
                      key={event}
                      className="rounded-[18px] border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-xl"
                    >
                      <p className="text-[13px] font-bold text-white sm:text-[14px]">
                        {event}
                      </p>
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