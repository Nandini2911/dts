import Link from "next/link";

const locationLinks = [
  {
    label: "Guest management services in Mumbai",
    href: "/services/guest-management/mumbai",
  },
  {
    label: "Celebrity management agency in Mumbai",
    href: "/services/celebrity-management/mumbai",
  },
  {
    label: "Luxury event management in Mumbai",
    href: "/services/events-weddings/mumbai",
  },
  {
    label: "PR and digital marketing agency in Mumbai",
    href: "/services/pr-media-marketing/mumbai",
  },
  {
    label: "Website development company in Mumbai",
    href: "/services/web-development-marketing/mumbai",
  },
  {
    label: "AI video production studio in Mumbai",
    href: "/services/ai-video-vfx/mumbai",
  },
];

export default function PopularServiceLocations() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-white px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-[28px] p-6 shadow-[0_20px_70px_rgba(13,36,68,0.08)] md:p-10 lg:p-12">
          <div className="mb-10 max-w-3xl">
            <span className="mb-4 inline-flex rounded-full border border-[#D1D5DB] bg-white/70 px-4 py-2 text-sm font-medium text-[#315E91]">
              Service Locations
            </span>

            <h2
  className="bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-5xl"
  style={{
    fontFamily: "New York, ui-serif, Georgia, serif",
  }}
>
  Popular Service Locations
</h2>

            <p className="mt-5 text-base leading-8 text-[#475569] md:text-lg">
              Double Trouble Studio works with brands across India, with strong
              service presence in Mumbai, Delhi, Bangalore, Chandigarh, Pune,
              Hyderabad and Goa. Explore our most requested city service pages
              below.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {locationLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group premium-card block p-6"
              >
               

                <h3 className="text-lg font-semibold leading-snug text-[#0F172A] transition-colors duration-300 group-hover:text-[#315E91]">
                  {item.label}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#64748B]">
                  Explore premium creative, digital and event solutions tailored
                  for brands in this location.
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold text-[#315E91] underline underline-offset-4 decoration-[#315E91]/40 transition-colors duration-300 group-hover:text-[#0D2444] group-hover:decoration-[#0D2444]">
                  View service page
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl border border-[#E2E8F0] bg-white/70 p-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-[#0D2444]">
                Looking for another city?
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#64748B]">
                Explore all Double Trouble Studio service locations across
                India.
              </p>
            </div>

            <Link
              href="/locations"
              className="primary-btn inline-flex items-center justify-center"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}