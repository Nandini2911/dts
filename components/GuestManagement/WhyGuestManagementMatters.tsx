"use client";

import { motion } from "framer-motion";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const badgeClass =
  "inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.24em]";

export default function WhyGuestManagementMatters() {
  const points = [
    "Guest Management For Weddings",
    "Guest Management For Corporate Events",
    "VIP Guest Coordination",
    "RSVP Management",
    "Event Registration Systems",
    "Access Control & Security",
    "Guest Experience Optimization",
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
            Why Professional Guest Management{" "}
            <span className="bg-gradient-to-r from-[#6288B9] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
              Services Matter
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
                  <span
                    key={point}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-semibold leading-[1.4] text-white/90 backdrop-blur-xl"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT SEO TEXT */}
            <div className="space-y-5 text-left">
              <p className="text-[15px] font-medium leading-[1.9] text-slate-600 md:text-[17px]">
                Professional guest management services are essential for events
                where timing, hospitality, security and first impressions matter.
                Whether it is a luxury wedding, a corporate conference, a
                celebrity event, a brand launch or a private VIP experience, the
                way guests are managed directly affects the overall event
                experience. A strong guest management system ensures that every
                attendee is tracked, verified, guided and assisted from the first
                invitation to the final event-day interaction.
              </p>

              <p className="text-[15px] font-medium leading-[1.9] text-slate-600 md:text-[17px]">
                Guest management for weddings is especially important because
                weddings often involve multiple guest categories, family groups,
                VIP guests, hospitality teams, rooming lists, entry desks and
                event-day coordination. With proper RSVP management, guest list
                management and check-in management, hosts can understand who is
                attending, who needs follow-up, who requires special assistance
                and how each guest should be welcomed. This creates a smoother
                arrival experience and reduces confusion at the venue.
              </p>

              <p className="text-[15px] font-medium leading-[1.9] text-slate-600 md:text-[17px]">
                For corporate events, professional guest management helps
                maintain structure and brand reputation. Event registration
                systems, attendee verification, badge coordination, access
                control and real-time guest tracking make conferences, investor
                meetings, product launches and networking events more efficient.
                When guests enter quickly and receive the right information at
                the right time, the event feels more premium, organized and
                professionally executed.
              </p>

              <p className="text-[15px] font-medium leading-[1.9] text-slate-600 md:text-[17px]">
                VIP guest coordination is another major part of effective event
                management. Celebrities, founders, dignitaries, speakers,
                investors and high-value guests often require dedicated handling,
                separate entry flow, privacy, security support and personalized
                hospitality. A trained guest management team ensures VIP movement
                is controlled without disturbing the main guest experience.
              </p>

              <p className="text-[15px] font-medium leading-[1.9] text-slate-600 md:text-[17px]">
                Access control and security are equally important. A clear guest
                list, event registration process and entry verification system
                help prevent unauthorized access, reduce gate pressure and allow
                teams to manage guest movement with confidence. In premium
                events, guest experience optimization is not optional. It is the
                difference between a crowded entry point and a seamless welcome.
                With the right systems, every guest feels expected, assisted and
                valued.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}