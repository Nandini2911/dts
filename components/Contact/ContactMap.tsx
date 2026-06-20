"use client";

import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

export default function ContactMap() {
  return (
    <section className="relative overflow-hidden py-28 bg-white">
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#6288B9]/10
            blur-[140px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span
            className="
              glass
              inline-flex
              px-5
              py-2
              rounded-full
              text-xs
              uppercase
              tracking-[4px]
              font-semibold
              text-[#6288B9]
            "
          >
            Our Location
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
            "
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            <span className="text-[#0F172A]">
              Visit Our
            </span>

            <span
              className="
                block
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#0D2444]
                via-[#6288B9]
                to-[#A4B8D2]
              "
            >
              Mumbai Office
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
            Located in Mumbai, Maharashtra, we work with
            businesses across India and internationally,
            helping brands grow through creative strategy,
            digital marketing, website development and
            premium brand experiences.
          </p>
        </motion.div>

        {/* Map + Details */}

        <div className="grid lg:grid-cols-12 gap-10 mt-20">
          {/* Map */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <div
              className="
                overflow-hidden
                rounded-[32px]
                p-[1px]
                bg-gradient-to-br
                from-[#6288B9]
                via-white
                to-[#0D2444]
              "
            >
              <div className="glass rounded-[31px] overflow-hidden">
                <iframe
                  title="Double Trouble Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15078.675858946619!2d72.8858624!3d19.12217305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1780308956550!5m2!1sen!2sin" 
                  width="100%"
                  height="500"
                  loading="lazy"
                  className="border-0"
                />
              </div>
            </div>
          </motion.div>

          {/* Office Info */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="glass rounded-[32px] p-8 h-full">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#0D2444]
                  to-[#6288B9]
                  text-white
                "
              >
                <FiMapPin size={28} />
              </div>

              <h3 className="mt-6 text-3xl font-semibold text-[#0D2444]">
                Office Details
              </h3>

              <div className="mt-8 space-y-8">
                <div>
                  <h4 className="font-semibold text-[#0D2444]">
                    Address
                  </h4>

                  <p className="mt-2 text-slate-600 leading-relaxed">
                   Plot No.177, 1st floor, Aaram Nagar Part-2, seven bungalows, J P road, Versova, Andheri West, Mumbai- 400061
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0D2444]">
                    Phone
                  </h4>

                  <p className="mt-2 text-slate-600">
                    +918000006021
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0D2444]">
                    Email
                  </h4>

                  <p className="mt-2 text-slate-600">
                    doubletrouble.studio01@gmail.com
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0D2444]">
                    Working Hours
                  </h4>

                  <p className="mt-2 text-slate-600">
                    Monday – Saturday
                    <br />
                    10:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SEO Text */}

        <div className="mt-16 max-w-5xl mx-auto text-center">
          <p className="text-slate-600 leading-relaxed">
            Looking for a branding agency, digital marketing
            agency, website development company or creative
            studio in Mumbai? Double Trouble Studio works with
            businesses throughout Mumbai, Navi Mumbai, Thane,
            Pune and across India, providing strategic creative
            solutions designed for long-term business growth.
          </p>
        </div>
      </div>
    </section>
  );
}