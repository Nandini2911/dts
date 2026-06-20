import Link from "next/link";

import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import SectionTitle from "./SectionTitle";
import { Post } from "./types";


type FeaturedBlogsSectionProps = {
  selectedFeaturedBlogs: Post[];
  paginatedFeaturedPosts: Post[];
  safeFeaturedPage: number;
  featuredPostsPerPage: number;
  featuredTotalPages: number;
  getFeaturedPaginationUrl: (page: number) => string;
};

export default function FeaturedBlogsSection({
  selectedFeaturedBlogs,
  paginatedFeaturedPosts,
  safeFeaturedPage,
  featuredPostsPerPage,
  featuredTotalPages,
  getFeaturedPaginationUrl,
}: FeaturedBlogsSectionProps) {
  return (
    <section
      id="featured-blogs"
      className="scroll-mt-28 px-5 py-14 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Featured Blogs"
            title="Featured DTS Reads"
            text="Only blogs selected in Sanity as featured will appear here."
          />

          <Link
            href="#blog-results"
            className="inline-flex w-fit rounded-full bg-[#0D2444] px-6 py-3 text-sm font-black text-white transition hover:bg-[#315E91]"
          >
            View Category Blogs →
          </Link>
        </div>

        {selectedFeaturedBlogs.length === 0 ? (
          <div className="rounded-[34px] border border-[#DCE7F5] bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-black">
              No featured blogs selected yet.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-[#53677F]">
              Go to Sanity Studio, open any blog, turn on “Show in Featured
              Blogs?” and publish it.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-7 md:grid-cols-3 lg:grid-cols-2">
              {paginatedFeaturedPosts.map((post, index) => (
                <BlogCard
                  key={post._id}
                  post={post}
                  number={
                    (safeFeaturedPage - 1) * featuredPostsPerPage + index + 1
                  }
                  label="Featured"
                  footer="Featured Read"
                />
              ))}
            </div>

            <Pagination
              totalPages={featuredTotalPages}
              currentPage={safeFeaturedPage}
              getUrl={getFeaturedPaginationUrl}
            />
          </>
        )}
      </div>
    </section>
  );
}
