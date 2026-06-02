
"use client";


const badgeClass =
  "inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};


import { motion } from "framer-motion";

export function ResultsOutcomes() {
  const results = [
    {
      title: "Reduced Entry Delays",
      desc: "Guests move efficiently without bottlenecks.",
    },
    {
      title: "Premium Guest Experience",
      desc: "Every interaction feels organised and professional.",
    },
    {
      title: "Stronger Security",
      desc: "Controlled access through predefined guest categories.",
    },
    {
      title: "Better Event Execution",
      desc: "Less stress, fewer surprises and smoother operations.",
    },
    {
      title: "Better First Impressions",
      desc: "The event begins on the right note.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 md:py-20">
      <div className="absolute right-[-180px] top-[-160px] h-[440px] w-[440px] rounded-full bg-[#6288B9]/14 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className={badgeClass}>Results & Outcomes</span>

            <h2
              className="mt-6 max-w-[720px] text-[40px] font-semibold leading-[1] tracking-[-0.055em] text-[#0D2444] sm:text-[56px] md:text-[68px]"
              style={serifFont}
            >
              What Clients{" "}
              <span className="bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
                Gain
              </span>
            </h2>
          </div>

          <p className="max-w-[410px] text-[15px] font-medium leading-[1.75] text-[#203B5C]/72">
            Clear guest movement creates better control, better perception and
            better event outcomes.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {results.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[28px] border border-[#0D2444]/10 bg-gradient-to-br from-white via-[#F4F9FF] to-[#D9E8F7] p-5 shadow-[0_18px_55px_rgba(13,36,68,0.08)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D2444] via-[#16365F] to-[#6288B9] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <p className="relative z-10 text-[34px] font-bold text-[#0D2444]/12 transition-colors duration-500 group-hover:text-white/20">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3
                className="relative z-10 mt-10 text-[24px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#0D2444] transition-colors duration-500 group-hover:text-white"
                style={serifFont}
              >
                {item.title}
              </h3>

              <p className="relative z-10 mt-4 text-[14px] font-medium leading-[1.6] text-[#203B5C]/72 transition-colors duration-500 group-hover:text-white/72">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}