import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current) &&
    defined(publishedAt) &&
    dateTime(publishedAt) <= dateTime($now)
  ] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    authorName,
    mainImage,
    publishedAt,
    seoKeywords,

    isFeatured,
    featuredOrder,

    isMostRead,
    mostReadOrder,
    readCount,
    viewCount,

    "bodyText": pt::text(body),
    "excerpt": coalesce(excerpt, pt::text(body)[0...170])
  }
`);

export const POST_QUERY = defineQuery(`
  *[
    _type == "post" &&
    slug.current == $slug &&
    defined(publishedAt) &&
    dateTime(publishedAt) <= dateTime($now)
  ][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    authorName,
    mainImage,
    publishedAt,
    seoTitle,
    seoDescription,
    focusKeyword,
    seoKeywords,
    canonicalUrl,
    viewCount,

    "bodyText": pt::text(body),
    "excerpt": coalesce(excerpt, pt::text(body)[0...170]),
    body
  }
`);