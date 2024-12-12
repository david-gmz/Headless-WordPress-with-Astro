import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    // ...
    integrations: [tailwind()],
    output: "server",
    site: "http://viajoenbici.local/", // important for pagination
    pages: {
        // Optional: customize pagination routes
        pagination: {
            routes: {
                first: "/", // first page
                page: "/page/:page" // subsequent pages
            }
        }
    },
    image: {
        domains: ["astro.build", "http://viajoenbici.local/"],
        remotePatterns: [{ protocol: "http" }]
    },
    env: {
        schema: {
            API_BASE_URL: envField.string({
                context: "server",
                access: "public"
            })
        }
    }
});
