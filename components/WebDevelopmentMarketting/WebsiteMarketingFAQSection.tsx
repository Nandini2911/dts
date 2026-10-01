"use client";

import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const serifFont = {
  fontFamily:
    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What does a website development company do?",
    answer:
      "A website development company plans, designs, develops, tests and launches websites for businesses. It can also manage ongoing updates, maintenance, technical improvements, integrations and website support after launch.",
  },
  {
    question: "What is the difference between web design and web development?",
    answer:
      "Web design focuses on the visual appearance, layout, user experience and interface of a website. Web development focuses on turning that design into a functional website that works properly across browsers, devices and screen sizes.",
  },
  {
    question: "Do you build completely custom websites?",
    answer:
      "Yes. We can plan and develop custom websites based on your brand, services, audience, required pages, functionality, integrations and long-term website requirements.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can redesign an existing website with improved layouts, clearer navigation, stronger content structure, responsive design, updated functionality and a more modern overall experience.",
  },
  {
    question: "Do you provide responsive website development?",
    answer:
      "Yes. We build responsive websites designed to work smoothly across desktop, tablet and mobile devices while maintaining clear navigation, readable content and consistent functionality.",
  },
  {
    question: "How much does website development cost in India?",
    answer:
      "Website development cost depends on the number of pages, design complexity, functionality, integrations, content requirements, ecommerce features, CMS requirements and overall project scope.",
  },
  {
    question: "How long does website development take?",
    answer:
      "Website timelines depend on the project size, number of pages, design requirements, functionality, content availability, integrations and the speed of approvals and feedback during development.",
  },
  {
    question: "Do you provide ecommerce website development?",
    answer:
      "Yes. We develop ecommerce websites with product categories, product pages, shopping cart functionality, checkout flows, payment integrations and responsive customer experiences.",
  },
  {
    question: "Do you build websites with a CMS?",
    answer:
      "Yes. Depending on the project, we can build websites with content management functionality so your team can manage selected pages, content, images, products or other website information more easily.",
  },
  {
    question: "Can you integrate forms, booking systems and third-party tools?",
    answer:
      "Yes. We can integrate contact forms, enquiry forms, booking systems, analytics tools, CRM connections, payment systems and other third-party services depending on your website requirements.",
  },
  {
    question: "What is website management?",
    answer:
      "Website management is the ongoing process of keeping a website updated and functional after launch. It can include content changes, page updates, CMS support, technical fixes, new sections, integration updates and regular improvements.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We provide website maintenance that can include content updates, technical checks, bug fixes, functionality reviews, page changes, performance improvements and ongoing website support.",
  },
  {
    question: "Can you manage my website after it is launched?",
    answer:
      "Yes. We can continue managing the website after launch by handling updates, new pages, content changes, technical requirements, troubleshooting and ongoing website improvements.",
  },
  {
    question: "Can new pages or features be added later?",
    answer:
      "Yes. A properly planned website can be expanded over time with new pages, services, sections, forms, integrations or additional functionality as your business requirements change.",
  },
  {
    question: "Do you help with website content and page structure?",
    answer:
      "Yes. We can help organize page hierarchy, service sections, content flow, calls to action, FAQs, trust elements and other information needed to make the website easier to understand and navigate.",
  },
  {
    question: "What do you need before starting a website project?",
    answer:
      "We usually need information about your business, services, audience, required pages, design references, branding, available content, images, functional requirements, integrations, timeline and any ongoing website management needs.",
  },
];

export default function WebsiteDevelopmentFaq() {
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

  return (
    <section className="relative overflow-hidden bg-[#F5F7FB] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,136,185,0.10),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(13,36,68,0.08),transparent_32%)]" />
      <div className="absolute left-[-180px] top-[-160px] h-[380px] w-[380px] rounded-full bg-[#6288B9]/10 blur-3xl" />
      <div className="absolute right-[-220px] bottom-[-180px] h-[460px] w-[460px] rounded-full bg-[#0D2444]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[780px] text-center"
        >
          <span className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl sm:px-5 sm:py-3 sm:text-[11px]">
            Frequently Asked Questions
          </span>

          <h2
            className="mx-auto mt-6 max-w-[820px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#071120] sm:text-[42px] md:text-[52px] lg:text-[60px]"
            style={serifFont}
          >
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              Website Development FAQs
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
            Everything you need to know about website development, redesign,
            responsive websites, ecommerce, website management, maintenance and
            ongoing technical support.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4 md:mt-16">
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="rounded-[22px] border border-[#DCE6F3] bg-white p-5 shadow-[0_12px_38px_rgba(13,36,68,0.04)] sm:rounded-[28px] sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FB]">
                  <Plus className="h-4 w-4 text-[#0D2444]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-[17px] font-semibold leading-[1.45] text-[#071120] sm:text-[20px]">
                    {item.question}
                  </h3>

                  <p className="mt-4 text-[14px] font-medium leading-[1.9] text-slate-600 sm:text-[15px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}