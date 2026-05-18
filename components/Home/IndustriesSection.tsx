// components/IndustriesSection.tsx

import {
  Hotel,
  UtensilsCrossed,
  Camera,
  Gem,
  Mic2,
  PartyPopper,
  Shirt,
  Rocket,
} from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Hospitality Brands",
      desc: "Hotels, stays and premium hospitality experiences.",
      icon: Hotel,
    },
    {
      title: "Cafés & Restaurants",
      desc: "Modern food brands built for digital discovery.",
      icon: UtensilsCrossed,
    },
    {
      title: "Wedding Planners",
      desc: "Luxury wedding and celebration focused businesses.",
      icon: Camera,
    },
    {
      title: "Luxury Businesses",
      desc: "High-end brands looking for elevated positioning.",
      icon: Gem,
    },
    {
      title: "Creators & Influencers",
      desc: "Personal brands with strong digital presence goals.",
      icon: Mic2,
    },
    {
      title: "Event Companies",
      desc: "Experiential and event-driven modern businesses.",
      icon: PartyPopper,
    },
    {
      title: "Fashion & Lifestyle",
      desc: "Aesthetic-first brands focused on identity and culture.",
      icon: Shirt,
    },
    {
      title: "Modern Startups",
      desc: "Emerging businesses ready to scale with clarity.",
      icon: Rocket,
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-[#F5F7FB]">
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,136,185,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(143,181,232,0.08),transparent_28%)]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* TOP */}
        <div className="text-center max-w-[950px] mx-auto">
          {/* TAG */}
          <span
            className="
              inline-flex
              items-center
              gap-3

              text-[#6288B9]

              uppercase

              tracking-[4px]

              text-[11px]

              font-semibold
            "
            style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
          >
            <span className="w-2 h-2 rounded-full bg-[#6288B9]" />

            Industries We Work With
          </span>

          {/* HEADING */}
          <h2
            className="
              mt-7

              text-[40px]
              md:text-[58px]

              leading-[1]

              tracking-[-3px]

              font-semibold

              text-[#071120]

            "
            style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
          >
            Built for modern brands

            <span className="block bg-gradient-to-r from-[#0D2444] to-[#6288B9] bg-clip-text text-transparent">
              that want premium positioning
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
              mt-8

              text-[17px]

              leading-9

              text-slate-600

              max-w-[850px]

              mx-auto
            "
          >
            We partner with hospitality brands, cafés,
            restaurants, wedding planners, luxury
            businesses, creators, event companies and
            modern startups looking to build stronger
            digital presence, sharper identity and long-term
            brand authority.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            mt-20

            grid
            sm:grid-cols-2
            lg:grid-cols-4

            gap-6
          "
        >
          {industries.map((item, index) => (
            <div
              key={index}
              className="
                group

                relative
                overflow-hidden

                rounded-[30px]

                border border-[#DCE6F3]

                bg-white

                p-8

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-[#BCD2EE]

                shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              "
            >
              {/* ICON */}
              <div
                className="
                  relative

                  w-16
                  h-16

                  rounded-[22px]

                  bg-gradient-to-br
                  from-[#F8FBFF]
                  to-[#E2EEFB]

                  border border-[#D8E7F7]

                  flex
                  items-center
                  justify-center

                  shadow-[0_10px_30px_rgba(15,23,42,0.06)]

                  transition-all
                  duration-500

                  group-hover:scale-105
                  group-hover:shadow-[0_15px_40px_rgba(98,136,185,0.16)]
                "
              >
                {/* INNER GLOW */}
                <div
                  className="
                    absolute
                    inset-[6px]

                    rounded-[18px]

                    bg-gradient-to-br
                    from-[#0D2444]
                    to-[#6288B9]

                    opacity-[0.06]
                  "
                />

                <item.icon
                  className="
                    relative
                    z-10

                    w-[28px]
                    h-[28px]

                    text-[#0D2444]

                    transition-all
                    duration-500

                    group-hover:text-[#6288B9]
                  "
                  strokeWidth={1.8}
                />
              </div>

              {/* CONTENT */}
              <div className="mt-8">
                <h3
                  className="
                    text-[22px]

                    font-semibold

                    leading-[1.3]

                    text-[#071120]

                    font-[family:var(--font-sora)]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4

                    text-[15px]

                    leading-8

                    text-slate-600
                  "
                >
                  {item.desc}
                </p>
              </div>

              {/* HOVER LINE */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0

                  h-[3px]
                  w-0

                  bg-gradient-to-r
                  from-[#0D2444]
                  to-[#8FB5E8]

                  transition-all
                  duration-500

                  group-hover:w-full
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}