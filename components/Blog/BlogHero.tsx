import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "./types";
import { formatDate } from "./blog-utils";


type BlogHeroProps = {
  recentPost?: Post;
  searchQuery: string;
};

export default function BlogHero({ recentPost, searchQuery }: BlogHeroProps) {
  return (
    <section className="relative isolate px-5 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#DDEBFF] blur-3xl" />
      <div className="absolute right-0 top-32 -z-10 h-72 w-72 rounded-full bg-[#BFD7F6] opacity-60 blur-3xl" />
      <div className="absolute left-0 top-60 -z-10 h-72 w-72 rounded-full bg-white opacity-80 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
          <div className="text-center lg:text-left">
            <p className="mb-5 inline-flex rounded-full border border-[#C9DAF0] bg-white/80 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#315E91] shadow-sm backdrop-blur">
              Double Trouble Studio
            </p>

            <h1
              className="text-[42px] font-black leading-[0.95] tracking-[-0.07em] text-[#0D2444] sm:text-6xl md:text-7xl lg:text-8xl"
              style={{
                fontFamily: "New York, ui-serif, Georgia, serif",
              }}
            >
              From Real Projects to
              <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
                Real Insights.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#38506D] sm:text-lg lg:mx-0 lg:max-w-2xl">
              Explore how DTS executes PR, celebrity management, events, web,
              ads, social media and AI marketing for brands that want
              visibility, credibility and growth.
            </p>

            <form
              action="/blog#search-results"
              method="GET"
              className="mx-auto mt-9 flex max-w-2xl flex-col gap-3 rounded-[26px] border border-[#D7E5F6] bg-white p-2 shadow-xl shadow-[#173B6412] sm:flex-row lg:mx-0"
            >
              <input
                name="q"
                defaultValue={searchQuery}
                placeholder="Search insights: PR, AI, Events, Web..."
                className="min-h-14 flex-1 rounded-[20px] border-0 bg-[#F7FAFF] px-5 text-sm font-semibold text-[#0D2444] outline-none placeholder:text-[#7B8EA5]"
              />

              <button
                type="submit"
                className="min-h-14 rounded-[20px] bg-[#0D2444] px-7 text-sm font-black text-white transition hover:bg-[#315E91]"
              >
                Search
              </button>
            </form>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="#featured-blogs"
                className="rounded-full bg-[#0D2444] px-6 py-3 text-sm font-black text-white transition hover:bg-[#315E91]"
              >
                Featured Reads
              </Link>

              <Link
                href="#blog-results"
                className="rounded-full border border-[#C9DAF0] bg-white px-6 py-3 text-sm font-black text-[#0D2444] transition hover:bg-[#EAF2FF]"
              >
                Explore All Blogs
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 -z-10 h-40 w-40 rounded-full bg-[#315E91]/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full bg-[#DDEBFF] blur-3xl" />

            <div className="rounded-[36px] border border-[#D7E5F6] bg-white/85 p-4 shadow-2xl shadow-[#173B6414] backdrop-blur">
              <div className="mb-5 flex items-center justify-between gap-5 px-2 pt-2">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6288B9]">
                    Latest Read
                  </p>

                  <h2
                    className="mt-2 text-3xl font-black tracking-[-0.05em] text-[#0D2444]"
                    style={{
                      fontFamily: "New York, ui-serif, Georgia, serif",
                    }}
                  >
                    Recent Post
                  </h2>
                </div>

                <Link
                  href="/blog#blog-results"
                  className="hidden rounded-full bg-[#EAF2FF] px-5 py-3 text-xs font-black text-[#315E91] transition hover:bg-[#DDEBFF] sm:inline-flex"
                >
                  View All
                </Link>
              </div>

              {!recentPost ? (
                <div className="rounded-[28px] border border-dashed border-[#C9DAF0] bg-[#F7FAFF] p-8 text-center">
                  <h3 className="text-xl font-black text-[#0D2444]">
                    No recent post yet.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#53677F]">
                    Publish blogs from Sanity Studio and the latest blog will
                    appear here.
                  </p>
                </div>
              ) : (
                <Link
                  href={`/blog/${recentPost.slug}`}
                  className="group block overflow-hidden rounded-[30px] border border-[#E5EEF9] bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0D2444]/10"
                >
                  <div className="relative h-[300px] w-full overflow-hidden rounded-t-[30px] bg-[#DDE8F7] sm:h-[360px]">
                    {recentPost.mainImage ? (
                      <Image
                        src={urlFor(recentPost.mainImage)
                          .width(1200)
                          .height(850)
                          .url()}
                        alt={recentPost.title}
                        fill
                        priority
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#0D2444] via-[#315E91] to-[#6288B9] text-4xl font-black text-white">
                        DTS Blog
                      </div>
                    )}

                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#315E91] backdrop-blur">
                      Latest
                    </div>

                    <div className="absolute right-5 top-5 rounded-full bg-[#0D2444] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg">
                      {recentPost.category || "DTS Insight"}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#315E91]">
                        {recentPost.category || "DTS Insight"}
                      </span>

                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7B8EA5]">
                        {formatDate(recentPost.publishedAt)}
                      </span>
                    </div>

                    <h3
                      className="text-3xl font-black leading-tight tracking-[-0.05em] text-[#0D2444] transition group-hover:text-[#315E91] sm:text-4xl"
                      style={{
                        fontFamily: "New York, ui-serif, Georgia, serif",
                      }}
                    >
                      {recentPost.title}
                    </h3>

                    {recentPost.excerpt && (
                      <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#53677F]">
                        {recentPost.excerpt}
                      </p>
                    )}

                    <div className="mt-7 flex items-center justify-between border-t border-[#E5EEF9] pt-5">
                      <div>
                        <p className="text-sm font-black text-[#0D2444]">
                          Double Trouble Studio
                        </p>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#7B8EA5]">
                          Latest Article
                        </p>
                      </div>

                      <p className="text-sm font-black text-[#315E91]">
                        Read →
                      </p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
