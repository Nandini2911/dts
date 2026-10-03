"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

const serifFont = {
  fontFamily:
    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const linkClass =
  "font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]";

type FaqItem = {
  question: string;
  answer: ReactNode;
  schemaAnswer: string;
};

export default function SeoFaqSection() {
  const faqs: FaqItem[] = [
    {
      question: "What does an SEO agency in Mumbai do?",
      schemaAnswer:
        "An SEO agency in Mumbai helps businesses improve their visibility in Google search results through technical SEO, keyword research, on-page optimization, content strategy, local SEO, internal linking, website improvements and ongoing performance analysis.",
      answer: (
        <>
          An SEO agency in Mumbai helps businesses improve their visibility
          across relevant Google searches. This typically includes technical
          SEO, keyword research, search-intent analysis, on-page optimization,
          content strategy, local SEO, internal linking and ongoing performance
          analysis. At Double Trouble Studio, SEO can also be connected with{" "}
          <Link
            href="/services/web-development-marketing"
            className={linkClass}
          >
            website development
          </Link>{" "}
          when technical or structural improvements are required.
        </>
      ),
    },

    {
      question: "How long does SEO take to show results?",
      schemaAnswer:
        "SEO is a long-term marketing strategy. Some technical or indexing improvements may become visible within weeks, while meaningful growth for competitive keywords can take several months. The timeline depends on competition, website condition, content quality, authority and how consistently SEO is implemented.",
      answer:
        "SEO is a long-term growth strategy rather than an instant-result channel. Some technical fixes, indexing improvements or low-competition opportunities may become visible relatively early, while competitive keywords and broader organic growth can take several months. The exact timeline depends on your website's current condition, competition, content quality, authority and how consistently the strategy is implemented.",
    },

    {
      question: "How much do SEO services cost in Mumbai?",
      schemaAnswer:
        "SEO service pricing in Mumbai varies depending on website size, competition, number of services or locations, technical requirements, content needs and the amount of ongoing optimization required. SEO packages should be customized to the actual business scope rather than based on a single fixed price.",
      answer:
        "The cost of SEO services in Mumbai depends on the size of the website, competition, number of services or locations, technical issues, content requirements and the amount of ongoing work required. A local service business usually needs a different SEO scope from a large national brand, multi-location company or eCommerce website. We recommend defining the SEO scope after reviewing the website and competitive search landscape.",
    },

    {
      question: "What is the difference between SEO and Google Ads?",
      schemaAnswer:
        "SEO focuses on improving organic visibility in search results over time, while Google Ads provides paid visibility while advertising campaigns are active. SEO is generally used for long-term organic growth, while Google Ads can generate immediate paid traffic. Businesses may use both depending on their objectives.",
      answer:
        "SEO focuses on building organic visibility over time, while Google Ads provides paid search visibility while campaigns are running. Google Ads can help capture immediate demand, whereas SEO is designed to build a stronger long-term search presence. Many businesses use both channels together depending on their growth objectives.",
    },

    {
      question: "Do you provide local SEO services in Mumbai?",
      schemaAnswer:
        "Yes. Double Trouble Studio provides local SEO services in Mumbai including Google Business Profile optimization, local keyword strategy, location relevance, local landing pages, review signals, on-page optimization and local search performance analysis.",
      answer:
        "Yes. Our local SEO approach can include Google Business Profile optimization, local keyword research, location relevance, local landing pages, review and reputation signals, on-page optimization and stronger website signals for location-based searches. The strategy is built around genuine customer demand rather than simply creating large numbers of city pages.",
    },

    {
      question: "Can you provide SEO for Navi Mumbai and Thane as well?",
      schemaAnswer:
        "Yes. SEO strategies can target Mumbai, Navi Mumbai, Thane and other relevant markets when those locations are genuinely important to the business. Location strategies should use useful, differentiated pages and real local search intent rather than repetitive low-value city pages.",
      answer:
        "Yes. We can structure SEO around Mumbai, Navi Mumbai, Thane and other relevant markets when those locations genuinely matter to the business. We prefer useful, differentiated location strategies instead of creating repetitive city pages purely for keyword targeting.",
    },

    {
      question: "Can SEO improve my existing website?",
      schemaAnswer:
        "Yes. Existing websites can often improve organic search performance through technical SEO fixes, better page structure, improved metadata, search-intent alignment, stronger content, internal linking, page-speed improvements and additional pages where genuine search opportunities exist.",
      answer: (
        <>
          Yes. An existing website can often be improved through technical SEO
          fixes, better page structure, stronger metadata, search-intent
          alignment, improved content, internal linking and performance
          improvements. If the website needs deeper structural changes, SEO can
          also be coordinated with our{" "}
          <Link
            href="/services/web-development-marketing"
            className={linkClass}
          >
            web development services
          </Link>
          .
        </>
      ),
    },

    {
      question: "Does SEO require regular blog content?",
      schemaAnswer:
        "SEO does not require businesses to publish blogs constantly. Content should be created when it supports a real search opportunity, answers customer questions, strengthens topical authority, improves service-page relevance or expands useful search coverage.",
      answer:
        "Not every business needs to publish blogs constantly. Content should be created when it supports a genuine search opportunity, answers customer questions, strengthens an important topic or improves the overall search coverage of the website. Quality and relevance are more important than publishing simply to maintain a content calendar.",
    },

    {
      question: "What is technical SEO?",
      schemaAnswer:
        "Technical SEO improves the technical foundation of a website so search engines can crawl, understand and index pages efficiently. It can include crawlability, indexing, site architecture, page speed, mobile usability, canonical tags, redirects, structured data, XML sitemaps and other technical signals.",
      answer:
        "Technical SEO focuses on the technical foundation of the website so search engines can crawl, understand and index important pages efficiently. It can include crawlability, indexing, website architecture, page speed, mobile usability, canonical tags, redirects, structured data, XML sitemaps and other technical signals.",
    },

    {
      question: "What is on-page SEO?",
      schemaAnswer:
        "On-page SEO improves individual website pages so they better match user search intent and communicate relevance to search engines. It includes page titles, headings, content structure, internal links, keyword relevance, metadata, image optimization and overall page experience.",
      answer:
        "On-page SEO improves individual website pages so they better match customer search intent and communicate relevance clearly to search engines. It can include page titles, headings, content structure, metadata, internal links, keyword relevance, image optimization and the overall quality of the page experience.",
    },

    {
      question: "What is local SEO?",
      schemaAnswer:
        "Local SEO focuses on improving visibility for location-based searches such as services near me or service providers in a particular city. It can include Google Business Profile optimization, local keywords, location pages, reviews, business information consistency and local relevance signals.",
      answer:
        "Local SEO focuses on improving visibility when customers search for businesses or services within a specific location. This can include Google Business Profile optimization, local keywords, useful location pages, reviews, business information consistency and stronger local relevance across the website.",
    },

    {
      question: "Do you guarantee first-page Google rankings?",
      schemaAnswer:
        "No responsible SEO agency can guarantee an exact first-page Google ranking. Rankings are influenced by competition, website quality, content, authority, user intent, algorithm changes and other external factors. SEO should focus on improving visibility, organic traffic and meaningful business outcomes over time.",
      answer:
        "No responsible SEO agency can guarantee an exact first-page Google ranking. Search positions are influenced by competition, website quality, content, authority, search intent, Google algorithm changes and other external factors. Our focus is on improving overall search visibility, relevant organic traffic and meaningful business outcomes over time.",
    },

    {
      question: "How do you choose SEO keywords for a business?",
      schemaAnswer:
        "SEO keywords should be selected based on search demand, user intent, business relevance, competition, location, customer journey and the type of page best suited to satisfy the search. Keyword research should focus on opportunities that can contribute to visibility and qualified business enquiries.",
      answer:
        "We look at search demand, user intent, competition, business relevance, location and the customer journey. The goal is not to collect the largest possible keyword list. It is to identify the searches that deserve a service page, location page, supporting article or other useful landing experience.",
    },

    {
      question: "How do you measure SEO performance?",
      schemaAnswer:
        "SEO performance can be measured using organic clicks, search impressions, keyword visibility, click-through rate, landing-page performance, indexed pages, technical health, local visibility, conversions, qualified enquiries and organic revenue where appropriate.",
      answer:
        "SEO performance can be evaluated using organic clicks, search impressions, keyword visibility, click-through rate, landing-page performance, indexed pages, technical health, local visibility, conversions and qualified enquiries. For businesses that can accurately attribute sales, organic revenue may also be relevant.",
    },

    {
      question: "Can SEO generate leads for service businesses?",
      schemaAnswer:
        "Yes. SEO can help service businesses generate qualified enquiries by improving visibility for searches with commercial or transactional intent. Results depend on search demand, competition, website quality, landing-page experience, offer relevance and the strength of the overall SEO strategy.",
      answer:
        "SEO can support lead generation by improving visibility for searches where customers are actively researching, comparing or looking to hire a service provider. The quality of those enquiries depends on the search intent being targeted, the landing-page experience, competition and how well the website communicates the business offer.",
    },

    {
      question: "Do you offer SEO for hotels, hospitality and luxury brands?",
      schemaAnswer:
        "Yes. Double Trouble Studio can develop SEO strategies for hotels, hospitality businesses, luxury brands, event companies, wedding businesses, professional services, startups and other service-led brands based on their search demand and commercial objectives.",
      answer:
        "Yes. We can build SEO strategies for hotels, hospitality businesses, luxury brands, event and wedding businesses, professional services, startups and other service-led companies. Each sector competes differently in search, so keyword strategy, content, landing pages and local relevance should be adapted to the business model.",
    },

    {
      question: "Can you handle SEO and website development together?",
      schemaAnswer:
        "Yes. Double Trouble Studio provides SEO and website development services, allowing technical SEO, architecture, landing pages, content structure, internal linking and performance considerations to be coordinated during website development.",
      answer: (
        <>
          Yes. Double Trouble Studio can coordinate SEO and{" "}
          <Link
            href="/services/web-development-marketing"
            className={linkClass}
          >
            website development
          </Link>{" "}
          together. This helps technical SEO, website architecture, landing
          pages, content structure, internal linking and performance
          considerations work from the same strategy instead of being handled
          separately.
        </>
      ),
    },

    {
      question: "Do you provide SEO audits?",
      schemaAnswer:
        "Yes. An SEO audit reviews the technical health, crawlability, indexing, on-page optimization, content quality, keyword gaps, internal linking, local search signals and other factors that may be limiting organic search performance.",
      answer:
        "Yes. An SEO audit can review technical health, crawlability, indexing, on-page optimization, content quality, keyword gaps, internal linking, local search signals and other factors that may be limiting organic visibility. The purpose of the audit is to identify priorities rather than simply produce a long list of issues.",
    },

    {
      question: "Why choose Double Trouble Studio for SEO?",
      schemaAnswer:
        "Double Trouble Studio combines SEO strategy with website development, content, digital marketing and PR capabilities. This allows search strategy to connect with the wider digital presence of a brand instead of being treated as an isolated marketing activity.",
      answer: (
        <>
          Double Trouble Studio combines SEO strategy with website development,
          content, digital marketing and PR capabilities. This allows search
          strategy to connect with the wider digital presence of the brand
          instead of operating as an isolated activity. You can{" "}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{" "}
          to discuss the SEO requirements for your business.
        </>
      ),
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.dtsworld.in/services/seo-agency-mumbai#faq",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.schemaAnswer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F5F7FB] px-4 py-16 sm:px-6 md:py-20 lg:px-8"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,136,185,0.1),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(13,36,68,0.08),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        {/* HEADER */}

        <div className="mx-auto max-w-[820px] text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)]">
            Frequently Asked Questions
          </span>

          <h2
            className="mx-auto mt-6 max-w-[900px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#071120] sm:text-[42px] md:text-[52px] lg:text-[60px]"
            style={serifFont}
          >
            SEO Services in Mumbai
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              FAQs
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
            Answers to common questions about SEO services, local SEO,
            technical optimization, Google rankings, SEO pricing, content and
            organic search growth.
          </p>
        </div>

        {/* FAQ ITEMS */}

        <div className="mt-12 space-y-5 md:mt-16">
          {faqs.map((item) => (
            <article
              key={item.question}
              className="rounded-[28px] border border-[#DCE6F3] bg-white p-7 shadow-[0_12px_38px_rgba(13,36,68,0.04)] transition-all duration-300 hover:border-[#BCD2EE] hover:shadow-[0_18px_55px_rgba(13,36,68,0.08)]"
            >
              <div className="flex items-center justify-between gap-5">
                <h3 className="text-[20px] font-semibold leading-[1.45] text-[#071120]">
                  {item.question}
                </h3>

                <div className="flex h-[46px] min-w-[46px] items-center justify-center rounded-2xl bg-[#EEF4FB]">
                  <Plus className="h-5 w-5 text-[#0D2444]" />
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="text-[15px] font-medium leading-[1.9] text-slate-600">
                  {item.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}