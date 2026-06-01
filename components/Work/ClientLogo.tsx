"use client";

import { motion } from "framer-motion";

const logos = [
  "/logos/1.webp",
  "/logos/2.webp",
  "/logos/3.webp",
  "/logos/4.webp",
  "/logos/5.webp",
  "/logos/6.webp",
  "/logos/7.webp",
  "/logos/8.webp",
  "/logos/9.webp",
  "/logos/10.webp",
  "/logos/11.webp",
  "/logos/12.webp",
  "/logos/13.webp",
  "/logos/14.webp",
  "/logos/15.webp",
  "/logos/16.webp",
  "/logos/17.webp",
  "/logos/18.webp",
  "/logos/19.webp",
  "/logos/20.webp",
  "/logos/21.webp",
  "/logos/22.webp",
  "/logos/23.webp",
  "/logos/24.webp",
  "/logos/25.webp",
  "/logos/26.webp",
  "/logos/27.webp",
  "/logos/28.webp",
  "/logos/29.webp",
  "/logos/30.webp",
  "/logos/31.webp",
  "/logos/32.webp",
  "/logos/33.webp",
  "/logos/34.webp",
  "/logos/35.webp",
  "/logos/36.webp",
  "/logos/37.webp",
  "/logos/38.webp",
];

function LogoRow({
  reverse = false,
  duration = 40,
}: {
  reverse?: boolean;
  duration?: number;
}) {
  return (
    
    <motion.div
      className="flex items-center gap-20 w-max"
      animate={{
        x: reverse ? [-2500, 0] : [0, -2500],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[...logos, ...logos, ...logos].map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="Brand Logo"
          className="
            h-14
            md:h-30
            w-auto
            object-contain
          
         
            transition-all
            duration-500
          
          "
        />
      ))}
    </motion.div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="relative mb-20 text-center">
  {/* Badge */}
 <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className=" inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/10 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] backdrop-blur-xl shadow-[0_10px_40px_rgba(13,36,68,0.25)] " > <span className=" text-[11px] sm:text-[12px] font-semibold tracking-[2px] uppercase text-white " > Selected Clients </span>
  </motion.div>

  <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className=" mt-7 text-[40px] leading-[1.1] md:text-[58px] font-bold tracking-[-3px] text-[#0D2444] " style={{ fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif', }} > Trusted By <span className=" ml-4 bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent " > Modern Brands </span> </motion.h2>

  {/* Description */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.1 }}
    className="
      mt-10
      max-w-[1050px]
      mx-auto
      text-[18px]
      md:text-[18px]
      leading-[1.8]
      text-[#5B6472]
    "
  >
    Trusted by hospitality, lifestyle, media, restaurant and
    modern luxury brands across India.
  </motion.p>
</div>
      
      <div className="space-y-12">
        {/* Row 1 */}
        <LogoRow duration={40} />

        {/* Row 2 */}
        <LogoRow reverse duration={50} />

      
      </div>
    </section>
  );
}