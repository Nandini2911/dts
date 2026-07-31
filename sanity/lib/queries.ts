import { defineQuery } from "next-sanity";


// ======================================================
// ALL BLOG POSTS
// ======================================================

export const POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current) &&
    dateTime(
      coalesce(publishedAt, _createdAt)
    ) <= dateTime($now)
  ]
  | order(
      coalesce(publishedAt, _createdAt) desc
    )
  {
    _id,
    title,
    "slug": slug.current,
    category,
    authorName,
    mainImage,

    "publishedAt": coalesce(
      publishedAt,
      _createdAt
    ),

    seoKeywords,

    isFeatured,
    featuredOrder,

    isMostRead,
    mostReadOrder,
    readCount,
    viewCount,

    "bodyText": pt::text(body),

    "excerpt": coalesce(
      excerpt,
      pt::text(body)[0...170]
    )
  }
`);


// ======================================================
// SINGLE BLOG POST
// ======================================================

export const POST_QUERY = defineQuery(`
  *[
    _type == "post" &&
    slug.current == $slug &&
    dateTime(
      coalesce(publishedAt, _createdAt)
    ) <= dateTime($now)
  ][0] {
    _id,
    _updatedAt,

    title,
    "slug": slug.current,
    category,
    authorName,
    mainImage,

    "publishedAt": coalesce(
      publishedAt,
      _createdAt
    ),

    seoTitle,
    seoDescription,
    focusKeyword,
    seoKeywords,
    canonicalUrl,
    viewCount,

    "bodyText": pt::text(body),

    "excerpt": coalesce(
      excerpt,
      pt::text(body)[0...170]
    ),

    body
  }
`);


// ======================================================
// BLOG SITEMAP
// ======================================================

export const BLOG_SITEMAP_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current) &&
    dateTime(
      coalesce(publishedAt, _createdAt)
    ) <= dateTime($now)
  ]
  | order(
      coalesce(publishedAt, _createdAt) desc
    )
  {
    "slug": slug.current,

    "lastModified": coalesce(
      _updatedAt,
      publishedAt,
      _createdAt
    )
  }
`);