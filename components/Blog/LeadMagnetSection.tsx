export default function LeadMagnetSection() {
  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[42px] bg-gradient-to-br from-[#0D2444] via-[#193B63] to-[#6288B9] p-7 text-white shadow-2xl shadow-[#0D244426] sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C7D7EC]">
              Free Resource
            </p>

            <h2
              className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-5xl"
              style={{
                fontFamily: "New York, ui-serif, Georgia, serif",
              }}
            >
              Get Free Event & Brand Planning Checklist
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#DDE8F7]">
              A practical checklist used by DTS for managing guests,
              celebrities, events, PR campaigns and brand marketing.
            </p>
          </div>

          <form className="rounded-[30px] bg-white p-4 shadow-xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="mb-3 min-h-14 w-full rounded-[20px] bg-[#F7FAFF] px-5 text-sm font-semibold text-[#0D2444] outline-none placeholder:text-[#7B8EA5]"
            />

            <button
              type="button"
              className="min-h-14 w-full rounded-[20px] bg-[#0D2444] px-6 text-sm font-black text-white transition hover:bg-[#315E91]"
            >
              Get Free Guide
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
