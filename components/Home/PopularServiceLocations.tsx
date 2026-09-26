import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const locationLinks = [
  {
    label: "Guest Management in Mumbai",
    href: "/services/guest-management/mumbai",
    city: "Mumbai",
    proof: "Mumbai-based core team",
  },
  {
    label: "Celebrity Management in Mumbai",
    href: "/services/celebrity-management/mumbai",
    city: "Mumbai",
    proof: "Talent and campaign coordination",
  },
  {
    label: "Luxury Events in Mumbai",
    href: "/services/events-weddings/mumbai",
    city: "Mumbai",
    proof: "On-ground event support",
  },
  {
    label: "PR & Digital Marketing in Delhi NCR",
    href: "/locations",
    city: "Delhi NCR",
    proof: "Brand and campaign delivery",
  },
  {
    label: "Website Development in Bangalore",
    href: "/locations",
    city: "Bangalore",
    proof: "Remote strategy and development",
  },
  {
    label: "Events & Brand Experiences in Chandigarh",
    href: "/locations",
    city: "Chandigarh",
    proof: "North India event network",
  },
  {
    label: "Digital Marketing in Pune",
    href: "/locations",
    city: "Pune",
    proof: "Integrated remote collaboration",
  },
  {
    label: "Branding & PR in Hyderabad",
    href: "/locations",
    city: "Hyderabad",
    proof: "Strategy-led brand support",
  },
  {
    label: "Creative Campaigns in Goa",
    href: "/locations",
    city: "Goa",
    proof: "Hospitality and experience focus",
  },
];

const mapCities = ["Mumbai", "Delhi NCR", "Chandigarh", "Bangalore", "Pune", "Hyderabad", "Goa"];

export default function PopularServiceLocations() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-white px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-[28px] p-6 shadow-[0_20px_70px_rgba(13,36,68,0.08)] md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex rounded-full border border-[#D1D5DB] bg-white/70 px-4 py-2 text-sm font-medium text-[#315E91]">
                Service Locations
              </span>

              <h2
                className="bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-5xl"
                style={{ fontFamily: "New York, ui-serif, Georgia, serif" }}
              >
                Local Understanding. India-Wide Delivery.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#475569] md:text-lg">
                Our core team operates from Mumbai and collaborates with brands
                across major Indian markets through structured remote workflows and
                trusted on-ground networks where a project requires local support.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[26px] border border-[#DCE6F2] bg-[#0D2444] p-6 text-white">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#6288B9]/30 blur-3xl" />
              <div className="relative z-10">
                <p className="text-[10px] font-medium uppercase tracking-[2.2px] text-white/50">
                  Service Network
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {mapCities.map((city) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/75"
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {locationLinks.map((item) => (
              <Link
                key={`${item.city}-${item.label}`}
                href={item.href}
                className="group premium-card block p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[1.8px] text-[#6288B9]">
                      {item.city}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold leading-snug text-[#0F172A] transition-colors duration-300 group-hover:text-[#315E91]">
                      {item.label}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#315E91] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-5 border-t border-[#E6EDF5] pt-4 text-sm font-medium text-[#64748B]">
                  {item.proof}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5 rounded-[24px] border border-[#DCE6F2] bg-white/75 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[#0D2444]">Need support in another city?</h3>
              <p className="mt-2 text-sm leading-7 text-[#64748B]">
                Tell us the city, service and project scope. We will confirm the
                most practical delivery model before you commit.
              </p>
            </div>
            <Link
              href="/locations"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#0D2444] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}