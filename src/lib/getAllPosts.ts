import { wpQuery } from "./wpQuery";

export async function getAllPosts() {
    const data = await wpQuery({
        query: `
          query AllPosts {
          posts(where: {orderby: {field: DATE, order: DESC}}) {
            nodes {
              slug
              date
              title
              excerpt
              featuredImage {
                node {
                  sourceUrl,
                  altText
                }
              }
            }
          }
        }
        `
    });
    return data.posts.nodes;
}