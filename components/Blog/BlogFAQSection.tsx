import { faqs } from "./blog-data";
import SectionTitle from "./SectionTitle";


export default function BlogFAQSection() {
  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle
          eyebrow="FAQs"
          title="Questions, answered."
          text="Pricing, timelines, scope, customisation and confidentiality — clarified upfront."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-[26px] border border-[#DCE7F5] bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                <span className="flex items-center gap-5">
                  <span className="text-sm font-black text-[#6288B9]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="text-lg font-black tracking-[-0.03em]"
                    style={{
                      fontFamily: "New York, ui-serif, Georgia, serif",
                    }}
                  >
                    {faq.question}
                  </span>
                </span>

                <span className="text-2xl font-black text-[#315E91] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 border-t border-[#E5EEF9] pt-5 text-sm leading-7 text-[#53677F]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
