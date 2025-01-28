import { defineCollection, z } from "astro:content";

// Define the shared schema
const baseSchema = z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default("David Gómez B."),
    featuredImage: z.object({
        srcUrl: z.string(),
        altText: z.string()
    }),
    excerpt: z.string().optional(),
    tags: z.array(z.string())
});

// Reuse the shared schema in collections
const reflexiones = defineCollection({
    type: "content",
    schema: baseSchema
});

const tutoriales = defineCollection({
    type: "content",
    schema: baseSchema.extend({
        difficulty: z.enum(["principiante", "intermedio", "avanzado"]).optional()
    })
});

const bitacoras = defineCollection({
    type: "content",
    schema: baseSchema.extend({
        location: z.object({
            place: z.string(),
            coordinates: z.array(
                z.object({
                    lat: z.number(),
                    lon: z.number()
                })
            )
        }),
    })
});


export const collections = {
    reflexiones, bitacoras, tutoriales
};
