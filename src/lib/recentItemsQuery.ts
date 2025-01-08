import { wpQuery } from "./wpQuery";
type Items = "bitacorasDeViaje" | "tutoriales";
export const recentItemsQuery = async (items:Items) => {
    const data = await wpQuery({
        query: `
        query RecentPosts {
          ${items}(where: {orderby: {field: DATE, order: DESC}}, first:3) {
            nodes {
              slug
              date
              title(format: RENDERED)
              summary {
                shortContent
              }
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
    return data[items].nodes;
};
