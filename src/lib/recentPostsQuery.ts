import { wpQuery } from "./wpQuery";

export const recentPostsQuery = async () => {
    const data = await wpQuery({
        query: `
        query RecentPosts {
          posts(where: {orderby: {field: DATE, order: DESC}}, first:3) {
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
