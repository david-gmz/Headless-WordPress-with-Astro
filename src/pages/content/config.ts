import { defineCollection, z } from "astro:content";
const reflexionCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        eventDate: z.date(),
        author: z.string(),
        featuredImage: z.string(),
        tags: z.array(z.string())
    })
});

export const collections = {
    reflexiones: reflexionCollection
};
