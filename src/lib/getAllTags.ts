import { wpQuery } from "./wpQuery";

export async function getAllTags() {
    const data = await wpQuery({
        query: `
          query AllTags {
            tags {
              nodes {
                name
                slug
                description
              }
            }
          }
        `
    });
    return data.tags.nodes;
}