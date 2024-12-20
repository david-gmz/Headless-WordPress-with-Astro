import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    // ...
    integrations: [tailwind()],
    output: "server",
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
