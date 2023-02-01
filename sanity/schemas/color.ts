import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'color',
    title: 'Color',
    type: 'document',
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
        }),
    ],
})
