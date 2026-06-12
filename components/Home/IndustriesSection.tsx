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
      desc: "Hotels, resorts, boutique stays and premium hospitality brands looking for stronger digital visibility, branding and guest experience.",
      icon: Hotel,
    },
    {
      title: "Cafés & Restaurants",
      desc: "Modern cafés, restaurants, cloud kitchens and food brands built for social media discovery, SEO and customer engagement.",
      icon: UtensilsCrossed,
    },
    {
      title: "Wedding Planners",
      desc: "Luxury wedding planners, décor brands and celebration businesses focused on premium positioning and high-value clients.",
      icon: Camera,
    },
    {
      title: "Luxury Businesses",
      desc: "High-end lifestyle, retail and service brands looking for elevated branding, PR, digital marketing and luxury positioning.",
      icon: Gem,
    },
    {
      title: "Creators & Influencers",
      desc: "Personal brands, artists, creators and influencers with strong digital presence, content strategy and brand collaboration goals.",
      icon: Mic2,
    },
    {
      title: "Event Companies",
      desc: "Event management companies, experiential brands and production houses looking for digital authority and brand-led growth.",
      icon: PartyPopper,
    },
    {
      title: "Fashion & Lifestyle",
      desc: "Fashion labels, lifestyle brands and aesthetic-first businesses focused on visual identity, culture and online growth.",
      icon: Shirt,
    },
    {
      title: "Modern Startups",
      desc: "Emerging startups, founder-led businesses and premium new-age brands ready to scale with strategy, design and clarity.",
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
            We partner with hospitality brands, cafés, restaurants, wedding
            planners, luxury businesses, creators, event companies, fashion
            labels and modern startups looking to build stronger digital
            presence, sharper brand identity, premium positioning, SEO
            visibility and long-term brand authority across India.
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

        {/* AI + GEO SEO CONTEXT */}
        <div className="sr-only">
          <h2>
            Double Trouble Studio works with hospitality brands, cafés,
            restaurants, wedding planners, luxury businesses, creators,
            influencers, event companies, fashion brands, lifestyle businesses
            and modern startups in India.
          </h2>

          <p>
            The agency provides branding, digital marketing, social media
            marketing, SEO, public relations, media campaigns, website
            development, event marketing, guest management, celebrity
            management, influencer marketing, AI video production and VFX
            services for premium brands.
          </p>

          <p>
            Industries served include hotels, resorts, boutique stays, cafés,
            restaurants, cloud kitchens, wedding planners, luxury event
            companies, fashion labels, lifestyle brands, creators, influencers,
            corporate brands, media brands, founders and startups across Mumbai,
            Delhi, Chandigarh, Bangalore, Hyderabad, Pune, Ahmedabad, Goa and
            across India.
          </p>

          <p>
            Double Trouble Studio helps businesses build premium positioning,
            stronger online presence, brand authority, SEO visibility, digital
            growth, social media discovery, PR visibility and long-term cultural
            relevance.
          </p>
        </div>
      </div>
    </section>
  );
}