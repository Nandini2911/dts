export type Post = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  authorName?: string;
  excerpt?: string;
  bodyText?: string;
  mainImage?: any;
  publishedAt?: string;
  seoKeywords?: string[];

  isFeatured?: boolean;
  featuredOrder?: number;

  isMostRead?: boolean;
  mostReadOrder?: number;
  readCount?: string;
  viewCount?: number;
};

export type BlogPageProps = {
  searchParams?: Promise<{
    q?: string;
    category?: string;
    page?: string;
    fpage?: string;
    mrpage?: string;
  }>;
};
