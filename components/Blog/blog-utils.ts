import { Post } from "./types";


export function formatDate(date?: string) {
  if (!date) return "DTS Insight";

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function getReadLabel(post: Post) {
  if (post.readCount) return post.readCount;

  return `${(post.viewCount || 0).toLocaleString("en-IN")} reads`;
}
