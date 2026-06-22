"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Guest Management",
  "Celebrity Management",
  "Events & Weddings",
  "PR, Media & Digital Marketing",
  "Web Development & SEO",
  "AI Video & Video Editing",
];

export default function ContactHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setStatus("Mail successfully sent.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setIsSuccess(false);
        setStatus(data.message || "Mail not sent. Please try again.");
      }
    } catch {
      setIsSuccess(false);
      setStatus("Mail not sent. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
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
                font-semibold
                uppercase
                tracking-[4px]
                text-[#6288B9]
              "
            >
              Contact Us
            </div>

            <h1
              className="
                mt-8
                text-5xl
                font-bold
                leading-[1]
                md:text-6xl
                xl:text-7xl
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              <span className="text-[#0D2444]">Let&apos;s Create</span>

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

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600">
              Have a project in mind, looking for collaboration, or simply want
              to connect? We&apos;d love to hear from you and help turn your
              ideas into reality.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="glass rounded-2xl p-4">
                <p className="text-sm font-semibold text-[#6288B9]">Fast</p>
                <p className="mt-1 text-sm text-slate-600">Response Time</p>
              </div>

              <div className="glass rounded-2xl p-4">
                <p className="text-sm font-semibold text-[#6288B9]">Premium</p>
                <p className="mt-1 text-sm text-slate-600">Support</p>
              </div>

              <div className="glass rounded-2xl p-4">
                <p className="text-sm font-semibold text-[#6288B9]">Custom</p>
                <p className="mt-1 text-sm text-slate-600">Solutions</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="
                relative
                mt-15
                w-full
                max-w-[500px]
                overflow-hidden
                rounded-[32px]
                bg-gradient-to-br
                from-[#6288B9]
                via-white
                to-[#0D2444]
                p-[1px]
                shadow-[0_20px_80px_rgba(13,36,68,0.15)]
                transition-all
                duration-500
                hover:shadow-[0_25px_90px_rgba(13,36,68,0.22)]
              "
            >
              <div
                className="
                  absolute
                  -right-20
                  -top-20
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
                <h2
                  className="
                    bg-gradient-to-r
                    from-[#0D2444]
                    via-[#355E8E]
                    to-[#6288B9]
                    bg-clip-text
                    text-3xl
                    font-bold
                    text-transparent
                  "
                >
                  Get In Touch
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  We&apos;d love to hear about your next project.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/50
                      bg-white/70
                      px-4
                      text-sm
                      text-slate-900
                      outline-none
                      transition
                      placeholder:text-slate-500
                      focus:border-[#6288B9]
                      focus:ring-2
                      focus:ring-[#6288B9]/20
                    "
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    autoComplete="email"
                    required
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/50
                      bg-white/70
                      px-4
                      text-sm
                      text-slate-900
                      outline-none
                      transition
                      placeholder:text-slate-500
                      focus:border-[#6288B9]
                      focus:ring-2
                      focus:ring-[#6288B9]/20
                    "
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    autoComplete="tel"
                    required
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/50
                      bg-white/70
                      px-4
                      text-sm
                      text-slate-900
                      outline-none
                      transition
                      placeholder:text-slate-500
                      focus:border-[#6288B9]
                      focus:ring-2
                      focus:ring-[#6288B9]/20
                    "
                  />

                  {/* Services Dropdown */}
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      aria-label="Select a service"
                      className="
                        h-12
                        w-full
                        cursor-pointer
                        appearance-none
                        rounded-xl
                        border
                        border-white/50
                        bg-white/70
                        px-4
                        pr-11
                        text-sm
                        text-slate-900
                        outline-none
                        transition
                        focus:border-[#6288B9]
                        focus:ring-2
                        focus:ring-[#6288B9]/20
                      "
                    >
                      <option value="" disabled>
                        Select a Service
                      </option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>

                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        h-5
                        w-5
                        -translate-y-1/2
                        text-[#0D2444]
                      "
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-white/50
                      bg-white/70
                      p-4
                      text-sm
                      text-slate-900
                      outline-none
                      transition
                      placeholder:text-slate-500
                      focus:border-[#6288B9]
                      focus:ring-2
                      focus:ring-[#6288B9]/20
                    "
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      h-12
                      w-full
                      rounded-xl
                      bg-gradient-to-r
                      from-[#0D2444]
                      via-[#355E8E]
                      to-[#6288B9]
                      font-semibold
                      text-white
                      shadow-[0_10px_30px_rgba(13,36,68,0.25)]
                      transition-all
                      duration-500
                      hover:scale-[1.02]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {status && (
                    <p
                      role="status"
                      aria-live="polite"
                      className={`text-center text-sm font-medium ${
                        isSuccess ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}