import { wpQuery } from "./wpQuery";
type Items = "properties" | "posts";

/**
 * Fetches all items (either properties or posts) from a WordPress GraphQL endpoint
 *
 * @param items - A string parameter that must be either "properties" or "posts"
 *               to determine which type of content to fetch
 *
 * @returns Promise<Array> - Returns a promise that resolves to an array of nodes containing:
 *   For properties:
 *     - propertyFields: {
 *         latitude: number
 *         longitude: number
 *         price: number
 *         squareFootage: number
 *       }
 *     - title: string (rendered format)
 *     - slug: string
 *     - featuredImage: {
 *         node: {
 *           sourceUrl: string
 *           altText: string
 *         }
 *       }
 *
 *   For posts:
 *     - slug: string
 *     - date: string
 *     - title: string
 *     - excerpt: string
 *     - featuredImage: {
 *         node: {
 *           sourceUrl: string
 *           altText: string
 *         }
 *       }
 *
 * @example
 * // Fetch all properties
 * const properties = await getAllItems("properties");
 *
 * // Fetch all posts
 * const posts = await getAllItems("posts");
 *
 * @throws Will throw an error if the GraphQL query fails or if the wpQuery function fails
 */
export async function getAllItems(items: Items) {
    const query =
        items === "properties"
            ? `
          query AllProperties {
          properties {
            nodes {
              propertyFields {
                latitude
                longitude
                price
                squareFootage
              }
              title(format: RENDERED)
              slug
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
        `
            : `
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
        `;
    const data = await wpQuery({ query });
    if (!data) {
        throw new Error("Failed to fetch data from WordPress");
    } else if (!data[items] || !data[items].nodes) {
        throw new Error(
            `Invalid items parameter or no nodes found for ${items}`
        );
    }

    return data[items].nodes;
}
