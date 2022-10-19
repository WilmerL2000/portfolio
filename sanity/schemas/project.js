export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of project",
      type: "string",
    },
    {
      name: "projectImage",
      title: "ProjectImage",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    },
    {
      name: "linkToGit",
      title: "LinkToGit",
      type: "url",
    },
  ],
}
