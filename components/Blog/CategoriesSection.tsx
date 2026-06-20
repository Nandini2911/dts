import Link from "next/link";
import { blogCategories } from "./blog-data";
import SectionTitle from "./SectionTitle";


type CategoriesSectionProps = {
  selectedCategory: string;
  hasActiveFilter: boolean;
  getBlogUrl: (category: string) => string;
};

export default function CategoriesSection({
  selectedCategory,
  hasActiveFilter,
  getBlogUrl,
}: CategoriesSectionProps) {
  return (
    <section className="relative px-5 py-14 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#DDEBFF_0%,transparent_34%),radial-gradient(circle_at_bottom_right,#C7D7EC_0%,transparent_30%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[44px] border border-white/70 bg-white/70 p-6 shadow-2xl shadow-[#0D2444]/10 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#6288B9]/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0D2444]/10 blur-3xl" />

          <div className="relative z-10 mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Blog Categories"
              title="Explore insights by"
              gradient="category & strategy."
              text="Click any category and jump directly to related DTS blog cards below."
            />

            {hasActiveFilter && (
              <Link
                href="/blog#blog-results"
                className="inline-flex rounded-full border border-[#C9DAF0] bg-white px-6 py-3 text-sm font-black text-[#0D2444] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#EAF2FF] hover:shadow-lg"
              >
                Clear Category
              </Link>
            )}
          </div>

          <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {blogCategories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <Link
                  key={category}
                  href={getBlogUrl(category)}
                  className={`group relative overflow-hidden rounded-[24px] border p-5 transition duration-300 hover:-translate-y-1 ${
                    isActive
                      ? "border-[#0D2444] bg-[#0D2444] text-white shadow-2xl shadow-[#0D2444]/25"
                      : "border-[#DCE7F5] bg-white/85 text-[#0D2444] shadow-sm hover:border-[#6288B9] hover:bg-white hover:shadow-xl"
                  }`}
                >
                  <div className="relative z-10">
                    <div className="mb-7 flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${
                          isActive
                            ? "border border-white/25 bg-white/10 text-white"
                            : "border border-[#C9DAF0] bg-[#F7FAFF] text-[#315E91]"
                        }`}
                      >
                        Category
                      </span>

                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-black ${
                          isActive
                            ? "bg-white text-[#0D2444]"
                            : "bg-[#EAF2FF] text-[#315E91]"
                        }`}
                      >
                        ↓
                      </span>
                    </div>

                    <h3
                      className={`text-xl font-black leading-tight tracking-[-0.04em] ${
                        isActive ? "text-white" : "text-[#0D2444]"
                      }`}
                      style={{
                        fontFamily: "New York, ui-serif, Georgia, serif",
                      }}
                    >
                      {category}
                    </h3>

                    <p
                      className={`mt-4 text-sm leading-6 ${
                        isActive ? "text-white/75" : "text-[#53677F]"
                      }`}
                    >
                      {category === "All"
                        ? "Explore all DTS blogs, guides and marketing insights."
                        : `Explore articles and insights related to ${category}.`}
                    </p>

                    <p
                      className={`mt-5 text-xs font-black uppercase tracking-[0.18em] ${
                        isActive ? "text-white" : "text-[#315E91]"
                      }`}
                    >
                      {isActive ? "Selected" : "View Blogs"}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
