import { discoverCards } from "./blog-data";
import SectionTitle from "./SectionTitle";


export default function DiscoverSection() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Explore"
            title="What You’ll Discover Here"
            text="Clear, practical and experience-backed insights across the core services DTS handles for brands, events and campaigns."
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {discoverCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-[30px] border border-[#DDE8F7] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 h-12 w-12 rounded-2xl bg-gradient-to-br from-[#0D2444] to-[#6288B9] transition group-hover:scale-105" />

              <h3
                className="text-xl font-black tracking-[-0.03em]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                {card.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#53677F]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
