import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="px-5 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[46px] border border-[#DCE7F5] bg-white p-8 text-center shadow-xl shadow-[#173B6410] sm:p-12 lg:p-16">
        <p className="mx-auto max-w-2xl text-sm font-black uppercase tracking-[0.25em] text-[#6288B9]">
          Still unsure? Let’s walk through your event and map the right setup.
        </p>

        <h2
          className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.06em] sm:text-6xl"
          style={{
            fontFamily: "New York, ui-serif, Georgia, serif",
          }}
        >
          Ready to Create Impact Like This for Your Brand?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#53677F]">
          From guest and celebrity management to events, PR campaigns,
          websites, digital marketing systems and AI video production — DTS
          builds complete brand ecosystems that make businesses grow, glow and
          get noticed.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-[#0D2444] px-8 py-4 text-sm font-black text-white transition hover:bg-[#315E91]"
          >
            Start Your Project
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-[#C9DAF0] bg-[#F7FAFF] px-8 py-4 text-sm font-black text-[#0D2444] transition hover:bg-[#EAF2FF]"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
