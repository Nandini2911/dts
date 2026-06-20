import Link from "next/link";

import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import SectionTitle from "./SectionTitle";
import { Post } from "./types";


type MostReadBlogsSectionProps = {
  mostReadBlogs: Post[];
  paginatedMostReadBlogs: Post[];
  safeMostReadPage: number;
  mostReadPostsPerPage: number;
  mostReadTotalPages: number;
  getMostReadPaginationUrl: (page: number) => string;
};

export default function MostReadBlogsSection({
  mostReadBlogs,
  paginatedMostReadBlogs,
  safeMostReadPage,
  mostReadPostsPerPage,
  mostReadTotalPages,
  getMostReadPaginationUrl,
}: MostReadBlogsSectionProps) {
  return (
    <section
      id="most-read-blogs"
      className="scroll-mt-28 px-5 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Most Read Blogs"
            title="Most Loved DTS"
            gradient="Insights & Articles"
            text="Only blogs selected in Sanity as most read will appear here."
          />

          <Link
            href="/blog#blog-results"
            className="inline-flex w-fit rounded-full bg-[#0D2444] px-6 py-3 text-sm font-black text-white transition hover:bg-[#315E91]"
          >
            Explore All Blogs →
          </Link>
        </div>

        {mostReadBlogs.length === 0 ? (
          <div className="rounded-[34px] border border-dashed border-[#C9DAF0] bg-white/80 p-10 text-center shadow-sm">
            <h3 className="text-2xl font-black text-[#0D2444]">
              No most read blogs selected yet.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-[#53677F]">
              Go to Sanity Studio, open any blog, turn on “Show in Most Read
              Blogs?” and publish it.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {paginatedMostReadBlogs.map((post, index) => (
                <BlogCard
                  key={post._id}
                  post={post}
                  number={
                    (safeMostReadPage - 1) * mostReadPostsPerPage + index + 1
                  }
                  label="Most Read"
                  footer="Reader Favourite"
                  showReadCount
                />
              ))}
            </div>

            <Pagination
              totalPages={mostReadTotalPages}
              currentPage={safeMostReadPage}
              getUrl={getMostReadPaginationUrl}
            />
          </>
        )}
      </div>
    </section>
  );
}
