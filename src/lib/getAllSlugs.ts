import { wpQuery } from "./wpQuery";

export async function getAllSlugs() {
    const data = await wpQuery({
        query: `
          query AllSlugs {
          posts {
            nodes {
              slug
            }
          }
        }
        `
    });
    return data.posts.nodes;
}