import Link from "next/link";
import { resources } from "./blog-data";
import SectionTitle from "./SectionTitle";


type ResourcesSectionProps = {
  getBlogUrl: (category: string) => string;
};

export default function ResourcesSection({ getBlogUrl }: ResourcesSectionProps) {
  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 text-center">
          <SectionTitle
            eyebrow="Resources to Explore"
            title="Practical Playbooks for Brands"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-[#DDE8F7] bg-white p-7 shadow-sm"
            >
              <h3
                className="text-xl font-black tracking-[-0.03em]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#53677F]">
                {item.text}
              </p>

              <Link
                href={getBlogUrl(item.category)}
                className="mt-6 inline-flex text-sm font-black text-[#315E91]"
              >
                Explore Articles →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
