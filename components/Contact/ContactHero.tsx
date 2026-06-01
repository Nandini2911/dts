"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section
      className="
        relative
        min-h-[90vh]
        overflow-hidden
        flex
        items-center
        bg-gradient-to-br
        from-white
        via-[#F7FAFD]
        to-[#EEF4FA]
        py-20
      "
    >
      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(#0D2444_1px,transparent_1px),linear-gradient(to_right,#0D2444_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Floating Blob 1 */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-100px]
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#6288B9]/20
          blur-[120px]
        "
      />

      {/* Floating Blob 2 */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-100px]
          top-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#0D2444]/10
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="
                glass
                inline-flex
                items-center
                rounded-full
                px-5
                py-2
                text-xs
                uppercase
                tracking-[4px]
                font-semibold
                text-[#6288B9]
              "
            >
              Contact Us
            </div>

            <h1
              className="
                mt-8
                text-5xl
                md:text-6xl
                xl:text-7xl
                font-bold
                leading-[1]
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              <span className="text-[#0D2444]">
                Let's Create
              </span>

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#355E8E]
                  to-[#6288B9]
                  bg-clip-text
                  text-transparent
                "
              >
                Something Amazing
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                text-slate-600
                leading-relaxed
              "
            >
              Have a project in mind, looking for collaboration,
              or simply want to connect? We'd love to hear from
              you and help turn your ideas into reality.
            </p>

            {/* Premium Cards */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              <div className="glass rounded-2xl p-4">
                <p className="text-[#6288B9] text-sm font-semibold">
                  Fast
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Response Time
                </p>
              </div>

              <div className="glass rounded-2xl p-4">
                <p className="text-[#6288B9] text-sm font-semibold">
                  Premium
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Support
                </p>
              </div>

              <div className="glass rounded-2xl p-4">
                <p className="text-[#6288B9] text-sm font-semibold">
                  Custom
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Solutions
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
  className="
  mt-15
    relative
    overflow-hidden
    max-w-[500px]
    w-full
    rounded-[32px]
    p-[1px]
    bg-gradient-to-br
    from-[#6288B9]
    via-white
    to-[#0D2444]
    shadow-[0_20px_80px_rgba(13,36,68,0.15)]
    transition-all
    duration-500
    hover:shadow-[0_25px_90px_rgba(13,36,68,0.22)]
  "
>
              {/* Glow */}
              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  h-56
                  w-56
                  rounded-full
                  bg-[#6288B9]/20
                  blur-[100px]
                "
              />

              <div
                className="
                  absolute
                  -bottom-20
                  -left-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#0D2444]/15
                  blur-[90px]
                "
              />

              {/* Form Container */}
              <div
                className="
                  glass
                  relative
                  z-10
                  rounded-[31px]
                  p-6
                  lg:p-7
                "
              >
                <h3
                  className="
                    text-3xl
                    font-bold
                    bg-gradient-to-r
                    from-[#0D2444]
                    via-[#355E8E]
                    to-[#6288B9]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Get In Touch
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  We'd love to hear about your next project.
                </p>

                <form className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/50
                      bg-white/70
                      px-4
                      text-sm
                      outline-none
                    "
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/50
                      bg-white/70
                      px-4
                      text-sm
                      outline-none
                    "
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/50
                      bg-white/70
                      px-4
                      text-sm
                      outline-none
                    "
                  />

                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/50
                      bg-white/70
                      p-4
                      text-sm
                      outline-none
                      resize-none
                    "
                  />

                  <button
                    type="submit"
                    className="
                      w-full
                      h-12
                      rounded-xl
                      text-white
                      font-semibold
                      bg-gradient-to-r
                      from-[#0D2444]
                      via-[#355E8E]
                      to-[#6288B9]
                      shadow-[0_10px_30px_rgba(13,36,68,0.25)]
                      transition-all
                      duration-500
                      hover:scale-[1.02]
                    "
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}