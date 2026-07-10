"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const badgeClass =
  "inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.24em]";

const textLinkClass =
  "font-medium text-[#315E91] underline underline-offset-4 hover:text-[#315E91]";

const chipLinkClass =
  "rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-semibold leading-[1.4] text-white/90 underline underline-offset-4 backdrop-blur-xl transition-colors duration-300 hover:text-white";

export default function WhyGuestManagementMatters() {
  const points = [
    {
      title: "Guest Management For Weddings",
      href: "https://www.dtsworld.in/services/events-weddings",
    },
    {
      title: "Guest Management For Corporate Events",
      href: "https://www.dtsworld.in/services/events-weddings",
    },
    {
      title: "VIP Guest Coordination",
      href: "https://www.dtsworld.in/services/celebrity-management",
    },
    {
      title: "RSVP Management",
      href: "https://www.dtsworld.in/blog/event-rsvp-management",
    },
    {
      title: "Event Registration Systems",
      href: "https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events",
    },
    {
      title: "Access Control & Security",
      href: "https://www.dtsworld.in/blog/guest-data-privacy-luxury-events",
    },
    {
      title: "Guest Experience Optimization",
      href: "https://www.dtsworld.in/blog/how-to-design-seamless-guest-journey-luxury-events",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      {/* SOFT BACKGROUND */}
      <div className="absolute left-[-200px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#6288B9]/12 blur-3xl" />
      <div className="absolute right-[-220px] bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[#0D2444]/8 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D244408_1px,transparent_1px),linear-gradient(to_bottom,#0D244408_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[900px] text-center"
        >
          <span className={badgeClass}>Why It Matters</span>

          <h2
            className="mx-auto mt-6 max-w-[900px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#0D2444] sm:text-[42px] md:text-[52px] lg:text-[60px]"
            style={serifFont}
          >
            Why{" "}
            
              Professional Guest Management Services
            {" "}
            <span className="bg-gradient-to-r from-[#6288B9] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
              Matter
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
            A premium event is not only remembered for its decor, entertainment
            or venue. It is remembered by how smoothly every guest is invited,
            received, guided and hosted.
          </p>
        </motion.div>

        {/* SEO CONTENT CARD */}
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-[34px] border border-[#DCE6F2] bg-[#F8FBFF] p-5 shadow-[0_24px_80px_rgba(13,36,68,0.08)] sm:p-7 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            {/* LEFT KEYWORDS */}
            <div className="rounded-[28px] bg-gradient-to-br from-[#0D2444] via-[#173B66] to-[#6288B9] p-6 text-white shadow-[0_24px_70px_rgba(13,36,68,0.18)]">
              <h3
                className="text-[30px] font-semibold leading-[1] tracking-[-0.05em] sm:text-[36px]"
                style={serifFont}
              >
                Built For Smooth Guest Flow
              </h3>

              <div className="mt-7 flex flex-wrap gap-3">
                {points.map((point) => (
                  <Link
                    key={point.title}
                    href={point.href}
                    className={chipLinkClass}
                  >
                    {point.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT SEO TEXT */}
            <div className="space-y-5 text-left">
              <p className="text-[15px] font-medium leading-[1.9] text-slate-600 md:text-[17px]">
                Professional guest management services are essential for events
                where timing, hospitality, security and first impressions matter.
                Whether it is a{" "}
                <Link
                  href="https://www.dtsworld.in/blog/luxury-event-wedding-planning-mumbai-india-2026"
                  className={textLinkClass}
                >
                  luxury wedding
                </Link>
                , a{" "}
                <Link
                  href="https://www.dtsworld.in/services/events-weddings"
                  className={textLinkClass}
                >
                  corporate conference
                </Link>
                , a{" "}
                <Link
                  href="https://www.dtsworld.in/services/celebrity-management"
                  className={textLinkClass}
                >
                  celebrity event
                </Link>
                , a{" "}
                <Link
                  href="https://www.dtsworld.in/services/pr-media-marketing"
                  className={textLinkClass}
                >
                  brand launch
                </Link>{" "}
                or a{" "}
                <Link
                  href="https://www.dtsworld.in/services/guest-management"
                  className={textLinkClass}
                >
                  private VIP experience
                </Link>
                , the way guests are managed directly affects the overall event
                experience. A strong guest management system ensures that every
                attendee is tracked, verified, guided and assisted from the first
                invitation to the final event-day interaction.
              </p>

              <p className="text-[15px] font-medium leading-[1.9] text-slate-600 md:text-[17px]">
                <Link
                  href="https://www.dtsworld.in/services/events-weddings"
                  className={textLinkClass}
                >
                  Guest management for weddings
                </Link>{" "}
                is especially important because weddings, including{" "}
                <Link
                  href="https://www.dtsworld.in/blog/luxury-event-wedding-planning-mumbai-india-2026"
                  className={textLinkClass}
                >
                  destination weddings
                </Link>
                , often involve multiple guest categories, family groups, VIP
                guests, hospitality teams, rooming lists, entry desks and
                event-day coordination. With proper{" "}
                <Link
                  href="https://www.dtsworld.in/blog/event-rsvp-management"
                  className={textLinkClass}
                >
                  RSVP management
                </Link>
                ,{" "}
                <Link
                  href="https://www.dtsworld.in/blog/How-to-build-segment-high-profile-guest-list"
                  className={textLinkClass}
                >
                  guest list management
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.dtsworld.in/blog/on-site-guest-flow-registration-entry-seating-experience-mapping"
                  className={textLinkClass}
                >
                  check-in management
                </Link>
                , hosts can understand who is attending, who needs follow-up,
                who requires special assistance and how each guest should be
                welcomed. This creates a smoother arrival experience and reduces
                confusion at the venue.
              </p>

              <p className="text-[15px] font-medium leading-[1.9] text-slate-600 md:text-[17px]">
                For{" "}
                <Link
                  href="https://www.dtsworld.in/services/events-weddings"
                  className={textLinkClass}
                >
                  corporate events
                </Link>
                , professional guest management helps maintain structure and
                brand reputation.{" "}
                <Link
                  href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
                  className={textLinkClass}
                >
                  Event registration systems
                </Link>
                ,{" "}
                <Link
                  href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
                  className={textLinkClass}
                >
                  attendee verification
                </Link>
                ,{" "}
                <Link
                  href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
                  className={textLinkClass}
                >
                  badge coordination
                </Link>
                , access control and{" "}
                <Link
                  href="https://www.dtsworld.in/blog/event-guest-analytics-behavior-engagement-satisfaction"
                  className={textLinkClass}
                >
                  real-time guest tracking
                </Link>{" "}
                make conferences, investor meetings, product launches and
                networking events more efficient. When guests enter quickly and
                receive the right information at the right time, the event feels
                more premium, organized and professionally executed.
              </p>

              <p className="text-[15px] font-medium leading-[1.9] text-slate-600 md:text-[17px]">
                <Link
                  href="https://www.dtsworld.in/services/celebrity-management"
                  className={textLinkClass}
                >
                  VIP guest coordination
                </Link>{" "}
                is another major part of effective event management.
                Celebrities, founders, dignitaries, speakers, investors and
                high-value guests often require dedicated handling, separate
                entry flow, privacy, security support and personalized
                hospitality. A trained guest management team ensures VIP movement
                is controlled without disturbing the main guest experience.
              </p>

              <p className="text-[15px] font-medium leading-[1.9] text-slate-600 md:text-[17px]">
                <Link
                  href="https://www.dtsworld.in/blog/guest-data-privacy-luxury-events"
                  className={textLinkClass}
                >
                  Access control and security
                </Link>{" "}
                are equally important. A clear guest list, event registration
                process and entry verification system help prevent unauthorized
                access, reduce gate pressure and allow teams to manage guest
                movement with confidence. In premium events,{" "}
                <Link
                  href="https://www.dtsworld.in/blog/how-to-design-seamless-guest-journey-luxury-events"
                  className={textLinkClass}
                >
                  guest experience optimization
                </Link>{" "}
                is not optional. It is the difference between a crowded entry
                point and a seamless welcome. With the right systems, every
                guest feels expected, assisted and valued.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}