import { API_BASE_URL } from "./apiUrl";

export const singlePostResponse = await fetch(API_BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        query: `
        query AllSlugs {
          posts {
            nodes {
              slug
            }
          }
        }
        `
    })
});
