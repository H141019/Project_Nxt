const schema = {
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      Option: { source: "title" },
    },
    {
      name: "downloadLink",
      title: "Download Link",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      Option: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      option: {
        list: ["frontend", "backend", "next 13", "fullstack", "other"],
      },
    },
  ],
};

export default schema;
