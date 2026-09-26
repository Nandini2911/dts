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
      desc: "Brand, content and digital systems designed to improve discovery, trust and the complete guest journey.",
      example: "Selected experience: RNK Rentals",
      logo: "/logos/26.webp",
      icon: Hotel,
    },
    {
      title: "Cafés & Restaurants",
      desc: "Social-first storytelling, offers and search visibility that help food brands turn attention into visits and orders.",
      example: "Selected experience: Butterchicken Factory",
      logo: "/logos/36.webp",
      icon: UtensilsCrossed,
    },
    {
      title: "Wedding Planners",
      desc: "Premium positioning, lead-focused digital presence and guest experience systems for high-value celebrations.",
      example: "Strategy for luxury celebration brands",
      icon: Camera,
    },
    {
      title: "Luxury Businesses",
      desc: "Refined brand systems and campaigns that communicate quality clearly without relying on noise or excess.",
      example: "Selected experience: RNK Rentals",
      logo: "/logos/26.webp",
      icon: Gem,
    },
    {
      title: "Creators & Influencers",
      desc: "Clear positioning, content direction and collaboration-ready communication for personal brands and talent.",
      example: "Campaign and visibility support",
      icon: Mic2,
    },
    {
      title: "Event Companies",
      desc: "Event identity, sponsor communication and digital promotion built to strengthen attendance and authority.",
      example: "Selected experience: All India Police Golf Tournament",
      logo: "/Golf Final Logo - 1.png",
      icon: PartyPopper,
    },
    {
      title: "Fashion & Lifestyle",
      desc: "Culturally relevant identity, launch communication and premium storytelling for design-led brands.",
      example: "Selected experience: Bharat Reshma",
      logo: "/BRlogo.webp",
      icon: Shirt,
    },
    {
      title: "Modern Startups",
      desc: "Positioning, websites and growth campaigns that help founder-led businesses enter the market with clarity.",
      example: "Flexible single-service or integrated support",
      icon: Rocket,
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-20 bg-[#F5F7FB]"
      aria-label="Industries served by Double Trouble Studio including hospitality, restaurants, weddings, luxury brands, creators, events, fashion and startups"
    >
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
            We adapt the strategy to the category, audience and buying journey —
            then connect the work to a relevant business outcome instead of using
            the same creative formula for every industry.
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
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
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
                aria-label={`${item.title} industry services by Double Trouble Studio`}
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

                  <Icon
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
                    aria-hidden="true"
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

                  <div className="mt-5 flex min-h-[48px] items-center gap-3 rounded-2xl border border-[#E2EAF4] bg-[#F8FAFD] px-3 py-2">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt=""
                        aria-hidden="true"
                        className="h-8 w-8 shrink-0 object-contain"
                      />
                    ) : (
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#6288B9]" />
                    )}
                    <span className="text-[12px] font-medium leading-5 text-[#31507A]">
                      {item.example}
                    </span>
                  </div>
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}