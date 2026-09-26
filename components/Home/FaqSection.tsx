"use client";

const faqs = [
  {
    question: "What services does Double Trouble Studio offer?",
    answer:
      "We offer branding and creative direction, PR and digital marketing, events and weddings, guest and celebrity management, website development and SEO, and AI video and VFX. Brands can hire us for one specialist service or an integrated multi-service engagement.",
  },
  {
    question: "How much does digital marketing cost?",
    answer:
      "Pricing depends on the number of channels, content volume, advertising scope and reporting requirements. After a free consultation, we share a clear proposal with deliverables, timelines and a custom monthly or project-based fee.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most brands should plan for roughly 3–6 months before meaningful SEO movement becomes visible. The timeline depends on your website condition, competition, content quality, technical issues and the authority of the domain.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with founder-led startups, growing businesses and established brands. The scope is shaped around the business stage, immediate priorities and the level of support required.",
  },
  {
    question: "Can I hire you for just one service?",
    answer:
      "Absolutely. You can engage us for a single service such as website development, PR, social media, guest management or AI video, or combine services into one coordinated growth plan.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free consultation and share your main business goal, current challenge and preferred timeline. We will recommend the right scope and send a proposal before any work begins.",
  },
  {
    question: "How long does a branding or website project take?",
    answer:
      "Most focused branding and website projects take around 2–6 weeks, depending on scope, content readiness, feedback speed and technical requirements. Larger platforms or full rebrands may require a longer phased timeline.",
  },
  {
    question: "Do you provide social media content creation?",
    answer:
      "Yes. We can handle strategy, content calendars, campaign concepts, reels direction, design, captions and publishing support. The exact deliverables are defined according to the platform mix and monthly content requirement.",
  },
  {
    question: "Do you offer ongoing monthly retainers?",
    answer:
      "Yes. Ongoing retainers can include content planning, social media, PR, performance reviews, SEO support, creative production and strategy refinement. We also take on clearly defined one-time projects.",
  },
  {
    question: "Can we work together remotely?",
    answer:
      "Yes. We work with clients across India through structured calls, shared project boards, clear approval stages and scheduled reporting. On-ground teams are coordinated separately when an event or production requires local execution.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#F5F7FB] py-24"
      aria-labelledby="homepage-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,136,185,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(143,181,232,0.08),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <span
            className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[4px] text-[#6288B9]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            <span className="h-2 w-2 rounded-full bg-[#6288B9]" />
            Frequently Asked Questions
          </span>

          <h2
            id="homepage-faq-heading"
            className="mt-7 text-[42px] font-semibold leading-[1] tracking-[-3px] text-[#071120] md:text-[60px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            Clear answers before
            <span className="block bg-gradient-to-r from-[#0D2444] to-[#6288B9] bg-clip-text text-transparent">
              we start the work
            </span>
          </h2>

          <p className="mt-8 text-[17px] leading-9 text-slate-600">
            Practical information about services, pricing, timelines, SEO and
            working with Double Trouble Studio.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-20 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[28px] border border-[#DCE6F3] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#BCD2EE] hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-[22px] font-semibold leading-[1.4] text-[#071120] font-[family:var(--font-sora)]">
                {faq.question}
              </h3>

              <div className="my-5 h-px w-full bg-gradient-to-r from-[#DCE6F3] via-[#E8EEF7] to-transparent" />

              <p className="text-[16px] leading-8 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}