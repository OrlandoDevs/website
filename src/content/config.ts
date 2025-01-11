import { defineCollection, z } from "astro:content";

const groupCollection = defineCollection({
  schema: z.object({
    coordinators: z.array(
      z.object({ name: z.string(), image: z.string(), connect: z.string() }),
    ),
    groupLogo: z.string(),
    title: z.string(),
  }),
});

export const collections = {
  groups: groupCollection,
};
