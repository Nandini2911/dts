import { trustPoints } from "./blog-data";
import SectionTitle from "./SectionTitle";

export default function TrustSection() {
  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[42px] border border-[#DCE7F5] bg-white p-7 shadow-xl shadow-[#173B6410] sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:p-12">
        <SectionTitle
          eyebrow="Why You Can Trust This Blog"
          title="Not generic marketing advice."
          text="Every article here is written from real-world experience by the DTS team working on guest management, celebrity coordination, events, PR campaigns, digital marketing systems, websites and AI video production for actual brands and clients."
        />

        <div className="grid gap-5">
          {trustPoints.map((point) => (
            <div key={point.title} className="rounded-[26px] bg-[#F7FAFF] p-6">
              <h3
                className="text-xl font-black tracking-[-0.03em]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                {point.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#53677F]">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
