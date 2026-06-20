import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Blog Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Blog URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    

    defineField({
      name: 'category',
      title: 'Blog Category',
      type: 'string',
      options: {
        list: [
          { title: 'PR & Media', value: 'PR & Media' },
          { title: 'Celebrity Management', value: 'Celebrity Management' },
          { title: 'Event Management', value: 'Event Management' },
          { title: 'Guest Management', value: 'Guest Management' },
          { title: 'Digital Marketing', value: 'Digital Marketing' },
          { title: 'Social Media Marketing', value: 'Social Media Marketing' },
          { title: 'Website Development', value: 'Website Development' },
          { title: 'SEO', value: 'SEO' },
          { title: 'AI Video & VFX', value: 'AI Video & VFX' },
          { title: 'Brand Strategy', value: 'Brand Strategy' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.max(180).warning('Keep this under 180 characters for SEO.'),
    }),

    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for SEO and accessibility.',
        }),
      ],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description:
        'Custom title for Google. If empty, blog title will be used.',
      validation: (Rule) =>
        Rule.max(60).warning('SEO title should ideally be under 60 characters.'),
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description:
        'Custom meta description for Google. If empty, short description will be used.',
      validation: (Rule) =>
        Rule.max(160).warning(
          'SEO description should ideally be under 160 characters.'
        ),
    }),
    defineField({
  name: 'focusKeyword',
  title: 'Focus Keyword',
  type: 'string',
  description:
    'Main SEO keyword for this blog. Example: Digital Marketing Agency in India',
}),

defineField({
  name: 'seoKeywords',
  title: 'SEO Keywords',
  type: 'array',
  description:
    'Add related SEO keywords for this blog.',
  of: [{ type: 'string' }],
  options: {
    layout: 'tags',
  },
}),
defineField({
  name: "authorName",
  title: "Author Name",
  type: "string",
  initialValue: "Double Trouble Studio",
  description: "Author name shown on blog cards and blog detail page.",
}),

defineField({
  name: 'canonicalUrl',
  title: 'Canonical URL',
  type: 'url',
  description:
    'Optional. Use only if this blog has a preferred canonical URL.',
}),
defineField({
  name: 'isFeatured',
  title: 'Show in Featured Blogs?',
  type: 'boolean',
  initialValue: false,
  description: 'Turn this ON if you want this blog to appear in Featured Blogs section.',
}),

defineField({
  name: 'featuredOrder',
  title: 'Featured Order',
  type: 'number',
  description: 'Lower number appears first. Example: 1, 2, 3.',
  hidden: ({ document }) => !document?.isFeatured,
}),

defineField({
  name: 'isMostRead',
  title: 'Show in Most Read Blogs?',
  type: 'boolean',
  initialValue: false,
  description: 'Turn this ON if you want this blog to appear in Most Read section.',
}),

defineField({
  name: 'mostReadOrder',
  title: 'Most Read Order',
  type: 'number',
  description: 'Lower number appears first. Example: 1, 2, 3.',
  hidden: ({ document }) => !document?.isMostRead,
}),

defineField({
  name: 'readCount',
  title: 'Read Count Label',
  type: 'string',
  description: 'Optional label. Example: 2.4K reads, 850 reads, 10K reads.',
  hidden: ({ document }) => !document?.isMostRead,
}),
defineField({
  name: 'viewCount',
  title: 'Total Reads',
  type: 'number',
  initialValue: 0,
  readOnly: true,
  description: 'Automatically updated when users read this blog.',
}),
    defineField({
      name: 'body',
      title: 'Blog Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Describe this blog image for SEO.',
            }),
          ],
        },
      ],
    }),
  ],
  
  

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
  },
})