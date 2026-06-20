import Link from "next/link";

import BlogCard from "./BlogCard";
import SectionTitle from "./SectionTitle";
import { Post } from "./types";

type SearchResultsSectionProps = {
  searchQuery: string;
  searchFilteredPosts: Post[];
};

export default function SearchResultsSection({
  searchQuery,
  searchFilteredPosts,
}: SearchResultsSectionProps) {
  if (!searchQuery) return null;

  return (
    <section
      id="search-results"
      className="scroll-mt-28 px-5 pb-10 pt-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 rounded-[34px] border border-[#DCE7F5] bg-white/80 p-6 shadow-xl shadow-[#0D2444]/10 backdrop-blur md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Search Results"
            title="Results for"
            gradient={`“${searchQuery}”`}
            text={`Found ${searchFilteredPosts.length} blog${
              searchFilteredPosts.length === 1 ? "" : "s"
            } matching your search.`}
          />

          <Link
            href="/blog"
            className="inline-flex w-fit rounded-full border border-[#C9DAF0] bg-white px-6 py-3 text-sm font-black text-[#0D2444] transition hover:bg-[#EAF2FF]"
          >
            Clear Search
          </Link>
        </div>

        {searchFilteredPosts.length === 0 ? (
          <div className="rounded-[30px] border border-dashed border-[#C9DAF0] bg-white p-10 text-center">
            <h3 className="text-2xl font-black text-[#0D2444]">
              No blogs found.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-[#53677F]">
              Try searching another topic like PR, SEO, Events, AI Video,
              Celebrity Management or Website Development.
            </p>
          </div>
        ) : (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {searchFilteredPosts.slice(0, 9).map((post, index) => (
              <BlogCard
                key={post._id}
                post={post}
                number={index + 1}
                label="Search"
                footer="Search Match"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
