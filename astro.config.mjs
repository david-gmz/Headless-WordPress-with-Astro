import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./remark-reading-time.mts";
import remarkHeadingId from "remark-heading-id";

export default defineConfig({
    integrations: [tailwind()],
    output: "static",
    markdown: {
        remarkPlugins: [remarkReadingTime, remarkHeadingId]
    }
});
