import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { getReadLabel, formatDate } from "./blog-utils";
import { Post } from "./types";

function getReadTime(post: {
  bodyText?: string;
  excerpt?: string;
}) {
  const text = `${post.bodyText || ""} ${post.excerpt || ""}`.trim();

  if (!text) return "3 min read";

  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));

  return `${minutes} min read`;
}



type BlogCardProps = {
  post: Post;
  number?: number;
  label?: string;
  footer?: string;
  showReadCount?: boolean;
};

export default function BlogCard({
  post,
  number,
  label = "DTS Blog",
  footer = "Read",
  showReadCount = false,
}: {
  post: Post;
  number?: number;
  label?: string;
  footer?: string;
  showReadCount?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group overflow-hidden rounded-[32px] border border-[#DCE7F5] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0D2444]/10"
    >
      <div className="relative h-60 w-full overflow-hidden bg-[#DDE8F7]">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).width(900).height(650).url()}
            alt={post.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#0D2444] via-[#315E91] to-[#6288B9] text-2xl font-black text-white">
            DTS Blog
          </div>
        )}

       

        {showReadCount && (
          <div className="absolute right-5 top-5 rounded-full bg-[#0D2444] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg">
            {getReadLabel(post)}
          </div>
        )}
      </div>

      <div className="p-7">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#315E91]">
            {post.category || "DTS Insight"}
          </span>
        </div>

        <h3
          className="text-2xl font-black leading-tight tracking-[-0.04em] text-[#0D2444] transition group-hover:text-[#315E91]"
          style={{
            fontFamily: "New York, ui-serif, Georgia, serif",
          }}
        >
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#53677F]">
            {post.excerpt}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#E5EEF9] pt-5">
          <span className="rounded-full bg-[#F7FAFF] px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#0D2444]">
            {post.authorName || "Double Trouble Studio"}
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#7B8EA5]">
            {formatDate(post.publishedAt)}
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#7B8EA5]">
            {getReadTime(post)}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          

          <p className="text-sm font-black text-[#315E91]">Read →</p>
        </div>
      </div>
    </Link>
  );
}