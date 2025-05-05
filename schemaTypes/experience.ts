import {defineField, defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      type: 'string',
      title: 'Company Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyUrl',
      type: 'url',
      title: 'Company URL',
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'positions',
      type: 'array',
      title: 'Positions Held',
      of: [{type: 'position'}], // <-- no anonymous object anymore
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'publishDate',
      type: 'date',
      title: 'Publish Date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Image Gallery',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
})

export const positionType = defineType({
  name: 'position',
  type: 'object',
  title: 'Position',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      type: 'date',
      title: 'End Date',
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{type: 'descriptionItem'}], // <-- We'll define this next
      validation: (rule) => rule.required(),
    }),
  ],
})

export const descriptionItemType = defineType({
  name: 'descriptionItem',
  type: 'object',
  title: 'Description Item',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subpoints',
      type: 'array',
      title: 'Subpoints',
      of: [{type: 'string'}],
    }),
  ],
})
