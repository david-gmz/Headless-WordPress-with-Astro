import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    // ...
    integrations: [tailwind()],
    image: {
        domains: ["astro.build", "http://viajoenbici.local/"],
        remotePatterns: [{ protocol: "http" }]
    }
});
