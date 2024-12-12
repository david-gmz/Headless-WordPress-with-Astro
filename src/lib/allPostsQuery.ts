import { wpQuery } from "./wpQuery";

export const allPostsQuery = async () => {
    const data = await wpQuery({
        query: `
        query AllPosts {
          posts {
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
};
