// Source: https://docs.astro.build/en/tutorials/add-content-collections/#create-a-collection-for-your-blog-posts

// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    postTile: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    cover: z.object({
      name: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};