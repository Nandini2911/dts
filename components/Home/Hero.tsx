"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          message: "",
        });
      } else {
        setIsSuccess(false);
        setStatus(data.message || "Mail not sent. Please try again.");
      }
    } catch (error) {
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
        overflow-hidden
        min-h-screen
        bg-[#020817]
      "
      aria-label="Double Trouble Studio creative digital agency in India"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute
          inset-0
          bg-center
          bg-cover
          bg-no-repeat
          scale-[1.02]
        "
        style={{
          backgroundImage: "url('/abouthero.jpg')",
        }}
        role="img"
        aria-label="Creative digital studio offering branding, PR, events, web development and AI video production in India"
      />

      {/* OVERLAY FOR READABILITY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/5
          via-black/25
          to-black/45
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full

          max-w-[1240px]
          2xl:max-w-[1500px]
          min-[1800px]:max-w-[1650px]
          min-[2200px]:max-w-[1850px]

          px-5
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-6
          2xl:px-10
          min-[1800px]:px-14
          min-[2200px]:px-16

          pt-[120px]
          sm:pt-[135px]
          md:pt-[145px]
          lg:pt-[155px]
          xl:pt-[160px]
          2xl:pt-[175px]
          min-[1800px]:pt-[190px]
          min-[2200px]:pt-[215px]

          pb-[65px]
          sm:pb-[75px]
          md:pb-[85px]
          lg:pb-[90px]
          2xl:pb-[110px]
          min-[1800px]:pb-[130px]
          min-[2200px]:pb-[150px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2

            gap-10
            sm:gap-12
            md:gap-14
            lg:gap-14
            xl:gap-16
            2xl:gap-20
            min-[1800px]:gap-24
            min-[2200px]:gap-28

            items-center
            min-h-[calc(100vh-175px)]
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              max-w-[580px]
              md:max-w-[640px]
              2xl:max-w-[760px]
              min-[1800px]:max-w-[860px]
            "
          >
            {/* LABEL */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                sm:px-5
                py-2
                sm:py-2.5
                rounded-full
                border
                border-white/10
                backdrop-blur-xl
                mb-5
                sm:mb-6
              "
            >
              <div className="w-2 h-2 rounded-full bg-white/60" />

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  2xl:text-[11px]
                  min-[1800px]:text-[12px]
                  uppercase
                  tracking-[2px]
                  sm:tracking-[2.4px]
                  text-white/70
                  font-medium
                "
              >
                Creative Digital Studio in India
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="
                text-[38px]
                min-[390px]:text-[42px]
                sm:text-[48px]
                md:text-[58px]
                lg:text-[56px]
                xl:text-[62px]
                2xl:text-[76px]
                min-[1800px]:text-[88px]
                min-[2200px]:text-[104px]

                leading-[1.08]
                sm:leading-[1.07]
                md:leading-[1.06]
                2xl:leading-[1.04]

                tracking-[-2px]
                sm:tracking-[-2.5px]
                md:tracking-[-3px]
                2xl:tracking-[-4px]
                min-[1800px]:tracking-[-5px]

                font-bold
                text-white
                max-w-[580px]
                2xl:max-w-[760px]
                min-[1800px]:max-w-[900px]
              "
              style={{
                fontFamily: "New York, ui-serif, Georgia, serif",
              }}
            >
              Creative Agency
              <span
                className="
                  block
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#e8edf4]
                  via-[#032753]
                  to-[#020b15]
                "
              >
                For Brands, Events
              </span>
              & Digital Growth
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                sm:mt-6
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                2xl:text-[18px]
                min-[1800px]:text-[20px]
                min-[2200px]:text-[22px]

                leading-[27px]
                sm:leading-[29px]
                md:leading-[31px]
                2xl:leading-[34px]
                min-[1800px]:leading-[38px]
                min-[2200px]:leading-[42px]

                text-white/65
                max-w-[520px]
                md:max-w-[560px]
                2xl:max-w-[680px]
                min-[1800px]:max-w-[780px]
              "
            >
              Double Trouble Studio is a creative digital agency in India
              offering branding, PR, event management, guest management, digital
              marketing, website development, AI video production and VFX
              services for hospitality, luxury, restaurant, fashion and
              lifestyle brands.
            </p>

            {/* BUTTONS */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                flex-wrap
                gap-4
                mt-8
                sm:mt-9
                2xl:mt-10
              "
            >
              <Link
                href="/contact"
                aria-label="Start a project with Double Trouble Studio"
                className="w-full sm:w-auto"
              >
                <button
                  type="button"
                  className="
                    group
                    h-[52px]
                    2xl:h-[58px]
                    min-[1800px]:h-[64px]
                    w-full
                    sm:w-auto
                    px-7
                    2xl:px-9
                    min-[1800px]:px-11
                    rounded-full
                    bg-white
                    text-[#0D2444]
                    text-[14px]
                    2xl:text-[15px]
                    min-[1800px]:text-[17px]
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-3
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Start Project
                  <ArrowRight className="w-4 h-4 min-[1800px]:w-5 min-[1800px]:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>

              <Link
                href="/work"
                aria-label="View Double Trouble Studio portfolio and creative work"
                className="w-full sm:w-auto"
              >
                <button
                  type="button"
                  className="
                    h-[52px]
                    2xl:h-[58px]
                    min-[1800px]:h-[64px]
                    w-full
                    sm:w-auto
                    px-7
                    2xl:px-9
                    min-[1800px]:px-11
                    rounded-full
                    border
                    border-white/10
                    bg-white/10
                    backdrop-blur-xl
                    text-white
                    text-[14px]
                    2xl:text-[15px]
                    min-[1800px]:text-[17px]
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-white/15
                  "
                >
                  View Work
                </button>
              </Link>
            </div>

            {/* STATS */}
            <div
              className="
                flex
                gap-6
                sm:gap-8
                2xl:gap-12
                min-[1800px]:gap-16
                flex-wrap
                mt-10
                sm:mt-12
                2xl:mt-14
              "
            >
              <div>
                <h3
                  className="
                    text-[24px]
                    sm:text-[26px]
                    2xl:text-[34px]
                    min-[1800px]:text-[42px]
                    font-bold
                    text-white
                  "
                >
                  120+
                </h3>

                <p className="text-white/45 text-xs 2xl:text-sm min-[1800px]:text-base mt-1">
                  Brand Projects
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-[24px]
                    sm:text-[26px]
                    2xl:text-[34px]
                    min-[1800px]:text-[42px]
                    font-bold
                    text-white
                  "
                >
                  98%
                </h3>

                <p className="text-white/45 text-xs 2xl:text-sm min-[1800px]:text-base mt-1">
                  Client Satisfaction
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-[24px]
                    sm:text-[26px]
                    2xl:text-[34px]
                    min-[1800px]:text-[42px]
                    font-bold
                    text-white
                  "
                >
                  8+
                </h3>

                <p className="text-white/45 text-xs 2xl:text-sm min-[1800px]:text-base mt-1">
                  Years Experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              relative
              flex
              justify-center
              lg:justify-end
              w-full
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[26px]
                sm:rounded-[30px]
                min-[1800px]:rounded-[36px]
                border
                border-white/10
                bg-white/10
                backdrop-blur-2xl
                p-5
                sm:p-7
                md:p-8
                2xl:p-10
                min-[1800px]:p-12
                w-full
                max-w-[460px]
                2xl:max-w-[540px]
                min-[1800px]:max-w-[620px]
                min-[2200px]:max-w-[700px]
              "
            >
              <div className="relative z-10">
                {/* SMALL TEXT */}
                <p
                  className="
                    uppercase
                    tracking-[2px]
                    text-[10px]
                    2xl:text-[11px]
                    min-[1800px]:text-[12px]
                    text-white/45
                    font-medium
                  "
                >
                  Contact Us
                </p>

                {/* TITLE */}
                <h2
                  className="
                    mt-3
                    text-[28px]
                    sm:text-[30px]
                    md:text-[32px]
                    2xl:text-[42px]
                    min-[1800px]:text-[50px]
                    min-[2200px]:text-[58px]

                    leading-[1.05]
                    tracking-[-1.8px]
                    sm:tracking-[-2px]
                    2xl:tracking-[-3px]

                    font-bold
                    text-white
                    max-w-[320px]
                    2xl:max-w-[430px]
                    min-[1800px]:max-w-[520px]
                  "
                  style={{
                    fontFamily: "New York, ui-serif, Georgia, serif",
                  }}
                >
                  Let’s Build Your Brand Online
                </h2>

                {/* TEXT */}
                <p
                  className="
                    mt-4
                    text-[14px]
                    2xl:text-[15px]
                    min-[1800px]:text-[17px]
                    min-[2200px]:text-[19px]
                    leading-7
                    2xl:leading-8
                    min-[1800px]:leading-9
                    text-white/55
                  "
                >
                  Share your project vision for branding, PR, events, digital
                  marketing, website development or AI video production.
                </p>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="
                    space-y-4
                    min-[1800px]:space-y-5
                    mt-6
                    sm:mt-7
                    min-[1800px]:mt-9
                  "
                  aria-label="Project inquiry form"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    autoComplete="name"
                    aria-label="Your Name"
                    required
                    className="
                      w-full
                      h-[50px]
                      sm:h-[52px]
                      2xl:h-[58px]
                      min-[1800px]:h-[66px]
                      px-5
                      min-[1800px]:px-6
                      rounded-2xl
                      min-[1800px]:rounded-[22px]
                      border
                      border-white/10
                      bg-white/10
                      backdrop-blur-xl
                      text-white
                      text-[14px]
                      2xl:text-[15px]
                      min-[1800px]:text-[17px]
                      outline-none
                      placeholder:text-white/30
                      focus:border-[#A8BEDB]
                    "
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    autoComplete="email"
                    aria-label="Email Address"
                    required
                    className="
                      w-full
                      h-[50px]
                      sm:h-[52px]
                      2xl:h-[58px]
                      min-[1800px]:h-[66px]
                      px-5
                      min-[1800px]:px-6
                      rounded-2xl
                      min-[1800px]:rounded-[22px]
                      border
                      border-white/10
                      bg-white/10
                      backdrop-blur-xl
                      text-white
                      text-[14px]
                      2xl:text-[15px]
                      min-[1800px]:text-[17px]
                      outline-none
                      placeholder:text-white/30
                      focus:border-[#A8BEDB]
                    "
                  />

                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    aria-label="Tell us about your project"
                    required
                    className="
                      w-full
                      min-h-[120px]
                      2xl:min-h-[150px]
                      min-[1800px]:min-h-[180px]
                      p-5
                      min-[1800px]:p-6
                      rounded-[22px]
                      min-[1800px]:rounded-[26px]
                      border
                      border-white/10
                      bg-white/10
                      backdrop-blur-xl
                      text-white
                      text-[14px]
                      2xl:text-[15px]
                      min-[1800px]:text-[17px]
                      outline-none
                      resize-none
                      placeholder:text-white/30
                      focus:border-[#A8BEDB]
                    "
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    aria-label="Send project inquiry"
                    className="
                      group
                      w-full
                      h-[54px]
                      2xl:h-[60px]
                      min-[1800px]:h-[68px]
                      rounded-2xl
                      min-[1800px]:rounded-[22px]
                      bg-white
                      text-[#0D2444]
                      text-[14px]
                      2xl:text-[15px]
                      min-[1800px]:text-[17px]
                      font-semibold
                      flex
                      items-center
                      justify-center
                      gap-3
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      disabled:opacity-60
                      disabled:cursor-not-allowed
                    "
                  >
                    {loading ? "Sending..." : "Send Inquiry"}

                    {!loading && (
                      <ArrowRight className="w-4 h-4 min-[1800px]:w-5 min-[1800px]:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </button>

                  {status && (
                    <p
                      className={`
                        text-center
                        text-sm
                        mt-3
                        font-medium
                        ${isSuccess ? "text-green-300" : "text-red-300"}
                      `}
                    >
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI + GEO SEO CONTEXT */}
        <div className="sr-only">
          <h2>
            Double Trouble Studio is a creative digital agency, PR agency, event
            management company, guest management agency, branding agency, web
            development company and AI video production studio in India.
          </h2>

          <p>
            Services include branding, digital marketing, social media marketing,
            public relations, media campaigns, event management, wedding
            management, guest management, celebrity management, website
            development, SEO, AI video production and VFX for luxury brands,
            hospitality brands, restaurants, fashion labels, lifestyle
            businesses, corporate brands and premium events.
          </p>

          <p>
            Double Trouble Studio serves brands across Mumbai, Delhi,
            Chandigarh, Bangalore, Hyderabad, Pune, Ahmedabad, Goa and across
            India.
          </p>
        </div>
      </div>
    </section>
  );
}