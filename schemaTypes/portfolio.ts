import {defineField, defineType} from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishDate',
      type: 'date',
      title: 'Publish Date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descriptionExtra',
      type: 'array',
      title: 'Description Extra',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'git',
      type: 'string',
      title: 'Git',
    }),
    defineField({
      name: 'demo',
      type: 'url',
      title: 'Demo',
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Image Gallery',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    }),
  ],
})
