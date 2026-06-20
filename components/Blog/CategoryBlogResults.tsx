import Link from "next/link";


import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import SectionTitle from "./SectionTitle";
import { Post } from "./types";


type CategoryBlogResultsProps = {
  hasActiveFilter: boolean;
  selectedCategory: string;
  categoryPosts: Post[];
  paginatedPosts: Post[];
  safeCurrentPage: number;
  postsPerPage: number;
  totalPages: number;
  getPaginationUrl: (page: number) => string;
};

export default function CategoryBlogResults({
  hasActiveFilter,
  selectedCategory,
  categoryPosts,
  paginatedPosts,
  safeCurrentPage,
  postsPerPage,
  totalPages,
  getPaginationUrl,
}: CategoryBlogResultsProps) {
  return (
    <section
      id="blog-results"
      className="scroll-mt-28 px-5 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionTitle
            eyebrow={hasActiveFilter ? "Selected Category Blogs" : "All Articles"}
            title={
              selectedCategory !== "All"
                ? `${selectedCategory} Insights`
                : "Explore All DTS Blogs"
            }
            text={
              selectedCategory !== "All"
                ? `Showing blogs related to ${selectedCategory}.`
                : "Explore DTS insights across PR, celebrity management, events, websites, SEO, digital marketing and AI video production."
            }
          />

          {hasActiveFilter && (
            <Link
              href="/blog#blog-results"
              className="inline-flex w-fit rounded-full border border-[#C9DAF0] bg-white px-6 py-3 text-sm font-black text-[#0D2444] transition hover:bg-[#EAF2FF]"
            >
              Clear Category
            </Link>
          )}
        </div>

        {categoryPosts.length === 0 ? (
          <div className="rounded-[34px] border border-dashed border-[#C9DAF0] bg-white/80 p-10 text-center shadow-sm">
            <h3 className="text-2xl font-black text-[#0D2444]">
              No blogs found in this category.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-[#53677F]">
              Select another category or publish blogs in this category from
              Sanity Studio.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post, index) => (
                <BlogCard
                  key={post._id}
                  post={post}
                  number={(safeCurrentPage - 1) * postsPerPage + index + 1}
                  label="Article"
                  footer="DTS Article"
                />
              ))}
            </div>

            <Pagination
              totalPages={totalPages}
              currentPage={safeCurrentPage}
              getUrl={getPaginationUrl}
            />
          </>
        )}
      </div>
    </section>
  );
}
